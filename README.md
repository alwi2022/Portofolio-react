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

- `lib/content.ts`: data proyek, pengalaman, pendidikan, sertifikat, dan terjemahan.
- `lib/seo.ts`: metadata, canonical, hreflang, dan structured data.
- `lib/routes.ts`: pemetaan URL ke bahasa dan halaman.
- `app/[[...path]]`: satu catch-all route untuk seluruh halaman portfolio.
- `components/portfolio`: tampilan profil, pengalaman, proyek, pendidikan, sertifikat, dan kontak.
- `components/ui` dan `app/globals.css`: komponen serta gaya dari referensi minimalist.
- `public`: gambar, favicon, CV, `robots.txt`, `sitemap.xml`, dan `llms.txt`.

Bahasa default adalah Indonesia dan disajikan tanpa prefix; Inggris memakai `/en`.
Rute yang tersedia: `/`, `/project`, `/project/<slug>`, `/experience`, `/certificates`,
beserta padanan `/en/...` — 18 URL, sama persis dengan isi `sitemap.xml`.

Tidak ada rute `/id/...`. URL tersebut dialihkan 301 ke padanan tanpa prefix lewat
`vercel.json`, sehingga hanya berlaku saat di-deploy ke Vercel. Di `next start` lokal
URL itu mengembalikan 404, dan itu memang perilaku yang diharapkan.

Toggle bahasa mempertahankan halaman yang sedang dibuka, termasuk detail proyek.
Rute tidak dikenal, termasuk slug proyek yang tidak ada, mengembalikan 404.

Tema mengikuti sistem dan dapat diubah melalui tombol tema. Pengalaman bisa dibuka melalui accordion. Kontak menggunakan email/telepon langsung, dan CV tetap bisa diunduh. Form EmailJS dan chatbot lama tidak dipakai dalam desain minimalist ini; tidak ada environment variable yang wajib diisi.

Grafik GitHub menggunakan kontribusi publik `alwi2022`, di-cache selama 24 jam. Jika layanan kontribusi tidak tersedia, halaman menampilkan tautan GitHub tanpa data buatan.

Konfigurasi Vercel menggunakan framework Next.js dengan redirect domain lama yang tetap dipertahankan. Tidak ada deploy otomatis dari perintah build.
