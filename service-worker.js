importScripts("/ess-table/precache-manifest.22d7420077036b68e4be339550e054aa.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// src/sw.js
// https://auth0.com/blog/vuejs-kanban-board-adding-progressive-web-app-features/#An-Introduction-to-Service-Workers

// ESLint global registration
///* global serviceWorkerOption: false */

const cacheName = 'ess-table';
console.log("cache", cacheName)
// const isExcluded = f => /hot-update|sockjs/.test(f);
//
// const filesToCache = [
//   //...serviceWorkerOption.assets.filter(file => !isExcluded(file)),
//   '/',
//    'https://cdn.jsdelivr.net/npm/solid-auth-client@2.3.0/dist-lib/solid-auth-client.bundle.js',
//    'https://cdn.jsdelivr.net/npm/rdflib/dist/rdflib.min.js',
//    'https://cdn.jsdelivr.net/npm/@solid/query-ldflex/dist/solid-query-ldflex.rdflib.js'
// ];
//
// // Store a response inside the cache
// // Implement this above fetchFromNetwork
// const updateCache = (request, response) =>
//   caches.open(cacheName).then(cache => cache.put(request, response));
//
// const fetchFromNetwork = request =>
//   new Promise((resolve, reject) => {
//     fetch(request).then(response => {
//       if (!isExcluded(request.url) && response) {
//         updateCache(request, response.clone()).then(() => resolve(response));
//       } else {
//         resolve(response);
//       }
//     }, reject);
//   });
//
//
//   // Try to fetch existing responses from the cache
//   // Implement this between fetchFromNetwork and preCache
//   const fetchFromCache = request =>
//     caches.match(request).then(response => response || Promise.reject('failed'));
//
//
// // Cache known assets up-front
// const preCache = () =>
// caches.open(cacheName).then(cache => {
//   cache.addAll(filesToCache);
// });
//
// // Handle the 'install' event
// self.addEventListener('install', event => {
//   console.log('PRECACHE IN SW')
//   event.waitUntil(preCache());
// });
//
//
// self.addEventListener('fetch', event => {
//   console.log(event.request.method)
//   event.respondWith(
//     fetchFromNetwork(event.request).catch(() => fetchFromCache(event.request))
//   );
// });

