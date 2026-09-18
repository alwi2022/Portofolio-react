# Imam Bahri Alwi — Portfolio

Portfolio minimalist menggunakan Next.js App Router, React, TypeScript, dan Tailwind CSS. Tampilan mengikuti project referensi lokal portfolio, dengan konten dan aset Imam Bahri Alwi.

## Menjalankan

Gunakan Node.js 20.9+ dan npm.

```sh
npm install
npm run dev
```

Buka http://localhost:3000. Jika port sedang dipakai:

```sh
npm run dev -- --port 3100
```

## Validasi dan production

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Konten dan rute

- `src/data/langData.ts`: data proyek, pengalaman, sertifikat, dan terjemahan asli.
- `src/utils/seo.ts`: metadata dan structured data.
- `app/[[...path]]`: halaman Next.js untuk semua rute portfolio.
- `components/portfolio`: tampilan profil, proyek, sertifikat, kontak, dan pengalaman.
- `components/ui` dan `app/globals.css`: komponen serta gaya dari referensi minimalist.
- `public`: gambar, favicon, CV, dan aset asli.

Bahasa default adalah Indonesia. Toggle ID/EN mempertahankan halaman yang sedang dibuka. Rute `/`, `/id`, `/en`, `/project`, `/experience`, `/certificates`, serta varian `/id/...` dan `/en/...` tersedia. Rute tidak dikenal mengembalikan 404.

Tema mengikuti sistem dan dapat diubah melalui tombol tema. Pengalaman bisa dibuka melalui accordion. Kontak menggunakan email/telepon langsung, dan CV tetap bisa diunduh. Form EmailJS dan chatbot lama tidak dipakai dalam desain minimalist ini; tidak ada environment variable yang wajib diisi.

Grafik GitHub menggunakan kontribusi publik `alwi2022`, di-cache selama 24 jam. Jika layanan kontribusi tidak tersedia, halaman menampilkan tautan GitHub tanpa data buatan.

Konfigurasi Vercel menggunakan framework Next.js dengan redirect domain lama yang tetap dipertahankan. Tidak ada deploy otomatis dari perintah build.
