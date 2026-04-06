function showToast(msg, type = '') {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast ' + type;
  void t.offsetWidth;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ═══════════════════════════════════════
   MODE SWITCH
═══════════════════════════════════════ */
// Ẩn/hiện tab "Nhập công thức" dựa trên nick hiện tại
function applyAddTabVisibility() {
  const hasAccess = isAdmin();
  document.querySelectorAll('.mode-tab').forEach(t => {
    if (t.getAttribute('onclick') && t.getAttribute('onclick').includes("'add'")) {
      t.style.display = hasAccess ? '' : 'none';
    }
  });
}

function switchMode(mode) {
  // Chỉ Linhklein mới được dùng tab Nhập công thức
  if (!isAdmin() && mode === 'add') {
    showToast(T('toast_no_perm'), 'red');
    return;
  }
  const modes = ['browse', 'train', 'assess', 'add', 'history'];
  document.querySelectorAll('.mode-tab').forEach((t, i) => {
    t.classList.toggle('active', modes[i] === mode);
  });
  document.getElementById('browse-mode').style.display = mode === 'browse' ? 'block' : 'none';
  document.getElementById('train-mode').style.display = mode === 'train' ? 'block' : 'none';
  document.getElementById('add-mode').style.display = mode === 'add' ? 'block' : 'none';
  document.getElementById('history-mode').style.display = mode === 'history' ? 'block' : 'none';
  document.getElementById('assess-mode').style.display = mode === 'assess' ? 'block' : 'none';
  if (mode === 'add' && editingDrinkName === undefined) openAddMode();
  if (mode === 'add' && editingDrinkName === null) openAddMode();
  if (mode === 'history') buildHistory();
  if (mode === 'train') buildTrainSettings();
  if (mode === 'assess') buildAssess();
}

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
applyLang();
buildBrowse();
buildTrainSettings();

// Init nickname display
(function initNickname() {
  const player = getCurrentPlayer();
  document.getElementById('nick-display').textContent = player || '—';
  if (!player) {
    // First visit: show modal after short delay
    setTimeout(() => openNickModal(), 600);
  } else {
    syncScoresFromSupabase();
    applyAddTabVisibility();
  }
})();

// Fetch latest from Supabase after UI is ready
syncFromSupabase();
syncOverridesFromSupabase().then(() => renderGrid(currentBrowseCat, currentSearch));
// Sync drink images
applyImagesToDrinks();
syncDrinkImages().then(() => renderGrid(currentBrowseCat, currentSearch));

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => { });
}

// ── Supabase Realtime: tự động cập nhật khi có thay đổi ──
(function startRealtimeSync() {
  if (!sb) return;
  try {
    sb.channel('drink_formulas_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'drink_formulas' }, payload => {
        const { eventType, new: row, old: oldRow } = payload;

        if (eventType === 'INSERT' || eventType === 'UPDATE') {
          const d = rowToDrink(row);
          // Cập nhật DRINKS array
          const idx = DRINKS.findIndex(x => x.name === d.name);
          if (idx !== -1) DRINKS[idx] = d; else DRINKS.push(d);
          // Cập nhật localStorage cache
          let cache = loadCustomDrinks();
          const ci = cache.findIndex(x => x.name === d.name);
          if (ci !== -1) cache[ci] = d; else cache.push(d);
          saveCustomDrinks(cache);
          rebuildCatFilter();
          rebuildTrainCatChecks();
          renderGrid(currentBrowseCat, currentSearch);
          if (typeof buildNameSelect === 'function') buildNameSelect('');
          showSyncBadge('realtime');
        }

        if (eventType === 'DELETE') {
          const name = oldRow.name;
          const di = DRINKS.findIndex(x => x.name === name);
          if (di !== -1) DRINKS.splice(di, 1);
          saveCustomDrinks(loadCustomDrinks().filter(x => x.name !== name));
          rebuildCatFilter();
          rebuildTrainCatChecks();
          renderGrid(currentBrowseCat, currentSearch);
          if (typeof buildNameSelect === 'function') buildNameSelect('');
          showSyncBadge('realtime');
        }
      })
      .subscribe();
  } catch (e) { console.warn('Realtime init failed:', e); }
})();
