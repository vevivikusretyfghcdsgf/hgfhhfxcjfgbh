'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "af14e8520df2bed4507563ca9746306f",
"version.json": "fb8890d5e0f18f807233406d3ba88dc6",
"index.html": "2b00640df5160480ba29fb4ffdc245a7",
"/": "2b00640df5160480ba29fb4ffdc245a7",
"main.dart.js": "fef14914c0ff3314c65e34d4a37f3b43",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ce84d0d6bca0fc75523f28a111470207",
".git/ORIG_HEAD": "4dc0d72abb3d4a85b9c290f435654aab",
".git/config": "f3ac24cef17077570a4ed5db9c9e2e25",
".git/objects/0c/0c5ef29e818ecfd6e610d1044c039b25f0cf6e": "9e51b5346d95b4ef0b830465c0ae2dd7",
".git/objects/68/ac7db13de0ff2bfcdd440402a68e066fcbc8a3": "3bb45a7e2adda066b7cdde4f194e4d84",
".git/objects/6f/9f358f69fd32ed332b8842eb4bffeea0368143": "d6004817c205b1155a87d5bb3328e268",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/505f96da50b775c0c56cec755a866d47c1d14a": "30d321e9a3821d7d7fe03859e9007099",
".git/objects/35/d9ad5d684d163b5796166a5a090f89acf68035": "893bab86d64881cd574f7c8acd87d5eb",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/56/a3fd84feba180d17fa0e949c579dc615e7bdd1": "47183cd4b2d404b7f19164618ca228d7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/5285ce6496d794580a72d5780b27f851a9c658": "14fed10c12da7462e0beb814d980cc4c",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/3855b829eeefa13d978038b69802921b42bc67": "fc7f9c349462b0f6f13b47fef8c41aac",
".git/objects/5a/ee2689b4ec86ea33c09586965fa2eb94a303dd": "ac74b3acb5b4b4602ccb70fa782b9cc8",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/d7/e691d6d426fed91f1c0c921798432cde2015f7": "c27d9d581b3243c72df5d4c96fd206fd",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/7dedf6a61ce6d4102926340f1e98d29f9a1cca": "0979a57d0c78ed439d7972d1784b8360",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/f5724f61dd975d7f74813db9750a59a37f0e96": "283b1e735d6ae6cc6f3c5173b7629f6d",
".git/objects/ae/b4702c9c0b76a75e6b2a2d7953daec8995d045": "b5cd173ce56cef63aacf33e5347dce87",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/3a8993bae8065a8dcdd99001e6cc31f18b4720": "ffdde32e1b87c9fd730e926dcb4c39ba",
".git/objects/fc/41a47ebe310b509ba5c43b30ae3d79bb1ff12f": "ec6ceb762102e1e5e0065073f767066f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c1/5cd64b4c12dcd3626637dc47c56ba05af887d4": "c3fb6033aa3077371ed7e4914f0aa77f",
".git/objects/ec/f9ed338d2b959d9cdd8ccf7521123e05472f56": "350bb05ced51210e8b2317a44ce0be70",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7d/cc8e4dfdd860e5d93a1b19ce081b9f6a064a60": "9893816b5b0cc194dc26301fcdd66826",
".git/objects/7d/c5896890660d7ec49190b591ed2a9a58402aef": "9bcbabdfd2449f7786775b1321148294",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/6f3df5f0562031bc2a4d31a4ba1d2443064a7f": "e66076c0bdb701d4eaa0930fc7807fdf",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/26208c0d937c0abfcfe32f4f8955152385170f": "3b1f974c388d0391e6a7b60c7034ad5e",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
".git/objects/86/e1f0585d2b6d3e31e665fdcbb84346d9e2cd0a": "6b4ca1f3fbcdc3b8ba436d3e27df80f5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/b52d762e0c0b00485ef2300a035f6663325026": "14da5d7ec246a1ccc4f6f5232a74cf3c",
".git/objects/9a/036bb99ef47d861bee8ccb55f5461577bfab0c": "75f6ea723d0f1e4238f2fc05e7b7bdbc",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/53/ccc5909fd88948ad233deac9933518a7103c3f": "c38ef069a6dae0fc64c439a655cda6d3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/ee310637a406c77cf1bf6ad3fe87356e786c4f": "b6831af15bc25f9f851d0f37ad48a5f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/3d2b7a5fe2827e9f3062bdf96432057f6cf3db": "191d0f9293dfbecb423718a73b212878",
".git/objects/de/8edccd13bb7955757e3bd0bffb76c1fc0d61ad": "680e5a904823e395672de4c8d5545799",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/e4be3a54e98c57a554fa19f54212f50cdec027": "79d9ec15d34ffe58502c55c1149b5a7d",
".git/objects/f9/cb81323e8e313cc9cafa91a000e7a3cfb350bb": "eb69a9730c969ebb4e9494878f562fad",
".git/objects/f9/60c0ed8ed45bdb3bb0bfdbc8596b4c5340f013": "5c370a08354deae343958e6e0c5d1939",
".git/objects/e8/9bb1fef07b5948590ed02584fdd57224a2aa5b": "0a1d87993eccbcf71ccb4b10a70e3e02",
".git/objects/e9/a877f949ab528b0ff2bf096a5e13f7dde9e582": "f6bf4a7e54ce0559d6108e88675679e5",
".git/objects/f1/7fe1100f39a0f365411febfa5bc5d7481b62c1": "043798922b8ba0c90e1418cd301db52e",
".git/objects/f8/fa34cde0e574a71ecae2013842c7c1ddeb177b": "c58891fb92ac670f17a86461f9f40a0f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/4b8d25497ae1f46b9fc70502333fd6f2e6a23c": "0dd585ef634aa5374ccadc08c8f3a156",
".git/objects/24/4a961e440587948ab93480f0691bb0bc970328": "2deb8fef1ea0ead44e504d654e86066b",
".git/objects/23/06b726b7c92bda6a1e83722e06eea26c12f45e": "6976d9596f6708c9b2edc20a5476d7c5",
".git/objects/12/d10d886a326d6751b3ac1dbcf7d106249b902b": "b63d779c876c8c5cc10dbff8383e5dd6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1d/cd0ae179f912311a62081eda93f0378ba2ccf9": "078fbd714233644c135d0e9dcb8552b7",
".git/objects/1d/c43db39bd2ee223350384d3de261bec8263ca5": "4dd79f1d363cc929e9c19335c55e1c88",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/13/e7a99d60fbd211e096a4d75d42c68c93e26ed3": "ee97e5155928227233d14a68b7b650d4",
".git/objects/22/7c856d332f4255222148bc6bea1537dd7eaa89": "c6ae4dbede26ae7f0961e79b6de41293",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/3985f83f4fb6df9dd482c7388f2ee8271fa367": "de284910e5b269a66f6d514a045b4e6d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b9b396849afbc53e0cb27ecec6c6b8d9",
".git/logs/refs/heads/main": "dbfbaeb2767ae62335316a88773fbaa8",
".git/logs/refs/remotes/origin/main": "1d90a41beec8631e4f346b322d552034",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4498dab89e6b7062c82253547ba51a60",
".git/refs/remotes/origin/main": "4498dab89e6b7062c82253547ba51a60",
".git/index": "d5fe5c1f43918d2d8aab3e344120eeb6",
".git/COMMIT_EDITMSG": "4f2419b5a6f453c214e2218da8462775",
".git/FETCH_HEAD": "99feaac8e1e480f7ddb60fe8c62e85ef",
"assets/AssetManifest.json": "6fc02643f5b84c0b4aa34612bf292511",
"assets/NOTICES": "5646e48cef8c94f21121b0a8fa35c31f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a5898b18e241cd9b019e634296407a27",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c3de2c7636ea35498a2681ae658f249f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d2da0475b8bcd7279e4b2161314cf93d",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/image_app/speaking.png": "ed87482c6f4a396572f186b26cdab659",
"assets/assets/image_app/lis.png": "df4019edec444d96b8c9a1dd601e464a",
"assets/assets/image_app/reading.png": "79d466567f26479061129f0baf2e578f",
"assets/assets/image_app/writing.png": "ef43b9f1b7e666364044d697fa086364",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
