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
