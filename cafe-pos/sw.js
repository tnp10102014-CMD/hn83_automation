// Service worker: lưu đệm giao diện để app chạy được khi mất mạng.
// Đổi số phiên bản khi cập nhật file để điện thoại tải bản mới.
const CACHE = 'cafe-pos-v9';
const ASSETS = ['./', './index.html', './qrcode.js', './manifest.webmanifest', './icons/icon.svg', './icons/logo.jpg', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Ưu tiên mạng (luôn có bản mới nhất), mất mạng thì dùng bản đã lưu
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
