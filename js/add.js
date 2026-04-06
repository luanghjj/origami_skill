/* ═══════════════════════════════════════
   ADD / EDIT MODE
═══════════════════════════════════════ */
let editingDrinkName = null; // null = new, string = editing

function openAddMode() {
  editingDrinkName = null;
  formType = 'drink';
  setFormType('drink');
  document.getElementById('add-mode-title').textContent = 'Nhập công thức';
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
  sel.innerHTML = `<option value="">— Chọn ${isFood ? 'món ăn' : 'đồ uống'} cần nhập —</option>`;
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
  document.getElementById('add-mode-title').textContent = 'Chỉnh sửa công thức';
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
  sel.innerHTML = '<option value="">— Chọn nhóm —</option>';
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    sel.appendChild(opt);
  });
  const newOpt = document.createElement('option');
  newOpt.value = '__new__';
  newOpt.textContent = '+ Tạo nhóm mới...';
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
<input type="text" value="${value.replace(/"/g, '&quot;')}" placeholder="Nguyên liệu (VD: Vodka 4cl, Ginger Beer...)">
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
    showToast(T('toast_fill'), 'red');
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

  showToast(`${T('toast_save_ok')} ${name}`, 'green');
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
  if (!confirm(`${T('confirm_delete')} "${editingDrinkName}" ${T('confirm_delete2')}`)) return;
  doDeleteDrink(editingDrinkName);
  cancelEdit();
}

function deleteCardDrink(name) {
  if (!confirm(`${T('confirm_delete')} "${name}" ${T('confirm_delete2')}`)) return;
  doDeleteDrink(name);
  renderGrid('all');
  rebuildCatFilter();
  rebuildTrainCatChecks();
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
  showToast(T('toast_delete_ok'), 'red');
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
    showToast(T('toast_no_export'), 'red'); return;
  }
  const date = new Date().toISOString().slice(0, 10);
  const blob = new Blob([JSON.stringify(customs, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `origami-drinks-${date}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast(`${T('toast_export')} ${customs.length} ${T('toast_export_unit')}`, 'green');
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
      showToast(`${T('toast_import_ok')} ${imported}`, 'green');
    } catch (err) {
      showToast(T('toast_invalid'), 'red');
    }
    input.value = '';
  };
  reader.readAsText(file);
}

