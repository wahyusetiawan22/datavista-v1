# DataVista V2

**Media Pembelajaran Interaktif Statistika — SMP Kelas VIII**

> Pengembangan Bahan Ajar *Project-Based Learning* Berbantuan Media Digital DataVista untuk Penguatan Literasi Statistik serta Resiliensi Siswa SMP

---

## Tentang Proyek

DataVista V2 adalah aplikasi web interaktif berbasis PWA (*Progressive Web App*) yang dirancang sebagai media pembelajaran statistika untuk siswa SMP kelas VIII. Aplikasi ini mendukung model pembelajaran **Project-Based Learning (PjBL)** dengan konteks nyata berupa analisis pola penggunaan HP siswa.

| Info | Detail |
|------|--------|
| Versi | 2.0 |
| Tahun | 2025 |
| Jenjang | SMP Kelas VIII |
| Model Pembelajaran | Project-Based Learning (PjBL) |
| Institusi | Universitas Pendidikan Indonesia |
| Pengembang | Wahyu Setiawan (NIM. 2211397) |
| Pembimbing I | Prof. Dr. H. Nanang Priatna, M.Pd |
| Pembimbing II | Prof. Drs. Suhendra, M.Ed., Ph.D |
| Pembimbing III | Dr. Bambang Avip Priatna, M.Si |

---

## Fitur Utama

### 5 Halaman Navigasi

| Halaman | Deskripsi |
|---------|-----------|
| **Beranda** | Pengisian identitas kelompok dan tampilan tujuan pembelajaran |
| **Proyek** | Alur kerja PjBL dalam 5 pertemuan terstruktur |
| **Materi** | Referensi 6 topik statistika lengkap dengan rumus dan contoh |
| **Kalkulator** | Latihan isian interaktif dengan feedback benar/salah real-time |
| **Tentang** | Informasi pengembang dan media |

### Alur Proyek PjBL (5 Pertemuan)

```
P1: Pertanyaan Mendasar
    └── Mengamati fenomena, merumuskan pertanyaan, prediksi awal

P2: Perencanaan & Penjadwalan
    └── Merancang instrumen, pembagian tugas, jadwal survei

P3: Pengumpulan Data
    └── Tabulasi 40 responden, validasi kelengkapan data

P4: Pengolahan & Penyajian Data
    └── Hitung statistik, distribusi frekuensi, grafik interaktif

P5: Presentasi, Refleksi & Evaluasi
    └── Presentasi hasil, kesimpulan, evaluasi akhir proyek
```

### Topik Materi Statistika

- **Mean** — Rata-rata (Σf·x ÷ n)
- **Median** — Nilai tengah data terurut
- **Modus** — Nilai paling sering muncul
- **Jangkauan** — Selisih nilai max dan min
- **Kuartil** — Q1, Q2, Q3, dan simpangan kuartil *(opsional)*
- **Penyajian Data** — Diagram batang, garis, dan lingkaran

### Fitur Teknis

- **Penyimpanan otomatis** — semua jawaban tersimpan di `localStorage` browser
- **Grafik interaktif** — Chart.js untuk diagram batang, garis, dan lingkaran berbasis data siswa
- **Kalkulator isian** — feedback benar/salah langsung saat siswa mengetik jawaban
- **Identitas kelompok** — diisi sekali, tampil otomatis di seluruh pertemuan
- **Simpan PDF** — ekspor laporan tiap pertemuan langsung dari browser
- **PWA** — bisa diinstall ke HP dan digunakan secara offline

---

## Struktur File

```
datavista-v2/
├── index.html          # Seluruh aplikasi (HTML + CSS + JS dalam 1 file)
├── manifest.json       # Konfigurasi PWA (nama, warna, ikon)
├── sw.js               # Service Worker untuk dukungan offline
├── icons/
│   ├── icon-72.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

> Seluruh logika aplikasi — CSS, HTML, dan JavaScript (~1800 baris) — terdapat dalam satu file `index.html` untuk kemudahan distribusi dan deployment.

---

## Cara Penggunaan

### Untuk Siswa

1. Buka aplikasi di browser (Chrome/Edge direkomendasikan)
2. Di halaman **Beranda**, isi identitas kelompok sekali di awal
3. Buka halaman **Proyek**, pilih pertemuan yang sedang berlangsung
4. Kerjakan setiap aktivitas secara berurutan bersama kelompok
5. Tulis jawaban di kolom yang tersedia — data tersimpan otomatis
6. Setelah menyelesaikan Refleksi, klik **🖨 Simpan PDF Pertemuan N** untuk mengarsipkan hasil kerja
7. Di halaman **Materi**, baca referensi rumus dan langkah-langkah setiap topik
8. Gunakan **Kalkulator** untuk latihan menghitung mandiri

### Untuk Guru

1. Pastikan siswa mengisi identitas kelompok di awal sesi
2. Arahkan siswa membuka pertemuan yang sesuai dengan jadwal pembelajaran
3. Minta siswa mengekspor PDF di akhir setiap pertemuan sebagai bukti kerja
4. Gunakan halaman Materi sebagai bahan bacaan pendamping

### Install Aplikasi (Offline)

1. Buka di Chrome/Edge di HP atau laptop
2. Tunggu hingga muncul banner *"Install DataVista"* (±3 detik)
3. Klik **Install Sekarang**
4. Aplikasi tersimpan di layar utama dan dapat digunakan tanpa internet

---

## Fitur Simpan PDF

Setiap pertemuan dilengkapi tombol **🖨 Simpan PDF** yang muncul setelah bagian Refleksi. Tombol ini akan:

1. Mengumpulkan semua jawaban dari seluruh aktivitas dalam pertemuan tersebut
2. Memuat data identitas kelompok dari penyimpanan lokal
3. Mengkonversi grafik (Chart.js) menjadi gambar statis
4. Menampilkan dialog cetak browser — pilih *"Save as PDF"* untuk menyimpan file

PDF yang dihasilkan mencakup:
- Header formal (nama kelompok, sekolah, kelas, tanggal cetak)
- Semua aktivitas dan jawaban dalam format A4
- Tabel data responden (Pertemuan 3)
- Grafik hasil analisis (Pertemuan 4)
- Footer berisi informasi pertemuan dan atribusi

> **Penting:** Data disimpan di `localStorage` browser. Ekspor PDF secara rutin setelah setiap pertemuan untuk mencegah kehilangan data jika cache browser dibersihkan.

---

## Stack Teknologi

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| HTML5 / CSS3 / JS | — | Kerangka utama aplikasi |
| [Chart.js](https://www.chartjs.org/) | 4.4.1 | Grafik interaktif (batang, garis, lingkaran) |
| [Google Fonts](https://fonts.google.com/) | — | Sora (display) + Plus Jakarta Sans (body) |
| Web Storage API | — | `localStorage` untuk persistensi data |
| Service Worker API | — | Dukungan offline dan caching |
| Web App Manifest | — | Instalasi PWA ke perangkat |
| CSS `@media print` | — | Ekspor laporan ke PDF via browser |

Tidak ada framework JavaScript, tidak ada backend — aplikasi berjalan sepenuhnya di sisi klien.

---

## Deployment ke GitHub Pages

1. Fork atau upload repository ke GitHub
2. Buka **Settings → Pages**
3. Pilih branch `main` dan folder `/ (root)`
4. Klik **Save** — aplikasi akan tersedia di `https://[username].github.io/[repo-name]/`

> Pastikan semua file (`index.html`, `manifest.json`, `sw.js`, folder `icons/`) ada di root repository.

---

## Penyimpanan Data

Semua data disimpan secara lokal di browser menggunakan `localStorage` dengan key `datavista_v2`.

| Key | Isi |
|-----|-----|
| `identitas` | Nama kelompok, sekolah, kelas, tahun ajaran, anggota |
| `anggota` | Daftar nama dan posisi anggota kelompok |
| `p1a0q1` … `p5ref2` | Jawaban teks per aktivitas per pertemuan |
| `p3_data` | Array 40 baris data survei responden |
| `chk_N_M` | Status checklist pertemuan N aktivitas M |

**Catatan penting:**
- Data akan hilang jika browser di-*clear cache* atau mode incognito digunakan
- Disarankan mengekspor PDF setelah setiap pertemuan
- Jangan berganti browser/perangkat di tengah proyek tanpa backup PDF

---

## Tujuan Pembelajaran

Setelah menggunakan DataVista V2, siswa diharapkan mampu:

1. **Membaca** data yang disajikan dalam tabel dan grafik dengan benar
2. **Menghitung** nilai mean, median, modus, jangkauan, dan kuartil
3. **Menyajikan** data ke dalam bentuk tabel dan diagram yang sesuai
4. **Menganalisis** data nyata penggunaan HP menggunakan ukuran pemusatan dan penyebaran
5. **Menyimpulkan** hasil analisis data untuk membuat keputusan sederhana

---

## Lisensi

© 2025 DataVista · Wahyu Setiawan · Universitas Pendidikan Indonesia

Hak cipta dilindungi. Penggunaan untuk keperluan pembelajaran diperbolehkan dengan menyertakan atribusi kepada pengembang.

