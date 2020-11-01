# MyContacts
Learn at Udemy
Use PWA and Firebase

Study case PWA build a Management Contacts

The plot for PWA :
1. Create icons for PWA
 - sizes : 48, 72, 96, 144, 192, for playstore and appstore
 - choose a icon for purpose any maskable
2. Create a manifest file
 - short name
 - name
 - icons
 - start url
 - background color
 - display
 - theme color
 - orientation
3. Registration a Service Worker
4. Installation a Service Worker
5. Activation a Service Worker
6. You can find deficiency with audit from lighthouse
7. Service worker listen fetch event. 
 - Function is for return a static cache or request a new cache then store for a dynamic cache
 - also can limit a cache, for this you can create a function like this :
 
   ``const limitNumCache = (cacheName, num) => {
        caches.open(cacheName).then(cache => {
            cache.keys().then(keys => {
                if (keys.length > num) {
                    cache.delete(keys[0]).then(limitNumCache(cacheName, num));
                }
            })
        })
    }``
8. Create a core assets cache
9. Return a asset to the app
10. Create a dynamic cache
11. Create a fallback page
12. Limit a cache in dynamic cache
13. ... still learn
