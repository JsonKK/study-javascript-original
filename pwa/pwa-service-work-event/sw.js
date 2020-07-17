
function catchStatic(){
  let catchArr = [
    '/pwa-service-work-event/assets/img/main-bg.png',
    'assets/img/app-icon144.png'
  ];
  return catchArr;
}


//在当前作用内当前对象可以使用this或者self
self.addEventListener('install',event => {
  console.log('install',event);
  //让service worker跳过等待，直接进入到activate状态
  //等待skipWaiting结束，才进入到active
  console.log('[Service Worker] Install');
  event.waitUntil(
    caches.open('cacheName').then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      //如果资源找不到，会报错
      //Uncaught (in promise) TypeError: Request failed
      return cache.addAll(catchStatic());
    })
  );
})

//增加活动
self.addEventListener('activate' , event => {
  console.log('activate',event);
  // 表示service worker激活后，立即获取控制权
  event.waitUntil(self.ClientRectList.claim())
})

//fetch事件会在请求发送时候触发
self.addEventListener('fetch', function(event) {
  // var response;
  // event.respondWith(caches.match(event.request).catch(function() {
  //   return fetch(event.request);
  // }).then(function(r) {
  //   response = r;
  //   if(response){
  //     caches.open('cacheName').then(function(cache) {
  //       cache.put(event.request, response);
  //     });
  //     return response.clone();
  //   }
    
  // }));
});