/* ═══════════════════════════════════════
   SUPABASE CONFIG
═══════════════════════════════════════ */
const SB_URL = 'https://bjhdiiimrhvgnegvcpci.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqaGRpaWltcmh2Z25lZ3ZjcGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMTkzNTEsImV4cCI6MjA5MDY5NTM1MX0.xtra1oFgbM0a6rT6eOEaPO0_j0mpZnyGKYFFbPkK9nc';
let sb;
try {
  sb = window.supabase ? window.supabase.createClient(SB_URL, SB_KEY) : null;
} catch (e) { console.warn('Supabase init failed:', e); sb = null; }

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
      showToast(T('img_max'), 'red'); return;
    }
    showToast(T('img_uploading'), '');
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
        } catch (e2) { /* ignore old delete error */ }
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
      showToast(T('img_done'), 'green');
    } catch (e) {
      console.warn('Image upload failed:', e);
      showToast(T('img_err') + ' ' + (e.message || e), 'red');
    }
  };
  input.click();
}

// Delete image
async function deleteDrinkImage(drinkName) {
  if (!confirm(`${T('img_del_confirm')} "${drinkName}"?`)) return;
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
    showToast(T('img_del_ok'), '');
  } catch (e) {
    console.warn('Image delete failed:', e);
    showToast(T('img_del_err'), 'red');
  }
}

// Sync images from Supabase table → local cache
async function syncDrinkImages() {
  if (!sb) return;
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
  } catch (e) { return []; }
}

function saveCustomDrinks(list) {
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
}

/* ═══════════════════════════════════════
   CARD OVERRIDES — chỉnh sửa nội dung card
═══════════════════════════════════════ */
const OVERRIDES_KEY = 'origami_card_overrides';

function loadCardOverrides() {
  try {
    const raw = localStorage.getItem(OVERRIDES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}

function saveCardOverrides(obj) {
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(obj));
}

// Supabase sync for card overrides
async function sbUpsertOverride(name, override) {
  if (!sb) return;
  try {
    const { error } = await sb.from('card_overrides').upsert({
      name,
      description: override.desc || '',
      ingredients: override.ingredients || [],
      glass: override.glass || '',
      note: override.note || ''
    }, { onConflict: 'name' });
    if (error) console.warn('Override upsert error:', error.message);
  } catch (e) { console.warn('Override upsert failed:', e); }
}

async function sbDeleteOverride(name) {
  if (!sb) return;
  try {
    await sb.from('card_overrides').delete().eq('name', name);
  } catch (e) { console.warn('Override delete failed:', e); }
}

async function syncOverridesFromSupabase() {
  if (!sb) return;
  try {
    const { data, error } = await sb.from('card_overrides').select('*');
    if (error) { console.warn('Override sync error:', error.message); return; }
    if (!data || data.length === 0) return;
    const overrides = loadCardOverrides();
    data.forEach(row => {
      overrides[row.name] = {
        desc: row.description || '',
        ingredients: row.ingredients || [],
        glass: row.glass || '',
        note: row.note || ''
      };
    });
    saveCardOverrides(overrides);
    // Apply to DRINKS in memory
    DRINKS.forEach((d, i) => {
      const o = overrides[d.name];
      if (o) {
        if (o.desc !== undefined) DRINKS[i].desc = o.desc;
        if (o.ingredients !== undefined) DRINKS[i].ingredients = o.ingredients;
        if (o.glass !== undefined) DRINKS[i].glass = o.glass;
        if (o.note !== undefined) DRINKS[i].note = o.note;
      }
    });
  } catch (e) { console.warn('Override sync failed:', e); }
}

/** Apply overrides to a drink object (returns new object) */
function applyOverride(d) {
  const overrides = loadCardOverrides();
  const o = overrides[d.name];
  if (!o) return d;
  return { ...d, desc: o.desc ?? d.desc, ingredients: o.ingredients ?? d.ingredients, glass: o.glass ?? d.glass, note: o.note ?? d.note };
}

function openEditCard(name) {
  const raw = DRINKS.find(d => d.name === name);
  if (!raw) return;
  const d = applyOverride(raw);
  document.getElementById('edit-card-name').value = name;
  document.getElementById('edit-card-title').textContent = name;
  document.getElementById('edit-card-desc').value = d.desc || '';
  document.getElementById('edit-card-glass').value = d.glass || '';
  document.getElementById('edit-card-note').value = d.note || '';
  // Build ingredient rows
  const ingList = document.getElementById('edit-ing-list');
  ingList.innerHTML = '';
  (d.ingredients || []).forEach(ing => addEditIngRow(ing));
  if (!d.ingredients || d.ingredients.length === 0) addEditIngRow();
  document.getElementById('edit-card-overlay').classList.add('open');
}

function closeEditCard() {
  document.getElementById('edit-card-overlay').classList.remove('open');
}

function addEditIngRow(value = '') {
  const list = document.getElementById('edit-ing-list');
  const row = document.createElement('div');
  row.className = 'ing-form-row';
  row.draggable = true;
  row.innerHTML = `
    <span class="ing-drag-handle" title="Kéo để sắp xếp">&#9776;</span>
    <span class="ing-order-num"></span>
    <input type="text" value="${value.replace(/"/g, '&quot;')}" placeholder="Nguyên liệu...">
    <button class="rm-btn" onclick="rmEditIngRow(this)" title="Xoá dòng">✕</button>
  `;
  // Drag events
  row.addEventListener('dragstart', e => {
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(() => row.classList.add('dragging'), 0);
  });
  row.addEventListener('dragend', () => {
    row.classList.remove('dragging');
    list.querySelectorAll('.ing-form-row').forEach(r => r.classList.remove('drag-over'));
    updateEditIngNums();
  });
  row.addEventListener('dragover', e => {
    e.preventDefault();
    list.querySelectorAll('.ing-form-row').forEach(r => r.classList.remove('drag-over'));
    row.classList.add('drag-over');
  });
  row.addEventListener('dragleave', () => row.classList.remove('drag-over'));
  row.addEventListener('drop', e => {
    e.preventDefault();
    row.classList.remove('drag-over');
    const src = list.querySelector('.ing-form-row.dragging');
    if (src && src !== row) {
      const rows = [...list.querySelectorAll('.ing-form-row')];
      const srcIdx = rows.indexOf(src);
      const tgtIdx = rows.indexOf(row);
      if (srcIdx < tgtIdx) list.insertBefore(src, row.nextSibling);
      else list.insertBefore(src, row);
    }
    updateEditIngNums();
  });
  // Touch drag (mobile)
  const handle = row.querySelector('.ing-drag-handle');
  let touchClone = null, touchSrc = null;
  handle.addEventListener('touchstart', e => {
    touchSrc = row;
    row.classList.add('dragging');
    touchClone = row.cloneNode(true);
    touchClone.style.cssText = 'position:fixed;left:8px;right:8px;z-index:99999;opacity:0.85;pointer-events:none;box-shadow:0 8px 24px rgba(0,0,0,0.2);background:white;border-radius:8px;padding:8px;';
    touchClone.style.top = row.getBoundingClientRect().top + 'px';
    touchClone.style.width = row.offsetWidth + 'px';
    document.body.appendChild(touchClone);
    e.preventDefault();
  }, { passive: false });
  handle.addEventListener('touchmove', e => {
    if (!touchSrc || !touchClone) return;
    touchClone.style.top = (e.touches[0].clientY - 20) + 'px';
    list.querySelectorAll('.ing-form-row').forEach(r => r.classList.remove('drag-over'));
    const target = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
    const targetRow = target ? target.closest('.ing-form-row') : null;
    if (targetRow && targetRow !== touchSrc) targetRow.classList.add('drag-over');
    e.preventDefault();
  }, { passive: false });
  handle.addEventListener('touchend', e => {
    if (!touchSrc) return;
    touchSrc.classList.remove('dragging');
    if (touchClone) { touchClone.remove(); touchClone = null; }
    const lastTouch = e.changedTouches[0];
    const target = document.elementFromPoint(lastTouch.clientX, lastTouch.clientY);
    const targetRow = target ? target.closest('.ing-form-row') : null;
    if (targetRow && targetRow !== touchSrc) {
      const rows = [...list.querySelectorAll('.ing-form-row')];
      const srcIdx = rows.indexOf(touchSrc);
      const tgtIdx = rows.indexOf(targetRow);
      if (srcIdx < tgtIdx) list.insertBefore(touchSrc, targetRow.nextSibling);
      else list.insertBefore(touchSrc, targetRow);
    }
    list.querySelectorAll('.ing-form-row').forEach(r => r.classList.remove('drag-over'));
    updateEditIngNums();
    touchSrc = null;
  });

  list.appendChild(row);
  updateEditIngNums();
  row.querySelector('input').focus();
}

function updateEditIngNums() {
  const rows = document.querySelectorAll('#edit-ing-list .ing-form-row');
  rows.forEach((r, i) => {
    const num = r.querySelector('.ing-order-num');
    if (num) num.textContent = rows.length > 1 ? (i + 1) + '.' : '';
  });
}

function rmEditIngRow(btn) {
  const rows = document.querySelectorAll('#edit-ing-list .ing-form-row');
  if (rows.length > 1) {
    btn.closest('.ing-form-row').remove();
    updateEditIngNums();
  }
}

function saveCardEdit() {
  const name = document.getElementById('edit-card-name').value;
  const desc = document.getElementById('edit-card-desc').value.trim();
  const ingredients = [...document.querySelectorAll('#edit-ing-list .ing-form-row input')]
    .map(i => i.value.trim()).filter(Boolean);
  const glass = document.getElementById('edit-card-glass').value.trim();
  const note = document.getElementById('edit-card-note').value.trim();

  const overrides = loadCardOverrides();
  overrides[name] = { desc, ingredients, glass, note };
  saveCardOverrides(overrides);
  // Sync to Supabase in background
  sbUpsertOverride(name, overrides[name]);

  // Update DRINKS array in memory
  const idx = DRINKS.findIndex(d => d.name === name);
  if (idx !== -1) {
    DRINKS[idx].desc = desc;
    DRINKS[idx].ingredients = ingredients;
    DRINKS[idx].glass = glass;
    DRINKS[idx].note = note;
  }

  closeEditCard();
  renderGrid(currentBrowseCat, currentSearch);
  showToast('✅ Đã lưu chỉnh sửa cho ' + name, 'green');
}

function resetCardEdit() {
  const name = document.getElementById('edit-card-name').value;
  const overrides = loadCardOverrides();
  delete overrides[name];
  saveCardOverrides(overrides);
  // Sync delete to Supabase in background
  sbDeleteOverride(name);
  closeEditCard();
  location.reload();
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
  if (!sb) return;
  try {
    const { error } = await sb.from('drink_formulas').upsert(drinkToRow(drink), { onConflict: 'name' });
    if (error) console.warn('Supabase upsert error:', error.message);
  } catch (e) { console.warn('Supabase upsert failed:', e); }
}

// Delete one drink from Supabase (background)
async function sbDelete(name) {
  if (!sb) return;
  try {
    const { error } = await sb.from('drink_formulas').delete().eq('name', name);
    if (error) console.warn('Supabase delete error:', error.message);
  } catch (e) { console.warn('Supabase delete failed:', e); }
}

// Fetch all from Supabase and sync to localStorage + DRINKS
async function syncFromSupabase() {
  if (!sb) return;
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
  } catch (e) {
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
    badge.textContent = T('sync_ing');
    badge.style.cssText += 'background:var(--ac-light);color:var(--ac);opacity:1;';
  } else if (status === 'realtime') {
    badge.textContent = T('sync_new');
    badge.style.cssText += 'background:#f0e6ff;color:#7d3c98;opacity:1;';
    setTimeout(() => { badge.style.opacity = '0'; }, 3000);
  } else if (status === 'ok') {
    badge.textContent = T('sync_ok');
    badge.style.cssText += 'background:var(--green-light);color:var(--green);opacity:1;';
    setTimeout(() => { badge.style.opacity = '0'; }, 2500);
  } else {
    badge.textContent = T('sync_offline');
    badge.style.cssText += 'background:var(--yellow-light);color:#b7770d;opacity:1;';
    setTimeout(() => { badge.style.opacity = '0'; }, 4000);
  }
}

// Merge local cache into DRINKS on startup
(function initCustom() {
  loadCustomDrinks().forEach(d => DRINKS.push(d));
  // Apply saved card overrides
  const overrides = loadCardOverrides();
  DRINKS.forEach((d, i) => {
    const o = overrides[d.name];
    if (o) {
      if (o.desc !== undefined) DRINKS[i].desc = o.desc;
      if (o.ingredients !== undefined) DRINKS[i].ingredients = o.ingredients;
      if (o.glass !== undefined) DRINKS[i].glass = o.glass;
      if (o.note !== undefined) DRINKS[i].note = o.note;
    }
  });
})();
