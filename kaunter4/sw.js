const C='k4-v1.3.0',F=['./','index.html','cards.js?v=1.3.0','game.js?v=1.3.0','manifest.json','icon.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.allSettled(F.map(u=>fetch(new Request(u,{cache:'reload'})).then(r=>r.ok&&c.put(u,r))))));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!='GET'||!r.url.startsWith(self.location.origin))return;
e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r,{ignoreSearch:false}).then(m=>m||caches.match(r,{ignoreSearch:true}))))});
