# 📊 DataVista V2.1
### Media Pembelajaran Statistika Interaktif — Kelas VIII SMP

> Dikembangkan dalam rangka penelitian disertasi S3 Pendidikan Matematika  
> **Universitas Pendidikan Indonesia (UPI)**  
> Pendekatan: *Project-Based Learning* (PjBL) berbantuan media digital

---

## 📋 Deskripsi

**DataVista** adalah aplikasi web pembelajaran statistika berbasis proyek (*Project-Based Learning*) yang dirancang untuk siswa Kelas VIII SMP. Aplikasi ini membimbing siswa melalui lima pertemuan proyek secara terstruktur — mulai dari merumuskan pertanyaan mendasar hingga mempresentasikan hasil analisis data nyata.

Platform ini dikembangkan sebagai bagian dari penelitian untuk memperkuat **literasi statistik** dan **resiliensi matematis** siswa SMP melalui pendekatan PjBL berbantuan teknologi digital.

---

## 🗂️ Struktur File

Letakkan semua file berikut dalam **satu folder yang sama**:

```
📁 DataVista/
├── index.html        ← File utama aplikasi (indexv7.html)
├── sw.js             ← Service Worker (PWA & offline support)
├── manifest.json     ← Konfigurasi PWA
└── icons/
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    └── icon-512.png
```

> **Catatan:** File `manifest.json` dan folder `icons/` diperlukan agar fitur *install sebagai aplikasi* (PWA) berfungsi dengan baik.

---

## ✨ Fitur Utama

### 🏠 Beranda
- Input identitas kelompok (nama siswa, nama guru, sekolah, kelas)
- Tujuan pembelajaran yang terstruktur mengikuti taksonomi kognitif
- Petunjuk penggunaan aplikasi

### 📁 Proyek (5 Pertemuan PjBL)

| Pertemuan | Nama Kegiatan | Fokus Utama |
|-----------|---------------|-------------|
| P1 | Pertanyaan Mendasar | Merumuskan masalah & merancang instrumen survei |
| P2 | Perencanaan Proyek | Menyusun jadwal & instrumen pengumpulan data |
| P3 | Pelaksanaan & Monitoring | Pengumpulan data lapangan (40 responden) |
| P4 | Pengolahan Data | Analisis statistik (mean, median, modus, kuartil) |
| P5 | Presentasi & Evaluasi | Refleksi akhir & penyajian hasil proyek |

Setiap pertemuan dilengkapi:
- Aktivitas terstruktur berbasis LKPD
- Catatan guru (*teacher's note*)
- Refleksi akhir pertemuan
- 🖨️ **Ekspor PDF laporan** per pertemuan

### 📚 Materi
Materi pembelajaran statistika dengan tiga topik utama:
- **Penyajian Data** — tabel, diagram batang, lingkaran, garis
- **Ukuran Pemusatan** — mean, median, modus
- **Ukuran Penyebaran** — jangkauan, kuartil, IQR

### 🧮 Kalkulator Statistik
Kalkulator interaktif dengan dua mode:
- **Mode Manual** — input data satu per satu
- **Mode Kumpulan** — paste data dalam format list
- Menghitung: Mean, Median, Modus, Jangkauan, Q1, Q2, Q3, IQR
- Visualisasi boxplot dan histogram menggunakan **Chart.js**

### 🎯 Latihan Soal
- Soal kontekstual bertingkat (literasi statistik)
- Umpan balik otomatis
- Rekap skor per soal

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi |
|----------|-----------|
| Tampilan | HTML5, CSS3 (CSS Custom Properties), Vanilla JS |
| Grafik & Chart | [Chart.js v4.4.1](https://www.chartjs.org/) |
| QR Code | [QRCode.js v1.0.0](https://davidshimjs.github.io/qrcodejs/) |
| Font | Plus Jakarta Sans & Sora (Google Fonts) |
| Penyimpanan data | `localStorage` (data tersimpan di browser) |
| PWA / Offline | Service Worker (`sw.js`) + Web App Manifest |

---

## 📱 Dukungan Platform

DataVista dirancang **responsif** untuk semua ukuran layar:

- ✅ **Desktop** (≥ 900px) — tampilan dua kolom dengan sidebar navigasi
- ✅ **Tablet** (600–899px) — tampilan adaptif
- ✅ **Mobile** (< 600px) — navigasi bawah (*bottom navigation*)
- ✅ **Installable** — dapat di-install sebagai aplikasi di HP (PWA)
- ✅ **Offline-ready** — halaman utama dapat diakses tanpa internet (setelah pertama kali dibuka)

---

## 🚀 Cara Menggunakan

### Untuk Guru

1. Siapkan semua file dalam satu folder (lihat struktur di atas)
2. Buka `index.html` di browser (Chrome/Edge direkomendasikan)
3. Akses **Panel Guru** dengan mengetuk logo sebanyak **5 kali** untuk membuka fitur:
   - Melihat catatan per pertemuan
   - Membaca umpan balik siswa
   - Mengunduh laporan PDF

### Untuk Siswa

1. Buka link yang diberikan guru (atau scan QR code)
2. Isi **identitas kelompok** di halaman Beranda
3. Ikuti alur proyek dari **Pertemuan 1 hingga 5** secara berurutan
4. Simpan PDF laporan di akhir setiap pertemuan

### Tips Penting

> ⚠️ **Jangan hapus data browser** selama proyek berlangsung. Data disimpan di `localStorage` dan akan hilang jika cache/data browser dibersihkan.

---

## 🔧 Pemecahan Masalah

### Error: "SW registration failed" di konsol browser
**Penyebab:** File `sw.js` tidak ditemukan di folder yang sama dengan `index.html`.  
**Solusi:** Pastikan file `sw.js` ada di folder yang sama (lihat struktur file di atas).  
Fitur pembelajaran **tetap berjalan normal** meskipun error ini muncul.

### Data siswa hilang
**Penyebab:** Browser di-reset atau localStorage dihapus.  
**Solusi:** Hindari membersihkan data browser selama proyek berlangsung. Gunakan browser yang sama di perangkat yang sama.

### Grafik tidak tampil
**Penyebab:** Koneksi internet terputus saat pertama kali membuka (Chart.js dimuat dari CDN).  
**Solusi:** Buka aplikasi saat ada koneksi internet minimal sekali agar file CDN ter-cache.

---

## 📐 Struktur Proyek PjBL

```
Pertanyaan Mendasar (P1)
        ↓
Perencanaan Proyek (P2)
        ↓
Pelaksanaan & Monitoring (P3)
   [Pengumpulan Data: 40 Responden]
        ↓
Pengolahan & Analisis Data (P4)
   [Mean · Median · Modus · Kuartil · IQR]
        ↓
Presentasi & Evaluasi (P5)
   [Refleksi · Laporan PDF]
```

---

## 📝 Informasi Proyek

| Item | Detail |
|------|--------|
| Versi | V2.1 |
| Jenjang | SMP Kelas VIII |
| Mata Pelajaran | Matematika — Statistika |
| Pendekatan | Project-Based Learning (PjBL) |
| Institusi | Universitas Pendidikan Indonesia |
| Program | Disertasi S3 Pendidikan Matematika |

---

## 📄 Lisensi

Dikembangkan untuk keperluan penelitian pendidikan matematika di Universitas Pendidikan Indonesia. Penggunaan untuk kepentingan pendidikan diperbolehkan dengan menyertakan atribusi yang sesuai.

---

*DataVista V2.1 — Media Pembelajaran Statistika Berbantuan Digital untuk Penguatan Literasi Statistik dan Resiliensi Matematis Siswa SMP*

