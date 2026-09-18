# Laporan verifikasi portfolio

Tanggal: 18 September 2026
Commit yang diperiksa: `559aca0` (Tidy file layout, drop dead code, convert images to WebP).
Metode: review kode, lint, typecheck, build production, npm audit, HTTP lokal, dan interaksi browser pada hasil production di port 3101.

## Kesimpulan

Migrasi ke Next.js dan npm berhasil. Bahasa default Indonesia dengan Inggris tersedia. Pemeriksaan otomatis lolos, tetapi ditemukan dua bug pengguna dan dokumentasi yang tertinggal. Implementasi tidak diubah dalam verifikasi ini.

## Temuan

### 1. P2: gambar login Galaxy POS hilang

Lokasi: `lib/content.ts:109` dan `lib/content.ts:534`.

Galeri kedua bahasa merujuk `/images/projects/galaxy-pos/login.png`, tetapi file tersebut tidak ada di public. Halaman detail menampilkan gambar rusak dengan caption "Halaman login yang didesain ulang".

Bukti: URL aset mengembalikan HTTP 404; URL optimasi Next Image mengembalikan HTTP 400 "The requested resource isn't a valid image"; gambar di browser memiliki `naturalWidth: 0`.

Saran: tambahkan aset login yang benar atau hapus entri galeri tersebut pada kedua bahasa.

### 2. P2: toggle bahasa menghilangkan detail proyek

Lokasi: `components/portfolio/chrome.tsx:13` dan `app/[[...path]]/layout.tsx:20`.

Navbar hanya menerima `lang` dan `page`, tanpa `slug`. Akibatnya, toggle bahasa pada detail proyek selalu membentuk URL daftar proyek.

Reproduksi: buka `/project/satria-gear?from=home`, klik "Switch to English". Hasil aktual `/en/project` dengan heading "Projects". Hasil yang diharapkan `/en/project/satria-gear`, dengan detail proyek yang sama. Konteks `from=home` juga hilang.

Saran: teruskan slug ke Navbar, bentuk tautan dengan `projectPath` pada halaman detail, dan pertahankan konteks kembali jika diperlukan.

### 3. P3: README tidak sesuai struktur dan perilaku terbaru

Lokasi: `README.md:31`, `README.md:32`, `README.md:38`.

README merujuk `src/data/langData.ts` dan `src/utils/seo.ts`, padahal konten dan SEO sekarang berada di `lib/content.ts` dan `lib/seo.ts`. Klaim toggle mempertahankan halaman tidak berlaku untuk detail proyek.

README juga menyebut `/id` dan `/id/...` tersedia. Dalam server Next lokal, URL tersebut mengembalikan 404; pengalihan hanya didefinisikan dalam `vercel.json`. Ini bukan bukti kegagalan redirect di Vercel, karena platform tersebut belum diuji.

Saran: perbarui path dokumentasi, jelaskan Indonesia tanpa prefix dan Inggris memakai `/en`, serta batas redirect khusus Vercel.

## Pemeriksaan yang lolos

- `npm run lint`: exit 0, tanpa warning/error.
- `npm run typecheck`: exit 0.
- `npm run build`: exit 0; 20 halaman statis termasuk halaman internal not-found berhasil dibuat.
- `npm audit`: 0 vulnerability.
- Semua 18 URL di sitemap mengembalikan HTTP 200 pada production lokal.
- Beranda Indonesia dan Inggris, daftar proyek, pengalaman, sertifikat, serta lima detail proyek Indonesia mengembalikan HTTP 200; detail Galaxy POS Inggris juga 200.
- Canonical dan atribut HTML lang diperiksa pada beranda ID/EN serta detail Galaxy POS ID/EN dan sesuai bahasa/rute.
- `/nonexistent` mengembalikan HTTP 404.
- CV `/fullstack-cv-imambahrialwi.pdf` mengembalikan HTTP 200.
- Accordion Konten.com terbuka setelah diklik (`aria-expanded=true`).
- Tombol tema berpindah ke dark; tidak ditemukan overflow horizontal pada beranda dengan viewport 320px maupun 375px pada pemeriksaan tersebut.
- Grafik GitHub tampil dengan akun alwi2022 dan total 218 kontribusi pada sesi pemeriksaan.
- Pemindaian 28 path aset unik dalam konten menemukan satu path hilang, yaitu gambar login Galaxy POS.

## Catatan perubahan konten

Data tidak lagi persis sama dengan portfolio sebelum migrasi. Galaxy POS, TypeSynq Royale, dan Maneka masih tersedia; Satria Gear dan OpenClaw ditambahkan. Pengalaman Konten.com dan Kelas Clipper juga ditambahkan, dan periode DRX/Hallo Hukum berubah. Pendidikan serta klaim angka hasil pekerjaan ditambahkan. Sebagian skill/sertifikat lama tidak lagi ditampilkan.

Contoh: DRX sebelumnya September 2025 sampai sekarang, kini 05/25?06/26; HalloHukum sebelumnya April?Juni 2025, kini 02/25?05/25. Perubahan ini mungkin berasal dari instruksi lanjutan kepada Claude yang tidak tersedia dalam konteks audit. Keakuratan riwayat kerja dan klaim metrik belum diverifikasi terhadap CV atau sumber pribadi pengguna, sehingga tidak dinyatakan salah.

## Batas verifikasi

Tidak dilakukan deploy, pengujian redirect/header di Vercel, pengiriman email, panggilan telepon, atau validasi seluruh tautan eksternal. Tampilan desktop dan struktur minimalist diperiksa, tetapi kesamaan piksel dengan referensi belum disertifikasi. Kondisi kegagalan API GitHub ditinjau melalui kode fallback, tidak disimulasikan. Pemeriksaan mobile adalah sampel beranda pada dua ukuran, bukan audit seluruh halaman/perangkat.

Tidak ada perubahan kode aplikasi. Laporan ini adalah satu-satunya berkas yang ditambahkan oleh tahap verifikasi.
