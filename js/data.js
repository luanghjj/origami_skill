/* ═══════════════════════════════════════════════
   I18N — Vietnamese / Deutsch
═══════════════════════════════════════════════ */
let curLang = localStorage.getItem('origami_lang') || 'vi';

const I18N = {
  vi: {
    /* ── Header / Tabs ── */
    tab_browse:  '📖 Học',
    tab_train:   '🎯 Luyện tập',
    tab_add:     '✏️ Nhập công thức',
    tab_history: '📊 Lịch sử',

    /* ── Nickname modal ── */
    nick_title:      '👤 Bạn là ai?',
    nick_desc:       'Nhập nickname để lưu tiến độ riêng của bạn',
    nick_placeholder:'Nickname của bạn...',
    nick_confirm:    '✔️ Xác nhận',
    nick_or_pick:    'Hoặc chọn: ',

    /* ── Browse ── */
    browse_title:  'Tất cả nội dung',
    type_all:      '📚 Tất cả',
    type_drink:    '🍹 Đồ uống',
    type_food:     '🍽️ Đồ ăn',
    type_wirtschaft:   '💰 Kinh tế',
    type_operations:   '🔧 Operations',
    type_fachkompetenz:'🍸 Fachkompetenz',
    type_compliance:   '⚖️ Compliance',
    type_sales:        '📢 Sales',
    type_softskills:   '🌐 Soft Skills',
    type_sushi:        '🍣 Sushi',
    type_hotkitchen:   '🔥 Hot Kitchen',
    search_placeholder: 'Tìm tên, danh mục hoặc nội dung...',
    cat_all:       'Tất cả',
    flip_tap:      '🔄 Lật xem',
    flip_back:     '← lật lại',
    empty_search:  'Không tìm thấy kết quả nào.',
    empty_list:    'Không có đồ uống nào.',
    badge_custom:  'Tùy chỉnh',
    badge_not_trained: '⚪ Chưa luyện',
    badge_weak:    '🔴 Còn yếu',
    badge_learning:'🟡 Đang học',
    badge_mastered:'🟢 Thuộc rồi',

    /* ── Browse section titles (filterBrowseType) ── */
    section_all:          'Tất cả nội dung',
    section_drink:        'Đồ uống',
    section_food:         'Thực đơn Đồ ăn',
    section_wirtschaft:   '💰 Kinh tế · Wirtschaftlichkeit',
    section_operations:   '🔧 Operations · Vận hành Bar',
    section_fachkompetenz:'🍸 Fachkompetenz Getränke',
    section_compliance:   '⚖️ Compliance · Recht & Vorschriften',
    section_sales:        '📢 Sales & Marketing',
    section_softskills:   '🌐 Soft Skills & Sprachen',
    section_sushi:        '🍣 Sushi & Japanische Küche',
    section_hotkitchen:   '🔥 Hot Kitchen',

    /* ── Add / Edit Mode ── */
    add_title:          'Nhập công thức',
    edit_title:         'Chỉnh sửa công thức',
    form_type:          'Loại mục',
    form_name:          'Tên món <span class="required">*</span>',
    form_name_ph:       '— Chọn món cần nhập —',
    form_cat:           'Danh mục <span class="required">*</span>',
    form_cat_ph:        '— Chọn nhóm —',
    form_cat_custom:    'Nhập tên nhóm mới...',
    form_cat_new:       '+ Tạo nhóm mới...',
    form_desc:          'Mô tả ngắn',
    form_desc_ph:       'VD: Cocktail xoài chua ngọt',
    form_ing:           'Nguyên liệu <span class="required">*</span>',
    form_add_ing:       '+ Thêm nguyên liệu',
    form_glass:         'Loại ly / dụng cụ',
    form_glass_ph:      '— Chọn loại ly —',
    form_glass_other:   'Khác (nhập tay)...',
    form_glass_other_ph:'Nhập loại ly...',
    form_note:          'Ghi chú / cách pha',
    form_note_ph:       'VD: Tỉ lệ 1:3, thêm đá, trang trí bạc hà...',
    form_save:          '💾 Lưu công thức',
    form_delete:        '🗑 Xoá',
    form_cancel:        '✕ Huỷ',
    form_ing_ph:        'Nguyên liệu (VD: Vodka 4cl, Ginger Beer...)',

    /* ── Train Mode ── */
    train_title:     'Chọn loại & nhóm luyện tập',
    train_weak_only: '⚡ Chỉ luyện món chưa thuộc',
    train_start:     '▶ Bắt đầu luyện tập',
    train_end:       '✕ Kết thúc',
    stat_current:    'Câu',
    stat_total:      'Tổng',
    stat_correct:    'Đúng',
    stat_wrong:      'Sai',
    chip_instruction:'Chọn',
    chip_instruction2:'nguyên liệu đúng cho món này',
    btn_check:       '✓ Kiểm tra',
    btn_reveal:      '👁 Xem đáp án',
    btn_next:        'Tiếp theo →',
    weak_count_tpl:  '({weak}/{total} món chưa thuộc)',
    train_select_cat:'Vui lòng chọn ít nhất 1 nhóm!',
    train_all_mastered:'Bạn đã thuộc hết rồi! 🌟',
    train_pick_one:  'Hãy chọn ít nhất 1 nguyên liệu!',

    /* ── Result Panel ── */
    result_perfect: '✅ Hoàn hảo! Chọn đúng hết rồi!',
    result_partial: '⚠️ {hit}/{total} đúng',
    result_wrong:   ', {wrong} sai',
    result_answer:  'Đáp án đúng:',
    result_reveal:  '👁 Các chip xanh là đáp án đúng.',
    next_skip:      'Bạn chưa kiểm tra. Bỏ qua câu này?',

    /* ── Done Screen ── */
    done_heading:   'Hoàn thành!',
    done_msg:       'Hãy luyện tập thêm nhé!',
    done_retry:     '🔁 Ôn lại lỗi sai',
    done_restart:   '🔄 Luyện tiếp',
    done_retry_tpl: '🔁 Ôn lại {n} câu sai',
    done_detail_tpl:'📋 Chi tiết {n} câu sai',
    done_msg_95:    'Xuất sắc! Bạn đã thuộc hầu hết rồi!',
    done_msg_80:    'Giỏi lắm! Hãy ôn lại vài phần chưa chắc.',
    done_msg_60:    'Khá ổn! Tiếp tục cố gắng nhé.',
    done_msg_40:    'Cần ôn lại thêm, đừng bỏ cuộc!',
    done_msg_low:   'Cần luyện tập thêm nhiều hơn nhé!',
    score_lv5: 'Xuất sắc',  score_lv4: 'Giỏi',
    score_lv3: 'Khá',       score_lv2: 'Trung bình',
    score_lv1: 'Cần cải thiện',

    /* ── History ── */
    history_title:     '📊 Lịch sử luyện tập',
    hist_no_nick:      '👤 Hãy nhập nickname trước để xem lịch sử.',
    hist_no_nick_btn:  'Nhập nickname',
    hist_no_data:      'chưa có lịch sử luyện tập nào.',
    hist_no_data_hint: 'Hãy vào tab Luyện tập để bắt đầu!',
    hist_streak:       '{n} ngày luyện liên tiếp!',
    hist_switch:       '✏️ Đổi người',
    hist_attempts:     'Lượt luyện',
    hist_pct:          'Tỷ lệ đúng',
    hist_mastered:     'Món đã thuộc',
    hist_days:         'Ngày luyện',
    hist_table_title:  '🍹 Tiến độ từng món (yếu nhất trước)',
    hist_col_name:     'Món',
    hist_col_cat:      'Danh mục',
    hist_col_count:    'Lượt',
    hist_col_level:    'Mức độ',
    hist_recent:       '📅 Hoạt động gần đây',
    hist_today:        'Hôm nay',
    hist_yesterday:    'Hôm qua',

    /* ── Toast / misc ── */
    toast_hello:        '👋 Xin chào, {name}!',
    toast_saved:        '✅ Đã lưu công thức: {name}',
    toast_deleted:      '🗑 Đã xoá công thức.',
    toast_no_perm:      'Bạn không có quyền nhập công thức 🔒',
    toast_validate:     'Vui lòng điền tên, danh mục và ít nhất 1 nguyên liệu!',
    toast_export:       '⬇️ Đã xuất {n} công thức!',
    toast_export_none:  'Chưa có công thức nào được lưu!',
    toast_import:       '✅ Nhập xong: {n} công thức',
    toast_import_skip:  ', bỏ qua {n} lỗi',
    toast_import_err:   'File không hợp lệ! Vui lòng chọn file .json được xuất từ app này.',
    toast_img_uploading:'Đang tải ảnh lên...',
    toast_img_done:     'Đã tải ảnh lên! 📸',
    toast_img_max:      'Ảnh tối đa 2MB!',
    toast_img_del:      'Đã xoá ảnh.',
    confirm_del_img:    'Xoá ảnh của "{name}"?',
    confirm_del_drink:  'Xoá "{name}" khỏi danh sách?',
    sync_syncing:       '☁️ Đang đồng bộ...',
    sync_ok:            '✅ Đã đồng bộ Supabase',
    sync_realtime:      '🔄 Vừa có cập nhật mới',
    sync_offline:       '⚠️ Offline (dùng cache)',
    btn_edit:           '✏️ Sửa',
    btn_del:            '🗑 Xoá',
    img_change:         '📷 Đổi ảnh',
    img_add:            '📷 Thêm ảnh',
    form_select_drink:  '— Chọn đồ uống cần nhập —',
    form_select_food:   '— Chọn món ăn cần nhập —',
  },

  de: {
    /* ── Header / Tabs ── */
    tab_browse:  '📖 Lernen',
    tab_train:   '🎯 Üben',
    tab_add:     '✏️ Rezept eintragen',
    tab_history: '📊 Verlauf',

    /* ── Nickname modal ── */
    nick_title:      '👤 Wer bist du?',
    nick_desc:       'Nickname eingeben, um deinen Fortschritt zu speichern',
    nick_placeholder:'Dein Nickname...',
    nick_confirm:    '✔️ Bestätigen',
    nick_or_pick:    'Oder wähle: ',

    /* ── Browse ── */
    browse_title:  'Alle Inhalte',
    type_all:      '📚 Alle',
    type_drink:    '🍹 Getränke',
    type_food:     '🍽️ Speisen',
    type_wirtschaft:   '💰 Wirtschaft',
    type_operations:   '🔧 Operations',
    type_fachkompetenz:'🍸 Fachkompetenz',
    type_compliance:   '⚖️ Compliance',
    type_sales:        '📢 Sales',
    type_softskills:   '🌐 Soft Skills',
    type_sushi:        '🍣 Sushi',
    type_hotkitchen:   '🔥 Heiße Küche',
    search_placeholder: 'Name, Kategorie oder Inhalt suchen...',
    cat_all:       'Alle',
    flip_tap:      '🔄 Umdrehen',
    flip_back:     '← zurück',
    empty_search:  'Keine Ergebnisse gefunden.',
    empty_list:    'Keine Getränke vorhanden.',
    badge_custom:  'Eigene',
    badge_not_trained: '⚪ Noch nicht geübt',
    badge_weak:    '🔴 Schwach',
    badge_learning:'🟡 Lernend',
    badge_mastered:'🟢 Beherrscht',

    /* ── Browse section titles ── */
    section_all:          'Alle Inhalte',
    section_drink:        'Getränke',
    section_food:         'Speisekarte',
    section_wirtschaft:   '💰 Wirtschaftlichkeit',
    section_operations:   '🔧 Operations · Bar-Betrieb',
    section_fachkompetenz:'🍸 Fachkompetenz Getränke',
    section_compliance:   '⚖️ Compliance · Recht & Vorschriften',
    section_sales:        '📢 Sales & Marketing',
    section_softskills:   '🌐 Soft Skills & Sprachen',
    section_sushi:        '🍣 Sushi & Japanische Küche',
    section_hotkitchen:   '🔥 Heiße Küche',

    /* ── Add / Edit Mode ── */
    add_title:          'Rezept eintragen',
    edit_title:         'Rezept bearbeiten',
    form_type:          'Typ',
    form_name:          'Name <span class="required">*</span>',
    form_name_ph:       '— Wähle ein Gericht —',
    form_cat:           'Kategorie <span class="required">*</span>',
    form_cat_ph:        '— Gruppe wählen —',
    form_cat_custom:    'Neuen Gruppennamen eingeben...',
    form_cat_new:       '+ Neue Gruppe erstellen...',
    form_desc:          'Kurzbeschreibung',
    form_desc_ph:       'z.B. Mango-Cocktail süß-sauer',
    form_ing:           'Zutaten <span class="required">*</span>',
    form_add_ing:       '+ Zutat hinzufügen',
    form_glass:         'Glas / Utensilien',
    form_glass_ph:      '— Glas wählen —',
    form_glass_other:   'Andere (manuell)...',
    form_glass_other_ph:'Glas eingeben...',
    form_note:          'Anmerkung / Zubereitung',
    form_note_ph:       'z.B. Verhältnis 1:3, Eis, Minze dekorieren...',
    form_save:          '💾 Rezept speichern',
    form_delete:        '🗑 Löschen',
    form_cancel:        '✕ Abbrechen',
    form_ing_ph:        'Zutat (z.B. Vodka 4cl, Ginger Beer...)',

    /* ── Train Mode ── */
    train_title:     'Typ & Kategorien zum Üben wählen',
    train_weak_only: '⚡ Nur noch nicht beherrschte üben',
    train_start:     '▶ Übung starten',
    train_end:       '✕ Beenden',
    stat_current:    'Frage',
    stat_total:      'Gesamt',
    stat_correct:    'Richtig',
    stat_wrong:      'Falsch',
    chip_instruction:'Wähle',
    chip_instruction2:'richtige Zutaten für dieses Gericht',
    btn_check:       '✓ Prüfen',
    btn_reveal:      '👁 Lösung zeigen',
    btn_next:        'Weiter →',
    weak_count_tpl:  '({weak}/{total} noch nicht beherrscht)',
    train_select_cat:'Bitte mindestens 1 Gruppe wählen!',
    train_all_mastered:'Alles beherrscht! 🌟',
    train_pick_one:  'Bitte mindestens 1 Zutat wählen!',

    /* ── Result Panel ── */
    result_perfect: '✅ Perfekt! Alles richtig!',
    result_partial: '⚠️ {hit}/{total} richtig',
    result_wrong:   ', {wrong} falsch',
    result_answer:  'Richtige Antwort:',
    result_reveal:  '👁 Die grünen Chips sind die richtigen.',
    next_skip:      'Noch nicht geprüft. Diese Frage überspringen?',

    /* ── Done Screen ── */
    done_heading:   'Fertig!',
    done_msg:       'Übe weiter!',
    done_retry:     '🔁 Fehler wiederholen',
    done_restart:   '🔄 Weiter üben',
    done_retry_tpl: '🔁 {n} Fehler wiederholen',
    done_detail_tpl:'📋 Details zu {n} Fehlern',
    done_msg_95:    'Hervorragend! Fast alles beherrscht!',
    done_msg_80:    'Sehr gut! Einige Stellen nochmal üben.',
    done_msg_60:    'Ganz gut! Weiter so!',
    done_msg_40:    'Lass nicht nach, nochmal versuchen!',
    done_msg_low:   'Mehr üben ist nötig!',
    score_lv5: 'Hervorragend', score_lv4: 'Gut',
    score_lv3: 'Befriedigend', score_lv2: 'Ausreichend',
    score_lv1: 'Mangelhaft',

    /* ── History ── */
    history_title:     '📊 Übungsverlauf',
    hist_no_nick:      '👤 Bitte zuerst Nickname eingeben, um den Verlauf zu sehen.',
    hist_no_nick_btn:  'Nickname eingeben',
    hist_no_data:      'hat noch keinen Übungsverlauf.',
    hist_no_data_hint: 'Gehe zum Tab „Üben" und starte!',
    hist_streak:       '{n} Tage in Folge geübt!',
    hist_switch:       '✏️ Wechseln',
    hist_attempts:     'Versuche',
    hist_pct:          'Erfolgsquote',
    hist_mastered:     'Beherrscht',
    hist_days:         'Übungstage',
    hist_table_title:  '🍹 Fortschritt pro Gericht (schwächste zuerst)',
    hist_col_name:     'Gericht',
    hist_col_cat:      'Kategorie',
    hist_col_count:    'Versuche',
    hist_col_level:    'Niveau',
    hist_recent:       '📅 Letzte Aktivitäten',
    hist_today:        'Heute',
    hist_yesterday:    'Gestern',

    /* ── Toast / misc ── */
    toast_hello:        '👋 Hallo, {name}!',
    toast_saved:        '✅ Rezept gespeichert: {name}',
    toast_deleted:      '🗑 Rezept gelöscht.',
    toast_no_perm:      'Du hast keine Berechtigung 🔒',
    toast_validate:     'Bitte Name, Kategorie und mindestens 1 Zutat ausfüllen!',
    toast_export:       '⬇️ {n} Rezepte exportiert!',
    toast_export_none:  'Noch keine Rezepte gespeichert!',
    toast_import:       '✅ Import fertig: {n} Rezepte',
    toast_import_skip:  ', {n} Fehler übersprungen',
    toast_import_err:   'Ungültige Datei! Bitte eine .json-Datei aus dieser App wählen.',
    toast_img_uploading:'Bild wird hochgeladen...',
    toast_img_done:     'Bild hochgeladen! 📸',
    toast_img_max:      'Bild max. 2MB!',
    toast_img_del:      'Bild gelöscht.',
    confirm_del_img:    'Bild von „{name}" löschen?',
    confirm_del_drink:  '„{name}" aus der Liste löschen?',
    sync_syncing:       '☁️ Wird synchronisiert...',
    sync_ok:            '✅ Supabase synchronisiert',
    sync_realtime:      '🔄 Neue Aktualisierung',
    sync_offline:       '⚠️ Offline (Cache wird verwendet)',
    btn_edit:           '✏️ Bearbeiten',
    btn_del:            '🗑 Löschen',
    img_change:         '📷 Bild ändern',
    img_add:            '📷 Bild hinzufügen',
    form_select_drink:  '— Getränk zum Eintragen wählen —',
    form_select_food:   '— Gericht zum Eintragen wählen —',
  }
};

function t(key, vars) {
  let s = (I18N[curLang] && I18N[curLang][key]) || (I18N.vi[key]) || key;
  if (vars) Object.entries(vars).forEach(([k, v]) => { s = s.replace(`{${k}}`, v); });
  return s;
}

/* ── Category name translation (vi → de) ── */
const CAT_DE = {
  'Đồ uống không cồn':  'Alkoholfreie Getränke',
  'Đồ uống nóng':       'Heißgetränke',
  'Cocktail không cồn': 'Alkoholfreie Cocktails',
  'Bia':                 'Bier',
  'Khai vị & Cocktail':  'Aperitif & Cocktails',
  'Sake & Rượu vang':    'Sake & Wein',
  // Food categories
  'Khai vị':             'Vorspeisen',
  'Thịt':                'Fleischgerichte',
  'Hải sản':             'Meeresfrüchte',
  'Chay':                'Vegetarisch',
  'Khai vị':             'Vorspeisen',
  'Tráng miệng':        'Desserts',
  // Sushi categories
  'Sashimi & Tatar':     'Sashimi & Tatar',
  'Cuộn đặc biệt':      'Spezialrollen',
  'Maki Classic':        'Maki Classic',
  'Nigiri':              'Nigiri',
  'Avocado Top':         'Avocado Top',
  'Green Roll':          'Green Roll',
  'Crunchy Roll':        'Crunchy Roll',
  'Maki Light':          'Maki Light',
  'Inside-Out':          'Inside-Out',
  'Spinach Wrap':        'Spinach Wrap',
  'Tatar Roll':          'Tatar Roll',
  'Set Sushi – Lunch':   'Set Sushi – Lunch',
  'Set Sushi – Dinner':  'Set Sushi – Dinner',
  "Chef's Choice":       "Chef's Choice",
  // Skill categories (already in German)
  'Getränkekalkulation':     'Getränkekalkulation',
  'Wareneinsatz-Controlling':'Wareneinsatz-Controlling',
  'Inventur & Bestand':      'Inventur & Bestand',
  'Umsatzoptimierung':       'Umsatzoptimierung',
  'Bar-Setup & Mise en Place':'Bar-Setup & Mise en Place',
  'Speed & Workflow':        'Speed & Workflow',
  'Kassensystem (POS)':      'Kassensystem (POS)',
  'Hygiene & Reinigung Bar': 'Hygiene & Reinigung Bar',
  'Lagerhaltung (FIFO)':     'Lagerhaltung (FIFO)',
};

function tCat(catName) {
  if (curLang === 'de' && CAT_DE[catName]) return CAT_DE[catName];
  return catName;
}

/* ── Glass type translation (vi → de) ── */
const GLASS_DE = {
  'Ly nước': 'Wasserglas',
  'Ly cao': 'Longdrinkglas',
  'Ly thấp': 'Tumbler (Rocks)',
  'Ly cao (Highball)': 'Highball-Glas',
  'Ly Highball': 'Highball-Glas',
  'Ly đồng (Copper Mug)': 'Kupferbecher (Copper Mug)',
  'Ly bia / Ly Pilsner': 'Bierglas / Pilsnerglas',
  'Ly bia': 'Bierglas',
  'Ly bia cao': 'Bierglas (groß)',
  'Ly Weizen cao': 'Weizenglas',
  'Ly Balloon / Ly Highball': 'Ballonglas / Highball',
  'Ly Wine': 'Weinglas',
  'Ly Wine / Ly Champagne': 'Wein- / Champagnerglas',
  'Ly Wine lớn (250ml)': 'Weinglas groß (250ml)',
  'Ly vang trắng': 'Weißweinglas',
  'Ly vang đỏ (rộng hơn)': 'Rotweinglas (bauchig)',
  'Ly vang hồng': 'Roséglas',
  'Ly Champagne (Flute)': 'Champagnerflöte',
  'Chén sake (Ochoko) hoặc ly nhỏ': 'Sake-Schale (Ochoko)',
  'Tách cà phê': 'Kaffeetasse',
  'Demitasse (tách nhỏ)': 'Demitasse (Espressotasse)',
  'Tách Espresso lớn': 'Große Espressotasse',
  'Tách Cappuccino 180ml': 'Cappuccinotasse 180ml',
  'Ấm trà + tách': 'Teekanne + Tasse',
  'Chén': 'Schüssel',
  'Chén nhỏ': 'Kleine Schüssel',
  'Dĩa': 'Teller',
  'Chén salad': 'Salatschüssel',
  'Dĩa + cơm': 'Teller + Reis',
  'Dĩa sashimi': 'Sashimi-Teller',
  'Khay': 'Platte',
  'Dĩa sushi': 'Sushi-Teller',
  'Khay nhiều lớp': 'Etagere / Mehrstöckige Platte',
  'Dĩa tráng miệng': 'Dessertteller',
  'Chén tráng miệng': 'Dessertschüssel',
  'Chén kem': 'Eisbecher',
};

function tGlass(glass) {
  if (curLang === 'de' && GLASS_DE[glass]) return GLASS_DE[glass];
  return glass;
}

/* ── Description & Note translation (vi → de) ── */
const DESC_DE = {
  // Alkoholfreie Getränke
  'Nước lọc Brita': 'Gefiltertes Brita-Wasser',
  'Nước ngọt có ga': 'Kohlensäurehaltiges Erfrischungsgetränk',
  'Nước ngọt không calo': 'Kalorienfreie Limonade',
  'Nước cam có ga': 'Orangenlimonade mit Kohlensäure',
  'Hỗn hợp Coca và Fanta': 'Cola-Fanta-Mischung',
  'Nước chanh có ga': 'Zitronenlimonade mit Kohlensäure',
  'Nước gừng nhẹ có ga': 'Leichtes Ingwer-Erfrischungsgetränk',
  'Nước gừng mạnh có ga': 'Starkes Ingwer-Erfrischungsgetränk',
  'Nước đào': 'Pfirsichgetränk',
  'Nước ép táo': 'Apfelsaft',
  'Nước ép chanh dây': 'Maracujasaft',
  'Nước ép xoài': 'Mangosaft',
  'Nước ép vải': 'Litschisaft',
  'Nước ép pha nước khoáng': 'Saftschorle',
  // Heißgetränke
  'Cà phê đen': 'Schwarzer Kaffee',
  'Cà phê Espresso 1 shot': 'Espresso (1 Shot)',
  'Espresso đôi (2 shot)': 'Doppelter Espresso (2 Shots)',
  'Espresso với sữa bọt': 'Espresso mit Milchschaum',
  'Trà xanh': 'Grüner Tee',
  'Trà nhài': 'Jasmin-Tee',
  'Trà gừng đặc biệt': 'Spezial-Ingwertee',
  'Trà giải cảm': 'Erkältungstee',
  // Alkoholfreie Cocktails
  'Cocktail bạc hà - gừng mát lạnh': 'Erfrischender Minze-Ingwer-Cocktail',
  'Cocktail xoài cay nhẹ': 'Leicht scharfer Mango-Cocktail',
  'Nước chanh Yuzu Nhật Bản': 'Japanische Yuzu-Limonade',
  // Bier
  'Bia Nhật Bản cao cấp': 'Premium japanisches Bier',
  'Bia Nhật không cồn': 'Alkoholfreies japanisches Bier',
  'Bia lúa mì truyền thống Đức': 'Traditionelles deutsches Weizenbier',
  'Bia pha nước chanh': 'Bier mit Limonade gemischt',
  // Aperitif & Cocktails
  'Khai vị hoa cơm cháy mùa hè': 'Sommerlicher Holunderblüten-Aperitif',
  'Khai vị Aperol cổ điển': 'Klassischer Aperol-Aperitif',
  'Khai vị Lillet vị đào': 'Lillet-Aperitif mit Pfirsich',
  'Whiskey pha Coca-Cola': 'Whiskey-Cola',
  'Cocktail Vodka gừng': 'Vodka-Ingwer-Cocktail',
  'Gin Tonic với Roku Gin': 'Gin Tonic mit Roku Gin',
  'Gin Tonic với Kaiza Gin': 'Gin Tonic mit Kaiza Gin',
  'Gin Tonic với Momotaro Gin': 'Gin Tonic mit Momotaro Gin',
  // Sake & Wein
  'Rượu gạo Nhật Bản cao cấp': 'Premium japanischer Reiswein',
  'Rượu vang trắng Riesling': 'Weißwein Riesling',
  'Rượu vang trắng Chardonnay': 'Weißwein Chardonnay',
  'Rượu vang đỏ': 'Rotwein',
  'Rượu vang hồng': 'Roséwein',
  'Rượu Sâm banh / Champagne': 'Champagner / Sekt',
  // Food
  'Súp Miso cá hồi': 'Miso-Suppe mit Lachs',
  'Đậu nành Nhật giòn': 'Knusprige japanische Edamame',
  'Gà xiên nướng sốt đặc biệt': 'Hähnchen-Spieße mit Spezialsauce',
  'Salad rong biển sốt mè': 'Algen-Salat mit Sesam-Dressing',
  'Sủi cảo nhân gà chiên giòn': 'Knusprig gebratene Gyoza mit Hühnerfüllung',
  'Sò điệp áp chảo bơ sốt Yuzu': 'Jakobsmuscheln in Butter mit Yuzu-Sauce',
  'Bơ chiên xù sốt Mayo cay': 'Panierte Avocado mit scharfer Mayo',
  'Súp gà cốt dừa': 'Kokos-Hühnersuppe',
  'Đậu phụ non chiên xù': 'Panierter Seidentofu',
  'Tôm chiên xù sốt Mayo cay': 'Panierte Garnelen mit scharfer Mayo',
  'Cà tím chiên xù sốt Mayo cay': 'Panierte Aubergine mit scharfer Mayo',
  'Kim chi bắp cải Hàn Quốc': 'Koreanisches Kimchi',
  'Đậu phụ chiên giòn sốt xoài': 'Knuspriger Tofu mit Mangosauce',
  'Đậu phụ xào sốt gừng-mật ong': 'Tofu in Ingwer-Honig-Sauce',
  'Gà sốt đậu phộng': 'Hähnchen in Erdnusssauce',
  'Bò và tôm xào cay': 'Scharfes Rind & Garnelen',
  'Gà sốt cà ri mù tạt': 'Hähnchen in Senf-Curry-Sauce',
  'Gà sốt xoài': 'Hähnchen in Mangosauce',
  'Gà cà ri đỏ': 'Rotes Thai-Curry mit Hähnchen',
  'Vịt chiên giòn sốt cà ri đỏ': 'Knusprige Ente in rotem Curry',
  'Cá hồi sốt cà ri cam': 'Lachs in Orangen-Curry-Sauce',
  'Tôm sốt sả': 'Garnelen in Zitronengras-Sauce',
  'Cá hồi Teriyaki': 'Teriyaki-Lachs',
  'Cá hồi sốt cà ri xoài': 'Lachs in Mango-Curry-Sauce',
  // Sashimi & Sushi
  'Sashimi cá ngừ vây xanh thượng hạng': 'Premium Blauflossen-Thunfisch Sashimi',
  'Sashimi cá hồi Scotland nhãn đỏ': 'Schottischer Red-Label-Lachs Sashimi',
  'Sashimi cá ngừ': 'Thunfisch-Sashimi',
  '15 miếng sashimi ngon nhất ngày': '15 Stk. beste Sashimi-Auswahl des Tages',
  'Bít tết cá ngừ 180g': 'Thunfischsteak 180g',
  'Khay sashimi hoàng gia': 'Kaiserliche Sashimi-Platte',
  'Tatar cá cam': 'Hamachi-Tatar',
  'Tatar cá hồi': 'Lachs-Tatar',
  'Tatar cá ngừ': 'Thunfisch-Tatar',
  'Cuộn cá hồi & cá cam': 'Lachs- & Hamachi-Rolle',
  'Cuộn tôm Tempura cá hồi nướng sơ': 'Tempura-Garnelen-Rolle mit geflämmtem Lachs',
  'Cuộn cá hồi Tempura phủ tatar tôm': 'Lachs-Tempura-Rolle mit Garnelen-Tatar',
  'Cuộn cua lột vỏ mềm': 'Softshell-Krabben-Rolle',
  'Cuộn rồng': 'Dragon Roll',
  'Cuộn phượng hoàng': 'Phoenix Roll',
  'Cuộn cá ngừ & sò điệp nướng sơ': 'Thunfisch- & geflämmte Jakobsmuschel-Rolle',
  'Cuộn cầu vồng Origami': 'Origami Rainbow Roll',
  'Cuộn Alaska Inside-Out': 'Alaska Inside-Out Roll',
  'Cuộn tôm Tempura rau thơm': 'Tempura-Garnelen-Kräuter-Rolle',
  'Cuộn cá ngừ phủ bơ': 'Thunfisch-Rolle mit Avocado',
  'Cuộn tatar cá hồi Địa Trung Hải': 'Mediterrane Lachs-Tatar-Rolle',
  'Cuộn rau bina chay': 'Vegetarische Spinat-Rolle',
  'Cuộn cá hồi tẩm ướp vỏ giòn': 'Marinierte Lachs-Rolle mit knuspriger Hülle',
  'Cuộn sếu lươn nguyên con': 'Ganze-Aal-Rolle',
  'Cuộn cá ngừ Alaska Inside-Out': 'Thunfisch Alaska Inside-Out',
  'Cuộn cá cam phủ bơ': 'Hamachi-Rolle mit Avocado',
  // Maki
  'Maki cá hồi bơ': 'Lachs-Avocado-Maki',
  'Maki cá hồi': 'Lachs-Maki',
  'Maki cá cam': 'Hamachi-Maki',
  'Maki cá ngừ': 'Thunfisch-Maki',
  'Maki lươn nướng': 'Unagi-Maki (gegrillter Aal)',
  'Maki dưa chuột': 'Kappa-Maki (Gurke)',
  'Maki bơ': 'Avocado-Maki',
  // Nigiri
  'Nigiri cá hồi': 'Lachs-Nigiri',
  'Nigiri cá cam': 'Hamachi-Nigiri',
  'Nigiri cá ngừ': 'Thunfisch-Nigiri',
  'Nigiri bụng cá ngừ': 'Thunfischbauch-Nigiri (Toro)',
  'Nigiri sò điệp': 'Jakobsmuschel-Nigiri',
  'Nigiri lươn nướng': 'Unagi-Nigiri (gegrillter Aal)',
  'Nigiri Gunkan cuộn rong biển': 'Gunkan-Nigiri (Seetang)',
  'Nigiri bơ': 'Avocado-Nigiri',
  'Nigiri cá hồi nướng sơ': 'Geflämmtes Lachs-Nigiri',
  'Nigiri cá ngừ nướng sơ': 'Geflämmtes Thunfisch-Nigiri',
  'Nigiri tôm': 'Garnelen-Nigiri',
  'Nigiri thanh cua': 'Surimi-Nigiri',
  // Avocado Top / Green Roll / Crunchy Roll / Maki Light
  'Cuộn cá hồi phủ bơ': 'Lachs-Rolle mit Avocado-Topping',
  'Cuộn tôm Tempura phủ bơ': 'Tempura-Garnelen mit Avocado-Topping',
  'Cuộn măng tây Tempura phủ bơ': 'Tempura-Spargel mit Avocado-Topping',
  'Cuộn xanh cá hồi': 'Green Roll Lachs',
  'Cuộn xanh cá ngừ': 'Green Roll Thunfisch',
  'Cuộn xanh tôm Tempura': 'Green Roll Tempura-Garnelen',
  'Cuộn xanh rau củ': 'Green Roll Gemüse',
  'Cuộn xanh măng tây Tempura': 'Green Roll Tempura-Spargel',
  'Cá hồi cay chiên giòn': 'Knuspriger scharfer Lachs',
  'Cá ngừ cay chiên giòn': 'Knuspriger scharfer Thunfisch',
  'Cuộn nhẹ cá hồi bơ': 'Light Roll Lachs-Avocado',
  'Cuộn nhẹ cá cam bơ': 'Light Roll Hamachi-Avocado',
  'Cuộn nhẹ rau củ': 'Light Roll Gemüse',
  // Inside-Out
  'Cuộn cá hồi Inside-Out': 'Lachs Inside-Out',
  'Cuộn cá ngừ Inside-Out': 'Thunfisch Inside-Out',
  'Cuộn tôm Tempura Inside-Out': 'Tempura-Garnelen Inside-Out',
  // Spinach Wrap
  'Cuộn rau bina cá hồi': 'Spinat-Wrap Lachs',
  'Cuộn rau bina cá ngừ': 'Spinat-Wrap Thunfisch',
  // Tatar Roll
  'Cuộn tatar cá hồi': 'Lachs-Tatar-Rolle',
  'Cuộn tatar cá ngừ': 'Thunfisch-Tatar-Rolle',
  // Set Sushi
  'Set Sushi trưa': 'Sushi-Set Lunch',
  'Set Sushi tối': 'Sushi-Set Dinner',
  // Desserts
  'Kem trà xanh': 'Matcha-Eis',
  'Kem vải thiều': 'Litschi-Eis',
  'Kem xoài': 'Mango-Eis',
  'Bánh Mochi kem': 'Mochi-Eiscreme',
  'Chè đậu đỏ': 'Rote-Bohnen-Dessert',
  // Crunchy Roll
  'Tôm chiên giòn': 'Knusprige Garnelen',
  'Măng tây chiên giòn': 'Knuspriger Spargel',
  'Bơ chiên giòn': 'Knusprige Avocado',
  'Gà Yakitori chiên giòn': 'Knuspriges Yakitori-Hähnchen',
  'Cá cam chiên giòn': 'Knuspriger Hamachi',
  'Cá hồi chiên giòn': 'Knuspriger Lachs',
  'Cá ngừ chiên giòn': 'Knuspriger Thunfisch',
  // Maki Light
  'Maki cá hồi thanh đạm': 'Lachs Maki Light',
  'Maki cá ngừ thanh đạm': 'Thunfisch Maki Light',
  'Maki tôm Tempura thanh đạm': 'Garnelen-Tempura Maki Light',
  'Maki chay thanh đạm': 'Vegetarisches Maki Light',
  'Maki gà Yakitori thanh đạm': 'Yakitori Maki Light',
  'Maki tôm thanh đạm': 'Garnelen Maki Light',
  'Maki lươn thanh đạm': 'Unagi Maki Light',
  'Maki sò điệp thanh đạm': 'Jakobsmuschel Maki Light',
  // Inside-Out
  'InsideOut cá hồi Alaska': 'Lachs Alaska Inside-Out',
  'InsideOut cá ngừ Alaska': 'Thunfisch Alaska Inside-Out',
  'InsideOut gà Teriyaki': 'Teriyaki-Hähnchen Inside-Out',
  'InsideOut rau củ Địa Trung Hải': 'Mediterranes Gemüse Inside-Out',
  // Spinach Wrap
  'Cuộn rau bina cá hồi cay': 'Scharfer Lachs Spinat-Wrap',
  'Cuộn rau bina tôm Tempura': 'Garnelen-Tempura Spinat-Wrap',
  'Cuộn rau bina cá ngừ cay': 'Scharfer Thunfisch Spinat-Wrap',
  // Tatar Roll
  'Cuộn tatar cá ngừ Địa Trung Hải': 'Mediterrane Thunfisch-Tatar-Rolle',
  // Set Sushi – Lunch
  '6 Bơ giòn · 2 Sake Nigiri nướng sơ · 6 Tatar Salmon Mediterran': '6 Crunchy Avocado · 2 Flamed Sake Nigiri · 6 Tatar Salmon Mediterran',
  '6 Alaska I/O · 6 Avocado Cheese · 6 Sake Maki': '6 Alaska I/O · 6 Avocado Cheese · 6 Sake Maki',
  '6 Spicy Tuna Roll · 2 Flamed Tuna Nigiri · 3 Crunchy Tuna': '6 Spicy Tuna Roll · 2 Flamed Tuna Nigiri · 3 Crunchy Tuna',
  '6 Avocado Asupara · 6 Cucumber Maki · 6 Green Veggie': '6 Avocado Asupara · 6 Cucumber Maki · 6 Green Veggie',
  // Set Sushi – Dinner
  '6 Tuna I/O · 6 Avocado Cheese · 2 Sake Nigiri · 2 Tuna Nigiri': '6 Tuna I/O · 6 Avocado Cheese · 2 Sake Nigiri · 2 Tuna Nigiri',
  '6 Tiger Roll · 2 Ebi Nigiri · 2 Sake Nigiri · 6 Tatar Tuna · 2 Flamed Tuna Nigiri': '6 Tiger Roll · 2 Ebi Nigiri · 2 Sake Nigiri · 6 Tatar Tuna · 2 Flamed Tuna Nigiri',
  'Set cao cấp nhẹ nhàng': 'Premium Light Set',
  'Set thượng hạng': 'Deluxe Set',
  'Set hoàng gia': 'Imperial Set',
  'Set Origami tổng hợp 1': 'Origami Mix Set 1',
  'Set Origami classic': 'Origami Classic Set',
  'Set Origami yêu thích': 'Origami Favorites Set',
  'Set sushi chay': 'Vegetarisches Sushi-Set',
  'Set bơ các loại': 'Avocado-Variationen Set',
  'Set chiên giòn': 'Knuspriges Set',
  'Set đa dạng': 'Vielfalt Set',
  'Set cổ điển tinh gọn': 'Klassisches Set kompakt',
  'Set khai vị kèm rượu': 'Aperitif & Sushi Set',
  // Chef's Choice
  'Thực đơn đầu bếp 3 món': "Chef's 3-Gänge-Menü",
  'Thực đơn đầu bếp 5 món cao cấp': "Chef's Premium 5-Gänge-Menü",
  // Desserts (remaining)
  'Chuối chiên mật ong': 'Gebratene Banane mit Honig',
  'Súp cốt dừa với chuối': 'Kokossuppe mit Banane',
  'Kem Mochi 3 vị': 'Mochi-Eis 3 Sorten',
  'Kem trà xanh 3 viên': 'Matcha-Eis 3 Kugeln',
};

const NOTE_DE = {
  'Phục vụ lạnh hoặc nhiệt độ phòng': 'Kalt oder bei Raumtemperatur servieren',
  'Thêm đá, lát chanh tùy chọn': 'Mit Eis, Zitronenscheibe optional',
  'Thêm đá': 'Mit Eis servieren',
  'Tỉ lệ 1:1 — đổ Fanta trước, Coca-Cola sau': 'Verhältnis 1:1 — Fanta zuerst, dann Cola',
  'Thêm đá, lát chanh': 'Mit Eis und Zitronenscheibe',
  'Vị gừng nhẹ, thêm đá': 'Leichter Ingwergeschmack, mit Eis',
  'Vị gừng mạnh hơn Ginger Ale': 'Stärkerer Ingwergeschmack als Ginger Ale',
  'Có thể pha với nước khoáng (Schorle)': 'Kann als Schorle mit Mineralwasser gemischt werden',
  'Tỉ lệ nước ép : nước khoáng = 1:1': 'Verhältnis Saft : Mineralwasser = 1:1',
  'Phục vụ kèm đường và sữa': 'Mit Zucker und Milch servieren',
  '30ml, phục vụ kèm đường': '30ml, mit Zucker servieren',
  '60ml': '60ml',
  '1/3 Espresso – 1/3 sữa nóng – 1/3 bọt sữa, rắc bột cacao': '1/3 Espresso – 1/3 heiße Milch – 1/3 Milchschaum, mit Kakao bestäuben',
  'Ủ 70–80°C, không dùng nước sôi': '70–80°C aufbrühen, kein kochendes Wasser',
  'Hãm gừng với trà nhài, thêm mật ong trước khi phục vụ': 'Ingwer mit Jasmintee aufgießen, vor dem Servieren Honig hinzufügen',
  'Gừng + trà nhài, thêm mật ong và nước cốt chanh — thêm nhiều gừng hơn Ingwer Tee': 'Ingwer + Jasmintee, Honig und Zitronensaft — mehr Ingwer als beim Ingwertee',
  'Giã nhuyễn bạc hà + chanh + đường mía (Muddling), thêm đá bào, top với Ginger Ale, trang trí lá bạc hà': 'Minze + Zitrone + Rohrzucker muddeln, Crushed Ice, mit Ginger Ale auffüllen, Minze garnieren',
  'Mix xoài + mật ong + chanh, thêm đá, top với Ginger Beer, trang trí lát chanh': 'Mango + Honig + Zitrone mixen, Eis, mit Ginger Beer auffüllen, Zitronenscheibe garnieren',
  'Mix Yuzu + mật ong, thêm đá, top với Soda, trang trí lát chanh vàng': 'Yuzu + Honig mixen, Eis, mit Soda auffüllen, Zitronenscheibe garnieren',
  'Bia Nhật vị nhẹ, bọt vừa — rót nghiêng ly 45°': 'Leichtes japanisches Bier — Glas 45° neigen beim Einschenken',
  'Không cồn, vị tương tự Kirin thường': 'Alkoholfrei, ähnlicher Geschmack wie normales Kirin',
  'Rót từ từ, dựng bia xoay cho men nổi đều': 'Langsam einschenken, Flasche drehen für gleichmäßige Hefe',
  'Tỉ lệ bia : Limonade = 1:1, rót đồng thời hoặc bia trước': 'Verhältnis Bier : Limonade = 1:1, gleichzeitig oder Bier zuerst',
  'Thêm đá, mint + chanh + siro, top với Prosecco — trang trí cành bạc hà': 'Eis, Minze + Zitrone + Sirup, mit Prosecco auffüllen — Minzzweig garnieren',
  'Tỉ lệ Aperol : Prosecco : Soda = 3 : 2 : 1 — thêm đá, trang trí lát cam': 'Verhältnis Aperol : Prosecco : Soda = 3 : 2 : 1 — mit Eis, Orangenscheibe garnieren',
  'Thêm đá, trang trí lát chanh hoặc lá bạc hà': 'Mit Eis, Zitronen- oder Minzblatt garnieren',
  'Tỉ lệ Whiskey : Coca = 1:3, thêm đá, trang trí lát chanh tùy chọn': 'Verhältnis Whiskey : Cola = 1:3, mit Eis, Zitrone optional',
  'Vodka + nước cốt chanh + đá, top với Ginger Beer, trang trí lát chanh + lá bạc hà': 'Vodka + Zitronensaft + Eis, mit Ginger Beer auffüllen, Zitrone + Minze garnieren',
  'Tỉ lệ 1:3 — thêm đá, trang trí theo phong cách Roku (vỏ cam, lá húng quế...)': 'Verhältnis 1:3 — mit Eis, Roku-Stil garnieren (Orangenschale, Basilikum...)',
  'Tỉ lệ 1:3 — thêm đá': 'Verhältnis 1:3 — mit Eis',
  'Tỉ lệ 1:3 — thêm đá, trang trí lát đào tùy chọn': 'Verhältnis 1:3 — mit Eis, Pfirsichscheibe optional',
  'Có thể phục vụ lạnh (Reishu), nhiệt độ phòng (Jōon) hoặc nóng (Atsukan)': 'Kalt (Reishu), Raumtemperatur (Jōon) oder warm (Atsukan) servieren',
  'Phục vụ lạnh 8–10°C': 'Kalt servieren 8–10°C',
  'Phục vụ lạnh 10–12°C': 'Kalt servieren 10–12°C',
  'Nhiệt độ phòng 16–18°C': 'Raumtemperatur 16–18°C',
  'Phục vụ lạnh 6–8°C, rót từ từ nghiêng ly': 'Kalt servieren 6–8°C, langsam einschenken bei geneigtem Glas',
  // Food notes
  '5,50 EUR — chần qua nước muối': '5,50 EUR — in Salzwasser blanchiert',
  '4 miếng': '4 Stück',
  '15 miếng': '15 Stück',
  '3 viên': '3 Stück',
  '12 EUR — Chay': '12 EUR — Vegetarisch',
  'Chay': 'Vegetarisch',
  'Back to the Basics': 'Back to the Basics',
};

function tDesc(desc) {
  if (curLang === 'de' && DESC_DE[desc]) return DESC_DE[desc];
  return desc;
}
function tNote(note) {
  if (curLang === 'de' && NOTE_DE[note]) return NOTE_DE[note];
  return note;
}

/* ── Ingredient translation (vi → de) ── */
const ING_DE = {
  // Common Vietnamese ingredient names → German
  'Brita Wasser': 'Brita Wasser',
  'Bọt sữa (Milchschaum)': 'Milchschaum',
  'Sữa nóng (Milch)': 'Heiße Milch',
  'Cà phê (Kaffee)': 'Kaffee',
  'Espresso (1 shot)': 'Espresso (1 Shot)',
  'Espresso đôi (2 shot)': 'Doppio (2 Shots)',
  'Trà xanh (Grüntee)': 'Grüner Tee',
  'Trà nhài (Jasmintee)': 'Jasmintee',
  'Gừng tươi (Ingwer)': 'Ingwer (frisch)',
  'Mật ong (Honig)': 'Honig',
  'Chanh tươi (Zitrone)': 'Zitrone (frisch)',
  'Bạc hà tươi (Minze)': 'Minze (frisch)',
  'Đường mía (Rohrzucker)': 'Rohrzucker',
  'Siro hoa cơm cháy (Holunderblütensirup)': 'Holunderblütensirup',
  'Nước cốt chanh (Zitronensaft)': 'Zitronensaft',
  'Nước ép táo (Apfelsaft)': 'Apfelsaft',
  'Nước ép chanh dây (Maracujasaft)': 'Maracujasaft',
  'Nước ép xoài (Mangosaft)': 'Mangosaft',
  'Nước ép vải (Lycheesaft)': 'Lycheesaft',
  'Nước ép trái cây (tùy chọn)': 'Fruchtsaft (nach Wahl)',
  'Nước khoáng có ga (Sprudel)': 'Mineralwasser (Sprudel)',
  'Nước chanh ngọt (Limonade)': 'Limonade',
  'Nước chanh Yuzu (Yuzusaft)': 'Yuzusaft',
  'Nước đào (Wild Peach)': 'Wild Peach',
  'Soda / Nước có ga': 'Soda / Sprudel',
  'Bia (Hefeweizen hoặc Pils)': 'Bier (Hefeweizen oder Pils)',
  'Hefeweizen (chai/lon)': 'Hefeweizen (Flasche/Dose)',
  'Kirin Ichiban (chai/lon)': 'Kirin Ichiban (Flasche/Dose)',
  'Kirin Ichiban 0% (chai)': 'Kirin Ichiban 0% (Flasche)',
  'Champagne / Sekt': 'Champagner / Sekt',
  'Riesling (vang trắng)': 'Riesling (Weißwein)',
  'Chardonnay (vang trắng)': 'Chardonnay (Weißwein)',
  'Rượu vang đỏ (Rotwein)': 'Rotwein',
  'Rượu vang hồng (Rosé)': 'Rosé',
  "Whiskey (Jack Daniel's hoặc tương tự)": "Whiskey (Jack Daniel's o.ä.)",
  'Nước cốt chanh': 'Zitronensaft',
  'Chanh': 'Zitrone',
  'Mật ong': 'Honig',
  'Bạc hà': 'Minze',
  'Mè': 'Sesam',
  'Cơm': 'Reis',
  'Rong biển': 'Nori (Algen)',
  'Rong biển ngâm (Wakame)': 'Wakame-Algen',
  'Dưa chuột': 'Gurke',
  'Dưa chuột (Gurke)': 'Gurke',
  'Dưa chuột (trong)': 'Gurke (innen)',
  'Bơ': 'Avocado',
  'Bơ (Avocado)': 'Avocado',
  'Bơ (Butterschmalz)': 'Butterschmalz',
  'Bơ (ngoài)': 'Avocado (außen)',
  'Bơ (trong)': 'Avocado (innen)',
  'Bơ Tempura': 'Avocado Tempura',
  'Cá hồi': 'Lachs',
  'Cá hồi (Lachs)': 'Lachs',
  'Cá hồi (ngoài)': 'Lachs (außen)',
  'Cá hồi (trong)': 'Lachs (innen)',
  'Cá hồi Scotland (Label Rouge)': 'Schottischer Lachs (Label Rouge)',
  'Cá hồi Tempura (trong)': 'Lachs-Tempura (innen)',
  'Cá hồi nướng sơ': 'Geflämmter Lachs',
  'Cá hồi nướng sơ (Flamed Lachs)': 'Geflämmter Lachs',
  'Cá hồi nướng sơ (ngoài)': 'Geflämmter Lachs (außen)',
  'Cá hồi tẩm ướp': 'Marinierter Lachs',
  'Cá hồi tẩm ướp cay': 'Scharf marinierter Lachs',
  'Cá ngừ': 'Thunfisch',
  'Cá ngừ (Thunfisch)': 'Thunfisch',
  'Cá ngừ (Tuna)': 'Thunfisch',
  'Cá ngừ (ngoài)': 'Thunfisch (außen)',
  'Cá ngừ (trong)': 'Thunfisch (innen)',
  'Cá ngừ Blue Fin (Thunfisch)': 'Blauflossen-Thunfisch',
  'Cá ngừ nướng sơ': 'Geflämmter Thunfisch',
  'Cá ngừ nướng sơ (Flamed Thunfisch)': 'Geflämmter Thunfisch',
  'Cá ngừ tẩm ướp': 'Marinierter Thunfisch',
  'Cá ngừ tẩm ướp cay': 'Scharf marinierter Thunfisch',
  'Cá ngừ vây xanh (Toro Blue Fin)': 'Toro Blauflossen-Thunfisch',
  'Cá cam (Hamachi)': 'Hamachi (Gelbschwanz)',
  'Cá cam Hamachi (trong)': 'Hamachi (innen)',
  'Tôm': 'Garnelen',
  'Tôm (Ebi / Garnelen)': 'Garnelen (Ebi)',
  'Tôm (Garnelen)': 'Garnelen',
  'Tôm Tempura': 'Garnelen-Tempura',
  'Tôm Tempura (Garnelen)': 'Garnelen-Tempura',
  'Tôm Tempura (trong)': 'Garnelen-Tempura (innen)',
  'Tôm tẩm ướp (Garnelen)': 'Marinierte Garnelen',
  'Sò điệp': 'Jakobsmuscheln',
  'Sò điệp (Jakobsmuscheln)': 'Jakobsmuscheln',
  'Sò điệp nướng sơ': 'Geflämmte Jakobsmuscheln',
  'Lươn': 'Aal',
  'Lươn (ngoài)': 'Aal (außen)',
  'Lươn nguyên con (ngoài)': 'Ganzer Aal (außen)',
  'Lươn nướng (Aal)': 'Gegrillter Aal (Unagi)',
  'Lươn nướng (gegrillter Aal)': 'Gegrillter Aal (Unagi)',
  'Lươn sông': 'Flussaal',
  'Cua lột mềm (Softshell Krabbe)': 'Softshell-Krabbe',
  'Thanh cua giả (Surimi)': 'Surimi',
  'Bụng cá ngừ (Thunfischbauch / Toro)': 'Toro (Thunfischbauch)',
  'Tatar cá hồi (Lachs)': 'Lachs-Tatar',
  'Tatar cá ngừ (Thunfisch)': 'Thunfisch-Tatar',
  'Tatar tôm (Ebi Tatar)': 'Garnelen-Tatar (Ebi)',
  'Tatar cá hồi nướng sơ': 'Geflämmtes Lachs-Tatar',
  'Tatar cá hồi nướng sơ (ngoài)': 'Geflämmtes Lachs-Tatar (außen)',
  'Tatar cá ngừ nướng sơ': 'Geflämmtes Thunfisch-Tatar',
  'Đậu phụ': 'Tofu',
  'Đậu phụ non (Seidentofu)': 'Seidentofu',
  'Đậu phụ chiên giòn': 'Knuspriger Tofu',
  'Đậu nành Nhật': 'Japanische Edamame',
  'Đậu phộng': 'Erdnüsse',
  'Thịt gà': 'Hähnchen',
  'Ức gà': 'Hähnchenbrust',
  'Ức gà chiên giòn': 'Knusprige Hähnchenbrust',
  'Gà Teriyaki': 'Teriyaki-Hähnchen',
  'Gà Yakitori': 'Yakitori-Hähnchen',
  'Gà xiên (Hähnchen)': 'Hähnchen-Spieße',
  'Nhân thịt gà': 'Hühnerfüllung',
  'Thịt bò': 'Rindfleisch',
  'Vịt chiên giòn': 'Knusprige Ente',
  'Bít tết cá hồi': 'Lachssteak',
  'Bít tết cá ngừ 180g': 'Thunfischsteak 180g',
  'Rau bina (Spinat)': 'Spinat',
  'Rau bina chần (ngoài)': 'Blanchierter Spinat (außen)',
  'Rau củ': 'Gemüse',
  'Rau thơm': 'Kräuter',
  'Rau thơm châu Á': 'Asiatische Kräuter',
  'Rau mùi': 'Koriander',
  'Rau Rucola': 'Rucola',
  'Rau Rucola (trong)': 'Rucola (innen)',
  'Măng tây': 'Spargel',
  'Măng tây (trong)': 'Spargel (innen)',
  'Măng tây Tempura': 'Spargel-Tempura',
  'Măng tây Tempura (trong)': 'Spargel-Tempura (innen)',
  'Măng tây xanh': 'Grüner Spargel',
  'Măng tây xanh Tempura': 'Grüner Spargel Tempura',
  'Cà tím Tempura (Aubergine)': 'Auberginen-Tempura',
  'Cà chua': 'Tomate',
  'Cà rốt': 'Karotte',
  'Ớt chuông': 'Paprika',
  'Ớt chuông Tempura': 'Paprika-Tempura',
  'Ớt chuông Tempura (trong)': 'Paprika-Tempura (innen)',
  'Hành tây': 'Zwiebel',
  'Hành lá (trong)': 'Frühlingszwiebeln (innen)',
  'Tỏi tây': 'Lauch',
  'Nấm mỡ': 'Champignons',
  'Cải thảo (Chinakohl)': 'Chinakohl',
  'Củ cải (Rettich)': 'Rettich',
  'Húng quế Thái': 'Thai-Basilikum',
  'Hẹ (Schnittlauch)': 'Schnittlauch',
  'Thì là (Dill)': 'Dill',
  'Phô mai tươi': 'Frischkäse',
  'Phô mai tươi (trong)': 'Frischkäse (innen)',
  'Trứng cá chuồn': 'Tobiko (Fliegenfischrogen)',
  'Trứng cá chuồn (Tobiko)': 'Tobiko',
  'Trứng cá chuồn (ngoài)': 'Tobiko (außen)',
  'Vừng (Sesam)': 'Sesam',
  'Mè (ngoài)': 'Sesam (außen)',
  'Dầu mè': 'Sesamöl',
  'Sốt Mayo cay (Spicy Mayo)': 'Scharfe Mayo (Spicy Mayo)',
  'Sốt Yakitori đặc biệt': 'Spezial-Yakitori-Sauce',
  'Sốt Yuzu': 'Yuzu-Sauce',
  'Sốt Yuzu (ngoài)': 'Yuzu-Sauce (außen)',
  'Sốt mè (Sesamsoße)': 'Sesamdressing',
  'Sốt lươn (Unagi)': 'Unagi-Sauce',
  'Sốt đậu phộng': 'Erdnusssauce',
  'Sốt xoài': 'Mangosauce',
  'Sốt gừng-mật ong': 'Ingwer-Honig-Sauce',
  'Sốt cà ri đỏ': 'Rote Curry-Sauce',
  'Sốt cà ri cam': 'Orangen-Curry-Sauce',
  'Sốt cà ri mù tạt': 'Senf-Curry-Sauce',
  'Sốt cà ri xoài': 'Mango-Curry-Sauce',
  'Sốt sả': 'Zitronengras-Sauce',
  'Sốt cay': 'Scharfe Sauce',
  'Súp miso': 'Miso-Suppe',
  'Súp cốt dừa': 'Kokossuppe',
  'Miso': 'Miso-Paste',
  'Bột ớt Hàn Quốc': 'Koreanisches Chilipulver',
  'Nước muối': 'Salzwasser',
  'Vỏ bột giòn': 'Knusprige Tempura-Hülle',
  'Vỏ bánh bột chiên giòn': 'Knusprige Gyoza-Hülle',
  'Vỏ chanh': 'Zitronenschale',
  'Bánh tráng': 'Reispapier',
  'Salad': 'Salat',
  'Salad tươi': 'Frischer Salat',
  'Hạt điều': 'Cashewnüsse',
  'Chuối': 'Banane',
  'Chuối chiên': 'Gebratene Banane',
  'Kem trà xanh (Matcha)': 'Matcha-Eis',
  'Kem sô-cô-la': 'Schokoladeneis',
  'Kem va-ni/chanh': 'Vanille-/Zitroneneis',
  'Kim chi bắp cải Hàn Quốc': 'Koreanisches Kimchi',
  // Keep these as-is (already German/English)
  '1 Bít tết': '1 Steak',
  '2 Tatar': '2 Tatar',
};

function tIng(ing) {
  if (curLang !== 'de') return ing;
  if (ING_DE[ing]) return ING_DE[ing];
  // Auto-extract German name from parentheses: "Vietnamese (German)" → "German"
  const m = ing.match(/^.+\(([^)]+)\)$/);
  if (m) return m[1];
  return ing;
}

function applyI18n() {
  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[curLang] && I18N[curLang][key];
    if (val) el.innerHTML = val;
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = I18N[curLang] && I18N[curLang][key];
    if (val) el.placeholder = val;
  });
  // Update lang button
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = curLang === 'vi' ? '🇻🇳' : '🇩🇪';
    langBtn.title = curLang === 'vi' ? 'Chuyển sang tiếng Đức' : 'Auf Vietnamesisch wechseln';
  }
  // Update flip card CSS pseudo-element text
  const flipStyle = document.getElementById('flip-lang-style');
  if (flipStyle) flipStyle.remove();
  const style = document.createElement('style');
  style.id = 'flip-lang-style';
  style.textContent = `.flip-container .drink-card::after { content: '${t('flip_tap')}' !important; }`;
  document.head.appendChild(style);
  // Update html lang
  document.documentElement.lang = curLang === 'de' ? 'de' : 'vi';
}

function toggleLang() {
  curLang = curLang === 'vi' ? 'de' : 'vi';
  localStorage.setItem('origami_lang', curLang);
  applyI18n();
  // Rebuild category filters with translated names
  if (typeof rebuildCatFilter === 'function') rebuildCatFilter();
  if (typeof rebuildTrainCatChecks === 'function') rebuildTrainCatChecks();
  // Re-render dynamic content
  if (typeof renderGrid === 'function') renderGrid(currentBrowseCat, currentSearch);
  if (typeof buildHistory === 'function') {
    const histMode = document.getElementById('history-mode');
    if (histMode && histMode.style.display !== 'none') buildHistory();
  }
  // Update browse section title if not 'all'
  if (typeof browseType !== 'undefined') {
    const el = document.getElementById('browse-section-title');
    if (el) el.textContent = t('section_' + browseType);
  }
  // Update weak count text
  if (typeof updateWeakCount === 'function') updateWeakCount();
}

/* ═══════════════════════════════════════════════
   DATA — Tất cả đồ uống + công thức
═══════════════════════════════════════════════ */
/* ─── Category color palette ─── */
const CAT_COLORS = {
  /* ─ drinks ─ */
  'Đồ uống không cồn': { bg:'#e0f2fe', color:'#0369a1' },
  'Đồ uống nóng':      { bg:'#fef3c7', color:'#92400e' },
  'Cocktail không cồn':{ bg:'#d1fae5', color:'#065f46' },
  'Bia':               { bg:'#fef9c3', color:'#78350f' },
  'Khai vị & Cocktail':{ bg:'#ede9fe', color:'#5b21b6' },
  'Sake & Rượu vang':  { bg:'#fce7f3', color:'#9d174d' },
  /* ─ food ─ */
  'Khai vị':           { bg:'#fef3c7', color:'#92400e' },
  'Chay':              { bg:'#d1fae5', color:'#065f46' },
  'Thịt':              { bg:'#fee2e2', color:'#991b1b' },
  'Hải sản':           { bg:'#e0f2fe', color:'#0369a1' },
  'Sashimi & Tatar':   { bg:'#ede9fe', color:'#5b21b6' },
  "Chef's Choice":     { bg:'#fce7f3', color:'#9d174d' },
  'Cuộn đặc biệt':     { bg:'#ecfdf5', color:'#065f46' },
  'Maki Classic':      { bg:'#f0f9ff', color:'#0284c7' },
  'Nigiri':            { bg:'#fff7ed', color:'#c2410c' },
  'Avocado Top':       { bg:'#f0fdf4', color:'#15803d' },
  'Green Roll':        { bg:'#dcfce7', color:'#166534' },
  'Crunchy Roll':      { bg:'#fffbeb', color:'#b45309' },
  'Maki Light':        { bg:'#f0f9ff', color:'#0369a1' },
  'Inside-Out':        { bg:'#fdf4ff', color:'#7e22ce' },
  'Spinach Wrap':      { bg:'#f0fdf4', color:'#166534' },
  'Tatar Roll':        { bg:'#fef2f2', color:'#dc2626' },
  'Set Sushi - Lunch': { bg:'#fef9c3', color:'#713f12' },
  'Set Sushi - Dinner':{ bg:'#ede9fe', color:'#4c1d95' },
  'Tráng miệng':       { bg:'#fce7f3', color:'#9d174d' },
  /* ─ wirtschaft ─ */
  'Getränkekalkulation':      { bg:'#f0fdf4', color:'#059669' },
  'Wareneinsatz-Controlling': { bg:'#ecfdf5', color:'#047857' },
  'Inventur & Bestand':       { bg:'#fef3c7', color:'#b45309' },
  'Umsatzoptimierung':        { bg:'#ede9fe', color:'#7c3aed' },
  /* ─ operations ─ */
  'Bar-Setup & Mise en Place':  { bg:'#fff7ed', color:'#c2410c' },
  'Speed & Workflow':           { bg:'#fef3c7', color:'#92400e' },
  'Kassensystem (POS)':         { bg:'#e0f2fe', color:'#0369a1' },
  'Hygiene & Reinigung Bar':    { bg:'#fce7f3', color:'#9d174d' },
  'Lagerhaltung (FIFO)':        { bg:'#ecfdf5', color:'#047857' },
  /* ─ fachkompetenz ─ */
  'Spirituosenkunde':             { bg:'#fef3c7', color:'#92400e' },
  'Cocktail-Klassiker':           { bg:'#fee2e2', color:'#991b1b' },
  'Moderne Mixologie':            { bg:'#ede9fe', color:'#5b21b6' },
  'Barkeepertechniken':           { bg:'#fce7f3', color:'#9d174d' },
  'Weinkunde':                    { bg:'#fdf4ff', color:'#7e22ce' },
  'Bierkunde':                    { bg:'#fef9c3', color:'#713f12' },
  'Kaffee & Heißgetränke':        { bg:'#fff7ed', color:'#c2410c' },
  'Alkoholfreie Cocktails':       { bg:'#d1fae5', color:'#065f46' },
  'Eis & Temperatur':             { bg:'#e0f2fe', color:'#0369a1' },
  'Garnishing & Präsentation':    { bg:'#f0fdf4', color:'#059669' },
  /* ─ compliance ─ */
  'Jugendschutzgesetz':             { bg:'#fee2e2', color:'#991b1b' },
  'Schanklizenz / Konzession':      { bg:'#fef3c7', color:'#92400e' },
  'Verantwortungsvoller Ausschank': { bg:'#ede9fe', color:'#5b21b6' },
  'HACCP Bar-spezifisch':           { bg:'#d1fae5', color:'#065f46' },
  'Arbeitsschutz Bar':              { bg:'#e0f2fe', color:'#0369a1' },
  /* ─ sales ─ */
  'Gästeberatung & Empfehlung':     { bg:'#fef3c7', color:'#92400e' },
  'Cocktailkarten-Design':          { bg:'#fce7f3', color:'#9d174d' },
  'Social Media (Bar-Content)':     { bg:'#ede9fe', color:'#5b21b6' },
  'Events & Cocktailkurse':         { bg:'#fff7ed', color:'#c2410c' },
  'Bewertungsmanagement':           { bg:'#e0f2fe', color:'#0369a1' },
  /* ─ softskills ─ */
  'Gastfreundschaft & Empathie':    { bg:'#fef3c7', color:'#92400e' },
  'Kommunikation':                  { bg:'#fee2e2', color:'#991b1b' },
  'Stressresistenz':                { bg:'#ede9fe', color:'#5b21b6' },
  'Teamwork':                       { bg:'#d1fae5', color:'#065f46' },
  'Showmanship & Flair':            { bg:'#fce7f3', color:'#9d174d' },
  'Zeitmanagement':                 { bg:'#e0f2fe', color:'#0369a1' },
  'Englisch':                       { bg:'#fef9c3', color:'#713f12' },
  'Verhandlungsgeschick':           { bg:'#fff7ed', color:'#c2410c' },
  /* ─ sushi ─ */
  'Fischkunde & Qualitätskontrolle': { bg:'#e0f2fe', color:'#0369a1' },
  'Messertechnik & Schneiden':       { bg:'#fee2e2', color:'#991b1b' },
  'Sushi-Reis':                      { bg:'#fef9c3', color:'#713f12' },
  'Nigiri, Maki & Gunkan':           { bg:'#fce7f3', color:'#9d174d' },
  'Special & Creative Rolls':        { bg:'#ede9fe', color:'#5b21b6' },
  'Präsentation & Abflämmen':        { bg:'#fff7ed', color:'#c2410c' },
  /* ─ hotkitchen ─ */
  'Zutaten & Mise en Place':         { bg:'#fef3c7', color:'#92400e' },
  'Protein kochen':                  { bg:'#fee2e2', color:'#991b1b' },
  'Asiatische Saucen':               { bg:'#d1fae5', color:'#065f46' },
  'Reis & Beilagen':                 { bg:'#fef9c3', color:'#713f12' },
  'HACCP & Lebensmittelsicherheit':  { bg:'#ecfdf5', color:'#047857' },
};
function getCatStyle(cat) {
  const c = CAT_COLORS[cat];
  return c ? `background:${c.bg};color:${c.color};` : '';
}

const DRINKS = [

  /* ─── Đồ uống không cồn (cơ bản) ─── */
  { cat: "Đồ uống không cồn", name: "Brita Wasser",        desc: "Nước lọc Brita", ingredients: ["Brita Wasser"], glass: "Ly nước", note: "Phục vụ lạnh hoặc nhiệt độ phòng" },
  { cat: "Đồ uống không cồn", name: "Coca-Cola",           desc: "Nước ngọt có ga", ingredients: ["Coca-Cola"], glass: "Ly cao", note: "Thêm đá, lát chanh tùy chọn", img: "images/coca-cola.png" },
  { cat: "Đồ uống không cồn", name: "Coca-Cola Zero",      desc: "Nước ngọt không calo", ingredients: ["Coca-Cola Zero"], glass: "Ly cao", note: "Thêm đá" },
  { cat: "Đồ uống không cồn", name: "Fanta",               desc: "Nước cam có ga", ingredients: ["Fanta"], glass: "Ly cao", note: "Thêm đá" },
  { cat: "Đồ uống không cồn", name: "Spezi",               desc: "Hỗn hợp Coca và Fanta", ingredients: ["Coca-Cola", "Fanta"], glass: "Ly cao", note: "Tỉ lệ 1:1 — đổ Fanta trước, Coca-Cola sau" },
  { cat: "Đồ uống không cồn", name: "Sprite",              desc: "Nước chanh có ga", ingredients: ["Sprite"], glass: "Ly cao", note: "Thêm đá, lát chanh" },
  { cat: "Đồ uống không cồn", name: "Ginger Ale",          desc: "Nước gừng nhẹ có ga", ingredients: ["Ginger Ale"], glass: "Ly cao", note: "Vị gừng nhẹ, thêm đá" },
  { cat: "Đồ uống không cồn", name: "Ginger Beer",         desc: "Nước gừng mạnh có ga", ingredients: ["Ginger Beer"], glass: "Ly cao", note: "Vị gừng mạnh hơn Ginger Ale" },
  { cat: "Đồ uống không cồn", name: "Wild Peach",          desc: "Nước đào", ingredients: ["Wild Peach"], glass: "Ly cao", note: "Thêm đá" },
  { cat: "Đồ uống không cồn", name: "Apfelsaft",           desc: "Nước ép táo", ingredients: ["Nước ép táo (Apfelsaft)"], glass: "Ly thấp", note: "Có thể pha với nước khoáng (Schorle)" },
  { cat: "Đồ uống không cồn", name: "Maracujasaft",        desc: "Nước ép chanh dây", ingredients: ["Nước ép chanh dây (Maracujasaft)"], glass: "Ly thấp", note: "" },
  { cat: "Đồ uống không cồn", name: "Mangosaft",           desc: "Nước ép xoài", ingredients: ["Nước ép xoài (Mangosaft)"], glass: "Ly thấp", note: "" },
  { cat: "Đồ uống không cồn", name: "Lycheesaft",          desc: "Nước ép vải", ingredients: ["Nước ép vải (Lycheesaft)"], glass: "Ly thấp", note: "" },
  { cat: "Đồ uống không cồn", name: "Schorle",             desc: "Nước ép pha nước khoáng", ingredients: ["Nước ép trái cây (tùy chọn)", "Nước khoáng có ga (Sprudel)"], glass: "Ly cao", note: "Tỉ lệ nước ép : nước khoáng = 1:1" },

  /* ─── Đồ uống nóng ─── */
  { cat: "Đồ uống nóng", name: "Kaffee",        desc: "Cà phê đen", ingredients: ["Cà phê (Kaffee)"], glass: "Tách cà phê", note: "Phục vụ kèm đường và sữa" },
  { cat: "Đồ uống nóng", name: "Espresso",      desc: "Cà phê Espresso 1 shot", ingredients: ["Espresso (1 shot)"], glass: "Demitasse (tách nhỏ)", note: "30ml, phục vụ kèm đường", img: "images/espresso.png" },
  { cat: "Đồ uống nóng", name: "Doppio",        desc: "Espresso đôi (2 shot)", ingredients: ["Espresso đôi (2 shot)"], glass: "Tách Espresso lớn", note: "60ml" },
  { cat: "Đồ uống nóng", name: "Cappuccino",    desc: "Espresso với sữa bọt", ingredients: ["Espresso (1 shot)", "Sữa nóng (Milch)", "Bọt sữa (Milchschaum)"], glass: "Tách Cappuccino 180ml", note: "1/3 Espresso – 1/3 sữa nóng – 1/3 bọt sữa, rắc bột cacao", img: "images/cappuccino.png" },
  { cat: "Đồ uống nóng", name: "Grün Tee",      desc: "Trà xanh", ingredients: ["Trà xanh (Grüntee)"], glass: "Ấm trà + tách", note: "Ủ 70–80°C, không dùng nước sôi", img: "images/green-tea.png" },
  { cat: "Đồ uống nóng", name: "Jasmin Tee",    desc: "Trà nhài", ingredients: ["Trà nhài (Jasmintee)"], glass: "Ấm trà + tách", note: "" },
  { cat: "Đồ uống nóng", name: "Ingwer Tee",    desc: "Trà gừng đặc biệt", ingredients: ["Gừng tươi (Ingwer)", "Trà nhài (Jasmintee)", "Mật ong (Honig)"], glass: "Ấm trà + tách", note: "Hãm gừng với trà nhài, thêm mật ong trước khi phục vụ" },
  { cat: "Đồ uống nóng", name: "Against Cold",  desc: "Trà giải cảm", ingredients: ["Gừng tươi (Ingwer)", "Trà nhài (Jasmintee)", "Mật ong (Honig)", "Chanh tươi (Zitrone)"], glass: "Ấm trà + tách", note: "Gừng + trà nhài, thêm mật ong và nước cốt chanh — thêm nhiều gừng hơn Ingwer Tee" },

  /* ─── Cocktail không cồn ─── */
  { cat: "Cocktail không cồn", name: "Asian Cooler",    desc: "Cocktail bạc hà - gừng mát lạnh", ingredients: ["Bạc hà tươi (Minze)", "Chanh tươi (Zitrone)", "Đường mía (Rohrzucker)", "Ginger Ale"], glass: "Ly cao (Highball)", note: "Giã nhuyễn bạc hà + chanh + đường mía (Muddling), thêm đá bào, top với Ginger Ale, trang trí lá bạc hà", img: "images/asian-cooler.png" },
  { cat: "Cocktail không cồn", name: "Mango Mule",      desc: "Cocktail xoài cay nhẹ", ingredients: ["Nước ép xoài (Mangosaft)", "Mật ong (Honig)", "Nước cốt chanh (Zitronensaft)", "Ginger Beer"], glass: "Ly đồng (Copper Mug)", note: "Mix xoài + mật ong + chanh, thêm đá, top với Ginger Beer, trang trí lát chanh" },
  { cat: "Cocktail không cồn", name: "Yuzu Limonade",   desc: "Nước chanh Yuzu Nhật Bản", ingredients: ["Nước chanh Yuzu (Yuzusaft)", "Mật ong (Honig)", "Soda / Nước có ga"], glass: "Ly cao", note: "Mix Yuzu + mật ong, thêm đá, top với Soda, trang trí lát chanh vàng" },

  /* ─── Bia ─── */
  { cat: "Bia", name: "Kirin Ichiban",    desc: "Bia Nhật Bản cao cấp", ingredients: ["Kirin Ichiban (chai/lon)"], glass: "Ly bia / Ly Pilsner", note: "Bia Nhật vị nhẹ, bọt vừa — rót nghiêng ly 45°", img: "images/kirin-ichiban.png" },
  { cat: "Bia", name: "Kirin Ichiban 0%", desc: "Bia Nhật không cồn", ingredients: ["Kirin Ichiban 0% (chai)"], glass: "Ly bia", note: "Không cồn, vị tương tự Kirin thường" },
  { cat: "Bia", name: "Hefeweizen",       desc: "Bia lúa mì truyền thống Đức", ingredients: ["Hefeweizen (chai/lon)"], glass: "Ly Weizen cao", note: "Rót từ từ, dựng bia xoay cho men nổi đều" },
  { cat: "Bia", name: "Radler",           desc: "Bia pha nước chanh", ingredients: ["Bia (Hefeweizen hoặc Pils)", "Nước chanh ngọt (Limonade)"], glass: "Ly bia cao", note: "Tỉ lệ bia : Limonade = 1:1, rót đồng thời hoặc bia trước" },

  /* ─── Khai vị & Cocktail có cồn ─── */
  { cat: "Khai vị & Cocktail", name: "Hugo",            desc: "Khai vị hoa cơm cháy mùa hè", ingredients: ["Prosecco", "Bạc hà tươi (Minze)", "Chanh tươi (Zitrone)", "Siro hoa cơm cháy (Holunderblütensirup)"], glass: "Ly Wine / Ly Champagne", note: "Thêm đá, mint + chanh + siro, top với Prosecco — trang trí cành bạc hà", img: "images/hugo.png" },
  { cat: "Khai vị & Cocktail", name: "Aperol Spritz",   desc: "Khai vị Aperol cổ điển", ingredients: ["Aperol", "Prosecco", "Soda / Nước có ga"], glass: "Ly Wine lớn (250ml)", note: "Tỉ lệ Aperol : Prosecco : Soda = 3 : 2 : 1 — thêm đá, trang trí lát cam", img: "images/aperol-spritz.png" },
  { cat: "Khai vị & Cocktail", name: "Lillet Peach",    desc: "Khai vị Lillet vị đào", ingredients: ["Lillet Blanc", "Nước đào (Wild Peach)"], glass: "Ly Wine", note: "Thêm đá, trang trí lát chanh hoặc lá bạc hà" },
  { cat: "Khai vị & Cocktail", name: "Whiskey Coke",    desc: "Whiskey pha Coca-Cola", ingredients: ["Whiskey (Jack Daniel's hoặc tương tự)", "Coca-Cola"], glass: "Ly Highball", note: "Tỉ lệ Whiskey : Coca = 1:3, thêm đá, trang trí lát chanh tùy chọn" },
  { cat: "Khai vị & Cocktail", name: "Moscow Mule",     desc: "Cocktail Vodka gừng", ingredients: ["Vodka", "Ginger Beer", "Nước cốt chanh (Zitronensaft)"], glass: "Ly đồng (Copper Mug)", note: "Vodka + nước cốt chanh + đá, top với Ginger Beer, trang trí lát chanh + lá bạc hà", img: "images/moscow-mule.png" },
  { cat: "Khai vị & Cocktail", name: "Gin Tonic (Roku)", desc: "Gin Tonic với Roku Gin", ingredients: ["Roku Gin", "Tonic Water"], glass: "Ly Balloon / Ly Highball", note: "Tỉ lệ 1:3 — thêm đá, trang trí theo phong cách Roku (vỏ cam, lá húng quế...)", img: "images/gin-tonic-roku.png" },
  { cat: "Khai vị & Cocktail", name: "Gin Tonic (Kaiza)",    desc: "Gin Tonic với Kaiza Gin", ingredients: ["Kaiza Gin", "Tonic Water"], glass: "Ly Balloon / Ly Highball", note: "Tỉ lệ 1:3 — thêm đá" },
  { cat: "Khai vị & Cocktail", name: "Gin Tonic (Momotaro)", desc: "Gin Tonic với Momotaro Gin", ingredients: ["Momotaro Gin", "Tonic Water"], glass: "Ly Balloon / Ly Highball", note: "Tỉ lệ 1:3 — thêm đá, trang trí lát đào tùy chọn" },

  /* ─── Sake & Rượu vang ─── */
  { cat: "Sake & Rượu vang", name: "Sake SOTO",             desc: "Rượu gạo Nhật Bản cao cấp", ingredients: ["Sake SOTO"], glass: "Chén sake (Ochoko) hoặc ly nhỏ", note: "Có thể phục vụ lạnh (Reishu), nhiệt độ phòng (Jōon) hoặc nóng (Atsukan)", img: "images/sake-soto.png" },
  { cat: "Sake & Rượu vang", name: "Weißwein — Riesling",   desc: "Rượu vang trắng Riesling", ingredients: ["Riesling (vang trắng)"], glass: "Ly vang trắng", note: "Phục vụ lạnh 8–10°C" },
  { cat: "Sake & Rượu vang", name: "Weißwein — Chardonnay", desc: "Rượu vang trắng Chardonnay", ingredients: ["Chardonnay (vang trắng)"], glass: "Ly vang trắng", note: "Phục vụ lạnh 10–12°C" },
  { cat: "Sake & Rượu vang", name: "Rotwein",               desc: "Rượu vang đỏ", ingredients: ["Rượu vang đỏ (Rotwein)"], glass: "Ly vang đỏ (rộng hơn)", note: "Nhiệt độ phòng 16–18°C" },
  { cat: "Sake & Rượu vang", name: "Rosé",                  desc: "Rượu vang hồng", ingredients: ["Rượu vang hồng (Rosé)"], glass: "Ly vang hồng", note: "Phục vụ lạnh 10–12°C", img: "images/rose.png" },
  { cat: "Sake & Rượu vang", name: "Champagner",            desc: "Rượu Sâm banh / Champagne", ingredients: ["Champagne / Sekt"], glass: "Ly Champagne (Flute)", note: "Phục vụ lạnh 6–8°C, rót từ từ nghiêng ly" },
];

/* ═══════════════════════════════════════
   FOOD DATA — Thực đơn đồ ăn
═══════════════════════════════════════ */
[
  /* ─── Khai vị ─── */
  { type:"food", cat:"Khai vị", name:"Miso Soup Salmon",    desc:"Súp Miso cá hồi",              ingredients:["Đậu phụ","Rong biển","Cá hồi","Tỏi tây","Súp miso"],                              glass:"Chén",            note:"4,90 EUR" },
  { type:"food", cat:"Khai vị", name:"Edamame",             desc:"Đậu nành Nhật giòn",            ingredients:["Đậu nành Nhật","Nước muối"],                                                       glass:"Chén nhỏ",        note:"5,50 EUR — chần qua nước muối" },
  { type:"food", cat:"Khai vị", name:"Yakitori",            desc:"Gà xiên nướng sốt đặc biệt",   ingredients:["Gà xiên (Hähnchen)","Sốt Yakitori đặc biệt"],                                     glass:"Dĩa",             note:"5,20 EUR" },
  { type:"food", cat:"Khai vị", name:"Wakame Salad",        desc:"Salad rong biển sốt mè",        ingredients:["Rong biển ngâm (Wakame)","Sốt mè (Sesamsoße)"],                                   glass:"Chén salad",      note:"5,20 EUR" },
  { type:"food", cat:"Khai vị", name:"Gyosa",               desc:"Sủi cảo nhân gà chiên giòn",   ingredients:["Nhân thịt gà","Rau củ","Vỏ bánh bột chiên giòn"],                                 glass:"Dĩa",             note:"5,20 EUR" },
  { type:"food", cat:"Khai vị", name:"Scallops on Fire",    desc:"Sò điệp áp chảo bơ sốt Yuzu",  ingredients:["Sò điệp (Jakobsmuscheln)","Bơ (Butterschmalz)","Sốt Yuzu"],                       glass:"Dĩa",             note:"8,70 EUR" },
  { type:"food", cat:"Khai vị", name:"Crispy Avocado",      desc:"Bơ chiên xù sốt Mayo cay",      ingredients:["Bơ Tempura","Sốt Mayo cay (Spicy Mayo)"],                                         glass:"Dĩa",             note:"5,20 EUR" },
  { type:"food", cat:"Khai vị", name:"Coconut Chicken",     desc:"Súp gà cốt dừa",                ingredients:["Súp cốt dừa","Thịt gà","Nấm mỡ","Cà chua"],                                      glass:"Chén",            note:"6,50 EUR" },
  { type:"food", cat:"Khai vị", name:"Tempura Silk Tofu",   desc:"Đậu phụ non chiên xù",          ingredients:["Đậu phụ non (Seidentofu)","Miso","Củ cải (Rettich)"],                             glass:"Dĩa",             note:"" },
  { type:"food", cat:"Khai vị", name:"Tempura Shrimp",      desc:"Tôm chiên xù sốt Mayo cay",     ingredients:["Tôm Tempura (Garnelen)","Sốt Mayo cay (Spicy Mayo)"],                             glass:"Dĩa",             note:"" },
  { type:"food", cat:"Khai vị", name:"Crispy Eggplants",    desc:"Cà tím chiên xù sốt Mayo cay",  ingredients:["Cà tím Tempura (Aubergine)","Sốt Mayo cay (Spicy Mayo)"],                        glass:"Dĩa",             note:"" },
  { type:"food", cat:"Khai vị", name:"Loan's Kim Chi",      desc:"Kim chi bắp cải Hàn Quốc",      ingredients:["Cải thảo (Chinakohl)","Bột ớt Hàn Quốc"],                                        glass:"Chén",            note:"" },

  /* ─── Chay ─── */
  { type:"food", cat:"Chay", name:"Fruity Tofu",    desc:"Đậu phụ chiên giòn sốt xoài",          ingredients:["Đậu phụ chiên giòn","Sốt xoài","Salad tươi","Cơm"],                               glass:"Dĩa + cơm",       note:"12,90 EUR" },
  { type:"food", cat:"Chay", name:"Ginger Tofu",    desc:"Đậu phụ xào sốt gừng-mật ong",          ingredients:["Đậu phụ","Rau củ","Sốt gừng-mật ong","Cơm"],                                     glass:"Dĩa + cơm",       note:"12,90 EUR" },

  /* ─── Thịt ─── */
  { type:"food", cat:"Thịt", name:"Peanut Chicken",    desc:"Gà sốt đậu phộng",                   ingredients:["Ức gà chiên giòn","Salad","Sốt đậu phộng","Rau thơm châu Á","Cơm"],              glass:"Dĩa + cơm",       note:"13,90 EUR" },
  { type:"food", cat:"Thịt", name:"Beef and Shrimps",  desc:"Bò và tôm xào cay",                  ingredients:["Thịt bò","Tôm","Hành tây","Ớt chuông","Hạt điều","Cơm"],                         glass:"Dĩa + cơm",       note:"13,90 EUR" },
  { type:"food", cat:"Thịt", name:"Chicken Wasabi",    desc:"Gà sốt cà ri mù tạt",                ingredients:["Ức gà","Sốt cà ri mù tạt","Rau thơm","Đậu phộng","Rau củ","Cơm"],               glass:"Dĩa + cơm",       note:"13,90 EUR" },
  { type:"food", cat:"Thịt", name:"Mango Chicken",     desc:"Gà sốt xoài",                        ingredients:["Ức gà","Sốt xoài","Rau thơm","Đậu phộng","Salad tươi","Cơm"],                    glass:"Dĩa + cơm",       note:"13,90 EUR" },
  { type:"food", cat:"Thịt", name:"Red Curry Chicken", desc:"Gà cà ri đỏ",                        ingredients:["Ức gà","Sốt cà ri đỏ","Rau thơm","Đậu phộng","Salad tươi","Cơm"],               glass:"Dĩa + cơm",       note:"13,90 EUR" },
  { type:"food", cat:"Thịt", name:"The Red Duck",      desc:"Vịt chiên giòn sốt cà ri đỏ",        ingredients:["Vịt chiên giòn","Sốt cà ri đỏ","Rau củ","Húng quế Thái","Cơm"],                  glass:"Dĩa + cơm",       note:"14,90 EUR" },

  /* ─── Hải sản ─── */
  { type:"food", cat:"Hải sản", name:"Orange-Curry-Salmon", desc:"Cá hồi sốt cà ri cam",          ingredients:["Bít tết cá hồi","Sốt cà ri cam","Salad tươi","Cơm","Sốt lươn (Unagi)"],          glass:"Dĩa + cơm",       note:"13,90 EUR" },
  { type:"food", cat:"Hải sản", name:"Lemongras Shrimp",    desc:"Tôm sốt sả",                    ingredients:["Tôm (Garnelen)","Sốt sả","Salad tươi","Cơm","Sốt lươn (Unagi)"],                 glass:"Dĩa + cơm",       note:"13,90 EUR" },
  { type:"food", cat:"Hải sản", name:"Teriyaki-Salmon",     desc:"Cá hồi Teriyaki",                ingredients:["Bít tết cá hồi","Salad","Cơm","Sốt lươn (Unagi)"],                               glass:"Dĩa + cơm",       note:"13,90 EUR" },
  { type:"food", cat:"Hải sản", name:"Mango Salmon",        desc:"Cá hồi sốt cà ri xoài",         ingredients:["Bít tết cá hồi","Sốt cà ri xoài","Salad tươi","Cơm"],                            glass:"Dĩa + cơm",       note:"13,90 EUR" },

  /* ─── Sashimi & Tatar ─── */
  { type:"food", cat:"Sashimi & Tatar", name:"Balfego Toro Tuna Sashimi", desc:"Sashimi cá ngừ vây xanh thượng hạng", ingredients:["Cá ngừ vây xanh (Toro Blue Fin)"],                          glass:"Dĩa sashimi",     note:"4 miếng" },
  { type:"food", cat:"Sashimi & Tatar", name:"Label Rouge Salmon Sashimi",desc:"Sashimi cá hồi Scotland nhãn đỏ",    ingredients:["Cá hồi Scotland (Label Rouge)"],                             glass:"Dĩa sashimi",     note:"4 miếng" },
  { type:"food", cat:"Sashimi & Tatar", name:"Blue Fin Tuna Sashimi",     desc:"Sashimi cá ngừ",                     ingredients:["Cá ngừ Blue Fin (Thunfisch)"],                                glass:"Dĩa sashimi",     note:"4 miếng" },
  { type:"food", cat:"Sashimi & Tatar", name:"Best of Sashimi",           desc:"15 miếng sashimi ngon nhất ngày",    ingredients:["Cá hồi (Lachs)","Cá ngừ (Tuna)","Cá cam (Hamachi)"],         glass:"Dĩa sashimi",     note:"15 miếng" },
  { type:"food", cat:"Sashimi & Tatar", name:"Tuna Steak",                desc:"Bít tết cá ngừ 180g",               ingredients:["Bít tết cá ngừ 180g","Vừng (Sesam)","Sốt cay","Sốt Yuzu","Chanh"], glass:"Dĩa",          note:"" },
  { type:"food", cat:"Sashimi & Tatar", name:"Royal Sashimi Pate",        desc:"Khay sashimi hoàng gia",             ingredients:["15 Sashimi ngon nhất","8 Gunkan","2 Tatar","1 Bít tết"],       glass:"Khay",            note:"" },
  { type:"food", cat:"Sashimi & Tatar", name:"Hamachi Tatar",             desc:"Tatar cá cam",                       ingredients:["Cá cam (Hamachi)","Vỏ chanh","Bơ","Sốt cay"],                 glass:"Dĩa",             note:"" },
  { type:"food", cat:"Sashimi & Tatar", name:"Salmon Tatar",              desc:"Tatar cá hồi",                       ingredients:["Tatar cá hồi (Lachs)","Vỏ chanh","Bơ","Sốt cay"],             glass:"Dĩa",             note:"" },
  { type:"food", cat:"Sashimi & Tatar", name:"Tuna Tatar",                desc:"Tatar cá ngừ",                       ingredients:["Tatar cá ngừ (Thunfisch)","Vỏ chanh","Nước cốt chanh","Sốt cay"], glass:"Dĩa",          note:"" },

  /* ─── Cuộn đặc biệt ─── */
  { type:"food", cat:"Cuộn đặc biệt", name:"Dancing Snake",          desc:"Cuộn cá hồi & cá cam",                  ingredients:["Cá hồi","Cá cam (Hamachi)","Bơ","Phô mai tươi","Mè","Dưa chuột"],                               glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Tiger Roll",             desc:"Cuộn tôm Tempura cá hồi nướng sơ",      ingredients:["Tôm Tempura (trong)","Cá hồi nướng sơ (ngoài)","Bơ","Dưa chuột","Sốt Yuzu","Phô mai tươi"],   glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Okyu Roll",              desc:"Cuộn cá hồi Tempura phủ tatar tôm",     ingredients:["Cá hồi Tempura (trong)","Phô mai tươi","Dưa chuột","Tatar tôm (Ebi Tatar)"],                    glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Spider Roll",            desc:"Cuộn cua lột vỏ mềm",                   ingredients:["Cua lột mềm (Softshell Krabbe)","Dưa chuột","Bơ","Trứng cá chuồn (Tobiko)","Phô mai tươi"],    glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Dragon Roll",            desc:"Cuộn rồng",                              ingredients:["Măng tây Tempura (trong)","Tôm Tempura (trong)","Phô mai tươi","Trứng cá chuồn (Tobiko)","Bơ (ngoài)"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Phoenix Roll",           desc:"Cuộn phượng hoàng",                      ingredients:["Cá hồi nướng sơ","Cá ngừ nướng sơ","Lươn sông","Dưa chuột","Trứng cá chuồn (Tobiko)"],        glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Eskimo Roll",            desc:"Cuộn cá ngừ & sò điệp nướng sơ",        ingredients:["Măng tây Tempura","Ớt chuông","Rau Rucola","Cá ngừ nướng sơ","Sò điệp nướng sơ","Phô mai tươi"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Origami Rainbow",        desc:"Cuộn cầu vồng Origami",                 ingredients:["Tôm Tempura (trong)","Cá hồi (ngoài)","Cá ngừ (ngoài)","Lươn (ngoài)","Bơ","Trứng cá chuồn"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Alaska Inside-Out",      desc:"Cuộn Alaska Inside-Out",                ingredients:["Cá hồi (trong)","Bơ (trong)","Phô mai tươi (trong)","Dưa chuột (trong)","Mè (ngoài)"],         glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Green Tempura Shrimp Roll",desc:"Cuộn tôm Tempura rau thơm",            ingredients:["Tôm Tempura","Phô mai tươi","Dưa chuột","Thì là (Dill)","Hẹ (Schnittlauch)"],                 glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Avocado Tuna",           desc:"Cuộn cá ngừ phủ bơ",                    ingredients:["Cá ngừ (trong)","Phô mai tươi (trong)","Dưa chuột (trong)","Bơ (ngoài)"],                      glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Tatar Salmon Mediterran",desc:"Cuộn tatar cá hồi Địa Trung Hải",       ingredients:["Rau Rucola (trong)","Phô mai tươi (trong)","Tatar cá hồi nướng sơ (ngoài)","Sốt Yuzu (ngoài)"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Spinach Veggie Roll",    desc:"Cuộn rau bina chay",                     ingredients:["Măng tây Tempura (trong)","Ớt chuông Tempura (trong)","Phô mai tươi (trong)","Rau bina chần (ngoài)"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Crunchy Salmon Roll",    desc:"Cuộn cá hồi tẩm ướp vỏ giòn",          ingredients:["Vỏ bột giòn","Cá hồi tẩm ướp"],                                                                 glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Origami Crane",          desc:"Cuộn sếu lươn nguyên con",              ingredients:["Tôm Tempura (trong)","Măng tây (trong)","Dưa chuột (trong)","Phô mai tươi (trong)","Rau Rucola (trong)","Lươn nguyên con (ngoài)","Trứng cá chuồn (ngoài)"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Tuna Alaska 1.0.",       desc:"Cuộn cá ngừ Alaska Inside-Out",         ingredients:["Cá ngừ (trong)","Bơ (trong)","Phô mai tươi (trong)","Dưa chuột (trong)","Trứng cá chuồn (ngoài)"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Elsa",                   desc:"Cuộn cá cam phủ bơ",                    ingredients:["Phô mai tươi (trong)","Cá cam Hamachi (trong)","Dưa chuột (trong)","Hành lá (trong)","Bơ (ngoài)","Trứng cá chuồn (ngoài)"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Cuộn đặc biệt", name:"Sake Avocado Maki",      desc:"Maki cá hồi bơ",                        ingredients:["Cá hồi","Bơ"],                                                                                  glass:"Dĩa sushi", note:"" },

  /* ─── Maki Classic ─── */
  { type:"food", cat:"Maki Classic", name:"Sake Maki",        desc:"Maki cá hồi",          ingredients:["Cá hồi (Lachs)"],              glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Classic", name:"Hamachi Maki",     desc:"Maki cá cam",          ingredients:["Cá cam (Hamachi)"],             glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Classic", name:"Tuna Maki",        desc:"Maki cá ngừ",          ingredients:["Cá ngừ (Thunfisch)"],           glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Classic", name:"Unagi Maki",       desc:"Maki lươn nướng",      ingredients:["Lươn nướng (Aal)"],             glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Classic", name:"Cucumber Maki",    desc:"Maki dưa chuột",       ingredients:["Dưa chuột (Gurke)"],            glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Classic", name:"Avocado Maki",     desc:"Maki bơ",              ingredients:["Bơ (Avocado)"],                glass:"Dĩa sushi", note:"" },

  /* ─── Nigiri ─── */
  { type:"food", cat:"Nigiri", name:"Sake Nigiri",         desc:"Nigiri cá hồi",            ingredients:["Cá hồi (Lachs)"],                           glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Hamachi Nigiri",      desc:"Nigiri cá cam",            ingredients:["Cá cam (Hamachi)"],                         glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Tuna Nigiri",         desc:"Nigiri cá ngừ",            ingredients:["Cá ngừ (Thunfisch)"],                       glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Toro Tuna Nigiri",    desc:"Nigiri bụng cá ngừ",       ingredients:["Bụng cá ngừ (Thunfischbauch / Toro)"],      glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Scallops Nigiri",     desc:"Nigiri sò điệp",           ingredients:["Sò điệp (Jakobsmuscheln)"],                 glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Unagi Nigiri",        desc:"Nigiri lươn nướng",        ingredients:["Lươn nướng (gegrillter Aal)"],               glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Gunkan Nigiri",       desc:"Nigiri Gunkan cuộn rong biển", ingredients:["Cá hồi / Cá ngừ / Tôm / Bơ / Cá cam (tùy chọn)"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Avocado Nigiri",      desc:"Nigiri bơ",                ingredients:["Bơ (Avocado)"],                             glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Flamed Sake Nigiri",  desc:"Nigiri cá hồi nướng sơ",  ingredients:["Cá hồi nướng sơ (Flamed Lachs)"],           glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Flamed Tuna Nigiri",  desc:"Nigiri cá ngừ nướng sơ",  ingredients:["Cá ngừ nướng sơ (Flamed Thunfisch)"],       glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Ebi Nigiri",          desc:"Nigiri tôm",               ingredients:["Tôm (Ebi / Garnelen)"],                     glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Nigiri", name:"Surimi Nigiri",       desc:"Nigiri thanh cua",         ingredients:["Thanh cua giả (Surimi)"],                   glass:"Dĩa sushi", note:"" },

  /* ─── Avocado Top ─── */
  { type:"food", cat:"Avocado Top", name:"Avocado Salmon",          desc:"Cuộn cá hồi phủ bơ",           ingredients:["Cá hồi","Dưa chuột","Bơ","Phô mai tươi"],                            glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Avocado Top", name:"Avocado Shrimp Tempura",  desc:"Cuộn tôm Tempura phủ bơ",      ingredients:["Tôm Tempura","Bơ","Phô mai tươi","Dưa chuột"],                       glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Avocado Top", name:"Avocado Asupara",         desc:"Cuộn măng tây Tempura phủ bơ", ingredients:["Măng tây xanh Tempura","Ớt chuông Tempura","Phô mai tươi"],          glass:"Dĩa sushi", note:"" },

  /* ─── Green Roll ─── */
  { type:"food", cat:"Green Roll", name:"Green Salmon",          desc:"Cuộn xanh cá hồi",        ingredients:["Cá hồi (Lachs)"],                               glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Green Roll", name:"Green Tuna",            desc:"Cuộn xanh cá ngừ",         ingredients:["Cá ngừ","Dưa chuột","Phô mai tươi"],             glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Green Roll", name:"Green Tempura Shrimp",  desc:"Cuộn xanh tôm Tempura",    ingredients:["Tôm Tempura","Dưa chuột","Phô mai tươi"],        glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Green Roll", name:"Green Veggie",          desc:"Cuộn xanh rau củ",          ingredients:["Cà rốt","Dưa chuột","Bơ","Phô mai tươi"],        glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Green Roll", name:"Green Tempura Asupara", desc:"Cuộn xanh măng tây Tempura",ingredients:["Măng tây Tempura","Bơ","Phô mai tươi"],          glass:"Dĩa sushi", note:"" },

  /* ─── Crunchy Roll ─── */
  { type:"food", cat:"Crunchy Roll", name:"Crunchy Spicy Salmon", desc:"Cá hồi cay chiên giòn",   ingredients:["Vỏ bột giòn","Cá hồi tẩm ướp cay"],             glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Crunchy Roll", name:"Crunchy Spicy Tuna",   desc:"Cá ngừ cay chiên giòn",   ingredients:["Vỏ bột giòn","Cá ngừ tẩm ướp cay"],             glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Crunchy Roll", name:"Crunchy Ebi",          desc:"Tôm chiên giòn",           ingredients:["Vỏ bột giòn","Tôm tẩm ướp (Garnelen)"],         glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Crunchy Roll", name:"Crunchy Asupara",      desc:"Măng tây chiên giòn",      ingredients:["Vỏ bột giòn","Măng tây xanh","Dầu mè"],          glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Crunchy Roll", name:"Crunchy Avocado",      desc:"Bơ chiên giòn",            ingredients:["Vỏ bột giòn","Bơ","Dầu mè"],                     glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Crunchy Roll", name:"Crunchy Chicken",      desc:"Gà Yakitori chiên giòn",   ingredients:["Vỏ bột giòn","Gà Yakitori"],                     glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Crunchy Roll", name:"Crunchy Hamachi",      desc:"Cá cam chiên giòn",         ingredients:["Vỏ bột giòn","Cá cam (Hamachi)"],                glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Crunchy Roll", name:"Crunchy Salmon",       desc:"Cá hồi chiên giòn",         ingredients:["Vỏ bột giòn","Cá hồi tẩm ướp"],                 glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Crunchy Roll", name:"Crunchy Tuna",         desc:"Cá ngừ chiên giòn",         ingredients:["Vỏ bột giòn","Cá ngừ tẩm ướp"],                 glass:"Dĩa sushi", note:"" },

  /* ─── Maki Light ─── */
  { type:"food", cat:"Maki Light", name:"Light Salmon",          desc:"Maki cá hồi thanh đạm",        ingredients:["Cá hồi","Dưa chuột","Mè","Bạc hà","Rau mùi","Bánh tráng"],        glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Light", name:"Light Tuna",            desc:"Maki cá ngừ thanh đạm",         ingredients:["Cá ngừ","Dưa chuột","Mè","Bạc hà","Rau mùi","Bánh tráng"],        glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Light", name:"Light Tempura Shrimp",  desc:"Maki tôm Tempura thanh đạm",    ingredients:["Tôm Tempura","Dưa chuột","Mè","Bạc hà","Rau mùi","Bánh tráng"],   glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Light", name:"Light Vegetarian",      desc:"Maki chay thanh đạm",           ingredients:["Cà chua","Cà rốt","Dưa chuột","Mè","Bạc hà","Rau mùi","Bánh tráng"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Light", name:"Light Chicken Yakitori",desc:"Maki gà Yakitori thanh đạm",    ingredients:["Gà Yakitori","Dưa chuột","Mè","Bạc hà","Rau mùi","Bánh tráng"],   glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Light", name:"Light Shrimp",          desc:"Maki tôm thanh đạm",            ingredients:["Tôm","Dưa chuột","Mè","Bạc hà","Rau mùi","Bánh tráng"],           glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Light", name:"Light Unagi",           desc:"Maki lươn thanh đạm",           ingredients:["Lươn","Dưa chuột","Mè","Bạc hà","Rau mùi","Bánh tráng"],          glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Maki Light", name:"Light Scallops",        desc:"Maki sò điệp thanh đạm",        ingredients:["Sò điệp","Dưa chuột","Mè","Bạc hà","Rau mùi","Bánh tráng"],       glass:"Dĩa sushi", note:"" },

  /* ─── Inside-Out ─── */
  { type:"food", cat:"Inside-Out", name:"Alaska Inside-Out (I/O)",        desc:"InsideOut cá hồi Alaska",        ingredients:["Cá hồi","Bơ","Dưa chuột","Phô mai tươi","Mè"],                  glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Inside-Out", name:"Tuna Alaska Inside-Out",         desc:"InsideOut cá ngừ Alaska",        ingredients:["Cá ngừ","Bơ","Dưa chuột","Phô mai tươi","Trứng cá chuồn"],    glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Inside-Out", name:"Teriyaki Chicken Inside-Out",    desc:"InsideOut gà Teriyaki",          ingredients:["Gà Teriyaki","Bơ","Dưa chuột"],                               glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Inside-Out", name:"Mediterran Veggi Inside-Out",    desc:"InsideOut rau củ Địa Trung Hải", ingredients:["Rau Rucola","Bơ","Mè","Phô mai tươi"],                        glass:"Dĩa sushi", note:"" },

  /* ─── Spinach Wrap ─── */
  { type:"food", cat:"Spinach Wrap", name:"Spinach Spicy Salmon",   desc:"Cuộn rau bina cá hồi cay",   ingredients:["Cá hồi","Dưa chuột","Phô mai tươi","Rau bina (Spinat)"],       glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Spinach Wrap", name:"Spinach Tempura Shrimp", desc:"Cuộn rau bina tôm Tempura",  ingredients:["Tôm Tempura","Dưa chuột","Phô mai tươi","Rau bina (Spinat)"],  glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Spinach Wrap", name:"Spinach Spicy Tuna",     desc:"Cuộn rau bina cá ngừ cay",   ingredients:["Cá ngừ","Dưa chuột","Phô mai tươi","Rau bina (Spinat)"],       glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Spinach Wrap", name:"Spinach Veggi",          desc:"Cuộn rau bina chay",          ingredients:["Ớt chuông Tempura","Măng tây","Phô mai tươi","Rau bina (Spinat)"], glass:"Dĩa sushi", note:"" },

  /* ─── Tatar Roll ─── */
  { type:"food", cat:"Tatar Roll", name:"Tatar Salmon Mediterran Roll", desc:"Cuộn tatar cá hồi Địa Trung Hải", ingredients:["Tatar cá hồi nướng sơ","Rau Rucola","Phô mai tươi"], glass:"Dĩa sushi", note:"" },
  { type:"food", cat:"Tatar Roll", name:"Tatar Tuna Mediterran",        desc:"Cuộn tatar cá ngừ Địa Trung Hải",  ingredients:["Tatar cá ngừ nướng sơ","Rau Rucola","Phô mai tươi"],  glass:"Dĩa sushi", note:"" },

  /* ─── Set Sushi — Lunch ─── */
  { type:"food", cat:"Set Sushi - Lunch", name:"Lunch Mix 1",     desc:"6 Bơ giòn · 2 Sake Nigiri nướng sơ · 6 Tatar Salmon Mediterran",  ingredients:["Crunchy Avocado ×6","Flamed Sake Nigiri ×2","Tatar Salmon Mediterran ×6"],              glass:"Khay", note:"13 EUR" },
  { type:"food", cat:"Set Sushi - Lunch", name:"Lunch Mix 2",     desc:"6 Alaska I/O · 6 Avocado Cheese · 6 Sake Maki",                    ingredients:["Alaska Inside-Out ×6","Avocado Cheese ×6","Sake Maki ×6"],                              glass:"Khay", note:"15 EUR" },
  { type:"food", cat:"Set Sushi - Lunch", name:"Lunch Tuna Mix",  desc:"6 Spicy Tuna Roll · 2 Flamed Tuna Nigiri · 3 Crunchy Tuna",        ingredients:["Spicy Tuna Roll ×6","Flamed Tuna Nigiri ×2","Crunchy Tuna ×3"],                        glass:"Khay", note:"13 EUR" },
  { type:"food", cat:"Set Sushi - Lunch", name:"Veggie Lunch",    desc:"6 Avocado Asupara · 6 Cucumber Maki · 6 Green Veggie",             ingredients:["Avocado Asupara ×6","Cucumber Maki ×6","Green Veggie ×6"],                             glass:"Khay", note:"12 EUR — Chay" },
  { type:"food", cat:"Set Sushi - Lunch", name:"Business Lunch",  desc:"6 Tuna I/O · 6 Avocado Cheese · 2 Sake Nigiri · 2 Tuna Nigiri",   ingredients:["Tuna Inside-Out ×6","Avocado Cheese ×6","Sake Nigiri ×2","Tuna Nigiri ×2"],             glass:"Khay", note:"17 EUR" },
  { type:"food", cat:"Set Sushi - Lunch", name:"Premium Lunch",   desc:"6 Tiger Roll · 2 Ebi Nigiri · 2 Sake Nigiri · 6 Tatar Tuna · 2 Flamed Tuna Nigiri", ingredients:["Tiger Roll ×6","Ebi Nigiri ×2","Sake Nigiri ×2","Tatar Tuna Rucola ×6","Flamed Tuna Nigiri ×2"], glass:"Khay", note:"23 EUR" },

  /* ─── Set Sushi — Dinner ─── */
  { type:"food", cat:"Set Sushi - Dinner", name:"Quiet Luxury",       desc:"Set cao cấp nhẹ nhàng",    ingredients:["Toro Nigiri ×4","Gunkan Nigiri ×2","Hamachi Nigiri ×2","Crunchy Avocado ×3","Spinach Veggie ×6","Okyu Roll ×3","Eskimo Roll ×3","Elsa Roll ×3","Sashimi Salmon ×2"],                                          glass:"Khay", note:"Back to the Basics" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Exquisite",           desc:"Set thượng hạng",          ingredients:["Toro Nigiri ×2","Gunkan Nigiri ×2","Hamachi Nigiri ×2","Sake Nigiri ×2","Flamed Sake Nigiri ×2","Tuna Nigiri ×2","Eskimo Roll ×3","Spinach Veggie ×3","Spider Roll ×6","Sashimi Salmon ×2","Sashimi Tuna ×2","Salmon Tatar ×1"], glass:"Khay", note:"" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Royal",               desc:"Set hoàng gia",             ingredients:["Flamed Tuna Nigiri ×2","Toro Nigiri ×2","Sake Nigiri ×2","Tuna Nigiri ×2","Flamed Sake Nigiri ×2","Crunchy Hamachi ×3","Crunchy Salmon ×3","Sashimi Steak ×1","Tuna Sashimi ×2","Salmon Sashimi ×2","Tiger Roll ×6","Avocado Salmon ×6","Tuna Alaska I.O. ×6"], glass:"Khay", note:"" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Origami Mix 1",       desc:"Set Origami tổng hợp 1",   ingredients:["Maki Light Salmon ×6","Alaska Inside-Out ×6","Tuna Alaska I.O. ×6","Flamed Sake Nigiri ×2","Sake Nigiri ×2","Tuna Nigiri ×2","Avocado Nigiri ×2","Crunchy Asupara ×6","Green Veggie ×6"],                       glass:"Khay", note:"" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Origami Classic",     desc:"Set Origami classic",      ingredients:["Sake Nigiri ×2","Tuna Nigiri ×2","Flamed Sake Nigiri ×2","Crunchy Tuna ×3","Crunchy Ebi ×3","Crunchy Salmon ×3","Alaska 1.0. ×6","Tuna Alaska 1.0. ×6"],                                                     glass:"Khay", note:"" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Origami Favourit",    desc:"Set Origami yêu thích",    ingredients:["Origami Rainbow ×6","Salmon Tatar ×1","Avocado Salmon ×6","Crunchy Salmon ×3","Crunchy Tuna ×3","Crunchy Avocado ×3","Tiger Roll ×6","Sake Nigiri ×2","Flamed Sake Nigiri ×2","Hamachi Nigiri ×2","Surimi Nigiri ×2"], glass:"Khay", note:"" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Oh Veggie Baby",      desc:"Set sushi chay",           ingredients:["Spinach Veggie ×6","Cucumber Maki ×6","Mediterrian Veggie 1.0. ×6","Crunchy Avocado ×3"],                                                                                                                  glass:"Khay", note:"Chay" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Avocado Party",       desc:"Set bơ các loại",          ingredients:["Avocado Nigiri ×2","Avocado Asupara ×6","Avocado Maki ×6","Crunchy Avocado ×3"],                                                                                                                          glass:"Khay", note:"" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Crispy Selection",    desc:"Set chiên giòn",           ingredients:["Gunkan Nigiri ×2","Spinach Veggie ×6","Tuna Alaska 1.0. ×6","Tiger Roll ×6","Crunchy Hamachi ×3","Crunchy Avocado ×3","Crunchy Salmon ×3"],                                                               glass:"Khay", note:"" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Simplify Selection",  desc:"Set đa dạng",              ingredients:["Sake Nigiri ×2","Hamachi Nigiri ×2","Flamed Sake Nigiri ×2","Tuna Nigiri ×2","Crunchy Hamachi ×3","Crunchy Avocado ×3","Crunchy Salmon ×3","Alaska 1.0. ×6","Tuna Alaska I.O. ×6","Tiger Roll ×6"],       glass:"Khay", note:"" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Just Classics",       desc:"Set cổ điển tinh gọn",     ingredients:["Flamed Sake Nigiri ×2","Tuna Nigiri ×2","Crunchy Hamachi ×3","Crunchy Avocado ×3","Alaska 1.0. ×6","Tuna Alaska I.O. ×6"],                                                                              glass:"Khay", note:"" },
  { type:"food", cat:"Set Sushi - Dinner", name:"Aperivo Selection",   desc:"Set khai vị kèm rượu",     ingredients:["Sake Nigiri ×2","Flamed Sake Nigiri ×2","Crunchy Tuna ×3","Crunchy Hamachi ×3","Crunchy Avocado ×3","Spinach Veggie ×6","Avocado Salmon ×6"],                                                           glass:"Khay", note:"" },

  /* ─── Chef's Choice ─── */
  { type:"food", cat:"Chef's Choice", name:"Omakase 3 Courses", desc:"Thực đơn đầu bếp 3 món",        ingredients:["Khai vị","Sashimi","10 Nigiri","12 Cuộn đặc biệt","6 Inside-Out","Tráng miệng"],                       glass:"Khay nhiều lớp", note:"" },
  { type:"food", cat:"Chef's Choice", name:"Omakase 5 Courses", desc:"Thực đơn đầu bếp 5 món cao cấp",ingredients:["Khai vị","Sashimi + Bít tết","10 Nigiri & Gunkan","18 Cuộn đặc biệt","Tráng miệng","Sashimi & Tatar"], glass:"Khay nhiều lớp", note:"" },

  /* ─── Tráng miệng ─── */
  { type:"food", cat:"Tráng miệng", name:"Backed Banana",    desc:"Chuối chiên mật ong",  ingredients:["Chuối chiên","Mật ong"],                            glass:"Dĩa tráng miệng", note:"" },
  { type:"food", cat:"Tráng miệng", name:"Sweet Coconut",    desc:"Súp cốt dừa với chuối",ingredients:["Súp cốt dừa","Chuối"],                              glass:"Chén tráng miệng",note:"" },
  { type:"food", cat:"Tráng miệng", name:"Mochi Ice Trilogy",desc:"Kem Mochi 3 vị",       ingredients:["Kem trà xanh (Matcha)","Kem sô-cô-la","Kem va-ni/chanh"], glass:"Dĩa tráng miệng", note:"" },
  { type:"food", cat:"Tráng miệng", name:"Matcha Ice",       desc:"Kem trà xanh 3 viên",  ingredients:["Kem trà xanh (Matcha)"],                            glass:"Chén kem",         note:"3 viên" },
].forEach(f => DRINKS.push(f));

let currentBrowseCat = 'all';
let currentSearch = '';
let browseType = 'all';
let trainType = 'drink';
let formType = 'drink';

/* ═══════════════════════════════════════════════
   WIRTSCHAFTLICHKEIT – chip-quiz items
═══════════════════════════════════════════════ */
const WK_ITEMS = [
  /* ── Getränkekalkulation ── */
  {cat:'Getränkekalkulation', name:'Nettopreis-Formel', desc:'Công thức tính giá bán thuần', type:'wirtschaft',
    ingredients:['Wareneinsatz', '÷ Wareneinsatzquote %', '× 100'],
    note:'Nettopreis = (Wareneinsatz ÷ Quote%) × 100'},
  {cat:'Getränkekalkulation', name:'Wareneinsatzquote Standard', desc:'Tỷ lệ NVL tiêu chuẩn cho cocktail', type:'wirtschaft',
    ingredients:['20 %', 'Maximum des Nettoumsatzes'],
    note:'Cocktails: max 20% des Nettoumsatzes'},
  {cat:'Getränkekalkulation', name:'Mojito Netto berechnen', desc:'Mojito NVL 2,00€ | Quote 20%', type:'wirtschaft',
    ingredients:['2,00 € ÷ 20', '× 100', '= 10,00 €'],
    note:'(2,00 ÷ 20) × 100 = 10,00 €'},
  {cat:'Getränkekalkulation', name:'Brutto + Speisekarte', desc:'Giá thuần 10€ + 19% VAT → Thực đơn?', type:'wirtschaft',
    ingredients:['Netto + 19 % MwSt', '10,00 + 1,90 = 11,90 €', 'Gerundet ≈ 12,50 €'],
    note:'11,90 → Speisekarte ca. 12,50 €'},

  /* ── Wareneinsatz-Controlling ── */
  {cat:'Wareneinsatz-Controlling', name:'Pour-Cost-Quote', desc:'Pour-Cost-Quote là gì & mức tối ưu?', type:'wirtschaft',
    ingredients:['Wareneinsatz ÷ Nettoerlös × 100', 'Optimal: 18–24 %'],
    note:'Pour-Cost = WE ÷ Nettoerlös × 100'},
  {cat:'Wareneinsatz-Controlling', name:'Pour-Cost zu hoch (30%)', desc:'Pour-Cost 30% – vấn đề?', type:'wirtschaft',
    ingredients:['Zu hoch!', 'Schwund', 'Falsche Rezepturen', 'Überportionierung'],
    note:'30% = zu hoch → Schwund / Rezeptfehler / Überportionierung'},

  /* ── Inventur & Bestand ── */
  {cat:'Inventur & Bestand', name:'FIFO-Prinzip', desc:'FIFO là gì và tại sao quan trọng?', type:'wirtschaft',
    ingredients:['First In – First Out', 'Ältere Ware zuerst', 'Vermeidet Verderb'],
    note:'Ältere Ware zuerst verbrauchen'},
  {cat:'Inventur & Bestand', name:'Mindestbestand', desc:'Tồn kho tối thiểu là gì?', type:'wirtschaft',
    ingredients:['Untergrenze Lagerbestand', 'Automatische Nachbestellung'],
    note:'Untergrenze → löst Nachbestellung aus'},

  /* ── Umsatzoptimierung ── */
  {cat:'Umsatzoptimierung', name:'Upselling an der Bar', desc:'Upselling tại Bar là gì?', type:'wirtschaft',
    ingredients:['Hochwertigere Option empfehlen', 'Premium statt Hausmarke'],
    note:'Dem Gast eine bessere Option vorschlagen'},
  {cat:'Umsatzoptimierung', name:'3 Upselling-Techniken', desc:'3 kỹ thuật upselling tại Bar', type:'wirtschaft',
    ingredients:['Premium-Spirituose', 'Größere Portion / Pitcher', 'Begleit-Shot oder Snack'],
    note:'3 Wege: Premium / Größer / Begleit-Snack'},
];
WK_ITEMS.forEach(item => DRINKS.push(item));

/* ═══════════════════════════════════════════════
   OPERATIONS – chip-quiz items
═══════════════════════════════════════════════ */
const OPS_ITEMS = [
  /* ── Bar-Setup & Mise en Place ── */
  {cat:'Bar-Setup & Mise en Place', name:'Station vorbereiten', desc:'Chuẩn bị trạm làm việc', type:'operations',
    ingredients:['Garnish schneiden', 'Eis auffüllen', 'Flaschen auffüllen', 'Sauberkeit prüfen'],
    note:'Alles griffbereit, bevor die Schicht beginnt'},
  {cat:'Bar-Setup & Mise en Place', name:'Werkzeuge & Utensilien', desc:'Dụng cụ bar cần thiết', type:'operations',
    ingredients:['Shaker (Boston/Cobbler)', 'Jigger', 'Barsieb (Strainer)', 'Barlöffel', 'Muddler'],
    note:'Standardwerkzeuge für jeden Bartender'},
  {cat:'Bar-Setup & Mise en Place', name:'Garnish-Vorbereitung', desc:'Chuẩn bị trang trí', type:'operations',
    ingredients:['Zitrusscheiben', 'Kräuter (Minze, Rosmarin)', 'Cocktailkirschen', 'Salz-/Zuckerrand'],
    note:'Mise en place = alles an seinem Platz'},

  /* ── Speed & Workflow ── */
  {cat:'Speed & Workflow', name:'Mehrere Bestellungen', desc:'Xử lý nhiều đơn cùng lúc', type:'operations',
    ingredients:['Bestellungen gruppieren', 'Gleiche Zutaten zusammen', 'Parallel arbeiten', 'Reihenfolge planen'],
    note:'Batch-Arbeit spart Zeit'},
  {cat:'Speed & Workflow', name:'Bewegungsökonomie', desc:'Tiết kiệm động tác', type:'operations',
    ingredients:['Kurze Wege', 'Alles in Reichweite', 'Feste Positionen', 'Routine einhalten'],
    note:'Weniger Schritte = mehr Geschwindigkeit'},
  {cat:'Speed & Workflow', name:'Rush-Hour-Strategie', desc:'Chiến lược giờ cao điểm', type:'operations',
    ingredients:['Pre-Batch Syrups', 'Eis vorportionieren', 'Standarddrinks priorisieren', 'Kommunikation mit Kollegen'],
    note:'Vorbereitung ist der Schlüssel'},

  /* ── Kassensystem (POS) ── */
  {cat:'Kassensystem (POS)', name:'Bestellungen eingeben', desc:'Nhập đơn hàng', type:'operations',
    ingredients:['Tisch/Platz wählen', 'Artikel eingeben', 'Sonderwünsche notieren', 'Bestellung senden'],
    note:'Immer sofort bonieren!'},
  {cat:'Kassensystem (POS)', name:'Tagesabschluss (Z-Bericht)', desc:'Kết ca (Z-Bericht)', type:'operations',
    ingredients:['Kasse zählen', 'Z-Bericht drucken', 'Differenz prüfen', 'Einnahmen dokumentieren'],
    note:'Pflicht am Ende jeder Schicht'},

  /* ── Hygiene & Reinigung Bar ── */
  {cat:'Hygiene & Reinigung Bar', name:'Gläserpflege', desc:'Chăm sóc ly', type:'operations',
    ingredients:['Spülmaschine / Handwäsche', 'Polieren mit Mikrofasertuch', 'Auf Beschädigungen prüfen', 'Richtig lagern'],
    note:'Saubere Gläser = professioneller Service'},
  {cat:'Hygiene & Reinigung Bar', name:'Hygiene-Vorschriften', desc:'Quy định vệ sinh', type:'operations',
    ingredients:['HACCP-Richtlinien', 'Hände waschen', 'Arbeitsflächen desinfizieren', 'Lebensmittel abdecken'],
    note:'HACCP = Gefahrenanalyse & kritische Kontrollpunkte'},
  {cat:'Hygiene & Reinigung Bar', name:'Schicht-Reinigung', desc:'Dọn dẹp ca làm', type:'operations',
    ingredients:['Bar abwischen', 'Kühlschrank ordnen', 'Müll entsorgen', 'Boden reinigen'],
    note:'Clean as you go – immer sauber halten'},

  /* ── Lagerhaltung (FIFO) ── */
  {cat:'Lagerhaltung (FIFO)', name:'FIFO im Lager', desc:'FIFO trong kho', type:'operations',
    ingredients:['First In – First Out', 'Neue Ware nach hinten', 'Ältere Ware vorne', 'Ablaufdatum prüfen'],
    note:'Immer ältere Ware zuerst verbrauchen'},
  {cat:'Lagerhaltung (FIFO)', name:'Temperaturkontrolle', desc:'Kiểm soát nhiệt độ', type:'operations',
    ingredients:['Kühlschrank 2–7 °C', 'Tiefkühler –18 °C', 'Temperatur dokumentieren', 'Kühlkette nicht unterbrechen'],
    note:'Gesetzliche Pflicht – täglich kontrollieren'},
  {cat:'Lagerhaltung (FIFO)', name:'Bestandskontrolle', desc:'Kiểm kê tồn kho', type:'operations',
    ingredients:['Inventurliste führen', 'Mindestbestand beachten', 'Nachbestellung auslösen', 'Schwund dokumentieren'],
    note:'Regelmäßige Inventur verhindert Engpässe'},
];
OPS_ITEMS.forEach(item => DRINKS.push(item));

/* ═══════════════════════════════════════════════
   FACHKOMPETENZ GETRÄNKE – chip-quiz items
═══════════════════════════════════════════════ */
const FK_ITEMS = [
  /* ── Spirituosenkunde ── */
  {cat:'Spirituosenkunde', name:'Gin – Grundlagen', desc:'Kiến thức cơ bản về Gin', type:'fachkompetenz',
    ingredients:['Getreidebasis', 'Wacholder (Juniper)', 'London Dry / New Western', 'Botanicals'],
    note:'Gin = Neutralspirituose + Wacholder + Botanicals'},
  {cat:'Spirituosenkunde', name:'Rum – Kategorien', desc:'Phân loại Rum', type:'fachkompetenz',
    ingredients:['Weißer Rum (Blanco)', 'Goldener Rum (Oro)', 'Dunkler Rum (Añejo)', 'Aus Zuckerrohr / Melasse'],
    note:'Rum wird aus Zuckerrohr oder Melasse destilliert'},
  {cat:'Spirituosenkunde', name:'Whisky – Typen', desc:'Các loại Whisky', type:'fachkompetenz',
    ingredients:['Scotch (Schottland)', 'Bourbon (USA, ≥51% Mais)', 'Irish (3× destilliert)', 'Japanese Whisky'],
    note:'Bourbon ≥ 51% Mais, neue Eichenfässer'},
  {cat:'Spirituosenkunde', name:'Vodka & Tequila', desc:'Vodka & Tequila cơ bản', type:'fachkompetenz',
    ingredients:['Vodka: neutral, Getreide/Kartoffel', 'Tequila: 100% Agave', 'Blanco / Reposado / Añejo', 'Mezcal = rauchig'],
    note:'Tequila nur aus blauer Agave, Region Jalisco'},

  /* ── Cocktail-Klassiker ── */
  {cat:'Cocktail-Klassiker', name:'Old Fashioned', desc:'Cocktail kinh điển #1', type:'fachkompetenz',
    ingredients:['Bourbon oder Rye', 'Angostura Bitters', 'Zuckersirup', 'Orangenzeste'],
    note:'Rühren, nicht schütteln – On the rocks'},
  {cat:'Cocktail-Klassiker', name:'Negroni', desc:'Cocktail kinh điển #2', type:'fachkompetenz',
    ingredients:['Gin', 'Campari', 'Roter Wermut', 'Orangenscheibe'],
    note:'Equal parts: 3 cl + 3 cl + 3 cl'},
  {cat:'Cocktail-Klassiker', name:'Margarita', desc:'Cocktail kinh điển #3', type:'fachkompetenz',
    ingredients:['Tequila', 'Triple Sec / Cointreau', 'Limettensaft', 'Salzrand'],
    note:'Shaken & strain, Salzrand optional'},

  /* ── Moderne Mixologie ── */
  {cat:'Moderne Mixologie', name:'Infusion-Technik', desc:'Kỹ thuật ngâm chiết', type:'fachkompetenz',
    ingredients:['Spirituose + Zutat (Kräuter/Obst)', '24–72 Stunden ziehen lassen', 'Abseihen & filtern', 'Kühl lagern'],
    note:'Cold infusion: keine Hitze nötig'},
  {cat:'Moderne Mixologie', name:'Fat-Washing', desc:'Kỹ thuật Fat-Washing', type:'fachkompetenz',
    ingredients:['Geschmolzenes Fett + Spirituose', 'Ruhen lassen (6–8h)', 'Einfrieren', 'Fett abschöpfen & filtern'],
    note:'Z.B. Butter-Bourbon, Bacon-Whisky'},
  {cat:'Moderne Mixologie', name:'Clarified Cocktails', desc:'Cocktail lọc trong', type:'fachkompetenz',
    ingredients:['Milch-Clarification', 'Säure spaltet Kasein', 'Filtern durch Käsetuch', 'Kristallklares Ergebnis'],
    note:'Milk punch: Zitrus + heiße Milch → filtern'},

  /* ── Barkeepertechniken ── */
  {cat:'Barkeepertechniken', name:'Shaken vs. Rühren', desc:'Lắc vs. Khuấy', type:'fachkompetenz',
    ingredients:['Shaken: mit Saft/Sirup/Ei', 'Rühren: nur Spirituosen', 'Shaken = kalt + Verdünnung + Luft', 'Rühren = seidig, klar'],
    note:'Regel: enthält Saft → Shaken'},
  {cat:'Barkeepertechniken', name:'Muddling', desc:'Kỹ thuật nghiền', type:'fachkompetenz',
    ingredients:['Sanft drücken (Kräuter)', 'Stärker: Früchte', 'Nicht zerreißen (Minze)', 'Ätherische Öle freisetzen'],
    note:'Minze NUR drücken, nicht zerreiben'},
  {cat:'Barkeepertechniken', name:'Layering & Flambieren', desc:'Tạo lớp & đốt lửa', type:'fachkompetenz',
    ingredients:['Barlöffel-Rücken verwenden', 'Schwerste Flüssigkeit unten', 'Flambieren: hochprozentigen Alkohol', 'Sicherheitsabstand beachten'],
    note:'Dichte bestimmt die Reihenfolge der Schichten'},

  /* ── Weinkunde ── */
  {cat:'Weinkunde', name:'Rebsorten – Weiß', desc:'Giống nho trắng', type:'fachkompetenz',
    ingredients:['Chardonnay', 'Sauvignon Blanc', 'Riesling', 'Pinot Grigio'],
    note:'Riesling = Deutschlands berühmteste Rebsorte'},
  {cat:'Weinkunde', name:'Rebsorten – Rot', desc:'Giống nho đỏ', type:'fachkompetenz',
    ingredients:['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Tempranillo'],
    note:'Pinot Noir = leicht; Cabernet = kräftig'},
  {cat:'Weinkunde', name:'Wein-Service', desc:'Phục vụ rượu vang', type:'fachkompetenz',
    ingredients:['Flasche präsentieren', 'Korken ziehen & prüfen', 'Probeschluck anbieten', 'Richtige Temperatur (Weiß 8–12°C, Rot 16–18°C)'],
    note:'Weißwein kalt, Rotwein Zimmertemperatur'},

  /* ── Bierkunde ── */
  {cat:'Bierkunde', name:'Zapftechnik', desc:'Kỹ thuật rót bia', type:'fachkompetenz',
    ingredients:['Glas schräg 45° halten', 'Langsam zapfen', 'Schaum 2–3 Finger', 'Glas nass vorspülen'],
    note:'Perfekter Schaum = frisches Bier'},
  {cat:'Bierkunde', name:'Bierstile', desc:'Các loại bia', type:'fachkompetenz',
    ingredients:['Pils (hopfig, herb)', 'Weizen (fruchtig)', 'IPA (bitter, Craft)', 'Stout (dunkel, geröstet)'],
    note:'Reinheitsgebot 1516: Wasser, Malz, Hopfen, Hefe'},

  /* ── Kaffee & Heißgetränke ── */
  {cat:'Kaffee & Heißgetränke', name:'Espresso-Grundlagen', desc:'Espresso cơ bản', type:'fachkompetenz',
    ingredients:['7g Kaffeemehl', '25–30 Sek. Extraktion', '25–30ml Ergebnis', '9 bar Druck'],
    note:'Crema = Qualitätszeichen'},
  {cat:'Kaffee & Heißgetränke', name:'Milchgetränke', desc:'Đồ uống sữa', type:'fachkompetenz',
    ingredients:['Latte (viel Milch)', 'Cappuccino (1/3 Espresso, 1/3 Milch, 1/3 Schaum)', 'Flat White (Mikroschaum)', 'Latte Art: Herz / Rosetta'],
    note:'Milch auf 60–65°C aufschäumen'},
  {cat:'Kaffee & Heißgetränke', name:'Tee & Heiße Cocktails', desc:'Trà & Cocktail nóng', type:'fachkompetenz',
    ingredients:['Irish Coffee (Whiskey + Kaffee)', 'Hot Toddy (Whisky + Honig + Zitrone)', 'Glühwein', 'Tee: Ziehzeit beachten'],
    note:'Heiße Getränke = perfekt im Winter'},

  /* ── Alkoholfreie Cocktails ── */
  {cat:'Alkoholfreie Cocktails', name:'Virgin Mojito', desc:'Mojito không cồn', type:'fachkompetenz',
    ingredients:['Limettensaft', 'Minze', 'Zuckersirup', 'Sodawasser'],
    note:'Muddled – kein Alkohol nötig'},
  {cat:'Alkoholfreie Cocktails', name:'Zero-Proof Techniken', desc:'Công thức không cồn', type:'fachkompetenz',
    ingredients:['Seedlip / Lyre\'s (Alkohol-Alternativen)', 'Shrubs (Essig-Sirup)', 'Fruchtsäfte + Gewürze', 'Tonic & Bitters (alkfrei)'],
    note:'Trend: bewusster Genuss ohne Alkohol'},
  {cat:'Alkoholfreie Cocktails', name:'Mocktail-Präsentation', desc:'Trình bày Mocktail', type:'fachkompetenz',
    ingredients:['Gleiches Glas wie Cocktail', 'Garnish identisch', 'Keine Diskriminierung', 'Auf der Karte hervorheben'],
    note:'Mocktails verdienen gleichwertige Präsentation'},

  /* ── Eis & Temperatur ── */
  {cat:'Eis & Temperatur', name:'Eisarten', desc:'Các loại đá', type:'fachkompetenz',
    ingredients:['Würfeleis (Standard)', 'Crushed Ice (Tiki/Julep)', 'Kugeleis (langsam schmelzend)', 'Block Ice (großer Würfel)'],
    note:'Größeres Eis = weniger Verdünnung'},
  {cat:'Eis & Temperatur', name:'Verdünnung & Temperatur', desc:'Độ pha loãng & nhiệt độ', type:'fachkompetenz',
    ingredients:['Shaken: ~25% Verdünnung', 'Rühren: ~15% Verdünnung', 'Zieltemperatur: –5 bis 0°C', 'Eis-Qualität = Drink-Qualität'],
    note:'Temperatur kontrolliert Geschmack & Textur'},

  /* ── Garnishing & Präsentation ── */
  {cat:'Garnishing & Präsentation', name:'Fruchtschnitzen', desc:'Cắt tỉa trái cây', type:'fachkompetenz',
    ingredients:['Zitrus-Twist / Zeste', 'Orangenrad', 'Ananaskeil', 'Dehydrierte Fruchtscheiben'],
    note:'Immer frisch schneiden, vor dem Service'},
  {cat:'Garnishing & Präsentation', name:'Glaseffekte', desc:'Hiệu ứng ly', type:'fachkompetenz',
    ingredients:['Salzrand / Zuckerrand', 'Rauch (Smoke Gun)', 'Gekühlte / gefrostete Gläser', 'Essbare Blüten'],
    note:'Auge trinkt mit – Präsentation verkauft'},
  {cat:'Garnishing & Präsentation', name:'Kräuter & Extras', desc:'Rau thơm & phụ kiện', type:'fachkompetenz',
    ingredients:['Minze (klatschen, nicht zerreißen)', 'Rosmarinzweig (anzünden)', 'Cocktailspieß (Oliven, Kirschen)', 'Regenschirmchen & Strohhalme'],
    note:'Garnish muss zum Drink passen'},
];
FK_ITEMS.forEach(item => DRINKS.push(item));

/* ═══════════════════════════════════════════════
   COMPLIANCE – chip-quiz items
═══════════════════════════════════════════════ */
const COMP_ITEMS = [
  /* ── Jugendschutzgesetz ── */
  {cat:'Jugendschutzgesetz', name:'Altersgrenzen Alkohol', desc:'Giới hạn tuổi bán rượu', type:'compliance',
    ingredients:['Ab 16: Bier, Wein, Sekt', 'Ab 18: Spirituosen & Mixgetränke mit Spirituosen', 'Unter 16: kein Alkohol', 'Ausweiskontrolle Pflicht'],
    note:'§ 9 JuSchG – Alkoholabgabe an Jugendliche'},
  {cat:'Jugendschutzgesetz', name:'Ausweiskontrolle', desc:'Kiểm tra giấy tờ tuỳ thân', type:'compliance',
    ingredients:['Personalausweis / Reisepass', 'Führerschein (mit Foto)', 'Im Zweifel: immer prüfen', 'Kein Ausweis = kein Alkohol'],
    note:'Lieber einmal zu viel prüfen als zu wenig'},
  {cat:'Jugendschutzgesetz', name:'Aufenthaltszeiten Jugendliche', desc:'Giờ giới hạn cho vị thành niên', type:'compliance',
    ingredients:['Unter 16: bis 22 Uhr (mit Erziehungsberechtigtem)', 'Ab 16: bis 24 Uhr', 'Unter 14: nur mit Begleitung', 'Veranstalter haftet'],
    note:'Gaststättenaufenthalt – § 4 JuSchG'},

  /* ── Schanklizenz / Konzession ── */
  {cat:'Schanklizenz / Konzession', name:'Gaststättenerlaubnis', desc:'Giấy phép kinh doanh nhà hàng', type:'compliance',
    ingredients:['Konzession beim Ordnungsamt', 'Gesundheitszeugnis (§ 43 IfSG)', 'Gewerbeanmeldung', 'Unterrichtung nach Gaststättengesetz'],
    note:'Ohne Konzession = illegaler Ausschank'},
  {cat:'Schanklizenz / Konzession', name:'Ausschankrechte', desc:'Quyền phục vụ rượu', type:'compliance',
    ingredients:['Alkoholausschank nur mit Lizenz', 'Sperrstunden beachten', 'Lärmschutzauflagen', 'Nichtraucherschutzgesetz'],
    note:'Kommunale Regeln können variieren'},

  /* ── Verantwortungsvoller Ausschank ── */
  {cat:'Verantwortungsvoller Ausschank', name:'Trunkenheit erkennen', desc:'Nhận biết khách say rượu', type:'compliance',
    ingredients:['Lallende Sprache', 'Unsicherer Gang', 'Aggressives Verhalten', 'Glasige Augen'],
    note:'Anzeichen frühzeitig erkennen & handeln'},
  {cat:'Verantwortungsvoller Ausschank', name:'Maßnahmen bei Trunkenheit', desc:'Biện pháp khi khách say', type:'compliance',
    ingredients:['Alkohol verweigern (Pflicht!)', 'Wasser / alkoholfrei anbieten', 'Taxi rufen', 'Vorgesetzte informieren'],
    note:'§ 20 GastG: Verbot der Abgabe an Betrunkene'},
  {cat:'Verantwortungsvoller Ausschank', name:'Haftung Barkeeper', desc:'Trách nhiệm pháp lý của Bartender', type:'compliance',
    ingredients:['Persönliche Haftung möglich', 'Fahrlässigkeit bei Alkoholabgabe', 'Jugendschutz-Verstöße = Ordnungswidrigkeit', 'Bis 50.000 € Bußgeld'],
    note:'Barkeeper trägt Mitverantwortung'},

  /* ── HACCP Bar-spezifisch ── */
  {cat:'HACCP Bar-spezifisch', name:'HACCP-Grundsätze Bar', desc:'Nguyên tắc HACCP cho Bar', type:'compliance',
    ingredients:['Gefahrenanalyse (Hazard Analysis)', 'Kritische Kontrollpunkte (CCP)', 'Grenzwerte festlegen', 'Dokumentation führen'],
    note:'HACCP = Hazard Analysis Critical Control Points'},
  {cat:'HACCP Bar-spezifisch', name:'Frische Zutaten & Allergene', desc:'Nguyên liệu tươi & dị ứng', type:'compliance',
    ingredients:['Frischware täglich prüfen', '14 Hauptallergene kennzeichnen', 'Nüsse, Milch, Ei, Sellerie…', 'Gäste aktiv informieren'],
    note:'EU-Verordnung 1169/2011 – Allergenkennzeichnung'},
  {cat:'HACCP Bar-spezifisch', name:'Kühlkette & Dokumentation', desc:'Chuỗi lạnh & hồ sơ', type:'compliance',
    ingredients:['Temperatur-Logbuch führen', 'Kühlschrank 2–7 °C', 'Wareneingang kontrollieren', 'Rückstellproben bei Events'],
    note:'Dokumentation ist Pflicht – täglich!'},

  /* ── Arbeitsschutz Bar ── */
  {cat:'Arbeitsschutz Bar', name:'Schneidwerkzeug Sicherheit', desc:'An toàn dụng cụ cắt', type:'compliance',
    ingredients:['Scharfe Messer (stumpf = gefährlich)', 'Schnittfeste Unterlage', 'Finger weg von der Klinge', 'Messer nie ins Spülbecken'],
    note:'Stumpfes Messer rutscht leichter ab'},
  {cat:'Arbeitsschutz Bar', name:'Glasbruch-Protokoll', desc:'Quy trình xử lý vỡ ly', type:'compliance',
    ingredients:['Bereich sofort sperren', 'Handschuhe anziehen', 'Scherben in extra Behälter', 'Eis-Bin komplett leeren bei Glasbruch'],
    note:'Glasbruch in Eis-Bin → alles wegwerfen!'},
  {cat:'Arbeitsschutz Bar', name:'Rutsch- & Brandschutz', desc:'Phòng trượt ngã & cháy nổ', type:'compliance',
    ingredients:['Rutschfeste Schuhe tragen', 'Verschüttetes sofort aufwischen', 'Feuerlöscher-Standort kennen', 'Flambieren: Sicherheitsabstand'],
    note:'Prävention geht vor'},
];
COMP_ITEMS.forEach(item => DRINKS.push(item));

/* ═══════════════════════════════════════════════
   SALES & MARKETING – chip-quiz items
═══════════════════════════════════════════════ */
const SALES_ITEMS = [
  /* ── Gästeberatung & Empfehlung ── */
  {cat:'Gästeberatung & Empfehlung', name:'Geschmacksprofil erfragen', desc:'Hỏi sở thích hương vị', type:'sales',
    ingredients:['Süß, sauer, bitter, herb?', 'Lieblingsspirituose?', 'Allergie / Unverträglichkeit?', 'Anlass: entspannt oder feierlich?'],
    note:'Gute Beratung = höherer Umsatz + zufriedene Gäste'},
  {cat:'Gästeberatung & Empfehlung', name:'Empfehlungstechnik', desc:'Kỹ thuật đề xuất', type:'sales',
    ingredients:['Persönliche Empfehlung geben', 'Storytelling zum Drink', 'Tagesempfehlung anbieten', 'Premium-Option nennen'],
    note:'"Darf ich Ihnen unseren Signature empfehlen?"'},
  {cat:'Gästeberatung & Empfehlung', name:'Stammgäste pflegen', desc:'Chăm sóc khách quen', type:'sales',
    ingredients:['Namen merken', 'Lieblingsdrink kennen', 'Persönliche Ansprache', 'Kleine Aufmerksamkeiten'],
    note:'Stammgäste = stabiler Umsatz'},

  /* ── Cocktailkarten-Design ── */
  {cat:'Cocktailkarten-Design', name:'Karten-Storytelling', desc:'Kể chuyện qua thực đơn', type:'sales',
    ingredients:['Herkunftsgeschichte des Drinks', 'Emotionale Beschreibung', 'Zutaten visuell hervorheben', 'Signature-Drinks prominent platzieren'],
    note:'Story verkauft mehr als Zutatenliste'},
  {cat:'Cocktailkarten-Design', name:'Preispsychologie', desc:'Tâm lý giá', type:'sales',
    ingredients:['Kein €-Zeichen (weniger Schmerz)', 'Teuerste nicht ganz oben', 'Anker-Preis: Premium zuerst', 'Mittlerer Preis wird am meisten gewählt'],
    note:'Decoy-Effekt: 3 Stufen → Mitte gewinnt'},

  /* ── Social Media (Bar-Content) ── */
  {cat:'Social Media (Bar-Content)', name:'Behind-the-Bar Content', desc:'Video hậu trường Bar', type:'sales',
    ingredients:['Drink-Zubereitung filmen', 'Bartender-Alltag zeigen', 'Kurze Reels / TikToks', 'Gutes Licht & saubere Bar'],
    note:'Authentizität > Perfektion'},
  {cat:'Social Media (Bar-Content)', name:'Social Media Strategie', desc:'Chiến lược mạng xã hội', type:'sales',
    ingredients:['Regelmäßig posten', 'Hashtags der Stadt/Bar', 'Stories für daily specials', 'Gäste taggen & reposten'],
    note:'Konsistenz ist wichtiger als Virulenz'},

  /* ── Events & Cocktailkurse ── */
  {cat:'Events & Cocktailkurse', name:'Mobile Bar & Catering', desc:'Bar di động & tiệc ngoài', type:'sales',
    ingredients:['Equipment-Checkliste', 'Transport & Kühlung', 'Menü vorher abstimmen', 'Genug Eis einplanen!'],
    note:'Planung = 80% des Erfolgs'},
  {cat:'Events & Cocktailkurse', name:'Cocktailkurs leiten', desc:'Dẫn lớp học Cocktail', type:'sales',
    ingredients:['Max. 3 Drinks pro Kurs', 'Geschichte erzählen', 'Teilnehmer mitmachen lassen', 'Rezeptkarten mitgeben'],
    note:'Edutainment: lernen + Spaß'},

  /* ── Bewertungsmanagement ── */
  {cat:'Bewertungsmanagement', name:'Google & TripAdvisor', desc:'Quản lý đánh giá online', type:'sales',
    ingredients:['Auf jede Bewertung antworten', 'Sachlich bei Kritik', 'Dankbar bei Lob', 'Gäste freundlich um Bewertung bitten'],
    note:'Antworten zeigt Professionalität'},
  {cat:'Bewertungsmanagement', name:'Negative Bewertungen', desc:'Xử lý đánh giá tiêu cực', type:'sales',
    ingredients:['Nicht persönlich nehmen', 'Entschuldigung + Lösung anbieten', 'Intern: Problem analysieren', 'Nie öffentlich streiten'],
    note:'1 schlechte Antwort = 100 verlorene Gäste'},
];
SALES_ITEMS.forEach(item => DRINKS.push(item));

/* ═══════════════════════════════════════════════
   SOFT SKILLS & SPRACHEN – chip-quiz items
═══════════════════════════════════════════════ */
const SOFT_ITEMS = [
  /* ── Gastfreundschaft & Empathie ── */
  {cat:'Gastfreundschaft & Empathie', name:'Gäste lesen', desc:'Đọc vị khách hàng', type:'softskills',
    ingredients:['Körpersprache beobachten', 'Stimmung erkennen', 'Anpassung der Ansprache', 'Ruhig vs. gesprächig einschätzen'],
    note:'Guter Bartender = guter Menschenkenner'},
  {cat:'Gastfreundschaft & Empathie', name:'Stammgast-Beziehung', desc:'Xây dựng quan hệ khách quen', type:'softskills',
    ingredients:['Namen merken', 'Vorlieben notieren', 'Persönliche Begrüßung', 'Kleine Gesten (Amuse-Bouche)'],
    note:'Stammgäste kommen wegen DIR'},
  {cat:'Gastfreundschaft & Empathie', name:'Umgang mit schwierigen Gästen', desc:'Xử lý khách khó tính', type:'softskills',
    ingredients:['Ruhig bleiben', 'Aktiv zuhören', 'Lösung anbieten', 'Vorgesetzte einschalten wenn nötig'],
    note:'Eskalation vermeiden – Deeskalation üben'},

  /* ── Kommunikation ── */
  {cat:'Kommunikation', name:'Small Talk an der Bar', desc:'Trò chuyện tại Bar', type:'softskills',
    ingredients:['Offene Fragen stellen', 'Aktiv zuhören', 'Gemeinsamkeiten finden', 'Politische Themen meiden'],
    note:'Bar = soziales Wohnzimmer'},
  {cat:'Kommunikation', name:'Konflikte lösen', desc:'Giải quyết xung đột', type:'softskills',
    ingredients:['Ich-Botschaften verwenden', 'Sachlich bleiben', 'Kompromiss suchen', 'Nie vor Gästen streiten'],
    note:'Professionell = Emotionen kontrollieren'},

  /* ── Stressresistenz ── */
  {cat:'Stressresistenz', name:'Rush Hour überstehen', desc:'Vượt qua giờ cao điểm', type:'softskills',
    ingredients:['Atmen & Fokus', 'Priorisieren', 'Kommunikation mit Team', 'Fehler akzeptieren & weitermachen'],
    note:'Stress ist normal – Reaktion ist Wahl'},
  {cat:'Stressresistenz', name:'Mentale Stärke', desc:'Sức mạnh tinh thần', type:'softskills',
    ingredients:['Pausen nutzen', 'Ausgleich nach der Arbeit', 'Grenzen setzen', 'Hilfe annehmen'],
    note:'Burnout-Prävention ist kein Luxus'},

  /* ── Teamwork ── */
  {cat:'Teamwork', name:'Zusammenarbeit Küche-Bar', desc:'Phối hợp Bếp-Bar', type:'softskills',
    ingredients:['Bestellungen koordinieren', 'Timing abstimmen', 'Respektvoller Umgang', 'Gemeinsame Mise en Place'],
    note:'Küche + Bar = ein Team'},
  {cat:'Teamwork', name:'Barback & Runner', desc:'Phụ Bar & Runner', type:'softskills',
    ingredients:['Aufgaben klar verteilen', 'Eis auffüllen, Gläser bereitstellen', 'Kommunikation: was fehlt?', 'Wertschätzung zeigen'],
    note:'Guter Barback = schnellerer Bartender'},
  {cat:'Teamwork', name:'Schichtübergabe', desc:'Giao ca', type:'softskills',
    ingredients:['86-Liste übergeben (was ist aus)', 'Offene Bestellungen', 'Sauberkeit der Station', 'Besondere Vorkommnisse melden'],
    note:'86 = Artikel nicht mehr verfügbar'},

  /* ── Showmanship & Flair ── */
  {cat:'Showmanship & Flair', name:'Flair Bartending Basics', desc:'Cơ bản biểu diễn pha chế', type:'softskills',
    ingredients:['Working Flair (während der Arbeit)', 'Flasche drehen (Basics)', 'Tin-Flip', 'Sicherheit geht vor'],
    note:'Erst Technik, dann Show'},
  {cat:'Showmanship & Flair', name:'Entertainment-Faktor', desc:'Yếu tố giải trí', type:'softskills',
    ingredients:['Blickkontakt mit Gästen', 'Drink flambieren', 'Rauch-Effekte (Smoke Gun)', 'Musik & Atmosphäre'],
    note:'Erlebnis > nur Getränk servieren'},

  /* ── Zeitmanagement ── */
  {cat:'Zeitmanagement', name:'Schichtplanung', desc:'Lên kế hoạch ca làm', type:'softskills',
    ingredients:['Opening-Checklist', 'Closing-Checklist', 'Prep-Liste vor Rush Hour', 'Pausen einplanen'],
    note:'Checklisten sparen Zeit & Nerven'},
  {cat:'Zeitmanagement', name:'Prioritäten setzen', desc:'Sắp xếp ưu tiên', type:'softskills',
    ingredients:['Gäste an der Bar zuerst', 'Bestellungen nach Reihenfolge', 'Multitasking: Shaken + Einschenken', 'Aufräumen während Wartezeiten'],
    note:'Immer etwas Sinnvolles tun'},

  /* ── Englisch ── */
  {cat:'Englisch', name:'Bar English Basics', desc:'Tiếng Anh Bar cơ bản', type:'softskills',
    ingredients:['"What can I get you?"', '"Neat / On the rocks / Straight up"', '"Shaken or stirred?"', '"Would you like to start a tab?"'],
    note:'Selbstbewusst sprechen – Fehler sind OK'},
  {cat:'Englisch', name:'Drink beschreiben (EN)', desc:'Mô tả đồ uống bằng tiếng Anh', type:'softskills',
    ingredients:['"Refreshing, citrus-forward"', '"Spirit-forward, boozy"', '"Sweet & tropical"', '"Smoky with a hint of vanilla"'],
    note:'Adjektive verkaufen Drinks'},
  {cat:'Englisch', name:'Beschwerden auf Englisch', desc:'Xử lý khiếu nại bằng tiếng Anh', type:'softskills',
    ingredients:['"I\'m sorry about that"', '"Let me fix that for you"', '"Can I offer you something else?"', '"Thank you for your patience"'],
    note:'Höflich + lösungsorientiert'},

  /* ── Verhandlungsgeschick ── */
  {cat:'Verhandlungsgeschick', name:'Lieferanten-Verhandlung', desc:'Đàm phán với nhà cung cấp', type:'softskills',
    ingredients:['Preise vergleichen', 'Mengenrabatte anfragen', 'Lieferbedingungen prüfen', 'Langfristige Beziehung aufbauen'],
    note:'Win-Win: gute Konditionen + treuer Partner'},
  {cat:'Verhandlungsgeschick', name:'Gehalts- & Trinkgeld-Verhandlung', desc:'Thương lượng lương & tiền tip', type:'softskills',
    ingredients:['Eigenen Wert kennen', 'Leistungen dokumentieren', 'Ruhig & sachlich argumentieren', 'Trinkgeld-System klären'],
    note:'Vorbereitung = Verhandlungsmacht'},
];
SOFT_ITEMS.forEach(item => DRINKS.push(item));

/* ═══════════════════════════════════════════════
   SUSHI & JAPANISCHE KÜCHE – chip-quiz items
═══════════════════════════════════════════════ */
const SUSHI_ITEMS = [
  /* ── Fischkunde & Qualitätskontrolle ── */
  {cat:'Fischkunde & Qualitätskontrolle', name:'Fischfrische erkennen', desc:'Nhận biết cá tươi', type:'sushi',
    ingredients:['Klare, glänzende Augen', 'Rote Kiemen', 'Festes Fleisch (drückt zurück)', 'Frischer Meergeruch (nicht fischig)'],
    note:'Frische = Sicherheit + Geschmack'},
  {cat:'Fischkunde & Qualitätskontrolle', name:'Sushi-Grade Fisch', desc:'Cá đạt chuẩn Sushi', type:'sushi',
    ingredients:['Sashimi-Qualität (roh essbar)', 'Tiefgefroren bei −20°C / 24h', 'Parasiten-Kontrolle', 'Lückenlose Kühlkette'],
    note:'EU-Vorschrift: Fisch für Rohverzehr muss durchgefroren werden'},
  {cat:'Fischkunde & Qualitätskontrolle', name:'Wichtige Fischarten', desc:'Các loại cá quan trọng', type:'sushi',
    ingredients:['Sake (Lachs)', 'Maguro (Thunfisch)', 'Hamachi (Gelbschwanz)', 'Ebi (Garnele)', 'Unagi (Aal)'],
    note:'Japanische Namen auswendig lernen!'},

  /* ── Messertechnik & Schneiden ── */
  {cat:'Messertechnik & Schneiden', name:'Sushi-Messer Typen', desc:'Các loại dao Sushi', type:'sushi',
    ingredients:['Yanagiba (Sashimi-Messer, lang)', 'Deba (Fischmesser, schwer)', 'Usuba (Gemüsemesser)', 'Einseitiger Schliff (Kataba)'],
    note:'Japanische Messer = einseitig geschliffen'},
  {cat:'Messertechnik & Schneiden', name:'Schnitt-Techniken', desc:'Kỹ thuật cắt', type:'sushi',
    ingredients:['Sogi-giri (schräg, Sashimi)', 'Hira-zukuri (gerade, dick)', 'Usu-zukuri (hauchdünn)', 'Ein Zug – nicht sägen!'],
    note:'Scharfes Messer + ein Zug = sauberer Schnitt'},
  {cat:'Messertechnik & Schneiden', name:'Messer schärfen', desc:'Mài dao', type:'sushi',
    ingredients:['Wetzstein (1000er + 3000er)', 'Messer im 15°-Winkel', 'Gleichmäßig über den Stein', 'Nach Gebrauch immer trocknen'],
    note:'Ein stumpfes Messer ist gefährlicher als ein scharfes'},

  /* ── Sushi-Reis ── */
  {cat:'Sushi-Reis', name:'Reis kochen', desc:'Nấu cơm Sushi', type:'sushi',
    ingredients:['Kurzkörniger Japanreis', 'Reis waschen bis Wasser klar', 'Wasser-Reis-Verhältnis 1:1,1', '15 Min. kochen + 10 Min. ruhen'],
    note:'Reis ist das Fundament – nie überspringen!'},
  {cat:'Sushi-Reis', name:'Sushi-Zu (Essigmischung)', desc:'Sushi-Zu (hỗn hợp giấm)', type:'sushi',
    ingredients:['Reisessig', 'Zucker', 'Salz', 'Unterheben mit Shamoji (Holzspatel)'],
    note:'Fächern beim Mischen → glänzender Reis'},
  {cat:'Sushi-Reis', name:'Reis-Temperatur & Textur', desc:'Nhiệt độ & kết cấu cơm', type:'sushi',
    ingredients:['Körpertemperatur (ca. 37°C)', 'Locker, nicht matschig', 'Leicht klebrig', 'Mit feuchten Händen formen'],
    note:'Zu heißer Reis = Nori wird sofort weich'},

  /* ── Nigiri, Maki & Gunkan ── */
  {cat:'Nigiri, Maki & Gunkan', name:'Nigiri formen', desc:'Nắn Nigiri', type:'sushi',
    ingredients:['Reis oval formen (20g)', 'Wasabi auf Fisch', 'Fisch auf Reis drücken', '2 Finger-Technik'],
    note:'Locker pressen – Reis soll im Mund zerfallen'},
  {cat:'Nigiri, Maki & Gunkan', name:'Maki rollen', desc:'Cuộn Maki', type:'sushi',
    ingredients:['Nori auf Bambusmatte', 'Dünne Reisschicht', 'Füllung mittig', 'Fest rollen, mit Wasser versiegeln'],
    note:'Hosomaki = dünn, Futomaki = dick'},
  {cat:'Nigiri, Maki & Gunkan', name:'Gunkan-Maki', desc:'Gunkan-Maki (tàu chiến)', type:'sushi',
    ingredients:['Reisballen formen', 'Nori-Streifen umwickeln', 'Oben offen lassen', 'Füllung: Ikura, Tobiko, Uni'],
    note:'Gunkan = "Kriegsschiff" – für weiche Toppings'},

  /* ── Special & Creative Rolls ── */
  {cat:'Special & Creative Rolls', name:'Inside-Out Roll', desc:'Cuộn Inside-Out', type:'sushi',
    ingredients:['Reis außen, Nori innen', 'Sesam / Tobiko außen', 'Frischhaltefolie auf Matte', 'Fest aber sanft rollen'],
    note:'Uramaki = umgedrehte Rolle'},
  {cat:'Special & Creative Rolls', name:'Tempura-Rolls', desc:'Cuộn Tempura', type:'sushi',
    ingredients:['Garnele / Gemüse frittieren', 'Knuspriges Element innen', 'Crunchy Topping (Panko)', 'Soße: Spicy Mayo / Teriyaki'],
    note:'Textur-Kontrast = Wow-Effekt'},
  {cat:'Special & Creative Rolls', name:'Signature Rolls kreieren', desc:'Sáng tạo cuộn đặc biệt', type:'sushi',
    ingredients:['Basis: Protein + Gemüse + Sauce', 'Textur-Kontrast (knusprig/weich)', 'Farb-Komposition', 'Einzigartiger Name'],
    note:'Kreativität + Balance = Signature Roll'},

  /* ── Präsentation & Abflämmen ── */
  {cat:'Präsentation & Abflämmen', name:'Abflämmen (Blowtorch)', desc:'Nướng sơ (đèn khò)', type:'sushi',
    ingredients:['Bunsenbrenner / Küchenbrenner', 'Kurz + gleichmäßig', 'Mayo / Soße vorher auftragen', 'Sicherheitsabstand einhalten'],
    note:'Flamed Sushi = karamellisiert + rauchig'},
  {cat:'Präsentation & Abflämmen', name:'Anrichten (Plating)', desc:'Trình bày đĩa', type:'sushi',
    ingredients:['Ungerade Anzahl (3, 5, 7)', 'Negative Space lassen', 'Soße als Dekoration', 'Essbare Blüten / Mikrogrün'],
    note:'Japanische Ästhetik: weniger ist mehr'},
  {cat:'Präsentation & Abflämmen', name:'Toppings & Saucen', desc:'Topping & Sốt', type:'sushi',
    ingredients:['Spicy Mayo', 'Unagi-Sauce (süß)', 'Ponzu (Zitrus-Soja)', 'Tobiko / Sesam / Schnittlauch'],
    note:'Topping vollendet den Geschmack'},
];
SUSHI_ITEMS.forEach(item => DRINKS.push(item));

/* ═══════════════════════════════════════════════
   HOT KITCHEN – chip-quiz items
═══════════════════════════════════════════════ */
const HOTK_ITEMS = [
  /* ── Zutaten & Mise en Place ── */
  {cat:'Zutaten & Mise en Place', name:'Mise en Place Küche', desc:'Chuẩn bị bếp', type:'hotkitchen',
    ingredients:['Alle Zutaten abwiegen', 'Gemüse vorschneiden', 'Saucen bereitstellen', 'Arbeitsfläche sauber halten'],
    note:'Mise en place = alles an seinem Platz'},
  {cat:'Zutaten & Mise en Place', name:'Asiatische Grundzutaten', desc:'Nguyên liệu cơ bản Châu Á', type:'hotkitchen',
    ingredients:['Sojasauce (hell/dunkel)', 'Sesamöl', 'Mirin & Sake (Kochen)', 'Ingwer & Knoblauch', 'Dashi (Fischbrühe)'],
    note:'5 Grundzutaten = 80% aller Gerichte'},
  {cat:'Zutaten & Mise en Place', name:'Schneidetechniken Küche', desc:'Kỹ thuật cắt bếp', type:'hotkitchen',
    ingredients:['Julienne (feine Streifen)', 'Brunoise (kleine Würfel)', 'Chiffonade (Kräuter-Streifen)', 'Krallentechnik (Finger schützen)'],
    note:'Gleichmäßig schneiden = gleichmäßig garen'},
  /* ── Protein kochen ── */
  {cat:'Protein kochen', name:'Hähnchen zubereiten', desc:'Chế biến gà', type:'hotkitchen',
    ingredients:['Kerntemperatur 75°C', 'Yakitori: Spieße + Tare-Sauce', 'Teriyaki: glasieren beim Braten', 'Panko-Panade für Katsu'],
    note:'Geflügel IMMER durchgaren!'},
  {cat:'Protein kochen', name:'Garnelen & Meeresfrüchte', desc:'Tôm & hải sản', type:'hotkitchen',
    ingredients:['Garnelen: 2–3 Min. pro Seite', 'Rosa + C-Form = fertig', 'Tempura: 180°C Öltemperatur', 'Jakobsmuscheln: scharf anbraten'],
    note:'Überkochen = gummig → Timing ist alles'},
  {cat:'Protein kochen', name:'Rindfleisch & Tataki', desc:'Bò & Tataki', type:'hotkitchen',
    ingredients:['Tataki: außen scharf anbraten', 'Innen roh (rare)', 'In Eiswasser stoppen', 'Dünn aufschneiden, mit Ponzu'],
    note:'Tataki = japanische "Sear"-Technik'},
  /* ── Asiatische Saucen ── */
  {cat:'Asiatische Saucen', name:'Teriyaki-Sauce', desc:'Sốt Teriyaki', type:'hotkitchen',
    ingredients:['Sojasauce', 'Mirin', 'Sake', 'Zucker', 'Einkochen bis dickflüssig'],
    note:'Teri = Glanz, Yaki = gegrillt'},
  {cat:'Asiatische Saucen', name:'Ponzu & Yuzu-Sauce', desc:'Sốt Ponzu & Yuzu', type:'hotkitchen',
    ingredients:['Sojasauce + Zitrus (Yuzu)', 'Dashi', 'Reisessig', 'Frisch & leicht'],
    note:'Perfekt zu Sashimi & Tataki'},
  {cat:'Asiatische Saucen', name:'Spicy Mayo & Sriracha', desc:'Sốt Mayo cay & Sriracha', type:'hotkitchen',
    ingredients:['Japanische Mayo (Kewpie)', 'Sriracha / Chili', 'Mischen nach Geschmack', 'Für Sushi-Topping & Dips'],
    note:'Kewpie Mayo = cremiger als westliche Mayo'},
  /* ── Reis & Beilagen ── */
  {cat:'Reis & Beilagen', name:'Japanischer Reis', desc:'Cơm Nhật', type:'hotkitchen',
    ingredients:['Kurzkörniger Reis', 'Waschen bis Wasser klar', '1:1 Wasser-Verhältnis', 'Reiskocher oder Topf + Deckel'],
    note:'Reis = Seele der japanischen Küche'},
  {cat:'Reis & Beilagen', name:'Gebratener Reis (Chahan)', desc:'Cơm chiên (Chahan)', type:'hotkitchen',
    ingredients:['Kalter Reis vom Vortag', 'Heißer Wok / Pfanne', 'Ei, Gemüse, Protein', 'Sojasauce zum Schluss'],
    note:'Heißer Wok + kalter Reis = perfektes Chahan'},
  {cat:'Reis & Beilagen', name:'Edamame & Beilagen', desc:'Edamame & Món phụ', type:'hotkitchen',
    ingredients:['Edamame: blanchieren + Meersalz', 'Wakame-Salat: Seetang + Sesam', 'Miso-Suppe: Dashi + Miso + Tofu', 'Gyoza: anbraten + dämpfen'],
    note:'Beilagen runden das Menü ab'},
  /* ── HACCP & Lebensmittelsicherheit ── */
  {cat:'HACCP & Lebensmittelsicherheit', name:'Kerntemperaturen', desc:'Nhiệt độ tâm', type:'hotkitchen',
    ingredients:['Geflügel: 75°C', 'Schwein: 70°C', 'Rind (medium): 55°C', 'Fisch: 63°C (durchgegart)'],
    note:'Thermometer = Pflicht in der Profiküche'},
  {cat:'HACCP & Lebensmittelsicherheit', name:'Kreuzkontamination', desc:'Nhiễm chéo', type:'hotkitchen',
    ingredients:['Schneidebretter trennen (Farben)', 'Roh + Gekocht nie zusammen', 'Hände waschen zwischen Zutaten', 'Getrennte Lagerung im Kühlschrank'],
    note:'Rot = Fleisch, Blau = Fisch, Grün = Gemüse'},
  {cat:'HACCP & Lebensmittelsicherheit', name:'Allergene in der Küche', desc:'Chất gây dị ứng', type:'hotkitchen',
    ingredients:['14 Hauptallergene kennen', 'Soja, Sesam, Fisch, Weizen häufig', 'Separate Zubereitung', 'Gäste vor dem Servieren informieren'],
    note:'Allergene können lebensbedrohlich sein!'},
];
HOTK_ITEMS.forEach(item => DRINKS.push(item));
