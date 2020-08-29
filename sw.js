const cacheName = 'Codenames';
const resourcesToPrecache = [
    'index.html',
    'album.css',
    'sourceCode.js',
    'manifest.json',
    'images/black.png',
    'images/blue.png',
    'images/red.png',
    'images/yellow.png',
    'images/default.png',
];


self.addEventListener('install', event => {
    console.log("installed");
    event.waitUntil(caches.open(cacheName)
    .then(cache => {
        return cache.addAll(resourcesToPrecache);
    })
    );
});


self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open('Codenames').then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response || fetch(event.request);;
        });
      })
    );
  });