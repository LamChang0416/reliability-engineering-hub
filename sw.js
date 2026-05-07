const CACHE_NAME = 'cdu-simulator-v2';
const urlsToCache = [
    './',
    './index.html',
    './tools/cdu_dew_point.html',
    './manifest.json',
    './cdu_icon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 如果在快取中找到，就回傳快取；否則透過網路抓取
                return response || fetch(event.request);
            })
    );
});