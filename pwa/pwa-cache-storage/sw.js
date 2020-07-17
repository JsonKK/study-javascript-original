const CACHE_NAME = 'cache_v1';
//在当前作用内当前对象可以使用this或者self
self.addEventListener('install',async event => {
  // 用于安装缓存
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll([
    '/pwa-cache-storage/src/',
    '/pwa-cache-storage/src/index.html',
    '/pwa-cache-storage/src/js/index.js',
    '/pwa-cache-storage/src/css/index.css',
    '/pwa-cache-storage/src/css/reset.css'
  ]);
  await self.skipWaiting();
})

//增加活动
// 用于更新缓存
self.addEventListener('activate' ,async event => {
  // 表示service worker激活后，立即获取控制权
  const keys = await caches.keys();
  console.log(keys);
  keys.forEach((key)=>{
    if( key !== CACHE_NAME){
      caches.delete(key)
    }
  })
  await self.clients.claim();
})

// self.addEventListener('fetch', function(event) {
//   event.respondWith(caches.match(event.request).then(function(response) {
//     // caches.match() always resolves
//     // but in case of success response will have value
//     if (response !== undefined) {
//       return response;
//     } else {
//       return fetch(event.request).then(function (response) {
//         // response may be used only once
//         // we need to save clone to put one copy in cache
//         // and serve second one
//         let responseClone = response.clone();
        
//         caches.open(CACHE_NAME).then(function (cache) {
//           cache.put(event.request, responseClone);
//         });
//         return response;
//       }).catch(function () {
//         return caches.match('/sw-test/gallery/myLittleVader.jpg');
//       });
//     }
//   }));
// });

//fetch事件会在请求发送时候触发
self.addEventListener('fetch', (event)=> {
  console.log(event.request.url);
  const req = event.request;
  event.respondWidth(netWorkFirst(req))
});

async function netWorkFirst(req){
  //去缓存中读取数据
  try{
    //先从网络读取最新资源
    const fresh = await fetch(req);
    return fresh;
  }
  catch(error){
    //去缓存中读取数据
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    return cached;
  }
}