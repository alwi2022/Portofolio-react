export const projectFeatures = {
  id: {
    knect: [
      { title: 'Aplikasi web, mobile, dan API', items: [
        'Dashboard admin Next.js untuk HR, aplikasi Flutter untuk layanan mandiri karyawan, dan REST API NestJS dengan Prisma serta PostgreSQL.',
        'Aplikasi mobile mengikuti tema terang/gelap perangkat; direktori dan profil menggunakan foto karyawan dengan fallback inisial.',
      ] },
      { title: 'Organisasi dan data karyawan', items: [
        'Pengelolaan organisasi, departemen, jabatan, kantor, data karyawan, akun terkait, serta riwayat kepegawaian.',
        'Direktori rekan kerja, aktivitas tim, dan daftar bawahan untuk manajer. Lokasi kantor memakai pencarian alamat, pin peta, radius geofence, koordinat, dan zona waktu.',
      ] },
      { title: 'Shift dan absensi', items: [
        'Shift default perusahaan yang dapat diubah, penugasan shift per karyawan, jadwal hari ini, serta aturan waktu clock-in dan clock-out.',
        'Pemeriksaan GPS/geofence, selfie dan verifikasi wajah terhadap foto profil bila diwajibkan, riwayat kehadiran, serta pengajuan koreksi absensi.',
        'Kebijakan absensi di luar lokasi: ditolak, menunggu persetujuan dengan catatan, atau diterima dengan penanda anomali. Absensi pending belum dihitung untuk payroll.',
      ] },
      { title: 'Pengajuan dan persetujuan', items: [
        'Saldo dan pengajuan cuti, lembur, reimbursement, serta koreksi kehadiran dengan riwayat dan status permintaan.',
        'Alur persetujuan bersama dengan akses sesuai peran, halaman detail untuk admin, dan persetujuan manajer dari aplikasi mobile.',
      ] },
      { title: 'Payroll dan slip gaji', items: [
        'Komponen penggajian, kompensasi per karyawan, periode payroll, pemrosesan hasil penggajian, serta laporan.',
        'Slip gaji dapat dibaca karyawan melalui aplikasi. Hasil payroll yang sudah difinalisasi disimpan sebagai snapshot.',
      ] },
      { title: 'Kinerja dan rekrutmen', items: [
        'Target kinerja, siklus penilaian, dan review karyawan melalui admin serta akses informasi kinerja pada mobile.',
        'Lowongan, kandidat, dan alur perekrutan dikelola melalui dashboard admin dan API.',
      ] },
      { title: 'Komunikasi dan pelaporan', items: [
        'Pengumuman beserta halaman detail, inbox notifikasi, laporan operasional, dan catatan audit.',
        'Integrasi Firebase Cloud Messaging untuk push notification; pengiriman bergantung pada konfigurasi Firebase dan APNs untuk iOS.',
      ] },
      { title: 'Akses dan penyimpanan', items: [
        'JWT, rotasi refresh token, pemulihan sesi, sesi per perangkat, serta keluar dari satu atau semua perangkat.',
        'Otorisasi berbasis peran dan isolasi organisasi di API, cookie httpOnly untuk admin, serta penyimpanan token aman di mobile.',
        'Unggah foto profil melalui API terautentikasi, penyimpanan gambar Cloudinary, dan referensi wajah terenkripsi untuk pencocokan 1:1.',
      ] },
    ],
    'galaxy-pos': [
      { title: 'Kasir dan transaksi', items: [
        'Penjualan dengan barcode, pembelian, biaya operasional, pendapatan lain, diskon, PPN, nota besar, serta struk kecil/thermal.',
        'Pembayaran tunai, transfer, dan QRIS; pembayaran utang/piutang bertahap dengan riwayat pembayaran dan sisa tagihan.',
      ] },
      { title: 'Master data dan impor/ekspor', items: [
        'Kategori, produk, supplier, member, rekening bank, cetak barcode produk, kartu member, serta pengaturan identitas toko.',
        'Impor/ekspor Excel dan CSV dengan template unduhan, validasi per baris, penolakan duplikat, dan impor atomik per cabang.',
      ] },
      { title: 'Persediaan, opname, dan retur', items: [
        'Kartu stok masuk/keluar, stok awal, stok opname, pemakaian internal, barang rusak/hilang, dan penyesuaian stok.',
        'Retur sebagian atau seluruh transaksi, pembedaan barang layak jual/rusak, koreksi tagihan, serta pengembalian uang.',
        'Perhitungan HPP rata-rata bergerak, pencegahan stok negatif, serta jurnal dan pergerakan pembalik untuk pembatalan transaksi.',
      ] },
      { title: 'Servis perangkat', items: [
        'Pencatatan dan perubahan pekerjaan servis, status proses/selesai/diambil, tracking pelanggan, dan notifikasi WhatsApp berisi tautan status.',
        'Sparepart diambil dari stok dengan pencatatan HPP, rincian jasa dan sparepart pada faktur, serta pendapatan servis yang terhubung ke pembukuan.',
      ] },
      { title: 'Kas, bank, modal, dan pinjaman', items: [
        'Kas toko, bank, QRIS, rekening tambahan, modal awal/tambahan, pengambilan pemilik, pembagian hasil, dan transfer antarrekening.',
        'Rekonsiliasi saldo sebagai snapshot, pembayaran PPN, serta pinjaman diterima/diberikan dengan pokok, bunga, cicilan, sisa, dan jatuh tempo.',
      ] },
      { title: 'Jurnal dan akuntansi', items: [
        'Jurnal berpasangan dari transaksi operasional, filter buku besar per akun, ekspor jurnal CSV, dan pembatasan pencatatan pada periode yang sudah ditutup.',
        'Inventaris aset, nilai sisa, umur manfaat, penyusutan garis lurus, pelepasan aset beserta laba/ruginya, dan pengakuan biaya/pendapatan di muka per bulan.',
        'Proses akhir bulan dan tutup periode tanpa menggandakan jurnal saat pengakuan dijalankan ulang sebelum penutupan.',
      ] },
      { title: 'Laporan dan pajak', items: [
        'Laba rugi, neraca, arus kas operasional/investasi/pendanaan, rekap PPN masukan/keluaran, serta pencatatan pembayaran PPN.',
        'Ringkasan kas, penjualan, pembelian, barang, dan kategori untuk periode harian, bulanan, atau rentang pilihan; ekspor PDF/Excel dan dashboard ChartJS.',
        'Cakupan pajak berupa pembukuan dan rekap PPN; belum mencakup e-Faktur atau pengiriman SPT.',
      ] },
      { title: 'Cabang dan hak akses', items: [
        'Multi-cabang dengan pemisahan data mengikuti cabang pengguna, serta peran Administrator, Kasir, dan Teknisi.',
        'Manajemen user/profil dan pengaturan toko; modul operasional, keuangan, dan akuntansi dibatasi untuk admin.',
      ] },
      { title: 'Aplikasi desktop Windows offline', items: [
        'Paket Electron dengan Laravel, runtime PHP, aset lokal, dan database SQLite. Operasional lokal tidak memerlukan XAMPP, Composer, Node.js, atau koneksi internet.',
        'Installer Windows x64, pengaturan toko dan akun administrator saat pertama dibuka, serta penyimpanan data di luar folder instalasi.',
        'Cadangan otomatis harian, ekspor backup .galaxypos.zip, dan pemulihan database, gambar, serta kunci aplikasi melalui menu Data.',
      ] },
    ],
    taskflow: [
      { title: 'Proyek dan tampilan tugas', items: [
        'Membuat, mengubah, berpindah, dan menghapus proyek; CRUD tugas dengan penanggung jawab, prioritas, tanggal mulai/jatuh tempo, dan estimasi jam.',
        'Papan Kanban drag-and-drop, jadwal mingguan dengan penjadwalan dan backlog, Semua Tugas, kalender, Tugas Saya lintas proyek, tampilan tim, dan ringkasan analitik.',
        'Pencarian dan filter tugas berdasarkan atribut, label, milestone, serta field kustom yang didukung.',
      ] },
      { title: 'Beban kerja dan milestone', items: [
        'Beban kerja per anggota dan per hari berdasarkan estimasi jam atau jumlah tugas, persentase utilisasi, kapasitas, serta tugas tanpa penanggung jawab.',
        'Rentang satu, dua, atau empat minggu dengan navigasi tanggal dan baris anggota yang dapat dibuka menjadi lajur tugas.',
        'Milestone per proyek dengan target tanggal, urutan, progres selesai/total, estimasi jam, dan penanda terlambat.',
      ] },
      { title: 'Diskusi, checklist, dan label', items: [
        'Komentar dengan edit/hapus sesuai izin, mention anggota melalui @, editor Markdown dengan mode tulis/pratinjau, serta diskusi gabungan komentar dan aktivitas.',
        'Checklist yang dapat diurutkan dan ditugaskan per item, indikator progres pada kartu/daftar, serta label berwarna yang dapat dipakai sebagai filter.',
      ] },
      { title: 'Lampiran dan riwayat aktivitas', items: [
        'Unggah file dengan indikator progres dan pembatalan, thumbnail gambar, unduh, serta hapus sesuai hak akses dari penyimpanan privat Supabase.',
        'Riwayat perubahan tugas, komentar, checklist, dan lampiran; perubahan dari MCP ditandai sebagai aktivitas via AI.',
      ] },
      { title: 'Notifikasi dan pembaruan langsung', items: [
        'Mengikuti/berhenti mengikuti tugas, notifikasi penugasan, mention, komentar, dan perubahan status; badge belum dibaca serta tandai sudah dibaca.',
        'Pembaruan melalui Supabase Realtime dengan polling cadangan dan sambung ulang; perubahan bersamaan diperiksa melalui versi tugas.',
      ] },
      { title: 'Laporan harian dan mingguan', items: [
        'Laporan Markdown dengan template, tulis/pratinjau, autosave, penelusuran minggu, pencarian, serta tampilan laporan anggota tim.',
        'Isi draf dari aktivitas tugas, susun laporan mingguan dari laporan harian, statistik mingguan, kirim laporan, salin, dan unduh .md.',
        'Draf laporan dapat disusun melalui MCP dan diberi label AI; pengiriman laporan tetap dilakukan pengguna.',
      ] },
      { title: 'Dokumen proyek', items: [
        'Pohon dokumen dan subdokumen, pencarian, pemindahan/urutan dokumen, editor Markdown dengan autosave, pratinjau, serta unduh .md.',
        'Referensi tugas dari dokumen, daftar dokumen terkait pada detail tugas, riwayat revisi, pemulihan versi, dan penanganan konflik edit.',
      ] },
      { title: 'Status dan field kustom', items: [
        'Status per proyek dengan nama, warna, kategori, dan urutan; papan mengikuti status proyek dan penghapusan status memakai status pengganti.',
        'Field teks, angka, tanggal, dropdown, checkbox, URL, dan anggota; nilai dapat diubah dari tugas dan ditampilkan, diurutkan, atau difilter pada daftar sesuai tipenya.',
      ] },
      { title: 'Koneksi MCP untuk asisten AI', items: [
        'Server Model Context Protocol melalui Streamable HTTP untuk klien seperti Claude dan Cursor, dengan OAuth 2.1/PKCE, halaman persetujuan, dan pengelolaan aplikasi terhubung.',
        'Tool untuk membaca proyek/anggota, mencari/detail tugas, membuat dan memperbarui tugas termasuk pembaruan massal, membaca beban kerja, serta mengelola komentar, checklist, label, milestone, dan nilai field kustom.',
        'Tool tambahan untuk notifikasi, ringkasan aktivitas, membaca/menyimpan draf laporan harian/mingguan, serta mencari, membuat, dan memperbarui dokumen proyek.',
        'Akses baca-saja per klien, pencabutan akses, batas penggunaan, audit via AI, serta pemeriksaan izin dan versi yang sama dengan aplikasi. MCP tidak menyediakan penghapusan tugas/proyek/anggota atau pengiriman laporan.',
      ] },
      { title: 'Akun tim dan isolasi data', items: [
        'Login username/password, tampilkan/sembunyikan password, opsi ingat saya, dan akun tim yang dikelola administrator.',
        'Validasi izin pada server, isolasi workspace melalui PostgreSQL row-level security, serta data proyek/tugas tersimpan di Supabase.',
      ] },
    ],
  },
  en: {
    knect: [
      { title: 'Web, mobile, and API', items: [
        'Next.js administration dashboard, Flutter employee self-service app, and a NestJS REST API with Prisma and PostgreSQL.',
        'Mobile follows the device light/dark theme; employee profiles and the directory use photos with initials as a fallback.',
      ] },
      { title: 'Organization and employee records', items: [
        'Organizations, departments, positions, offices, employee records, linked accounts, and employment history.',
        'Colleague directory, team activity, and manager direct reports. Office setup includes address search, a map pin, geofence radius, coordinates, and timezone lookup.',
      ] },
      { title: 'Shifts and attendance', items: [
        'Editable company default shifts, employee shift assignments, daily schedules, and clock-in/clock-out time rules.',
        'GPS/geofence checks, selfies and profile-photo face verification when required, attendance history, and correction requests.',
        'Outside-location policies can block attendance, require approval with a note, or accept it with an anomaly flag. Pending attendance is excluded from payroll until approval.',
      ] },
      { title: 'Requests and approvals', items: [
        'Leave balances and requests, overtime, reimbursements, and attendance corrections with request history and status.',
        'Shared approval workflows with role-based access, admin detail pages, and manager approvals from mobile.',
      ] },
      { title: 'Payroll and payslips', items: [
        'Payroll components, employee compensation, payroll periods, calculation results, and reports.',
        'Employee payslips in the mobile app; finalized payroll results are retained as snapshots.',
      ] },
      { title: 'Performance and recruitment', items: [
        'Performance goals, review cycles, and employee reviews in administration, with employee performance access on mobile.',
        'Jobs, candidates, and hiring workflows managed through the admin dashboard and API.',
      ] },
      { title: 'Communication and reporting', items: [
        'Announcements and detail pages, notification inbox, operational reports, and audit records.',
        'Firebase Cloud Messaging integration for push notifications, subject to Firebase configuration and APNs setup for iOS.',
      ] },
      { title: 'Access and storage', items: [
        'JWT authentication, rotating refresh tokens, session restoration, device sessions, and sign-out on one or all devices.',
        'API role-based access and organization isolation, admin httpOnly cookies, and secure token storage on mobile.',
        'Authenticated profile-photo uploads, Cloudinary image storage, and encrypted face references for employee-specific 1:1 comparison.',
      ] },
    ],
    'galaxy-pos': [
      { title: 'Checkout and transactions', items: [
        'Barcode sales, purchases, operating expenses, other income, discounts, VAT, full-size invoices, and small thermal receipts.',
        'Cash, bank transfer, and QRIS payments; staged receivable/payable payments with payment history and outstanding balances.',
      ] },
      { title: 'Master data and import/export', items: [
        'Categories, products, suppliers, members, bank accounts, product barcodes, member cards, and store identity settings.',
        'Excel/CSV import and export with downloadable templates, per-row validation, duplicate rejection, and atomic imports per branch.',
      ] },
      { title: 'Inventory, stocktakes, and returns', items: [
        'Stock movement cards, opening inventory, stocktakes, internal use, damaged/lost goods, and stock adjustments.',
        'Partial or full transaction returns, separate handling of sellable/damaged goods, bill corrections, and refunds.',
        'Moving-average cost of goods sold, negative-stock prevention, and reversing journal entries and stock movements for cancellations.',
      ] },
      { title: 'Device repairs', items: [
        'Repair jobs, in-progress/finished/collected statuses, customer tracking, and WhatsApp notifications with status links.',
        'Spare parts drawn from inventory with cost recording, service invoices itemizing labour and parts, and repair revenue connected to bookkeeping.',
      ] },
      { title: 'Cash, banking, capital, and loans', items: [
        'Store cash, bank, QRIS, additional accounts, opening/additional capital, owner withdrawals, distributions, and account transfers.',
        'Balance reconciliation snapshots, VAT payments, and loans received/issued with principal, interest, instalments, outstanding balances, and due dates.',
      ] },
      { title: 'Journal and accounting', items: [
        'Double-entry journals linked to operational transactions, account-ledger filters, CSV journal exports, and posting restrictions for closed periods.',
        'Fixed assets, residual value, useful life, straight-line depreciation, disposal gains/losses, and monthly recognition of prepaid expenses/deferred income.',
        'Month-end processing and period closing, with repeatable recognition before closing that does not duplicate journal entries.',
      ] },
      { title: 'Reports and tax', items: [
        'Profit and loss, balance sheet, operating/investing/financing cash flows, input/output VAT summaries, and VAT payment records.',
        'Cash, sales, purchases, product, and category summaries across daily, monthly, or custom ranges; PDF/Excel exports and a ChartJS dashboard.',
        'Tax scope covers bookkeeping and VAT summaries; e-Faktur and tax-return submission are not included.',
      ] },
      { title: 'Branches and access', items: [
        'Multiple branches with data scoped to the user branch, plus Administrator, Cashier, and Technician roles.',
        'User/profile management and store settings; operational finance and accounting modules are restricted to administrators.',
      ] },
      { title: 'Offline Windows desktop app', items: [
        'Electron package bundling Laravel, PHP, local assets, and SQLite. Local operations require no XAMPP, Composer, Node.js, or internet connection.',
        'Windows x64 installer, first-run store/admin setup, and user data stored outside the installation directory.',
        'Automatic daily backups, .galaxypos.zip backup export, and database/image/application-key restoration through the Data menu.',
      ] },
    ],
    taskflow: [
      { title: 'Projects and task views', items: [
        'Project creation, editing, switching, and deletion; task CRUD with assignees, priority, start/due dates, and estimated hours.',
        'Drag-and-drop Kanban, weekly scheduling and backlog, All Tasks, calendar, cross-project My Tasks, team view, and overview analytics.',
        'Task search and filters for task attributes, labels, milestones, and supported custom fields.',
      ] },
      { title: 'Workload and milestones', items: [
        'Daily member workload by estimated hours or task count, utilization, capacity, and unassigned tasks.',
        'One-, two-, or four-week ranges with date navigation and expandable member rows showing task lanes.',
        'Project milestones with optional target dates, ordering, completed/total progress, estimated hours, and overdue indicators.',
      ] },
      { title: 'Discussion, checklists, and labels', items: [
        'Permission-based comment editing/deletion, @mentions, Markdown write/preview, and a combined discussion/activity feed.',
        'Sortable checklist items with individual assignees, progress on cards/lists, and colored labels with task filtering.',
      ] },
      { title: 'Attachments and activity history', items: [
        'File uploads with progress and cancellation, image thumbnails, downloads, and permission-based deletion using private Supabase storage.',
        'Task, comment, checklist, and attachment activity history; MCP changes are identified as activity via AI.',
      ] },
      { title: 'Notifications and live updates', items: [
        'Follow/unfollow tasks, assignment/mention/comment/status notifications, unread badges, and mark-as-read actions.',
        'Supabase Realtime updates with fallback polling and reconnection; task versions detect concurrent changes.',
      ] },
      { title: 'Daily and weekly reports', items: [
        'Markdown reports with templates, write/preview, autosave, week navigation, search, and team report views.',
        'Build drafts from task activity, compile weekly reports from daily entries, review weekly statistics, submit, copy, and download .md.',
        'MCP can prepare report drafts with AI attribution; report submission remains a user action.',
      ] },
      { title: 'Project documents', items: [
        'Document/subdocument trees, search, moving/ordering, Markdown editing with autosave, preview, and .md downloads.',
        'Task references, related documents in task detail, revision history, version restoration, and edit-conflict handling.',
      ] },
      { title: 'Custom statuses and fields', items: [
        'Per-project status names, colors, categories, and ordering; boards follow project statuses and status deletion requires a replacement.',
        'Text, number, date, dropdown, checkbox, URL, and member fields, editable on tasks and available in supported list columns, sorting, and filters.',
      ] },
      { title: 'MCP connections for AI assistants', items: [
        'Model Context Protocol server over Streamable HTTP for clients such as Claude and Cursor, using OAuth 2.1/PKCE, consent, and connected-app management.',
        'Tools to read projects/members, search/read tasks, create/update tasks including bulk updates, inspect workload, and manage comments, checklists, labels, milestones, and custom-field values.',
        'Additional tools for notifications, activity summaries, reading/saving daily and weekly report drafts, and searching/creating/updating project documents.',
        'Per-client read-only access, revocation, usage limits, AI audit attribution, and the same permission/version checks as the app. MCP does not delete tasks/projects/members or submit reports.',
      ] },
      { title: 'Team accounts and data isolation', items: [
        'Username/password login, password visibility, remember-me sessions, and administrator-managed team accounts.',
        'Server-side permissions, PostgreSQL row-level security for workspace isolation, and persisted Supabase project/task data.',
      ] },
    ],
  },
} as const;
