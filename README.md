# DataVista V2 — Media Pembelajaran Statistika Kelas VIII

> Media pembelajaran interaktif berbasis **Project-Based Learning (PjBL)** untuk topik statistika SMP Kelas VIII, dikembangkan dalam kerangka penelitian disertasi S3 di Universitas Pendidikan Indonesia (UPI).

---

## Deskripsi

**DataVista V2** adalah aplikasi web satu halaman (*single-page application*) yang dirancang sebagai bahan ajar digital berbantuan media untuk memperkuat **literasi statistik** dan **resiliensi matematis** siswa SMP. Aplikasi ini mendukung pembelajaran berbasis proyek dengan konteks nyata: survei penggunaan HP di kalangan siswa.

Aplikasi ini dapat diinstall sebagai **Progressive Web App (PWA)** sehingga dapat digunakan secara *offline* dan diakses seperti aplikasi native di perangkat mobile maupun desktop.

---

## Fitur Utama

### 1. Identitas Kelompok
- Formulir isian nama kelompok, sekolah, kelas, dan tahun ajaran
- Manajemen anggota kelompok dengan posisi (Ketua, Wakil Ketua, Sekretaris, Anggota)
- Data tersimpan otomatis via `localStorage` — persisten selama sesi proyek berlangsung

### 2. Modul Proyek (5 Pertemuan)
Setiap pertemuan mengikuti sintaks Project-Based Learning:

| Pertemuan | Judul | Isi |
|-----------|-------|-----|
| P1 | Pertanyaan Mendasar | Mengamati fenomena, merumuskan pertanyaan proyek, prediksi awal |
| P2 | Perencanaan & Penjadwalan | Rancang instrumen survei, pembagian tugas, penjadwalan |
| P3 | Pengumpulan Data | Survei 40 responden, tabulasi & validasi data |
| P4 | Pengolahan & Penyajian Data | Turus, hitung statistik, visualisasi diagram interaktif |
| P5 | Presentasi, Refleksi & Evaluasi | Presentasi hasil proyek, simpulan, evaluasi akhir |

### 3. Materi Statistika
Materi tersusun dalam tab-tab terpisah:
- **Mean** — rumus, langkah menghitung, contoh
- **Median** — data ganjil dan genap
- **Modus** — menghitung frekuensi
- **Jangkauan (Range)** — selisih nilai maksimum dan minimum
- **Kuartil** *(materi pengayaan opsional)* — Q1, Q2, Q3, simpangan kuartil
- **Penyajian Data** — diagram batang, garis, lingkaran, tabel distribusi frekuensi

### 4. Kalkulator Statistik Terpandu
- Input data mentah (dipisahkan koma)
- Pengisian langkah-langkah secara mandiri oleh siswa
- Validasi jawaban dengan umpan balik langsung (*correct / wrong*)
- Hasil perhitungan hanya muncul setelah jawaban benar
- Visualisasi grafik interaktif menggunakan **Chart.js**

### 5. Latihan Soal (SOLO Taxonomy)
Soal tersusun berdasarkan taksonomi **SOLO** (*Structure of Observed Learning Outcomes*):

**Pilihan Ganda (10 soal):**
- Prastruktural → Unistruktural → Multistruktural → Relasional → Extended Abstract
- Umpan balik jawaban langsung dengan pembahasan
- Skor otomatis dengan label penilaian

**Essay (2 soal):**
- E1: SOLO Relasional — analisis mean, median, modus pada data nyata dengan outlier
- E2: SOLO Extended Abstract — pengambilan keputusan berbasis statistik
- Rubrik penilaian tersedia (toggle) setelah siswa mengisi jawaban

### 6. Tentang / Info Aplikasi
- Informasi pengembang dan konteks penelitian
- Catatan penggunaan dan disclaimer

---

## Tujuan Pembelajaran

Setelah menggunakan DataVista, siswa diharapkan dapat:

1. **Membaca** data yang disajikan dalam tabel dan grafik dengan benar
2. **Menghitung** nilai mean, median, modus, jangkauan, dan kuartil
3. **Menyajikan** data ke dalam bentuk tabel dan diagram yang sesuai
4. **Menganalisis** data nyata penggunaan HP menggunakan ukuran pemusatan dan penyebaran
5. **Menyimpulkan** hasil analisis data untuk membuat keputusan sederhana

---

## Teknologi

| Komponen | Keterangan |
|----------|------------|
| HTML5 + CSS3 | Struktur dan tampilan antarmuka |
| Vanilla JavaScript | Logika aplikasi, navigasi, kalkulasi |
| [Chart.js v4.4.1](https://www.chartjs.org/) | Visualisasi grafik interaktif |
| Google Fonts | Tipografi: *Sora* (display) + *Plus Jakarta Sans* (body) |
| localStorage | Penyimpanan data pengguna di browser |
| Service Worker | Dukungan PWA & mode offline |
| Web App Manifest | Konfigurasi instalasi PWA |

---

## Struktur File

```
/
├── index_revisi_SMP_v4.html   # Aplikasi utama (single-file)
├── manifest.json              # Konfigurasi PWA
├── sw.js                      # Service Worker
└── icons/
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    └── icon-512.png
```

> **Catatan:** Seluruh logika aplikasi (HTML, CSS, JavaScript) terdapat dalam satu file `index_revisi_SMP_v4.html`.

---

## Cara Penggunaan

### Bagi Siswa
1. Buka file `index_revisi_SMP_v4.html` di browser (Chrome/Firefox/Safari)
2. Isi **identitas kelompok** satu kali di halaman Beranda
3. Pilih pertemuan yang sedang berlangsung di halaman **Proyek**
4. Baca **Materi** sesuai topik pertemuan
5. Gunakan **Kalkulator** untuk latihan menghitung secara terpandu
6. Kerjakan soal di halaman **Latihan** untuk evaluasi mandiri
7. **Jangan hapus data browser / clear cache** selama proyek berlangsung

### Bagi Guru
- Catatan guru (*guru note*) tersedia di setiap pertemuan untuk panduan fasilitasi
- Rubrik penilaian essay dapat digunakan sebagai acuan koreksi
- Skor pilihan ganda dihitung otomatis; essay dinilai secara manual

### Instalasi sebagai PWA
1. Buka aplikasi di browser yang mendukung PWA (Chrome/Edge/Safari)
2. Klik notifikasi **"Install DataVista"** yang muncul setelah beberapa detik
3. Aplikasi dapat digunakan *offline* setelah instalasi

---

## Konteks Penelitian

Aplikasi ini dikembangkan sebagai bagian dari penelitian disertasi:

> **"Pengembangan Bahan Ajar Berbantuan Media Digital DataVista untuk Penguatan Literasi Statistik serta Resiliensi Matematis Siswa SMP"**
>
> Program Doktor (S3) Pendidikan Matematika — Universitas Pendidikan Indonesia (UPI)

Model pengembangan yang digunakan: **Educational Design Research (EDR) — Plomp (2013)** dengan evaluasi formatif mengacu pada **Tessmer (1993)**.

---

## Catatan Teknis

- Data pengguna tersimpan di `localStorage` browser. Data akan **hilang** jika cache browser dihapus.
- Aplikasi dioptimalkan untuk layar mobile (≥360px), tablet (600–899px), dan desktop (≥900px).
- Navigasi menggunakan **bottom navigation** di mobile dan **sidebar** di desktop.
- Versi ini adalah revisi keempat (`v4`) dari iterasi pengembangan.

---

## Lisensi

Dikembangkan untuk keperluan penelitian akademik. Seluruh hak cipta materi pembelajaran berada pada pengembang. Penggunaan di luar konteks penelitian memerlukan izin tertulis.

