/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "809275ba5411cf82bc49d1cd80602423"
  },
  {
    "url": "assets/Browse-Dark.png",
    "revision": "f37141d4c71fa7ed6a96677eebbba868"
  },
  {
    "url": "assets/Browse-Light.png",
    "revision": "af36bd987afd8aeecc8283e7051fe57d"
  },
  {
    "url": "assets/css/0.styles.6c64037f.css",
    "revision": "94b5618ca00a8e7e54ead0151aa69bbf"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.012cf6a1.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.570eb838.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.a37b0c01.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.e79bfd88.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "assets/img/MaterialIcons-Regular.a1adea65.svg",
    "revision": "a1adea65594c502f9d9428f13ae210e1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.266c0dff.js",
    "revision": "64e78a1179830c3235bb376862ebc23d"
  },
  {
    "url": "assets/js/10.9f2eee56.js",
    "revision": "a79caf38df719873dd34a6ee5700b04a"
  },
  {
    "url": "assets/js/11.a30a4aa2.js",
    "revision": "f0ea25e288f5dcb69e80660501906c59"
  },
  {
    "url": "assets/js/12.14cc93b3.js",
    "revision": "6128ee7255442c5c93f68da54a929b33"
  },
  {
    "url": "assets/js/13.a2779125.js",
    "revision": "1cb7f9401f7982a6155384f028b2bcb0"
  },
  {
    "url": "assets/js/14.bad2c2c9.js",
    "revision": "b5791c205ccab501829c5fd32053aff7"
  },
  {
    "url": "assets/js/15.fd1222d8.js",
    "revision": "4999f97676f02504399ef66c71bcbc89"
  },
  {
    "url": "assets/js/16.35db8ff0.js",
    "revision": "f4a2c7add59f19c221314b6236f83a3a"
  },
  {
    "url": "assets/js/17.e4e0b33d.js",
    "revision": "e3ec23c8752943030d4975994f9dd017"
  },
  {
    "url": "assets/js/18.76bd22bd.js",
    "revision": "d56d58d4794dea2d624253a0b380d2f5"
  },
  {
    "url": "assets/js/19.ef69c713.js",
    "revision": "286bdb15cf0a40d36dcdfd50b9107926"
  },
  {
    "url": "assets/js/2.0b4b3a84.js",
    "revision": "70a1cfc65cb8ba8f9e9dcba2e6388136"
  },
  {
    "url": "assets/js/20.b119c73a.js",
    "revision": "c7117ec9537ef278b558405fa76b3ea0"
  },
  {
    "url": "assets/js/21.caafca57.js",
    "revision": "6915e7141429fa4d6c73a6465e0417ca"
  },
  {
    "url": "assets/js/22.34ffa093.js",
    "revision": "c5b7f7f22e667db8f95d2db24e70ae9e"
  },
  {
    "url": "assets/js/23.f3bfe4b4.js",
    "revision": "37735c56f361ec8fdf052f4d177b8b83"
  },
  {
    "url": "assets/js/24.7fc3e3c6.js",
    "revision": "3613e5cb9d0e417732547621bfa562c4"
  },
  {
    "url": "assets/js/25.3a9bdf22.js",
    "revision": "4ffc38102584e4fdfb4168e98796a3e6"
  },
  {
    "url": "assets/js/26.f6cd03f6.js",
    "revision": "a76f5bf6591eb8ad43e7c1e6dd43fae0"
  },
  {
    "url": "assets/js/27.ebcbd7b1.js",
    "revision": "7cb838a0f6fab28ddda3f35438e64fe0"
  },
  {
    "url": "assets/js/28.0d91197c.js",
    "revision": "ec104f55027833605f89db3228d2507a"
  },
  {
    "url": "assets/js/29.b74c0331.js",
    "revision": "8a1f6384602e1df12a702bde9294e08d"
  },
  {
    "url": "assets/js/3.1b4929b2.js",
    "revision": "139e02e64c36300674183cbdab31c83c"
  },
  {
    "url": "assets/js/30.32e3e00d.js",
    "revision": "0d4ee375dea5844ec83b45fa390aa1a1"
  },
  {
    "url": "assets/js/31.d2a0b413.js",
    "revision": "4f0d276a42cc59fcbfb22a11c76ae4a1"
  },
  {
    "url": "assets/js/32.ed322da6.js",
    "revision": "f8b706eef7b63eaef716bed698a3c3db"
  },
  {
    "url": "assets/js/33.19a18c2f.js",
    "revision": "e8f701309c2cffd1102fa5b44680b741"
  },
  {
    "url": "assets/js/34.7fda39a2.js",
    "revision": "e6eca75e8053bd0ed8f28ac90d116f61"
  },
  {
    "url": "assets/js/35.dddf39ae.js",
    "revision": "ae85df6f3010381ce5d04efc2985d126"
  },
  {
    "url": "assets/js/36.037f0beb.js",
    "revision": "511d4914d3313e315df0aff83640c849"
  },
  {
    "url": "assets/js/37.d65ff840.js",
    "revision": "2e93ad2c54cd4b25121a844b86fd6d93"
  },
  {
    "url": "assets/js/38.fc5a510c.js",
    "revision": "0032cfc9c084ab7f679e6c1b13e08d6b"
  },
  {
    "url": "assets/js/39.9f553d1a.js",
    "revision": "b0d7de6ef9209d82ce81f57f0e95a2a6"
  },
  {
    "url": "assets/js/6.e26d9fe8.js",
    "revision": "2f648afba7ab0f5d95427e61c2e6ab9d"
  },
  {
    "url": "assets/js/7.d747aa14.js",
    "revision": "3cefce62100c4e46f91d9579f843cd21"
  },
  {
    "url": "assets/js/8.91842050.js",
    "revision": "faee68720210af68ef5cd83f7cb6efe3"
  },
  {
    "url": "assets/js/9.8ba26b91.js",
    "revision": "ad414ec7242b46977c7a1e497545f496"
  },
  {
    "url": "assets/js/app.345f9bc7.js",
    "revision": "b368d1711ef1752a88299949375862c1"
  },
  {
    "url": "assets/js/vendors~docsearch.7e59632f.js",
    "revision": "b36beefebd7fa88a50f69eb70c7194a3"
  },
  {
    "url": "assets/Library-Dark.png",
    "revision": "5c85f77ce2a7c6f37f8f98bab69e4c15"
  },
  {
    "url": "assets/Library-Light.png",
    "revision": "040387dbc173d69e3e5f56cb6d516df9"
  },
  {
    "url": "assets/Manga-Dark.png",
    "revision": "f30652a9b7b9ad14f5853b8699900f0a"
  },
  {
    "url": "assets/Manga-Light.png",
    "revision": "e25c95d779a68b080e5fc1c250fd7314"
  },
  {
    "url": "extensions/index.html",
    "revision": "6c65566ac816f767d07269c23392d4b2"
  },
  {
    "url": "forks/index.html",
    "revision": "a6d851342ead37ef5be72613ba266ddb"
  },
  {
    "url": "forks/Neko/assets/banner.png",
    "revision": "31fc0fefde4a8cfe84adf24c2b5212ff"
  },
  {
    "url": "forks/Neko/assets/logo.png",
    "revision": "9e82e2bb234b4f3e22e0afc7266bf521"
  },
  {
    "url": "forks/Neko/index.html",
    "revision": "b564e1636d46446ad3e51e4554b27a9a"
  },
  {
    "url": "forks/TachiyomiAZ/assets/gunz.png",
    "revision": "7ba4f33a10b643f437c3fd8dadda110a"
  },
  {
    "url": "forks/TachiyomiAZ/assets/logo.png",
    "revision": "8c091950f3de1d0e81e69728db382d0d"
  },
  {
    "url": "forks/TachiyomiAZ/index.html",
    "revision": "f9ebdef3548ce178a72d272dd37aa76b"
  },
  {
    "url": "forks/TachiyomiEH/assets/banner.png",
    "revision": "a2852ea02d260d0395d565b133a9de3c"
  },
  {
    "url": "forks/TachiyomiEH/assets/logo.png",
    "revision": "2d9809f2099cbed6378ad71b26258aff"
  },
  {
    "url": "forks/TachiyomiEH/index.html",
    "revision": "cba3314ee943313d1d832fb13b0c092a"
  },
  {
    "url": "forks/TachiyomiJ2K/assets/banner.png",
    "revision": "df716f69ba60004b7cc03cf8d317a95d"
  },
  {
    "url": "forks/TachiyomiJ2K/assets/logo.png",
    "revision": "c758f9e913e15e23c7a5109784c4f280"
  },
  {
    "url": "forks/TachiyomiJ2K/index.html",
    "revision": "e0c71bbb99875b302e7794125fc7b8a8"
  },
  {
    "url": "forks/TachiyomiSY/assets/banner.png",
    "revision": "507d5932b6464bfdde5e9525d9422eb3"
  },
  {
    "url": "forks/TachiyomiSY/assets/logo.png",
    "revision": "2215e355257fa1fb6e95aa88a3833295"
  },
  {
    "url": "forks/TachiyomiSY/assets/logo.svg",
    "revision": "15a56823b7f78ce96bfff6da8e1d3755"
  },
  {
    "url": "forks/TachiyomiSY/index.html",
    "revision": "5876653ab7f855ac1656f9f3aed0168e"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "efda4f64c814380ddc8959c4038dc291"
  },
  {
    "url": "help/faq/assets/MangaDex-NoResults.png",
    "revision": "50d19b61bf2a1169dfaf00f68eb1f763"
  },
  {
    "url": "help/faq/assets/UnknownSources-Android10.png",
    "revision": "99799a8759fbd492d3c582ea0f5fff97"
  },
  {
    "url": "help/faq/assets/UnknownSources-Android7.png",
    "revision": "0fe1c5865a9d5e10b1b7ab0c04d98aa2"
  },
  {
    "url": "help/faq/index.html",
    "revision": "e8876f1c1d36465ca5ec94d23a15eacd"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "6e657e94c664e140ddde5c08c5d2b687"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "c58758d87cae3452e00a754fdb906210"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "f925e34bfce54776dce751ecbefbe4d4"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-Background-Black.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-Background-White.png",
    "revision": "4b425030809b32c951b8045746454d0b"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-CropBorder-With.png",
    "revision": "ce67a23f3fe437057ffff724ec2b329c"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-CropBorder-Without.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-FitHeight.png",
    "revision": "aa60b7aaf019b4a1ac720626cdf246e3"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-FitScreen.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-FitWidth.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-OriginalSize.png",
    "revision": "fcbada5ec4c2bed02a66adda4c262257"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-SmartFit.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-Stretch.png",
    "revision": "aa60b7aaf019b4a1ac720626cdf246e3"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-ZoomStartPos-Center.png",
    "revision": "bd94e1eb71e220f49c79ed6c9c02f87e"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-ZoomStartPos-Left.png",
    "revision": "dec5ff9cf376aeca7af59606b5e78f4a"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-ZoomStartPos-Right.png",
    "revision": "b59c83acde28d8a3903b09cbacf9dfe4"
  },
  {
    "url": "help/guides/reader-settings/index.html",
    "revision": "8680eee0f3bdc2cf3e276c25ebaf7689"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "9385ee21f83ff4a6f79ab82926fb8346"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "e6b1de9abab21bf158dd4ae860e70088"
  },
  {
    "url": "help/guides/source-problems/assets/WebView-Open.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "55bb1b1733142d35a66cf54869f081ae"
  },
  {
    "url": "help/index.html",
    "revision": "4a2944587cd0e1c76beb2a232e120c6b"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "b1b40b3c083d63bb5b1797b27adf1524"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "342d4bacd45c5b7d8b6c20636e160044"
  },
  {
    "url": "icons/logo.png",
    "revision": "41e7681ddc5c815bf8490f44d51fa8b2"
  },
  {
    "url": "icons/logo.svg",
    "revision": "a2dae57c67a9bbb51367c1dbb4b4d1c2"
  },
  {
    "url": "index.html",
    "revision": "31959cdfba3fcb130f8fcdbe81fa4d63"
  },
  {
    "url": "scripts/remove_service_worker.js",
    "revision": "b5271fcb73441e9409dccc5ca45df5c8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
