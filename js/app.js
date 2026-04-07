    /* ═══════════════════════════════════════════════
       i18n — Language System (vi / de)
    ═══════════════════════════════════════════════ */
    let currentLang = localStorage.getItem('origami_lang') || 'vi';

    const I18N = {
      // Tabs
      tab_browse: { vi: '📖 Học', de: '📖 Lernen' },
      tab_train: { vi: '🎯 Luyện tập', de: '🎯 Üben' },
      tab_assess: { vi: '🏅 Đánh giá', de: '🏅 Bewertung' },
      tab_add: { vi: '✏️ Nhập công thức', de: '✏️ Rezept eingeben' },
      tab_history: { vi: '📊 Lịch sử', de: '📊 Verlauf' },
      // Nickname
      nick_title: { vi: '👤 Bạn là ai?', de: '👤 Wer bist du?' },
      nick_desc: { vi: 'Nhập nickname để lưu tiến độ riêng của bạn', de: 'Gib deinen Nickname für persönlichen Fortschritt ein' },
      nick_placeholder: { vi: 'Nickname của bạn...', de: 'Dein Nickname...' },
      nick_confirm: { vi: '✔️ Xác nhận', de: '✔️ Bestätigen' },
      nick_or: { vi: 'Hoặc chọn:', de: 'Oder wähle:' },
      // Browse
      browse_title: { vi: 'Tất cả nội dung', de: 'Alle Inhalte' },
      type_all: { vi: '📚 Tất cả', de: '📚 Alle' },
      type_drink: { vi: '🍹 Đồ uống', de: '🍹 Getränke' },
      type_food: { vi: '🍽️ Đồ ăn', de: '🍽️ Speisen' },
      cat_all: { vi: 'Tất cả', de: 'Alle' },
      search_placeholder: { vi: 'Tìm tên, danh mục hoặc nội dung...', de: 'Name, Kategorie oder Inhalt suchen...' },
      no_results: { vi: 'Không tìm thấy kết quả nào.', de: 'Keine Ergebnisse gefunden.' },
      no_drinks: { vi: 'Không có đồ uống nào.', de: 'Keine Einträge vorhanden.' },
      // Browse section titles
      title_all: { vi: 'Tất cả nội dung', de: 'Alle Inhalte' },
      title_drink: { vi: 'Đồ uống', de: 'Getränke' },
      title_food: { vi: 'Thực đơn Đồ ăn', de: 'Speisekarte' },
      title_wirtschaft: { vi: '💰 Kinh tế · Wirtschaftlichkeit', de: '💰 Wirtschaftlichkeit' },
      title_operations: { vi: '🔧 Operations · Vận hành Bar', de: '🔧 Bar-Operations' },
      title_fachkompetenz: { vi: '🍸 Fachkompetenz Getränke', de: '🍸 Fachkompetenz Getränke' },
      title_compliance: { vi: '⚖️ Compliance · Recht & Vorschriften', de: '⚖️ Compliance & Recht' },
      title_sales: { vi: '📢 Sales & Marketing', de: '📢 Sales & Marketing' },
      title_softskills: { vi: '🌐 Soft Skills & Sprachen', de: '🌐 Soft Skills & Sprachen' },
      title_sushi: { vi: '🍣 Sushi & Japanische Küche', de: '🍣 Sushi & Japanische Küche' },
      title_hotkitchen: { vi: '🔥 Hot Kitchen', de: '🔥 Hot Kitchen' },
      title_service: { vi: '🍽️ Service & Gästebetreuung · Phục vụ', de: '🍽️ Service & Gästebetreuung' },
      // Card
      score_none: { vi: '⚪ Chưa luyện', de: '⚪ Nicht geübt' },
      score_bad: { vi: '🔴 Còn yếu', de: '🔴 Schwach' },
      score_mid: { vi: '🟡 Đang học', de: '🟡 Lernend' },
      score_good: { vi: '🟢 Thuộc rồi', de: '🟢 Gelernt' },
      custom_badge: { vi: 'Tùy chỉnh', de: 'Individuell' },
      btn_edit: { vi: '✏️ Sửa', de: '✏️ Bearbeiten' },
      btn_del: { vi: '🗑 Xoá', de: '🗑 Löschen' },
      flip_hint: { vi: '← lật lại', de: '← zurück' },
      img_add: { vi: '📷 Thêm ảnh', de: '📷 Bild hinzufügen' },
      img_change: { vi: '📷 Đổi ảnh', de: '📷 Bild ändern' },
      // Train
      train_title: { vi: 'Chọn loại & nhóm luyện tập', de: 'Typ & Kategorie zum Üben wählen' },
      train_weak_only: { vi: '⚡ Chỉ luyện món chưa thuộc', de: '⚡ Nur ungeübte Einträge' },
      train_start: { vi: '▶ Bắt đầu luyện tập', de: '▶ Übung starten' },
      stat_current: { vi: 'Câu', de: 'Frage' },
      stat_total: { vi: 'Tổng', de: 'Gesamt' },
      stat_correct: { vi: 'Đúng', de: 'Richtig' },
      stat_wrong: { vi: 'Sai', de: 'Falsch' },
      train_end: { vi: '✕ Kết thúc', de: '✕ Beenden' },
      chip_instruction: { vi: 'Chọn', de: 'Wähle' },
      chip_instruction2: { vi: 'nguyên liệu đúng cho món này', de: 'richtige Zutaten für dieses Gericht' },
      btn_check: { vi: '✓ Kiểm tra', de: '✓ Prüfen' },
      btn_reveal: { vi: '👁 Xem đáp án', de: '👁 Lösung zeigen' },
      btn_next: { vi: 'Tiếp theo →', de: 'Weiter →' },
      // Done screen
      done_heading: { vi: 'Hoàn thành!', de: 'Fertig!' },
      done_msg: { vi: 'Hãy luyện tập thêm nhé!', de: 'Weiter üben!' },
      done_retry: { vi: '🔁 Ôn lại lỗi sai', de: '🔁 Fehler wiederholen' },
      done_restart: { vi: '🔄 Luyện tiếp', de: '🔄 Weiter üben' },
      msg_95: { vi: 'Xuất sắc! Bạn đã thuộc hầu hết rồi!', de: 'Hervorragend! Fast alles gelernt!' },
      msg_80: { vi: 'Giỏi lắm! Hãy ôn lại vài phần chưa chắc.', de: 'Sehr gut! Ein paar Sachen noch wiederholen.' },
      msg_60: { vi: 'Khá ổn! Tiếp tục cố gắng nhé.', de: 'Ganz okay! Weiter dranbleiben.' },
      msg_40: { vi: 'Cần ôn lại thêm, đừng bỏ cuộc!', de: 'Noch üben, gib nicht auf!' },
      msg_low: { vi: 'Cần luyện tập thêm nhiều hơn nhé!', de: 'Mehr üben nötig!' },
      wrong_detail: { vi: 'Chi tiết', de: 'Details' },
      wrong_items: { vi: 'câu sai', de: 'falsche Antworten' },
      // Check results
      result_perfect: { vi: '✅ Hoàn hảo! Chọn đúng hết rồi!', de: '✅ Perfekt! Alles richtig!' },
      result_partial: { vi: 'đúng,', de: 'richtig,' },
      result_wrong: { vi: 'sai', de: 'falsch' },
      result_reveal: { vi: '👁 Các chip xanh là đáp án đúng.', de: '👁 Die grünen Chips sind richtig.' },
      confirm_skip: { vi: 'Bạn chưa kiểm tra. Bỏ qua câu này?', de: 'Nicht geprüft. Diese Frage überspringen?' },
      alert_select_cat: { vi: 'Vui lòng chọn ít nhất 1 nhóm!', de: 'Bitte mindestens 1 Kategorie wählen!' },
      alert_mastered: { vi: 'Bạn đã thuộc hết rồi! 🌟', de: 'Alles gelernt! 🌟' },
      alert_select_ing: { vi: 'Hãy chọn ít nhất 1 nguyên liệu!', de: 'Mindestens 1 Zutat wählen!' },
      correct_list: { vi: '✅ Thành phần đúng:', de: '✅ Richtige Zutaten:' },
      // History
      history_title: { vi: '📊 Lịch sử luyện tập', de: '📊 Übungsverlauf' },
      hist_no_player: { vi: '👤 Hãy nhập nickname trước để xem lịch sử.', de: '👤 Nickname eingeben um Verlauf zu sehen.' },
      hist_enter_nick: { vi: 'Nhập nickname', de: 'Nickname eingeben' },
      hist_no_data: { vi: 'chưa có lịch sử luyện tập nào.', de: 'hat noch keinen Übungsverlauf.' },
      hist_prompt: { vi: 'Hãy vào tab Luyện tập để bắt đầu!', de: 'Gehe zum Üben-Tab um zu starten!' },
      hist_change: { vi: '✏️ Đổi người', de: '✏️ Wechseln' },
      hist_streak: { vi: 'ngày luyện liên tiếp!', de: 'Tage in Folge geübt!' },
      hist_attempts: { vi: 'Lượt luyện', de: 'Übungen' },
      hist_pct: { vi: 'Tỷ lệ đúng', de: 'Richtig %' },
      hist_mastered: { vi: 'Món đã thuộc', de: 'Gelernt' },
      hist_days: { vi: 'Ngày luyện', de: 'Übungstage' },
      hist_progress: { vi: '🍹 Tiến độ từng món (yếu nhất trước)', de: '🍹 Fortschritt pro Eintrag (schwächste zuerst)' },
      hist_name: { vi: 'Món', de: 'Name' },
      hist_cat: { vi: 'Danh mục', de: 'Kategorie' },
      hist_tries: { vi: 'Lượt', de: 'Vers.' },
      hist_level: { vi: 'Mức độ', de: 'Level' },
      hist_recent: { vi: '📅 Hoạt động gần đây', de: '📅 Letzte Aktivitäten' },
      hist_today: { vi: 'Hôm nay', de: 'Heute' },
      hist_yesterday: { vi: 'Hôm qua', de: 'Gestern' },
      // Add form
      add_title: { vi: 'Nhập công thức', de: 'Rezept eingeben' },
      form_type: { vi: 'Loại mục', de: 'Typ' },
      form_name: { vi: 'Tên món <span class="required">*</span>', de: 'Name <span class="required">*</span>' },
      form_name_ph: { vi: '— Chọn món cần nhập —', de: '— Gericht wählen —' },
      form_cat: { vi: 'Danh mục <span class="required">*</span>', de: 'Kategorie <span class="required">*</span>' },
      form_cat_ph: { vi: '— Chọn nhóm —', de: '— Kategorie wählen —' },
      form_cat_custom: { vi: 'Nhập tên nhóm mới...', de: 'Neue Kategorie...' },
      form_desc: { vi: 'Mô tả ngắn', de: 'Kurzbeschreibung' },
      form_desc_ph: { vi: 'VD: Cocktail xoài chua ngọt', de: 'z.B. Süß-saurer Mango-Cocktail' },
      form_ing: { vi: 'Nguyên liệu <span class="required">*</span>', de: 'Zutaten <span class="required">*</span>' },
      form_add_ing: { vi: '+ Thêm nguyên liệu', de: '+ Zutat hinzufügen' },
      form_glass: { vi: 'Loại ly / dụng cụ', de: 'Glas / Geschirr' },
      form_glass_ph: { vi: '— Chọn loại ly —', de: '— Glas wählen —' },
      form_glass_other: { vi: 'Khác (nhập tay)...', de: 'Andere (manuell)...' },
      form_glass_other_ph: { vi: 'Nhập loại ly...', de: 'Glas eingeben...' },
      form_note: { vi: 'Ghi chú / cách pha', de: 'Notizen / Zubereitung' },
      form_note_ph: { vi: 'VD: Tỉ lệ 1:3, thêm đá, trang trí bạc hà...', de: 'z.B. Verhältnis 1:3, Eis, Minze garnieren...' },
      form_save: { vi: '💾 Lưu công thức', de: '💾 Rezept speichern' },
      form_delete: { vi: '🗑 Xoá', de: '🗑 Löschen' },
      form_cancel: { vi: '✕ Huỷ', de: '✕ Abbrechen' },
      // Toasts & messages
      toast_welcome: { vi: '👋 Xin chào,', de: '👋 Hallo,' },
      toast_save_ok: { vi: '✅ Đã lưu công thức:', de: '✅ Rezept gespeichert:' },
      toast_delete_ok: { vi: '🗑 Đã xoá công thức.', de: '🗑 Rezept gelöscht.' },
      toast_export: { vi: '⬇️ Đã xuất', de: '⬇️ Exportiert:' },
      toast_export_unit: { vi: 'công thức!', de: 'Rezepte!' },
      toast_import_ok: { vi: '✅ Nhập xong:', de: '✅ Importiert:' },
      toast_no_export: { vi: 'Chưa có công thức nào được lưu!', de: 'Keine Rezepte gespeichert!' },
      toast_invalid: { vi: 'File không hợp lệ!', de: 'Ungültige Datei!' },
      toast_no_perm: { vi: 'Bạn không có quyền nhập công thức 🔒', de: 'Keine Berechtigung 🔒' },
      toast_fill: { vi: 'Vui lòng điền tên, danh mục...', de: 'Bitte Name, Kategorie ausfüllen...' },
      confirm_delete: { vi: 'Xoá', de: 'Löschen' },
      confirm_delete2: { vi: 'khỏi danh sách?', de: 'aus der Liste entfernen?' },
      // Image
      img_max: { vi: 'Ảnh tối đa 2MB!', de: 'Bild max. 2MB!' },
      img_uploading: { vi: 'Đang tải ảnh lên...', de: 'Bild wird hochgeladen...' },
      img_done: { vi: 'Đã tải ảnh lên! 📸', de: 'Bild hochgeladen! 📸' },
      img_err: { vi: 'Lỗi tải ảnh:', de: 'Bild-Fehler:' },
      img_del_confirm: { vi: 'Xoá ảnh của', de: 'Bild löschen von' },
      img_del_ok: { vi: 'Đã xoá ảnh.', de: 'Bild gelöscht.' },
      img_del_err: { vi: 'Lỗi xoá ảnh', de: 'Fehler beim Löschen' },
      // Sync
      sync_ing: { vi: '☁️ Đang đồng bộ...', de: '☁️ Synchronisiere...' },
      sync_new: { vi: '🔄 Vừa có cập nhật mới', de: '🔄 Neue Aktualisierung' },
      sync_ok: { vi: '✅ Đã đồng bộ Supabase', de: '✅ Supabase synchronisiert' },
      sync_offline: { vi: '⚠️ Offline (dùng cache)', de: '⚠️ Offline (Cache-Modus)' },
      // Weak count
      weak_suffix: { vi: 'món chưa thuộc', de: 'nicht gelernt' },
      // Type buttons
      type_wirtschaft: { vi: '💰 Kinh tế', de: '💰 Wirtschaft' },
      type_operations: { vi: '🔧 Vận hành', de: '🔧 Operations' },
      type_fachkompetenz: { vi: '🍸 Chuyên môn', de: '🍸 Fachkompetenz' },
      type_compliance: { vi: '⚖️ Tuân thủ', de: '⚖️ Compliance' },
      type_sales: { vi: '📢 Bán hàng', de: '📢 Sales' },
      type_softskills: { vi: '🌐 Kỹ năng mềm', de: '🌐 Soft Skills' },
      type_sushi: { vi: '🍣 Sushi', de: '🍣 Sushi' },
      type_hotkitchen: { vi: '🔥 Bếp nóng', de: '🔥 Hot Kitchen' },
      type_service: { vi: '🍽️ Phục vụ', de: '🍽️ Service' },
    };

    /* ═══ Category name translations (Vietnamese → German) ═══ */
    const CAT_DE = {
      'Đồ uống không cồn': 'Alkoholfreie Getränke',
      'Đồ uống nóng': 'Heißgetränke',
      'Cocktail không cồn': 'Alkoholfreie Cocktails',
      'Bia': 'Bier',
      'Khai vị & Cocktail': 'Aperitif & Cocktails',
      'Sake & Rượu vang': 'Sake & Wein',
      'Khai vị': 'Vorspeisen',
      'Chay': 'Vegetarisch',
      'Thịt': 'Fleisch',
      'Hải sản': 'Meeresfrüchte',
      'Cuộn đặc biệt': 'Spezialrollen',
      'Tráng miệng': 'Dessert',
      // Food - sushi categories
      'Sashimi & Tatar': 'Sashimi & Tatar',
      "Chef's Choice": "Chef's Choice",
      'Maki Classic': 'Maki Klassisch',
      'Nigiri': 'Nigiri',
      'Avocado Top': 'Avocado Top',
      'Green Roll': 'Green Roll',
      'Crunchy Roll': 'Crunchy Roll',
      'Maki Light': 'Maki Light',
      'Inside-Out': 'Inside-Out',
      'Spinach Wrap': 'Spinat-Wrap',
      'Tatar Roll': 'Tatar Roll',
      'Set Sushi - Lunch': 'Sushi-Set Mittagessen',
      'Set Sushi - Dinner': 'Sushi-Set Abendessen',
    };

    /* ═══ Vietnamese → German term dictionary ═══ */
    const VI_DE = [
      // ── Glass / Servierware ──
      ['Dĩa tráng miệng', 'Dessertteller'], ['Chén tráng miệng', 'Dessertschale'], ['Chén kem', 'Eisschale'],
      ['Dĩa sashimi', 'Sashimi-Teller'], ['Dĩa sushi', 'Sushi-Teller'], ['Dĩa + cơm', 'Teller + Reis'],
      ['Khay nhiều lớp', 'Etagère'], ['Chén salad', 'Salatschale'], ['Chén nhỏ', 'Kleine Schale'],
      ['Ly cao (Highball)', 'Highballglas'], ['Ly Balloon / Ly Highball', 'Ballonglas / Highballglas'],
      ['Ly Wine lớn (250ml)', 'Weinglas groß (250ml)'], ['Ly Wine / Ly Champagne', 'Wein- / Champagnerglas'],
      ['Ly đồng (Copper Mug)', 'Kupferbecher (Copper Mug)'], ['Ly Champagne (Flute)', 'Champagnerflöte'],
      ['Ly Weizen cao', 'Weizenglas'], ['Ly bia / Ly Pilsner', 'Bierglas / Pilsnerglas'],
      ['Ly vang trắng', 'Weißweinglas'], ['Ly vang đỏ (rộng hơn)', 'Rotweinglas (breiter)'],
      ['Ly vang hồng', 'Roséglas'], ['Tách Cappuccino 180ml', 'Cappuccinotasse 180ml'],
      ['Tách Espresso lớn', 'Große Espressotasse'], ['Tách cà phê', 'Kaffeetasse'],
      ['Ấm trà + tách', 'Teekanne + Tasse'], ['Ly bia cao', 'Bierglas'], ['Ly Highball', 'Highballglas'],
      ['Ly Wine', 'Weinglas'], ['Ly Pilsner', 'Pilsnerglas'], ['Ly thấp', 'Tumbler'],
      ['Ly cao', 'Longdrinkglas'], ['Ly nước', 'Wasserglas'], ['Ly bia', 'Bierglas'],
      ['Chén sake (Ochoko) hoặc ly nhỏ', 'Sake-Schale (Ochoko) oder Schnapsglas'],
      ['Khay', 'Platte'], ['Chén', 'Schale'], ['Dĩa', 'Teller'],
      // ── Descriptions ──
      ['Nước lọc Brita', 'Brita-Wasser (gefiltert)'], ['Nước ngọt có ga', 'Cola-Softdrink'],
      ['Nước ngọt không calo', 'Cola Zero (kalorienfrei)'], ['Nước cam có ga', 'Fanta Orangenlimonade'],
      ['Hỗn hợp Coca và Fanta', 'Cola-Fanta-Mix'], ['Nước chanh có ga', 'Sprite Zitronenlimonade'],
      ['Nước gừng nhẹ có ga', 'Leichtes Ingwer-Sprudel'], ['Nước gừng mạnh có ga', 'Kräftiges Ingwerbier'],
      ['Nước đào', 'Pfirsichsaft'], ['Nước ép táo', 'Apfelsaft'], ['Nước ép chanh dây', 'Maracujasaft'],
      ['Nước ép xoài', 'Mangosaft'], ['Nước ép vải', 'Lycheesaft'],
      ['Nước ép pha nước khoáng', 'Saftschorle mit Mineralwasser'],
      ['Cà phê đen', 'Schwarzer Kaffee'], ['Cà phê Espresso 1 shot', 'Espresso (1 Shot)'],
      ['Espresso đôi (2 shot)', 'Doppio (2 Shots)'], ['Espresso với sữa bọt', 'Espresso mit Milchschaum'],
      ['Trà xanh', 'Grüner Tee'], ['Trà nhài', 'Jasmintee'], ['Trà gừng đặc biệt', 'Spezial-Ingwertee'],
      ['Trà giải cảm', 'Erkältungstee'],
      ['Cocktail bạc hà - gừng mát lạnh', 'Minze-Ingwer-Cocktail (eisgekühlt)'],
      ['Cocktail xoài cay nhẹ', 'Mango-Cocktail (leicht scharf)'],
      ['Nước chanh Yuzu Nhật Bản', 'Japanische Yuzu-Limonade'],
      ['Bia Nhật Bản cao cấp', 'Premium-Japanisches Bier'], ['Bia Nhật không cồn', 'Alkoholfreies japanisches Bier'],
      ['Bia lúa mì truyền thống Đức', 'Deutsches Weizenbier (traditionell)'],
      ['Bia pha nước chanh', 'Bier mit Limonade (Radler)'],
      ['Khai vị hoa cơm cháy mùa hè', 'Holunderblüten-Aperitif (Sommer)'],
      ['Khai vị Aperol cổ điển', 'Aperol Spritz (Klassiker)'],
      ['Khai vị Lillet vị đào', 'Lillet Pfirsich-Aperitif'],
      ['Whiskey pha Coca-Cola', 'Whiskey Cola'], ['Cocktail Vodka gừng', 'Vodka-Ingwer-Cocktail'],
      ['Gin Tonic với Roku Gin', 'Gin Tonic mit Roku Gin'],
      ['Gin Tonic với Kaiza Gin', 'Gin Tonic mit Kaiza Gin'],
      ['Gin Tonic với Momotaro Gin', 'Gin Tonic mit Momotaro Gin'],
      ['Rượu gạo Nhật Bản cao cấp', 'Premium-Japanischer Reiswein'],
      ['Rượu vang trắng Riesling', 'Weißwein Riesling'], ['Rượu vang trắng Chardonnay', 'Weißwein Chardonnay'],
      ['Rượu vang đỏ', 'Rotwein'], ['Rượu vang hồng', 'Roséwein'],
      ['Rượu Sâm banh / Champagne', 'Champagner / Sekt'],
      // ── Food descriptions ──
      ['Súp Miso cá hồi', 'Miso-Suppe mit Lachs'], ['Đậu nành Nhật giòn', 'Knusprige Edamame'],
      ['Gà xiên nướng sốt đặc biệt', 'Hähnchenspieß mit Spezialsoße'],
      ['Salad rong biển sốt mè', 'Seetangsalat mit Sesamdressing'],
      ['Sủi cảo nhân gà chiên giòn', 'Knusprige Hühnchen-Gyoza'],
      ['Sò điệp áp chảo bơ sốt Yuzu', 'Gebratene Jakobsmuscheln mit Yuzu-Butter'],
      ['Bơ chiên xù sốt Mayo cay', 'Frittierte Avocado mit Spicy Mayo'],
      ['Súp gà cốt dừa', 'Kokos-Hühnersuppe'], ['Đậu phụ non chiên xù', 'Frittierter Seidentofu'],
      ['Tôm chiên xù sốt Mayo cay', 'Tempura-Garnelen mit Spicy Mayo'],
      ['Cà tím chiên xù sốt Mayo cay', 'Frittierte Aubergine mit Spicy Mayo'],
      ['Kim chi bắp cải Hàn Quốc', 'Koreanisches Kimchi'],
      ['Đậu phụ chiên giòn sốt xoài', 'Knuspriger Tofu mit Mangosoße'],
      ['Đậu phụ xào sốt gừng-mật ong', 'Tofu mit Ingwer-Honig-Soße'],
      ['Gà sốt đậu phộng', 'Hähnchen mit Erdnusssoße'],
      ['Bò và tôm xào cay', 'Scharfes Rinder- und Garnelen-Wok'],
      ['Gà sốt cà ri mù tạt', 'Hähnchen mit Wasabi-Curry'],
      ['Gà sốt xoài', 'Hähnchen mit Mangosoße'], ['Gà cà ri đỏ', 'Hähnchen mit rotem Curry'],
      ['Vịt chiên giòn sốt cà ri đỏ', 'Knusprige Ente mit rotem Curry'],
      ['Cá hồi sốt cà ri cam', 'Lachs mit Orangen-Curry'], ['Tôm sốt sả', 'Garnelen mit Zitronengras'],
      ['Cá hồi Teriyaki', 'Teriyaki-Lachs'], ['Cá hồi sốt cà ri xoài', 'Lachs mit Mango-Curry'],
      ['Sashimi cá ngừ vây xanh thượng hạng', 'Premium-Blauflossenthun-Sashimi'],
      ['Sashimi cá hồi Scotland nhãn đỏ', 'Label-Rouge-Lachs-Sashimi'],
      ['Sashimi cá ngừ', 'Thunfisch-Sashimi'],
      ['15 miếng sashimi ngon nhất ngày', '15 Stück Best-of-Sashimi des Tages'],
      ['Bít tết cá ngừ 180g', 'Thunfisch-Steak 180g'], ['Khay sashimi hoàng gia', 'Royal-Sashimi-Platte'],
      ['Tatar cá cam', 'Hamachi-Tatar'], ['Tatar cá hồi', 'Lachs-Tatar'], ['Tatar cá ngừ', 'Thunfisch-Tatar'],
      // ── Sushi roll descriptions ──
      ['Cuộn cá hồi & cá cam', 'Lachs-Hamachi-Rolle'],
      ['Cuộn tôm Tempura cá hồi nướng sơ', 'Tempura-Garnelen mit geflammtem Lachs'],
      ['Cuộn cá hồi Tempura phủ tatar tôm', 'Lachs-Tempura mit Garnelen-Tatar'],
      ['Cuộn cua lột vỏ mềm', 'Softshell-Krabben-Rolle'], ['Cuộn rồng', 'Dragon Roll'],
      ['Cuộn phượng hoàng', 'Phoenix Roll'],
      ['Cuộn cá ngừ & sò điệp nướng sơ', 'Geflammter Thunfisch & Jakobsmuschel'],
      ['Cuộn cầu vồng Origami', 'Origami-Rainbow-Rolle'], ['Cuộn Alaska Inside-Out', 'Alaska Inside-Out'],
      ['Cuộn tôm Tempura rau thơm', 'Tempura-Garnelen mit Kräutern'],
      ['Cuộn cá ngừ phủ bơ', 'Thunfisch mit Avocado-Topping'],
      ['Cuộn tatar cá hồi Địa Trung Hải', 'Mediterrane Lachs-Tatar-Rolle'],
      ['Cuộn rau bina chay', 'Vegetarische Spinat-Rolle'],
      ['Cuộn cá hồi tẩm ướp vỏ giòn', 'Knusprige marinierte Lachs-Rolle'],
      ['Cuộn sếu lươn nguyên con', 'Kranich-Rolle mit ganzer Aal'],
      ['Cuộn cá ngừ Alaska Inside-Out', 'Thunfisch-Alaska Inside-Out'],
      ['Cuộn cá cam phủ bơ', 'Hamachi mit Avocado-Topping'],
      ['Maki cá hồi bơ', 'Lachs-Avocado-Maki'],
      ['Maki cá hồi', 'Lachs-Maki'], ['Maki cá cam', 'Hamachi-Maki'], ['Maki cá ngừ', 'Thunfisch-Maki'],
      ['Maki lươn nướng', 'Gegrillter Aal-Maki'], ['Maki dưa chuột', 'Gurken-Maki'], ['Maki bơ', 'Avocado-Maki'],
      ['Nigiri cá hồi', 'Lachs-Nigiri'], ['Nigiri cá cam', 'Hamachi-Nigiri'], ['Nigiri cá ngừ', 'Thunfisch-Nigiri'],
      ['Nigiri bụng cá ngừ', 'Toro-Nigiri (Thunfischbauch)'], ['Nigiri sò điệp', 'Jakobsmuschel-Nigiri'],
      ['Nigiri lươn nướng', 'Gegrillter Aal-Nigiri'], ['Nigiri Gunkan cuộn rong biển', 'Gunkan-Nigiri mit Seetang'],
      ['Nigiri bơ', 'Avocado-Nigiri'], ['Nigiri cá hồi nướng sơ', 'Geflammter Lachs-Nigiri'],
      ['Nigiri cá ngừ nướng sơ', 'Geflammter Thunfisch-Nigiri'], ['Nigiri tôm', 'Garnelen-Nigiri'],
      ['Nigiri thanh cua', 'Surimi-Nigiri'],
      ['Cuộn cá hồi phủ bơ', 'Lachs mit Avocado-Topping'],
      ['Cuộn tôm Tempura phủ bơ', 'Tempura-Garnelen mit Avocado'],
      ['Cuộn măng tây Tempura phủ bơ', 'Tempura-Spargel mit Avocado'],
      ['Cuộn xanh cá hồi', 'Green Lachs-Rolle'], ['Cuộn xanh cá ngừ', 'Green Thunfisch-Rolle'],
      ['Cuộn xanh tôm Tempura', 'Green Tempura-Garnelen-Rolle'],
      ['Cuộn xanh rau củ', 'Green Gemüse-Rolle'], ['Cuộn xanh măng tây Tempura', 'Green Tempura-Spargel-Rolle'],
      ['Cá hồi cay chiên giòn', 'Knuspriger scharfer Lachs'], ['Cá ngừ cay chiên giòn', 'Knuspriger scharfer Thunfisch'],
      ['Tôm chiên giòn', 'Knusprige Garnelen'], ['Măng tây chiên giòn', 'Knuspriger Spargel'],
      ['Bơ chiên giòn', 'Knusprige Avocado'], ['Gà Yakitori chiên giòn', 'Knuspriges Yakitori-Hähnchen'],
      ['Cá cam chiên giòn', 'Knuspriger Hamachi'], ['Cá hồi chiên giòn', 'Knuspriger Lachs'],
      ['Cá ngừ chiên giòn', 'Knuspriger Thunfisch'],
      // Maki Light
      ['Maki cá hồi thanh đạm', 'Leichter Lachs-Maki'], ['Maki cá ngừ thanh đạm', 'Leichter Thunfisch-Maki'],
      ['Maki tôm Tempura thanh đạm', 'Leichter Tempura-Garnelen-Maki'],
      ['Maki chay thanh đạm', 'Leichter vegetarischer Maki'],
      ['Maki gà Yakitori thanh đạm', 'Leichter Yakitori-Hähnchen-Maki'],
      ['Maki tôm thanh đạm', 'Leichter Garnelen-Maki'], ['Maki lươn thanh đạm', 'Leichter Aal-Maki'],
      ['Maki sò điệp thanh đạm', 'Leichter Jakobsmuschel-Maki'],
      // Inside-Out
      ['InsideOut cá hồi Alaska', 'Alaska Inside-Out mit Lachs'],
      ['InsideOut cá ngừ Alaska', 'Alaska Inside-Out mit Thunfisch'],
      ['InsideOut gà Teriyaki', 'Teriyaki-Hähnchen Inside-Out'],
      ['InsideOut rau củ Địa Trung Hải', 'Mediterrane Gemüse Inside-Out'],
      // Spinach Wrap
      ['Cuộn rau bina cá hồi cay', 'Scharfe Lachs-Spinat-Rolle'],
      ['Cuộn rau bina tôm Tempura', 'Tempura-Garnelen-Spinat-Rolle'],
      ['Cuộn rau bina cá ngừ cay', 'Scharfe Thunfisch-Spinat-Rolle'],
      ['Cuộn rau bina chay', 'Vegetarische Spinat-Rolle'],
      // Tatar Roll
      ['Cuộn tatar cá hồi Địa Trung Hải', 'Mediterrane Lachs-Tatar-Rolle'],
      ['Cuộn tatar cá ngừ Địa Trung Hải', 'Mediterrane Thunfisch-Tatar-Rolle'],
      // Set descriptions
      ['Set cao cấp nhẹ nhàng', 'Leichtes Premium-Set'], ['Set thượng hạng', 'Exquisites Premium-Set'],
      ['Set hoàng gia', 'Royal-Set'], ['Set Origami tổng hợp 1', 'Origami Mix-Set 1'],
      ['Set Origami classic', 'Origami Classic-Set'], ['Set Origami yêu thích', 'Origami Favourites-Set'],
      ['Set sushi chay', 'Vegetarisches Sushi-Set'], ['Set bơ các loại', 'Avocado-Party-Set'],
      ['Set chiên giòn', 'Crispy Selection-Set'], ['Set đa dạng', 'Simplify Selection-Set'],
      ['Set cổ điển tinh gọn', 'Just Classics-Set'], ['Set khai vị kèm rượu', 'Aperitivo Selection-Set'],
      ['Thực đơn đầu bếp 3 món', 'Chef\'s Omakase 3 Gänge'],
      ['Thực đơn đầu bếp 5 món cao cấp', 'Chef\'s Omakase 5 Gänge (Premium)'],
      // Dessert
      ['Chuối chiên mật ong', 'Gebackene Banane mit Honig'], ['Súp cốt dừa với chuối', 'Kokossuppe mit Banane'],
      ['Kem Mochi 3 vị', 'Mochi-Eis Trilogie (3 Sorten)'], ['Kem trà xanh 3 viên', 'Matcha-Eis (3 Kugeln)'],
      // ── Ingredients (common Vietnamese terms) ──
      ['Nước ép trái cây (tùy chọn)', 'Fruchtsaft (nach Wahl)'],
      ['Nước khoáng có ga (Sprudel)', 'Sprudel-Mineralwasser'],
      ['Nước ép táo (Apfelsaft)', 'Apfelsaft'], ['Nước ép chanh dây (Maracujasaft)', 'Maracujasaft'],
      ['Nước ép xoài (Mangosaft)', 'Mangosaft'], ['Nước ép vải (Lycheesaft)', 'Lycheesaft'],
      ['Cà phê (Kaffee)', 'Kaffee'], ['Espresso (1 shot)', 'Espresso (1 Shot)'],
      ['Espresso đôi (2 shot)', 'Doppio (2 Shots)'], ['Sữa nóng (Milch)', 'Heiße Milch'],
      ['Bọt sữa (Milchschaum)', 'Milchschaum'], ['Trà xanh (Grüntee)', 'Grüner Tee'],
      ['Trà nhài (Jasmintee)', 'Jasmintee'], ['Gừng tươi (Ingwer)', 'Frischer Ingwer'],
      ['Mật ong (Honig)', 'Honig'], ['Chanh tươi (Zitrone)', 'Zitrone'],
      ['Bạc hà tươi (Minze)', 'Frische Minze'], ['Đường mía (Rohrzucker)', 'Rohrzucker'],
      ['Nước cốt chanh (Zitronensaft)', 'Zitronensaft'], ['Nước chanh Yuzu (Yuzusaft)', 'Yuzusaft'],
      ['Soda / Nước có ga', 'Soda / Sprudel'], ['Siro hoa cơm cháy (Holunderblütensirup)', 'Holunderblütensirup'],
      ['Nước đào (Wild Peach)', 'Pfirsichsaft (Wild Peach)'],
      ['Rượu vang đỏ (Rotwein)', 'Rotwein'], ['Rượu vang hồng (Rosé)', 'Roséwein'],
      ['Riesling (vang trắng)', 'Riesling (Weißwein)'], ['Chardonnay (vang trắng)', 'Chardonnay (Weißwein)'],
      ['Champagne / Sekt', 'Champagner / Sekt'],
      // Food ingredients
      ['Đậu phụ', 'Tofu'], ['Rong biển', 'Seetang'], ['Cá hồi', 'Lachs'], ['Tỏi tây', 'Lauch'],
      ['Súp miso', 'Miso-Paste'], ['Đậu nành Nhật', 'Edamame'], ['Nước muối', 'Salzwasser'],
      ['Gà xiên (Hähnchen)', 'Hähnchenspieß'], ['Sốt Yakitori đặc biệt', 'Spezial-Yakitori-Soße'],
      ['Rong biển ngâm (Wakame)', 'Wakame-Seetang'], ['Sốt mè (Sesamsoße)', 'Sesamdressing'],
      ['Nhân thịt gà', 'Hähnchenfüllung'], ['Rau củ', 'Gemüse'], ['Vỏ bánh bột chiên giòn', 'Knuspriger Teigmantel'],
      ['Sò điệp (Jakobsmuscheln)', 'Jakobsmuscheln'], ['Bơ (Butterschmalz)', 'Butterschmalz'],
      ['Sốt Yuzu', 'Yuzu-Soße'], ['Bơ Tempura', 'Avocado Tempura'], ['Sốt Mayo cay (Spicy Mayo)', 'Spicy Mayo'],
      ['Súp cốt dừa', 'Kokossuppe'], ['Thịt gà', 'Hähnchen'], ['Nấm mỡ', 'Champignons'], ['Cà chua', 'Tomaten'],
      ['Đậu phụ non (Seidentofu)', 'Seidentofu'], ['Miso', 'Miso'], ['Củ cải (Rettich)', 'Rettich'],
      ['Tôm Tempura (Garnelen)', 'Garnelen-Tempura'], ['Cà tím Tempura (Aubergine)', 'Auberginen-Tempura'],
      ['Cải thảo (Chinakohl)', 'Chinakohl'], ['Bột ớt Hàn Quốc', 'Koreanisches Chilipulver'],
      ['Đậu phụ chiên giòn', 'Knuspriger Tofu'], ['Sốt xoài', 'Mangosoße'], ['Salad tươi', 'Frischer Salat'],
      ['Cơm', 'Reis'], ['Sốt gừng-mật ong', 'Ingwer-Honig-Soße'],
      ['Ức gà chiên giòn', 'Knuspriges Hähnchenbrustfilet'], ['Salad', 'Salat'],
      ['Sốt đậu phộng', 'Erdnusssoße'], ['Rau thơm châu Á', 'Asiatische Kräuter'],
      ['Thịt bò', 'Rindfleisch'], ['Tôm', 'Garnelen'], ['Hành tây', 'Zwiebeln'],
      ['Ớt chuông', 'Paprika'], ['Hạt điều', 'Cashewnüsse'], ['Ức gà', 'Hähnchenbrustfilet'],
      ['Sốt cà ri mù tạt', 'Wasabi-Curry-Soße'], ['Rau thơm', 'Kräuter'], ['Đậu phộng', 'Erdnüsse'],
      ['Sốt xoài', 'Mangosoße'], ['Sốt cà ri đỏ', 'Rote-Curry-Soße'],
      ['Vịt chiên giòn', 'Knusprige Ente'], ['Húng quế Thái', 'Thai-Basilikum'],
      ['Bít tết cá hồi', 'Lachssteak'], ['Sốt cà ri cam', 'Orangen-Curry-Soße'],
      ['Sốt lươn (Unagi)', 'Unagi-Soße'], ['Tôm (Garnelen)', 'Garnelen'], ['Sốt sả', 'Zitronengras-Soße'],
      // Sushi ingredients
      ['Cá cam (Hamachi)', 'Hamachi (Gelbschwanzmakrele)'], ['Bơ', 'Avocado'], ['Phô mai tươi', 'Frischkäse'],
      ['Mè', 'Sesam'], ['Dưa chuột', 'Gurke'], ['Cá hồi nướng sơ', 'Geflammter Lachs'],
      ['Tôm Tempura', 'Garnelen-Tempura'], ['Sốt cay', 'Scharfe Soße'], ['Vỏ chanh', 'Zitronenschale'],
      ['Nước cốt chanh', 'Zitronensaft'], ['Trứng cá chuồn (Tobiko)', 'Tobiko (Fliegenfischrogen)'],
      ['Cá ngừ nướng sơ', 'Geflammter Thunfisch'], ['Cá ngừ', 'Thunfisch'],
      ['Lươn sông', 'Süßwasser-Aal'], ['Măng tây Tempura', 'Spargel-Tempura'], ['Rau Rucola', 'Rucola'],
      ['Sò điệp nướng sơ', 'Geflammte Jakobsmuscheln'], ['Măng tây', 'Spargel'],
      ['Với bật lửa / Flambierbrenner', 'mit Flambierbrenner'],
      ['Cá hồi (Lachs)', 'Lachs'], ['Lươn nướng (Aal)', 'Gegrillter Aal'],
      ['Dưa chuột (Gurke)', 'Gurke'], ['Bơ (Avocado)', 'Avocado'],
      ['Cá ngừ (Thunfisch)', 'Thunfisch'],
      ['Bụng cá ngừ (Thunfischbauch / Toro)', 'Toro (Thunfischbauch)'],
      ['Sò điệp (Jakobsmuscheln)', 'Jakobsmuscheln'],
      ['Lươn nướng (gegrillter Aal)', 'Gegrillter Aal'],
      ['Cá hồi / Cá ngừ / Tôm / Bơ / Cá cam (tùy chọn)', 'Lachs / Thunfisch / Garnelen / Avocado / Hamachi (nach Wahl)'],
      ['Cá hồi nướng sơ (Flamed Lachs)', 'Geflammter Lachs'],
      ['Cá ngừ nướng sơ (Flamed Thunfisch)', 'Geflammter Thunfisch'],
      ['Tôm (Ebi / Garnelen)', 'Garnelen (Ebi)'], ['Thanh cua giả (Surimi)', 'Surimi (Krebsfleisch-Imitat)'],
      ['Tôm Tempura (trong)', 'Garnelen-Tempura (innen)'], ['Cá hồi nướng sơ (ngoài)', 'Geflammter Lachs (außen)'],
      ['Phô mai tươi (trong)', 'Frischkäse (innen)'], ['Dưa chuột (trong)', 'Gurke (innen)'],
      ['Mè (ngoài)', 'Sesam (außen)'], ['Bơ (trong)', 'Avocado (innen)'], ['Bơ (ngoài)', 'Avocado (außen)'],
      ['Cá hồi (trong)', 'Lachs (innen)'], ['Cá hồi (ngoài)', 'Lachs (außen)'],
      ['Cá ngừ (trong)', 'Thunfisch (innen)'], ['Cá ngừ (ngoài)', 'Thunfisch (außen)'],
      ['Lươn (ngoài)', 'Aal (außen)'], ['Trứng cá chuồn (ngoài)', 'Tobiko (außen)'],
      ['Trứng cá chuồn', 'Tobiko'],
      ['Tatar cá hồi nướng sơ', 'Geflammter Lachs-Tatar'], ['Tatar tôm (Ebi Tatar)', 'Garnelen-Tatar'],
      ['Cua lột mềm (Softshell Krabbe)', 'Softshell-Krabbe'],
      ['Măng tây Tempura (trong)', 'Spargel-Tempura (innen)'], ['Măng tây xanh Tempura', 'Grüner Spargel-Tempura'],
      ['Ớt chuông Tempura', 'Paprika-Tempura'], ['Ớt chuông Tempura (trong)', 'Paprika-Tempura (innen)'],
      ['Rau bina (Spinat)', 'Spinat'], ['Rau bina chần (ngoài)', 'Blanchierter Spinat (außen)'],
      ['Thì là (Dill)', 'Dill'], ['Hẹ (Schnittlauch)', 'Schnittlauch'],
      ['Rau Rucola (trong)', 'Rucola (innen)'], ['Tatar cá hồi nướng sơ (ngoài)', 'Lachs-Tatar (außen)'],
      ['Sốt Yuzu (ngoài)', 'Yuzu-Soße (außen)'],
      ['Cá cam Hamachi (trong)', 'Hamachi (innen)'], ['Hành lá (trong)', 'Frühlingszwiebel (innen)'],
      ['Lươn nguyên con (ngoài)', 'Ganzer Aal (außen)'],
      ['Vỏ bột giòn', 'Knuspriger Teigmantel'], ['Cá hồi tẩm ướp cay', 'Scharf marinierter Lachs'],
      ['Cá ngừ tẩm ướp cay', 'Scharf marinierter Thunfisch'],
      ['Tôm tẩm ướp (Garnelen)', 'Marinierte Garnelen'], ['Măng tây xanh', 'Grüner Spargel'],
      ['Dầu mè', 'Sesamöl'], ['Gà Yakitori', 'Yakitori-Hähnchen'], ['Cá hồi tẩm ướp', 'Marinierter Lachs'],
      ['Cá ngừ tẩm ướp', 'Marinierter Thunfisch'],
      ['Bạc hà', 'Minze'], ['Rau mùi', 'Koriander'], ['Bánh tráng', 'Reispapier'], ['Cà rốt', 'Karotten'],
      ['Gà Teriyaki', 'Teriyaki-Hähnchen'],
      ['Tatar cá hồi (Lachs)', 'Lachs-Tatar'],
      ['Tatar cá ngừ (Thunfisch)', 'Thunfisch-Tatar'],
      ['Bít tết cá ngừ 180g', 'Thunfisch-Steak 180g'], ['Vừng (Sesam)', 'Sesam'], ['Chanh', 'Zitrone'],
      ['Chuối chiên', 'Gebackene Banane'], ['Mật ong', 'Honig'], ['Chuối', 'Banane'],
      ['Kem trà xanh (Matcha)', 'Matcha-Eis'], ['Kem sô-cô-la', 'Schokoladeneis'],
      ['Kem va-ni/chanh', 'Vanille-/Zitroneneis'],
      // ── Notes (common phrases) ──
      ['Phục vụ lạnh hoặc nhiệt độ phòng', 'Kalt oder bei Raumtemperatur servieren'],
      ['Thêm đá, lát chanh tùy chọn', 'Mit Eis, optional Zitronenscheibe'],
      ['Thêm đá', 'Mit Eis'], ['Vị gừng nhẹ, thêm đá', 'Leichter Ingwergeschmack, mit Eis'],
      ['Vị gừng mạnh hơn Ginger Ale', 'Kräftiger als Ginger Ale'],
      ['Có thể pha với nước khoáng (Schorle)', 'Kann mit Mineralwasser gemischt werden (Schorle)'],
      ['Phục vụ kèm đường và sữa', 'Mit Zucker und Milch servieren'],
      ['30ml, phục vụ kèm đường', '30ml, mit Zucker servieren'],
      ['Ủ 70–80°C, không dùng nước sôi', 'Bei 70–80°C aufbrühen, kein kochendes Wasser'],
      ['Hãm gừng với trà nhài, thêm mật ong trước khi phục vụ', 'Ingwer mit Jasmintee aufgießen, Honig vor dem Servieren'],
      ['Gừng + trà nhài, thêm mật ong và nước cốt chanh — thêm nhiều gừng hơn Ingwer Tee', 'Ingwer + Jasmintee, Honig und Zitronensaft — mehr Ingwer als beim Ingwer Tee'],
      ['Giã nhuyễn bạc hà + chanh + đường mía (Muddling), thêm đá bào, top với Ginger Ale, trang trí lá bạc hà', 'Minze + Zitrone + Rohrzucker muddeln, Crushed Ice, Ginger Ale toppen, Minzblatt garnieren'],
      ['Mix xoài + mật ong + chanh, thêm đá, top với Ginger Beer, trang trí lát chanh', 'Mango + Honig + Zitrone mixen, Eis, Ginger Beer toppen, Zitronenscheibe garnieren'],
      ['Mix Yuzu + mật ong, thêm đá, top với Soda, trang trí lát chanh vàng', 'Yuzu + Honig mixen, Eis, Soda toppen, Zitronenscheibe garnieren'],
      ['Bia Nhật vị nhẹ, bọt vừa — rót nghiêng ly 45°', 'Japanisches Leichtbier — Glas 45° neigen beim Einschenken'],
      ['Không cồn, vị tương tự Kirin thường', 'Alkoholfrei, ähnlicher Geschmack wie normales Kirin'],
      ['Rót từ từ, dựng bia xoay cho men nổi đều', 'Langsam einschenken, Flasche drehen für gleichmäßige Hefe'],
      ['Tỉ lệ bia : Limonade = 1:1, rót đồng thời hoặc bia trước', 'Bier : Limonade = 1:1, gleichzeitig oder Bier zuerst'],
      ['Thêm đá, mint + chanh + siro, top với Prosecco — trang trí cành bạc hà', 'Eis, Minze + Zitrone + Sirup, Prosecco toppen — Minzzweig garnieren'],
      ['Tỉ lệ Aperol : Prosecco : Soda = 3 : 2 : 1 — thêm đá, trang trí lát cam', 'Aperol : Prosecco : Soda = 3:2:1 — Eis, Orangenscheibe garnieren'],
      ['Thêm đá, trang trí lát chanh hoặc lá bạc hà', 'Eis, Zitronenscheibe oder Minzblatt garnieren'],
      ['Tỉ lệ Whiskey : Coca = 1:3, thêm đá, trang trí lát chanh tùy chọn', 'Whiskey : Cola = 1:3, Eis, optional Zitronenscheibe'],
      ['Vodka + nước cốt chanh + đá, top với Ginger Beer, trang trí lát chanh + lá bạc hà', 'Vodka + Zitronensaft + Eis, Ginger Beer toppen, Zitrone + Minze garnieren'],
      ['Tỉ lệ 1:3 — thêm đá, trang trí theo phong cách Roku (vỏ cam, lá húng quế...)', '1:3 — Eis, Roku-Style garnieren (Orangenschale, Basilikum...)'],
      ['Tỉ lệ 1:3 — thêm đá', '1:3 — mit Eis'],
      ['Tỉ lệ 1:3 — thêm đá, trang trí lát đào tùy chọn', '1:3 — Eis, optional Pfirsichscheibe garnieren'],
      ['Có thể phục vụ lạnh (Reishu), nhiệt độ phòng (Jōon) hoặc nóng (Atsukan)', 'Kalt (Reishu), Raumtemp. (Jōon) oder warm (Atsukan) servieren'],
      ['Phục vụ lạnh 8–10°C', 'Kalt servieren 8–10°C'], ['Phục vụ lạnh 10–12°C', 'Kalt servieren 10–12°C'],
      ['Nhiệt độ phòng 16–18°C', 'Raumtemperatur 16–18°C'],
      ['Phục vụ lạnh 6–8°C, rót từ từ nghiêng ly', 'Kalt 6–8°C, langsam schräg einschenken'],
      ['Tỉ lệ nước ép : nước khoáng = 1:1', 'Saft : Mineralwasser = 1:1'],
      ['Tỉ lệ 1:1 — đổ Fanta trước, Coca-Cola sau', '1:1 — Fanta zuerst, dann Coca-Cola'],
      ['Thêm đá, lát chanh', 'Mit Eis, Zitronenscheibe'],
      ['1/3 Espresso – 1/3 sữa nóng – 1/3 bọt sữa, rắc bột cacao', '1/3 Espresso – 1/3 heiße Milch – 1/3 Milchschaum, Kakaopulver'],
      // ── Food notes ──
      ['chần qua nước muối', 'kurz in Salzwasser blanchiert'],
      ['3 viên', '3 Kugeln'], ['4 miếng', '4 Stück'], ['15 miếng', '15 Stück'],
      ['Chay', 'Vegetarisch'],
      // ── Service skills ──
      // Tisch-Setup
      ['Trải khăn bàn phẳng lì, đặt nĩa bên trái, dao bên phải cách mép bàn 2cm, lau bóng ly rượu vang.', 'Tischdecke glatt auflegen, Gabel links, Messer rechts (2cm vom Rand), Weingläser polieren.'],
      ['Trải khăn bàn phẳng', 'Tischdecke glatt auflegen'],
      ['Nĩa bên trái, dao bên phải (cách mép 2cm)', 'Gabel links, Messer rechts (2cm vom Rand)'],
      ['Lau bóng ly rượu vang (không vết ố)', 'Weingläser polieren (keine Schlieren)'],
      ['Gấp khăn ăn & đặt lên bàn', 'Serviette falten & platzieren'],
      ['Lọ hoa / trang trí ở giữa', 'Blumenvase / Deko mittig'],
      ['Mise en Place = Mọi thứ đúng vị trí trước khi khách đầu tiên đến', 'Mise en Place = Alles an seinem Platz, bevor der erste Gast kommt'],
      // Serviertechnik
      ['Cầm khay đồ uống bằng một tay vững vàng, phục vụ đĩa thức ăn từ bên phải khách hàng.', 'Tablett mit einer Hand balancieren, Teller von rechts servieren.'],
      ['Giữ thăng bằng khay trên một tay', 'Tablett auf einer Hand balancieren'],
      ['Phục vụ đồ uống từ bên phải', 'Getränke von rechts servieren'],
      ['Đặt đĩa từ phải, dọn từ trái', 'Teller von rechts, abräumen von links'],
      ['Kỹ thuật 3 đĩa (trên một cánh tay)', '3-Teller-Technik (auf einem Arm)'],
      ['Không bao giờ với qua người khách', 'Nie über den Gast greifen'],
      ['Phục vụ từ phải, dọn từ trái — quy tắc cơ bản', 'Rechts servieren, links abräumen — Grundregel im Service'],
      // Kassieren
      ['In hóa đơn, mang ra bàn trong kẹp da, quẹt thẻ và đếm tiền thối lại chính xác kèm lời cảm ơn.', 'Rechnung im Lederetui präsentieren, Karte am Tisch, Wechselgeld nachzählen.'],
      ['Đưa hóa đơn trong kẹp da', 'Rechnung im Lederetui präsentieren'],
      ['Xử lý thẻ EC/tín dụng tại bàn', 'EC-/Kreditkarte am Tisch abwickeln'],
      ['Đếm tiền thối to rõ', 'Wechselgeld laut nachzählen'],
      ['Nhận tiền tip kín đáo', 'Trinkgeld diskret akzeptieren'],
      ['Luôn cảm ơn & chào tạm biệt', 'Immer Danke sagen & Verabschiedung'],
      ['Sự hiếu khách không kết thúc khi thanh toán', 'Gastfreundlichkeit endet nicht mit der Rechnung'],
      // Bestellannahme
      ['Giải đáp rõ ràng thành phần của món súp để khách yên tâm rằng món này không chứa gluten.', 'Zutaten der Suppe klar erklären, damit der Gast sicher ist: glutenfrei.'],
      ['Thuộc lòng thực đơn', 'Speisekarte auswendig kennen'],
      ['Nêu rõ chất gây dị ứng & thành phần', 'Allergene & Inhaltsstoffe nennen'],
      ['Đưa ra gợi ý cho khách', 'Empfehlungen aussprechen'],
      ['Nhắc lại order để xác nhận', 'Bestellung wiederholen zur Bestätigung'],
      ['Ghi yêu cầu đặc biệt & báo bếp', 'Sonderwünsche notieren & an Küche melden'],
      ['Chất gây dị ứng có thể nguy hiểm tính mạng — luôn nghiêm túc!', 'Allergene können lebensbedrohlich sein — immer ernst nehmen!'],
      // Begrüßung
      ['Đón khách niềm nở từ cửa, hỏi khách đi mấy người và chủ động kéo ghế mời khách ngồi.', 'Gäste herzlich an der Tür empfangen, nach Personenzahl fragen, Stuhl anbieten.'],
      ['Giao tiếp bằng mắt & mỉm cười khi khách vào', 'Blickkontakt & Lächeln beim Eintreten'],
      ['Chào đón nồng nhiệt (Guten Abend!)', 'Herzlich begrüßen (Guten Abend!)'],
      ['Hỏi số người & đặt bàn', 'Nach Personenzahl & Reservierung fragen'],
      ['Dẫn khách đến bàn & kéo ghế', 'Zum Tisch begleiten & Stuhl anbieten'],
      ['Đưa thực đơn & gợi ý đồ uống', 'Speisekarte überreichen & Getränk vorschlagen'],
      ['Ấn tượng đầu tiên quyết định — trong vòng 3 giây!', 'Der erste Eindruck entscheidet — innerhalb von 3 Sekunden!'],
      // Weinservice
      ['Dùng đồ khui mở chai rượu vang tại bàn mượt mà, rót một ít cho chủ tiệc nếm trước, sau đó rót cho toàn bàn theo thứ tự.', 'Flasche elegant am Tisch öffnen, Probeschluck dem Gastgeber, dann der Reihe nach servieren.'],
      ['Trình bày chai (nhãn hướng khách)', 'Flasche präsentieren (Etikett sichtbar)'],
      ['Mở nắp bằng dao bồi bàn gọn gàng', 'Kellnermesser sauber öffnen'],
      ['Kiểm tra nút chai kín đáo & đặt lên khay', 'Korken diskret prüfen & auf Tablett legen'],
      ['Rót thử cho chủ tiệc nếm', 'Probeschluck dem Gastgeber einschenken'],
      ['Phục vụ theo chiều kim đồng hồ, chủ tiệc cuối cùng', 'Im Uhrzeigersinn servieren, Gastgeber zuletzt'],
      ['Không bao giờ rót quá 2/3 ly — vang đỏ ít hơn vang trắng', 'Wein nie über 2/3 füllen — Rotwein weniger als Weißwein'],
      // Reklamation
      ['Bình tĩnh lắng nghe khách phàn nàn, nhanh chóng đổi món và tặng một ly trà để xoa dịu tình hình.', 'Ruhig zuhören, schnell umtauschen, einen Tee als Geste anbieten.'],
      ['Lắng nghe bình tĩnh, không ngắt lời', 'Ruhig zuhören, nicht unterbrechen'],
      ['Xin lỗi chân thành', 'Sich aufrichtig entschuldigen'],
      ['Đề xuất giải pháp ngay (đổi món, giảm giá)', 'Sofortige Lösung anbieten (Umtausch, Rabatt)'],
      ['Báo quản lý khi leo thang', 'Manager informieren bei Eskalation'],
      ['Theo dõi: hỏi lại mức độ hài lòng', 'Follow-up: nach Zufriedenheit fragen'],
      ['Phương pháp LEARN: Lắng nghe → Đồng cảm → Xin lỗi → Hành động → Thông báo', 'LEARN-Methode: Listen → Empathize → Apologize → React → Notify'],
      // Tableside
      ['Biểu diễn trộn salad hoặc khò lửa trước mặt khách hàng để tạo trải nghiệm ẩm thực ấn tượng.', 'Salat mischen oder Flambieren vor dem Gast für ein beeindruckendes Erlebnis.'],
      ['Chuẩn bị xe phục vụ (Guéridon)', 'Guéridon (Beistellwagen) vorbereiten'],
      ['Trộn nước sốt salad trước mặt khách', 'Salat-Dressing vor dem Gast mischen'],
      ['Biểu diễn flambé an toàn', 'Flambieren sicher demonstrieren'],
      ['Phi lê cá / cắt bít tết', 'Fisch filetieren / Steak tranchieren'],
      ['Bày đĩa sushi trực tiếp', 'Sushi-Platte live anrichten'],
      ['Biểu diễn + An toàn = Tableside Service hoàn hảo', 'Showmanship + Sicherheit = perfekter Tableside Service'],
      // VIP
      ['Pha đúng ly bạc xỉu ít ngọt cho khách quen mà không cần hỏi, nhớ tên và sở thích của từng khách.', 'Den Lieblings-Drink des Stammgastes ohne Nachfragen zubereiten, Namen & Vorlieben kennen.'],
      ['Chào khách quen bằng tên', 'Stammgäste namentlich begrüßen'],
      ['Nhớ sở thích & đồ uống yêu thích', 'Vorlieben & Lieblingsgetränke merken'],
      ['Giữ bàn quen / chỗ ngồi ưa thích', 'Stammtisch / Lieblingsplatz reservieren'],
      ['Tặng bất ngờ (ví dụ: tráng miệng)', 'Überraschungs-Aufmerksamkeit (z.B. Dessert)'],
      ['Hỏi phản hồi kín đáo', 'Feedback diskret erfragen'],
      ['Khách quen là đại sứ tốt nhất — gắn kết cá nhân là vàng', 'Stammgäste sind die besten Botschafter — persönliche Bindung ist Gold wert'],
    ];

    /* Translate a Vietnamese text to German using the VI_DE dictionary */
    function trVi(text) {
      if (!text || currentLang !== 'de') return text;
      for (const [vi, de] of VI_DE) {
        if (text === vi) return de;
      }
      return text;
    }

    /* Translate category name */
    function trCat(cat) {
      if (currentLang !== 'de') return cat;
      return CAT_DE[cat] || cat;
    }

    function T(key) {
      const entry = I18N[key];
      if (!entry) return key;
      return entry[currentLang] || entry['vi'] || key;
    }

    function toggleLang() {
      currentLang = currentLang === 'vi' ? 'de' : 'vi';
      localStorage.setItem('origami_lang', currentLang);
      applyLang();
    }

    function applyLang() {
      // Update toggle button
      const btn = document.getElementById('lang-btn');
      if (btn) btn.textContent = currentLang === 'vi' ? '🇻🇳' : '🇩🇪';
      // Update html lang
      document.documentElement.lang = currentLang;
      // Update all data-i18n elements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = T(key);
        if (val !== key) el.innerHTML = val;
      });
      // Update all data-i18n-placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = T(key);
        if (val !== key) el.placeholder = val;
      });
      // Re-render dynamic sections
      if (typeof rebuildCatFilter === 'function') rebuildCatFilter();
      if (typeof renderGrid === 'function') renderGrid(currentBrowseCat, currentSearch);
      if (typeof renderHistory === 'function') {
        const hc = document.getElementById('history-content');
        if (hc && hc.innerHTML) renderHistory();
      }
      // Update browse section title for current type
      const titleEl = document.getElementById('browse-section-title');
      if (titleEl && typeof browseType !== 'undefined') {
        const titleKey = 'title_' + browseType;
        titleEl.textContent = T(titleKey);
      }
      // Re-render assess tab if visible
      if (typeof buildAssess === 'function') {
        const assessEl = document.getElementById('assess-mode');
        if (assessEl && assessEl.style.display !== 'none') buildAssess();
      }
    }

    /* ═══════════════════════════════════════════════
       DATA — Tất cả đồ uống + công thức
    ═══════════════════════════════════════════════ */
    /* ─── Category color palette ─── */
    const CAT_COLORS = {
      /* ─ drinks ─ */
      'Đồ uống không cồn': { bg: '#e0f2fe', color: '#0369a1' },
      'Đồ uống nóng': { bg: '#fef3c7', color: '#92400e' },
      'Cocktail không cồn': { bg: '#d1fae5', color: '#065f46' },
      'Bia': { bg: '#fef9c3', color: '#78350f' },
      'Khai vị & Cocktail': { bg: '#ede9fe', color: '#5b21b6' },
      'Sake & Rượu vang': { bg: '#fce7f3', color: '#9d174d' },
      /* ─ food ─ */
      'Khai vị': { bg: '#fef3c7', color: '#92400e' },
      'Chay': { bg: '#d1fae5', color: '#065f46' },
      'Thịt': { bg: '#fee2e2', color: '#991b1b' },
      'Hải sản': { bg: '#e0f2fe', color: '#0369a1' },
      'Sashimi & Tatar': { bg: '#ede9fe', color: '#5b21b6' },
      "Chef's Choice": { bg: '#fce7f3', color: '#9d174d' },
      'Cuộn đặc biệt': { bg: '#ecfdf5', color: '#065f46' },
      'Maki Classic': { bg: '#f0f9ff', color: '#0284c7' },
      'Nigiri': { bg: '#fff7ed', color: '#c2410c' },
      'Avocado Top': { bg: '#f0fdf4', color: '#15803d' },
      'Green Roll': { bg: '#dcfce7', color: '#166534' },
      'Crunchy Roll': { bg: '#fffbeb', color: '#b45309' },
      'Maki Light': { bg: '#f0f9ff', color: '#0369a1' },
      'Inside-Out': { bg: '#fdf4ff', color: '#7e22ce' },
      'Spinach Wrap': { bg: '#f0fdf4', color: '#166534' },
      'Tatar Roll': { bg: '#fef2f2', color: '#dc2626' },
      'Set Sushi - Lunch': { bg: '#fef9c3', color: '#713f12' },
      'Set Sushi - Dinner': { bg: '#ede9fe', color: '#4c1d95' },
      'Tráng miệng': { bg: '#fce7f3', color: '#9d174d' },
      /* ─ wirtschaft ─ */
      'Getränkekalkulation': { bg: '#f0fdf4', color: '#059669' },
      'Wareneinsatz-Controlling': { bg: '#ecfdf5', color: '#047857' },
      'Inventur & Bestand': { bg: '#fef3c7', color: '#b45309' },
      'Umsatzoptimierung': { bg: '#ede9fe', color: '#7c3aed' },
      /* ─ operations ─ */
      'Bar-Setup & Mise en Place': { bg: '#fff7ed', color: '#c2410c' },
      'Speed & Workflow': { bg: '#fef3c7', color: '#92400e' },
      'Kassensystem (POS)': { bg: '#e0f2fe', color: '#0369a1' },
      'Hygiene & Reinigung Bar': { bg: '#fce7f3', color: '#9d174d' },
      'Lagerhaltung (FIFO)': { bg: '#ecfdf5', color: '#047857' },
      /* ─ fachkompetenz ─ */
      'Spirituosenkunde': { bg: '#fef3c7', color: '#92400e' },
      'Cocktail-Klassiker': { bg: '#fee2e2', color: '#991b1b' },
      'Moderne Mixologie': { bg: '#ede9fe', color: '#5b21b6' },
      'Barkeepertechniken': { bg: '#fce7f3', color: '#9d174d' },
      'Weinkunde': { bg: '#fdf4ff', color: '#7e22ce' },
      'Bierkunde': { bg: '#fef9c3', color: '#713f12' },
      'Kaffee & Heißgetränke': { bg: '#fff7ed', color: '#c2410c' },
      'Alkoholfreie Cocktails': { bg: '#d1fae5', color: '#065f46' },
      'Eis & Temperatur': { bg: '#e0f2fe', color: '#0369a1' },
      'Garnishing & Präsentation': { bg: '#f0fdf4', color: '#059669' },
      /* ─ compliance ─ */
      'Jugendschutzgesetz': { bg: '#fee2e2', color: '#991b1b' },
      'Schanklizenz / Konzession': { bg: '#fef3c7', color: '#92400e' },
      'Verantwortungsvoller Ausschank': { bg: '#ede9fe', color: '#5b21b6' },
      'HACCP Bar-spezifisch': { bg: '#d1fae5', color: '#065f46' },
      'Arbeitsschutz Bar': { bg: '#e0f2fe', color: '#0369a1' },
      /* ─ sales ─ */
      'Gästeberatung & Empfehlung': { bg: '#fef3c7', color: '#92400e' },
      'Cocktailkarten-Design': { bg: '#fce7f3', color: '#9d174d' },
      'Social Media (Bar-Content)': { bg: '#ede9fe', color: '#5b21b6' },
      'Events & Cocktailkurse': { bg: '#fff7ed', color: '#c2410c' },
      'Bewertungsmanagement': { bg: '#e0f2fe', color: '#0369a1' },
      /* ─ softskills ─ */
      'Gastfreundschaft & Empathie': { bg: '#fef3c7', color: '#92400e' },
      'Kommunikation': { bg: '#fee2e2', color: '#991b1b' },
      'Stressresistenz': { bg: '#ede9fe', color: '#5b21b6' },
      'Teamwork': { bg: '#d1fae5', color: '#065f46' },
      'Showmanship & Flair': { bg: '#fce7f3', color: '#9d174d' },
      'Zeitmanagement': { bg: '#e0f2fe', color: '#0369a1' },
      'Englisch': { bg: '#fef9c3', color: '#713f12' },
      'Verhandlungsgeschick': { bg: '#fff7ed', color: '#c2410c' },
      /* ─ sushi ─ */
      'Fischkunde & Qualitätskontrolle': { bg: '#e0f2fe', color: '#0369a1' },
      'Messertechnik & Schneiden': { bg: '#fee2e2', color: '#991b1b' },
      'Sushi-Reis': { bg: '#fef9c3', color: '#713f12' },
      'Nigiri, Maki & Gunkan': { bg: '#fce7f3', color: '#9d174d' },
      'Special & Creative Rolls': { bg: '#ede9fe', color: '#5b21b6' },
      'Präsentation & Abflämmen': { bg: '#fff7ed', color: '#c2410c' },
      /* ─ hotkitchen ─ */
      'Zutaten & Mise en Place': { bg: '#fef3c7', color: '#92400e' },
      'Protein kochen': { bg: '#fee2e2', color: '#991b1b' },
      'Asiatische Saucen': { bg: '#d1fae5', color: '#065f46' },
      'Reis & Beilagen': { bg: '#fef9c3', color: '#713f12' },
      'HACCP & Lebensmittelsicherheit': { bg: '#ecfdf5', color: '#047857' },
      /* ─ service ─ */
      'Tisch-Setup & Mise en Place': { bg: '#fff7ed', color: '#c2410c' },
      'Serviertechnik & Tragetechnik': { bg: '#fef3c7', color: '#92400e' },
      'Kassieren & Rechnungsabwicklung': { bg: '#e0f2fe', color: '#0369a1' },
      'Bestellannahme & Menükenntnis': { bg: '#d1fae5', color: '#065f46' },
      'Begrüßung & Platzierung': { bg: '#fce7f3', color: '#9d174d' },
      'Weinservice am Tisch': { bg: '#fdf4ff', color: '#7e22ce' },
      'Reklamationsmanagement': { bg: '#fee2e2', color: '#991b1b' },
      'Tableside Service': { bg: '#ede9fe', color: '#5b21b6' },
      'VIP & Regulars Management': { bg: '#fef9c3', color: '#713f12' },
    };
    function getCatStyle(cat) {
      const c = CAT_COLORS[cat];
      return c ? `background:${c.bg};color:${c.color};` : '';
    }

    const DRINKS = [

      /* ─── Đồ uống không cồn (cơ bản) ─── */
      { cat: "Đồ uống không cồn", name: "Brita Wasser", desc: "Nước lọc Brita", ingredients: ["Brita Wasser"], glass: "Ly nước", note: "Phục vụ lạnh hoặc nhiệt độ phòng", img: "images/brita-wasser.webp" },
      { cat: "Đồ uống không cồn", name: "Coca-Cola", desc: "Nước ngọt có ga", ingredients: ["Coca-Cola"], glass: "Ly cao", note: "Thêm đá, lát chanh tùy chọn", img: "images/coca-cola.webp" },
      { cat: "Đồ uống không cồn", name: "Coca-Cola Zero", desc: "Nước ngọt không calo", ingredients: ["Coca-Cola Zero"], glass: "Ly cao", note: "Thêm đá", img: "images/coca-cola-zero.webp" },
      { cat: "Đồ uống không cồn", name: "Fanta", desc: "Nước cam có ga", ingredients: ["Fanta"], glass: "Ly cao", note: "Thêm đá", img: "images/fanta.webp" },
      { cat: "Đồ uống không cồn", name: "Spezi", desc: "Hỗn hợp Coca và Fanta", ingredients: ["Coca-Cola", "Fanta"], glass: "Ly cao", note: "Tỉ lệ 1:1 — đổ Fanta trước, Coca-Cola sau", img: "images/spezi.webp" },
      { cat: "Đồ uống không cồn", name: "Sprite", desc: "Nước chanh có ga", ingredients: ["Sprite"], glass: "Ly cao", note: "Thêm đá, lát chanh", img: "images/sprite.webp" },
      { cat: "Đồ uống không cồn", name: "Ginger Ale", desc: "Nước gừng nhẹ có ga", ingredients: ["Ginger Ale"], glass: "Ly cao", note: "Vị gừng nhẹ, thêm đá", img: "images/ginger-ale.webp" },
      { cat: "Đồ uống không cồn", name: "Ginger Beer", desc: "Nước gừng mạnh có ga", ingredients: ["Ginger Beer"], glass: "Ly cao", note: "Vị gừng mạnh hơn Ginger Ale", img: "images/ginger-beer.webp" },
      { cat: "Đồ uống không cồn", name: "Wild Peach", desc: "Nước đào", ingredients: ["Wild Peach"], glass: "Ly cao", note: "Thêm đá", img: "images/wild-peach.webp" },
      { cat: "Đồ uống không cồn", name: "Apfelsaft", desc: "Nước ép táo", ingredients: ["Nước ép táo (Apfelsaft)"], glass: "Ly thấp", note: "Có thể pha với nước khoáng (Schorle)", img: "images/apfelsaft.webp" },
      { cat: "Đồ uống không cồn", name: "Maracujasaft", desc: "Nước ép chanh dây", ingredients: ["Nước ép chanh dây (Maracujasaft)"], glass: "Ly thấp", note: "", img: "images/maracujasaft.webp" },
      { cat: "Đồ uống không cồn", name: "Mangosaft", desc: "Nước ép xoài", ingredients: ["Nước ép xoài (Mangosaft)"], glass: "Ly thấp", note: "", img: "images/mangosaft.webp" },
      { cat: "Đồ uống không cồn", name: "Lycheesaft", desc: "Nước ép vải", ingredients: ["Nước ép vải (Lycheesaft)"], glass: "Ly thấp", note: "", img: "images/lycheesaft.webp" },
      { cat: "Đồ uống không cồn", name: "Schorle", desc: "Nước ép pha nước khoáng", ingredients: ["Nước ép trái cây (tùy chọn)", "Nước khoáng có ga (Sprudel)"], glass: "Ly cao", note: "Tỉ lệ nước ép : nước khoáng = 1:1", img: "images/schorle.webp" },

      /* ─── Đồ uống nóng ─── */
      { cat: "Đồ uống nóng", name: "Kaffee", desc: "Cà phê đen", ingredients: ["Cà phê (Kaffee)"], glass: "Tách cà phê", note: "Phục vụ kèm đường và sữa", img: "images/kaffee.webp" },
      { cat: "Đồ uống nóng", name: "Espresso", desc: "Cà phê Espresso 1 shot", ingredients: ["Espresso (1 shot)"], glass: "Demitasse (tách nhỏ)", note: "30ml, phục vụ kèm đường", img: "images/espresso.webp" },
      { cat: "Đồ uống nóng", name: "Doppio", desc: "Espresso đôi (2 shot)", ingredients: ["Espresso đôi (2 shot)"], glass: "Tách Espresso lớn", note: "60ml", img: "images/doppio.webp" },
      { cat: "Đồ uống nóng", name: "Cappuccino", desc: "Espresso với sữa bọt", ingredients: ["Espresso (1 shot)", "Sữa nóng (Milch)", "Bọt sữa (Milchschaum)"], glass: "Tách Cappuccino 180ml", note: "1/3 Espresso – 1/3 sữa nóng – 1/3 bọt sữa, rắc bột cacao", img: "images/cappuccino.webp" },
      { cat: "Đồ uống nóng", name: "Grün Tee", desc: "Trà xanh", ingredients: ["Trà xanh (Grüntee)"], glass: "Ấm trà + tách", note: "Ủ 70–80°C, không dùng nước sôi", img: "images/green-tea.webp" },
      { cat: "Đồ uống nóng", name: "Jasmin Tee", desc: "Trà nhài", ingredients: ["Trà nhài (Jasmintee)"], glass: "Ấm trà + tách", note: "", img: "images/jasmin-tee.webp" },
      { cat: "Đồ uống nóng", name: "Ingwer Tee", desc: "Trà gừng đặc biệt", ingredients: ["Gừng tươi (Ingwer)", "Trà nhài (Jasmintee)", "Mật ong (Honig)"], glass: "Ấm trà + tách", note: "Hãm gừng với trà nhài, thêm mật ong trước khi phục vụ", img: "images/ingwer-tee.webp" },
      { cat: "Đồ uống nóng", name: "Against Cold", desc: "Trà giải cảm", ingredients: ["Gừng tươi (Ingwer)", "Trà nhài (Jasmintee)", "Mật ong (Honig)", "Chanh tươi (Zitrone)"], glass: "Ấm trà + tách", note: "Gừng + trà nhài, thêm mật ong và nước cốt chanh — thêm nhiều gừng hơn Ingwer Tee", img: "images/against-cold.webp" },

      /* ─── Cocktail không cồn ─── */
      { cat: "Cocktail không cồn", name: "Asian Cooler", desc: "Cocktail bạc hà - gừng mát lạnh", ingredients: ["Bạc hà tươi (Minze)", "Chanh tươi (Zitrone)", "Đường mía (Rohrzucker)", "Ginger Ale"], glass: "Ly cao (Highball)", note: "Giã nhuyễn bạc hà + chanh + đường mía (Muddling), thêm đá bào, top với Ginger Ale, trang trí lá bạc hà", img: "images/asian-cooler.webp" },
      { cat: "Cocktail không cồn", name: "Mango Mule", desc: "Cocktail xoài cay nhẹ", ingredients: ["Nước ép xoài (Mangosaft)", "Mật ong (Honig)", "Nước cốt chanh (Zitronensaft)", "Ginger Beer"], glass: "Ly đồng (Copper Mug)", note: "Mix xoài + mật ong + chanh, thêm đá, top với Ginger Beer, trang trí lát chanh", img: "images/mango-mule.webp" },
      { cat: "Cocktail không cồn", name: "Yuzu Limonade", desc: "Nước chanh Yuzu Nhật Bản", ingredients: ["Nước chanh Yuzu (Yuzusaft)", "Mật ong (Honig)", "Soda / Nước có ga"], glass: "Ly cao", note: "Mix Yuzu + mật ong, thêm đá, top với Soda, trang trí lát chanh vàng", img: "images/yuzu-limonade.webp" },

      /* ─── Bia ─── */
      { cat: "Bia", name: "Kirin Ichiban", desc: "Bia Nhật Bản cao cấp", ingredients: ["Kirin Ichiban (chai/lon)"], glass: "Ly bia / Ly Pilsner", note: "Bia Nhật vị nhẹ, bọt vừa — rót nghiêng ly 45°", img: "images/kirin-ichiban.webp" },
      { cat: "Bia", name: "Kirin Ichiban 0%", desc: "Bia Nhật không cồn", ingredients: ["Kirin Ichiban 0% (chai)"], glass: "Ly bia", note: "Không cồn, vị tương tự Kirin thường", img: "images/kirin-zero.webp" },
      { cat: "Bia", name: "Hefeweizen", desc: "Bia lúa mì truyền thống Đức", ingredients: ["Hefeweizen (chai/lon)"], glass: "Ly Weizen cao", note: "Rót từ từ, dựng bia xoay cho men nổi đều", img: "images/hefeweizen.webp" },
      { cat: "Bia", name: "Radler", desc: "Bia pha nước chanh", ingredients: ["Bia (Hefeweizen hoặc Pils)", "Nước chanh ngọt (Limonade)"], glass: "Ly bia cao", note: "Tỉ lệ bia : Limonade = 1:1, rót đồng thời hoặc bia trước", img: "images/radler.webp" },

      /* ─── Khai vị & Cocktail có cồn ─── */
      { cat: "Khai vị & Cocktail", name: "Hugo", desc: "Khai vị hoa cơm cháy mùa hè", ingredients: ["Prosecco", "Bạc hà tươi (Minze)", "Chanh tươi (Zitrone)", "Siro hoa cơm cháy (Holunderblütensirup)"], glass: "Ly Wine / Ly Champagne", note: "Thêm đá, mint + chanh + siro, top với Prosecco — trang trí cành bạc hà", img: "images/hugo.webp" },
      { cat: "Khai vị & Cocktail", name: "Aperol Spritz", desc: "Khai vị Aperol cổ điển", ingredients: ["Aperol", "Prosecco", "Soda / Nước có ga"], glass: "Ly Wine lớn (250ml)", note: "Tỉ lệ Aperol : Prosecco : Soda = 3 : 2 : 1 — thêm đá, trang trí lát cam", img: "images/aperol-spritz.webp" },
      { cat: "Khai vị & Cocktail", name: "Lillet Peach", desc: "Khai vị Lillet vị đào", ingredients: ["Lillet Blanc", "Nước đào (Wild Peach)"], glass: "Ly Wine", note: "Thêm đá, trang trí lát chanh hoặc lá bạc hà", img: "images/lillet-peach.webp" },
      { cat: "Khai vị & Cocktail", name: "Whiskey Coke", desc: "Whiskey pha Coca-Cola", ingredients: ["Whiskey (Jack Daniel's hoặc tương tự)", "Coca-Cola"], glass: "Ly Highball", note: "Tỉ lệ Whiskey : Coca = 1:3, thêm đá, trang trí lát chanh tùy chọn", img: "images/whiskey-coke.webp" },
      { cat: "Khai vị & Cocktail", name: "Moscow Mule", desc: "Cocktail Vodka gừng", ingredients: ["Vodka", "Ginger Beer", "Nước cốt chanh (Zitronensaft)"], glass: "Ly đồng (Copper Mug)", note: "Vodka + nước cốt chanh + đá, top với Ginger Beer, trang trí lát chanh + lá bạc hà", img: "images/moscow-mule.webp" },
      { cat: "Khai vị & Cocktail", name: "Gin Tonic (Roku)", desc: "Gin Tonic với Roku Gin", ingredients: ["Roku Gin", "Tonic Water"], glass: "Ly Balloon / Ly Highball", note: "Tỉ lệ 1:3 — thêm đá, trang trí theo phong cách Roku (vỏ cam, lá húng quế...)", img: "images/gin-tonic-roku.webp" },
      { cat: "Khai vị & Cocktail", name: "Gin Tonic (Kaiza)", desc: "Gin Tonic với Kaiza Gin", ingredients: ["Kaiza Gin", "Tonic Water"], glass: "Ly Balloon / Ly Highball", note: "Tỉ lệ 1:3 — thêm đá", img: "images/gin-kaiza.webp" },
      { cat: "Khai vị & Cocktail", name: "Gin Tonic (Momotaro)", desc: "Gin Tonic với Momotaro Gin", ingredients: ["Momotaro Gin", "Tonic Water"], glass: "Ly Balloon / Ly Highball", note: "Tỉ lệ 1:3 — thêm đá, trang trí lát đào tùy chọn", img: "images/gin-momotaro.webp" },

      /* ─── Sake & Rượu vang ─── */
      { cat: "Sake & Rượu vang", name: "Sake SOTO", desc: "Rượu gạo Nhật Bản cao cấp", ingredients: ["Sake SOTO"], glass: "Chén sake (Ochoko) hoặc ly nhỏ", note: "Có thể phục vụ lạnh (Reishu), nhiệt độ phòng (Jōon) hoặc nóng (Atsukan)", img: "images/sake-soto.webp" },
      { cat: "Sake & Rượu vang", name: "Weißwein — Riesling", desc: "Rượu vang trắng Riesling", ingredients: ["Riesling (vang trắng)"], glass: "Ly vang trắng", note: "Phục vụ lạnh 8–10°C", img: "images/riesling.webp" },
      { cat: "Sake & Rượu vang", name: "Weißwein — Chardonnay", desc: "Rượu vang trắng Chardonnay", ingredients: ["Chardonnay (vang trắng)"], glass: "Ly vang trắng", note: "Phục vụ lạnh 10–12°C", img: "images/chardonnay.webp" },
      { cat: "Sake & Rượu vang", name: "Rotwein", desc: "Rượu vang đỏ", ingredients: ["Rượu vang đỏ (Rotwein)"], glass: "Ly vang đỏ (rộng hơn)", note: "Nhiệt độ phòng 16–18°C", img: "images/rotwein.webp" },
      { cat: "Sake & Rượu vang", name: "Rosé", desc: "Rượu vang hồng", ingredients: ["Rượu vang hồng (Rosé)"], glass: "Ly vang hồng", note: "Phục vụ lạnh 10–12°C", img: "images/rose.webp" },
      { cat: "Sake & Rượu vang", name: "Champagner", desc: "Rượu Sâm banh / Champagne", ingredients: ["Champagne / Sekt"], glass: "Ly Champagne (Flute)", note: "Phục vụ lạnh 6–8°C, rót từ từ nghiêng ly", img: "images/champagner.webp" },
    ];

    /* ═══════════════════════════════════════
       FOOD DATA — Thực đơn đồ ăn
    ═══════════════════════════════════════ */
    [
      /* ─── Khai vị ─── */
      { type: "food", cat: "Khai vị", name: "Miso Soup Salmon", desc: "Súp Miso cá hồi", ingredients: ["Đậu phụ", "Rong biển", "Cá hồi", "Tỏi tây", "Súp miso"], glass: "Chén", note: "4,90 EUR" },
      { type: "food", cat: "Khai vị", name: "Edamame", desc: "Đậu nành Nhật giòn", ingredients: ["Đậu nành Nhật", "Nước muối"], glass: "Chén nhỏ", note: "5,50 EUR — chần qua nước muối" },
      { type: "food", cat: "Khai vị", name: "Yakitori", desc: "Gà xiên nướng sốt đặc biệt", ingredients: ["Gà xiên (Hähnchen)", "Sốt Yakitori đặc biệt"], glass: "Dĩa", note: "5,20 EUR" },
      { type: "food", cat: "Khai vị", name: "Wakame Salad", desc: "Salad rong biển sốt mè", ingredients: ["Rong biển ngâm (Wakame)", "Sốt mè (Sesamsoße)"], glass: "Chén salad", note: "5,20 EUR" },
      { type: "food", cat: "Khai vị", name: "Gyosa", desc: "Sủi cảo nhân gà chiên giòn", ingredients: ["Nhân thịt gà", "Rau củ", "Vỏ bánh bột chiên giòn"], glass: "Dĩa", note: "5,20 EUR" },
      { type: "food", cat: "Khai vị", name: "Scallops on Fire", desc: "Sò điệp áp chảo bơ sốt Yuzu", ingredients: ["Sò điệp (Jakobsmuscheln)", "Bơ (Butterschmalz)", "Sốt Yuzu"], glass: "Dĩa", note: "8,70 EUR" },
      { type: "food", cat: "Khai vị", name: "Crispy Avocado", desc: "Bơ chiên xù sốt Mayo cay", ingredients: ["Bơ Tempura", "Sốt Mayo cay (Spicy Mayo)"], glass: "Dĩa", note: "5,20 EUR" },
      { type: "food", cat: "Khai vị", name: "Coconut Chicken", desc: "Súp gà cốt dừa", ingredients: ["Súp cốt dừa", "Thịt gà", "Nấm mỡ", "Cà chua"], glass: "Chén", note: "6,50 EUR" },
      { type: "food", cat: "Khai vị", name: "Tempura Silk Tofu", desc: "Đậu phụ non chiên xù", ingredients: ["Đậu phụ non (Seidentofu)", "Miso", "Củ cải (Rettich)"], glass: "Dĩa", note: "" },
      { type: "food", cat: "Khai vị", name: "Tempura Shrimp", desc: "Tôm chiên xù sốt Mayo cay", ingredients: ["Tôm Tempura (Garnelen)", "Sốt Mayo cay (Spicy Mayo)"], glass: "Dĩa", note: "" },
      { type: "food", cat: "Khai vị", name: "Crispy Eggplants", desc: "Cà tím chiên xù sốt Mayo cay", ingredients: ["Cà tím Tempura (Aubergine)", "Sốt Mayo cay (Spicy Mayo)"], glass: "Dĩa", note: "" },
      { type: "food", cat: "Khai vị", name: "Loan's Kim Chi", desc: "Kim chi bắp cải Hàn Quốc", ingredients: ["Cải thảo (Chinakohl)", "Bột ớt Hàn Quốc"], glass: "Chén", note: "" },

      /* ─── Chay ─── */
      { type: "food", cat: "Chay", name: "Fruity Tofu", desc: "Đậu phụ chiên giòn sốt xoài", ingredients: ["Đậu phụ chiên giòn", "Sốt xoài", "Salad tươi", "Cơm"], glass: "Dĩa + cơm", note: "12,90 EUR" },
      { type: "food", cat: "Chay", name: "Ginger Tofu", desc: "Đậu phụ xào sốt gừng-mật ong", ingredients: ["Đậu phụ", "Rau củ", "Sốt gừng-mật ong", "Cơm"], glass: "Dĩa + cơm", note: "12,90 EUR" },

      /* ─── Thịt ─── */
      { type: "food", cat: "Thịt", name: "Peanut Chicken", desc: "Gà sốt đậu phộng", ingredients: ["Ức gà chiên giòn", "Salad", "Sốt đậu phộng", "Rau thơm châu Á", "Cơm"], glass: "Dĩa + cơm", note: "13,90 EUR" },
      { type: "food", cat: "Thịt", name: "Beef and Shrimps", desc: "Bò và tôm xào cay", ingredients: ["Thịt bò", "Tôm", "Hành tây", "Ớt chuông", "Hạt điều", "Cơm"], glass: "Dĩa + cơm", note: "13,90 EUR" },
      { type: "food", cat: "Thịt", name: "Chicken Wasabi", desc: "Gà sốt cà ri mù tạt", ingredients: ["Ức gà", "Sốt cà ri mù tạt", "Rau thơm", "Đậu phộng", "Rau củ", "Cơm"], glass: "Dĩa + cơm", note: "13,90 EUR" },
      { type: "food", cat: "Thịt", name: "Mango Chicken", desc: "Gà sốt xoài", ingredients: ["Ức gà", "Sốt xoài", "Rau thơm", "Đậu phộng", "Salad tươi", "Cơm"], glass: "Dĩa + cơm", note: "13,90 EUR" },
      { type: "food", cat: "Thịt", name: "Red Curry Chicken", desc: "Gà cà ri đỏ", ingredients: ["Ức gà", "Sốt cà ri đỏ", "Rau thơm", "Đậu phộng", "Salad tươi", "Cơm"], glass: "Dĩa + cơm", note: "13,90 EUR" },
      { type: "food", cat: "Thịt", name: "The Red Duck", desc: "Vịt chiên giòn sốt cà ri đỏ", ingredients: ["Vịt chiên giòn", "Sốt cà ri đỏ", "Rau củ", "Húng quế Thái", "Cơm"], glass: "Dĩa + cơm", note: "14,90 EUR" },

      /* ─── Hải sản ─── */
      { type: "food", cat: "Hải sản", name: "Orange-Curry-Salmon", desc: "Cá hồi sốt cà ri cam", ingredients: ["Bít tết cá hồi", "Sốt cà ri cam", "Salad tươi", "Cơm", "Sốt lươn (Unagi)"], glass: "Dĩa + cơm", note: "13,90 EUR" },
      { type: "food", cat: "Hải sản", name: "Lemongras Shrimp", desc: "Tôm sốt sả", ingredients: ["Tôm (Garnelen)", "Sốt sả", "Salad tươi", "Cơm", "Sốt lươn (Unagi)"], glass: "Dĩa + cơm", note: "13,90 EUR" },
      { type: "food", cat: "Hải sản", name: "Teriyaki-Salmon", desc: "Cá hồi Teriyaki", ingredients: ["Bít tết cá hồi", "Salad", "Cơm", "Sốt lươn (Unagi)"], glass: "Dĩa + cơm", note: "13,90 EUR" },
      { type: "food", cat: "Hải sản", name: "Mango Salmon", desc: "Cá hồi sốt cà ri xoài", ingredients: ["Bít tết cá hồi", "Sốt cà ri xoài", "Salad tươi", "Cơm"], glass: "Dĩa + cơm", note: "13,90 EUR" },

      /* ─── Sashimi & Tatar ─── */
      { type: "food", cat: "Sashimi & Tatar", name: "Balfego Toro Tuna Sashimi", desc: "Sashimi cá ngừ vây xanh thượng hạng", ingredients: ["Cá ngừ vây xanh (Toro Blue Fin)"], glass: "Dĩa sashimi", note: "4 miếng" },
      { type: "food", cat: "Sashimi & Tatar", name: "Label Rouge Salmon Sashimi", desc: "Sashimi cá hồi Scotland nhãn đỏ", ingredients: ["Cá hồi Scotland (Label Rouge)"], glass: "Dĩa sashimi", note: "4 miếng" },
      { type: "food", cat: "Sashimi & Tatar", name: "Blue Fin Tuna Sashimi", desc: "Sashimi cá ngừ", ingredients: ["Cá ngừ Blue Fin (Thunfisch)"], glass: "Dĩa sashimi", note: "4 miếng" },
      { type: "food", cat: "Sashimi & Tatar", name: "Best of Sashimi", desc: "15 miếng sashimi ngon nhất ngày", ingredients: ["Cá hồi (Lachs)", "Cá ngừ (Tuna)", "Cá cam (Hamachi)"], glass: "Dĩa sashimi", note: "15 miếng" },
      { type: "food", cat: "Sashimi & Tatar", name: "Tuna Steak", desc: "Bít tết cá ngừ 180g", ingredients: ["Bít tết cá ngừ 180g", "Vừng (Sesam)", "Sốt cay", "Sốt Yuzu", "Chanh"], glass: "Dĩa", note: "" },
      { type: "food", cat: "Sashimi & Tatar", name: "Royal Sashimi Pate", desc: "Khay sashimi hoàng gia", ingredients: ["15 Sashimi ngon nhất", "8 Gunkan", "2 Tatar", "1 Bít tết"], glass: "Khay", note: "" },
      { type: "food", cat: "Sashimi & Tatar", name: "Hamachi Tatar", desc: "Tatar cá cam", ingredients: ["Cá cam (Hamachi)", "Vỏ chanh", "Bơ", "Sốt cay"], glass: "Dĩa", note: "" },
      { type: "food", cat: "Sashimi & Tatar", name: "Salmon Tatar", desc: "Tatar cá hồi", ingredients: ["Tatar cá hồi (Lachs)", "Vỏ chanh", "Bơ", "Sốt cay"], glass: "Dĩa", note: "" },
      { type: "food", cat: "Sashimi & Tatar", name: "Tuna Tatar", desc: "Tatar cá ngừ", ingredients: ["Tatar cá ngừ (Thunfisch)", "Vỏ chanh", "Nước cốt chanh", "Sốt cay"], glass: "Dĩa", note: "" },

      /* ─── Cuộn đặc biệt ─── */
      { type: "food", cat: "Cuộn đặc biệt", name: "Dancing Snake", desc: "Cuộn cá hồi & cá cam", ingredients: ["Cá hồi", "Cá cam (Hamachi)", "Bơ", "Phô mai tươi", "Mè", "Dưa chuột"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Tiger Roll", desc: "Cuộn tôm Tempura cá hồi nướng sơ", ingredients: ["Tôm Tempura (trong)", "Cá hồi nướng sơ (ngoài)", "Bơ", "Dưa chuột", "Sốt Yuzu", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Okyu Roll", desc: "Cuộn cá hồi Tempura phủ tatar tôm", ingredients: ["Cá hồi Tempura (trong)", "Phô mai tươi", "Dưa chuột", "Tatar tôm (Ebi Tatar)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Spider Roll", desc: "Cuộn cua lột vỏ mềm", ingredients: ["Cua lột mềm (Softshell Krabbe)", "Dưa chuột", "Bơ", "Trứng cá chuồn (Tobiko)", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Dragon Roll", desc: "Cuộn rồng", ingredients: ["Măng tây Tempura (trong)", "Tôm Tempura (trong)", "Phô mai tươi", "Trứng cá chuồn (Tobiko)", "Bơ (ngoài)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Phoenix Roll", desc: "Cuộn phượng hoàng", ingredients: ["Cá hồi nướng sơ", "Cá ngừ nướng sơ", "Lươn sông", "Dưa chuột", "Trứng cá chuồn (Tobiko)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Eskimo Roll", desc: "Cuộn cá ngừ & sò điệp nướng sơ", ingredients: ["Măng tây Tempura", "Ớt chuông", "Rau Rucola", "Cá ngừ nướng sơ", "Sò điệp nướng sơ", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Origami Rainbow", desc: "Cuộn cầu vồng Origami", ingredients: ["Tôm Tempura (trong)", "Cá hồi (ngoài)", "Cá ngừ (ngoài)", "Lươn (ngoài)", "Bơ", "Trứng cá chuồn"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Alaska Inside-Out", desc: "Cuộn Alaska Inside-Out", ingredients: ["Cá hồi (trong)", "Bơ (trong)", "Phô mai tươi (trong)", "Dưa chuột (trong)", "Mè (ngoài)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Green Tempura Shrimp Roll", desc: "Cuộn tôm Tempura rau thơm", ingredients: ["Tôm Tempura", "Phô mai tươi", "Dưa chuột", "Thì là (Dill)", "Hẹ (Schnittlauch)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Avocado Tuna", desc: "Cuộn cá ngừ phủ bơ", ingredients: ["Cá ngừ (trong)", "Phô mai tươi (trong)", "Dưa chuột (trong)", "Bơ (ngoài)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Tatar Salmon Mediterran", desc: "Cuộn tatar cá hồi Địa Trung Hải", ingredients: ["Rau Rucola (trong)", "Phô mai tươi (trong)", "Tatar cá hồi nướng sơ (ngoài)", "Sốt Yuzu (ngoài)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Spinach Veggie Roll", desc: "Cuộn rau bina chay", ingredients: ["Măng tây Tempura (trong)", "Ớt chuông Tempura (trong)", "Phô mai tươi (trong)", "Rau bina chần (ngoài)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Crunchy Salmon Roll", desc: "Cuộn cá hồi tẩm ướp vỏ giòn", ingredients: ["Vỏ bột giòn", "Cá hồi tẩm ướp"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Origami Crane", desc: "Cuộn sếu lươn nguyên con", ingredients: ["Tôm Tempura (trong)", "Măng tây (trong)", "Dưa chuột (trong)", "Phô mai tươi (trong)", "Rau Rucola (trong)", "Lươn nguyên con (ngoài)", "Trứng cá chuồn (ngoài)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Tuna Alaska 1.0.", desc: "Cuộn cá ngừ Alaska Inside-Out", ingredients: ["Cá ngừ (trong)", "Bơ (trong)", "Phô mai tươi (trong)", "Dưa chuột (trong)", "Trứng cá chuồn (ngoài)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Elsa", desc: "Cuộn cá cam phủ bơ", ingredients: ["Phô mai tươi (trong)", "Cá cam Hamachi (trong)", "Dưa chuột (trong)", "Hành lá (trong)", "Bơ (ngoài)", "Trứng cá chuồn (ngoài)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Cuộn đặc biệt", name: "Sake Avocado Maki", desc: "Maki cá hồi bơ", ingredients: ["Cá hồi", "Bơ"], glass: "Dĩa sushi", note: "" },

      /* ─── Maki Classic ─── */
      { type: "food", cat: "Maki Classic", name: "Sake Maki", desc: "Maki cá hồi", ingredients: ["Cá hồi (Lachs)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Classic", name: "Hamachi Maki", desc: "Maki cá cam", ingredients: ["Cá cam (Hamachi)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Classic", name: "Tuna Maki", desc: "Maki cá ngừ", ingredients: ["Cá ngừ (Thunfisch)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Classic", name: "Unagi Maki", desc: "Maki lươn nướng", ingredients: ["Lươn nướng (Aal)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Classic", name: "Cucumber Maki", desc: "Maki dưa chuột", ingredients: ["Dưa chuột (Gurke)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Classic", name: "Avocado Maki", desc: "Maki bơ", ingredients: ["Bơ (Avocado)"], glass: "Dĩa sushi", note: "" },

      /* ─── Nigiri ─── */
      { type: "food", cat: "Nigiri", name: "Sake Nigiri", desc: "Nigiri cá hồi", ingredients: ["Cá hồi (Lachs)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Hamachi Nigiri", desc: "Nigiri cá cam", ingredients: ["Cá cam (Hamachi)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Tuna Nigiri", desc: "Nigiri cá ngừ", ingredients: ["Cá ngừ (Thunfisch)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Toro Tuna Nigiri", desc: "Nigiri bụng cá ngừ", ingredients: ["Bụng cá ngừ (Thunfischbauch / Toro)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Scallops Nigiri", desc: "Nigiri sò điệp", ingredients: ["Sò điệp (Jakobsmuscheln)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Unagi Nigiri", desc: "Nigiri lươn nướng", ingredients: ["Lươn nướng (gegrillter Aal)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Gunkan Nigiri", desc: "Nigiri Gunkan cuộn rong biển", ingredients: ["Cá hồi / Cá ngừ / Tôm / Bơ / Cá cam (tùy chọn)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Avocado Nigiri", desc: "Nigiri bơ", ingredients: ["Bơ (Avocado)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Flamed Sake Nigiri", desc: "Nigiri cá hồi nướng sơ", ingredients: ["Cá hồi nướng sơ (Flamed Lachs)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Flamed Tuna Nigiri", desc: "Nigiri cá ngừ nướng sơ", ingredients: ["Cá ngừ nướng sơ (Flamed Thunfisch)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Ebi Nigiri", desc: "Nigiri tôm", ingredients: ["Tôm (Ebi / Garnelen)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Nigiri", name: "Surimi Nigiri", desc: "Nigiri thanh cua", ingredients: ["Thanh cua giả (Surimi)"], glass: "Dĩa sushi", note: "" },

      /* ─── Avocado Top ─── */
      { type: "food", cat: "Avocado Top", name: "Avocado Salmon", desc: "Cuộn cá hồi phủ bơ", ingredients: ["Cá hồi", "Dưa chuột", "Bơ", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Avocado Top", name: "Avocado Shrimp Tempura", desc: "Cuộn tôm Tempura phủ bơ", ingredients: ["Tôm Tempura", "Bơ", "Phô mai tươi", "Dưa chuột"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Avocado Top", name: "Avocado Asupara", desc: "Cuộn măng tây Tempura phủ bơ", ingredients: ["Măng tây xanh Tempura", "Ớt chuông Tempura", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },

      /* ─── Green Roll ─── */
      { type: "food", cat: "Green Roll", name: "Green Salmon", desc: "Cuộn xanh cá hồi", ingredients: ["Cá hồi (Lachs)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Green Roll", name: "Green Tuna", desc: "Cuộn xanh cá ngừ", ingredients: ["Cá ngừ", "Dưa chuột", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Green Roll", name: "Green Tempura Shrimp", desc: "Cuộn xanh tôm Tempura", ingredients: ["Tôm Tempura", "Dưa chuột", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Green Roll", name: "Green Veggie", desc: "Cuộn xanh rau củ", ingredients: ["Cà rốt", "Dưa chuột", "Bơ", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Green Roll", name: "Green Tempura Asupara", desc: "Cuộn xanh măng tây Tempura", ingredients: ["Măng tây Tempura", "Bơ", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },

      /* ─── Crunchy Roll ─── */
      { type: "food", cat: "Crunchy Roll", name: "Crunchy Spicy Salmon", desc: "Cá hồi cay chiên giòn", ingredients: ["Vỏ bột giòn", "Cá hồi tẩm ướp cay"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Crunchy Roll", name: "Crunchy Spicy Tuna", desc: "Cá ngừ cay chiên giòn", ingredients: ["Vỏ bột giòn", "Cá ngừ tẩm ướp cay"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Crunchy Roll", name: "Crunchy Ebi", desc: "Tôm chiên giòn", ingredients: ["Vỏ bột giòn", "Tôm tẩm ướp (Garnelen)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Crunchy Roll", name: "Crunchy Asupara", desc: "Măng tây chiên giòn", ingredients: ["Vỏ bột giòn", "Măng tây xanh", "Dầu mè"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Crunchy Roll", name: "Crunchy Avocado", desc: "Bơ chiên giòn", ingredients: ["Vỏ bột giòn", "Bơ", "Dầu mè"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Crunchy Roll", name: "Crunchy Chicken", desc: "Gà Yakitori chiên giòn", ingredients: ["Vỏ bột giòn", "Gà Yakitori"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Crunchy Roll", name: "Crunchy Hamachi", desc: "Cá cam chiên giòn", ingredients: ["Vỏ bột giòn", "Cá cam (Hamachi)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Crunchy Roll", name: "Crunchy Salmon", desc: "Cá hồi chiên giòn", ingredients: ["Vỏ bột giòn", "Cá hồi tẩm ướp"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Crunchy Roll", name: "Crunchy Tuna", desc: "Cá ngừ chiên giòn", ingredients: ["Vỏ bột giòn", "Cá ngừ tẩm ướp"], glass: "Dĩa sushi", note: "" },

      /* ─── Maki Light ─── */
      { type: "food", cat: "Maki Light", name: "Light Salmon", desc: "Maki cá hồi thanh đạm", ingredients: ["Cá hồi", "Dưa chuột", "Mè", "Bạc hà", "Rau mùi", "Bánh tráng"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Light", name: "Light Tuna", desc: "Maki cá ngừ thanh đạm", ingredients: ["Cá ngừ", "Dưa chuột", "Mè", "Bạc hà", "Rau mùi", "Bánh tráng"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Light", name: "Light Tempura Shrimp", desc: "Maki tôm Tempura thanh đạm", ingredients: ["Tôm Tempura", "Dưa chuột", "Mè", "Bạc hà", "Rau mùi", "Bánh tráng"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Light", name: "Light Vegetarian", desc: "Maki chay thanh đạm", ingredients: ["Cà chua", "Cà rốt", "Dưa chuột", "Mè", "Bạc hà", "Rau mùi", "Bánh tráng"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Light", name: "Light Chicken Yakitori", desc: "Maki gà Yakitori thanh đạm", ingredients: ["Gà Yakitori", "Dưa chuột", "Mè", "Bạc hà", "Rau mùi", "Bánh tráng"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Light", name: "Light Shrimp", desc: "Maki tôm thanh đạm", ingredients: ["Tôm", "Dưa chuột", "Mè", "Bạc hà", "Rau mùi", "Bánh tráng"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Light", name: "Light Unagi", desc: "Maki lươn thanh đạm", ingredients: ["Lươn", "Dưa chuột", "Mè", "Bạc hà", "Rau mùi", "Bánh tráng"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Maki Light", name: "Light Scallops", desc: "Maki sò điệp thanh đạm", ingredients: ["Sò điệp", "Dưa chuột", "Mè", "Bạc hà", "Rau mùi", "Bánh tráng"], glass: "Dĩa sushi", note: "" },

      /* ─── Inside-Out ─── */
      { type: "food", cat: "Inside-Out", name: "Alaska Inside-Out (I/O)", desc: "InsideOut cá hồi Alaska", ingredients: ["Cá hồi", "Bơ", "Dưa chuột", "Phô mai tươi", "Mè"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Inside-Out", name: "Tuna Alaska Inside-Out", desc: "InsideOut cá ngừ Alaska", ingredients: ["Cá ngừ", "Bơ", "Dưa chuột", "Phô mai tươi", "Trứng cá chuồn"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Inside-Out", name: "Teriyaki Chicken Inside-Out", desc: "InsideOut gà Teriyaki", ingredients: ["Gà Teriyaki", "Bơ", "Dưa chuột"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Inside-Out", name: "Mediterran Veggi Inside-Out", desc: "InsideOut rau củ Địa Trung Hải", ingredients: ["Rau Rucola", "Bơ", "Mè", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },

      /* ─── Spinach Wrap ─── */
      { type: "food", cat: "Spinach Wrap", name: "Spinach Spicy Salmon", desc: "Cuộn rau bina cá hồi cay", ingredients: ["Cá hồi", "Dưa chuột", "Phô mai tươi", "Rau bina (Spinat)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Spinach Wrap", name: "Spinach Tempura Shrimp", desc: "Cuộn rau bina tôm Tempura", ingredients: ["Tôm Tempura", "Dưa chuột", "Phô mai tươi", "Rau bina (Spinat)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Spinach Wrap", name: "Spinach Spicy Tuna", desc: "Cuộn rau bina cá ngừ cay", ingredients: ["Cá ngừ", "Dưa chuột", "Phô mai tươi", "Rau bina (Spinat)"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Spinach Wrap", name: "Spinach Veggi", desc: "Cuộn rau bina chay", ingredients: ["Ớt chuông Tempura", "Măng tây", "Phô mai tươi", "Rau bina (Spinat)"], glass: "Dĩa sushi", note: "" },

      /* ─── Tatar Roll ─── */
      { type: "food", cat: "Tatar Roll", name: "Tatar Salmon Mediterran Roll", desc: "Cuộn tatar cá hồi Địa Trung Hải", ingredients: ["Tatar cá hồi nướng sơ", "Rau Rucola", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },
      { type: "food", cat: "Tatar Roll", name: "Tatar Tuna Mediterran", desc: "Cuộn tatar cá ngừ Địa Trung Hải", ingredients: ["Tatar cá ngừ nướng sơ", "Rau Rucola", "Phô mai tươi"], glass: "Dĩa sushi", note: "" },

      /* ─── Set Sushi — Lunch ─── */
      { type: "food", cat: "Set Sushi - Lunch", name: "Lunch Mix 1", desc: "6 Bơ giòn · 2 Sake Nigiri nướng sơ · 6 Tatar Salmon Mediterran", ingredients: ["Crunchy Avocado ×6", "Flamed Sake Nigiri ×2", "Tatar Salmon Mediterran ×6"], glass: "Khay", note: "13 EUR" },
      { type: "food", cat: "Set Sushi - Lunch", name: "Lunch Mix 2", desc: "6 Alaska I/O · 6 Avocado Cheese · 6 Sake Maki", ingredients: ["Alaska Inside-Out ×6", "Avocado Cheese ×6", "Sake Maki ×6"], glass: "Khay", note: "15 EUR" },
      { type: "food", cat: "Set Sushi - Lunch", name: "Lunch Tuna Mix", desc: "6 Spicy Tuna Roll · 2 Flamed Tuna Nigiri · 3 Crunchy Tuna", ingredients: ["Spicy Tuna Roll ×6", "Flamed Tuna Nigiri ×2", "Crunchy Tuna ×3"], glass: "Khay", note: "13 EUR" },
      { type: "food", cat: "Set Sushi - Lunch", name: "Veggie Lunch", desc: "6 Avocado Asupara · 6 Cucumber Maki · 6 Green Veggie", ingredients: ["Avocado Asupara ×6", "Cucumber Maki ×6", "Green Veggie ×6"], glass: "Khay", note: "12 EUR — Chay" },
      { type: "food", cat: "Set Sushi - Lunch", name: "Business Lunch", desc: "6 Tuna I/O · 6 Avocado Cheese · 2 Sake Nigiri · 2 Tuna Nigiri", ingredients: ["Tuna Inside-Out ×6", "Avocado Cheese ×6", "Sake Nigiri ×2", "Tuna Nigiri ×2"], glass: "Khay", note: "17 EUR" },
      { type: "food", cat: "Set Sushi - Lunch", name: "Premium Lunch", desc: "6 Tiger Roll · 2 Ebi Nigiri · 2 Sake Nigiri · 6 Tatar Tuna · 2 Flamed Tuna Nigiri", ingredients: ["Tiger Roll ×6", "Ebi Nigiri ×2", "Sake Nigiri ×2", "Tatar Tuna Rucola ×6", "Flamed Tuna Nigiri ×2"], glass: "Khay", note: "23 EUR" },

      /* ─── Set Sushi — Dinner ─── */
      { type: "food", cat: "Set Sushi - Dinner", name: "Quiet Luxury", desc: "Set cao cấp nhẹ nhàng", ingredients: ["Toro Nigiri ×4", "Gunkan Nigiri ×2", "Hamachi Nigiri ×2", "Crunchy Avocado ×3", "Spinach Veggie ×6", "Okyu Roll ×3", "Eskimo Roll ×3", "Elsa Roll ×3", "Sashimi Salmon ×2"], glass: "Khay", note: "Back to the Basics" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Exquisite", desc: "Set thượng hạng", ingredients: ["Toro Nigiri ×2", "Gunkan Nigiri ×2", "Hamachi Nigiri ×2", "Sake Nigiri ×2", "Flamed Sake Nigiri ×2", "Tuna Nigiri ×2", "Eskimo Roll ×3", "Spinach Veggie ×3", "Spider Roll ×6", "Sashimi Salmon ×2", "Sashimi Tuna ×2", "Salmon Tatar ×1"], glass: "Khay", note: "" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Royal", desc: "Set hoàng gia", ingredients: ["Flamed Tuna Nigiri ×2", "Toro Nigiri ×2", "Sake Nigiri ×2", "Tuna Nigiri ×2", "Flamed Sake Nigiri ×2", "Crunchy Hamachi ×3", "Crunchy Salmon ×3", "Sashimi Steak ×1", "Tuna Sashimi ×2", "Salmon Sashimi ×2", "Tiger Roll ×6", "Avocado Salmon ×6", "Tuna Alaska I.O. ×6"], glass: "Khay", note: "" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Origami Mix 1", desc: "Set Origami tổng hợp 1", ingredients: ["Maki Light Salmon ×6", "Alaska Inside-Out ×6", "Tuna Alaska I.O. ×6", "Flamed Sake Nigiri ×2", "Sake Nigiri ×2", "Tuna Nigiri ×2", "Avocado Nigiri ×2", "Crunchy Asupara ×6", "Green Veggie ×6"], glass: "Khay", note: "" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Origami Classic", desc: "Set Origami classic", ingredients: ["Sake Nigiri ×2", "Tuna Nigiri ×2", "Flamed Sake Nigiri ×2", "Crunchy Tuna ×3", "Crunchy Ebi ×3", "Crunchy Salmon ×3", "Alaska 1.0. ×6", "Tuna Alaska 1.0. ×6"], glass: "Khay", note: "" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Origami Favourit", desc: "Set Origami yêu thích", ingredients: ["Origami Rainbow ×6", "Salmon Tatar ×1", "Avocado Salmon ×6", "Crunchy Salmon ×3", "Crunchy Tuna ×3", "Crunchy Avocado ×3", "Tiger Roll ×6", "Sake Nigiri ×2", "Flamed Sake Nigiri ×2", "Hamachi Nigiri ×2", "Surimi Nigiri ×2"], glass: "Khay", note: "" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Oh Veggie Baby", desc: "Set sushi chay", ingredients: ["Spinach Veggie ×6", "Cucumber Maki ×6", "Mediterrian Veggie 1.0. ×6", "Crunchy Avocado ×3"], glass: "Khay", note: "Chay" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Avocado Party", desc: "Set bơ các loại", ingredients: ["Avocado Nigiri ×2", "Avocado Asupara ×6", "Avocado Maki ×6", "Crunchy Avocado ×3"], glass: "Khay", note: "" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Crispy Selection", desc: "Set chiên giòn", ingredients: ["Gunkan Nigiri ×2", "Spinach Veggie ×6", "Tuna Alaska 1.0. ×6", "Tiger Roll ×6", "Crunchy Hamachi ×3", "Crunchy Avocado ×3", "Crunchy Salmon ×3"], glass: "Khay", note: "" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Simplify Selection", desc: "Set đa dạng", ingredients: ["Sake Nigiri ×2", "Hamachi Nigiri ×2", "Flamed Sake Nigiri ×2", "Tuna Nigiri ×2", "Crunchy Hamachi ×3", "Crunchy Avocado ×3", "Crunchy Salmon ×3", "Alaska 1.0. ×6", "Tuna Alaska I.O. ×6", "Tiger Roll ×6"], glass: "Khay", note: "" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Just Classics", desc: "Set cổ điển tinh gọn", ingredients: ["Flamed Sake Nigiri ×2", "Tuna Nigiri ×2", "Crunchy Hamachi ×3", "Crunchy Avocado ×3", "Alaska 1.0. ×6", "Tuna Alaska I.O. ×6"], glass: "Khay", note: "" },
      { type: "food", cat: "Set Sushi - Dinner", name: "Aperivo Selection", desc: "Set khai vị kèm rượu", ingredients: ["Sake Nigiri ×2", "Flamed Sake Nigiri ×2", "Crunchy Tuna ×3", "Crunchy Hamachi ×3", "Crunchy Avocado ×3", "Spinach Veggie ×6", "Avocado Salmon ×6"], glass: "Khay", note: "" },

      /* ─── Chef's Choice ─── */
      { type: "food", cat: "Chef's Choice", name: "Omakase 3 Courses", desc: "Thực đơn đầu bếp 3 món", ingredients: ["Khai vị", "Sashimi", "10 Nigiri", "12 Cuộn đặc biệt", "6 Inside-Out", "Tráng miệng"], glass: "Khay nhiều lớp", note: "" },
      { type: "food", cat: "Chef's Choice", name: "Omakase 5 Courses", desc: "Thực đơn đầu bếp 5 món cao cấp", ingredients: ["Khai vị", "Sashimi + Bít tết", "10 Nigiri & Gunkan", "18 Cuộn đặc biệt", "Tráng miệng", "Sashimi & Tatar"], glass: "Khay nhiều lớp", note: "" },

      /* ─── Tráng miệng ─── */
      { type: "food", cat: "Tráng miệng", name: "Backed Banana", desc: "Chuối chiên mật ong", ingredients: ["Chuối chiên", "Mật ong"], glass: "Dĩa tráng miệng", note: "" },
      { type: "food", cat: "Tráng miệng", name: "Sweet Coconut", desc: "Súp cốt dừa với chuối", ingredients: ["Súp cốt dừa", "Chuối"], glass: "Chén tráng miệng", note: "" },
      { type: "food", cat: "Tráng miệng", name: "Mochi Ice Trilogy", desc: "Kem Mochi 3 vị", ingredients: ["Kem trà xanh (Matcha)", "Kem sô-cô-la", "Kem va-ni/chanh"], glass: "Dĩa tráng miệng", note: "" },
      { type: "food", cat: "Tráng miệng", name: "Matcha Ice", desc: "Kem trà xanh 3 viên", ingredients: ["Kem trà xanh (Matcha)"], glass: "Chén kem", note: "3 viên" },
    ].forEach(f => DRINKS.push(f));

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

    /* ═══════════════════════════════════════
       BROWSE MODE
    ═══════════════════════════════════════ */
    let currentBrowseCat = 'all';
    let currentSearch = '';
    let browseType = 'all';
    let trainType = 'all';
    let formType = 'drink';

    /* ═══════════════════════════════════════════════
       WIRTSCHAFTLICHKEIT – chip-quiz items
    ═══════════════════════════════════════════════ */
    const WK_ITEMS = [
      /* ── Getränkekalkulation ── */
      {
        cat: 'Getränkekalkulation', name: 'Nettopreis-Formel', desc: 'Công thức tính giá bán thuần', type: 'wirtschaft',
        ingredients: ['Wareneinsatz', '÷ Wareneinsatzquote %', '× 100'],
        note: 'Nettopreis = (Wareneinsatz ÷ Quote%) × 100'
      },
      {
        cat: 'Getränkekalkulation', name: 'Wareneinsatzquote Standard', desc: 'Tỷ lệ NVL tiêu chuẩn cho cocktail', type: 'wirtschaft',
        ingredients: ['20 %', 'Maximum des Nettoumsatzes'],
        note: 'Cocktails: max 20% des Nettoumsatzes'
      },
      {
        cat: 'Getränkekalkulation', name: 'Mojito Netto berechnen', desc: 'Mojito NVL 2,00€ | Quote 20%', type: 'wirtschaft',
        ingredients: ['2,00 € ÷ 20', '× 100', '= 10,00 €'],
        note: '(2,00 ÷ 20) × 100 = 10,00 €'
      },
      {
        cat: 'Getränkekalkulation', name: 'Brutto + Speisekarte', desc: 'Giá thuần 10€ + 19% VAT → Thực đơn?', type: 'wirtschaft',
        ingredients: ['Netto + 19 % MwSt', '10,00 + 1,90 = 11,90 €', 'Gerundet ≈ 12,50 €'],
        note: '11,90 → Speisekarte ca. 12,50 €'
      },

      /* ── Wareneinsatz-Controlling ── */
      {
        cat: 'Wareneinsatz-Controlling', name: 'Pour-Cost-Quote', desc: 'Pour-Cost-Quote là gì & mức tối ưu?', type: 'wirtschaft',
        ingredients: ['Wareneinsatz ÷ Nettoerlös × 100', 'Optimal: 18–24 %'],
        note: 'Pour-Cost = WE ÷ Nettoerlös × 100'
      },
      {
        cat: 'Wareneinsatz-Controlling', name: 'Pour-Cost zu hoch (30%)', desc: 'Pour-Cost 30% – vấn đề?', type: 'wirtschaft',
        ingredients: ['Zu hoch!', 'Schwund', 'Falsche Rezepturen', 'Überportionierung'],
        note: '30% = zu hoch → Schwund / Rezeptfehler / Überportionierung'
      },

      /* ── Inventur & Bestand ── */
      {
        cat: 'Inventur & Bestand', name: 'FIFO-Prinzip', desc: 'FIFO là gì và tại sao quan trọng?', type: 'wirtschaft',
        ingredients: ['First In – First Out', 'Ältere Ware zuerst', 'Vermeidet Verderb'],
        note: 'Ältere Ware zuerst verbrauchen'
      },
      {
        cat: 'Inventur & Bestand', name: 'Mindestbestand', desc: 'Tồn kho tối thiểu là gì?', type: 'wirtschaft',
        ingredients: ['Untergrenze Lagerbestand', 'Automatische Nachbestellung'],
        note: 'Untergrenze → löst Nachbestellung aus'
      },

      /* ── Umsatzoptimierung ── */
      {
        cat: 'Umsatzoptimierung', name: 'Upselling an der Bar', desc: 'Upselling tại Bar là gì?', type: 'wirtschaft',
        ingredients: ['Hochwertigere Option empfehlen', 'Premium statt Hausmarke'],
        note: 'Dem Gast eine bessere Option vorschlagen'
      },
      {
        cat: 'Umsatzoptimierung', name: '3 Upselling-Techniken', desc: '3 kỹ thuật upselling tại Bar', type: 'wirtschaft',
        ingredients: ['Premium-Spirituose', 'Größere Portion / Pitcher', 'Begleit-Shot oder Snack'],
        note: '3 Wege: Premium / Größer / Begleit-Snack'
      },
    ];
    WK_ITEMS.forEach(item => DRINKS.push(item));

    /* ═══════════════════════════════════════════════
       OPERATIONS – chip-quiz items
    ═══════════════════════════════════════════════ */
    const OPS_ITEMS = [
      /* ── Bar-Setup & Mise en Place ── */
      {
        cat: 'Bar-Setup & Mise en Place', name: 'Station vorbereiten', desc: 'Chuẩn bị trạm làm việc', type: 'operations',
        ingredients: ['Garnish schneiden', 'Eis auffüllen', 'Flaschen auffüllen', 'Sauberkeit prüfen'],
        note: 'Alles griffbereit, bevor die Schicht beginnt'
      },
      {
        cat: 'Bar-Setup & Mise en Place', name: 'Werkzeuge & Utensilien', desc: 'Dụng cụ bar cần thiết', type: 'operations',
        ingredients: ['Shaker (Boston/Cobbler)', 'Jigger', 'Barsieb (Strainer)', 'Barlöffel', 'Muddler'],
        note: 'Standardwerkzeuge für jeden Bartender'
      },
      {
        cat: 'Bar-Setup & Mise en Place', name: 'Garnish-Vorbereitung', desc: 'Chuẩn bị trang trí', type: 'operations',
        ingredients: ['Zitrusscheiben', 'Kräuter (Minze, Rosmarin)', 'Cocktailkirschen', 'Salz-/Zuckerrand'],
        note: 'Mise en place = alles an seinem Platz'
      },

      /* ── Speed & Workflow ── */
      {
        cat: 'Speed & Workflow', name: 'Mehrere Bestellungen', desc: 'Xử lý nhiều đơn cùng lúc', type: 'operations',
        ingredients: ['Bestellungen gruppieren', 'Gleiche Zutaten zusammen', 'Parallel arbeiten', 'Reihenfolge planen'],
        note: 'Batch-Arbeit spart Zeit'
      },
      {
        cat: 'Speed & Workflow', name: 'Bewegungsökonomie', desc: 'Tiết kiệm động tác', type: 'operations',
        ingredients: ['Kurze Wege', 'Alles in Reichweite', 'Feste Positionen', 'Routine einhalten'],
        note: 'Weniger Schritte = mehr Geschwindigkeit'
      },
      {
        cat: 'Speed & Workflow', name: 'Rush-Hour-Strategie', desc: 'Chiến lược giờ cao điểm', type: 'operations',
        ingredients: ['Pre-Batch Syrups', 'Eis vorportionieren', 'Standarddrinks priorisieren', 'Kommunikation mit Kollegen'],
        note: 'Vorbereitung ist der Schlüssel'
      },

      /* ── Kassensystem (POS) ── */
      {
        cat: 'Kassensystem (POS)', name: 'Bestellungen eingeben', desc: 'Nhập đơn hàng', type: 'operations',
        ingredients: ['Tisch/Platz wählen', 'Artikel eingeben', 'Sonderwünsche notieren', 'Bestellung senden'],
        note: 'Immer sofort bonieren!'
      },
      {
        cat: 'Kassensystem (POS)', name: 'Tagesabschluss (Z-Bericht)', desc: 'Kết ca (Z-Bericht)', type: 'operations',
        ingredients: ['Kasse zählen', 'Z-Bericht drucken', 'Differenz prüfen', 'Einnahmen dokumentieren'],
        note: 'Pflicht am Ende jeder Schicht'
      },

      /* ── Hygiene & Reinigung Bar ── */
      {
        cat: 'Hygiene & Reinigung Bar', name: 'Gläserpflege', desc: 'Chăm sóc ly', type: 'operations',
        ingredients: ['Spülmaschine / Handwäsche', 'Polieren mit Mikrofasertuch', 'Auf Beschädigungen prüfen', 'Richtig lagern'],
        note: 'Saubere Gläser = professioneller Service'
      },
      {
        cat: 'Hygiene & Reinigung Bar', name: 'Hygiene-Vorschriften', desc: 'Quy định vệ sinh', type: 'operations',
        ingredients: ['HACCP-Richtlinien', 'Hände waschen', 'Arbeitsflächen desinfizieren', 'Lebensmittel abdecken'],
        note: 'HACCP = Gefahrenanalyse & kritische Kontrollpunkte'
      },
      {
        cat: 'Hygiene & Reinigung Bar', name: 'Schicht-Reinigung', desc: 'Dọn dẹp ca làm', type: 'operations',
        ingredients: ['Bar abwischen', 'Kühlschrank ordnen', 'Müll entsorgen', 'Boden reinigen'],
        note: 'Clean as you go – immer sauber halten'
      },

      /* ── Lagerhaltung (FIFO) ── */
      {
        cat: 'Lagerhaltung (FIFO)', name: 'FIFO im Lager', desc: 'FIFO trong kho', type: 'operations',
        ingredients: ['First In – First Out', 'Neue Ware nach hinten', 'Ältere Ware vorne', 'Ablaufdatum prüfen'],
        note: 'Immer ältere Ware zuerst verbrauchen'
      },
      {
        cat: 'Lagerhaltung (FIFO)', name: 'Temperaturkontrolle', desc: 'Kiểm soát nhiệt độ', type: 'operations',
        ingredients: ['Kühlschrank 2–7 °C', 'Tiefkühler –18 °C', 'Temperatur dokumentieren', 'Kühlkette nicht unterbrechen'],
        note: 'Gesetzliche Pflicht – täglich kontrollieren'
      },
      {
        cat: 'Lagerhaltung (FIFO)', name: 'Bestandskontrolle', desc: 'Kiểm kê tồn kho', type: 'operations',
        ingredients: ['Inventurliste führen', 'Mindestbestand beachten', 'Nachbestellung auslösen', 'Schwund dokumentieren'],
        note: 'Regelmäßige Inventur verhindert Engpässe'
      },
    ];
    OPS_ITEMS.forEach(item => DRINKS.push(item));

    /* ═══════════════════════════════════════════════
       FACHKOMPETENZ GETRÄNKE – chip-quiz items
    ═══════════════════════════════════════════════ */
    const FK_ITEMS = [
      /* ── Spirituosenkunde ── */
      {
        cat: 'Spirituosenkunde', name: 'Gin – Grundlagen', desc: 'Kiến thức cơ bản về Gin', type: 'fachkompetenz',
        ingredients: ['Getreidebasis', 'Wacholder (Juniper)', 'London Dry / New Western', 'Botanicals'],
        note: 'Gin = Neutralspirituose + Wacholder + Botanicals'
      },
      {
        cat: 'Spirituosenkunde', name: 'Rum – Kategorien', desc: 'Phân loại Rum', type: 'fachkompetenz',
        ingredients: ['Weißer Rum (Blanco)', 'Goldener Rum (Oro)', 'Dunkler Rum (Añejo)', 'Aus Zuckerrohr / Melasse'],
        note: 'Rum wird aus Zuckerrohr oder Melasse destilliert'
      },
      {
        cat: 'Spirituosenkunde', name: 'Whisky – Typen', desc: 'Các loại Whisky', type: 'fachkompetenz',
        ingredients: ['Scotch (Schottland)', 'Bourbon (USA, ≥51% Mais)', 'Irish (3× destilliert)', 'Japanese Whisky'],
        note: 'Bourbon ≥ 51% Mais, neue Eichenfässer'
      },
      {
        cat: 'Spirituosenkunde', name: 'Vodka & Tequila', desc: 'Vodka & Tequila cơ bản', type: 'fachkompetenz',
        ingredients: ['Vodka: neutral, Getreide/Kartoffel', 'Tequila: 100% Agave', 'Blanco / Reposado / Añejo', 'Mezcal = rauchig'],
        note: 'Tequila nur aus blauer Agave, Region Jalisco'
      },

      /* ── Cocktail-Klassiker ── */
      {
        cat: 'Cocktail-Klassiker', name: 'Old Fashioned', desc: 'Cocktail kinh điển #1', type: 'fachkompetenz',
        ingredients: ['Bourbon oder Rye', 'Angostura Bitters', 'Zuckersirup', 'Orangenzeste'],
        note: 'Rühren, nicht schütteln – On the rocks'
      },
      {
        cat: 'Cocktail-Klassiker', name: 'Negroni', desc: 'Cocktail kinh điển #2', type: 'fachkompetenz',
        ingredients: ['Gin', 'Campari', 'Roter Wermut', 'Orangenscheibe'],
        note: 'Equal parts: 3 cl + 3 cl + 3 cl'
      },
      {
        cat: 'Cocktail-Klassiker', name: 'Margarita', desc: 'Cocktail kinh điển #3', type: 'fachkompetenz',
        ingredients: ['Tequila', 'Triple Sec / Cointreau', 'Limettensaft', 'Salzrand'],
        note: 'Shaken & strain, Salzrand optional'
      },

      /* ── Moderne Mixologie ── */
      {
        cat: 'Moderne Mixologie', name: 'Infusion-Technik', desc: 'Kỹ thuật ngâm chiết', type: 'fachkompetenz',
        ingredients: ['Spirituose + Zutat (Kräuter/Obst)', '24–72 Stunden ziehen lassen', 'Abseihen & filtern', 'Kühl lagern'],
        note: 'Cold infusion: keine Hitze nötig'
      },
      {
        cat: 'Moderne Mixologie', name: 'Fat-Washing', desc: 'Kỹ thuật Fat-Washing', type: 'fachkompetenz',
        ingredients: ['Geschmolzenes Fett + Spirituose', 'Ruhen lassen (6–8h)', 'Einfrieren', 'Fett abschöpfen & filtern'],
        note: 'Z.B. Butter-Bourbon, Bacon-Whisky'
      },
      {
        cat: 'Moderne Mixologie', name: 'Clarified Cocktails', desc: 'Cocktail lọc trong', type: 'fachkompetenz',
        ingredients: ['Milch-Clarification', 'Säure spaltet Kasein', 'Filtern durch Käsetuch', 'Kristallklares Ergebnis'],
        note: 'Milk punch: Zitrus + heiße Milch → filtern'
      },

      /* ── Barkeepertechniken ── */
      {
        cat: 'Barkeepertechniken', name: 'Shaken vs. Rühren', desc: 'Lắc vs. Khuấy', type: 'fachkompetenz',
        ingredients: ['Shaken: mit Saft/Sirup/Ei', 'Rühren: nur Spirituosen', 'Shaken = kalt + Verdünnung + Luft', 'Rühren = seidig, klar'],
        note: 'Regel: enthält Saft → Shaken'
      },
      {
        cat: 'Barkeepertechniken', name: 'Muddling', desc: 'Kỹ thuật nghiền', type: 'fachkompetenz',
        ingredients: ['Sanft drücken (Kräuter)', 'Stärker: Früchte', 'Nicht zerreißen (Minze)', 'Ätherische Öle freisetzen'],
        note: 'Minze NUR drücken, nicht zerreiben'
      },
      {
        cat: 'Barkeepertechniken', name: 'Layering & Flambieren', desc: 'Tạo lớp & đốt lửa', type: 'fachkompetenz',
        ingredients: ['Barlöffel-Rücken verwenden', 'Schwerste Flüssigkeit unten', 'Flambieren: hochprozentigen Alkohol', 'Sicherheitsabstand beachten'],
        note: 'Dichte bestimmt die Reihenfolge der Schichten'
      },

      /* ── Weinkunde ── */
      {
        cat: 'Weinkunde', name: 'Rebsorten – Weiß', desc: 'Giống nho trắng', type: 'fachkompetenz',
        ingredients: ['Chardonnay', 'Sauvignon Blanc', 'Riesling', 'Pinot Grigio'],
        note: 'Riesling = Deutschlands berühmteste Rebsorte'
      },
      {
        cat: 'Weinkunde', name: 'Rebsorten – Rot', desc: 'Giống nho đỏ', type: 'fachkompetenz',
        ingredients: ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Tempranillo'],
        note: 'Pinot Noir = leicht; Cabernet = kräftig'
      },
      {
        cat: 'Weinkunde', name: 'Wein-Service', desc: 'Phục vụ rượu vang', type: 'fachkompetenz',
        ingredients: ['Flasche präsentieren', 'Korken ziehen & prüfen', 'Probeschluck anbieten', 'Richtige Temperatur (Weiß 8–12°C, Rot 16–18°C)'],
        note: 'Weißwein kalt, Rotwein Zimmertemperatur'
      },

      /* ── Bierkunde ── */
      {
        cat: 'Bierkunde', name: 'Zapftechnik', desc: 'Kỹ thuật rót bia', type: 'fachkompetenz',
        ingredients: ['Glas schräg 45° halten', 'Langsam zapfen', 'Schaum 2–3 Finger', 'Glas nass vorspülen'],
        note: 'Perfekter Schaum = frisches Bier'
      },
      {
        cat: 'Bierkunde', name: 'Bierstile', desc: 'Các loại bia', type: 'fachkompetenz',
        ingredients: ['Pils (hopfig, herb)', 'Weizen (fruchtig)', 'IPA (bitter, Craft)', 'Stout (dunkel, geröstet)'],
        note: 'Reinheitsgebot 1516: Wasser, Malz, Hopfen, Hefe'
      },

      /* ── Kaffee & Heißgetränke ── */
      {
        cat: 'Kaffee & Heißgetränke', name: 'Espresso-Grundlagen', desc: 'Espresso cơ bản', type: 'fachkompetenz',
        ingredients: ['7g Kaffeemehl', '25–30 Sek. Extraktion', '25–30ml Ergebnis', '9 bar Druck'],
        note: 'Crema = Qualitätszeichen'
      },
      {
        cat: 'Kaffee & Heißgetränke', name: 'Milchgetränke', desc: 'Đồ uống sữa', type: 'fachkompetenz',
        ingredients: ['Latte (viel Milch)', 'Cappuccino (1/3 Espresso, 1/3 Milch, 1/3 Schaum)', 'Flat White (Mikroschaum)', 'Latte Art: Herz / Rosetta'],
        note: 'Milch auf 60–65°C aufschäumen'
      },
      {
        cat: 'Kaffee & Heißgetränke', name: 'Tee & Heiße Cocktails', desc: 'Trà & Cocktail nóng', type: 'fachkompetenz',
        ingredients: ['Irish Coffee (Whiskey + Kaffee)', 'Hot Toddy (Whisky + Honig + Zitrone)', 'Glühwein', 'Tee: Ziehzeit beachten'],
        note: 'Heiße Getränke = perfekt im Winter'
      },

      /* ── Alkoholfreie Cocktails ── */
      {
        cat: 'Alkoholfreie Cocktails', name: 'Virgin Mojito', desc: 'Mojito không cồn', type: 'fachkompetenz',
        ingredients: ['Limettensaft', 'Minze', 'Zuckersirup', 'Sodawasser'],
        note: 'Muddled – kein Alkohol nötig'
      },
      {
        cat: 'Alkoholfreie Cocktails', name: 'Zero-Proof Techniken', desc: 'Công thức không cồn', type: 'fachkompetenz',
        ingredients: ['Seedlip / Lyre\'s (Alkohol-Alternativen)', 'Shrubs (Essig-Sirup)', 'Fruchtsäfte + Gewürze', 'Tonic & Bitters (alkfrei)'],
        note: 'Trend: bewusster Genuss ohne Alkohol'
      },
      {
        cat: 'Alkoholfreie Cocktails', name: 'Mocktail-Präsentation', desc: 'Trình bày Mocktail', type: 'fachkompetenz',
        ingredients: ['Gleiches Glas wie Cocktail', 'Garnish identisch', 'Keine Diskriminierung', 'Auf der Karte hervorheben'],
        note: 'Mocktails verdienen gleichwertige Präsentation'
      },

      /* ── Eis & Temperatur ── */
      {
        cat: 'Eis & Temperatur', name: 'Eisarten', desc: 'Các loại đá', type: 'fachkompetenz',
        ingredients: ['Würfeleis (Standard)', 'Crushed Ice (Tiki/Julep)', 'Kugeleis (langsam schmelzend)', 'Block Ice (großer Würfel)'],
        note: 'Größeres Eis = weniger Verdünnung'
      },
      {
        cat: 'Eis & Temperatur', name: 'Verdünnung & Temperatur', desc: 'Độ pha loãng & nhiệt độ', type: 'fachkompetenz',
        ingredients: ['Shaken: ~25% Verdünnung', 'Rühren: ~15% Verdünnung', 'Zieltemperatur: –5 bis 0°C', 'Eis-Qualität = Drink-Qualität'],
        note: 'Temperatur kontrolliert Geschmack & Textur'
      },

      /* ── Garnishing & Präsentation ── */
      {
        cat: 'Garnishing & Präsentation', name: 'Fruchtschnitzen', desc: 'Cắt tỉa trái cây', type: 'fachkompetenz',
        ingredients: ['Zitrus-Twist / Zeste', 'Orangenrad', 'Ananaskeil', 'Dehydrierte Fruchtscheiben'],
        note: 'Immer frisch schneiden, vor dem Service'
      },
      {
        cat: 'Garnishing & Präsentation', name: 'Glaseffekte', desc: 'Hiệu ứng ly', type: 'fachkompetenz',
        ingredients: ['Salzrand / Zuckerrand', 'Rauch (Smoke Gun)', 'Gekühlte / gefrostete Gläser', 'Essbare Blüten'],
        note: 'Auge trinkt mit – Präsentation verkauft'
      },
      {
        cat: 'Garnishing & Präsentation', name: 'Kräuter & Extras', desc: 'Rau thơm & phụ kiện', type: 'fachkompetenz',
        ingredients: ['Minze (klatschen, nicht zerreißen)', 'Rosmarinzweig (anzünden)', 'Cocktailspieß (Oliven, Kirschen)', 'Regenschirmchen & Strohhalme'],
        note: 'Garnish muss zum Drink passen'
      },
    ];
    FK_ITEMS.forEach(item => DRINKS.push(item));

    /* ═══════════════════════════════════════════════
       COMPLIANCE – chip-quiz items
    ═══════════════════════════════════════════════ */
    const COMP_ITEMS = [
      /* ── Jugendschutzgesetz ── */
      {
        cat: 'Jugendschutzgesetz', name: 'Altersgrenzen Alkohol', desc: 'Giới hạn tuổi bán rượu', type: 'compliance',
        ingredients: ['Ab 16: Bier, Wein, Sekt', 'Ab 18: Spirituosen & Mixgetränke mit Spirituosen', 'Unter 16: kein Alkohol', 'Ausweiskontrolle Pflicht'],
        note: '§ 9 JuSchG – Alkoholabgabe an Jugendliche'
      },
      {
        cat: 'Jugendschutzgesetz', name: 'Ausweiskontrolle', desc: 'Kiểm tra giấy tờ tuỳ thân', type: 'compliance',
        ingredients: ['Personalausweis / Reisepass', 'Führerschein (mit Foto)', 'Im Zweifel: immer prüfen', 'Kein Ausweis = kein Alkohol'],
        note: 'Lieber einmal zu viel prüfen als zu wenig'
      },
      {
        cat: 'Jugendschutzgesetz', name: 'Aufenthaltszeiten Jugendliche', desc: 'Giờ giới hạn cho vị thành niên', type: 'compliance',
        ingredients: ['Unter 16: bis 22 Uhr (mit Erziehungsberechtigtem)', 'Ab 16: bis 24 Uhr', 'Unter 14: nur mit Begleitung', 'Veranstalter haftet'],
        note: 'Gaststättenaufenthalt – § 4 JuSchG'
      },

      /* ── Schanklizenz / Konzession ── */
      {
        cat: 'Schanklizenz / Konzession', name: 'Gaststättenerlaubnis', desc: 'Giấy phép kinh doanh nhà hàng', type: 'compliance',
        ingredients: ['Konzession beim Ordnungsamt', 'Gesundheitszeugnis (§ 43 IfSG)', 'Gewerbeanmeldung', 'Unterrichtung nach Gaststättengesetz'],
        note: 'Ohne Konzession = illegaler Ausschank'
      },
      {
        cat: 'Schanklizenz / Konzession', name: 'Ausschankrechte', desc: 'Quyền phục vụ rượu', type: 'compliance',
        ingredients: ['Alkoholausschank nur mit Lizenz', 'Sperrstunden beachten', 'Lärmschutzauflagen', 'Nichtraucherschutzgesetz'],
        note: 'Kommunale Regeln können variieren'
      },

      /* ── Verantwortungsvoller Ausschank ── */
      {
        cat: 'Verantwortungsvoller Ausschank', name: 'Trunkenheit erkennen', desc: 'Nhận biết khách say rượu', type: 'compliance',
        ingredients: ['Lallende Sprache', 'Unsicherer Gang', 'Aggressives Verhalten', 'Glasige Augen'],
        note: 'Anzeichen frühzeitig erkennen & handeln'
      },
      {
        cat: 'Verantwortungsvoller Ausschank', name: 'Maßnahmen bei Trunkenheit', desc: 'Biện pháp khi khách say', type: 'compliance',
        ingredients: ['Alkohol verweigern (Pflicht!)', 'Wasser / alkoholfrei anbieten', 'Taxi rufen', 'Vorgesetzte informieren'],
        note: '§ 20 GastG: Verbot der Abgabe an Betrunkene'
      },
      {
        cat: 'Verantwortungsvoller Ausschank', name: 'Haftung Barkeeper', desc: 'Trách nhiệm pháp lý của Bartender', type: 'compliance',
        ingredients: ['Persönliche Haftung möglich', 'Fahrlässigkeit bei Alkoholabgabe', 'Jugendschutz-Verstöße = Ordnungswidrigkeit', 'Bis 50.000 € Bußgeld'],
        note: 'Barkeeper trägt Mitverantwortung'
      },

      /* ── HACCP Bar-spezifisch ── */
      {
        cat: 'HACCP Bar-spezifisch', name: 'HACCP-Grundsätze Bar', desc: 'Nguyên tắc HACCP cho Bar', type: 'compliance',
        ingredients: ['Gefahrenanalyse (Hazard Analysis)', 'Kritische Kontrollpunkte (CCP)', 'Grenzwerte festlegen', 'Dokumentation führen'],
        note: 'HACCP = Hazard Analysis Critical Control Points'
      },
      {
        cat: 'HACCP Bar-spezifisch', name: 'Frische Zutaten & Allergene', desc: 'Nguyên liệu tươi & dị ứng', type: 'compliance',
        ingredients: ['Frischware täglich prüfen', '14 Hauptallergene kennzeichnen', 'Nüsse, Milch, Ei, Sellerie…', 'Gäste aktiv informieren'],
        note: 'EU-Verordnung 1169/2011 – Allergenkennzeichnung'
      },
      {
        cat: 'HACCP Bar-spezifisch', name: 'Kühlkette & Dokumentation', desc: 'Chuỗi lạnh & hồ sơ', type: 'compliance',
        ingredients: ['Temperatur-Logbuch führen', 'Kühlschrank 2–7 °C', 'Wareneingang kontrollieren', 'Rückstellproben bei Events'],
        note: 'Dokumentation ist Pflicht – täglich!'
      },

      /* ── Arbeitsschutz Bar ── */
      {
        cat: 'Arbeitsschutz Bar', name: 'Schneidwerkzeug Sicherheit', desc: 'An toàn dụng cụ cắt', type: 'compliance',
        ingredients: ['Scharfe Messer (stumpf = gefährlich)', 'Schnittfeste Unterlage', 'Finger weg von der Klinge', 'Messer nie ins Spülbecken'],
        note: 'Stumpfes Messer rutscht leichter ab'
      },
      {
        cat: 'Arbeitsschutz Bar', name: 'Glasbruch-Protokoll', desc: 'Quy trình xử lý vỡ ly', type: 'compliance',
        ingredients: ['Bereich sofort sperren', 'Handschuhe anziehen', 'Scherben in extra Behälter', 'Eis-Bin komplett leeren bei Glasbruch'],
        note: 'Glasbruch in Eis-Bin → alles wegwerfen!'
      },
      {
        cat: 'Arbeitsschutz Bar', name: 'Rutsch- & Brandschutz', desc: 'Phòng trượt ngã & cháy nổ', type: 'compliance',
        ingredients: ['Rutschfeste Schuhe tragen', 'Verschüttetes sofort aufwischen', 'Feuerlöscher-Standort kennen', 'Flambieren: Sicherheitsabstand'],
        note: 'Prävention geht vor'
      },
    ];
    COMP_ITEMS.forEach(item => DRINKS.push(item));

    /* ═══════════════════════════════════════════════
       SALES & MARKETING – chip-quiz items
    ═══════════════════════════════════════════════ */
    const SALES_ITEMS = [
      /* ── Gästeberatung & Empfehlung ── */
      {
        cat: 'Gästeberatung & Empfehlung', name: 'Geschmacksprofil erfragen', desc: 'Hỏi sở thích hương vị', type: 'sales',
        ingredients: ['Süß, sauer, bitter, herb?', 'Lieblingsspirituose?', 'Allergie / Unverträglichkeit?', 'Anlass: entspannt oder feierlich?'],
        note: 'Gute Beratung = höherer Umsatz + zufriedene Gäste'
      },
      {
        cat: 'Gästeberatung & Empfehlung', name: 'Empfehlungstechnik', desc: 'Kỹ thuật đề xuất', type: 'sales',
        ingredients: ['Persönliche Empfehlung geben', 'Storytelling zum Drink', 'Tagesempfehlung anbieten', 'Premium-Option nennen'],
        note: '"Darf ich Ihnen unseren Signature empfehlen?"'
      },
      {
        cat: 'Gästeberatung & Empfehlung', name: 'Stammgäste pflegen', desc: 'Chăm sóc khách quen', type: 'sales',
        ingredients: ['Namen merken', 'Lieblingsdrink kennen', 'Persönliche Ansprache', 'Kleine Aufmerksamkeiten'],
        note: 'Stammgäste = stabiler Umsatz'
      },

      /* ── Cocktailkarten-Design ── */
      {
        cat: 'Cocktailkarten-Design', name: 'Karten-Storytelling', desc: 'Kể chuyện qua thực đơn', type: 'sales',
        ingredients: ['Herkunftsgeschichte des Drinks', 'Emotionale Beschreibung', 'Zutaten visuell hervorheben', 'Signature-Drinks prominent platzieren'],
        note: 'Story verkauft mehr als Zutatenliste'
      },
      {
        cat: 'Cocktailkarten-Design', name: 'Preispsychologie', desc: 'Tâm lý giá', type: 'sales',
        ingredients: ['Kein €-Zeichen (weniger Schmerz)', 'Teuerste nicht ganz oben', 'Anker-Preis: Premium zuerst', 'Mittlerer Preis wird am meisten gewählt'],
        note: 'Decoy-Effekt: 3 Stufen → Mitte gewinnt'
      },

      /* ── Social Media (Bar-Content) ── */
      {
        cat: 'Social Media (Bar-Content)', name: 'Behind-the-Bar Content', desc: 'Video hậu trường Bar', type: 'sales',
        ingredients: ['Drink-Zubereitung filmen', 'Bartender-Alltag zeigen', 'Kurze Reels / TikToks', 'Gutes Licht & saubere Bar'],
        note: 'Authentizität > Perfektion'
      },
      {
        cat: 'Social Media (Bar-Content)', name: 'Social Media Strategie', desc: 'Chiến lược mạng xã hội', type: 'sales',
        ingredients: ['Regelmäßig posten', 'Hashtags der Stadt/Bar', 'Stories für daily specials', 'Gäste taggen & reposten'],
        note: 'Konsistenz ist wichtiger als Virulenz'
      },

      /* ── Events & Cocktailkurse ── */
      {
        cat: 'Events & Cocktailkurse', name: 'Mobile Bar & Catering', desc: 'Bar di động & tiệc ngoài', type: 'sales',
        ingredients: ['Equipment-Checkliste', 'Transport & Kühlung', 'Menü vorher abstimmen', 'Genug Eis einplanen!'],
        note: 'Planung = 80% des Erfolgs'
      },
      {
        cat: 'Events & Cocktailkurse', name: 'Cocktailkurs leiten', desc: 'Dẫn lớp học Cocktail', type: 'sales',
        ingredients: ['Max. 3 Drinks pro Kurs', 'Geschichte erzählen', 'Teilnehmer mitmachen lassen', 'Rezeptkarten mitgeben'],
        note: 'Edutainment: lernen + Spaß'
      },

      /* ── Bewertungsmanagement ── */
      {
        cat: 'Bewertungsmanagement', name: 'Google & TripAdvisor', desc: 'Quản lý đánh giá online', type: 'sales',
        ingredients: ['Auf jede Bewertung antworten', 'Sachlich bei Kritik', 'Dankbar bei Lob', 'Gäste freundlich um Bewertung bitten'],
        note: 'Antworten zeigt Professionalität'
      },
      {
        cat: 'Bewertungsmanagement', name: 'Negative Bewertungen', desc: 'Xử lý đánh giá tiêu cực', type: 'sales',
        ingredients: ['Nicht persönlich nehmen', 'Entschuldigung + Lösung anbieten', 'Intern: Problem analysieren', 'Nie öffentlich streiten'],
        note: '1 schlechte Antwort = 100 verlorene Gäste'
      },
    ];
    SALES_ITEMS.forEach(item => DRINKS.push(item));

    /* ═══════════════════════════════════════════════
       SOFT SKILLS & SPRACHEN – chip-quiz items
    ═══════════════════════════════════════════════ */
    const SOFT_ITEMS = [
      /* ── Gastfreundschaft & Empathie ── */
      {
        cat: 'Gastfreundschaft & Empathie', name: 'Gäste lesen', desc: 'Đọc vị khách hàng', type: 'softskills',
        ingredients: ['Körpersprache beobachten', 'Stimmung erkennen', 'Anpassung der Ansprache', 'Ruhig vs. gesprächig einschätzen'],
        note: 'Guter Bartender = guter Menschenkenner'
      },
      {
        cat: 'Gastfreundschaft & Empathie', name: 'Stammgast-Beziehung', desc: 'Xây dựng quan hệ khách quen', type: 'softskills',
        ingredients: ['Namen merken', 'Vorlieben notieren', 'Persönliche Begrüßung', 'Kleine Gesten (Amuse-Bouche)'],
        note: 'Stammgäste kommen wegen DIR'
      },
      {
        cat: 'Gastfreundschaft & Empathie', name: 'Umgang mit schwierigen Gästen', desc: 'Xử lý khách khó tính', type: 'softskills',
        ingredients: ['Ruhig bleiben', 'Aktiv zuhören', 'Lösung anbieten', 'Vorgesetzte einschalten wenn nötig'],
        note: 'Eskalation vermeiden – Deeskalation üben'
      },

      /* ── Kommunikation ── */
      {
        cat: 'Kommunikation', name: 'Small Talk an der Bar', desc: 'Trò chuyện tại Bar', type: 'softskills',
        ingredients: ['Offene Fragen stellen', 'Aktiv zuhören', 'Gemeinsamkeiten finden', 'Politische Themen meiden'],
        note: 'Bar = soziales Wohnzimmer'
      },
      {
        cat: 'Kommunikation', name: 'Konflikte lösen', desc: 'Giải quyết xung đột', type: 'softskills',
        ingredients: ['Ich-Botschaften verwenden', 'Sachlich bleiben', 'Kompromiss suchen', 'Nie vor Gästen streiten'],
        note: 'Professionell = Emotionen kontrollieren'
      },

      /* ── Stressresistenz ── */
      {
        cat: 'Stressresistenz', name: 'Rush Hour überstehen', desc: 'Vượt qua giờ cao điểm', type: 'softskills',
        ingredients: ['Atmen & Fokus', 'Priorisieren', 'Kommunikation mit Team', 'Fehler akzeptieren & weitermachen'],
        note: 'Stress ist normal – Reaktion ist Wahl'
      },
      {
        cat: 'Stressresistenz', name: 'Mentale Stärke', desc: 'Sức mạnh tinh thần', type: 'softskills',
        ingredients: ['Pausen nutzen', 'Ausgleich nach der Arbeit', 'Grenzen setzen', 'Hilfe annehmen'],
        note: 'Burnout-Prävention ist kein Luxus'
      },

      /* ── Teamwork ── */
      {
        cat: 'Teamwork', name: 'Zusammenarbeit Küche-Bar', desc: 'Phối hợp Bếp-Bar', type: 'softskills',
        ingredients: ['Bestellungen koordinieren', 'Timing abstimmen', 'Respektvoller Umgang', 'Gemeinsame Mise en Place'],
        note: 'Küche + Bar = ein Team'
      },
      {
        cat: 'Teamwork', name: 'Barback & Runner', desc: 'Phụ Bar & Runner', type: 'softskills',
        ingredients: ['Aufgaben klar verteilen', 'Eis auffüllen, Gläser bereitstellen', 'Kommunikation: was fehlt?', 'Wertschätzung zeigen'],
        note: 'Guter Barback = schnellerer Bartender'
      },
      {
        cat: 'Teamwork', name: 'Schichtübergabe', desc: 'Giao ca', type: 'softskills',
        ingredients: ['86-Liste übergeben (was ist aus)', 'Offene Bestellungen', 'Sauberkeit der Station', 'Besondere Vorkommnisse melden'],
        note: '86 = Artikel nicht mehr verfügbar'
      },

      /* ── Showmanship & Flair ── */
      {
        cat: 'Showmanship & Flair', name: 'Flair Bartending Basics', desc: 'Cơ bản biểu diễn pha chế', type: 'softskills',
        ingredients: ['Working Flair (während der Arbeit)', 'Flasche drehen (Basics)', 'Tin-Flip', 'Sicherheit geht vor'],
        note: 'Erst Technik, dann Show'
      },
      {
        cat: 'Showmanship & Flair', name: 'Entertainment-Faktor', desc: 'Yếu tố giải trí', type: 'softskills',
        ingredients: ['Blickkontakt mit Gästen', 'Drink flambieren', 'Rauch-Effekte (Smoke Gun)', 'Musik & Atmosphäre'],
        note: 'Erlebnis > nur Getränk servieren'
      },

      /* ── Zeitmanagement ── */
      {
        cat: 'Zeitmanagement', name: 'Schichtplanung', desc: 'Lên kế hoạch ca làm', type: 'softskills',
        ingredients: ['Opening-Checklist', 'Closing-Checklist', 'Prep-Liste vor Rush Hour', 'Pausen einplanen'],
        note: 'Checklisten sparen Zeit & Nerven'
      },
      {
        cat: 'Zeitmanagement', name: 'Prioritäten setzen', desc: 'Sắp xếp ưu tiên', type: 'softskills',
        ingredients: ['Gäste an der Bar zuerst', 'Bestellungen nach Reihenfolge', 'Multitasking: Shaken + Einschenken', 'Aufräumen während Wartezeiten'],
        note: 'Immer etwas Sinnvolles tun'
      },

      /* ── Englisch ── */
      {
        cat: 'Englisch', name: 'Bar English Basics', desc: 'Tiếng Anh Bar cơ bản', type: 'softskills',
        ingredients: ['"What can I get you?"', '"Neat / On the rocks / Straight up"', '"Shaken or stirred?"', '"Would you like to start a tab?"'],
        note: 'Selbstbewusst sprechen – Fehler sind OK'
      },
      {
        cat: 'Englisch', name: 'Drink beschreiben (EN)', desc: 'Mô tả đồ uống bằng tiếng Anh', type: 'softskills',
        ingredients: ['"Refreshing, citrus-forward"', '"Spirit-forward, boozy"', '"Sweet & tropical"', '"Smoky with a hint of vanilla"'],
        note: 'Adjektive verkaufen Drinks'
      },
      {
        cat: 'Englisch', name: 'Beschwerden auf Englisch', desc: 'Xử lý khiếu nại bằng tiếng Anh', type: 'softskills',
        ingredients: ['"I\'m sorry about that"', '"Let me fix that for you"', '"Can I offer you something else?"', '"Thank you for your patience"'],
        note: 'Höflich + lösungsorientiert'
      },

      /* ── Verhandlungsgeschick ── */
      {
        cat: 'Verhandlungsgeschick', name: 'Lieferanten-Verhandlung', desc: 'Đàm phán với nhà cung cấp', type: 'softskills',
        ingredients: ['Preise vergleichen', 'Mengenrabatte anfragen', 'Lieferbedingungen prüfen', 'Langfristige Beziehung aufbauen'],
        note: 'Win-Win: gute Konditionen + treuer Partner'
      },
      {
        cat: 'Verhandlungsgeschick', name: 'Gehalts- & Trinkgeld-Verhandlung', desc: 'Thương lượng lương & tiền tip', type: 'softskills',
        ingredients: ['Eigenen Wert kennen', 'Leistungen dokumentieren', 'Ruhig & sachlich argumentieren', 'Trinkgeld-System klären'],
        note: 'Vorbereitung = Verhandlungsmacht'
      },
    ];
    SOFT_ITEMS.forEach(item => DRINKS.push(item));

    /* ═══════════════════════════════════════════════
       SUSHI & JAPANISCHE KÜCHE – chip-quiz items
    ═══════════════════════════════════════════════ */
    const SUSHI_ITEMS = [
      /* ── Fischkunde & Qualitätskontrolle ── */
      {
        cat: 'Fischkunde & Qualitätskontrolle', name: 'Fischfrische erkennen', desc: 'Nhận biết cá tươi', type: 'sushi',
        ingredients: ['Klare, glänzende Augen', 'Rote Kiemen', 'Festes Fleisch (drückt zurück)', 'Frischer Meergeruch (nicht fischig)'],
        note: 'Frische = Sicherheit + Geschmack'
      },
      {
        cat: 'Fischkunde & Qualitätskontrolle', name: 'Sushi-Grade Fisch', desc: 'Cá đạt chuẩn Sushi', type: 'sushi',
        ingredients: ['Sashimi-Qualität (roh essbar)', 'Tiefgefroren bei −20°C / 24h', 'Parasiten-Kontrolle', 'Lückenlose Kühlkette'],
        note: 'EU-Vorschrift: Fisch für Rohverzehr muss durchgefroren werden'
      },
      {
        cat: 'Fischkunde & Qualitätskontrolle', name: 'Wichtige Fischarten', desc: 'Các loại cá quan trọng', type: 'sushi',
        ingredients: ['Sake (Lachs)', 'Maguro (Thunfisch)', 'Hamachi (Gelbschwanz)', 'Ebi (Garnele)', 'Unagi (Aal)'],
        note: 'Japanische Namen auswendig lernen!'
      },

      /* ── Messertechnik & Schneiden ── */
      {
        cat: 'Messertechnik & Schneiden', name: 'Sushi-Messer Typen', desc: 'Các loại dao Sushi', type: 'sushi',
        ingredients: ['Yanagiba (Sashimi-Messer, lang)', 'Deba (Fischmesser, schwer)', 'Usuba (Gemüsemesser)', 'Einseitiger Schliff (Kataba)'],
        note: 'Japanische Messer = einseitig geschliffen'
      },
      {
        cat: 'Messertechnik & Schneiden', name: 'Schnitt-Techniken', desc: 'Kỹ thuật cắt', type: 'sushi',
        ingredients: ['Sogi-giri (schräg, Sashimi)', 'Hira-zukuri (gerade, dick)', 'Usu-zukuri (hauchdünn)', 'Ein Zug – nicht sägen!'],
        note: 'Scharfes Messer + ein Zug = sauberer Schnitt'
      },
      {
        cat: 'Messertechnik & Schneiden', name: 'Messer schärfen', desc: 'Mài dao', type: 'sushi',
        ingredients: ['Wetzstein (1000er + 3000er)', 'Messer im 15°-Winkel', 'Gleichmäßig über den Stein', 'Nach Gebrauch immer trocknen'],
        note: 'Ein stumpfes Messer ist gefährlicher als ein scharfes'
      },

      /* ── Sushi-Reis ── */
      {
        cat: 'Sushi-Reis', name: 'Reis kochen', desc: 'Nấu cơm Sushi', type: 'sushi',
        ingredients: ['Kurzkörniger Japanreis', 'Reis waschen bis Wasser klar', 'Wasser-Reis-Verhältnis 1:1,1', '15 Min. kochen + 10 Min. ruhen'],
        note: 'Reis ist das Fundament – nie überspringen!'
      },
      {
        cat: 'Sushi-Reis', name: 'Sushi-Zu (Essigmischung)', desc: 'Sushi-Zu (hỗn hợp giấm)', type: 'sushi',
        ingredients: ['Reisessig', 'Zucker', 'Salz', 'Unterheben mit Shamoji (Holzspatel)'],
        note: 'Fächern beim Mischen → glänzender Reis'
      },
      {
        cat: 'Sushi-Reis', name: 'Reis-Temperatur & Textur', desc: 'Nhiệt độ & kết cấu cơm', type: 'sushi',
        ingredients: ['Körpertemperatur (ca. 37°C)', 'Locker, nicht matschig', 'Leicht klebrig', 'Mit feuchten Händen formen'],
        note: 'Zu heißer Reis = Nori wird sofort weich'
      },

      /* ── Nigiri, Maki & Gunkan ── */
      {
        cat: 'Nigiri, Maki & Gunkan', name: 'Nigiri formen', desc: 'Nắn Nigiri', type: 'sushi',
        ingredients: ['Reis oval formen (20g)', 'Wasabi auf Fisch', 'Fisch auf Reis drücken', '2 Finger-Technik'],
        note: 'Locker pressen – Reis soll im Mund zerfallen'
      },
      {
        cat: 'Nigiri, Maki & Gunkan', name: 'Maki rollen', desc: 'Cuộn Maki', type: 'sushi',
        ingredients: ['Nori auf Bambusmatte', 'Dünne Reisschicht', 'Füllung mittig', 'Fest rollen, mit Wasser versiegeln'],
        note: 'Hosomaki = dünn, Futomaki = dick'
      },
      {
        cat: 'Nigiri, Maki & Gunkan', name: 'Gunkan-Maki', desc: 'Gunkan-Maki (tàu chiến)', type: 'sushi',
        ingredients: ['Reisballen formen', 'Nori-Streifen umwickeln', 'Oben offen lassen', 'Füllung: Ikura, Tobiko, Uni'],
        note: 'Gunkan = "Kriegsschiff" – für weiche Toppings'
      },

      /* ── Special & Creative Rolls ── */
      {
        cat: 'Special & Creative Rolls', name: 'Inside-Out Roll', desc: 'Cuộn Inside-Out', type: 'sushi',
        ingredients: ['Reis außen, Nori innen', 'Sesam / Tobiko außen', 'Frischhaltefolie auf Matte', 'Fest aber sanft rollen'],
        note: 'Uramaki = umgedrehte Rolle'
      },
      {
        cat: 'Special & Creative Rolls', name: 'Tempura-Rolls', desc: 'Cuộn Tempura', type: 'sushi',
        ingredients: ['Garnele / Gemüse frittieren', 'Knuspriges Element innen', 'Crunchy Topping (Panko)', 'Soße: Spicy Mayo / Teriyaki'],
        note: 'Textur-Kontrast = Wow-Effekt'
      },
      {
        cat: 'Special & Creative Rolls', name: 'Signature Rolls kreieren', desc: 'Sáng tạo cuộn đặc biệt', type: 'sushi',
        ingredients: ['Basis: Protein + Gemüse + Sauce', 'Textur-Kontrast (knusprig/weich)', 'Farb-Komposition', 'Einzigartiger Name'],
        note: 'Kreativität + Balance = Signature Roll'
      },

      /* ── Präsentation & Abflämmen ── */
      {
        cat: 'Präsentation & Abflämmen', name: 'Abflämmen (Blowtorch)', desc: 'Nướng sơ (đèn khò)', type: 'sushi',
        ingredients: ['Bunsenbrenner / Küchenbrenner', 'Kurz + gleichmäßig', 'Mayo / Soße vorher auftragen', 'Sicherheitsabstand einhalten'],
        note: 'Flamed Sushi = karamellisiert + rauchig'
      },
      {
        cat: 'Präsentation & Abflämmen', name: 'Anrichten (Plating)', desc: 'Trình bày đĩa', type: 'sushi',
        ingredients: ['Ungerade Anzahl (3, 5, 7)', 'Negative Space lassen', 'Soße als Dekoration', 'Essbare Blüten / Mikrogrün'],
        note: 'Japanische Ästhetik: weniger ist mehr'
      },
      {
        cat: 'Präsentation & Abflämmen', name: 'Toppings & Saucen', desc: 'Topping & Sốt', type: 'sushi',
        ingredients: ['Spicy Mayo', 'Unagi-Sauce (süß)', 'Ponzu (Zitrus-Soja)', 'Tobiko / Sesam / Schnittlauch'],
        note: 'Topping vollendet den Geschmack'
      },
    ];
    SUSHI_ITEMS.forEach(item => DRINKS.push(item));

    /* ═══════════════════════════════════════════════
       HOT KITCHEN – chip-quiz items
    ═══════════════════════════════════════════════ */
    const HOTK_ITEMS = [
      /* ── Zutaten & Mise en Place ── */
      {
        cat: 'Zutaten & Mise en Place', name: 'Mise en Place Küche', desc: 'Chuẩn bị bếp', type: 'hotkitchen',
        ingredients: ['Alle Zutaten abwiegen', 'Gemüse vorschneiden', 'Saucen bereitstellen', 'Arbeitsfläche sauber halten'],
        note: 'Mise en place = alles an seinem Platz'
      },
      {
        cat: 'Zutaten & Mise en Place', name: 'Asiatische Grundzutaten', desc: 'Nguyên liệu cơ bản Châu Á', type: 'hotkitchen',
        ingredients: ['Sojasauce (hell/dunkel)', 'Sesamöl', 'Mirin & Sake (Kochen)', 'Ingwer & Knoblauch', 'Dashi (Fischbrühe)'],
        note: '5 Grundzutaten = 80% aller Gerichte'
      },
      {
        cat: 'Zutaten & Mise en Place', name: 'Schneidetechniken Küche', desc: 'Kỹ thuật cắt bếp', type: 'hotkitchen',
        ingredients: ['Julienne (feine Streifen)', 'Brunoise (kleine Würfel)', 'Chiffonade (Kräuter-Streifen)', 'Krallentechnik (Finger schützen)'],
        note: 'Gleichmäßig schneiden = gleichmäßig garen'
      },

      /* ── Protein kochen ── */
      {
        cat: 'Protein kochen', name: 'Hähnchen zubereiten', desc: 'Chế biến gà', type: 'hotkitchen',
        ingredients: ['Kerntemperatur 75°C', 'Yakitori: Spieße + Tare-Sauce', 'Teriyaki: glasieren beim Braten', 'Panko-Panade für Katsu'],
        note: 'Geflügel IMMER durchgaren!'
      },
      {
        cat: 'Protein kochen', name: 'Garnelen & Meeresfrüchte', desc: 'Tôm & hải sản', type: 'hotkitchen',
        ingredients: ['Garnelen: 2–3 Min. pro Seite', 'Rosa + C-Form = fertig', 'Tempura: 180°C Öltemperatur', 'Jakobsmuscheln: scharf anbraten'],
        note: 'Überkochen = gummig → Timing ist alles'
      },
      {
        cat: 'Protein kochen', name: 'Rindfleisch & Tataki', desc: 'Bò & Tataki', type: 'hotkitchen',
        ingredients: ['Tataki: außen scharf anbraten', 'Innen roh (rare)', 'In Eiswasser stoppen', 'Dünn aufschneiden, mit Ponzu'],
        note: 'Tataki = japanische "Sear"-Technik'
      },

      /* ── Asiatische Saucen ── */
      {
        cat: 'Asiatische Saucen', name: 'Teriyaki-Sauce', desc: 'Sốt Teriyaki', type: 'hotkitchen',
        ingredients: ['Sojasauce', 'Mirin', 'Sake', 'Zucker', 'Einkochen bis dickflüssig'],
        note: 'Teri = Glanz, Yaki = gegrillt'
      },
      {
        cat: 'Asiatische Saucen', name: 'Ponzu & Yuzu-Sauce', desc: 'Sốt Ponzu & Yuzu', type: 'hotkitchen',
        ingredients: ['Sojasauce + Zitrus (Yuzu)', 'Dashi', 'Reisessig', 'Frisch & leicht'],
        note: 'Perfekt zu Sashimi & Tataki'
      },
      {
        cat: 'Asiatische Saucen', name: 'Spicy Mayo & Sriracha', desc: 'Sốt Mayo cay & Sriracha', type: 'hotkitchen',
        ingredients: ['Japanische Mayo (Kewpie)', 'Sriracha / Chili', 'Mischen nach Geschmack', 'Für Sushi-Topping & Dips'],
        note: 'Kewpie Mayo = cremiger als westliche Mayo'
      },

      /* ── Reis & Beilagen ── */
      {
        cat: 'Reis & Beilagen', name: 'Japanischer Reis', desc: 'Cơm Nhật', type: 'hotkitchen',
        ingredients: ['Kurzkörniger Reis', 'Waschen bis Wasser klar', '1:1 Wasser-Verhältnis', 'Reiskocher oder Topf + Deckel'],
        note: 'Reis = Seele der japanischen Küche'
      },
      {
        cat: 'Reis & Beilagen', name: 'Gebratener Reis (Chahan)', desc: 'Cơm chiên (Chahan)', type: 'hotkitchen',
        ingredients: ['Kalter Reis vom Vortag', 'Heißer Wok / Pfanne', 'Ei, Gemüse, Protein', 'Sojasauce zum Schluss'],
        note: 'Heißer Wok + kalter Reis = perfektes Chahan'
      },
      {
        cat: 'Reis & Beilagen', name: 'Edamame & Beilagen', desc: 'Edamame & Món phụ', type: 'hotkitchen',
        ingredients: ['Edamame: blanchieren + Meersalz', 'Wakame-Salat: Seetang + Sesam', 'Miso-Suppe: Dashi + Miso + Tofu', 'Gyoza: anbraten + dämpfen'],
        note: 'Beilagen runden das Menü ab'
      },

      /* ── HACCP & Lebensmittelsicherheit ── */
      {
        cat: 'HACCP & Lebensmittelsicherheit', name: 'Kerntemperaturen', desc: 'Nhiệt độ tâm', type: 'hotkitchen',
        ingredients: ['Geflügel: 75°C', 'Schwein: 70°C', 'Rind (medium): 55°C', 'Fisch: 63°C (durchgegart)'],
        note: 'Thermometer = Pflicht in der Profiküche'
      },
      {
        cat: 'HACCP & Lebensmittelsicherheit', name: 'Kreuzkontamination', desc: 'Nhiễm chéo', type: 'hotkitchen',
        ingredients: ['Schneidebretter trennen (Farben)', 'Roh + Gekocht nie zusammen', 'Hände waschen zwischen Zutaten', 'Getrennte Lagerung im Kühlschrank'],
        note: 'Rot = Fleisch, Blau = Fisch, Grün = Gemüse'
      },
      {
        cat: 'HACCP & Lebensmittelsicherheit', name: 'Allergene in der Küche', desc: 'Chất gây dị ứng', type: 'hotkitchen',
        ingredients: ['14 Hauptallergene kennen', 'Soja, Sesam, Fisch, Weizen häufig', 'Separate Zubereitung', 'Gäste vor dem Servieren informieren'],
        note: 'Allergene können lebensbedrohlich sein!'
      },
    ];
    HOTK_ITEMS.forEach(item => DRINKS.push(item));

    /* ═══════════════════════════════════════
       SERVICE DATA — Kỹ năng phục vụ
    ═══════════════════════════════════════ */
    const SERVICE_ITEMS = [
      /* ── Cơ bản ── */
      {
        cat: 'Tisch-Setup & Mise en Place', name: 'Tisch eindecken', desc: 'Trải khăn bàn phẳng lì, đặt nĩa bên trái, dao bên phải cách mép bàn 2cm, lau bóng ly rượu vang.', type: 'service',
        ingredients: ['Trải khăn bàn phẳng', 'Nĩa bên trái, dao bên phải (cách mép 2cm)', 'Lau bóng ly rượu vang (không vết ố)', 'Gấp khăn ăn & đặt lên bàn', 'Lọ hoa / trang trí ở giữa'],
        note: 'Mise en Place = Mọi thứ đúng vị trí trước khi khách đầu tiên đến'
      },
      {
        cat: 'Serviertechnik & Tragetechnik', name: 'Tablett & Tellerservice', desc: 'Cầm khay đồ uống bằng một tay vững vàng, phục vụ đĩa thức ăn từ bên phải khách hàng.', type: 'service',
        ingredients: ['Giữ thăng bằng khay trên một tay', 'Phục vụ đồ uống từ bên phải', 'Đặt đĩa từ phải, dọn từ trái', 'Kỹ thuật 3 đĩa (trên một cánh tay)', 'Không bao giờ với qua người khách'],
        note: 'Phục vụ từ phải, dọn từ trái — quy tắc cơ bản'
      },
      {
        cat: 'Kassieren & Rechnungsabwicklung', name: 'Bezahlung abwickeln', desc: 'In hóa đơn, mang ra bàn trong kẹp da, quẹt thẻ và đếm tiền thối lại chính xác kèm lời cảm ơn.', type: 'service',
        ingredients: ['Đưa hóa đơn trong kẹp da', 'Xử lý thẻ EC/tín dụng tại bàn', 'Đếm tiền thối to rõ', 'Nhận tiền tip kín đáo', 'Luôn cảm ơn & chào tạm biệt'],
        note: 'Sự hiếu khách không kết thúc khi thanh toán'
      },
      /* ── Trung bình ── */
      {
        cat: 'Bestellannahme & Menükenntnis', name: 'Bestellung aufnehmen', desc: 'Giải đáp rõ ràng thành phần của món súp để khách yên tâm rằng món này không chứa gluten.', type: 'service',
        ingredients: ['Thuộc lòng thực đơn', 'Nêu rõ chất gây dị ứng & thành phần', 'Đưa ra gợi ý cho khách', 'Nhắc lại order để xác nhận', 'Ghi yêu cầu đặc biệt & báo bếp'],
        note: 'Chất gây dị ứng có thể nguy hiểm tính mạng — luôn nghiêm túc!'
      },
      {
        cat: 'Begrüßung & Platzierung', name: 'Gäste empfangen', desc: 'Đón khách niềm nở từ cửa, hỏi khách đi mấy người và chủ động kéo ghế mời khách ngồi.', type: 'service',
        ingredients: ['Giao tiếp bằng mắt & mỉm cười khi khách vào', 'Chào đón nồng nhiệt (Guten Abend!)', 'Hỏi số người & đặt bàn', 'Dẫn khách đến bàn & kéo ghế', 'Đưa thực đơn & gợi ý đồ uống'],
        note: 'Ấn tượng đầu tiên quyết định — trong vòng 3 giây!'
      },
      /* ── Tốt ── */
      {
        cat: 'Weinservice am Tisch', name: 'Wein öffnen & servieren', desc: 'Dùng đồ khui mở chai rượu vang tại bàn mượt mà, rót một ít cho chủ tiệc nếm trước, sau đó rót cho toàn bàn theo thứ tự.', type: 'service',
        ingredients: ['Trình bày chai (nhãn hướng khách)', 'Mở nắp bằng dao bồi bàn gọn gàng', 'Kiểm tra nút chai kín đáo & đặt lên khay', 'Rót thử cho chủ tiệc nếm', 'Phục vụ theo chiều kim đồng hồ, chủ tiệc cuối cùng'],
        note: 'Không bao giờ rót quá 2/3 ly — vang đỏ ít hơn vang trắng'
      },
      {
        cat: 'Reklamationsmanagement', name: 'Beschwerden professionell lösen', desc: 'Bình tĩnh lắng nghe khách phàn nàn, nhanh chóng đổi món và tặng một ly trà để xoa dịu tình hình.', type: 'service',
        ingredients: ['Lắng nghe bình tĩnh, không ngắt lời', 'Xin lỗi chân thành', 'Đề xuất giải pháp ngay (đổi món, giảm giá)', 'Báo quản lý khi leo thang', 'Theo dõi: hỏi lại mức độ hài lòng'],
        note: 'Phương pháp LEARN: Lắng nghe → Đồng cảm → Xin lỗi → Hành động → Thông báo'
      },
      {
        cat: 'Tableside Service', name: 'Live-Zubereitung am Tisch', desc: 'Biểu diễn trộn salad hoặc khò lửa trước mặt khách hàng để tạo trải nghiệm ẩm thực ấn tượng.', type: 'service',
        ingredients: ['Chuẩn bị xe phục vụ (Guéridon)', 'Trộn nước sốt salad trước mặt khách', 'Biểu diễn flambé an toàn', 'Phi lê cá / cắt bít tết', 'Bày đĩa sushi trực tiếp'],
        note: 'Biểu diễn + An toàn = Tableside Service hoàn hảo'
      },
      {
        cat: 'VIP & Regulars Management', name: 'Stammgäste & VIP betreuen', desc: 'Pha đúng ly bạc xỉu ít ngọt cho khách quen mà không cần hỏi, nhớ tên và sở thích của từng khách.', type: 'service',
        ingredients: ['Chào khách quen bằng tên', 'Nhớ sở thích & đồ uống yêu thích', 'Giữ bàn quen / chỗ ngồi ưa thích', 'Tặng bất ngờ (ví dụ: tráng miệng)', 'Hỏi phản hồi kín đáo'],
        note: 'Khách quen là đại sứ tốt nhất — gắn kết cá nhân là vàng'
      },
    ];
    SERVICE_ITEMS.forEach(item => DRINKS.push(item));

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
      if (el) el.textContent = T('title_' + type);
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
      if (!filterEl) return;
      [...filterEl.querySelectorAll('.cat-btn:not([data-cat="all"])')].forEach(b => b.remove());
      // Update "All" button text
      const allBtn = filterEl.querySelector('.cat-btn[data-cat="all"]');
      if (allBtn) allBtn.textContent = T('cat_all');
      const filtered = getFilteredByType(browseType);
      const cats = [...new Set(filtered.map(d => d.cat))];
      cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        btn.dataset.cat = cat;
        btn.textContent = trCat(cat);
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
      drink: 'linear-gradient(135deg, #1e3a5f, #2563eb)',
      food: 'linear-gradient(135deg, #334155, #475569)',
      wirtschaft: 'linear-gradient(135deg, #059669, #10b981)',
      operations: 'linear-gradient(135deg, #d97706, #f59e0b)',
      fachkompetenz: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
      compliance: 'linear-gradient(135deg, #dc2626, #ef4444)',
      sales: 'linear-gradient(135deg, #e11d48, #f43f5e)',
      softskills: 'linear-gradient(135deg, #0891b2, #22d3ee)',
      sushi: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
      hotkitchen: 'linear-gradient(135deg, #b45309, #f97316)',
    };
    const TYPE_EMOJIS = {
      drink: '🍹', food: '🍽️', wirtschaft: '💰', operations: '🔧',
      fachkompetenz: '🍸', compliance: '⚖️', sales: '📢',
      softskills: '🌐', sushi: '🍣', hotkitchen: '🔥',
    };
    const CARD_GRADIENTS = {
      // Drink categories
      'Đồ uống không cồn': 'linear-gradient(135deg, #06b6d4, #0891b2)',
      'Đồ uống nóng': 'linear-gradient(135deg, #92400e, #b45309)',
      'Cocktail không cồn': 'linear-gradient(135deg, #059669, #10b981)',
      'Bia': 'linear-gradient(135deg, #d97706, #f59e0b)',
      'Cocktail có cồn': 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
      'Rượu & Highball': 'linear-gradient(135deg, #dc2626, #ef4444)',
      // Food categories
      'Khai vị': 'linear-gradient(135deg, #f97316, #fb923c)',
      'Chay': 'linear-gradient(135deg, #16a34a, #22c55e)',
      'Thịt': 'linear-gradient(135deg, #dc2626, #ef4444)',
      'Hải sản': 'linear-gradient(135deg, #0284c7, #38bdf8)',
      'Mì & Cơm': 'linear-gradient(135deg, #ca8a04, #eab308)',
      'Salad': 'linear-gradient(135deg, #15803d, #4ade80)',
      'Cơm cuộn & Đặc biệt': 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
      'Tráng miệng': 'linear-gradient(135deg, #db2777, #f472b6)',
      'Bento Box': 'linear-gradient(135deg, #9333ea, #a855f7)',
    };
    const CARD_EMOJIS = {
      // Drink
      'Đồ uống không cồn': '🥤',
      'Đồ uống nóng': '☕',
      'Cocktail không cồn': '🍹',
      'Bia': '🍺',
      'Cocktail có cồn': '🍸',
      'Rượu & Highball': '🥃',
      // Food
      'Khai vị': '🥢',
      'Chay': '🥬',
      'Thịt': '🍗',
      'Hải sản': '🦐',
      'Mì & Cơm': '🍜',
      'Salad': '🥗',
      'Cơm cuộn & Đặc biệt': '🍣',
      'Tráng miệng': '🍡',
      'Bento Box': '🍱',
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

    function renderGrid(cat, query) {
      const grid = document.getElementById('drink-grid');
      if (!grid) return;
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
        grid.innerHTML = `<div class="empty-msg">${query ? T('no_results') : T('no_drinks')}</div>`;
        return;
      }
      const scores = loadScores();
      const customNames = new Set(loadCustomDrinks().map(d => d.name));
      grid.innerHTML = items.map(d => {
        const isCustom = customNames.has(d.name);
        const sc = scores[d.name];
        const mastery = getMastery(d.name);
        const MI = [
          { cls: 'score-none', label: T('score_none') },
          { cls: 'score-bad', label: T('score_bad') },
          { cls: 'score-mid', label: T('score_mid') },
          { cls: 'score-good', label: T('score_good') }
        ][mastery];
        const pctStr = (sc && sc.total > 0) ? ` · ${Math.round(sc.correct / sc.total * 100)}%` : '';
        const scoreBadge = `<span class="weak-score ${MI.cls}">${MI.label}${pctStr}</span>`;
        const cardType = d.type || 'drink';
        const isDrinkOrFood = cardType === 'drink' || cardType === 'food' || cardType === 'service';
        // Front card content
        const hasThumb = isDrinkOrFood && d.img;
        const thumbColHTML = hasThumb
          ? `<div class="card-thumb-col" onclick="event.stopPropagation();openFullImage('${d.img.replace(/'/g, "\\'")}','${d.name.replace(/'/g, "\\'")}')"><img src="${d.img}" alt="${d.name}" loading="lazy" onerror="this.closest('.card-with-img')?.classList.remove('card-with-img');this.parentElement.remove()"></div>`
          : '';
        const contentHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
        <div class="cat-badge" style="margin-bottom:0;${getCatStyle(d.cat)}">${trCat(d.cat)}</div>
        ${scoreBadge}
      </div>
      <h3 style="margin-bottom:4px;">${d.name}${isCustom ? ` <span style="font-size:0.65rem;background:var(--ac-light);color:var(--ac);padding:2px 7px;border-radius:8px;vertical-align:middle;">${T('custom_badge')}</span>` : ''}</h3>
      <p class="desc">${trVi(d.desc)}</p>
      <ul class="ingredients-list">
        ${d.ingredients.map(ing => `<li>${trVi(ing)}</li>`).join('')}
      </ul>
      ${d.glass ? `<div class="glass-note">
        <span>${cardType === 'food' ? '🍽️' : '🥃'} ${trVi(d.glass)}</span>
      </div>` : ''}
      ${d.note ? `<div class="note-text">💡 ${trVi(d.note)}</div>` : ''}
      ${isCustom ? `<div class="card-actions">
        <button class="ca-btn edit" onclick="event.stopPropagation();openEditDrink(${JSON.stringify(d.name).replace(/"/g, '&quot;')})">${T('btn_edit')}</button>
        <button class="ca-btn del"  onclick="event.stopPropagation();deleteCardDrink(${JSON.stringify(d.name).replace(/"/g, '&quot;')})">${T('btn_del')}</button>
      </div>` : ''}`;
        const frontHTML = hasThumb
          ? `<div class="card-with-img"><div class="card-content">${contentHTML}</div>${thumbColHTML}</div>`
          : contentHTML;

        /* ── Back card: same layout as front but in Vietnamese (original data) ── */
        const canUpload = isDrinkOrFood && isAdmin();
        const uploadBtnHTML = canUpload
          ? `<button class="img-upload-btn" onclick="event.stopPropagation();uploadDrinkImage(${JSON.stringify(d.name).replace(/"/g, '&quot;')})">${d.img ? T('img_change') : T('img_add')}</button>`
          : '';
        const deleteBtnHTML = (canUpload && d.img)
          ? `<button class="img-delete-btn" onclick="event.stopPropagation();deleteDrinkImage(${JSON.stringify(d.name).replace(/"/g, '&quot;')})">🗑</button>`
          : '';
        const backThumbHTML = hasThumb
          ? `<div class="card-thumb-col"><img src="${d.img}" alt="${d.name}" loading="lazy" onerror="this.parentElement.remove()"></div>`
          : '';
        const backContentHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
        <div class="cat-badge" style="margin-bottom:0;${getCatStyle(d.cat)}">${d.cat}</div>
        ${scoreBadge}
      </div>
      <h3 style="margin-bottom:4px;">${d.name}${isCustom ? ` <span style="font-size:0.65rem;background:var(--ac-light);color:var(--ac);padding:2px 7px;border-radius:8px;vertical-align:middle;">${T('custom_badge')}</span>` : ''}</h3>
      <p class="desc">${d.desc}</p>
      <ul class="ingredients-list">
        ${d.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
      ${d.glass ? `<div class="glass-note">
        <span>${cardType === 'food' ? '🍽️' : '🥃'} ${d.glass}</span>
      </div>` : ''}
      ${d.note ? `<div class="note-text">💡 ${d.note}</div>` : ''}
      ${uploadBtnHTML}
      ${deleteBtnHTML}
      ${isAdmin() ? `<button class="card-edit-btn" onclick="event.stopPropagation();openEditCard(${JSON.stringify(d.name).replace(/"/g, '&quot;')})">✏️ Sửa</button>` : ''}`;
        const backHTML = hasThumb
          ? `<div class="card-with-img"><div class="card-content">${backContentHTML}</div>${backThumbHTML}</div>`
          : backContentHTML;
        return `
    <div class="flip-container fade-in" onclick="this.classList.toggle('flipped')">
      <div class="flip-inner">
        <div class="flip-front drink-card" style="position:relative;">
          <span class="flip-hint">🇩🇪 Deutsch — tippen zum Umdrehen</span>
          ${frontHTML}
        </div>
        <div class="flip-back drink-card">
          <span class="flip-hint">🇻🇳 Tiếng Việt — nhấn để lật lại</span>
          ${backHTML}
        </div>
      </div>
    </div>`;
      }).join('');
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

    function buildTrainSettings() {
      const toggle = document.getElementById('train-type-toggle');
      if (!toggle) return;
      rebuildTrainCatChecks();
      updateWeakCount();
      // Sync toggle UI to current trainType
      toggle.querySelectorAll('.type-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.type === trainType);
      });
    }

    function rebuildTrainCatChecks() {
      const container = document.getElementById('cat-checks');
      if (!container) return;
      const base = getFilteredByType(trainType);
      const cats = [...new Set(base.map(d => d.cat))];
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
      const el = document.getElementById('weak-count');
      if (!el) return;
      const cats = getSelectedCats();
      const base = getFilteredByType(trainType);
      const pool = base.filter(d => cats.includes(d.cat));
      const weakPool = pool.filter(d => isWeak(d.name));
      el.textContent = `(${weakPool.length}/${pool.length} ${T('weak_suffix')})`;
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

    /* ═══════════════════ QUIZ DATA ═══════════════════ */
    const QUIZ = {
      // 🍣 Sushi & Bếp lạnh
      mise_en_place_cold: [
        { q: { de: "Nori-Blätter werden feucht – was tust du?", vn: "Rong biển bị ẩm – bạn làm gì?" }, opts: { de: ["Sofort wegwerfen", "In Alufolie bei Raumtemperatur lagern", "In luftdichter Box mit Silica-Trockenmittel lagern", "Im Kühlschrank nass lagern"], vn: ["Vứt đi ngay", "Bọc giấy nhôm để nhiệt độ phòng", "Hộp kín với túi hút ẩm Silica", "Để tủ lạnh ướt"] }, ans: 2 },
        { q: { de: "Wie lange vor Service soll die Station komplett eingerichtet sein?", vn: "Trước giờ phục vụ bao lâu cần setup xong trạm?" }, opts: { de: ["5 Minuten", "15–30 Minuten", "1 Stunde", "Wenn der erste Gast kommt"], vn: ["5 phút", "15–30 phút", "1 tiếng", "Khi khách đầu tiên đến"] }, ans: 1 },
        { q: { de: "Was gehört NICHT zur Mise en Place der Kaltküche?", vn: "Cái nào KHÔNG thuộc mise en place bếp lạnh?" }, opts: { de: ["Sushi-Reis vorbereiten", "Wok anheizen", "Nori-Blätter bereitstellen", "Avocado schneiden"], vn: ["Chuẩn bị cơm sushi", "Làm nóng chảo wok", "Chuẩn bị rong biển Nori", "Cắt bơ"] }, ans: 1 },
        { q: { de: "Avocado wird braun – wie verhinderst du das?", vn: "Bơ bị thâm – cách phòng tránh?" }, opts: { de: ["Mit Zitronensaft beträufeln und abdecken", "Im warmen Wasser lagern", "Einfrieren", "Mit Mayonnaise bestreichen"], vn: ["Nhỏ nước chanh và bọc kín", "Ngâm nước ấm", "Đông đá", "Phết mayonnaise"] }, ans: 0 }
      ],
      sushi_reis: [
        { q: { de: "Welche Temperatur sollte Sushi-Reis beim Formen haben?", vn: "Cơm sushi nên ở nhiệt độ bao nhiêu khi nắm?" }, opts: { de: ["Heiß direkt vom Herd (~90°C)", "Körpertemperatur (~37°C)", "Zimmertemperatur (~22°C)", "Gekühlt (~10°C)"], vn: ["Nóng ngay từ nồi (~90°C)", "Nhiệt độ cơ thể (~37°C)", "Nhiệt độ phòng (~22°C)", "Lạnh (~10°C)"] }, ans: 1 },
        { q: { de: "Was bewirkt der Reisessig im Sushi-Reis?", vn: "Giấm gạo trong cơm sushi có tác dụng gì?" }, opts: { de: ["Nur Geschmack", "Konservierung, Glanz und Bindung", "Macht den Reis weicher", "Verhindert Kleben an der Matte"], vn: ["Chỉ tạo vị", "Bảo quản, tạo bóng và kết dính", "Làm cơm mềm hơn", "Chống dính mành cuốn"] }, ans: 1 },
        { q: { de: "Wie lange ruht Sushi-Reis nach dem Kochen vor dem Würzen?", vn: "Cơm sau khi nấu cần nghỉ bao lâu trước khi trộn giấm?" }, opts: { de: ["Gar nicht – sofort würzen", "5 Minuten", "10–15 Minuten abdampfen lassen", "1 Stunde abkühlen"], vn: ["Không cần – trộn ngay", "5 phút", "Để thoát hơi 10–15 phút", "Để nguội 1 tiếng"] }, ans: 2 },
        { q: { de: "Warum fächert man Sushi-Reis?", vn: "Tại sao phải quạt cơm sushi?" }, opts: { de: ["Für den Geschmack", "Um schnell auf Körpertemperatur abzukühlen & Glanz zu erzeugen", "Um Feuchtigkeit hinzuzufügen", "Tradition ohne Funktion"], vn: ["Để tạo vị", "Làm nguội nhanh đến nhiệt độ cơ thể & tạo bóng", "Để thêm độ ẩm", "Truyền thống không có tác dụng"] }, ans: 1 }
      ],
      nigiri_maki_basics: [
        { q: { de: "Wie viel Gramm Reis verwendet man typischerweise für ein Nigiri?", vn: "Một miếng Nigiri thường dùng bao nhiêu gram cơm?" }, opts: { de: ["10–15g", "18–22g", "30–35g", "40–50g"], vn: ["10–15g", "18–22g", "30–35g", "40–50g"] }, ans: 1 },
        { q: { de: "Hosomaki hat wie viele Nori-Blatt Breiten?", vn: "Hosomaki dùng bao nhiêu chiều rộng rong biển?" }, opts: { de: ["Ganze Nori", "Halbe Nori", "Viertel Nori", "Zwei Nori überlappt"], vn: ["Cả tờ Nori", "Nửa tờ Nori", "Một phần tư tờ", "Hai tờ chồng nhau"] }, ans: 1 },
        { q: { de: "Maki wird nach dem Rollen sofort geschnitten – richtig?", vn: "Maki cuốn xong cắt ngay – đúng không?" }, opts: { de: ["Ja, immer sofort", "Nein, 30 Sekunden ruhen lassen damit die Nori haftet", "Nein, erst nach 5 Minuten im Kühlschrank", "Egal, wann man schneidet"], vn: ["Đúng, luôn cắt ngay", "Không, để 30 giây cho Nori dính", "Không, phải vào tủ lạnh 5 phút trước", "Không quan trọng"] }, ans: 1 },
        { q: { de: "Was verhindert, dass Gunkan-Nori sich aufrollt?", vn: "Cái gì giúp Nori Gunkan không bị bung?" }, opts: { de: ["Viel Wasabi als Kleber", "Einen Reiskorn als Kleber an den Naht drücken", "Sofort in den Kühlschrank stellen", "Nichts, es löst sich immer"], vn: ["Nhiều Wasabi làm keo", "Một hạt cơm làm keo ở mép nối", "Cho vào tủ lạnh ngay", "Không có gì, lúc nào cũng bung"] }, ans: 1 }
      ],
      creative_rolls: [
        { q: { de: "Ein Inside-Out Roll (Uramaki) hat Reis außen – wie verhindert man Kleben?", vn: "Inside-Out roll có cơm ở ngoài – cách chống dính?" }, opts: { de: ["Reis mit Öl einreiben", "Plastikfolie auf der Bambusmatte", "Nori mit Wasser befeuchten", "Dünne Fettschicht auf dem Reis"], vn: ["Thoa dầu vào cơm", "Bọc nilon lên mành tre", "Làm ẩm Nori bằng nước", "Một lớp mỏng chất béo lên cơm"] }, ans: 1 },
        { q: { de: "Dragon Roll: Welcher Belag wird aufgefächert oben drauf gelegt?", vn: "Dragon Roll: Topping nào được đắp lên theo kiểu xếp vảy?" }, opts: { de: ["Thunfisch", "Lachs", "Avocado", "Gurke"], vn: ["Cá ngừ", "Cá hồi", "Bơ", "Dưa chuột"] }, ans: 2 },
        { q: { de: "Crunchy Roll: Was macht den knusprigen Effekt?", vn: "Crunchy Roll: Cái gì tạo độ giòn?" }, opts: { de: ["Gebratener Reis oben", "Panko-Brösel oder Tempura-Flakes", "Cracker-Stück innen", "Frittierter Nori"], vn: ["Cơm chiên bên trên", "Vụn Panko hoặc Tempura Flakes", "Bánh cracker bên trong", "Nori chiên giòn"] }, ans: 1 },
        { q: { de: "Rainbow Roll hat bunt belegte Scheiben – in welcher Reihenfolge legt man sie?", vn: "Rainbow Roll có nhiều màu cá – sắp xếp theo thứ tự nào?" }, opts: { de: ["Zufällig", "Nach Gewicht", "Farblich abwechselnd für visuellen Effekt", "Alphabetisch nach Namen"], vn: ["Ngẫu nhiên", "Theo trọng lượng", "Xen kẽ màu sắc cho hiệu ứng thị giác", "Theo bảng chữ cái"] }, ans: 2 }
      ],
      fish_knowledge: [
        { q: { de: "Wie erkennt man frischen Lachs?", vn: "Nhận biết cá hồi tươi như thế nào?" }, opts: { de: ["Starker Fischgeruch, weiches Fleisch", "Neutraler Geruch, festes elastisches Fleisch, leuchtend orange", "Brauner Rand, leicht schleimig", "Meeresgeruch, blass"], vn: ["Mùi cá nồng, thịt mềm", "Mùi trung tính, thịt chắc đàn hồi, màu cam tươi", "Viền nâu, hơi nhớt", "Mùi biển, màu nhạt"] }, ans: 1 },
        { q: { de: "Sushi-Fisch muss vor Verwendung eingefroren worden sein – warum?", vn: "Cá làm sushi phải được đông đá trước – tại sao?" }, opts: { de: ["Für besseren Geschmack", "Zur Abtötung von Parasiten (z.B. Anisakis)", "Um die Farbe zu verbessern", "Gesetzlich nicht vorgeschrieben"], vn: ["Vì vị ngon hơn", "Để tiêu diệt ký sinh trùng (ví dụ Anisakis)", "Để cải thiện màu sắc", "Luật không yêu cầu"] }, ans: 1 },
        { q: { de: "Bei welcher Temperatur lagert man Sushi-Fisch?", vn: "Cá sushi được bảo quản ở nhiệt độ bao nhiêu?" }, opts: { de: ["0–2°C", "4–7°C", "10–12°C", "-18°C immer"], vn: ["0–2°C", "4–7°C", "10–12°C", "-18°C luôn luôn"] }, ans: 0 },
        { q: { de: "Hamachi ist was für ein Fisch?", vn: "Hamachi là loại cá gì?" }, opts: { de: ["Lachs (Nordsee)", "Japanische Gelbschwanzmakrele", "Roter Thunfisch", "Dorade"], vn: ["Cá hồi (Bắc Hải)", "Cá đuôi vàng Nhật Bản", "Cá ngừ đỏ", "Cá tráp"] }, ans: 1 }
      ],
      // 🔥 Hot Kitchen
      asiat_zutaten_prep: [
        { q: { de: "Wie schneidet man Ingwer am besten für Saucen?", vn: "Gừng nên thái như thế nào để làm sốt?" }, opts: { de: ["Grob hacken", "Fein reiben oder sehr fein würfeln", "In dicke Scheiben", "Ganz lassen"], vn: ["Băm thô", "Mài nhuyễn hoặc thái hạt lựu rất nhỏ", "Thái lát dày", "Để nguyên"] }, ans: 1 },
        { q: { de: "Zitronengras: Welcher Teil wird verwendet?", vn: "Sả: Phần nào được sử dụng?" }, opts: { de: ["Das grüne obere Ende", "Der weiße untere Teil (10cm vom Boden)", "Die Wurzel", "Alle Teile gleich"], vn: ["Phần lá xanh trên", "Phần trắng dưới (10cm từ gốc)", "Rễ cây", "Tất cả đều như nhau"] }, ans: 1 },
        { q: { de: "Wann gibt man Thai-Basilikum zu einem Curry?", vn: "Cho húng quế Thái vào cà ri khi nào?" }, opts: { de: ["Zu Beginn des Kochens", "In der Mitte", "Ganz am Ende (Abschalten der Hitze)", "Beim Servieren auf dem Teller"], vn: ["Từ đầu khi nấu", "Ở giữa", "Cuối cùng (tắt lửa)", "Khi dọn ra đĩa"] }, ans: 2 },
        { q: { de: "Frische Kokosmilch trennt sich – was tun?", vn: "Cốt dừa tươi bị tách lớp – xử lý thế nào?" }, opts: { de: ["Wegwerfen", "Gut schütteln oder umrühren", "Aufkochen bis alles schmilzt", "Nur die flüssige Schicht verwenden"], vn: ["Bỏ đi", "Lắc đều hoặc khuấy", "Đun sôi cho tan hết", "Chỉ dùng lớp lỏng"] }, ans: 1 }
      ],
      haccp_hot_kitchen: [
        { q: { de: "Welche Kerntemperatur muss Hähnchenfleisch mindestens erreichen?", vn: "Thịt gà phải đạt nhiệt độ lõi tối thiểu bao nhiêu?" }, opts: { de: ["60°C", "72°C", "80°C", "90°C"], vn: ["60°C", "72°C", "80°C", "90°C"] }, ans: 1 },
        { q: { de: "Farbkodierte Bretter: Welche Farbe für rohes Fleisch?", vn: "Thớt phân màu: Màu nào dành cho thịt sống?" }, opts: { de: ["Grün", "Gelb", "Rot", "Blau"], vn: ["Xanh lá", "Vàng", "Đỏ", "Xanh dương"] }, ans: 2 },
        { q: { de: "Was ist Kreuzkontamination?", vn: "Lây nhiễm chéo là gì?" }, opts: { de: ["Zwei Gäste bestellen dasselbe", "Übertragung von Keimen zwischen rohen und fertigen Speisen", "Falsche Portionsgröße", "Zu heiß servieren"], vn: ["Hai khách order cùng món", "Vi khuẩn lây từ thực phẩm sống sang thực phẩm chín", "Sai định lượng", "Phục vụ quá nóng"] }, ans: 1 },
        { q: { de: "Gekochter Reis darf wie lange bei Raumtemperatur stehen?", vn: "Cơm đã nấu được để nhiệt độ phòng tối đa bao lâu?" }, opts: { de: ["Unbegrenzt", "30 Minuten", "2 Stunden", "8 Stunden"], vn: ["Không giới hạn", "30 phút", "2 tiếng", "8 tiếng"] }, ans: 2 }
      ],
      // ⚙️ Operations
      mise_en_place: [
        { q: { de: "Zitrusfrüchte für Garnitur: Wann schneidet man sie vor?", vn: "Trái cây trang trí: Cắt sẵn khi nào?" }, opts: { de: ["Tage vorher einfrieren", "Maximal 2–3 Stunden vor Service", "Am Vortag abends", "Erst wenn bestellt"], vn: ["Đông đá nhiều ngày trước", "Tối đa 2–3 tiếng trước ca", "Tối hôm trước", "Khi nào mới gọi mới cắt"] }, ans: 1 },
        { q: { de: "Was prüft man als erstes beim Bar-Setup?", vn: "Kiểm tra cái gì đầu tiên khi setup quầy bar?" }, opts: { de: ["Social-Media-Posts", "Sauberkeit, Vollständigkeit der Grundausstattung, Eisvorrat", "Musik-Playlist", "Kassensystem"], vn: ["Bài đăng mạng xã hội", "Vệ sinh, đầy đủ trang thiết bị cơ bản, trữ lượng đá", "Playlist nhạc", "Phần mềm tính tiền"] }, ans: 1 },
        { q: { de: "Sirup-Flasche ist leer – wann auffüllen?", vn: "Chai siro hết – nên châm khi nào?" }, opts: { de: ["Erst wenn ein Gast bestellt", "Während des Service wenn es ruhiger wird", "Immer vor Schichtbeginn prüfen und auffüllen", "Nie – Sirup ist unwichtig"], vn: ["Khi khách gọi mới châm", "Trong ca khi vắng khách", "Luôn kiểm tra và châm trước khi ca bắt đầu", "Không cần – siro ít quan trọng"] }, ans: 2 },
        { q: { de: "Wofür steht 'Mise en Place'?", vn: "'Mise en Place' có nghĩa là gì?" }, opts: { de: ["Alles an seinem Platz vorbereiten", "Einen besonderen Cocktail mixen", "Kunden begrüßen", "Abrechnung durchführen"], vn: ["Chuẩn bị mọi thứ đúng chỗ", "Pha một cocktail đặc biệt", "Chào đón khách", "Thanh toán cuối ca"] }, ans: 0 }
      ],
      pos_bar: [
        { q: { de: "Tisch A und B wollen getrennte Rechnungen – wie gehst du vor?", vn: "Bàn A và B muốn tách bill – bạn làm thế nào?" }, opts: { de: ["Nur eine Rechnung möglich", "Split-Funktion im POS nutzen", "Manuell auf Papier aufschreiben", "Den Manager rufen"], vn: ["Chỉ in một bill được", "Dùng chức năng Split trong POS", "Ghi tay ra giấy", "Gọi quản lý"] }, ans: 1 },
        { q: { de: "Was tust du bei einem POS-Absturz während des Service?", vn: "POS bị treo giữa ca – xử lý thế nào?" }, opts: { de: ["Service stoppen", "Bestellungen manuell aufschreiben, Manager informieren, System neu starten", "Gäste wegschicken", "Ignorieren und weitermachen"], vn: ["Dừng phục vụ", "Ghi tay order, báo manager, khởi động lại hệ thống", "Xin lỗi và đuổi khách về", "Bỏ qua và tiếp tục"] }, ans: 1 },
        { q: { de: "Tagesabschluss – was gehört dazu?", vn: "Kết ca ngày – công việc gồm những gì?" }, opts: { de: ["Nur Kasse zählen", "Kassensturz, Z-Report drucken, Differenzen notieren, Abgabe ans Management", "Nur aufräumen", "Nichts, läuft automatisch"], vn: ["Chỉ đếm tiền mặt", "Kiểm quỹ, in Z-Report, ghi sai lệch, báo cáo management", "Chỉ dọn dẹp", "Không làm gì, tự động"] }, ans: 1 },
        { q: { de: "Wie korrigiert man einen falschen Artikel im POS?", vn: "Xóa món nhập sai trong POS bằng cách nào?" }, opts: { de: ["Komplett neu starten", "Void/Storno-Funktion nutzen, Grund eingeben", "Einfach ignorieren", "Neuen Tisch aufmachen"], vn: ["Khởi động lại toàn bộ", "Dùng chức năng Void/Storno, nhập lý do", "Bỏ qua", "Mở bàn mới"] }, ans: 1 }
      ],
      // 🍸 Fachkompetenz
      bartechniken: [
        { q: { de: "Wann shaked man, wann stirrt man einen Cocktail?", vn: "Khi nào lắc (shake), khi nào khuấy (stir) cocktail?" }, opts: { de: ["Immer shaken", "Shaken bei Zitrus/Ei/Sahne; Stirren bei nur Spirituosen", "Stirren bei Zitrus", "Zufällig"], vn: ["Luôn lắc", "Lắc khi có chanh/trứng/kem; khuấy khi chỉ có rượu", "Khuấy khi có chanh", "Tùy ý"] }, ans: 1 },
        { q: { de: "Jigger 2cl/4cl: Wie misst du 3cl ab?", vn: "Jigger 2cl/4cl: Đo 3cl bằng cách nào?" }, opts: { de: ["Unmöglich", "Einmal 2cl + halb 2cl-Seite (1cl)", "Dreimal füllen und leeren", "Schätzen"], vn: ["Không thể", "Một lần 2cl + nửa bên 2cl (1cl)", "Đổ vào đổ ra 3 lần", "Ước lượng"] }, ans: 1 },
        { q: { de: "Boston Shaker: Wie öffnet man ihn nach dem Shaken?", vn: "Boston Shaker: Mở ra sau khi lắc bằng cách nào?" }, opts: { de: ["Einfach aufdrehen", "An der Naht seitlich schlagen", "Drücken von oben", "Gegen die Theke schlagen"], vn: ["Vặn ra", "Đập nhẹ vào cạnh chỗ nối", "Ấn từ trên xuống", "Đập xuống quầy"] }, ans: 1 },
        { q: { de: "Dry Shake – was bedeutet das?", vn: "Dry Shake – nghĩa là gì?" }, opts: { de: ["Ohne Glas shaken", "Shaken ohne Eis (für Eischaum bei Egg-White-Cocktails)", "Shaken mit gefrorenem Wasser", "Sehr kurz shaken"], vn: ["Lắc không có ly", "Lắc không đá (để tạo bọt trứng)", "Lắc với nước đá đông", "Lắc rất ngắn"] }, ans: 1 }
      ],
      cocktail_klassiker: [
        { q: { de: "Ein klassischer Negroni besteht aus:", vn: "Negroni cổ điển gồm những gì?" }, opts: { de: ["Vodka, Campari, Vermouth", "Gin, Campari, Sweet Vermouth (je 3cl)", "Rum, Aperol, Prosecco", "Whisky, Bitters, Zucker"], vn: ["Vodka, Campari, Vermouth", "Gin, Campari, Sweet Vermouth (mỗi thứ 3cl)", "Rum, Aperol, Prosecco", "Whisky, Bitters, đường"] }, ans: 1 },
        { q: { de: "Old Fashioned: Welche Spirituose ist die Basis?", vn: "Old Fashioned: Rượu nền là gì?" }, opts: { de: ["Gin", "Rum", "Bourbon/Rye Whisky", "Cognac"], vn: ["Gin", "Rum", "Bourbon/Rye Whisky", "Cognac"] }, ans: 2 },
        { q: { de: "Martini: Gerührt oder geschüttelt – was ist klassisch?", vn: "Martini: Khuấy hay lắc – thế nào là cổ điển?" }, opts: { de: ["Geschüttelt (a la Bond)", "Gerührt – klarer, seidiger", "Beides ist gleich", "Gemixt im Blender"], vn: ["Lắc (phong cách Bond)", "Khuấy – trong hơn, mượt hơn", "Cả hai đều giống nhau", "Xay trong máy"] }, ans: 1 },
        { q: { de: "Welcher Cocktail hat frische Minze als Hauptzutat?", vn: "Cocktail nào có bạc hà tươi là nguyên liệu chính?" }, opts: { de: ["Negroni", "Mojito", "Manhattan", "Daiquiri"], vn: ["Negroni", "Mojito", "Manhattan", "Daiquiri"] }, ans: 1 }
      ],
      // 🍽️ Service
      tisch_setup: [
        { q: { de: "Wo liegt das Messer beim japanischen Tisch-Setup?", vn: "Dao đặt ở đâu trong setup bàn kiểu Nhật?" }, opts: { de: ["Links vom Teller", "Rechts vom Teller mit Schneide nach innen", "Auf dem Teller", "Vor dem Teller"], vn: ["Bên trái đĩa", "Bên phải đĩa, lưỡi dao quay vào trong", "Trên đĩa", "Trước đĩa"] }, ans: 1 },
        { q: { de: "Shoyu-Schälchen: Wie wird es befüllt?", vn: "Chén đựng Shoyu: Đổ vào như thế nào?" }, opts: { de: ["Voll bis zum Rand", "Etwa 1–2cl, nachfüllen auf Wunsch", "Gar nicht, Gast füllt selbst", "Halbvoll immer"], vn: ["Đầy đến miệng chén", "Khoảng 1–2cl, châm thêm khi khách cần", "Không đổ, khách tự rót", "Luôn nửa chén"] }, ans: 1 },
        { q: { de: "Stäbchen: Wie werden sie platziert?", vn: "Đũa: Đặt như thế nào?" }, opts: { de: ["Hoch aufrecht im Reisnapf stehend", "Senkrecht zum Tischrand auf Hashi-Oki (Stäbchenhalter)", "Quer über dem Teller", "Rechts neben dem Messer"], vn: ["Cắm thẳng đứng vào bát cơm", "Nằm ngang trên gác đũa Hashi-Oki, song song mép bàn", "Nằm ngang trên đĩa", "Bên phải dao"] }, ans: 1 },
        { q: { de: "Tisch wurde benutzt – was prüfst du vor neuem Gast?", vn: "Bàn vừa dùng xong – kiểm tra gì trước khi đón khách mới?" }, opts: { de: ["Nur Speisekarte auslegen", "Tisch abwischen, alle Utensilien ersetzen, Stühle geradestellen, Boden prüfen", "Nichts, Gast setzt sich direkt", "Nur Glas wechseln"], vn: ["Chỉ đặt menu", "Lau bàn, thay đầy đủ dụng cụ, chỉnh ghế thẳng, kiểm tra sàn", "Không cần, khách ngồi luôn", "Chỉ đổi ly"] }, ans: 1 }
      ],
      kassieren: [
        { q: { de: "Gast zahlt 37,50€ mit 50€ – wie viel Wechselgeld?", vn: "Khách trả 50€ cho tổng 37,50€ – trả lại bao nhiêu?" }, opts: { de: ["11,50€", "12,50€", "13,00€", "12,00€"], vn: ["11,50€", "12,50€", "13,00€", "12,00€"] }, ans: 1 },
        { q: { de: "Kartenzahlung schlägt fehl – was sagst du?", vn: "Thanh toán thẻ thất bại – bạn nói gì?" }, opts: { de: ["'Ihre Karte ist schlecht'", "'Leider hat die Karte nicht funktioniert – möchten Sie es nochmal versuchen oder bar bezahlen?'", "Karte nehmen und nochmals sweeepen ohne zu fragen", "Gast wegschicken"], vn: ["'Thẻ của bạn xấu'", "'Xin lỗi thẻ chưa qua – bạn thử lại hoặc thanh toán tiền mặt được không?'", "Quẹt lại không hỏi", "Mời khách ra ngoài"] }, ans: 1 },
        { q: { de: "Rechnungssplitting: Tisch für 4 Personen, Gesamt 80€, gleiche Teile – wieviel zahlt jeder?", vn: "Chia bill đều: 4 người, tổng 80€, mỗi người trả bao nhiêu?" }, opts: { de: ["15€", "20€", "25€", "30€"], vn: ["15€", "20€", "25€", "30€"] }, ans: 1 },
        { q: { de: "Gast bekommt falschen Betrag auf der Rechnung – was tust du?", vn: "Khách bị tính sai trên bill – bạn làm gì?" }, opts: { de: ["Ignorieren", "Entschuldigen, sofort korrigieren, neue Rechnung drucken", "Sagen 'das stimmt so'", "Manager holen ohne sich zu entschuldigen"], vn: ["Bỏ qua", "Xin lỗi, sửa ngay, in bill mới", "Nói 'đúng rồi đó'", "Gọi manager mà không xin lỗi"] }, ans: 1 }
      ],
      reklamationsmanagement: [
        { q: { de: "Gast beschwert sich über kaltes Essen – erste Reaktion?", vn: "Khách phàn nàn đồ ăn nguội – phản ứng đầu tiên?" }, opts: { de: ["Erklären warum es kalt sein könnte", "Entschuldigen, Teller mitnehmen, sofort aufwärmen oder neu machen", "Sagen 'das war so gedacht'", "Zum Manager schicken ohne Entschuldigung"], vn: ["Giải thích tại sao có thể nguội", "Xin lỗi, mang đĩa đi, hâm nóng hoặc làm lại ngay", "Nói 'được làm như vậy đó'", "Đẩy sang manager mà không xin lỗi"] }, ans: 1 },
        { q: { de: "Was bedeutet 'deeskalieren' bei einer Beschwerde?", vn: "'Deeskalieren' khi khiếu nại nghĩa là gì?" }, opts: { de: ["Den Gast ignorieren bis er aufhört", "Ruhig bleiben, aktiv zuhören, Lösung anbieten", "Laut zurücksprechen", "Sicherheitsdienst rufen"], vn: ["Bỏ mặc khách cho đến khi họ thôi", "Bình tĩnh, lắng nghe chủ động, đề xuất giải pháp", "Nói to lại", "Gọi bảo vệ"] }, ans: 1 },
        { q: { de: "Gast ist dauerhaft unzufrieden und wird laut – was tust du?", vn: "Khách liên tục không hài lòng và to tiếng – bạn làm gì?" }, opts: { de: ["Auch lauter werden", "Ruhig bleiben, in separaten Bereich bitten, Manager hinzuziehen", "Wegrennen", "Andere Gäste um Hilfe bitten"], vn: ["Nói to lại", "Giữ bình tĩnh, mời ra chỗ riêng, gọi manager", "Bỏ chạy", "Nhờ khách khác giúp đỡ"] }, ans: 1 },
        { q: { de: "Welche Kompensation ist bei kleiner Beschwerde angemessen?", vn: "Khi nào nên đền bù cho khiếu nại nhỏ?" }, opts: { de: ["Immer alles umsonst", "Gratis Getränk, Entschuldigung, evtl. Rabatt – verhältnismäßig", "Gar nichts anbieten", "Geldstrafe für Köche"], vn: ["Luôn cho miễn phí hết", "Đồ uống miễn phí, xin lỗi, chiết khấu nếu cần – tương xứng", "Không đề xuất gì", "Phạt đầu bếp"] }, ans: 1 }
      ],
      // 💰 Wirtschaft
      getraenkekalkulation: [
        { q: { de: "Wareneinsatzquote 20%: Ein Cocktail kostet 2,50€ in Zutaten. Was ist der Netto-VK?", vn: "Tỷ lệ NVL 20%: Cocktail tốn 2,50€ nguyên liệu. Giá bán thuần là bao nhiêu?" }, opts: { de: ["5,00€", "10,00€", "12,50€", "25,00€"], vn: ["5,00€", "10,00€", "12,50€", "25,00€"] }, ans: 2 },
        { q: { de: "MwSt in Deutschland für Restaurantgetränke:", vn: "Thuế VAT ở Đức cho đồ uống nhà hàng:" }, opts: { de: ["7%", "10%", "19%", "0%"], vn: ["7%", "10%", "19%", "0%"] }, ans: 2 },
        { q: { de: "Pour-Cost von 35% – was bedeutet das?", vn: "Pour-Cost 35% – điều này có nghĩa gì?" }, opts: { de: ["Sehr gut, unter Zielbereich", "Akzeptabel", "Zu hoch – über dem Zielbereich von 18–24%", "Normal für Craft-Cocktails"], vn: ["Rất tốt, dưới mức mục tiêu", "Chấp nhận được", "Quá cao – vượt mức mục tiêu 18–24%", "Bình thường cho Craft Cocktail"] }, ans: 2 },
        { q: { de: "Was ist ein Deckungsbeitrag?", vn: "Deckungsbeitrag (lợi nhuận đóng góp) là gì?" }, opts: { de: ["Nur der Gewinn nach Steuern", "Verkaufspreis minus variable Kosten (Wareneinsatz)", "Gehalt des Barkeepers", "Gesamtumsatz des Abends"], vn: ["Chỉ là lợi nhuận sau thuế", "Giá bán trừ chi phí biến đổi (nguyên vật liệu)", "Lương bartender", "Tổng doanh thu buổi tối"] }, ans: 1 }
      ],
      // ⚖️ Compliance
      jugendschutz: [
        { q: { de: "Ab welchem Alter darf man in Deutschland Bier kaufen?", vn: "Ở Đức, bao nhiêu tuổi được mua bia?" }, opts: { de: ["14 Jahre", "16 Jahre", "18 Jahre", "21 Jahre"], vn: ["14 tuổi", "16 tuổi", "18 tuổi", "21 tuổi"] }, ans: 1 },
        { q: { de: "Gast sieht jung aus, kein Ausweis dabei – was tust du?", vn: "Khách trông trẻ, không có CCCD – bạn làm gì?" }, opts: { de: ["Trotzdem ausschenken", "Alkohol verweigern – kein Ausweis = kein Alkohol", "Nur Bier erlauben", "Manager fragen ob es okay ist"], vn: ["Vẫn phục vụ", "Từ chối – không có giấy tờ = không có rượu bia", "Chỉ cho phép bia", "Hỏi manager có được không"] }, ans: 1 },
        { q: { de: "Ab welchem Alter darf man Spirituosen (Schnaps) kaufen?", vn: "Bao nhiêu tuổi được mua rượu mạnh?" }, opts: { de: ["16 Jahre", "18 Jahre", "21 Jahre", "Kein Altersminimum"], vn: ["16 tuổi", "18 tuổi", "21 tuổi", "Không có giới hạn tuổi"] }, ans: 1 },
        { q: { de: "Was riskiert das Restaurant wenn Alkohol an Minderjährige ausgeschenkt wird?", vn: "Nhà hàng có nguy cơ gì khi bán rượu cho người dưới tuổi?" }, opts: { de: ["Gar nichts", "Hohe Geldstrafe und Entzug der Lizenz", "Nur eine Verwarnung", "Nur eine kleine Steuerstrafe"], vn: ["Không có gì", "Phạt nặng và thu hồi giấy phép", "Chỉ là cảnh cáo", "Chỉ là phạt thuế nhỏ"] }, ans: 1 }
      ],
      haccp_bar: [
        { q: { de: "HSD bedeutet:", vn: "HSD có nghĩa là:" }, opts: { de: ["Heiß-Schnell-Dienen", "Haltbarkeitsdatum (Mindesthaltbarkeitsdatum)", "Hausservice-Dienst", "Hochleistungs-System-Datei"], vn: ["Phục vụ nóng nhanh", "Hạn sử dụng (date de péremption)", "Dịch vụ nhà hàng", "File hệ thống hiệu năng cao"] }, ans: 1 },
        { q: { de: "Frisches Obst für Mojito – wo lagert man es im Bar-Kühlschrank?", vn: "Trái cây tươi làm Mojito – để ở đâu trong tủ lạnh bar?" }, opts: { de: ["Oben, direkt über rohem Fleisch", "Getrennt von rohem Fleisch und Fisch, falls vorhanden", "Auf dem Boden des Kühlschranks", "Egal, Obst ist unempfindlich"], vn: ["Trên cùng, ngay trên thịt sống", "Tách biệt với thịt và cá sống nếu có", "Dưới đáy tủ lạnh", "Tùy, trái cây không nhạy cảm"] }, ans: 1 },
        { q: { de: "Allergenkennzeichnung: Was muss man bei Haselnuss-Sirup tun?", vn: "Nhãn dị ứng: Phải làm gì với siro hạt phỉ?" }, opts: { de: ["Nichts, Nüsse sind kein Allergen", "Klar auf der Karte als 'enthält Nüsse' kennzeichnen", "Nur mündlich informieren wenn gefragt", "Den Sirup verstecken"], vn: ["Không cần làm gì, hạt không phải dị ứng nguyên", "Ghi rõ trên menu 'có chứa hạt'", "Chỉ thông báo miệng khi được hỏi", "Giấu đi siro đó"] }, ans: 1 },
        { q: { de: "Eismaschine: Wie oft sollte sie gereinigt werden?", vn: "Máy làm đá: Bao lâu vệ sinh một lần?" }, opts: { de: ["Einmal im Jahr", "Täglich auswischen, wöchentlich desinfizieren", "Nie – Eis ist ja kalt", "Nur wenn es riecht"], vn: ["Mỗi năm một lần", "Lau hàng ngày, khử trùng hàng tuần", "Không bao giờ – đá thì lạnh rồi", "Chỉ khi có mùi"] }, ans: 1 }
      ],
      // 📢 Sales
      gasteberatung: [
        { q: { de: "Gast sagt 'Ich mag nichts zu Süßes' – was empfiehlst du?", vn: "Khách nói 'tôi không thích ngọt' – bạn đề xuất gì?" }, opts: { de: ["Süßesten Cocktail empfehlen", "Negroni, Aperol Spritz oder Dry Martini vorschlagen", "Sagen 'dann trinken Sie Wasser'", "Gar nichts empfehlen"], vn: ["Đề xuất cocktail ngọt nhất", "Gợi ý Negroni, Aperol Spritz hoặc Dry Martini", "Nói 'vậy uống nước đi'", "Không đề xuất gì"] }, ans: 1 },
        { q: { de: "Was ist Upselling?", vn: "Upselling là gì?" }, opts: { de: ["Kunden zu billigeren Produkten leiten", "Kunden zu höherwertigeren/teureren Alternativen führen", "Mehr Mengen verkaufen", "Rabatte anbieten"], vn: ["Hướng khách đến sản phẩm rẻ hơn", "Hướng khách đến sản phẩm cao cấp/đắt hơn", "Bán số lượng nhiều hơn", "Đưa ra chiết khấu"] }, ans: 1 },
        { q: { de: "Gast bestellt Bier – wann bietest du ein Premium-Upgrade an?", vn: "Khách order bia – khi nào đề xuất nâng cấp Premium?" }, opts: { de: ["Nie", "Immer und aufdringlich", "Einmal freundlich erwähnen: 'Wir haben auch X – möchten Sie das probieren?'", "Nur wenn Gast fragt"], vn: ["Không bao giờ", "Luôn luôn và quấy rầy", "Một lần nhẹ nhàng: 'Chúng tôi còn có X – bạn muốn thử không?'", "Chỉ khi khách hỏi"] }, ans: 2 },
        { q: { de: "Gast googelt das Restaurant – was beeinflusst die Bewertung am meisten?", vn: "Khách Google nhà hàng – điều gì ảnh hưởng đánh giá nhiều nhất?" }, opts: { de: ["Anzahl der Tische", "Servicequalität, Freundlichkeit, Reaktion auf Bewertungen", "Preis der Parkplätze", "Öffnungszeiten"], vn: ["Số lượng bàn", "Chất lượng dịch vụ, thân thiện, phản hồi đánh giá", "Giá bãi đỗ xe", "Giờ mở cửa"] }, ans: 1 }
      ],
      // 🌐 Soft Skills
      gastfreundschaft: [
        { q: { de: "Ein Gast betritt das Restaurant und niemand schaut auf – was ist falsch?", vn: "Khách bước vào nhà hàng mà không ai nhìn lên – vấn đề gì?" }, opts: { de: ["Nichts, Personal ist beschäftigt", "Fehlender Blickkontakt und Begrüßung – erster Eindruck verloren", "Gast sollte warten", "Nur Problem wenn es ein VIP ist"], vn: ["Không sao, nhân viên đang bận", "Thiếu giao tiếp mắt và chào đón – mất ấn tượng đầu tiên", "Khách nên chờ", "Chỉ là vấn đề nếu là VIP"] }, ans: 1 },
        { q: { de: "Wie reagierst du wenn ein Gast schlechter Laune ist?", vn: "Bạn phản ứng thế nào khi khách đang cáu kỉnh?" }, opts: { de: ["Auch schlecht gelaunt sein", "Ruhig, freundlich und verständnisvoll bleiben", "Gast ignorieren", "Kollegen schicken"], vn: ["Cũng cáu theo", "Giữ bình tĩnh, thân thiện và thông cảm", "Bỏ mặc khách", "Nhờ đồng nghiệp"] }, ans: 1 },
        { q: { de: "Empathie am Arbeitsplatz bedeutet:", vn: "Đồng cảm tại nơi làm việc có nghĩa là:" }, opts: { de: ["Immer zustimmen", "Die Perspektive anderer verstehen und darauf eingehen", "Gefühle zeigen immer vorzeigen", "Keine Grenzen setzen"], vn: ["Luôn đồng ý", "Hiểu quan điểm người khác và phản hồi phù hợp", "Luôn thể hiện cảm xúc", "Không đặt ranh giới"] }, ans: 1 },
        { q: { de: "Wie merkt man, dass ein Gast einen Tisch möchte?", vn: "Làm sao biết khách muốn có bàn?" }, opts: { de: ["Gast muss laut rufen", "Blickkontakt suchen, am Eingang stehen, hereinschauen", "Nur nach Reservierung fragen", "Warten bis Gast selbst setzt"], vn: ["Khách phải gọi to", "Khách nhìn quanh, đứng ở lối vào, nhìn vào bên trong", "Chỉ hỏi đặt bàn chưa", "Chờ khách tự ngồi"] }, ans: 1 }
      ],
      stressresistenz: [
        { q: { de: "Rush Hour: 10 Tische gleichzeitig bestellen – was tust du zuerst?", vn: "Giờ cao điểm: 10 bàn cùng order – bạn làm gì trước?" }, opts: { de: ["Panisch werden", "Priorisieren: Getränke zuerst, dann Essen, kommunizieren", "Einen Tisch komplett ignorieren", "Nach Hause gehen"], vn: ["Hoảng loạn", "Ưu tiên: đồ uống trước, sau đó đồ ăn, thông tin liên lạc", "Bỏ qua hẳn một bàn", "Về nhà"] }, ans: 1 },
        { q: { de: "Kollege fällt kurzfristig aus – was ist deine Haltung?", vn: "Đồng nghiệp nghỉ đột xuất – thái độ của bạn?" }, opts: { de: ["Beschweren und verweigern", "Flexibel mithelfen, Team informieren, Lösungen suchen", "Auch nach Hause gehen", "Nur eigene Station machen"], vn: ["Phàn nàn và từ chối", "Linh hoạt hỗ trợ, thông báo team, tìm giải pháp", "Cũng về nhà", "Chỉ làm trạm của mình"] }, ans: 1 },
        { q: { de: "Was hilft bei hohem Stress im Service am meisten?", vn: "Điều gì giúp nhất khi stress cao trong ca?" }, opts: { de: ["Atmen, priorisieren, kommunizieren", "Alles ignorieren", "Laut werden", "Pausen nehmen mitten im Service"], vn: ["Hít thở, ưu tiên, giao tiếp", "Bỏ qua tất cả", "Nói to lên", "Nghỉ giải lao giữa ca"] }, ans: 0 },
        { q: { de: "Gast beschwert sich laut vor anderen Gästen – was first?", vn: "Khách phàn nàn to trước mặt khách khác – làm gì đầu tiên?" }, opts: { de: ["Wegrennen", "Gäste ansprechen: ruhig, kurz entschuldigen, in ruhigere Zone leiten", "Auch laut antworten", "Polizei rufen"], vn: ["Bỏ chạy", "Nhẹ nhàng xin lỗi ngắn, mời sang khu vực yên tĩnh", "Cũng nói to", "Gọi công an"] }, ans: 1 }
      ]
    };

    // Checklist items per subskill (3-4 items each)
    const CHECKLIST = {
      mise_en_place_cold: [{ de: "Station vollständig eingerichtet vor Service", vn: "Setup trạm đầy đủ trước ca" }, { de: "Nori trocken und griffbereit", vn: "Nori khô và dễ lấy" }, { de: "Alle Füllungen und Toppings vorbereitet", vn: "Nhân và topping đã chuẩn bị xong" }, { de: "Messer scharf und sauber", vn: "Dao sắc và sạch" }],
      sushi_reis: [{ de: "Reis richtig gewaschen und gekocht", vn: "Vo và nấu cơm đúng cách" }, { de: "Essig-Würzung korrekt gemischt", vn: "Trộn giấm đúng tỷ lệ" }, { de: "Reis bei Körpertemperatur beim Formen", vn: "Cơm đạt nhiệt độ cơ thể khi nắm" }, { de: "Konsistenz: klebrig aber nicht matschig", vn: "Độ dẻo: dính nhưng không bết" }],
      nigiri_maki_basics: [{ de: "Nigiri fest und gleichmäßig geformt", vn: "Nigiri nắm chắc và đều" }, { de: "Maki gleichmäßig gerollt, kein Reis seitlich", vn: "Maki cuốn đều, không rơi cơm" }, { de: "Schnitte sauber und gerade", vn: "Cắt gọn và thẳng" }, { de: "Gunkan stabil, Nori hält an der Naht", vn: "Gunkan ổn định, Nori dính ở mép" }],
      creative_rolls: [{ de: "Inside-Out-Reis haftet außen gleichmäßig", vn: "Cơm bên ngoài bám đều" }, { de: "Topping-Scheiben fächerförmig gleichmäßig", vn: "Lát topping xếp vảy đều" }, { de: "Roll stabil beim Schneiden", vn: "Cuộn chắc khi cắt" }, { de: "Präsentation ordentlich auf dem Teller", vn: "Trình bày gọn đẹp trên đĩa" }],
      fish_knowledge: [{ de: "Frischeprüfung aller Fische vor Schichtbeginn", vn: "Kiểm tra độ tươi tất cả cá trước ca" }, { de: "Lagertemperaturen geprüft (0–2°C)", vn: "Kiểm tra nhiệt độ bảo quản (0–2°C)" }, { de: "FIFO korrekt angewendet", vn: "Áp dụng đúng FIFO" }, { de: "Allergen-relevante Fischarten bekannt", vn: "Nắm các loại cá gây dị ứng" }],
      asiat_zutaten_prep: [{ de: "Alle Zutaten frisch und vorbereitet", vn: "Tất cả nguyên liệu tươi và đã sơ chế" }, { de: "Richtige Schnittformen für das Gericht", vn: "Hình thái cắt đúng cho từng món" }, { de: "Gewürze und Saucen bereit", vn: "Gia vị và sốt đã sẵn sàng" }, { de: "Station sauber und hygienisch", vn: "Trạm sạch sẽ và vệ sinh" }],
      haccp_hot_kitchen: [{ de: "Kerntemperaturen bei Fleisch geprüft", vn: "Đã đo nhiệt độ lõi thịt" }, { de: "Farbkodierte Bretter korrekt verwendet", vn: "Dùng đúng màu thớt" }, { de: "Kühlkette nicht unterbrochen", vn: "Không đứt chuỗi lạnh" }, { de: "Hände zwischen Kontakt verschiedener Lebensmittel gewaschen", vn: "Rửa tay giữa các lần tiếp xúc thực phẩm" }],
      mise_en_place: [{ de: "Station vollständig vor Schichtbeginn", vn: "Trạm đầy đủ trước khi ca bắt đầu" }, { de: "Eis ausreichend vorhanden", vn: "Đá đủ dùng" }, { de: "Sirup-Flaschen aufgefüllt", vn: "Chai siro đã châm đầy" }, { de: "Garnitur frisch geschnitten", vn: "Trang trí đã cắt tươi" }],
      pos_bar: [{ de: "Bestelleingabe fehlerfrei", vn: "Nhập order không lỗi" }, { de: "Split-Billing korrekt", vn: "Tách bill đúng" }, { de: "Tagesabschluss vollständig durchgeführt", vn: "Kết ca đầy đủ" }, { de: "Fehlkorrekturen sauber dokumentiert", vn: "Sửa lỗi có ghi chép rõ" }],
      bartechniken: [{ de: "Shake/Stir-Entscheidung korrekt", vn: "Quyết định lắc/khuấy đúng" }, { de: "Jigger-Maße präzise", vn: "Đo Jigger chính xác" }, { de: "Glas sauber und passend", vn: "Ly sạch và phù hợp" }, { de: "Garnitur ordentlich angefügt", vn: "Gắn trang trí gọn đẹp" }],
      cocktail_klassiker: [{ de: "Originalrezept korrekt reproduziert", vn: "Tái tạo đúng công thức gốc" }, { de: "Serviert in korrekt temperiertem Glas", vn: "Phục vụ trong ly đúng nhiệt độ" }, { de: "Garnitur entspricht Klassiker-Standard", vn: "Trang trí đúng tiêu chuẩn" }, { de: "Gast wurden Zutaten erläutert", vn: "Giải thích thành phần cho khách" }],
      tisch_setup: [{ de: "Stäbchen auf Hashi-Oki korrekt platziert", vn: "Đũa đặt đúng trên gác đũa" }, { de: "Shoyu-Schälchen sauber und positioniert", vn: "Chén Shoyu sạch và đúng vị trí" }, { de: "Tisch abgewischt und sauber übergeben", vn: "Bàn lau sạch và bàn giao đúng" }, { de: "Stühle gerade gestellt", vn: "Ghế sắp thẳng" }],
      kassieren: [{ de: "Wechselgeld korrekt berechnet und ausgegeben", vn: "Trả tiền thừa đúng" }, { de: "Kartenrechnungen fehlerfrei", vn: "Thanh toán thẻ không lỗi" }, { de: "Split ordnungsgemäß durchgeführt", vn: "Tách bill đúng quy trình" }, { de: "Bon dem Gast korrekt übergeben", vn: "Trao bill đúng cho khách" }],
      reklamationsmanagement: [{ de: "Beschwerde ruhig und empathisch aufgenommen", vn: "Tiếp nhận khiếu nại bình tĩnh và đồng cảm" }, { de: "Lösung schnell und passend angeboten", vn: "Đưa ra giải pháp nhanh và phù hợp" }, { de: "Eskalation vermieden", vn: "Không để leo thang" }, { de: "Gast zufrieden entlassen", vn: "Khách ra về hài lòng" }],
      getraenkekalkulation: [{ de: "Wareneinsatz korrekt berechnet", vn: "Tính chi phí nguyên liệu đúng" }, { de: "Verkaufspreis korrekt kalkuliert", vn: "Tính giá bán đúng" }, { de: "MwSt korrekt aufgeschlagen", vn: "Cộng thuế VAT đúng" }, { de: "Deckungsbeitrag bekannt und kommuniziert", vn: "Nắm và có thể giải thích lợi nhuận đóng góp" }],
      jugendschutz: [{ de: "Altersgrenze bekannt (16/18 Jahre)", vn: "Biết giới hạn tuổi (16/18)" }, { de: "ID-Kontrolle konsequent durchgeführt", vn: "Kiểm tra giấy tờ nhất quán" }, { de: "Ablehnung höflich aber bestimmt", vn: "Từ chối lịch sự nhưng kiên quyết" }, { de: "Risiken für das Restaurant bekannt", vn: "Biết rủi ro cho nhà hàng" }],
      haccp_bar: [{ de: "Allergene auf der Karte korrekt ausgewiesen", vn: "Dị ứng nguyên trên menu ghi đúng" }, { de: "HSD-Kontrolle durchgeführt", vn: "Đã kiểm tra hạn sử dụng" }, { de: "Eis-Maschine gereinigt", vn: "Vệ sinh máy đá" }, { de: "Kühlung geprüft (4–7°C)", vn: "Kiểm tra nhiệt độ làm lạnh (4–7°C)" }],
      gasteberatung: [{ de: "Gastwünsche aktiv erfragt", vn: "Chủ động hỏi sở thích khách" }, { de: "Passende Empfehlung gegeben", vn: "Đề xuất phù hợp" }, { de: "Upselling einmal freundlich versucht", vn: "Thử upselling một lần lịch sự" }, { de: "Gast zufrieden mit Auswahl", vn: "Khách hài lòng với lựa chọn" }],
      gastfreundschaft: [{ de: "Gast bei Ankunft begrüßt (< 30 Sek.)", vn: "Chào đón khách khi đến (< 30 giây)" }, { de: "Blickkontakt und Lächeln", vn: "Giao tiếp bằng mắt và mỉm cười" }, { de: "Gast beim Gehen verabschiedet", vn: "Chào tạm biệt khi khách đi" }, { de: "Positive Atmosphäre geschaffen", vn: "Tạo bầu không khí tích cực" }],
      stressresistenz: [{ de: "Ruhig geblieben unter Druck", vn: "Giữ bình tĩnh dưới áp lực" }, { de: "Prioritäten korrekt gesetzt", vn: "Đặt ưu tiên đúng" }, { de: "Team kommuniziert bei Überlastung", vn: "Thông báo cho team khi quá tải" }, { de: "Fehler unter Stress vermieden oder schnell korrigiert", vn: "Tránh lỗi hoặc sửa nhanh khi stress" }]
    };

    function getQuizQuestions(subId, lang) {
      const pool = QUIZ[subId];
      if (!pool) return [];
      // Shuffle and pick 3
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(3, shuffled.length));
    }

    function calcLevel(quizPct, checkPct) {
      const total = quizPct * 0.4 + checkPct * 0.6;
      if (total >= 90) return 4;
      if (total >= 75) return 3;
      if (total >= 55) return 2;
      if (total >= 35) return 1;
      return 0;
    }

    const LEVEL_META = {
      0: { l: "—", c: "#94a3b8", emoji: "⬜" },
      1: { l: "Junior", c: "#fbbf24", emoji: "🟡" },
      2: { l: "Advanced", c: "#34d399", emoji: "🟢" },
      3: { l: "Expert", c: "#22d3ee", emoji: "🔵" },
      4: { l: "Master", c: "#a78bfa", emoji: "🟣" }
    };

    /* ═══════════════════ CLUSTER & SUBSKILL DEFINITIONS ═══════════════════ */
    const ASSESS_CLUSTERS = {
      sushi_cold: {
        icon: '🍣', de: 'Sushi & Cold Kitchen', vn: 'Sushi & Bếp lạnh', color: '#f97316',
        subs: [
          { id: 'mise_en_place_cold', de: 'Mise en Place Kaltküche', vn: 'Mise en Place Bếp lạnh' },
          { id: 'sushi_reis', de: 'Sushi-Reis', vn: 'Cơm Sushi' },
          { id: 'messertechnik', de: 'Messertechnik & Schneiden', vn: 'Kỹ thuật dao & Cắt thái' },
          { id: 'menukenntnisse', de: 'Menükenntnisse & Zutaten', vn: 'Kiến thức menu & Nguyên liệu' },
          { id: 'nigiri_maki_basics', de: 'Nigiri, Maki & Gunkan', vn: 'Nigiri, Maki & Gunkan' },
          { id: 'garnishing_tsuma', de: 'Garnishing & Tsuma', vn: 'Trang trí & Tsuma' },
          { id: 'praesentation_aburi', de: 'Präsentation & Aburi', vn: 'Trình bày & Aburi' },
          { id: 'seafood_butchery', de: 'Seafood Butchery', vn: 'Sơ chế hải sản' },
          { id: 'fish_knowledge', de: 'Fischkunde & Qualitätskontrolle', vn: 'Kiến thức cá & Kiểm tra CL' },
          { id: 'sashimi_schnitt', de: 'Sashimi- & Bedeckung-Schnitt', vn: 'Cắt Sashimi & lát phủ' },
          { id: 'creative_rolls', de: 'Special & Creative Rolls', vn: 'Special & Creative Rolls' },
          { id: 'sashimi_art', de: 'Sashimi Art Plating', vn: 'Sashimi nghệ thuật' },
          { id: 'teamleitung_sushi', de: 'Teamleitung Sushi-Station', vn: 'Quản lý trạm Sushi' }
        ]
      },
      hot_kitchen: {
        icon: '🔥', de: 'Hot Kitchen', vn: 'Bếp nóng', color: '#ef4444',
        subs: [
          { id: 'asiat_zutaten_prep', de: 'Zutaten & Mise en Place', vn: 'Nguyên liệu & Mise en Place' },
          { id: 'reis_beilagen', de: 'Reis & Beilagen', vn: 'Cơm & Món phụ' },
          { id: 'bon_lesen', de: 'Bon lesen & Menükenntnis', vn: 'Đọc order & Kiến thức menu' },
          { id: 'sauberkeit_ordnung', de: 'Sauberkeit & Ordnung', vn: 'Sạch sẽ & Ngăn nắp' },
          { id: 'tempura_frittieren', de: 'Tempura & Frittieren', vn: 'Tempura & Chiên ngập dầu' },
          { id: 'haccp_hot_kitchen', de: 'HACCP & Lebensmittelsicherheit', vn: 'HACCP & An toàn thực phẩm' },
          { id: 'suppen_bruehen', de: 'Suppen & Brühen', vn: 'Súp & Nước dùng' },
          { id: 'timing_koordination', de: 'Timing & Koordination', vn: 'Timing & Phối hợp' },
          { id: 'qualitaet_konsistenz', de: 'Qualität & Konsistenz', vn: 'Chất lượng & Đồng nhất' },
          { id: 'wok_hei_teppan', de: 'Wok Hei & Teppan', vn: 'Wok Hei & Teppan' },
          { id: 'menuentwicklung', de: 'Menüentwicklung & Kalkulation', vn: 'Phát triển menu & Tính giá' }
        ]
      },
      service: {
        icon: '🍽️', de: 'Service & Gästebetreuung', vn: 'Phục vụ & Chăm sóc khách', color: '#10b981',
        subs: [
          { id: 'tisch_setup', de: 'Tisch-Setup & Mise en Place', vn: 'Setup bàn & Mise en Place' },
          { id: 'serviertechnik', de: 'Serviertechnik & Abräumen', vn: 'Kỹ thuật phục vụ & Dọn bàn' },
          { id: 'gaestebegrussung', de: 'Gästebegrüßung', vn: 'Chào đón khách' },
          { id: 'kassieren', de: 'Kassieren & Abrechnung', vn: 'Thu ngân & Thanh toán' },
          { id: 'getraenkeservice', de: 'Getränkeservice & Menükenntnis', vn: 'DV đồ uống & Kiến thức menu' },
          { id: 'weinberatung', de: 'Wein- & Getränkeberatung', vn: 'Tư vấn rượu & Đồ uống' },
          { id: 'bestellannahme', de: 'Bestellannahme & Bon-Genauigkeit', vn: 'Nhận order & Độ chính xác' },
          { id: 'platzierung', de: 'Platzierung & Gästekoordination', vn: 'Sắp xếp chỗ & Điều phối' },
          { id: 'reklamationsmanagement', de: 'Reklamationsmanagement', vn: 'Xử lý khiếu nại' },
          { id: 'tableside', de: 'Tableside Service', vn: 'Phục vụ tại bàn' },
          { id: 'vip_stammgaeste', de: 'VIP & Stammgäste-Pflege', vn: 'VIP & Chăm sóc khách quen' },
          { id: 'schichtleitung_service', de: 'Schichtleitung Service', vn: 'Quản lý ca phục vụ' }
        ]
      },
      bar_drinks: {
        icon: '🍸', de: 'Fachkompetenz Getränke', vn: 'Chuyên môn Đồ uống', color: '#06b6d4',
        subs: [
          { id: 'eis_temperatur', de: 'Eis & Temperatur', vn: 'Đá & Nhiệt độ' },
          { id: 'kaffee_heiss', de: 'Kaffee & Heißgetränke', vn: 'Cà phê & Đồ uống nóng' },
          { id: 'alkoholfrei', de: 'Alkoholfreie Cocktails', vn: 'Cocktail không cồn' },
          { id: 'bierkunde', de: 'Bierkunde', vn: 'Kiến thức bia' },
          { id: 'bartechniken', de: 'Barkeepertechniken', vn: 'Kỹ thuật Barkeeper' },
          { id: 'garnishing_bar', de: 'Garnishing & Präsentation', vn: 'Trang trí & Trình bày' },
          { id: 'cocktail_klassiker', de: 'Cocktail-Klassiker', vn: 'Cocktail cổ điển' },
          { id: 'spirituosenkunde', de: 'Spirituosenkunde', vn: 'Kiến thức rượu mạnh' },
          { id: 'weinkunde', de: 'Weinkunde', vn: 'Kiến thức rượu vang' },
          { id: 'mixologie', de: 'Moderne Mixologie', vn: 'Mixology hiện đại' },
          { id: 'signature_creation', de: 'Signature Recipe Creation', vn: 'Sáng tạo công thức riêng' },
          { id: 'homemade', de: 'Homemade Ingredients', vn: 'Tự làm nguyên liệu' }
        ]
      },
      softskills: {
        icon: '🌐', de: 'Soft Skills & Sprachen', vn: 'Kỹ năng mềm & Ngôn ngữ', color: '#14b8a6',
        subs: [
          { id: 'gastfreundschaft', de: 'Gastfreundschaft & Empathie', vn: 'Lòng hiếu khách & Đồng cảm' },
          { id: 'zeitmanagement', de: 'Zeitmanagement', vn: 'Quản lý thời gian' },
          { id: 'teamwork', de: 'Teamwork', vn: 'Làm việc nhóm' },
          { id: 'englisch', de: 'Englisch', vn: 'Tiếng Anh' },
          { id: 'kommunikation', de: 'Kommunikation', vn: 'Giao tiếp' },
          { id: 'stressresistenz', de: 'Stressresistenz', vn: 'Chống stress' },
          { id: 'showmanship', de: 'Showmanship & Flair', vn: 'Biểu diễn & Phong cách' },
          { id: 'conflict_resolution', de: 'Conflict Resolution', vn: 'Giải quyết xung đột' },
          { id: 'verhandlung', de: 'Verhandlungsgeschick', vn: 'Kỹ năng đàm phán' },
          { id: 'staff_training', de: 'Staff Training & Mentoring', vn: 'Đào tạo & Hướng dẫn' }
        ]
      },
      sales: {
        icon: '📢', de: 'Sales & Marketing', vn: 'Bán hàng & Marketing', color: '#ec4899',
        subs: [
          { id: 'gasteberatung', de: 'Gästeberatung & Empfehlung', vn: 'Tư vấn & Đề xuất' },
          { id: 'social_media', de: 'Social Media (Bar-Content)', vn: 'Social Media (nội dung Bar)' },
          { id: 'bewertungsmanagement', de: 'Bewertungsmanagement', vn: 'Quản lý đánh giá' },
          { id: 'guest_retention', de: 'Guest Retention & Loyalty', vn: 'Giữ chân & Trung thành' },
          { id: 'cocktailkarten', de: 'Cocktailkarten-Design', vn: 'Thiết kế menu cocktail' },
          { id: 'events', de: 'Events & Cocktailkurse', vn: 'Sự kiện & Khóa cocktail' }
        ]
      },
      compliance: {
        icon: '⚖️', de: 'Compliance & Recht', vn: 'Tuân thủ & Pháp luật', color: '#64748b',
        subs: [
          { id: 'arbeitsschutz', de: 'Arbeitsschutz Bar', vn: 'An toàn lao động Bar' },
          { id: 'jugendschutz', de: 'Jugendschutzgesetz', vn: 'Luật bảo vệ trẻ em' },
          { id: 'haccp_bar', de: 'HACCP Bar-spezifisch', vn: 'HACCP Bar' },
          { id: 'verantwortungsvoller_ausschank', de: 'Verantwortungsvoller Ausschank', vn: 'Phục vụ rượu có trách nhiệm' },
          { id: 'schanklizenz', de: 'Schanklizenz / Konzession', vn: 'Giấy phép kinh doanh' },
          { id: 'dealing_authorities', de: 'Dealing with Authorities', vn: 'Làm việc với cơ quan CQ' }
        ]
      },
      operations: {
        icon: '⚙️', de: 'Operations & Workflows', vn: 'Vận hành & Quy trình', color: '#8b5cf6',
        subs: [
          { id: 'mise_en_place', de: 'Bar-Setup & Mise en Place', vn: 'Setup Bar & Mise en Place' },
          { id: 'hygiene_reinigung', de: 'Hygiene & Reinigung Bar', vn: 'Vệ sinh & Dọn dẹp Bar' },
          { id: 'pos_bar', de: 'Kassensystem (POS)', vn: 'Hệ thống POS' },
          { id: 'lagerhaltung', de: 'Lagerhaltung (FIFO)', vn: 'Quản lý kho (FIFO)' },
          { id: 'speed_workflow', de: 'Speed & Workflow', vn: 'Tốc độ & Quy trình' },
          { id: 'troubleshooting', de: 'Troubleshooting', vn: 'Xử lý sự cố' }
        ]
      },
      economics: {
        icon: '💰', de: 'Wirtschaftlichkeit', vn: 'Kinh tế', color: '#eab308',
        subs: [
          { id: 'inventur', de: 'Inventur & Bestandsmanagement', vn: 'Kiểm kê & Quản lý tồn kho' },
          { id: 'getraenkekalkulation', de: 'Getränkekalkulation', vn: 'Tính giá đồ uống' },
          { id: 'umsatzoptimierung', de: 'Umsatzoptimierung & Upselling', vn: 'Tối ưu doanh thu & Upselling' },
          { id: 'wareneinsatz', de: 'Wareneinsatz-Controlling Bar', vn: 'Kiểm soát chi phí NVL' },
          { id: 'menu_engineering', de: 'Menu Engineering', vn: 'Menu Engineering' }
        ]
      }
    };

    /* ═══════════════════ buildAssess() — Vanilla JS ═══════════════════ */
    let _assess = { step: 'select', cluster: 'sushi_cold', sub: '', questions: [], qIdx: 0, answers: [], checkItems: [], saved: false };

    function buildAssess() {
      const root = document.getElementById('assess-root');
      if (!root) return;
      const isVn = currentLang === 'vi';
      const a = _assess;

      if (a.step === 'select') { renderAssessSelect(root, isVn); }
      else if (a.step === 'quiz') { renderAssessQuiz(root, isVn); }
      else if (a.step === 'check') { renderAssessCheck(root, isVn); }
      else if (a.step === 'result') { renderAssessResult(root, isVn); }
    }

    function renderAssessSelect(root, isVn) {
      const a = _assess;
      const cl = ASSESS_CLUSTERS;
      let html = `<div class="assess-wrap">
        <div class="assess-card assess-header"><span class="ah-icon">🎯</span><div><div class="ah-title">${isVn ? 'Đánh giá Kỹ năng' : 'Skill-Bewertung'}</div><div class="ah-sub">${isVn ? 'Quiz + Tự đánh giá thực tế' : 'Quiz + Selbsteinschätzung'}</div></div></div>
        <div class="assess-card"><div style="display:flex;flex-direction:column;gap:16px;">
          <div><div class="assess-label">${isVn ? 'Nhóm kỹ năng' : 'Cluster'}</div>
          <div class="assess-cluster-bar">`;
      Object.entries(cl).forEach(([k, c]) => {
        const act = a.cluster === k;
        html += `<button class="assess-cluster-btn${act ? ' active' : ''}" style="${act ? `border-color:${c.color};background:${c.color}15;color:${c.color}` : ''}" onclick="_assess.cluster='${k}';_assess.sub='';buildAssess()">${c.icon} ${isVn ? c.vn : c.de}</button>`;
      });
      html += `</div></div><div><div class="assess-label">Subskill</div><div class="assess-sub-grid">`;
      const subs = cl[a.cluster]?.subs || [];
      subs.forEach(s => {
        const act = a.sub === s.id;
        const hasQ = QUIZ[s.id] && QUIZ[s.id].length > 0;
        html += `<button class="assess-sub-btn${act ? ' active' : ''}" onclick="_assess.sub='${s.id}';buildAssess()">
          <div class="sub-name">${isVn ? s.vn : s.de}</div>
          <div class="sub-badges">${hasQ ? '<span style="background:#eff6ff;color:#2563eb;">Quiz</span>' : ''}</div></button>`;
      });
      html += `</div></div>`;
      // Info box
      if (a.sub) {
        const subInfo = subs.find(s => s.id === a.sub);
        const qCount = (QUIZ[a.sub] || []).length;
        const cCount = (CHECKLIST[a.sub] || []).length;
        html += `<div class="assess-info-box"><div class="info-name">${cl[a.cluster].icon} ${isVn ? subInfo.vn : subInfo.de}</div>
          <div class="info-counts">${qCount > 0 ? `<span style="color:#2563eb">✓ ${qCount} ${isVn ? 'câu hỏi' : 'Fragen'}</span>` : ''}${cCount > 0 ? `<span style="color:#059669">✓ ${cCount} ${isVn ? 'tiêu chí' : 'Kriterien'}</span>` : ''}</div></div>`;
      }
      html += `<button class="assess-start-btn" ${!a.sub ? 'disabled' : ''} onclick="startAssessQuiz()">${isVn ? '🚀 Bắt đầu đánh giá' : '🚀 Bewertung starten'}</button>
        </div></div></div>`;
      root.innerHTML = html;
    }

    function startAssessQuiz() {
      const a = _assess;
      const pool = QUIZ[a.sub] || [];
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      a.questions = shuffled.slice(0, Math.min(3, shuffled.length));
      a.answers = new Array(a.questions.length).fill(null);
      a.checkItems = (CHECKLIST[a.sub] || []).map(i => ({ ...i, checked: false }));
      a.qIdx = 0;
      a.saved = false;
      a.step = a.questions.length > 0 ? 'quiz' : (a.checkItems.length > 0 ? 'check' : 'result');
      buildAssess();
    }

    function renderAssessQuiz(root, isVn) {
      const a = _assess;
      const q = a.questions[a.qIdx];
      const progress = Math.round((a.qIdx / a.questions.length) * 100);
      let html = `<div class="assess-wrap">
        <div class="assess-card assess-header"><span class="ah-icon">🎯</span><div><div class="ah-title">${isVn ? 'Đánh giá Kỹ năng' : 'Skill-Bewertung'}</div></div>
          <button class="assess-back-btn" onclick="_assess.step='select';_assess.saved=false;buildAssess()">← ${isVn ? 'Quay lại' : 'Zurück'}</button></div>
        <div class="assess-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <div style="font-weight:700;font-size:0.85rem;">📝 ${isVn ? `Câu ${a.qIdx+1}/${a.questions.length}` : `Frage ${a.qIdx+1}/${a.questions.length}`}</div>
            <div style="font-size:0.72rem;color:var(--text-muted);">Quiz ${progress}%</div></div>
          <div style="height:4px;background:var(--border);border-radius:99px;margin-bottom:20px;overflow:hidden;"><div style="height:100%;width:${progress}%;background:var(--ac);transition:width .3s;"></div></div>
          <div style="font-weight:600;font-size:0.9rem;margin-bottom:16px;line-height:1.5;">${isVn ? q.q.vn : q.q.de}</div>
          <div style="display:flex;flex-direction:column;gap:8px;">`;
      (isVn ? q.opts.vn : q.opts.de).forEach((opt, i) => {
        const sel = a.answers[a.qIdx] === i;
        html += `<button onclick="_assess.answers[_assess.qIdx]=${i};buildAssess()" style="padding:12px 16px;border-radius:10px;border:${sel ? '2px solid var(--ac)' : '1px solid var(--border)'};background:${sel ? 'rgba(37,99,235,.08)' : 'transparent'};text-align:left;cursor:pointer;font-weight:${sel ? 700 : 400};color:${sel ? 'var(--ac)' : 'var(--text)'};font-size:0.85rem;font-family:inherit;">
          <span style="font-weight:700;margin-right:8px;color:var(--text-muted);">${String.fromCharCode(65+i)}.</span>${opt}</button>`;
      });
      html += `</div><button onclick="assessNextQ()" ${a.answers[a.qIdx]===null?'disabled':''} class="assess-start-btn" style="margin-top:16px;">${a.qIdx < a.questions.length-1 ? (isVn?'Tiếp →':'Weiter →') : (isVn?'Xong Quiz →':'Quiz abschließen →')}</button>
        </div></div>`;
      root.innerHTML = html;
    }

    function assessNextQ() {
      const a = _assess;
      if (a.qIdx < a.questions.length - 1) { a.qIdx++; }
      else { a.step = a.checkItems.length > 0 ? 'check' : 'result'; }
      buildAssess();
    }

    function renderAssessCheck(root, isVn) {
      const a = _assess;
      const done = a.checkItems.filter(c => c.checked).length;
      let html = `<div class="assess-wrap">
        <div class="assess-card assess-header"><span class="ah-icon">🎯</span><div><div class="ah-title">${isVn ? 'Đánh giá Kỹ năng' : 'Skill-Bewertung'}</div></div>
          <button class="assess-back-btn" onclick="_assess.step='select';_assess.saved=false;buildAssess()">← ${isVn ? 'Quay lại' : 'Zurück'}</button></div>
        <div class="assess-card">
          <div style="font-weight:700;font-size:0.9rem;margin-bottom:4px;">✅ ${isVn ? 'Tự đánh giá thực tế' : 'Selbsteinschätzung'}</div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:16px;">${isVn ? 'Tick những gì bạn tự tin thực hiện được:' : 'Kreuze an, was du sicher ausführen kannst:'}</div>
          <div style="display:flex;flex-direction:column;gap:10px;">`;
      a.checkItems.forEach((item, i) => {
        const ch = item.checked;
        html += `<div onclick="_assess.checkItems[${i}].checked=!_assess.checkItems[${i}].checked;buildAssess()" style="display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:10px;border:${ch?'2px solid #059669':'1px solid var(--border)'};background:${ch?'rgba(5,150,105,.06)':'transparent'};cursor:pointer;">
          <div style="width:20px;height:20px;border-radius:6px;border:2px solid ${ch?'#059669':'var(--border)'};background:${ch?'#059669':'transparent'};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${ch?'<span style="color:#fff;font-size:12px;font-weight:700;">✓</span>':''}</div>
          <span style="font-size:0.85rem;font-weight:${ch?600:400};color:${ch?'#059669':'var(--text)'};">${isVn ? item.vn : item.de}</span></div>`;
      });
      html += `</div><div style="margin-top:12px;font-size:0.78rem;color:var(--text-muted);text-align:right;">${done}/${a.checkItems.length} ${isVn?'tiêu chí':'Kriterien'}</div>
        <button onclick="_assess.step='result';buildAssess()" class="assess-start-btn" style="margin-top:16px;">${isVn ? 'Xem kết quả →' : 'Ergebnis ansehen →'}</button>
        </div></div>`;
      root.innerHTML = html;
    }

    function renderAssessResult(root, isVn) {
      const a = _assess;
      const quizCorrect = a.answers.filter((v,i) => v === a.questions[i]?.ans).length;
      const quizPct = a.questions.length > 0 ? Math.round((quizCorrect/a.questions.length)*100) : 100;
      const checkDone = a.checkItems.filter(c => c.checked).length;
      const checkPct = a.checkItems.length > 0 ? Math.round((checkDone/a.checkItems.length)*100) : 100;
      const level = calcLevel(quizPct, checkPct);
      const lm = LEVEL_META[level];

      let html = `<div class="assess-wrap">
        <div class="assess-card assess-header"><span class="ah-icon">🎯</span><div><div class="ah-title">${isVn ? 'Đánh giá Kỹ năng' : 'Skill-Bewertung'}</div></div>
          <button class="assess-back-btn" onclick="_assess.step='select';_assess.saved=false;buildAssess()">← ${isVn ? 'Quay lại' : 'Zurück'}</button></div>
        <div class="assess-card">
          <div style="font-weight:800;font-size:1rem;margin-bottom:16px;text-align:center;">📊 ${isVn ? 'Kết quả Đánh giá' : 'Bewertungsergebnis'}</div>`;
      // Score bars
      if (a.questions.length > 0) {
        html += `<div style="margin-bottom:10px;"><div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:4px;"><span style="font-weight:600;">📝 Quiz (40%)</span><span style="font-weight:700;color:var(--ac);">${quizCorrect}/${a.questions.length} — ${quizPct}%</span></div>
          <div style="height:8px;background:var(--border);border-radius:99px;overflow:hidden;"><div style="height:100%;width:${quizPct}%;background:var(--ac);transition:width .5s;"></div></div></div>`;
      }
      if (a.checkItems.length > 0) {
        html += `<div style="margin-bottom:20px;"><div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:4px;"><span style="font-weight:600;">✅ ${isVn?'Thực tế (60%)':'Selbsteinschätzung (60%)'}</span><span style="font-weight:700;color:#059669;">${checkDone}/${a.checkItems.length} — ${checkPct}%</span></div>
          <div style="height:8px;background:var(--border);border-radius:99px;overflow:hidden;"><div style="height:100%;width:${checkPct}%;background:#059669;transition:width .5s;"></div></div></div>`;
      }
      // Level badge
      html += `<div style="background:${lm.c}10;border:2px solid ${lm.c};border-radius:16px;padding:20px;text-align:center;margin-bottom:16px;">
        <div style="font-size:2rem;margin-bottom:4px;">${lm.emoji}</div>
        <div style="font-size:1.15rem;font-weight:800;color:${lm.c};">${lm.l}</div>
        <div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px;">${isVn?'Đề xuất Level':'Vorgeschlagenes Level'}: ${level}/4</div></div>`;
      // Actions
      html += `<div style="display:flex;gap:8px;">
        <button onclick="_assess.step='select';_assess.saved=false;buildAssess()" style="flex:1;padding:12px;border-radius:12px;border:1px solid var(--border);background:transparent;color:var(--text);font-weight:600;font-size:0.85rem;cursor:pointer;font-family:inherit;">${isVn?'Đánh giá lại':'Nochmal'}</button>
        <button onclick="_assess.step='select';_assess.saved=false;buildAssess()" class="assess-save-btn" style="flex:2;padding:12px;border-radius:12px;border:none;font-weight:700;font-size:0.9rem;cursor:pointer;font-family:inherit;">✅ ${isVn?'Hoàn tất':'Fertig'}</button></div>
        </div></div>`;
      root.innerHTML = html;
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

    // Service Worker disabled — direct loading is faster and more reliable
    // if ('serviceWorker' in navigator) {
    //   navigator.serviceWorker.register('sw.js').catch(() => { });
    // }

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
