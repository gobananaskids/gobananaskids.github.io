'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "55552bfcead2f74d1e1b474fb1005edd",
"assets/assets/images/ballpool.jpg": "a1f80b97163f6423507a96b185dbac33",
"assets/assets/images/banana.png": "8ef4ee0f23c5761f6a286462fbeb1146",
"assets/assets/images/BananaLeft.png": "3706bb14cf4e20af8f0daa19023b02c2",
"assets/assets/images/block.jpg": "3d361d3250b86f95e15c4d09315db084",
"assets/assets/images/cake.png": "a0ea8bb15d76678d90ef7d03b8cd12b3",
"assets/assets/images/facebook.png": "a6c3141c2692cfd6cee61224fce05370",
"assets/assets/images/girl.jpg": "bca4e8dcd2a493b69232643d8fefa250",
"assets/assets/images/GoBananaAboutIcon.png": "cc2b26e6a51a8bb4b818f42874ce399f",
"assets/assets/images/GoBananasLogoWeb.png": "79fefc1d789e261299ee64609610fff8",
"assets/assets/images/greenBg.jpg": "7d38b3b3ac15e30b107ecde700f81ae3",
"assets/assets/images/group.jpg": "bd78ea9daa60b7fc6228ac9acde727f2",
"assets/assets/images/instagram.png": "b8bc2d348022e648e4330d974c3c39b5",
"assets/assets/images/legoTable.jpg": "f3d236ab97601df47d597a35d8387123",
"assets/assets/images/maxiBirthday.jpg": "614d597aeae85e55cdffea2d01150b47",
"assets/assets/images/maxiIcon.png": "c88f8a73253e4760bcc004135b6bcd81",
"assets/assets/images/merrygo.jpg": "2ab8f79c13d0e7233ddc4a685702f983",
"assets/assets/images/miniBirthday.jpg": "8e642d15a5086d8547cd2edb4bc94a6d",
"assets/assets/images/miniIcon.png": "cf16977d055799851c5c410b61eccda7",
"assets/assets/images/muchmore.jpg": "da51037dec916c47e228b1b7b58fd803",
"assets/assets/images/obstracle.jpg": "6afcab5649130e5b3928d9faafc6f84f",
"assets/assets/images/parent.jpg": "f36c008be0a5e213e023a7d6fba6d7be",
"assets/assets/images/phoneTest.png": "fd39d375776e27677b151cf1766e02ff",
"assets/assets/images/piano.jpg": "fd546728b1aaf9d8ae51f958fd0ab838",
"assets/assets/images/sandpit.jpg": "37b9844aed1f090a791f4fd66f0e50c1",
"assets/assets/images/slide.JPG": "fcece6a0b9bd613f493be58ac2b08482",
"assets/assets/images/spongepool.jpg": "ee8e35fc1db6548f3cb9b6506a802972",
"assets/assets/images/swing.jpg": "4809e85423138a553a9eebe8215de7e1",
"assets/assets/images/ThumbNail.png": "b2332050a0fff646108dfd4debf096e4",
"assets/assets/images/trampoline.jpg": "450114ce990b728016e37500385685e1",
"assets/assets/images/twitter.png": "9148d6c7413406403f4cb00812d5d45c",
"assets/assets/images/ultimateBirthday.jpg": "1eac9c8d7b8b2aad15c6cb3c71dd76d3",
"assets/assets/images/utlimateIcon.png": "5ca56232b474f666173c25f09197df27",
"assets/assets/images/wallclimb.jpg": "9f05f3e79ce8da756e84743c602464c5",
"assets/assets/images/wallpuzzle.jpg": "ce7f75bfeb889c119b197c2d76d7d7af",
"assets/assets/images/WebDesignMobile1.png": "d4ea812bc419ab1c7b9c19a703d7d2a6",
"assets/assets/images/WebHomeBg1.png": "4997183e831cc0b81570e6527df46e71",
"assets/assets/images/webTest.png": "5b045bd172d1c41fb46a217d118772a3",
"assets/assets/images/whatsapp.png": "2aacd3e08539fbdcc232996ce4f01524",
"assets/assets/images/yellowBg.jpg": "0e151611a8a11b27e23e58c7abd95ad8",
"assets/assets/images/youtube.png": "0a30a0f07c5aeb2c835e94d3df06e219",
"assets/assets/video/MobileWebComp.mp4": "c6cb4b41bad0ac5f55c6e045d74ad042",
"assets/assets/video/WebComp.mp4": "381bfa93dd38929171e05e30192d3612",
"assets/font/Carrotflower.ttf": "e2c69ad46e072dfd8372a9f64821038d",
"assets/font/Linotte-Light.otf": "fcee67f8b0adb4569a9d36920057a9dd",
"assets/font/Linotte-SemiBold.otf": "ba8e277df8751a24590234a82d16f90a",
"assets/FontManifest.json": "d2920976a3c1d224844e0cad1f2a8134",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7391dc2bd61d0c522c1cd9ed6ef52c4b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "b0939080145f44921f8ba9e6d9dde3d4",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "412fe9a3c6d150402de9984bbe7421b7",
"/": "412fe9a3c6d150402de9984bbe7421b7",
"main.dart.js": "09544aa084055ca5ff5ada37dd0a6040",
"manifest.json": "a54b551f9798406533839f2728386b55",
"version.json": "3a037d088b8499805cfce2dd9c9b6bdc"
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
