const CACHE_NAME = 'nautica-pna-v9';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/styles.css',
  '/assets/icon-512.svg',
  '/js/data-conductor.js',
  '/js/data-timonel.js',
  '/js/data-patron.js',
  '/js/data-piloto.js',
  '/js/data-resources.js',
  '/js/data-ripa-reglamentacion-videos.js',
  '/js/video-simulator.js',
  '/js/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api/')) return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
