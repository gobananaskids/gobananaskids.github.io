'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "85b60e44951eabb1d000dab5ab8a055f",
"assets/assets/images/ballpool.jpg": "a1f80b97163f6423507a96b185dbac33",
"assets/assets/images/banana.png": "8ef4ee0f23c5761f6a286462fbeb1146",
"assets/assets/images/BananaLeft.png": "3706bb14cf4e20af8f0daa19023b02c2",
"assets/assets/images/cake.png": "a0ea8bb15d76678d90ef7d03b8cd12b3",
"assets/assets/images/car.jpg": "32f52fbbcdd207882b7991cf472c3336",
"assets/assets/images/caterpillar.jpg": "dccd220605c6909ec9b523f77b2f86ed",
"assets/assets/images/compactBirthday.jpg": "5f12bd63d033dce42e89b455125c10c5",
"assets/assets/images/facebook.png": "a6c3141c2692cfd6cee61224fce05370",
"assets/assets/images/girl.jpg": "bca4e8dcd2a493b69232643d8fefa250",
"assets/assets/images/GoBananaAboutIcon.png": "cc2b26e6a51a8bb4b818f42874ce399f",
"assets/assets/images/GoBananasLogoWeb.png": "79fefc1d789e261299ee64609610fff8",
"assets/assets/images/greenBg.jpg": "7d38b3b3ac15e30b107ecde700f81ae3",
"assets/assets/images/group.jpg": "bd78ea9daa60b7fc6228ac9acde727f2",
"assets/assets/images/hurdles.jpg": "0dea4f4454633e60e5b902e466d31a72",
"assets/assets/images/instagram.png": "b8bc2d348022e648e4330d974c3c39b5",
"assets/assets/images/interactivegames.jpg": "7b1e79c9116b2853e03185d92fc86634",
"assets/assets/images/legoTable.jpg": "c2be4e5af73ad7461daab74063616d5d",
"assets/assets/images/maxiBirthday.jpg": "614d597aeae85e55cdffea2d01150b47",
"assets/assets/images/maxiIcon.png": "c88f8a73253e4760bcc004135b6bcd81",
"assets/assets/images/merrygo.jpg": "2ab8f79c13d0e7233ddc4a685702f983",
"assets/assets/images/miniBirthday.jpg": "8e642d15a5086d8547cd2edb4bc94a6d",
"assets/assets/images/miniIcon.png": "cf16977d055799851c5c410b61eccda7",
"assets/assets/images/muchmore.jpg": "af3b801a34f5538ea3948fb7ddf023d1",
"assets/assets/images/obstracle.jpg": "24a09b697e4a5d447c42a2f22d5e4a14",
"assets/assets/images/parent.jpg": "f36c008be0a5e213e023a7d6fba6d7be",
"assets/assets/images/piano.jpg": "b4fb1f1e935569d23c36d637021ca26e",
"assets/assets/images/rainbowBridge.jpg": "cec915f22867cbc6aab77e5113922886",
"assets/assets/images/review1.jpg": "6c7e67f2a2a1bd84b0eb4ed637770626",
"assets/assets/images/review10.jpg": "eeedc872a2265814451fc6e21a56be94",
"assets/assets/images/review2.jpg": "6a1e9f3644c2f115469db75d13cf0022",
"assets/assets/images/review3.jpg": "684755383b8573f7db73d2520d5ce686",
"assets/assets/images/review4.jpg": "b7387be67fc95c11e053a83b11d95485",
"assets/assets/images/review5.jpg": "cebb8acfafcb40f7803f241817459714",
"assets/assets/images/review6.jpg": "80e66356d608f367d7393dfeb94c518f",
"assets/assets/images/review7.jpg": "6b9cd7f24e29ff393a3b8f2def98a677",
"assets/assets/images/review8.jpg": "2bf25acd17c00fc190281050b0572a4d",
"assets/assets/images/review9.jpg": "21463f168092a4bd2425287ae6d68070",
"assets/assets/images/rollingObstracle.jpg": "f74054c5c5ced289657a93fd99e7fa9c",
"assets/assets/images/rollSwing.jpg": "6269572d384c56a427489de83a3f8ad4",
"assets/assets/images/sandpit.jpg": "65618fe5d5d527bd2c57070789cd3555",
"assets/assets/images/shakingBridge.jpg": "22e9b804b38fe5bfed2c89a9ece3ce19",
"assets/assets/images/slide.jpg": "27b919faba372a90084d4b943245d9a0",
"assets/assets/images/spiderCourse.jpg": "b9ce7e9cec55102d9c6697bf7a658658",
"assets/assets/images/spongepool.jpg": "ee8e35fc1db6548f3cb9b6506a802972",
"assets/assets/images/swing.jpg": "eca687c84ef5be3dc49e25f8599767d1",
"assets/assets/images/tackles.jpg": "aab3a99183860f433a884cdc0444c662",
"assets/assets/images/ThumbNail.png": "b2332050a0fff646108dfd4debf096e4",
"assets/assets/images/trampoline.jpg": "e2d4467abb340957c68f78c8ff7e51c1",
"assets/assets/images/tunnelSlide.jpg": "297cd2f626319f0cad1579d0bf057131",
"assets/assets/images/twitter.png": "9148d6c7413406403f4cb00812d5d45c",
"assets/assets/images/ultimateBirthday.jpg": "1eac9c8d7b8b2aad15c6cb3c71dd76d3",
"assets/assets/images/utlimateIcon.png": "5ca56232b474f666173c25f09197df27",
"assets/assets/images/wallclimb.jpg": "99328e6a55c2f2867b87193d1910029e",
"assets/assets/images/wallpuzzle.jpg": "c9923f283c9c0a5d63c2fa7b22dcddaa",
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
"assets/NOTICES": "29da5079670cbb3124d5d890029a97d8",
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
"index.html": "59c5bd5f2fd7332d8ce94d22bb98ce6c",
"/": "59c5bd5f2fd7332d8ce94d22bb98ce6c",
"main.dart.js": "36555f556c205fdd33c49065a7931d47",
"manifest.json": "a54b551f9798406533839f2728386b55",
"version.json": "306a972cc5588d4fc63b1b29e1589f95"
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
