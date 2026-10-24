// Enkel offline-cache för Jarvis hemskärm. Kräver https (eller localhost).
var CACHE='hemskarm-v4-1';
var FILES=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES);}));self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==CACHE;}).map(function(n){return caches.delete(n);}));}));});
self.addEventListener('fetch',function(e){
  var url=new URL(e.request.url);
  if(e.request.method!=='GET'||url.origin!==location.origin)return;
  if(url.pathname.indexOf('dagens.json')>=0)return; // alltid färsk från nätet
  // Nätet först, cache som reserv – så uppdateringar slår igenom när nätet finns.
  e.respondWith(fetch(e.request).then(function(r){var cp=r.clone();caches.open(CACHE).then(function(c){c.put(e.request,cp);});return r;})
    .catch(function(){return caches.match(e.request).then(function(m){return m||caches.match('./index.html');});}));
});
