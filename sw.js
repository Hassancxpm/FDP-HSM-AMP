importScripts('https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js');

toolbox.precache(['index.html','favicon.png','logo.jpg', 'plan.jpg', 'lampadaire.jpg']);

toolbox.router.default = toolbox.cacheFirst;

self.addEventListener("install", function(event) {
  console.log('SW: Installing service worker');
});
