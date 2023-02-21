// 离线缓存处理文件
importScripts('/workbox-sw.js');
console.log(workbox)
workbox.precaching.precacheAndRoute([
  // 注册成功后要立即缓存的资源列表
  '/static/img/index-header-bg.1114a475.png'
])

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  new workbox.strategies.CacheFirst({
      cacheName: 'my-image-cache',
  })
);

// 缓存策略: networkFirst、cacheFirst、staleWhileRevalidate
workbox.routing.registerRoute(
  new RegExp('.*\.html'),
  workbox.strategies.networkFirst()
);

// workbox.routing.registerRoute(
//   new RegExp('.*\.(?:js|css)'),
//   workbox.strategies.cacheFirst()
// );