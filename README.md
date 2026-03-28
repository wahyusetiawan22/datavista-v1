# DataVista V2.1 — Media Pembelajaran Statistika Kelas VIII

> Aplikasi web interaktif berbasis **Project-Based Learning (PjBL)** untuk pembelajaran statistika SMP Kelas VIII.
> Dikembangkan sebagai bagian dari Disertasi S3 Pendidikan Matematika, Universitas Pendidikan Indonesia.

---

## Deskripsi

DataVista adalah media pembelajaran statistika berbasis web yang mengintegrasikan model **Project-Based Learning (PjBL)** dengan **Asesmen Taksonomi SOLO**. Konteks proyek berpusat pada analisis data penggunaan HP di kalangan pelajar — topik yang relevan dan dekat dengan kehidupan siswa kelas VIII.

Tersedia sebagai **Progressive Web App (PWA)** sehingga dapat diinstal dan digunakan secara offline setelah akses pertama.

---

## Fitur Utama

### 🏠 Beranda
- Form identitas kelompok (nama kelompok, sekolah, kelas, tahun ajaran, daftar anggota beserta posisi)
- Data identitas tersimpan otomatis via `localStorage` dan tampil di setiap pertemuan
- Tampilan tujuan pembelajaran terstruktur (5 tujuan berbasis Taksonomi Bloom)
- Petunjuk penggunaan langkah demi langkah

### 📁 Proyek — 5 Pertemuan PjBL

| No | Judul | Konten |
|----|-------|--------|
| P1 | Pertanyaan Mendasar | 3 aktivitas + 1 refleksi |
| P2 | Perencanaan & Penjadwalan | 3 aktivitas + 1 refleksi |
| P3 | Pengumpulan Data | 3 aktivitas + tabel 40 baris |
| P4 | Pengolahan & Penyajian Data | 3 aktivitas + grafik interaktif |
| P5 | Presentasi, Refleksi & Evaluasi | 2 aktivitas + refleksi akhir |

**✨ Fitur baru — P1 Aktivitas 1:** Infografis "Pola Penggunaan Ponsel Siswa Kelas VIII" di-embed langsung di dalam aplikasi (base64). Menampilkan variasi durasi harian, perbedaan waktu aktif siang vs malam, tiga tujuan utama penggunaan HP, dan analisis variasi data — tanpa memerlukan koneksi internet atau file eksternal.

### 📚 Materi

| Topik | Keterangan |
|-------|------------|
| **Mean** | Rata-rata dengan rumus Σ(f × x) ÷ n |
| **Median** | Nilai tengah data ganjil & genap |
| **Modus** | Nilai yang paling sering muncul |
| **Jangkauan (Range)** | Selisih X(maks) − X(min) |
| **Kuartil** | Materi pengayaan/opsional (tidak wajib kelas VIII) |
| **Penyajian Data** | Diagram batang, garis, lingkaran, tabel distribusi frekuensi |

### 🧮 Kalkulator Statistik
- Input data manual atau muat data contoh otomatis
- Tabel distribusi frekuensi + turus dibuat secara otomatis
- Langkah perhitungan *scaffolded* — siswa mengisi isian kosong bertahap
- Hasil hanya muncul setelah jawaban benar
- Tab perhitungan: Mean, Median, Modus, Jangkauan, Kuartil
- Grafik interaktif (batang, garis, lingkaran) via Chart.js

### ✏️ Latihan SOLO
- 10 soal pilihan ganda + pembahasan otomatis
- 2 soal esai dengan rubrik Taksonomi SOLO
- Progress tracker visual (titik per soal)
- Skor akhir setelah semua soal selesai
- Fitur reset untuk mengulang latihan

---

## Asesmen Taksonomi SOLO

| Level | Nama | Deskripsi |
|-------|------|-----------|
| 1 | Prastruktural | Tidak relevan / tidak menjawab |
| 2 | Unistruktural | Satu aspek relevan |
| 3 | Multistruktural | Beberapa aspek, belum terhubung |
| 4 | Relasional | Aspek terhubung — pemahaman utuh |
| 5 | Extended Abstract | Generalisasi ke konteks baru |

---

## Teknologi

| Teknologi | Keterangan |
|-----------|------------|
| HTML5 / CSS3 / Vanilla JS | Tanpa framework — portabel & ringan |
| [Chart.js v4.4.1](https://www.chartjs.org/) | Grafik interaktif |
| [QRCode.js v1.0.0](https://github.com/davidshimjs/qrcodejs) | Generate QR Code |
| Service Worker | Dukungan offline (PWA) |
| `localStorage` | Penyimpanan otomatis identitas & progres |
| Base64 Embed | Infografis disematkan langsung — tanpa file eksternal |
| Google Fonts | Plus Jakarta Sans & Sora |

---

## Struktur File

```
datavista/
├── index_v6_final.html   ← File utama (semua fitur dalam 1 file)
├── manifest.json         ← PWA manifest
├── sw.js                 ← Service Worker untuk offline
└── icons/
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    └── icon-512.png
```

> **Catatan:** Infografis dan semua aset penting sudah di-embed ke dalam `index_v6_final.html` sebagai base64, sehingga file ini dapat berdiri sendiri tanpa dependensi file lokal lain.

---

## Cara Penggunaan

### Untuk Guru
1. Distribusikan URL atau file `index_v6_final.html` ke seluruh kelompok
2. Minta siswa instal sebagai PWA agar bisa digunakan offline
3. Akses **Mode Guru** dengan mengetuk logo 5× lalu masukkan password
4. Pantau keterlaksanaan P1–P5 via fitur rekap progres

### Untuk Siswa
1. Buka file di browser modern (Chrome direkomendasikan)
2. Klik "Install" / "Tambahkan ke Layar Utama" saat prompt muncul
3. Isi identitas kelompok di halaman **Beranda** — cukup satu kali
4. Kerjakan proyek per pertemuan melalui tab **Proyek**
5. Gunakan tab **Materi** dan **Kalkulator** sebagai referensi
6. Kerjakan **Latihan** untuk mengukur pemahaman

> ⚠️ **Penting:** Data disimpan di `localStorage`. Jangan hapus cache/riwayat browser selama proyek. Gunakan browser dan perangkat yang sama setiap pertemuan.

---

## Responsivitas

| Perangkat | Tampilan |
|-----------|----------|
| Mobile `< 600px` | Bottom navigation bar |
| Tablet `600–899px` | Layout adaptif |
| Desktop `≥ 900px` | Sidebar navigasi + layout dua kolom |

---

## Spesifikasi Teknis

| Komponen | Minimum | Rekomendasi |
|----------|---------|-------------|
| Browser | Chrome 80+, Firefox 75+, Safari 13+ | Chrome 100+ |
| RAM | 2 GB | 4 GB |
| Storage | 50 MB | 100 MB |
| Layar | 320px | 1024px |
| Internet | Diperlukan pertama kali | Tidak perlu setelah instal PWA |

---

## Tujuan Pembelajaran

1. **Membaca** data yang disajikan dalam tabel dan grafik
2. **Menghitung** nilai mean, median, modus, jangkauan, dan kuartil
3. **Menyajikan** data ke dalam tabel dan diagram yang sesuai
4. **Menganalisis** data nyata penggunaan HP menggunakan ukuran pemusatan dan penyebaran
5. **Menyimpulkan** hasil analisis untuk membuat keputusan sederhana

---

## Informasi Pengembang

| | |
|---|---|
| **Nama** | Wahyu Setiawan, S.Pd., M.Pd. |
| **NIM** | 2211397 |
| **Program** | Doktor (S3) Pendidikan Matematika |
| **Institusi** | Universitas Pendidikan Indonesia |
| **Tahun** | 2026 |
| **Versi Aplikasi** | v2.1 |
| **Bahasa** | 🇮🇩 Bahasa Indonesia |

---

## Riwayat Perubahan

| Versi | Perubahan |
|-------|-----------|
| **v2.1** *(saat ini)* | Infografis embed (base64) di P1 Aktivitas 1; PWA support; Kalkulator interaktif; Latihan SOLO lengkap |
| v2.0 | Versi awal dengan 5 pertemuan PjBL |

---

## Lisensi

Dikembangkan untuk keperluan **Disertasi S3 Pendidikan Matematika, Universitas Pendidikan Indonesia**. Penggunaan dan distribusi untuk tujuan **non-komersial** diperbolehkan dengan mencantumkan atribusi kepada pengembang.

