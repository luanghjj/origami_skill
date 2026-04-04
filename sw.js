const CACHE_NAME = 'origami-v15';
const ASSETS = [
  './',
  './index.html',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js',
  './images/brita-wasser.png',
  './images/coca-cola.png',
  './images/coca-cola-zero.png',
  './images/fanta.png',
  './images/spezi.png',
  './images/sprite.png',
  './images/ginger-ale.png',
  './images/ginger-beer.png',
  './images/wild-peach.png',
  './images/apfelsaft.png',
  './images/maracujasaft.png',
  './images/mangosaft.png',
  './images/lycheesaft.png',
  './images/schorle.png',
  './images/kaffee.png',
  './images/espresso.png',
  './images/doppio.png',
  './images/cappuccino.png',
  './images/green-tea.png',
  './images/jasmin-tee.png',
  './images/ingwer-tee.png',
  './images/against-cold.png',
  './images/asian-cooler.png',
  './images/mango-mule.png',
  './images/yuzu-limonade.png',
  './images/kirin-ichiban.png',
  './images/kirin-zero.png',
  './images/hefeweizen.png',
  './images/radler.png',
  './images/hugo.png',
  './images/aperol-spritz.png',
  './images/lillet-peach.png',
  './images/whiskey-coke.png',
  './images/moscow-mule.png',
  './images/gin-tonic-roku.png',
  './images/gin-kaiza.png',
  './images/gin-momotaro.png',
  './images/sake-soto.png',
  './images/riesling.png',
  './images/chardonnay.png',
  './images/rotwein.png',
  './images/rose.png',
  './images/champagner.png'
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
  // Cache-first for static assets
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
