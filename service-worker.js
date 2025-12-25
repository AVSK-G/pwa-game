const CACHE_NAME = "pwa-game-v5";

const urlsToCache = [
  "/pwa-game/",
  "/pwa-game/index.html",
  "/pwa-game/manifest.json",
  "/pwa-game/icon-192.png",
  "/pwa-game/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});