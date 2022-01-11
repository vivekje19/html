if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    
    console.log('Workbox is loaded ðŸš€');

    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  
      {"revision":"","url":"./js13kpwa.webmanifest"}   

     ]);

    /* custom cache rules */

    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );
    

    workbox.routing.registerRoute(
      /.*\.png/,
      new workbox.strategies.StaleWhileRevalidate()
    );
    workbox.routing.registerRoute(
      /.*\.jpg/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    workbox.routing.registerRoute(
      /.*\.gif/,
      new workbox.strategies.StaleWhileRevalidate()
    );
    workbox.routing.registerRoute(
      /.*\.json/,
      new workbox.strategies.StaleWhileRevalidate()
    );
    workbox.routing.registerRoute(
      /.*\.ico/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    workbox.routing.registerRoute(
      /.*\.svg/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}