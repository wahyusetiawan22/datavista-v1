# ðŸ“Š DataVista V2.1
**Media Pembelajaran Statistika Interaktif â€” Kelas VIII SMP**

DataVista adalah aplikasi web berbasis PWA (Progressive Web App) yang dirancang sebagai media pembelajaran statistika untuk siswa kelas VIII SMP. Aplikasi ini mendukung kegiatan belajar berbasis proyek secara kelompok dengan antarmuka yang modern, responsif, dan dapat digunakan secara offline.

---

## âœ¨ Fitur Utama

| Fitur | Keterangan |
|---|---|
| ðŸ  **Beranda** | Petunjuk penggunaan dan pengisian identitas kelompok |
| ðŸ“ **Proyek** | Lembar kerja proyek statistika berbasis pertemuan (PTM) |
| ðŸ“š **Materi** | Konten pembelajaran statistika terstruktur |
| ðŸ§® **Kalkulator** | Kalkulator statistika (mean, median, modus, jangkauan, dll.) |
| âœ… **Latihan** | Soal pilihan ganda dan essay dengan penilaian otomatis |
| â„¹ï¸ **Tentang** | Informasi aplikasi dan pembuat |
| ðŸ“² **PWA Support** | Dapat diinstall di perangkat dan digunakan offline |

---

## ðŸ—‚ï¸ Struktur File

```
datavista/
â”œâ”€â”€ index.html        # File utama aplikasi (single-page app)
â”œâ”€â”€ manifest.json     # Konfigurasi PWA
â”œâ”€â”€ sw.js             # Service Worker untuk offline support
â””â”€â”€ icons/
    â”œâ”€â”€ icon-144.png
    â”œâ”€â”€ icon-152.png
    â”œâ”€â”€ icon-192.png
    â””â”€â”€ icon-512.png
```

---

## ðŸš€ Cara Penggunaan

### Membuka Aplikasi
1. Buka file `index.html` di browser modern (Chrome, Edge, Firefox, Safari).
2. Atau akses melalui URL jika sudah di-deploy ke hosting/server.

### Alur Belajar Siswa
1. **Isi identitas kelompok** â€” nama kelompok, sekolah, kelas, tahun ajaran, dan anggota. Cukup dilakukan sekali.
2. **Baca tujuan belajar** di halaman Beranda.
3. **Kerjakan aktivitas proyek** bersama kelompok di halaman Proyek.
4. **Pelajari materi** di halaman Materi sebagai referensi.
5. **Gunakan kalkulator** untuk membantu perhitungan data statistika.
6. **Kerjakan latihan soal** dan lihat skor otomatis di akhir.

### Install sebagai Aplikasi (PWA)
- Di browser Chrome/Edge, klik ikon **Install** di address bar, atau
- Tunggu muncul banner instalasi otomatis setelah beberapa detik.
- Setelah diinstall, aplikasi dapat dibuka seperti aplikasi biasa tanpa koneksi internet.

---

## ðŸ’¾ Penyimpanan Data

- Semua data (identitas kelompok, jawaban proyek, progres latihan) disimpan secara otomatis di **localStorage** browser.
- Data **tidak akan hilang** selama browser tidak di-*clear cache*.
- âš ï¸ **Jangan hapus data/cache browser** selama proyek berlangsung agar data tidak hilang.

---

## ðŸ› ï¸ Teknologi yang Digunakan

- **HTML5 / CSS3 / JavaScript** â€” tanpa framework, murni vanilla
- **Chart.js 4.4.1** â€” untuk visualisasi data dan grafik statistika
- **QRCode.js** â€” untuk generate QR Code identitas kelompok
- **Google Fonts** â€” Plus Jakarta Sans & Sora
- **PWA** â€” Service Worker + Web App Manifest untuk dukungan offline
- **localStorage** â€” penyimpanan data lokal di browser

---

## ðŸ“± Kompatibilitas

| Platform | Status |
|---|---|
| Desktop (â‰¥ 900px) | âœ… Sidebar navigasi, layout dua kolom |
| Tablet (600â€“899px) | âœ… Layout adaptif |
| Mobile (< 600px) | âœ… Bottom navigation |
| iOS (Safari) | âœ… Apple touch icon & PWA support |
| Android (Chrome) | âœ… Install to homescreen |
| Windows (Edge) | âœ… PWA installable |

---

## ðŸ”„ Update Aplikasi

Jika ada versi baru yang ter-deploy, aplikasi akan menampilkan **notifikasi update** di bagian atas layar. Ketuk notifikasi tersebut untuk memuat versi terbaru.

---

## âš™ï¸ Deploy / Hosting

Karena DataVista adalah **aplikasi statis** (tidak butuh backend), cukup upload semua file ke:
- GitHub Pages
- Netlify / Vercel
- Hosting biasa (shared hosting, VPS)
- Google Drive / OneDrive (untuk distribusi offline)

Pastikan file `sw.js` dan `manifest.json` tersedia di direktori yang sama dengan `index.html`.

---

## ðŸ‘¨â€ðŸ’» Versi

**DataVista V2.1** â€” Media Pembelajaran Statistika Kelas VIII  
Tahun Ajaran 2025/2026

---

> ðŸ’¡ *Aplikasi ini dirancang untuk kegiatan pembelajaran berbasis proyek (PjBL) di dalam kelas. Setiap kelompok menggunakan perangkat yang sama selama satu proyek berlangsung.*

