const CACHE_NAME = 'origami-v17';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js',
  './images/brita-wasser.webp',
  './images/coca-cola.webp',
  './images/coca-cola-zero.webp',
  './images/fanta.webp',
  './images/spezi.webp',
  './images/sprite.webp',
  './images/ginger-ale.webp',
  './images/ginger-beer.webp',
  './images/wild-peach.webp',
  './images/apfelsaft.webp',
  './images/maracujasaft.webp',
  './images/mangosaft.webp',
  './images/lycheesaft.webp',
  './images/schorle.webp',
  './images/kaffee.webp',
  './images/espresso.webp',
  './images/doppio.webp',
  './images/cappuccino.webp',
  './images/green-tea.webp',
  './images/jasmin-tee.webp',
  './images/ingwer-tee.webp',
  './images/against-cold.webp',
  './images/asian-cooler.webp',
  './images/mango-mule.webp',
  './images/yuzu-limonade.webp',
  './images/kirin-ichiban.webp',
  './images/kirin-zero.webp',
  './images/hefeweizen.webp',
  './images/radler.webp',
  './images/hugo.webp',
  './images/aperol-spritz.webp',
  './images/lillet-peach.webp',
  './images/whiskey-coke.webp',
  './images/moscow-mule.webp',
  './images/gin-tonic-roku.webp',
  './images/gin-kaiza.webp',
  './images/gin-momotaro.webp',
  './images/sake-soto.webp',
  './images/riesling.webp',
  './images/chardonnay.webp',
  './images/rotwein.webp',
  './images/rose.webp',
  './images/champagner.webp'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network-first for Supabase API calls
  if (e.request.url.includes('supabase.co')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }
  // Network-first for HTML, JS, CSS (always get latest)
  const url = new URL(e.request.url);
  if (url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css') || url.pathname === '/') {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  // Cache-first for images and other static assets
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return res;
      });
    })
  );
});
