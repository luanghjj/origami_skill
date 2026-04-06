/* ═══════════════════════════════════════
   HISTORY VIEW
═══════════════════════════════════════ */
function buildHistory() {
  const player = getCurrentPlayer();
  const scores = loadScores();
  const container = document.getElementById('history-content');

  if (!player) {
    container.innerHTML = `<div class="hist-empty">${T('hist_no_player')}<br><button class="btn btn-check" style="margin-top:12px" onclick="openNickModal()">${T('hist_enter_nick')}</button></div>`;
    return;
  }

  if (Object.keys(scores).length === 0) {
    container.innerHTML = `<div class="hist-empty">🎯 <strong>${player}</strong> ${T('hist_no_data')}<br>${T('hist_prompt')}</div>`;
    return;
  }

  // Aggregate all history entries across all drinks
  const dayMap = {}; // date -> { total, correct }
  let totalAttempts = 0, totalCorrect = 0;

  Object.entries(scores).forEach(([name, sc]) => {
    totalAttempts += sc.total || 0;
    totalCorrect += sc.correct || 0;
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
  ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T('hist_streak')}</div>` : ''}
  <button onclick="openNickModal()" style="margin-left:auto;font-size:0.78rem;padding:4px 12px;border-radius:14px;border:1.5px solid var(--border);background:white;cursor:pointer;color:var(--text-muted);">${T('hist_change')}</button>
</div>
<div class="hist-summary-grid">
  <div class="hist-stat-box"><div class="h-val">${totalAttempts}</div><div class="h-lbl">${T('hist_attempts')}</div></div>
  <div class="hist-stat-box"><div class="h-val">${overallPct}%</div><div class="h-lbl">${T('hist_pct')}</div></div>
  <div class="hist-stat-box"><div class="h-val">${masteredCount}/${numDrinks}</div><div class="h-lbl">${T('hist_mastered')}</div></div>
  <div class="hist-stat-box"><div class="h-val">${sortedDays.length}</div><div class="h-lbl">${T('hist_days')}</div></div>
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
    <div class="hist-table-title">${T('hist_progress')}</div>
    <table class="hist-table">
      <thead><tr>
        <th>${T('hist_name')}</th><th>${T('hist_cat')}</th><th>${T('hist_tries')}</th><th>${T('hist_level')}</th>
      </tr></thead>
      <tbody>`;
    drinkRows.forEach(([name, sc]) => {
      const pct = Math.round(sc.correct / sc.total * 100);
      const color = pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)';
      const drink = DRINKS.find(d => d.name === name);
      html += `<tr>
    <td><strong>${name}</strong></td>
    <td style="color:var(--text-muted);font-size:0.8rem">${drink ? trCat(drink.cat) : ''}</td>
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
    <div class="hist-table-title">${T('hist_recent')}</div>
    <div class="hist-day-list">`;
    sortedDays.slice(0, 30).forEach(day => {
      const d = dayMap[day];
      const pct = Math.round(d.correct / d.total * 100);
      const color = pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)';
      const label = day === todayStr ? T('hist_today') : day === yesterday ? T('hist_yesterday') : day;
      html += `<div class="hist-day-item">
    <span class="hist-day-date">${label}</span>
    <span class="hist-day-detail">${[...d.drinks].slice(0, 4).join(', ')}${d.drinks.size > 4 ? ` +${d.drinks.size - 4}` : ''}</span>
    <span class="hist-day-score" style="color:${color}">${d.correct}/${d.total} (${pct}%)</span>
  </div>`;
    });
    html += '</div></div>';
  }

  container.innerHTML = html;
}
