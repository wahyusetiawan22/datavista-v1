// ============================================================
//  DataVista V2.1 — Service Worker
//  Media Pembelajaran Statistika Kelas VIII
// ============================================================

const CACHE_NAME = 'datavista-v2.1';

// Aset utama yang di-cache saat install
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  // CDN (Chart.js & QRCode.js)
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  // Google Fonts
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700&display=swap',
];

// ── INSTALL: cache semua aset utama ──────────────────────────
self.addEventListener('install', event => {
  console.log('[DataVista SW] Installing…');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Gunakan addAll untuk aset lokal, ignore jika CDN gagal
      const localAssets = PRECACHE_ASSETS.filter(url => !url.startsWith('http'));
      const cdnAssets   = PRECACHE_ASSETS.filter(url =>  url.startsWith('http'));

      return cache.addAll(localAssets).then(() => {
        // CDN di-cache secara opsional (tidak blokir install jika gagal)
        return Promise.allSettled(
          cdnAssets.map(url =>
            fetch(url).then(res => { if (res.ok) cache.put(url, res); })
          )
        );
      });
    }).then(() => {
      console.log('[DataVista SW] Install selesai.');
      self.skipWaiting(); // langsung aktif tanpa tunggu tab lama ditutup
    })
  );
});

// ── ACTIVATE: hapus cache versi lama ─────────────────────────
self.addEventListener('activate', event => {
  console.log('[DataVista SW] Activating…');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[DataVista SW] Menghapus cache lama:', key);
            return caches.delete(key);
          })
      )
    ).then(() => {
      console.log('[DataVista SW] Aktif dan siap.');
      return self.clients.claim(); // ambil kontrol semua tab yang terbuka
    })
  );
});

// ── FETCH: strategi Cache-First dengan fallback Network ───────
self.addEventListener('fetch', event => {
  // Abaikan request non-GET dan request ke API eksternal
  if (event.request.method !== 'GET') return;

  // Abaikan request chrome-extension dan skema lain
  const url = new URL(event.request.url);
  if (!['http:', 'https:'].includes(url.protocol)) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Ada di cache → kembalikan dari cache
        return cachedResponse;
      }

      // Tidak ada di cache → ambil dari network, lalu cache-kan
      return fetch(event.request).then(networkResponse => {
        // Hanya cache response yang valid
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type !== 'opaque'
        ) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline dan tidak ada di cache
        // Untuk navigasi halaman, kembalikan halaman utama (SPA fallback)
        if (event.request.mode === 'navigate') {
          return caches.match('./') || caches.match('./index.html');
        }
        // Untuk aset lain, kembalikan response kosong
        return new Response('', { status: 408, statusText: 'Offline – resource not cached' });
      });
    })
  );
});

// ── MESSAGE: handle perintah dari halaman utama ───────────────
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
