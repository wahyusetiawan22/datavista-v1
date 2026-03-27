# DataVista V2.1 — Media Pembelajaran Statistika Kelas VIII

> Aplikasi web interaktif berbasis Project-Based Learning (PjBL) untuk pembelajaran statistika SMP kelas VIII.

---

## Deskripsi

DataVista adalah media pembelajaran statistika yang dirancang khusus untuk siswa kelas VIII SMP. Aplikasi ini menggunakan pendekatan **Project-Based Learning (PjBL)** dengan konteks nyata berupa analisis data penggunaan HP di kalangan pelajar. Tersedia sebagai Progressive Web App (PWA) sehingga dapat diinstal dan digunakan secara offline.

---

## Fitur Utama

### 🏠 Beranda
- Form identitas kelompok (nama kelompok, sekolah, kelas, tahun ajaran, dan daftar anggota)
- Identitas tersimpan otomatis dan tampil di setiap pertemuan
- Tampilan tujuan pembelajaran yang terstruktur

### 📁 Proyek (Project-Based Learning)
5 pertemuan terstruktur mengikuti alur PjBL:

| Pertemuan | Judul | Isi |
|-----------|-------|-----|
| P1 | Pertanyaan Mendasar | Mengamati fenomena, merumuskan pertanyaan proyek, prediksi awal |
| P2 | Perencanaan & Penjadwalan | Rancang instrumen, bagi tugas, buat jadwal |
| P3 | Pengumpulan Data | Survei 40 responden, tabulasi & validasi data |
| P4 | Pengolahan & Penyajian Data | Turus, hitung statistik, buat diagram interaktif |
| P5 | Presentasi, Refleksi & Evaluasi | Presentasi hasil, kesimpulan, evaluasi akhir |

### 📚 Materi
Penjelasan konsep statistika lengkap dengan rumus, langkah-langkah, dan contoh:
- **Mean** — rata-rata dengan rumus Σ(f × x) ÷ n
- **Median** — nilai tengah data ganjil & genap
- **Modus** — nilai yang paling sering muncul
- **Jangkauan (Range)** — selisih nilai terbesar dan terkecil
- **Kuartil** *(materi pengayaan/opsional)*
- **Penyajian Data** — diagram batang, garis, lingkaran, dan tabel distribusi frekuensi

### 🧮 Kalkulator Statistik
- Input data manual atau muat data contoh
- Tabel distribusi frekuensi otomatis (dengan turus)
- Langkah perhitungan interaktif (isian kosong yang perlu diisi siswa)
- Hasil hanya muncul setelah jawaban benar
- Tab: Mean, Median, Modus, Jangkauan, Kuartil
- Grafik interaktif menggunakan Chart.js (batang, garis, lingkaran)

### ✏️ Latihan
- 10 soal pilihan ganda dengan pembahasan otomatis
- 2 soal esai dengan rubrik penilaian
- Progress tracker visual (dot per soal)
- Skor akhir ditampilkan setelah semua soal selesai
- Fitur reset latihan untuk mengulang dari awal

---

## Teknologi

| Teknologi | Keterangan |
|-----------|------------|
| HTML5 / CSS3 / Vanilla JS | Tidak memerlukan framework |
| [Chart.js v4.4.1](https://www.chartjs.org/) | Grafik interaktif |
| [QRCode.js v1.0.0](https://github.com/davidshimjs/qrcodejs) | Generate QR Code |
| Service Worker | Dukungan offline (PWA) |
| LocalStorage | Penyimpanan data identitas & progres siswa |
| Google Fonts | Plus Jakarta Sans & Sora |

---

## Struktur File

```
datavista/
├── index_v6_final.html   # File utama aplikasi
├── manifest.json         # PWA manifest
├── sw.js                 # Service Worker untuk offline support
└── icons/
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    └── icon-512.png
```

---

## Cara Penggunaan

1. **Buka** file `index_v6_final.html` di browser modern (Chrome/Edge/Firefox/Safari)
2. **Install sebagai aplikasi** (opsional) — klik "Install" saat muncul prompt PWA
3. **Isi identitas kelompok** di halaman Beranda — cukup sekali, data tersimpan otomatis
4. **Kerjakan proyek** per pertemuan melalui tab Proyek
5. **Pelajari materi** melalui tab Materi sesuai kebutuhan
6. **Gunakan Kalkulator** untuk latihan menghitung step-by-step
7. **Kerjakan Latihan** untuk menguji pemahaman

> ⚠️ **Perhatian:** Data disimpan di `localStorage` browser. Jangan hapus cache browser selama proyek berlangsung agar data tidak hilang.

---

## Responsivitas

| Perangkat | Tampilan |
|-----------|----------|
| Mobile (< 600px) | Bottom navigation bar |
| Tablet (600–899px) | Layout adaptif |
| Desktop (≥ 900px) | Sidebar navigasi, layout dua kolom |

---

## Tujuan Pembelajaran

Setelah menyelesaikan semua aktivitas, siswa diharapkan mampu:

1. **Membaca** data yang disajikan dalam tabel dan grafik
2. **Menghitung** nilai mean, median, modus, jangkauan, dan kuartil
3. **Menyajikan** data ke dalam tabel dan diagram yang sesuai
4. **Menganalisis** data nyata penggunaan HP menggunakan ukuran pemusatan dan penyebaran
5. **Menyimpulkan** hasil analisis untuk membuat keputusan sederhana

---

## Kompatibilitas Browser

| Browser | Status |
|---------|--------|
| Chrome 90+ | ✅ Didukung penuh |
| Edge 90+ | ✅ Didukung penuh |
| Firefox 88+ | ✅ Didukung penuh |
| Safari 14+ | ✅ Didukung penuh |

---

## Versi

**v2.1** — Versi saat ini  
Bahasa antarmuka: 🇮🇩 Bahasa Indonesia

---

## Lisensi

Media pembelajaran ini dibuat untuk keperluan pendidikan SMP. Penggunaan dan distribusi untuk tujuan non-komersial diperbolehkan dengan mencantumkan sumber.

