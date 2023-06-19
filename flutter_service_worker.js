'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2bb06998093d574870485f3336c2530b",
"assets/assets/images/ballpool.jpg": "a1f80b97163f6423507a96b185dbac33",
"assets/assets/images/banana.png": "8ef4ee0f23c5761f6a286462fbeb1146",
"assets/assets/images/BananaLeft.png": "3706bb14cf4e20af8f0daa19023b02c2",
"assets/assets/images/block.jpg": "3d361d3250b86f95e15c4d09315db084",
"assets/assets/images/cake.png": "a0ea8bb15d76678d90ef7d03b8cd12b3",
"assets/assets/images/car.png": "33ed59c775efc894f405d8c99127134b",
"assets/assets/images/caterpillar.jpg": "889a7f10d1f3570bfa2d47e5ce93bfcc",
"assets/assets/images/facebook.png": "a6c3141c2692cfd6cee61224fce05370",
"assets/assets/images/girl.jpg": "bca4e8dcd2a493b69232643d8fefa250",
"assets/assets/images/GoBananaAboutIcon.png": "cc2b26e6a51a8bb4b818f42874ce399f",
"assets/assets/images/GoBananasLogoWeb.png": "79fefc1d789e261299ee64609610fff8",
"assets/assets/images/greenBg.jpg": "7d38b3b3ac15e30b107ecde700f81ae3",
"assets/assets/images/group.jpg": "bd78ea9daa60b7fc6228ac9acde727f2",
"assets/assets/images/hurdles.png": "9a9dc5d815c654454209af14ef4ed993",
"assets/assets/images/instagram.png": "b8bc2d348022e648e4330d974c3c39b5",
"assets/assets/images/interactivegames.jpg": "7b1e79c9116b2853e03185d92fc86634",
"assets/assets/images/legoTable.jpg": "f3d236ab97601df47d597a35d8387123",
"assets/assets/images/legoTable.png": "0110d93599af8ec23fbcf3e41578992e",
"assets/assets/images/maxiBirthday.jpg": "614d597aeae85e55cdffea2d01150b47",
"assets/assets/images/maxiIcon.png": "c88f8a73253e4760bcc004135b6bcd81",
"assets/assets/images/merrygo.jpg": "2ab8f79c13d0e7233ddc4a685702f983",
"assets/assets/images/miniBirthday.jpg": "8e642d15a5086d8547cd2edb4bc94a6d",
"assets/assets/images/miniIcon.png": "cf16977d055799851c5c410b61eccda7",
"assets/assets/images/muchmore.jpg": "da51037dec916c47e228b1b7b58fd803",
"assets/assets/images/obstracle.jpg": "6afcab5649130e5b3928d9faafc6f84f",
"assets/assets/images/parent.jpg": "f36c008be0a5e213e023a7d6fba6d7be",
"assets/assets/images/piano.jpg": "fd546728b1aaf9d8ae51f958fd0ab838",
"assets/assets/images/rainbowBridge.jpg": "0118f40ff32d4a83d0c369bcb45bb0fd",
"assets/assets/images/rollingObstracle.jpg": "aa37f50da3b33728da5e633207974a40",
"assets/assets/images/rollSwing.jpg": "6269572d384c56a427489de83a3f8ad4",
"assets/assets/images/sandpit.png": "50e8565a38b1addab52ecc17a90bb731",
"assets/assets/images/shakingBridge.jpg": "c9d43b963b3ccb448f5af4c3eeb252b1",
"assets/assets/images/slide.jpg": "fcece6a0b9bd613f493be58ac2b08482",
"assets/assets/images/spiderCourse.jpg": "b9ce7e9cec55102d9c6697bf7a658658",
"assets/assets/images/spongepool.jpg": "ee8e35fc1db6548f3cb9b6506a802972",
"assets/assets/images/swing.jpg": "4809e85423138a553a9eebe8215de7e1",
"assets/assets/images/tackles.jpg": "aab3a99183860f433a884cdc0444c662",
"assets/assets/images/ThumbNail.png": "b2332050a0fff646108dfd4debf096e4",
"assets/assets/images/trampoline.png": "fa26ec4c97ac756f7e80db15f9a4d37a",
"assets/assets/images/tunnelSlide.jpg": "4e7f61717a838d9adda199626d27c24c",
"assets/assets/images/twitter.png": "9148d6c7413406403f4cb00812d5d45c",
"assets/assets/images/ultimateBirthday.jpg": "1eac9c8d7b8b2aad15c6cb3c71dd76d3",
"assets/assets/images/utlimateIcon.png": "5ca56232b474f666173c25f09197df27",
"assets/assets/images/wallclimb.jpg": "9f05f3e79ce8da756e84743c602464c5",
"assets/assets/images/wallpuzzle.jpg": "ce7f75bfeb889c119b197c2d76d7d7af",
"assets/assets/images/WebDesignMobile1.png": "d4ea812bc419ab1c7b9c19a703d7d2a6",
"assets/assets/images/WebHomeBg1.png": "4997183e831cc0b81570e6527df46e71",
"assets/assets/images/whatsapp.png": "2aacd3e08539fbdcc232996ce4f01524",
"assets/assets/images/yellowBg.jpg": "0e151611a8a11b27e23e58c7abd95ad8",
"assets/assets/images/youtube.png": "0a30a0f07c5aeb2c835e94d3df06e219",
"assets/assets/images.zip": "43a804c5f9af48ac40f0943b733b9f1b",
"assets/assets/video/MobileWebComp.mp4": "c6cb4b41bad0ac5f55c6e045d74ad042",
"assets/assets/video/WebComp.mp4": "381bfa93dd38929171e05e30192d3612",
"assets/font/Carrotflower.ttf": "e2c69ad46e072dfd8372a9f64821038d",
"assets/font/Linotte-Light.otf": "fcee67f8b0adb4569a9d36920057a9dd",
"assets/font/Linotte-SemiBold.otf": "ba8e277df8751a24590234a82d16f90a",
"assets/FontManifest.json": "d2920976a3c1d224844e0cad1f2a8134",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7391dc2bd61d0c522c1cd9ed6ef52c4b",
"favicon.png": "b0939080145f44921f8ba9e6d9dde3d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "40560cd94ceed1066a221b560ac759bb",
"/": "40560cd94ceed1066a221b560ac759bb",
"main.dart.js": "0e9558f4000dbf946d5d4dd8ae3d80b4",
"manifest.json": "a54b551f9798406533839f2728386b55",
"version.json": "6ddcbd966ad6b0d618d5e838e44a7805"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
