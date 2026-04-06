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
    label.innerHTML = `<input type="checkbox" checked value="${cat}"> ${trCat(cat)}`;
    label.querySelector('input').addEventListener('change', function () {
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
  if (el) el.textContent = `(${weakPool.length}/${pool.length} ${T('weak_suffix')})`;
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
  const todayMs = new Date().setHours(0, 0, 0, 0);
  const lastMs = sc.lastPracticed ? new Date(sc.lastPracticed).getTime() : 0;
  const daysSince = Math.floor((todayMs - lastMs) / 86400000);
  const acc = sc.correct / sc.total;
  return daysSince * (1.2 - acc) + Math.random() * 0.3;
}

function startTraining() {
  const cats = getSelectedCats();
  if (cats.length === 0) {
    alert(T('alert_select_cat')); return;
  }
  let pool = getFilteredByType(trainType).filter(d => cats.includes(d.cat));
  const weakOnly = document.getElementById('weak-only').checked;
  if (weakOnly) {
    const weakPool = pool.filter(d => isWeak(d.name));
    if (weakPool.length === 0) {
      showToast(T('alert_mastered'), 'green'); return;
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
  document.getElementById('fc-category').textContent = trCat(drink.cat);
  document.getElementById('fc-name').textContent = drink.name;
  document.getElementById('fc-desc').textContent = trVi(drink.desc);

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
    chip.textContent = trVi(ing);
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
    showToast(T('alert_select_ing'), ''); return;
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

    if (isSelected && isCorrect) { chip.className = 'chip chip-correct'; numHit++; }
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
    rp.innerHTML = `<h4>${T('result_perfect')}</h4>
  ${drink.note ? `<div class="note-reveal">💡 ${trVi(drink.note)}</div>` : ''}`;
  } else {
    rp.className = 'result-panel show partial-correct';
    rp.innerHTML = `<h4>⚠️ ${numHit}/${total} ${T('result_partial')} ${wrongSelected ? `${wrongSelected} ${T('result_wrong')}` : ''}</h4>
  <div class="correct-list-detail">
    <div class="cl-title">${T('correct_list')}</div>
    <ol>${correct.map(i => `<li>${trVi(i)}</li>`).join('')}</ol>
  </div>
  ${drink.note ? `<div class="note-reveal">💡 ${trVi(drink.note)}</div>` : ''}`;
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
  rp.innerHTML = `<h4>${T('result_reveal')}</h4>
${drink.note ? `<div class="note-reveal">💡 ${trVi(drink.note)}</div>` : ''}`;
}

function nextDrink() {
  if (!answered) {
    if (!confirm(T('confirm_skip'))) return;
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
  if (pct >= 95) return { lv: 5, vi: 'Xuất sắc', de: 'Hervorragend', color: 'slv-5' };
  if (pct >= 80) return { lv: 4, vi: 'Giỏi', de: 'Gut', color: 'slv-4' };
  if (pct >= 60) return { lv: 3, vi: 'Khá', de: 'Befriedigend', color: 'slv-3' };
  if (pct >= 40) return { lv: 2, vi: 'Trung bình', de: 'Ausreichend', color: 'slv-2' };
  return { lv: 1, vi: 'Cần cải thiện', de: 'Mangelhaft', color: 'slv-1' };
}

function showDoneScreen() {
  document.getElementById('train-game').style.display = 'none';
  const done = document.getElementById('done-screen');
  done.classList.add('show');
  const pct = Math.round((trainCorrect / trainQueue.length) * 100);
  document.getElementById('final-score').textContent = `${trainCorrect} / ${trainQueue.length}`;

  // Score level 1-5
  const sl = getScoreLevel(pct);
  const slLabel = currentLang === 'de' ? sl.de : sl.vi;
  const slSub = currentLang === 'de' ? sl.vi : sl.de;
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
  <span class="level-label">${slLabel}<small>${slSub} · ${pct}%</small></span>
</div>`;

  let emoji = '😅', msg = T('msg_low');
  if (pct >= 95) { emoji = '🌟'; msg = T('msg_95'); }
  else if (pct >= 80) { emoji = '🎉'; msg = T('msg_80'); }
  else if (pct >= 60) { emoji = '💪'; msg = T('msg_60'); }
  else if (pct >= 40) { emoji = '🤔'; msg = T('msg_40'); }
  done.querySelector('.done-emoji').textContent = emoji;
  document.getElementById('final-msg').textContent = msg;
  const retryBtn = document.getElementById('retry-wrong-btn');
  if (trainWrongDrinks.length > 0) {
    retryBtn.style.display = '';
    retryBtn.textContent = `🔁 ${T('done_retry').replace('🔁 ', '')} ${trainWrongDrinks.length}`;
    // Wrong-drink breakdown
    const bd = document.getElementById('wrong-breakdown');
    bd.innerHTML = `<details><summary>📋 ${T('wrong_detail')} ${trainWrongDrinks.length} ${T('wrong_items')}</summary>${trainWrongDrinks.map(d => `<div class="wb-item"><div class="wb-name">${d.name}</div><div class="wb-list">${d.ingredients.map(i => trVi(i)).join(' · ')}</div></div>`).join('')
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
