importScripts('https://www.jsonkk.com/utils/workbox-sw.js');
if(workbox){
  console.log(workbox);
  workbox.routing.registerRoute(
    new RegExp('^https:\/\/avatar01\.jiaoliuqu\.com\/.*$'),
    workbox.strategies.staleWhileRevalidate()
  );
  workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images
          maxEntries: 200,
          // Cache for a maximum of a week
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  );
}
else{
  console.log('workbox id loaded bad');
}