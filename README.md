# Imam Bahri Alwi — Portfolio

Portfolio minimalist menggunakan Next.js App Router, React, TypeScript, dan Tailwind CSS. Tampilan mengikuti project referensi lokal portfolio, dengan konten dan aset Imam Bahri Alwi.

Website: [imambahri.com](https://imambahri.com).

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
- `lib/project-features.ts`: rincian fitur Knect HRIS, Galaxy POS, dan Taskflow dalam kedua bahasa.
- `lib/seo.ts`: metadata, canonical, hreflang, dan structured data.
- `lib/routes.ts`: pemetaan URL ke bahasa dan halaman.
- `app/[[...path]]`: satu catch-all route untuk seluruh halaman portfolio.
- `components/portfolio`: tampilan profil, pengalaman, proyek, pendidikan, sertifikat, dan kontak.
- `components/ui` dan `app/globals.css`: komponen serta gaya dari referensi minimalist.
- `public`: gambar, favicon, CV, `robots.txt`, `sitemap.xml`, dan `llms.txt`.

Bahasa default adalah Indonesia dan disajikan tanpa prefix; Inggris memakai `/en`.
Rute yang tersedia: `/`, `/project`, `/project/<slug>`, `/experience`, `/certificates`,
beserta padanan `/en/...` — 22 URL, sama persis dengan isi `sitemap.xml`.

Tidak ada rute `/id/...`. URL tersebut dialihkan 301 ke padanan tanpa prefix lewat
`vercel.json`, sehingga hanya berlaku saat di-deploy ke Vercel. Di `next start` lokal
URL itu mengembalikan 404, dan itu memang perilaku yang diharapkan.

Toggle bahasa mempertahankan halaman yang sedang dibuka, termasuk detail proyek.
Rute tidak dikenal, termasuk slug proyek yang tidak ada, mengembalikan 404.

Tema mengikuti sistem dan dapat diubah melalui tombol tema. Pengalaman bisa dibuka melalui accordion. Kontak menggunakan email/telepon langsung, dan CV tetap bisa diunduh. AI dibuka lewat tombol maskot 44px di kanan bawah. Label hanya muncul saat hover atau fokus; tombol berubah menjadi chevron bawah saat panel terbuka. Set `CHAT_BACKEND_API` pada environment lokal dan hosting ke backend yang menerima `{ context, messages, lang }` dan mengembalikan `{ reply }`. Variabel lama `VITE_BACKEND_API` juga didukung lewat server. `lib/chat-profile.ts` mengambil data langsung dari `lib/content.ts` dan `lib/skills.ts`, sehingga pengalaman, proyek, pendidikan, sertifikat, serta skills AI mengikuti portfolio. Browser hanya mengirim percakapan ke `/api/chat`; profil lengkap ditambahkan oleh server. Jalankan `npm run test:chat` untuk menguji sumber data dan API.

Untuk review lokal, `.env.local` yang diabaikan Git mengarahkan chat ke backend di `http://127.0.0.1:5002/api/chat`. Jalankan backend di port 5002 sebelum mencoba chat. Konfigurasi hosting tetap menggunakan URL backend produksi.

Riwayat percakapan tersedia melalui ikon riwayat pada header chat. Percakapan yang berhasil mendapat jawaban disimpan di localStorage browser (maksimal 50 percakapan, 100 pesan terakhir per percakapan), dengan judul awal dari pertanyaan pertama. Pengguna dapat mencari isi/judul, membuka kembali, mengganti nama, mengarsipkan/memulihkan, dan menghapus dengan konfirmasi. Riwayat tidak disinkronkan antarperangkat; membersihkan data browser menghapus riwayat. Jika penyimpanan browser gagal, panel menampilkan pemberitahuan dan chat tetap dapat dipakai.

Arah UI chat mengikuti [Floating Modal Chat](https://www.assistant-ui.com/examples/modal) dan screenshot pengguna: panel kompak 400×560, judul di atas composer, saran pertanyaan tanpa kotak di bawahnya, dan halaman tetap dapat diakses. Panel ditutup lewat tombol chevron, Escape, atau klik di luar. Implementasi memakai komponen yang sudah ada tanpa menambahkan runtime assistant-ui. Maskot beserta animasinya berasal dari `portfolio-bot.html` milik pengguna dan tetap dipertahankan pada tombol, header, serta status menunggu. Status seperti Thinking/Mumbling adalah teks kepribadian saat menunggu respons, bukan tampilan proses penalaran model. ENERGY 2 / RHYTHM 2 / MOTION 1: maskot sebagai identitas, whitespace untuk membedakan pesan, dan animasi dibatasi pada maskot serta transisi panel. Ikon mengikuti library portfolio dan masing-masing menunjukkan aksi nyata; shadow hanya pada panel yang berada di atas halaman. Reduced motion, tema terang/gelap, focus ring, dan tombol sentuh 44px tetap didukung.

Grafik GitHub menggunakan kontribusi publik `alwi2022`, di-cache selama 24 jam. Jika layanan kontribusi tidak tersedia, halaman menampilkan tautan GitHub tanpa data buatan.

Konfigurasi Vercel menggunakan framework Next.js dengan redirect domain lama yang tetap dipertahankan. Tidak ada deploy otomatis dari perintah build.
