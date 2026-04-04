// ── Lazy rendering state ──
let _renderItems = []; // current filtered items
let _renderShown = 0;  // how many are currently rendered
const RENDER_BATCH = 20; // cards per batch
let _scrollHandler = null;

function renderCardHTML(d, scores, customNames) {
    const isCustom = customNames.has(d.name);
    const sc = scores[d.name];
    const mastery = getMastery(d.name);
    const MI = [
      { cls: 'score-none', label: t('badge_not_trained') },
      { cls: 'score-bad',  label: t('badge_weak') },
      { cls: 'score-mid',  label: t('badge_learning') },
      { cls: 'score-good', label: t('badge_mastered') }
    ][mastery];
    const pctStr = (sc && sc.total > 0) ? ` · ${Math.round(sc.correct/sc.total*100)}%` : '';
    const scoreBadge = `<span class="weak-score ${MI.cls}">${MI.label}${pctStr}</span>`;
    const cardType = d.type || 'drink';
    const isDrinkOrFood = cardType === 'drink' || cardType === 'food';
    // Thumbnail on front (drink/food with image only)
    const thumbHTML = (isDrinkOrFood && d.img)
      ? `<div class="card-thumb-wrap" onclick="event.stopPropagation();openFullImage('${d.img.replace(/'/g,"\\\'")}','${d.name.replace(/'/g,"\\\'")}')">
<img src="${d.img}" alt="${d.name}" loading="lazy"></div>`
      : '';
    const frontHTML = `
      ${thumbHTML}
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;${thumbHTML ? 'padding-right:80px;' : ''}">
        <div class="cat-badge" style="margin-bottom:0;${getCatStyle(d.cat)}">${tCat(d.cat)}</div>
        ${scoreBadge}
      </div>
      <h3 style="margin-bottom:4px;">${d.name}${isCustom ? ` <span style="font-size:0.65rem;background:var(--ac-light);color:var(--ac);padding:2px 7px;border-radius:8px;vertical-align:middle;">${t('badge_custom')}</span>` : ''}</h3>
      <p class="desc">${tDesc(d.desc)}</p>
      <ul class="ingredients-list">
        ${d.ingredients.map(ing => `<li>${tIng(ing)}</li>`).join('')}
      </ul>
      ${d.glass ? `<div class="glass-note">
        <span>${cardType === 'food' ? '🍽️' : '🥃'} ${tGlass(d.glass)}</span>
      </div>` : ''}
      ${d.note ? `<div class="note-text">💡 ${tNote(d.note)}</div>` : ''}
      ${isCustom ? `<div class="card-actions">
        <button class="ca-btn edit" onclick="event.stopPropagation();openEditDrink(${JSON.stringify(d.name).replace(/"/g,'&quot;')})">${t('btn_edit')}</button>
        <button class="ca-btn del"  onclick="event.stopPropagation();deleteCardDrink(${JSON.stringify(d.name).replace(/"/g,'&quot;')})">${t('btn_del')}</button>
      </div>` : ''}`;

    const backGrad = getCardGradient(d.cat, cardType);
    const canUpload = isDrinkOrFood && getCurrentPlayer().toLowerCase() === 'linhklein';
    const uploadBtnHTML = canUpload
      ? `<button class="img-upload-btn" onclick="event.stopPropagation();uploadDrinkImage(${JSON.stringify(d.name).replace(/"/g,'&quot;')})">${d.img ? t('img_change') : t('img_add')}</button>`
      : '';
    const deleteBtnHTML = (canUpload && d.img)
      ? `<button class="img-delete-btn" onclick="event.stopPropagation();deleteDrinkImage(${JSON.stringify(d.name).replace(/"/g,'&quot;')})">🗑</button>`
      : '';

    // Back card: full Vietnamese recipe (mirror of front)
    const backHTML = `
      <span class="flip-hint">${t('flip_back')}</span>
      <div class="back-recipe">
        <div class="cat-badge" style="margin-bottom:6px;${getCatStyle(d.cat)}">${d.cat}</div>
        <h3 style="margin-bottom:4px;color:inherit;">${d.name}</h3>
        <p class="desc" style="color:inherit;opacity:0.85;">${d.desc}</p>
        <ul class="ingredients-list" style="color:inherit;">
          ${d.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        ${d.glass ? `<div class="glass-note" style="color:inherit;opacity:0.9;">
          <span>${cardType === 'food' ? '🍽️' : '🥃'} ${d.glass}</span>
        </div>` : ''}
        ${d.note ? `<div class="note-text" style="color:inherit;opacity:0.9;">💡 ${d.note}</div>` : ''}
      </div>
      ${uploadBtnHTML}
      ${deleteBtnHTML}`;

    return `
    <div class="flip-container fade-in" onclick="this.classList.toggle('flipped')">
      <div class="flip-inner">
        <div class="flip-front drink-card" style="position:relative;">${frontHTML}</div>
        <div class="flip-back" style="background:${backGrad};">${backHTML}</div>
      </div>
    </div>`;
}

function _appendBatch() {
  const grid = document.getElementById('drink-grid');
  const scores = loadScores();
  const customNames = new Set(loadCustomDrinks().map(d => d.name));
  const end = Math.min(_renderShown + RENDER_BATCH, _renderItems.length);
  let html = '';
  for (let i = _renderShown; i < end; i++) {
    html += renderCardHTML(_renderItems[i], scores, customNames);
  }
  grid.insertAdjacentHTML('beforeend', html);
  _renderShown = end;
  // Remove scroll listener if all loaded
  if (_renderShown >= _renderItems.length && _scrollHandler) {
    window.removeEventListener('scroll', _scrollHandler);
    _scrollHandler = null;
  }
}

function renderGrid(cat, query) {
  const grid = document.getElementById('drink-grid');
  // Clean up old scroll handler
  if (_scrollHandler) { window.removeEventListener('scroll', _scrollHandler); _scrollHandler = null; }

  let base = getFilteredByType(browseType);
  let items = cat === 'all' ? base : base.filter(d => d.cat === cat);
  if (query) {
    items = items.filter(d =>
      d.name.toLowerCase().includes(query) ||
      (d.desc || '').toLowerCase().includes(query) ||
      d.ingredients.some(i => i.toLowerCase().includes(query))
    );
  }
  if (items.length === 0) {
    grid.innerHTML = `<div class="empty-msg">${query ? t('empty_search') : t('empty_list')}</div>`;
    _renderItems = []; _renderShown = 0;
    return;
  }

  _renderItems = items;
  _renderShown = 0;
  grid.innerHTML = '';

  // Render first batch
  _appendBatch();

  // Set up infinite scroll for remaining items
  if (_renderShown < _renderItems.length) {
    _scrollHandler = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= docHeight - 600) {
        _appendBatch();
      }
    };
    window.addEventListener('scroll', _scrollHandler, { passive: true });
  }
}

function getFilteredByType(type) {
  if (type === 'all') return DRINKS;
  if (type === 'drink') return DRINKS.filter(d => !d.type || d.type === 'drink');
  return DRINKS.filter(d => d.type === type);
}

function buildBrowse() {
  rebuildCatFilter();
  renderGrid('all');
}

function filterBrowseType(type, btn) {
  browseType = type;
  document.querySelectorAll('.type-toggle .type-btn[data-type]').forEach(b => {
    if (b.closest('#train-type-toggle')) return;
    b.classList.toggle('active', b.dataset.type === type);
  });
  const el = document.getElementById('browse-section-title');
  if (el) el.textContent = t('section_' + type);
  currentBrowseCat = 'all';
  rebuildCatFilter();
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
  renderGrid('all', currentSearch);
}

function setTrainType(type, btn) {
  trainType = type;
  document.querySelectorAll('#train-type-toggle .type-btn').forEach(b => b.classList.toggle('active', b.dataset.type === type));
  rebuildTrainCatChecks();
  updateWeakCount();
}

function setFormType(t) {
  formType = t;
  const d = document.getElementById('form-type-drink');
  const f = document.getElementById('form-type-food');
  if (d) d.classList.toggle('active', t === 'drink');
  if (f) f.classList.toggle('active', t === 'food');
  buildNameSelect('');
  buildCatSelect();
}

function rebuildCatFilter() {
  const filterEl = document.getElementById('cat-filter');
  [...filterEl.querySelectorAll('.cat-btn:not([data-cat="all"])')].forEach(b => b.remove());
  const filtered = getFilteredByType(browseType);
  const cats = [...new Set(filtered.map(d => d.cat))];
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.dataset.cat = cat;
    btn.textContent = tCat(cat);
    btn.onclick = () => filterBrowse(cat, btn);
    filterEl.appendChild(btn);
  });
}

function filterBrowse(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentBrowseCat = cat;
  renderGrid(cat, currentSearch);
}

function onSearch(input) {
  currentSearch = input.value.trim().toLowerCase();
  document.getElementById('search-wrap').classList.toggle('has-value', currentSearch.length > 0);
  renderGrid(currentBrowseCat, currentSearch);
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  currentSearch = '';
  document.getElementById('search-wrap').classList.remove('has-value');
  renderGrid(currentBrowseCat, '');
}

/* ── Card flip helpers ── */
const TYPE_GRADIENTS = {
  drink:          'linear-gradient(135deg, #1e3a5f, #2563eb)',
  food:           'linear-gradient(135deg, #334155, #475569)',
  wirtschaft:     'linear-gradient(135deg, #059669, #10b981)',
  operations:     'linear-gradient(135deg, #d97706, #f59e0b)',
  fachkompetenz:  'linear-gradient(135deg, #7c3aed, #8b5cf6)',
  compliance:     'linear-gradient(135deg, #dc2626, #ef4444)',
  sales:          'linear-gradient(135deg, #e11d48, #f43f5e)',
  softskills:     'linear-gradient(135deg, #0891b2, #22d3ee)',
  sushi:          'linear-gradient(135deg, #1d4ed8, #3b82f6)',
  hotkitchen:     'linear-gradient(135deg, #b45309, #f97316)',
};
const TYPE_EMOJIS = {
  drink: '🍹', food: '🍽️', wirtschaft: '💰', operations: '🔧',
  fachkompetenz: '🍸', compliance: '⚖️', sales: '📢',
  softskills: '🌐', sushi: '🍣', hotkitchen: '🔥',
};
const CARD_GRADIENTS = {
  // Drink categories
  'Đồ uống không cồn':   'linear-gradient(135deg, #06b6d4, #0891b2)',
  'Đồ uống nóng':        'linear-gradient(135deg, #92400e, #b45309)',
  'Cocktail không cồn':  'linear-gradient(135deg, #059669, #10b981)',
  'Bia':                  'linear-gradient(135deg, #d97706, #f59e0b)',
  'Cocktail có cồn':     'linear-gradient(135deg, #7c3aed, #8b5cf6)',
  'Rượu & Highball':     'linear-gradient(135deg, #dc2626, #ef4444)',
  // Food categories
  'Khai vị':              'linear-gradient(135deg, #f97316, #fb923c)',
  'Chay':                 'linear-gradient(135deg, #16a34a, #22c55e)',
  'Thịt':                 'linear-gradient(135deg, #dc2626, #ef4444)',
  'Hải sản':              'linear-gradient(135deg, #0284c7, #38bdf8)',
  'Mì & Cơm':            'linear-gradient(135deg, #ca8a04, #eab308)',
  'Salad':                'linear-gradient(135deg, #15803d, #4ade80)',
  'Cơm cuộn & Đặc biệt': 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
  'Tráng miệng':         'linear-gradient(135deg, #db2777, #f472b6)',
  'Bento Box':            'linear-gradient(135deg, #9333ea, #a855f7)',
};
const CARD_EMOJIS = {
  // Drink
  'Đồ uống không cồn':   '🥤',
  'Đồ uống nóng':        '☕',
  'Cocktail không cồn':  '🍹',
  'Bia':                  '🍺',
  'Cocktail có cồn':     '🍸',
  'Rượu & Highball':     '🥃',
  // Food
  'Khai vị':              '🥢',
  'Chay':                 '🥬',
  'Thịt':                 '🍗',
  'Hải sản':              '🦐',
  'Mì & Cơm':            '🍜',
  'Salad':                '🥗',
  'Cơm cuộn & Đặc biệt': '🍣',
  'Tráng miệng':         '🍡',
  'Bento Box':            '🍱',
};
function getCardGradient(cat, type) {
  return CARD_GRADIENTS[cat] || TYPE_GRADIENTS[type] || 'linear-gradient(135deg, #1e3a5f, #2563eb)';
}
function getCardEmoji(cat, name, type) {
  return CARD_EMOJIS[cat] || TYPE_EMOJIS[type] || '📋';
}

// Fullscreen image viewer
function openFullImage(src, alt) {
  const overlay = document.createElement('div');
  overlay.className = 'img-fullscreen-overlay';
  overlay.innerHTML = `<img src="${src}" alt="${alt || ''}"><button class="img-fullscreen-close">&times;</button>`;
  overlay.onclick = () => overlay.remove();
  document.body.appendChild(overlay);
}


/* ═══════════════════════════════════════
   TRAIN MODE
═══════════════════════════════════════ */
let trainQueue = [];
let trainIndex = 0;
let trainCorrect = 0;
let answered = false;
let trainWrongDrinks = [];
let timerInterval = null;
let timerRemaining = 0;
const TIMER_SECONDS = 30;

/* ═══════════════════════════════════════
   SCORE TRACKING  (localStorage cache + Supabase)
═══════════════════════════════════════ */
const SCORES_KEY   = 'origami_scores';
const NICKNAME_KEY = 'origami_nickname';

/* ── Player / Nickname ── */
function getCurrentPlayer() {
  return localStorage.getItem(NICKNAME_KEY) || '';
}
function setCurrentPlayer(name) {
  localStorage.setItem(NICKNAME_KEY, name.trim());
  document.getElementById('nick-display').textContent = name.trim();
}

function openNickModal() {
  const overlay = document.getElementById('nick-overlay');
  overlay.classList.add('open');
  const input = document.getElementById('nick-input');
  input.value = getCurrentPlayer();
  setTimeout(() => { input.focus(); input.select(); }, 50);
  // Show known players from localStorage
  try {
    const all = JSON.parse(localStorage.getItem(SCORES_KEY) || '{}');
    const players = Object.keys(all).filter(k => k);
    const hint = document.getElementById('nick-players-hint');
    if (players.length > 0) {
      hint.innerHTML = t('nick_or_pick') + players.map(p =>
        `<span class="nick-pick" onclick="pickPlayer(this)">${p.replace(/</g,'&lt;')}</span>`).join('');
    } else { hint.innerHTML = ''; }
  } catch(e) {}
}

function pickPlayer(el) {
  document.getElementById('nick-input').value = el.textContent;
  confirmNick();
}

function closeNickModalIfOutside(e) {
  if (e.target === document.getElementById('nick-overlay')) {
    if (getCurrentPlayer()) document.getElementById('nick-overlay').classList.remove('open');
  }
}

function confirmNick() {
  const val = document.getElementById('nick-input').value.trim();
  if (!val) { document.getElementById('nick-input').focus(); return; }
  const prev = getCurrentPlayer();
  setCurrentPlayer(val);
  document.getElementById('nick-overlay').classList.remove('open');
  applyAddTabVisibility();
  if (prev !== val) {
    syncScoresFromSupabase();
    updateWeakCount();
    renderGrid(currentBrowseCat, currentSearch);
    // Nếu đang ở tab add mà mất quyền thì chuyển về browse
    if (val.trim().toLowerCase() !== 'linhklein') {
      const addMode = document.getElementById('add-mode');
      if (addMode && addMode.style.display !== 'none') switchMode('browse');
    }
  }
  showToast(t('toast_hello', { name: val }), 'green');
}

/* ── Scores: per-player ── */
function loadScores() {
  const player = getCurrentPlayer();
  if (!player) return {};
  try {
    const all = JSON.parse(localStorage.getItem(SCORES_KEY) || '{}');
    return all[player] || {};
  } catch(e) { return {}; }
}

function saveScores(scores) {
  const player = getCurrentPlayer();
  if (!player) return;
  try {
    const all = JSON.parse(localStorage.getItem(SCORES_KEY) || '{}');
    all[player] = scores;
    localStorage.setItem(SCORES_KEY, JSON.stringify(all));
  } catch(e) {}
}

// Upsert one score row to Supabase in background
async function sbUpsertScore(drinkName, sc) {
  const player = getCurrentPlayer();
  if (!player) return;
  try {
    await sb.from('drink_scores').upsert({
      player,
      drink_name: drinkName,
      correct: sc.correct,
      total: sc.total,
      history: sc.history || []
    }, { onConflict: 'player,drink_name' });
  } catch(e) { console.warn('Score upsert failed', e); }
}

// Fetch scores for current player from Supabase and merge into localStorage
async function syncScoresFromSupabase() {
  const player = getCurrentPlayer();
  if (!player) return;
  try {
    const { data, error } = await sb.from('drink_scores').select('*').eq('player', player);
    if (error || !data || data.length === 0) return;
    const all = JSON.parse(localStorage.getItem(SCORES_KEY) || '{}');
    if (!all[player]) all[player] = {};
    data.forEach(row => {
      all[player][row.drink_name] = {
        correct: row.correct || 0,
        total: row.total || 0,
        history: row.history || []
      };
    });
    localStorage.setItem(SCORES_KEY, JSON.stringify(all));
    renderGrid(currentBrowseCat, currentSearch);
    updateWeakCount();
  } catch(e) { console.warn('Scores sync failed', e); }
}

function recordScore(name, correct) {
  const scores = loadScores();
  if (!scores[name]) scores[name] = { correct: 0, total: 0, history: [] };
  if (!scores[name].history) scores[name].history = [];
  scores[name].total++;
  if (correct) scores[name].correct++;
  // Record history entry
  const today = new Date().toISOString().slice(0, 10);
  scores[name].lastPracticed = today;
  scores[name].history.push({ date: today, correct });
  // Keep last 200 entries per drink to avoid bloat
  if (scores[name].history.length > 200) scores[name].history.shift();
  saveScores(scores);
  // Sync to Supabase in background
  sbUpsertScore(name, scores[name]);
}

function getMastery(name) {
  const sc = loadScores()[name];
  if (!sc || sc.total === 0) return 0;
  const pct = sc.correct / sc.total;
  if (pct >= 0.8) return 3;
  if (pct >= 0.6) return 2;
  return 1;
}
function isWeak(name) { return getMastery(name) < 3; }

/* ═══════════════════════════════════════
   HISTORY VIEW
═══════════════════════════════════════ */
function buildHistory() {
  const player = getCurrentPlayer();
  const scores = loadScores();
  const container = document.getElementById('history-content');

  if (!player) {
    container.innerHTML = `<div class="hist-empty">${t('hist_no_nick')}<br><button class="btn btn-check" style="margin-top:12px" onclick="openNickModal()">${t('hist_no_nick_btn')}</button></div>`;
    return;
  }

  if (Object.keys(scores).length === 0) {
    container.innerHTML = `<div class="hist-empty">🎯 <strong>${player}</strong> ${t('hist_no_data')}<br>${t('hist_no_data_hint')}</div>`;
    return;
  }

  // Aggregate all history entries across all drinks
  const dayMap = {}; // date -> { total, correct }
  let totalAttempts = 0, totalCorrect = 0;

  Object.entries(scores).forEach(([name, sc]) => {
    totalAttempts += sc.total || 0;
    totalCorrect  += sc.correct || 0;
    (sc.history || []).forEach(h => {
      if (!dayMap[h.date]) dayMap[h.date] = { total: 0, correct: 0, drinks: new Set() };
      dayMap[h.date].total++;
      if (h.correct) dayMap[h.date].correct++;
      dayMap[h.date].drinks.add(name);
    });
  });

  // Streak calculation
  const sortedDays = Object.keys(dayMap).sort().reverse();
  let streak = 0;
  const todayStr = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (sortedDays[0] === todayStr || sortedDays[0] === yesterday) {
    let d = new Date(sortedDays[0]);
    for (const day of sortedDays) {
      const ds = new Date(d).toISOString().slice(0, 10);
      if (day === ds) { streak++; d.setDate(d.getDate() - 1); }
      else break;
    }
  }

  const overallPct = totalAttempts > 0 ? Math.round(totalCorrect / totalAttempts * 100) : 0;
  const numDrinks = Object.keys(scores).length;
  const masteredCount = Object.values(scores).filter(sc => sc.total > 0 && (sc.correct / sc.total) >= 0.8).length;

  // --- Summary boxes ---
  let html = `
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px;">
      <div style="font-size:1rem;font-weight:700;color:var(--text)">👤 ${player}</div>
      ${streak > 0 ? `<div class="streak-badge">🔥 ${t('hist_streak', {n: streak})}</div>` : ''}
      <button onclick="openNickModal()" style="margin-left:auto;font-size:0.78rem;padding:4px 12px;border-radius:14px;border:1.5px solid var(--border);background:white;cursor:pointer;color:var(--text-muted);">${t('hist_switch')}</button>
    </div>
    <div class="hist-summary-grid">
      <div class="hist-stat-box"><div class="h-val">${totalAttempts}</div><div class="h-lbl">${t('hist_attempts')}</div></div>
      <div class="hist-stat-box"><div class="h-val">${overallPct}%</div><div class="h-lbl">${t('hist_pct')}</div></div>
      <div class="hist-stat-box"><div class="h-val">${masteredCount}/${numDrinks}</div><div class="h-lbl">${t('hist_mastered')}</div></div>
      <div class="hist-stat-box"><div class="h-val">${sortedDays.length}</div><div class="h-lbl">${t('hist_days')}</div></div>
    </div>`;

  // --- Per-drink table (sorted weakest first) ---
  const drinkRows = Object.entries(scores)
    .filter(([, sc]) => sc.total > 0)
    .sort((a, b) => {
      const pa = a[1].correct / a[1].total;
      const pb = b[1].correct / b[1].total;
      return pa - pb;
    });

  if (drinkRows.length > 0) {
    html += `
      <div class="hist-table-wrap">
        <div class="hist-table-title">${t('hist_table_title')}</div>
        <table class="hist-table">
          <thead><tr>
            <th>${t('hist_col_name')}</th><th>${t('hist_col_cat')}</th><th>${t('hist_col_count')}</th><th>${t('hist_col_level')}</th>
          </tr></thead>
          <tbody>`;
    drinkRows.forEach(([name, sc]) => {
      const pct = Math.round(sc.correct / sc.total * 100);
      const color = pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)';
      const drink = DRINKS.find(d => d.name === name);
      html += `<tr>
        <td><strong>${name}</strong></td>
        <td style="color:var(--text-muted);font-size:0.8rem">${drink ? tCat(drink.cat) : ''}</td>
        <td>${sc.total}</td>
        <td><div class="pct-bar-wrap">
          <div class="pct-bar"><div class="pct-bar-fill" style="width:${pct}%;background:${color}"></div></div>
          <span class="pct-text" style="color:${color}">${pct}%</span>
        </div></td>
      </tr>`;
    });
    html += `</tbody></table></div>`;
  }

  // --- Recent activity by day ---
  if (sortedDays.length > 0) {
    html += `
      <div class="hist-table-wrap">
        <div class="hist-table-title">${t('hist_recent')}</div>
        <div class="hist-day-list">`;
    sortedDays.slice(0, 30).forEach(day => {
      const d = dayMap[day];
      const pct = Math.round(d.correct / d.total * 100);
      const color = pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)';
      const label = day === todayStr ? t('hist_today') : day === yesterday ? t('hist_yesterday') : day;
      html += `<div class="hist-day-item">
        <span class="hist-day-date">${label}</span>
        <span class="hist-day-detail">${[...d.drinks].slice(0, 4).join(', ')}${d.drinks.size > 4 ? ` +${d.drinks.size-4}` : ''}</span>
        <span class="hist-day-score" style="color:${color}">${d.correct}/${d.total} (${pct}%)</span>
      </div>`;
    });
    html += '</div></div>';
  }

  container.innerHTML = html;
}

function buildTrainSettings() {
  rebuildTrainCatChecks();
  updateWeakCount();
  // Sync toggle UI to current trainType
  document.querySelectorAll('#train-type-toggle .type-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.type === trainType);
  });
}

function rebuildTrainCatChecks() {
  const base = getFilteredByType(trainType);
  const cats = [...new Set(base.map(d => d.cat))];
  const container = document.getElementById('cat-checks');
  container.innerHTML = '';
  cats.forEach(cat => {
    const label = document.createElement('label');
    label.className = 'cat-check checked';
    label.innerHTML = `<input type="checkbox" checked value="${cat}"> ${tCat(cat)}`;
    label.querySelector('input').addEventListener('change', function() {
      label.classList.toggle('checked', this.checked);
      updateWeakCount();
    });
    container.appendChild(label);
  });
}

function updateWeakCount() {
  const cats = getSelectedCats();
  const base = getFilteredByType(trainType);
  const pool = base.filter(d => cats.includes(d.cat));
  const weakPool = pool.filter(d => isWeak(d.name));
  const el = document.getElementById('weak-count');
  if (el) el.textContent = t('weak_count_tpl', { weak: weakPool.length, total: pool.length });
}

// Weak toggle styling
document.addEventListener('DOMContentLoaded', () => {
  const wt = document.getElementById('weak-toggle');
  const wi = document.getElementById('weak-only');
  if (wi) wi.addEventListener('change', () => {
    wt.classList.toggle('on', wi.checked);
  });
});

function getSelectedCats() {
  return [...document.querySelectorAll('#cat-checks input:checked')].map(i => i.value);
}

function getSpacedPriority(name) {
  const sc = loadScores()[name];
  if (!sc || sc.total === 0) return 1000 + Math.random();
  const todayMs = new Date().setHours(0,0,0,0);
  const lastMs = sc.lastPracticed ? new Date(sc.lastPracticed).getTime() : 0;
  const daysSince = Math.floor((todayMs - lastMs) / 86400000);
  const acc = sc.correct / sc.total;
  return daysSince * (1.2 - acc) + Math.random() * 0.3;
}

function startTraining() {
  const cats = getSelectedCats();
  if (cats.length === 0) {
    alert(t('train_select_cat')); return;
  }
  let pool = getFilteredByType(trainType).filter(d => cats.includes(d.cat));
  const weakOnly = document.getElementById('weak-only').checked;
  if (weakOnly) {
    const weakPool = pool.filter(d => isWeak(d.name));
    if (weakPool.length === 0) {
      showToast(t('train_all_mastered'), 'green'); return;
    }
    pool = weakPool;
  }
  trainQueue = pool.sort((a, b) => getSpacedPriority(b.name) - getSpacedPriority(a.name));
  trainIndex = 0;
  trainCorrect = 0;
  answered = false;
  trainWrongDrinks = [];

  document.getElementById('train-settings').style.display = 'none';
  document.getElementById('train-game').style.display = 'block';
  document.getElementById('done-screen').classList.remove('show');

  updateStats();
  loadCard();
}

function startTimer() {
  stopTimer();
  timerRemaining = TIMER_SECONDS;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerRemaining--;
    updateTimerDisplay();
    if (timerRemaining <= 0) { stopTimer(); revealAnswer(); }
  }, 1000);
}
function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}
function updateTimerDisplay() {
  const el = document.getElementById('timer-display');
  const bar = document.getElementById('timer-bar');
  if (!el || !bar) return;
  el.textContent = timerRemaining + 's';
  bar.style.width = (timerRemaining / TIMER_SECONDS * 100) + '%';
  const c = timerRemaining <= 10 ? '#dc2626' : timerRemaining <= 20 ? '#d97706' : 'var(--ac)';
  bar.style.background = c;
  el.style.color = c;
}

function loadCard() {
  answered = false;
  const drink = trainQueue[trainIndex];
  document.getElementById('fc-number').textContent = `${trainIndex + 1} / ${trainQueue.length}`;
  document.getElementById('fc-category').textContent = tCat(drink.cat);
  document.getElementById('fc-name').textContent = drink.name;
  document.getElementById('fc-desc').textContent = tDesc(drink.desc);

  // Build chip pool
  buildChipPool(drink);

  // Reset result
  const rp = document.getElementById('result-panel');
  rp.className = 'result-panel';
  rp.innerHTML = '';

  updateProgress();

  // Re-add animation
  const fc = document.getElementById('flashcard');
  fc.classList.remove('fade-in');
  void fc.offsetWidth;
  fc.classList.add('fade-in');
  startTimer();
}

function buildChipPool(drink) {
  const correct = drink.ingredients;
  document.getElementById('chip-count').textContent = correct.length;

  // Collect distractors from same type only (drink ↔ drink, food ↔ food)
  const sameType = DRINKS.filter(d => (d.type || 'drink') === (drink.type || 'drink'));
  const allOtherIngs = [];
  sameType.forEach(d => {
    if (d.name !== drink.name) {
      d.ingredients.forEach(ing => {
        if (!correct.includes(ing)) allOtherIngs.push(ing);
      });
    }
  });

  // Shuffle and pick unique distractors
  const unique = [...new Set(allOtherIngs)].sort(() => Math.random() - 0.5);
  const numDistractors = Math.min(unique.length, Math.max(4, correct.length + 3));
  const distractors = unique.slice(0, numDistractors);

  // Combine and shuffle
  const pool = [...correct, ...distractors].sort(() => Math.random() - 0.5);

  const container = document.getElementById('chip-pool');
  container.innerHTML = '';
  pool.forEach(ing => {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.textContent = ing;
    chip.dataset.ing = ing;
    chip.type = 'button';
    chip.addEventListener('click', () => {
      if (answered) return;
      chip.classList.toggle('selected');
    });
    container.appendChild(chip);
  });
}

function getSelectedChips() {
  return [...document.querySelectorAll('#chip-pool .chip.selected')].map(c => c.dataset.ing);
}

function checkAnswer() {
  if (answered) return;
  const drink = trainQueue[trainIndex];
  const correct = drink.ingredients;
  const selected = getSelectedChips();

  if (selected.length === 0) {
    showToast(t('train_pick_one'), ''); return;
  }

  answered = true;
  stopTimer();

  const chips = [...document.querySelectorAll('#chip-pool .chip')];
  let numHit = 0, wrongSelected = 0;

  chips.forEach(chip => {
    chip.disabled = true;
    const ing = chip.dataset.ing;
    const isCorrect = correct.includes(ing);
    const isSelected = chip.classList.contains('selected');

    if (isSelected && isCorrect)  { chip.className = 'chip chip-correct'; numHit++; }
    else if (isSelected && !isCorrect) { chip.className = 'chip chip-wrong'; wrongSelected++; }
    else if (!isSelected && isCorrect) { chip.className = 'chip chip-missed'; } // missed
    else { chip.style.opacity = '0.3'; chip.classList.remove('selected'); }
  });

  const total = correct.length;
  const allCorrect = numHit === total && wrongSelected === 0;
  if (!allCorrect) trainWrongDrinks.push(drink);
  recordScore(drink.name, allCorrect);

  const rp = document.getElementById('result-panel');
  if (allCorrect) {
    trainCorrect++;
    rp.className = 'result-panel show all-correct';
    rp.innerHTML = `<h4>${t('result_perfect')}</h4>
      ${drink.note ? `<div class="note-reveal">💡 ${drink.note}</div>` : ''}`;
  } else {
    rp.className = 'result-panel show partial-correct';
    rp.innerHTML = `<h4>${t('result_partial', {hit:numHit, total})}${wrongSelected ? t('result_wrong', {wrong:wrongSelected}) : ''}</h4>
      <div class="correct-list-detail">
        <div class="cl-title">${t('result_answer')}</div>
        <ol>${correct.map(i => `<li>${i}</li>`).join('')}</ol>
      </div>
      ${drink.note ? `<div class="note-reveal">💡 ${drink.note}</div>` : ''}`;
    // Delay next button 1.5s to encourage review
    const nextBtn = document.querySelector('.btn-next');
    if (nextBtn) {
      nextBtn.disabled = true;
      nextBtn.style.opacity = '0.4';
      setTimeout(() => { nextBtn.disabled = false; nextBtn.style.opacity = '1'; }, 1500);
    }
  }

  updateStats();
}

function revealAnswer() {
  if (answered) return;
  answered = true;
  stopTimer();
  const drink = trainQueue[trainIndex];
  trainWrongDrinks.push(drink);

  const chips = [...document.querySelectorAll('#chip-pool .chip')];
  chips.forEach(chip => {
    chip.disabled = true;
    const isCorrect = drink.ingredients.includes(chip.dataset.ing);
    if (isCorrect) chip.className = 'chip chip-correct';
    else { chip.classList.remove('selected'); chip.style.opacity = '0.3'; }
  });

  recordScore(drink.name, false);

  const rp = document.getElementById('result-panel');
  rp.className = 'result-panel show revealed';
  rp.innerHTML = `<h4>${t('result_reveal')}</h4>
    ${drink.note ? `<div class="note-reveal">💡 ${drink.note}</div>` : ''}`;
}

function nextDrink() {
  if (!answered) {
    if (!confirm(t('next_skip'))) return;
    stopTimer();
  }
  trainIndex++;
  if (trainIndex >= trainQueue.length) {
    showDoneScreen();
  } else {
    loadCard();
  }
}

function updateStats() {
  document.getElementById('stat-current').textContent = trainIndex + 1;
  document.getElementById('stat-total').textContent = trainQueue.length;
  document.getElementById('stat-correct').textContent = trainCorrect;
  document.getElementById('stat-wrong').textContent = Math.max(0, trainIndex - trainCorrect);
  updateProgress();
}

function updateProgress() {
  const pct = trainQueue.length > 0 ? (trainIndex / trainQueue.length) * 100 : 0;
  document.getElementById('progress-bar').style.width = pct + '%';
}

function getScoreLevel(pct) {
  if (pct >= 95) return { lv: 5, label: t('score_lv5'), color: 'slv-5' };
  if (pct >= 80) return { lv: 4, label: t('score_lv4'), color: 'slv-4' };
  if (pct >= 60) return { lv: 3, label: t('score_lv3'), color: 'slv-3' };
  if (pct >= 40) return { lv: 2, label: t('score_lv2'), color: 'slv-2' };
  return { lv: 1, label: t('score_lv1'), color: 'slv-1' };
}

function showDoneScreen() {
  document.getElementById('train-game').style.display = 'none';
  const done = document.getElementById('done-screen');
  done.classList.add('show');
  const pct = Math.round((trainCorrect / trainQueue.length) * 100);
  document.getElementById('final-score').textContent = `${trainCorrect} / ${trainQueue.length}`;

  // Score level 1-5
  const sl = getScoreLevel(pct);
  const starsEl = document.getElementById('score-stars');
  starsEl.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.className = 'star' + (i <= sl.lv ? ' filled' : '');
    star.textContent = '⭐';
    if (i <= sl.lv) star.style.animationDelay = ((i - 1) * 0.12) + 's';
    starsEl.appendChild(star);
  }
  document.getElementById('score-level-badge').innerHTML =
    `<div class="score-level-badge ${sl.color}">
      <span class="level-num">${sl.lv}/5</span>
      <span class="level-label">${sl.label}<small>${pct}%</small></span>
    </div>`;

  let emoji = '😅', msg = t('done_msg_low');
  if (pct >= 95) { emoji = '🌟'; msg = t('done_msg_95'); }
  else if (pct >= 80) { emoji = '🎉'; msg = t('done_msg_80'); }
  else if (pct >= 60) { emoji = '💪'; msg = t('done_msg_60'); }
  else if (pct >= 40) { emoji = '🤔'; msg = t('done_msg_40'); }
  done.querySelector('.done-emoji').textContent = emoji;
  document.getElementById('final-msg').textContent = msg;
  const retryBtn = document.getElementById('retry-wrong-btn');
  if (trainWrongDrinks.length > 0) {
    retryBtn.style.display = '';
    retryBtn.textContent = t('done_retry_tpl', { n: trainWrongDrinks.length });
    // Wrong-drink breakdown
    const bd = document.getElementById('wrong-breakdown');
    bd.innerHTML = `<details><summary>${t('done_detail_tpl', { n: trainWrongDrinks.length })}</summary>${
      trainWrongDrinks.map(d => `<div class="wb-item"><div class="wb-name">${d.name}</div><div class="wb-list">${d.ingredients.join(' · ')}</div></div>`).join('')
    }</details>`;
  } else {
    retryBtn.style.display = 'none';
    document.getElementById('wrong-breakdown').innerHTML = '';
  }
  // Refresh browse badges
  renderGrid(currentBrowseCat, currentSearch);
}

function retryWrongDrinks() {
  trainQueue = [...trainWrongDrinks].sort(() => Math.random() - 0.5);
  trainWrongDrinks = [];
  trainIndex = 0;
  trainCorrect = 0;
  answered = false;
  document.getElementById('done-screen').classList.remove('show');
  document.getElementById('train-game').style.display = 'block';
  updateStats();
  loadCard();
}

function resetTraining() {
  stopTimer();
  trainWrongDrinks = [];
  document.getElementById('train-settings').style.display = '';
  document.getElementById('train-game').style.display = 'none';
  document.getElementById('done-screen').classList.remove('show');
  trainQueue = []; trainIndex = 0; trainCorrect = 0;
  updateWeakCount();
}

/* ═══════════════════════════════════════
   ADD / EDIT MODE
═══════════════════════════════════════ */
let editingDrinkName = null; // null = new, string = editing

function openAddMode() {
  editingDrinkName = null;
  formType = 'drink';
  // Apply i18n for form
  setFormType('drink');
  document.getElementById('add-mode-title').textContent = t('add_title');
  document.getElementById('f-delete-btn').style.display = 'none';
  buildNameSelect('');
  document.getElementById('f-desc').value = '';
  document.getElementById('f-glass').value = '';
  document.getElementById('f-glass-other').value = '';
  document.getElementById('f-glass-other').style.display = 'none';
  document.getElementById('f-note').value = '';
  buildCatSelect();
  document.getElementById('f-cat').value = '';
  document.getElementById('f-cat-custom').style.display = 'none';
  const ingList = document.getElementById('f-ing-list');
  ingList.innerHTML = '';
  addFormIngRow();
  addFormIngRow();
}

function buildNameSelect(selectedName) {
  const sel = document.getElementById('f-name');
  const isFood = formType === 'food';
  sel.innerHTML = `<option value="">${isFood ? t('form_select_food') : t('form_select_drink')}</option>`;
  const filtered = DRINKS.filter(d => isFood ? d.type === 'food' : (!d.type || d.type === 'drink'));
  const cats = [...new Set(filtered.map(d => d.cat))];
  cats.forEach(cat => {
    const grp = document.createElement('optgroup');
    grp.label = cat;
    filtered.filter(d => d.cat === cat).forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.name;
      opt.textContent = d.name;
      if (d.name === selectedName) opt.selected = true;
      grp.appendChild(opt);
    });
    sel.appendChild(grp);
  });
}

function autoFillFromName() {
  const name = document.getElementById('f-name').value;
  if (!name) return;
  const drink = DRINKS.find(d => d.name === name);
  if (!drink) return;
  document.getElementById('f-desc').value = drink.desc || '';
  document.getElementById('f-note').value = drink.note || '';
  // Fill glass select
  const glassSel = document.getElementById('f-glass');
  const glassOther = document.getElementById('f-glass-other');
  const glassVal = drink.glass || '';
  const glassExists = [...glassSel.options].some(o => o.value === glassVal);
  if (glassExists) {
    glassSel.value = glassVal;
    glassOther.style.display = 'none';
  } else if (glassVal) {
    glassSel.value = '__other__';
    glassOther.style.display = '';
    glassOther.value = glassVal;
  } else {
    glassSel.value = '';
    glassOther.style.display = 'none';
  }
  buildCatSelect();
  const catSel = document.getElementById('f-cat');
  const exists = [...catSel.options].some(o => o.value === drink.cat);
  if (exists) {
    catSel.value = drink.cat;
    document.getElementById('f-cat-custom').style.display = 'none';
  } else {
    catSel.value = '__new__';
    document.getElementById('f-cat-custom').style.display = '';
    document.getElementById('f-cat-custom').value = drink.cat;
  }
  const ingList = document.getElementById('f-ing-list');
  ingList.innerHTML = '';
  (drink.ingredients || []).forEach(ing => addFormIngRow(ing));
  if (!drink.ingredients || drink.ingredients.length === 0) addFormIngRow();
}

function openEditDrink(name) {
  const drink = DRINKS.find(d => d.name === name);
  if (!drink) return;
  editingDrinkName = name;
  switchMode('add');
  formType = drink.type || 'drink';
  setFormType(formType);
  document.getElementById('add-mode-title').textContent = t('edit_title');
  document.getElementById('f-delete-btn').style.display = '';
  buildNameSelect(drink.name);
  document.getElementById('f-desc').value = drink.desc || '';
  document.getElementById('f-note').value = drink.note || '';
  const glassSel2 = document.getElementById('f-glass');
  const glassOther2 = document.getElementById('f-glass-other');
  const gv = drink.glass || '';
  const gExists = [...glassSel2.options].some(o => o.value === gv);
  if (gExists) { glassSel2.value = gv; glassOther2.style.display = 'none'; }
  else if (gv) { glassSel2.value = '__other__'; glassOther2.style.display = ''; glassOther2.value = gv; }
  else { glassSel2.value = ''; glassOther2.style.display = 'none'; }
  buildCatSelect();
  const catSel = document.getElementById('f-cat');
  // check if category exists in select
  const exists = [...catSel.options].some(o => o.value === drink.cat);
  if (exists) {
    catSel.value = drink.cat;
    document.getElementById('f-cat-custom').style.display = 'none';
  } else {
    catSel.value = '__new__';
    document.getElementById('f-cat-custom').style.display = '';
    document.getElementById('f-cat-custom').value = drink.cat;
  }
  const ingList = document.getElementById('f-ing-list');
  ingList.innerHTML = '';
  drink.ingredients.forEach(ing => addFormIngRow(ing));
}

function buildCatSelect() {
  const sel = document.getElementById('f-cat');
  const filtered = DRINKS.filter(d => formType === 'food' ? d.type === 'food' : (!d.type || d.type === 'drink'));
  const cats = [...new Set(filtered.map(d => d.cat))];
  sel.innerHTML = `<option value="">${t('form_cat_ph')}</option>`;
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    sel.appendChild(opt);
  });
  const newOpt = document.createElement('option');
  newOpt.value = '__new__';
  newOpt.textContent = t('form_cat_new');
  sel.appendChild(newOpt);
}

function handleGlassChange() {
  const sel = document.getElementById('f-glass');
  const other = document.getElementById('f-glass-other');
  if (sel.value === '__other__') {
    other.style.display = '';
    other.focus();
  } else {
    other.style.display = 'none';
  }
}

function handleCatChange() {
  const sel = document.getElementById('f-cat');
  const custom = document.getElementById('f-cat-custom');
  custom.style.display = sel.value === '__new__' ? '' : 'none';
  if (sel.value === '__new__') custom.focus();
}

function addFormIngRow(value = '') {
  const list = document.getElementById('f-ing-list');
  const row = document.createElement('div');
  row.className = 'ing-form-row';
  row.draggable = true;
  row.innerHTML = `
    <span class="ing-drag-handle" title="Kéo để sắp xếp">&#9776;</span>
    <span class="ing-order-num"></span>
    <input type="text" value="${value.replace(/"/g,'&quot;')}" placeholder="Nguyên liệu (VD: Vodka 4cl, Ginger Beer...)">
    <button class="rm-btn" onclick="rmFormIngRow(this)" title="Xoá dòng">✕</button>
  `;

  // Drag events (desktop)
  row.addEventListener('dragstart', e => {
    e.dataTransfer.effectAllowed = 'move';
    row._dragSrc = true;
    setTimeout(() => row.classList.add('dragging'), 0);
  });
  row.addEventListener('dragend', () => {
    row._dragSrc = false;
    row.classList.remove('dragging');
    document.querySelectorAll('.ing-form-row').forEach(r => r.classList.remove('drag-over'));
    updateIngOrderNums();
  });
  row.addEventListener('dragover', e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    document.querySelectorAll('.ing-form-row').forEach(r => r.classList.remove('drag-over'));
    row.classList.add('drag-over');
  });
  row.addEventListener('dragleave', () => row.classList.remove('drag-over'));
  row.addEventListener('drop', e => {
    e.preventDefault();
    row.classList.remove('drag-over');
    const src = document.querySelector('.ing-form-row.dragging');
    if (src && src !== row) {
      const rows = [...list.querySelectorAll('.ing-form-row')];
      const srcIdx = rows.indexOf(src);
      const tgtIdx = rows.indexOf(row);
      if (srcIdx < tgtIdx) list.insertBefore(src, row.nextSibling);
      else list.insertBefore(src, row);
    }
    updateIngOrderNums();
  });

  // Touch drag (mobile)
  const handle = row.querySelector('.ing-drag-handle');
  let touchStartY = 0, touchClone = null, touchSrc = null;
  handle.addEventListener('touchstart', e => {
    touchSrc = row;
    touchStartY = e.touches[0].clientY;
    row.classList.add('dragging');
    // Create floating clone
    touchClone = row.cloneNode(true);
    touchClone.style.cssText = 'position:fixed;left:8px;right:8px;z-index:999;opacity:0.85;pointer-events:none;box-shadow:0 8px 24px rgba(0,0,0,0.2);background:white;border-radius:8px;padding:8px;';
    touchClone.style.top = row.getBoundingClientRect().top + 'px';
    touchClone.style.width = row.offsetWidth + 'px';
    document.body.appendChild(touchClone);
    e.preventDefault();
  }, { passive: false });
  handle.addEventListener('touchmove', e => {
    if (!touchSrc || !touchClone) return;
    const y = e.touches[0].clientY;
    touchClone.style.top = (y - 20) + 'px';
    // Find target row under finger
    document.querySelectorAll('.ing-form-row').forEach(r => r.classList.remove('drag-over'));
    const target = document.elementFromPoint(e.touches[0].clientX, y);
    const targetRow = target ? target.closest('.ing-form-row') : null;
    if (targetRow && targetRow !== touchSrc) targetRow.classList.add('drag-over');
    e.preventDefault();
  }, { passive: false });
  handle.addEventListener('touchend', e => {
    if (!touchSrc) return;
    touchSrc.classList.remove('dragging');
    if (touchClone) { touchClone.remove(); touchClone = null; }
    // Find target
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
    document.querySelectorAll('.ing-form-row').forEach(r => r.classList.remove('drag-over'));
    updateIngOrderNums();
    touchSrc = null;
  });

  list.appendChild(row);
  updateIngOrderNums();
  row.querySelector('input').focus();
}

function updateIngOrderNums() {
  const rows = document.querySelectorAll('#f-ing-list .ing-form-row');
  rows.forEach((r, i) => {
    const num = r.querySelector('.ing-order-num');
    if (num) num.textContent = rows.length > 1 ? (i + 1) + '.' : '';
  });
}

function rmFormIngRow(btn) {
  const rows = document.querySelectorAll('#f-ing-list .ing-form-row');
  if (rows.length > 1) {
    btn.closest('.ing-form-row').remove();
    updateIngOrderNums();
  }
}

function saveDrink() {
  const name = document.getElementById('f-name').value.trim();
  const catSel = document.getElementById('f-cat').value;
  const catCustom = document.getElementById('f-cat-custom').value.trim();
  const cat = catSel === '__new__' ? catCustom : catSel;
  const desc = document.getElementById('f-desc').value.trim();
  const glassSel = document.getElementById('f-glass').value;
  const glass = glassSel === '__other__'
    ? document.getElementById('f-glass-other').value.trim()
    : glassSel;
  const note = document.getElementById('f-note').value.trim();
  const ingredients = [...document.querySelectorAll('.ing-form-row input')]
    .map(i => i.value.trim()).filter(v => v);

  // Validation
  let valid = true;
  const nameEl = document.getElementById('f-name');
  nameEl.classList.toggle('error', !name);
  const catEl = document.getElementById('f-cat');
  catEl.classList.toggle('error', !cat);
  if (!name || !cat || ingredients.length === 0) {
    showToast(t('toast_validate'), 'red');
    return;
  }

  const newDrink = { cat, name, desc, ingredients, glass, note, _custom: true, type: formType };

  // Always replace any existing entry with same name (override built-in or custom)
  let customs = loadCustomDrinks();
  const diDRINKS = DRINKS.findIndex(d => d.name === name);
  if (diDRINKS !== -1) DRINKS.splice(diDRINKS, 1);
  customs = customs.filter(d => d.name !== name);

  customs.push(newDrink);
  saveCustomDrinks(customs);
  DRINKS.push(newDrink);

  // Sync to Supabase in background
  sbUpsert(newDrink);

  showToast(t('toast_saved', {name}), 'green');
  editingDrinkName = null;

  // Refresh views
  rebuildCatFilter();
  rebuildTrainCatChecks();
  renderGrid('all');
  // reset Tất cả button
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));

  setTimeout(() => switchMode('browse'), 600);
}

function deleteEditingDrink() {
  if (!editingDrinkName) return;
  // use i18n for confirm
  if (!confirm(t('confirm_del_drink', {name: editingDrinkName}))) return;
  doDeleteDrink(editingDrinkName);
  cancelEdit();
}

function deleteCardDrink(name) {
  if (!confirm(t('confirm_del_drink', {name}))) return;
  doDeleteDrink(name);
  renderGrid('all');
  rebuildCatFilter();
  rebuildTrainCatChecks();
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
  showToast(t('toast_deleted'), 'red');
}

function doDeleteDrink(name) {
  const di = DRINKS.findIndex(d => d.name === name);
  if (di !== -1) DRINKS.splice(di, 1);
  let customs = loadCustomDrinks().filter(d => d.name !== name);
  saveCustomDrinks(customs);
  // Sync delete to Supabase in background
  sbDelete(name);
}

function cancelEdit() {
  switchMode('browse');
}

/* ═══════════════════════════════════════
   EXPORT / IMPORT
═══════════════════════════════════════ */
function exportData() {
  const customs = loadCustomDrinks();
  if (customs.length === 0) {
    showToast(t('toast_export_none'), 'red'); return;
  }
  const date = new Date().toISOString().slice(0,10);
  const blob = new Blob([JSON.stringify(customs, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `origami-drinks-${date}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast(t('toast_export', {n: customs.length}), 'green');
}

function importData(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data)) throw new Error();
      let imported = 0, skipped = 0;
      data.forEach(d => {
        if (!d.name || !Array.isArray(d.ingredients)) { skipped++; return; }
        d._custom = true;
        // Remove old entry
        const di = DRINKS.findIndex(x => x.name === d.name);
        if (di !== -1) DRINKS.splice(di, 1);
        DRINKS.push(d);
        imported++;
      });
      // Merge with existing customs (imported wins)
      const validImported = data.filter(d => d.name && Array.isArray(d.ingredients));
      let existing = loadCustomDrinks().filter(x => !data.find(d => d.name === x.name));
      saveCustomDrinks([...existing, ...validImported]);
      // Sync all imported drinks to Supabase
      validImported.forEach(d => sbUpsert(d));
      rebuildCatFilter();
      rebuildTrainCatChecks();
      renderGrid(currentBrowseCat, currentSearch);
      showToast(t('toast_import', {n: imported}) + (skipped ? t('toast_import_skip', {n: skipped}) : ''), 'green');
    } catch(err) {
      showToast(t('toast_import_err'), 'red');
    }
    input.value = '';
  };
  reader.readAsText(file);
}

function showToast(msg, type = '') {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.className = 'toast ' + type;
  void el.offsetWidth;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ═══════════════════════════════════════
   MODE SWITCH
═══════════════════════════════════════ */
// Ẩn/hiện tab "Nhập công thức" dựa trên nick hiện tại
function applyAddTabVisibility() {
  const isLinhklein = getCurrentPlayer().trim().toLowerCase() === 'linhklein';
  document.querySelectorAll('.mode-tab').forEach(t => {
    if (t.getAttribute('onclick') && t.getAttribute('onclick').includes("'add'")) {
      t.style.display = isLinhklein ? '' : 'none';
    }
  });
}

function switchMode(mode) {
  // Chỉ Linhklein mới được dùng tab Nhập công thức
  if (getCurrentPlayer().trim().toLowerCase() !== 'linhklein' && mode === 'add') {
    showToast(t('toast_no_perm'), 'red');
    return;
  }
  const modes = ['browse','train','add','history'];
  document.querySelectorAll('.mode-tab').forEach((t, i) => {
    t.classList.toggle('active', modes[i] === mode);
  });
  document.getElementById('browse-mode').style.display   = mode === 'browse'  ? 'block' : 'none';
  document.getElementById('train-mode').style.display    = mode === 'train'   ? 'block' : 'none';
  document.getElementById('add-mode').style.display      = mode === 'add'     ? 'block' : 'none';
  document.getElementById('history-mode').style.display  = mode === 'history' ? 'block' : 'none';
  if (mode === 'add' && editingDrinkName === undefined) openAddMode();
  if (mode === 'add' && editingDrinkName === null) openAddMode();
  if (mode === 'history') buildHistory();
  if (mode === 'train') buildTrainSettings();
}

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
try {
  applyI18n();
  buildBrowse();
  buildTrainSettings();
} catch(e) { console.error('Init render failed:', e); }

// Init nickname display
(function initNickname() {
  try {
    const player = getCurrentPlayer();
    document.getElementById('nick-display').textContent = player || '—';
    if (!player) {
      // First visit: show modal after short delay
      setTimeout(() => openNickModal(), 600);
    } else {
      applyAddTabVisibility();
      // Defer Supabase sync to avoid overloading mobile on startup
      setTimeout(() => syncScoresFromSupabase(), 1500);
    }
  } catch(e) { console.error('Init nickname failed:', e); }
})();

// Defer heavy Supabase operations to after initial render is complete
setTimeout(() => {
  try {
    syncFromSupabase();
    // Sync drink images
    applyImagesToDrinks();
    syncDrinkImages().then(() => renderGrid(currentBrowseCat, currentSearch)).catch(() => {});
  } catch(e) { console.error('Deferred sync failed:', e); }
}, 2000);

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ── Supabase Realtime: tự động cập nhật khi có thay đổi ──
(function startRealtimeSync() {
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
})();
