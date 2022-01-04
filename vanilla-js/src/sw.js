const cachename = 'my-cache';
const urlsToCache = [
    '/',
    '/dist/img.png',
    '/dist/img_1.png',
    '/dist/img_2.png',
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cachename)
            .then((cache) => {
                console.log('Cache opened');
                return cache.addAll(urlsToCache);
            })
    )
})
