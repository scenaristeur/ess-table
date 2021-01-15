// src/sw.js
// https://auth0.com/blog/vuejs-kanban-board-adding-progressive-web-app-features/#An-Introduction-to-Service-Workers

// ESLint global registration
///* global serviceWorkerOption: false */

const cacheName = 'ess-table';
//const isExcluded = f => /hot-update|sockjs/.test(f);

const filesToCache = [
  //...serviceWorkerOption.assets.filter(file => !isExcluded(file)),
  '/',
   'https://cdn.jsdelivr.net/npm/solid-auth-client@2.3.0/dist-lib/solid-auth-client.bundle.js',
   'https://cdn.jsdelivr.net/npm/rdflib/dist/rdflib.min.js',
   'https://cdn.jsdelivr.net/npm/@solid/query-ldflex/dist/solid-query-ldflex.rdflib.js'
];

// Cache known assets up-front
const preCache = () =>
caches.open(cacheName).then(cache => {
  cache.addAll(filesToCache);
});

// Handle the 'install' event
self.addEventListener('install', event => {
  console.log('PRECACHE IN SW')
  event.waitUntil(preCache());
});
