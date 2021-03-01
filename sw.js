self.addEventListener('install', function (event) {
    console.log('[SW] Installing SW....', event);
   self.skipWaiting();
});

self.addEventListener('activate', function (event) {
    console.log('[SW] activating SW....', event);
});

self.addEventListener('fetch', function (event) {
    console.log('[SW] fetching SW ....', event);
});

// {
//     "name": "Persion PWA Manifest Generator",
//     "short_name": "Manifest Generator",
//     "description": "A project to create a Manifest file",
//     "theme_color": "#ffffff",
//     "background_color": "#f37627",
//     "display": "standalone",
//     "orientation": "portrait-primary",
//     "start_url": "/index.html?utm_source=homescreen",
//     "scope": ".",
//     "dir": "rtl",
//     "lang": "en-US",
//     "icons": [
//         {
//             "src": "image/icons/icon-192x192.png",
//             "sizes": "192x192",
//             "type": "image/png"
//         },
//         {
//             "src": "image/icons/icon-256x256.png",
//             "sizes": "256x256",
//             "type": "image/png"
//         },
//         {
//             "src": "image/icons/icon-384x384.png",
//             "sizes": "384x384",
//             "type": "image/png"
//         },
//         {
//             "src": "image/icons/icon-512x512.png",
//             "sizes": "512x512",
//             "type": "image/png"
//         }
//     ]
// }

