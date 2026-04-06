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
