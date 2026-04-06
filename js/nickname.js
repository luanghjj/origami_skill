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
const SCORES_KEY = 'origami_scores';
const NICKNAME_KEY = 'origami_nickname';

/* ── Player / Nickname ── */
function getCurrentPlayer() {
  return localStorage.getItem(NICKNAME_KEY) || '';
}
function isAdmin() {
  const name = getCurrentPlayer().trim().toLowerCase();
  return name === 'linhklein' || name === 'minh';
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
      hint.innerHTML = T('nick_or') + ' ' + players.map(p =>
        `<span class="nick-pick" onclick="pickPlayer(this)">${p.replace(/</g, '&lt;')}</span>`).join('');
    } else { hint.innerHTML = ''; }
  } catch (e) { }
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
    if (!isAdmin()) {
      const addMode = document.getElementById('add-mode');
      if (addMode && addMode.style.display !== 'none') switchMode('browse');
    }
  }
  showToast(`${T('toast_welcome')} ${val}!`, 'green');
}

/* ── Scores: per-player ── */
function loadScores() {
  const player = getCurrentPlayer();
  if (!player) return {};
  try {
    const all = JSON.parse(localStorage.getItem(SCORES_KEY) || '{}');
    return all[player] || {};
  } catch (e) { return {}; }
}

function saveScores(scores) {
  const player = getCurrentPlayer();
  if (!player) return;
  try {
    const all = JSON.parse(localStorage.getItem(SCORES_KEY) || '{}');
    all[player] = scores;
    localStorage.setItem(SCORES_KEY, JSON.stringify(all));
  } catch (e) { }
}

// Upsert one score row to Supabase in background
async function sbUpsertScore(drinkName, sc) {
  const player = getCurrentPlayer();
  if (!player || !sb) return;
  try {
    await sb.from('drink_scores').upsert({
      player,
      drink_name: drinkName,
      correct: sc.correct,
      total: sc.total,
      history: sc.history || []
    }, { onConflict: 'player,drink_name' });
  } catch (e) { console.warn('Score upsert failed', e); }
}

// Fetch scores for current player from Supabase and merge into localStorage
async function syncScoresFromSupabase() {
  const player = getCurrentPlayer();
  if (!player || !sb) return;
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
  } catch (e) { console.warn('Scores sync failed', e); }
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
