/* Keeps the Round Logger working with no signal at the venue. */
const CACHE = 'round-logger-v2.6';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-180.png'];
self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', e =>
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('round-logger-') && k !== CACHE)
      .map(k => caches.delete(k))))
    .then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;                 // never cache a sync push
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;             // GitHub calls go straight out
  e.respondWith(
    fetch(e.request)
      .then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(k => k.put(e.request, c)); } return r; })
      .catch(() => caches.match(e.request).then(m => m || caches.match('./index.html')))
  );
});
