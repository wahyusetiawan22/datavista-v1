# ðŸ“Š DataVista V2.1

**Media Pembelajaran Statistika Interaktif Berbasis Project-Based Learning**  
Kelas VIII SMP/MTs â€” Kurikulum Merdeka

---

## ðŸ“Œ Deskripsi

DataVista V2.1 adalah aplikasi media pembelajaran statistika berbasis web (*single-file HTML*) yang dirancang untuk siswa Kelas VIII SMP/MTs. Aplikasi ini mengintegrasikan pendekatan **Project-Based Learning (PjBL)** dengan kerangka **SOLO Taxonomy** untuk mendorong literasi statistik dan ketangguhan matematis (*mathematical resilience*) siswa melalui proyek nyata berbasis data.

Konteks proyek yang digunakan adalah analisis **pola penggunaan HP siswa**, mulai dari pengumpulan data survei, tabulasi, perhitungan statistik, hingga presentasi infografis.

> Dikembangkan dalam rangka penelitian disertasi S3 di **Universitas Pendidikan Indonesia (UPI)**, 2026.

---

## âœ¨ Fitur Utama

### ðŸ—‚ï¸ Navigasi Multi-Halaman
Aplikasi terdiri dari enam halaman utama yang dapat diakses melalui navigasi bawah (mobile) atau sidebar (desktop):

| Halaman | Ikon | Fungsi |
|---------|------|--------|
| **Beranda** | ðŸ  | Informasi identitas kelompok, petunjuk penggunaan, dan driving question |
| **Proyek** | ðŸ“ | Lima sesi PjBL (P1â€“P5) dengan aktivitas terstruktur |
| **Materi** | ðŸ“š | Referensi konsep statistik (Mean, Median, Modus, Jangkauan, Kuartil, Penyajian Data) |
| **Kalkulator** | ðŸ§® | Kalkulator statistik interaktif berbasis isian bertahap |
| **Latihan Soal** | ðŸ“ | Bank soal pilihan ganda + esai berbasis SOLO Taxonomy |
| **Grafik** | ðŸ“Š | Visualisasi data interaktif (Chart.js) |

---

### ðŸ“ Sesi Proyek PjBL (P1â€“P5)

| Sesi | Topik | Aktivitas |
|------|-------|-----------|
| **P1** | Pertanyaan Mendasar | Pengamatan fenomena, perumusan pertanyaan proyek, prediksi awal |
| **P2** | Perencanaan & Penjadwalan | Rancangan instrumen survei, pembagian tugas, jadwal pengumpulan data |
| **P3** | Pengumpulan Data | Tabulasi 40 responden (data gender + durasi HP), validasi data |
| **P4** | Pengolahan & Penyajian Data | Turus, kalkulasi statistik deskriptif, pembuatan diagram |
| **P5** | Presentasi, Refleksi & Evaluasi | Presentasi infografis, penilaian antar-kelompok, refleksi akhir proyek |

Setiap sesi dilengkapi:
- Kartu tujuan kegiatan
- Driving question tetap di bagian atas
- Field refleksi
- Catatan guru (Mode Guru, dilindungi kata sandi)

---

### ðŸ§® Kalkulator Statistik Interaktif

Kalkulator berbasis isian (*fill-in*) yang memandu siswa menghitung secara bertahap:
- **Mean** â€” melalui tabel fÃ—x, Î£(fÃ—x), dan pembagian dengan n
- **Median** â€” dengan visualisasi data terurut dan identifikasi posisi tengah
- **Modus** â€” melalui tabel frekuensi dengan sorotan nilai tertinggi
- **Jangkauan** â€” X_maks âˆ’ X_min
- **Kuartil** â€” Q1, Q2, Q3, dan Simpangan Kuartil (QR)

Fitur: hasil hanya muncul setelah siswa mengisi jawaban dengan benar. Terdapat tombol *Muat Contoh* untuk data demonstrasi.

---

### ðŸ“ Latihan Soal (SOLO Taxonomy)

Bank soal yang disusun mengikuti empat level SOLO Taxonomy:

| Level | Tipe |
|-------|------|
| **Unistruktural** | Pilihan ganda (satu konsep tunggal) |
| **Multistruktural** | Pilihan ganda (beberapa fakta) |
| **Relasional** | Pilihan ganda (hubungan antar konsep) |
| **Extended Abstract** | Esai terbuka (generalisasi dan aplikasi) |

Fitur latihan soal:
- Indikator progres per nomor soal
- Umpan balik langsung per jawaban
- Pembahasan tersembunyi yang muncul setelah menjawab
- Rubrik penilaian esai (dapat dinilai guru)
- Ringkasan skor SOLO per level di akhir latihan
- Tombol reset untuk mengulang

---

### ðŸ“Š Grafik Interaktif (Chart.js)

Halaman Grafik memvisualisasikan data yang telah diinput di P3/P4 secara otomatis:
- Diagram Batang
- Diagram Garis
- Diagram Lingkaran

---

### ðŸ” Mode Guru

Catatan/umpan balik guru tersimpan tersembunyi per sesi, hanya dapat dibuka dengan kata sandi. Fitur ini memungkinkan guru memberikan anotasi langsung pada lembar kerja digital siswa.

---

### ðŸ’¾ Penyimpanan Otomatis

Semua data siswa (identitas kelompok, jawaban aktivitas, skor rubrik, data survei) disimpan secara otomatis ke `localStorage` browser. Data tetap tersedia meskipun halaman ditutup dan dibuka kembali.

---

### ðŸ“¥ Ekspor PDF

Laporan proyek lengkap (mencakup identitas kelompok, ringkasan data P3/P4, hasil statistik, refleksi, rubrik penilaian, dan ringkasan skor SOLO) dapat dicetak/diunduh sebagai PDF melalui tombol **Unduh Laporan Proyek (PDF)** di sesi P5.

---

### ðŸ“± Progressive Web App (PWA)

DataVista V2.1 mendukung instalasi sebagai PWA di perangkat mobile maupun desktop:
- Dapat diinstal ke layar utama (*Add to Home Screen*)
- Dukungan Service Worker (`sw.js`) untuk pembaruan versi otomatis
- Deteksi mode standalone

---

## ðŸ—ï¸ Struktur File

```
datavista/
â”œâ”€â”€ index.html          # Aplikasi utama (single-file, semua fitur)
â”œâ”€â”€ manifest.json       # Konfigurasi PWA
â”œâ”€â”€ sw.js               # Service Worker
â””â”€â”€ icons/
    â”œâ”€â”€ icon-144.png
    â”œâ”€â”€ icon-152.png
    â”œâ”€â”€ icon-192.png
    â””â”€â”€ icon-512.png
```

> Semua logika, tampilan, dan konten pembelajaran terintegrasi dalam satu file `index.html`.

---

## ðŸ› ï¸ Teknologi yang Digunakan

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| HTML5 / CSS3 | â€” | Struktur dan tampilan |
| JavaScript (Vanilla) | ES6+ | Logika interaktif |
| [Chart.js](https://www.chartjs.org/) | 4.4.1 | Visualisasi grafik |
| [QRCode.js](https://davidshimjs.github.io/qrcodejs/) | 1.0.0 | Pembuatan QR code |
| Google Fonts | â€” | Tipografi (Sora, Plus Jakarta Sans) |
| localStorage | â€” | Penyimpanan data lokal |
| Service Worker / PWA | â€” | Instalasi & pembaruan offline |

---

## ðŸš€ Cara Penggunaan

### Siswa
1. Buka file `index.html` di browser (Chrome/Firefox/Edge direkomendasikan).
2. Isi identitas kelompok di halaman **Beranda**.
3. Ikuti alur sesi proyek secara berurutan: **P1 â†’ P2 â†’ P3 â†’ P4 â†’ P5**.
4. Gunakan halaman **Materi** dan **Kalkulator** sebagai referensi saat mengerjakan aktivitas.
5. Kerjakan **Latihan Soal** untuk mengukur pemahaman.
6. Di P5, unduh **Laporan Proyek (PDF)** sebagai dokumentasi akhir.

### Guru
1. Buka aplikasi bersama siswa atau pantau secara individual.
2. Gunakan **Mode Guru** (ikon kunci ðŸ”) di setiap sesi untuk menambahkan catatan/umpan balik.
3. Nilai esai siswa melalui rubrik yang tersedia di halaman Latihan Soal.
4. Minta siswa mengunduh laporan PDF untuk dokumentasi dan penilaian portofolio.

---

## ðŸ“ Desain Responsif

| Breakpoint | Layout |
|------------|--------|
| `< 600px` | Mobile â€” navigasi bawah, satu kolom |
| `600â€“899px` | Tablet â€” dua kolom form, navigasi bawah |
| `â‰¥ 900px` | Desktop â€” sidebar tetap, tata letak multi-kolom |

---

## ðŸŽ¨ Palet Warna & Tipografi

**Warna Utama:**
- Primary: `#0BAF7A` (hijau DataVista)
- Accent: `#F4A932` (amber â€” catatan guru & materi opsional)
- Danger: `#E8453C` (merah â€” jawaban salah)

**Tipografi:**
- Display/Judul: `Sora` (Google Fonts)
- Body: `Plus Jakarta Sans` (Google Fonts)

---

## ðŸ“‹ Konteks Akademik

| Aspek | Keterangan |
|-------|------------|
| **Jenjang** | SMP/MTs Kelas VIII |
| **Mata Pelajaran** | Matematika â€” Statistika |
| **Pendekatan** | Project-Based Learning (PjBL) |
| **Kerangka Evaluasi** | SOLO Taxonomy (Biggs & Collis) |
| **Tujuan** | Meningkatkan literasi statistik dan ketangguhan matematis |
| **Institusi Pengembang** | Universitas Pendidikan Indonesia (UPI) |
| **Tahun** | 2026 |

---

## ðŸ“„ Lisensi & Hak Cipta

Â© 2026 Universitas Pendidikan Indonesia. Dikembangkan untuk keperluan penelitian disertasi S3 bidang Pendidikan Matematika.

Penggunaan untuk keperluan pendidikan non-komersial diperkenankan dengan mencantumkan atribusi.

---

## ðŸ“¬ Kontak

Untuk pertanyaan terkait penggunaan atau pengembangan DataVista, hubungi pengembang melalui institusi **Universitas Pendidikan Indonesia (UPI)**.

