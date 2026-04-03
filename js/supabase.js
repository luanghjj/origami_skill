/* ═══════════════════════════════════════
   SUPABASE CONFIG
═══════════════════════════════════════ */
const SB_URL = 'https://bjhdiiimrhvgnegvcpci.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqaGRpaWltcmh2Z25lZ3ZjcGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMTkzNTEsImV4cCI6MjA5MDY5NTM1MX0.xtra1oFgbM0a6rT6eOEaPO0_j0mpZnyGKYFFbPkK9nc';
const sb = window.supabase.createClient(SB_URL, SB_KEY);

/* ═══════════════════════════════════════
   DRINK IMAGES — Supabase Storage + table
═══════════════════════════════════════ */
const DRINK_IMAGES_KEY = 'origami_drink_images';
const IMG_BUCKET = 'drink-images';

// Local cache: { drinkName: url }
function loadDrinkImages() {
  try { return JSON.parse(localStorage.getItem(DRINK_IMAGES_KEY) || '{}'); } catch { return {}; }
}
function saveDrinkImages(map) {
  localStorage.setItem(DRINK_IMAGES_KEY, JSON.stringify(map));
}

// Apply cached images to DRINKS array
function applyImagesToDrinks() {
  const imgs = loadDrinkImages();
  DRINKS.forEach(d => {
    if (imgs[d.name]) d.img = imgs[d.name];
  });
}

// Upload image to Supabase Storage + save URL in drink_images table
async function uploadDrinkImage(drinkName) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;
    // Max 2MB
    if (file.size > 2 * 1024 * 1024) {
      showToast(t('toast_img_max'), 'red'); return;
    }
    showToast(t('toast_img_uploading'), '');
    try {
      const ext = file.name.split('.').pop().toLowerCase() || 'jpg';
      const path = `img_${Date.now()}.${ext}`;

      // Delete old file if exists
      const imgs = loadDrinkImages();
      if (imgs[drinkName]) {
        try {
          const oldUrl = imgs[drinkName];
          const parts = oldUrl.split('/drink-images/');
          if (parts[1]) await sb.storage.from(IMG_BUCKET).remove([parts[1]]);
        } catch(e2) { /* ignore old delete error */ }
      }

      // Upload new
      const { data, error } = await sb.storage.from(IMG_BUCKET).upload(path, file, {
        cacheControl: '31536000',
        contentType: file.type,
        upsert: true
      });
      if (error) throw new Error('Storage: ' + error.message);

      // Get public URL
      const { data: urlData } = sb.storage.from(IMG_BUCKET).getPublicUrl(path);
      const publicUrl = urlData.publicUrl;

      // Save to drink_images table
      const { error: dbErr } = await sb.from('drink_images').upsert({
        drink_name: drinkName,
        image_url: publicUrl,
        uploaded_by: getCurrentPlayer()
      }, { onConflict: 'drink_name' });
      if (dbErr) throw new Error('DB: ' + dbErr.message);

      // Update local cache
      imgs[drinkName] = publicUrl;
      saveDrinkImages(imgs);

      // Update DRINKS array
      const drink = DRINKS.find(d => d.name === drinkName);
      if (drink) drink.img = publicUrl;

      renderGrid(currentBrowseCat, currentSearch);
      showToast(t('toast_img_done'), 'green');
    } catch (e) {
      console.warn('Image upload failed:', e);
      showToast('Lỗi tải ảnh: ' + (e.message || e), 'red');
    }
  };
  input.click();
}

// Delete image
async function deleteDrinkImage(drinkName) {
  if (!confirm(t('confirm_del_img', {name: drinkName}))) return;
  try {
    const imgs = loadDrinkImages();
    if (imgs[drinkName]) {
      const parts = imgs[drinkName].split('/drink-images/');
      if (parts[1]) await sb.storage.from(IMG_BUCKET).remove([parts[1]]);
    }
    await sb.from('drink_images').delete().eq('drink_name', drinkName);
    delete imgs[drinkName];
    saveDrinkImages(imgs);
    const drink = DRINKS.find(d => d.name === drinkName);
    if (drink) delete drink.img;
    renderGrid(currentBrowseCat, currentSearch);
    showToast(t('toast_img_del'), '');
  } catch (e) {
    console.warn('Image delete failed:', e);
    showToast('Lỗi xoá ảnh', 'red');
  }
}

// Sync images from Supabase table → local cache
async function syncDrinkImages() {
  try {
    const { data, error } = await sb.from('drink_images').select('drink_name, image_url');
    if (error || !data) return;
    const imgs = loadDrinkImages();
    data.forEach(row => { imgs[row.drink_name] = row.image_url; });
    saveDrinkImages(imgs);
    applyImagesToDrinks();
  } catch (e) { console.warn('Image sync failed:', e); }
}

/* ═══════════════════════════════════════
   CUSTOM DRINKS — localStorage (cache) + Supabase (cloud)
═══════════════════════════════════════ */
const CUSTOM_KEY = 'origami_custom_drinks';

function loadCustomDrinks() {
  try {
    const raw = localStorage.getItem(CUSTOM_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch(e) { return []; }
}

function saveCustomDrinks(list) {
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
}

// Map Supabase row → drink object
function rowToDrink(row) {
  return {
    name: row.name,
    cat: row.cat,
    desc: row.description || '',
    ingredients: row.ingredients || [],
    glass: row.glass || '',
    note: row.note || '',
    type: row.type || 'drink',
    _custom: true
  };
}

// Map drink object → Supabase row
function drinkToRow(d) {
  return {
    name: d.name,
    cat: d.cat,
    description: d.desc || '',
    ingredients: d.ingredients,
    glass: d.glass || '',
    note: d.note || '',
    type: d.type || 'drink'
  };
}

// Upsert one drink to Supabase (background)
async function sbUpsert(drink) {
  try {
    const { error } = await sb.from('drink_formulas').upsert(drinkToRow(drink), { onConflict: 'name' });
    if (error) console.warn('Supabase upsert error:', error.message);
  } catch(e) { console.warn('Supabase upsert failed:', e); }
}

// Delete one drink from Supabase (background)
async function sbDelete(name) {
  try {
    const { error } = await sb.from('drink_formulas').delete().eq('name', name);
    if (error) console.warn('Supabase delete error:', error.message);
  } catch(e) { console.warn('Supabase delete failed:', e); }
}

// Fetch all from Supabase and sync to localStorage + DRINKS
async function syncFromSupabase() {
  try {
    showSyncBadge('syncing');
    const { data, error } = await sb.from('drink_formulas').select('*');
    if (error) throw error;
    if (!data || data.length === 0) { showSyncBadge('ok'); return; }

    const mapped = data.map(rowToDrink);
    saveCustomDrinks(mapped);

    // Remove old custom entries from DRINKS (no duplicates)
    const customNames = new Set(mapped.map(d => d.name));
    for (let i = DRINKS.length - 1; i >= 0; i--) {
      if (DRINKS[i]._custom) DRINKS.splice(i, 1);
    }
    mapped.forEach(d => DRINKS.push(d));

    rebuildCatFilter();
    rebuildTrainCatChecks();
    renderGrid(currentBrowseCat, currentSearch);
    if (typeof buildNameSelect === 'function') buildNameSelect('');
    showSyncBadge('ok');
  } catch(e) {
    console.warn('Supabase sync failed:', e);
    showSyncBadge('error');
  }
}

function showSyncBadge(status) {
  let badge = document.getElementById('sync-badge');
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'sync-badge';
    badge.style.cssText = 'position:fixed;top:68px;right:14px;font-size:0.72rem;font-weight:700;padding:4px 10px;border-radius:12px;z-index:200;transition:opacity 0.4s;';
    document.body.appendChild(badge);
  }
  if (status === 'syncing') {
    badge.textContent = t('sync_syncing');
    badge.style.cssText += 'background:var(--ac-light);color:var(--ac);opacity:1;';
  } else if (status === 'realtime') {
    badge.textContent = t('sync_realtime');
    badge.style.cssText += 'background:#f0e6ff;color:#7d3c98;opacity:1;';
    setTimeout(() => { badge.style.opacity = '0'; }, 3000);
  } else if (status === 'ok') {
    badge.textContent = t('sync_ok');
    badge.style.cssText += 'background:var(--green-light);color:var(--green);opacity:1;';
    setTimeout(() => { badge.style.opacity = '0'; }, 2500);
  } else {
    badge.textContent = t('sync_offline');
    badge.style.cssText += 'background:var(--yellow-light);color:#b7770d;opacity:1;';
    setTimeout(() => { badge.style.opacity = '0'; }, 4000);
  }
}

// Merge local cache into DRINKS on startup
(function initCustom() {
  loadCustomDrinks().forEach(d => DRINKS.push(d));
})();

