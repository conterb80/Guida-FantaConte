const C='gac-rc11-player-hub-v14';
const ASSETS=['./','index.html','style.css?v=14','app.js?v=14','manifest.json','icon.svg','rose-esempio.json'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(C).then(c=>c.put('./',copy));return r}).catch(()=>caches.match('./')));return;}e.respondWith(caches.match(e.request).then(cached=>{const network=fetch(e.request,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(C).then(c=>c.put(e.request,copy));return r});return cached||network;}));});
