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
  { cat: "Đồ uống không cồn", name: "Brita Wasser", desc: "Nước lọc Brita", ingredients: ["Brita Wasser"], glass: "Ly nước", note: "Phục vụ lạnh hoặc nhiệt độ phòng", img: "images/brita-wasser.png" },
  { cat: "Đồ uống không cồn", name: "Coca-Cola", desc: "Nước ngọt có ga", ingredients: ["Coca-Cola"], glass: "Ly cao", note: "Thêm đá, lát chanh tùy chọn", img: "images/coca-cola.png" },
  { cat: "Đồ uống không cồn", name: "Coca-Cola Zero", desc: "Nước ngọt không calo", ingredients: ["Coca-Cola Zero"], glass: "Ly cao", note: "Thêm đá", img: "images/coca-cola-zero.png" },
  { cat: "Đồ uống không cồn", name: "Fanta", desc: "Nước cam có ga", ingredients: ["Fanta"], glass: "Ly cao", note: "Thêm đá", img: "images/fanta.png" },
  { cat: "Đồ uống không cồn", name: "Spezi", desc: "Hỗn hợp Coca và Fanta", ingredients: ["Coca-Cola", "Fanta"], glass: "Ly cao", note: "Tỉ lệ 1:1 — đổ Fanta trước, Coca-Cola sau", img: "images/spezi.png" },
  { cat: "Đồ uống không cồn", name: "Sprite", desc: "Nước chanh có ga", ingredients: ["Sprite"], glass: "Ly cao", note: "Thêm đá, lát chanh", img: "images/sprite.png" },
  { cat: "Đồ uống không cồn", name: "Ginger Ale", desc: "Nước gừng nhẹ có ga", ingredients: ["Ginger Ale"], glass: "Ly cao", note: "Vị gừng nhẹ, thêm đá", img: "images/ginger-ale.png" },
  { cat: "Đồ uống không cồn", name: "Ginger Beer", desc: "Nước gừng mạnh có ga", ingredients: ["Ginger Beer"], glass: "Ly cao", note: "Vị gừng mạnh hơn Ginger Ale", img: "images/ginger-beer.png" },
  { cat: "Đồ uống không cồn", name: "Wild Peach", desc: "Nước đào", ingredients: ["Wild Peach"], glass: "Ly cao", note: "Thêm đá", img: "images/wild-peach.png" },
  { cat: "Đồ uống không cồn", name: "Apfelsaft", desc: "Nước ép táo", ingredients: ["Nước ép táo (Apfelsaft)"], glass: "Ly thấp", note: "Có thể pha với nước khoáng (Schorle)", img: "images/apfelsaft.png" },
  { cat: "Đồ uống không cồn", name: "Maracujasaft", desc: "Nước ép chanh dây", ingredients: ["Nước ép chanh dây (Maracujasaft)"], glass: "Ly thấp", note: "", img: "images/maracujasaft.png" },
  { cat: "Đồ uống không cồn", name: "Mangosaft", desc: "Nước ép xoài", ingredients: ["Nước ép xoài (Mangosaft)"], glass: "Ly thấp", note: "", img: "images/mangosaft.png" },
  { cat: "Đồ uống không cồn", name: "Lycheesaft", desc: "Nước ép vải", ingredients: ["Nước ép vải (Lycheesaft)"], glass: "Ly thấp", note: "", img: "images/lycheesaft.png" },
  { cat: "Đồ uống không cồn", name: "Schorle", desc: "Nước ép pha nước khoáng", ingredients: ["Nước ép trái cây (tùy chọn)", "Nước khoáng có ga (Sprudel)"], glass: "Ly cao", note: "Tỉ lệ nước ép : nước khoáng = 1:1", img: "images/schorle.png" },

  /* ─── Đồ uống nóng ─── */
  { cat: "Đồ uống nóng", name: "Kaffee", desc: "Cà phê đen", ingredients: ["Cà phê (Kaffee)"], glass: "Tách cà phê", note: "Phục vụ kèm đường và sữa", img: "images/kaffee.png" },
  { cat: "Đồ uống nóng", name: "Espresso", desc: "Cà phê Espresso 1 shot", ingredients: ["Espresso (1 shot)"], glass: "Demitasse (tách nhỏ)", note: "30ml, phục vụ kèm đường", img: "images/espresso.png" },
  { cat: "Đồ uống nóng", name: "Doppio", desc: "Espresso đôi (2 shot)", ingredients: ["Espresso đôi (2 shot)"], glass: "Tách Espresso lớn", note: "60ml", img: "images/doppio.png" },
  { cat: "Đồ uống nóng", name: "Cappuccino", desc: "Espresso với sữa bọt", ingredients: ["Espresso (1 shot)", "Sữa nóng (Milch)", "Bọt sữa (Milchschaum)"], glass: "Tách Cappuccino 180ml", note: "1/3 Espresso – 1/3 sữa nóng – 1/3 bọt sữa, rắc bột cacao", img: "images/cappuccino.png" },
  { cat: "Đồ uống nóng", name: "Grün Tee", desc: "Trà xanh", ingredients: ["Trà xanh (Grüntee)"], glass: "Ấm trà + tách", note: "Ủ 70–80°C, không dùng nước sôi", img: "images/green-tea.png" },
  { cat: "Đồ uống nóng", name: "Jasmin Tee", desc: "Trà nhài", ingredients: ["Trà nhài (Jasmintee)"], glass: "Ấm trà + tách", note: "", img: "images/jasmin-tee.png" },
  { cat: "Đồ uống nóng", name: "Ingwer Tee", desc: "Trà gừng đặc biệt", ingredients: ["Gừng tươi (Ingwer)", "Trà nhài (Jasmintee)", "Mật ong (Honig)"], glass: "Ấm trà + tách", note: "Hãm gừng với trà nhài, thêm mật ong trước khi phục vụ", img: "images/ingwer-tee.png" },
  { cat: "Đồ uống nóng", name: "Against Cold", desc: "Trà giải cảm", ingredients: ["Gừng tươi (Ingwer)", "Trà nhài (Jasmintee)", "Mật ong (Honig)", "Chanh tươi (Zitrone)"], glass: "Ấm trà + tách", note: "Gừng + trà nhài, thêm mật ong và nước cốt chanh — thêm nhiều gừng hơn Ingwer Tee", img: "images/against-cold.png" },

  /* ─── Cocktail không cồn ─── */
  { cat: "Cocktail không cồn", name: "Asian Cooler", desc: "Cocktail bạc hà - gừng mát lạnh", ingredients: ["Bạc hà tươi (Minze)", "Chanh tươi (Zitrone)", "Đường mía (Rohrzucker)", "Ginger Ale"], glass: "Ly cao (Highball)", note: "Giã nhuyễn bạc hà + chanh + đường mía (Muddling), thêm đá bào, top với Ginger Ale, trang trí lá bạc hà", img: "images/asian-cooler.png" },
  { cat: "Cocktail không cồn", name: "Mango Mule", desc: "Cocktail xoài cay nhẹ", ingredients: ["Nước ép xoài (Mangosaft)", "Mật ong (Honig)", "Nước cốt chanh (Zitronensaft)", "Ginger Beer"], glass: "Ly đồng (Copper Mug)", note: "Mix xoài + mật ong + chanh, thêm đá, top với Ginger Beer, trang trí lát chanh", img: "images/mango-mule.png" },
  { cat: "Cocktail không cồn", name: "Yuzu Limonade", desc: "Nước chanh Yuzu Nhật Bản", ingredients: ["Nước chanh Yuzu (Yuzusaft)", "Mật ong (Honig)", "Soda / Nước có ga"], glass: "Ly cao", note: "Mix Yuzu + mật ong, thêm đá, top với Soda, trang trí lát chanh vàng", img: "images/yuzu-limonade.png" },

  /* ─── Bia ─── */
  { cat: "Bia", name: "Kirin Ichiban", desc: "Bia Nhật Bản cao cấp", ingredients: ["Kirin Ichiban (chai/lon)"], glass: "Ly bia / Ly Pilsner", note: "Bia Nhật vị nhẹ, bọt vừa — rót nghiêng ly 45°", img: "images/kirin-ichiban.png" },
  { cat: "Bia", name: "Kirin Ichiban 0%", desc: "Bia Nhật không cồn", ingredients: ["Kirin Ichiban 0% (chai)"], glass: "Ly bia", note: "Không cồn, vị tương tự Kirin thường", img: "images/kirin-zero.png" },
  { cat: "Bia", name: "Hefeweizen", desc: "Bia lúa mì truyền thống Đức", ingredients: ["Hefeweizen (chai/lon)"], glass: "Ly Weizen cao", note: "Rót từ từ, dựng bia xoay cho men nổi đều", img: "images/hefeweizen.png" },
  { cat: "Bia", name: "Radler", desc: "Bia pha nước chanh", ingredients: ["Bia (Hefeweizen hoặc Pils)", "Nước chanh ngọt (Limonade)"], glass: "Ly bia cao", note: "Tỉ lệ bia : Limonade = 1:1, rót đồng thời hoặc bia trước", img: "images/radler.png" },

  /* ─── Khai vị & Cocktail có cồn ─── */
  { cat: "Khai vị & Cocktail", name: "Hugo", desc: "Khai vị hoa cơm cháy mùa hè", ingredients: ["Prosecco", "Bạc hà tươi (Minze)", "Chanh tươi (Zitrone)", "Siro hoa cơm cháy (Holunderblütensirup)"], glass: "Ly Wine / Ly Champagne", note: "Thêm đá, mint + chanh + siro, top với Prosecco — trang trí cành bạc hà", img: "images/hugo.png" },
  { cat: "Khai vị & Cocktail", name: "Aperol Spritz", desc: "Khai vị Aperol cổ điển", ingredients: ["Aperol", "Prosecco", "Soda / Nước có ga"], glass: "Ly Wine lớn (250ml)", note: "Tỉ lệ Aperol : Prosecco : Soda = 3 : 2 : 1 — thêm đá, trang trí lát cam", img: "images/aperol-spritz.png" },
  { cat: "Khai vị & Cocktail", name: "Lillet Peach", desc: "Khai vị Lillet vị đào", ingredients: ["Lillet Blanc", "Nước đào (Wild Peach)"], glass: "Ly Wine", note: "Thêm đá, trang trí lát chanh hoặc lá bạc hà", img: "images/lillet-peach.png" },
  { cat: "Khai vị & Cocktail", name: "Whiskey Coke", desc: "Whiskey pha Coca-Cola", ingredients: ["Whiskey (Jack Daniel's hoặc tương tự)", "Coca-Cola"], glass: "Ly Highball", note: "Tỉ lệ Whiskey : Coca = 1:3, thêm đá, trang trí lát chanh tùy chọn", img: "images/whiskey-coke.png" },
  { cat: "Khai vị & Cocktail", name: "Moscow Mule", desc: "Cocktail Vodka gừng", ingredients: ["Vodka", "Ginger Beer", "Nước cốt chanh (Zitronensaft)"], glass: "Ly đồng (Copper Mug)", note: "Vodka + nước cốt chanh + đá, top với Ginger Beer, trang trí lát chanh + lá bạc hà", img: "images/moscow-mule.png" },
  { cat: "Khai vị & Cocktail", name: "Gin Tonic (Roku)", desc: "Gin Tonic với Roku Gin", ingredients: ["Roku Gin", "Tonic Water"], glass: "Ly Balloon / Ly Highball", note: "Tỉ lệ 1:3 — thêm đá, trang trí theo phong cách Roku (vỏ cam, lá húng quế...)", img: "images/gin-tonic-roku.png" },
  { cat: "Khai vị & Cocktail", name: "Gin Tonic (Kaiza)", desc: "Gin Tonic với Kaiza Gin", ingredients: ["Kaiza Gin", "Tonic Water"], glass: "Ly Balloon / Ly Highball", note: "Tỉ lệ 1:3 — thêm đá", img: "images/gin-kaiza.png" },
  { cat: "Khai vị & Cocktail", name: "Gin Tonic (Momotaro)", desc: "Gin Tonic với Momotaro Gin", ingredients: ["Momotaro Gin", "Tonic Water"], glass: "Ly Balloon / Ly Highball", note: "Tỉ lệ 1:3 — thêm đá, trang trí lát đào tùy chọn", img: "images/gin-momotaro.png" },

  /* ─── Sake & Rượu vang ─── */
  { cat: "Sake & Rượu vang", name: "Sake SOTO", desc: "Rượu gạo Nhật Bản cao cấp", ingredients: ["Sake SOTO"], glass: "Chén sake (Ochoko) hoặc ly nhỏ", note: "Có thể phục vụ lạnh (Reishu), nhiệt độ phòng (Jōon) hoặc nóng (Atsukan)", img: "images/sake-soto.png" },
  { cat: "Sake & Rượu vang", name: "Weißwein — Riesling", desc: "Rượu vang trắng Riesling", ingredients: ["Riesling (vang trắng)"], glass: "Ly vang trắng", note: "Phục vụ lạnh 8–10°C", img: "images/riesling.png" },
  { cat: "Sake & Rượu vang", name: "Weißwein — Chardonnay", desc: "Rượu vang trắng Chardonnay", ingredients: ["Chardonnay (vang trắng)"], glass: "Ly vang trắng", note: "Phục vụ lạnh 10–12°C", img: "images/chardonnay.png" },
  { cat: "Sake & Rượu vang", name: "Rotwein", desc: "Rượu vang đỏ", ingredients: ["Rượu vang đỏ (Rotwein)"], glass: "Ly vang đỏ (rộng hơn)", note: "Nhiệt độ phòng 16–18°C", img: "images/rotwein.png" },
  { cat: "Sake & Rượu vang", name: "Rosé", desc: "Rượu vang hồng", ingredients: ["Rượu vang hồng (Rosé)"], glass: "Ly vang hồng", note: "Phục vụ lạnh 10–12°C", img: "images/rose.png" },
  { cat: "Sake & Rượu vang", name: "Champagner", desc: "Rượu Sâm banh / Champagne", ingredients: ["Champagne / Sekt"], glass: "Ly Champagne (Flute)", note: "Phục vụ lạnh 6–8°C, rót từ từ nghiêng ly", img: "images/champagner.png" },
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
