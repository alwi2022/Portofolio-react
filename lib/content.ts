export const langData = {
  en: {
    hero: {
      typed: ["Full-Stack Developer", "Software Developer", "Tech Enthusiast"],
      desc: "I'm a full-stack developer building web and mobile applications with TypeScript, Next.js, React Native, and Node.js. My work covers the interface and the services behind it, including authentication, payments, automation, and SEO. I've also built an education platform with 76 API endpoints on a shared production database serving around 150,000 accounts, using Supabase and PostgreSQL.",
    },
    projects: {
      sectionTitle: "Projects",
      allLabel: "All projects",
      backLabel: "Back to projects",
      backHomeLabel: "Back to home",
      items: [
        {
          slug: "satria-gear",
          title: "Satria Gear",
          role: "Full-Stack Developer & AI Automation Engineer",
          image: "/images/projects/satria-gear/cover.webp",
          description: "Esports tournament platform with public schedules, brackets and registration, an admin operations dashboard, and an AI-assisted DevOps workflow.",
          body: [
            "Satria Gear is an esports tournament platform built to replace the spreadsheets and group chats that usually hold a tournament together. The public side carries everything a participant needs: tournament information, schedules, brackets, team pages, live streams, and the registration flow itself.",
            "Behind it sits an admin dashboard that centralises the whole operation. Tournaments, official teams, rosters, payments, matches, live scores, bracket progression, streams, settings, and admin users are all managed from one place, so match day no longer depends on someone manually reconciling several documents.",
            "Registration and payment run end to end without staff intervention. Midtrans handles the transaction, webhooks keep payment status synchronised, and Resend delivers the confirmation email once a team is verified, turning what used to be a manual back-and-forth into a single automated path.",
            "The last piece is an AI agent wired into Discord, GitHub Actions, and Vercel deploy logs. It reports only on failures, reads repository context to suggest likely root causes and affected files, and drafts Codex prompts for the fix, which cut the time spent triaging a broken deploy considerably.",
          ],
          gallery: [],
          technologies: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "Midtrans",
            "Resend",
            "Discord API",
            "GitHub Actions",
          ],
          links: [
            {
              labelKey: "website",
              url: "https://www.sg-id.com/",
            },
          ],
        },
        {
          slug: "openclaw",
          title: "OpenClaw Discord AI Moderator",
          role: "AI Automation Engineer",
          image: "/images/projects/openclaw/cover.webp",
          description: "Discord AI moderator prototype built to test whether AI agents can support real community moderation workflows.",
          body: [
            "OpenClaw started as a question rather than a product: can an AI agent actually carry part of the moderation load in a live Discord community, or does it only work in demos? This prototype was built to find out.",
            "The moderation side covers detecting inappropriate messages, generating warnings, and deferring to admin authority rather than acting over it. The flows were designed so a human always stays above the bot in the chain of decisions.",
            "To test response quality under pressure, the bot runs two distinct personas: a crypto technical assistant and a football analysis assistant. Both topics move fast and attract confidently wrong answers, which made them a useful stress test for how the agent handles questions it should not answer.",
            "It also answers around the clock whenever it is tagged, fielding the repetitive community questions that would otherwise fall to whichever moderator happened to be online.",
          ],
          gallery: [],
          technologies: [
            "OpenClaw",
            "Discord API",
            "AI Agents",
          ],
          links: [],
        },
        {
          slug: "typesynq-royale",
          title: "TypeSynq Royale",
          role: "Full-Stack Web3 Developer",
          image: "/images/projects/typesynq-royale/cover.webp",
          description: "Real-time multiplayer typing battle game with on-chain betting and reward distribution on the Monad Testnet.",
          body: [
            "TypeSynq Royale is a multiplayer typing battle where several players race through the same passage at the same time. Multisynq keeps every client in sync over WebSocket, so the race stays fair even when players sit on different connections.",
            "The stakes are on-chain. Players bet before a match and smart contracts on the Monad Testnet hold the pot and distribute rewards to the winner, which meant the game logic and the contract logic had to agree exactly on who won and when.",
            "The host configures each round: word count, time limit, and theme. The word set itself is generated by AI to match the chosen theme, so a lobby can go from programming jargon to football vocabulary without anyone maintaining word lists by hand.",
            "The project placed in the top 6 at the official Monad Game Hackathon.",
          ],
          gallery: [],
          technologies: [
            "React",
            "TypeScript",
            "Multisynq",
            "Solidity",
            "Ethers.js",
            "MongoDB",
          ],
          links: [
            {
              labelKey: "website",
              url: "https://synqtype.vercel.app/",
            },
            {
              labelKey: "demo",
              url: "https://x.com/p0isonxs/status/1949463249864552547",
            },
          ],
        },
        {
          slug: "galaxy-pos",
          title: "Galaxy POS",
          role: "Full-Stack Developer",
          image: "/images/projects/galaxy-pos/cover.webp",
          description: "Point of Sales app to manage sales, cashier, reporting, branches, and service workflows, built with Laravel 8.",
          body: [
            "Galaxy POS is a point-of-sale application for shops that also run a repair service counter. It handles sales transactions, the cashier flow, and service jobs in one system. It is built on Laravel 8 with PHP 7.4 as the minimum, and started from an open-source POS tutorial project which I then extended with new features, bug fixes, and a reworked interface.",
            "The largest addition was multi-branch support, where each branch keeps its own users and its own data, together with a new Teknisi role dedicated to handling service work rather than sales.",
            "Service management grew into its own module: adding and editing service jobs, moving them through statuses such as in-progress, finished, and collected, and tracking that status in real time. Revenue from services feeds straight into the reports, and each status change sends the customer a WhatsApp notification containing a tracking link, so nobody has to call the shop to ask whether their device is ready.",
            "Around that sits the standard retail surface: product categories and products with multi-delete and barcode printing, members with printable member cards, suppliers, expense, purchase and sales transactions, profit-and-loss reports across daily, monthly and custom ranges, both full-size and thermal receipts, multi-role user and profile management, store settings, and a ChartJS dashboard.",
            "Along the way I fixed the PDF error that broke member and product barcode printing, modernised the sidebar, rebuilt the login page, and redesigned the receipt layout. The application is deployed on AWS and can be tried live.",
          ],
          gallery: [
            {
              src: "/images/projects/galaxy-pos/sidebar.webp",
              caption: "Dashboard with the reworked sidebar and ChartJS reporting",
              width: 1920,
              height: 1200,
            },
            {
              src: "/images/projects/galaxy-pos/service.webp",
              caption: "Service management module",
              width: 1919,
              height: 1000,
            },
            {
              src: "/images/projects/galaxy-pos/tracking.webp",
              caption: "Real-time service status tracking",
              width: 1920,
              height: 1200,
            },
            {
              src: "/images/projects/galaxy-pos/whatsapp-notification.webp",
              caption: "WhatsApp notification sent to the customer with a tracking link",
              width: 1919,
              height: 1003,
            },
          ],
          technologies: [
            "Laravel",
            "PHP",
            "Livewire",
            "Jetstream",
            "ChartJS",
            "AWS",
          ],
          links: [
            {
              labelKey: "demo",
              url: "https://alwi.biz.id/login",
            },
            {
              labelKey: "Docs",
              url: "https://github.com/alwi2022/galaxy-pos/blob/main/README.md",
            },
            {
              labelKey: "github",
              url: "https://github.com/alwi2022/galaxy-pos",
            },
          ],
        },
        {
          slug: "maneka",
          title: "Maneka",
          role: "Frontend Developer (Team Project)",
          image: "/images/projects/maneka/cover.webp",
          description: "AI-powered career planning platform that helps users discover their strengths through Howard Gardner's Theory of Multiple Intelligences.",
          body: [
            "Maneka helps users discover their unique strengths based on Howard Gardner's Theory of Multiple Intelligences, addressing a real difficulty faced by Indonesian students and workers when choosing a career path.",
            "The idea came from a hard statistic: 87% of Indonesian students end up in the wrong major, and 73% of employees are unhappy in their jobs. We had watched friends and classmates go through exactly that, and wanted to build something that met the problem where it actually starts.",
            "My contribution was on the frontend: building the animations, the data visualisations that turn an assessment result into something a student can read at a glance, and the integration with the backend APIs. The hardest part was taking a dense psychological theory and reducing it to an interactive tool without flattening what makes it useful.",
            "Working on it also taught me how much of the outcome depends on cross-functional communication. I kept in close contact with the team, particularly whenever the backend or the design changed. There were still miscommunications, and what I took from them was how quickly you need to adapt and keep moving with the team rather than around it.",
          ],
          gallery: [
            {
              src: "/images/projects/maneka/assessment.webp",
              caption: "Home screen and the two assessment formats ,  true/false and a 1–6 scale",
              width: 1920,
              height: 1080,
            },
            {
              src: "/images/projects/maneka/results.webp",
              caption: "Results: dominant intelligence, radar chart, and detailed per-intelligence scores",
              width: 1920,
              height: 1080,
            },
            {
              src: "/images/projects/maneka/answers.webp",
              caption: "Questions across 90 items, colour-coded per intelligence type",
              width: 1920,
              height: 1080,
            },
            {
              src: "/images/projects/maneka/future-plan.webp",
              caption: "Future plan builder, with the tasks generated onto a calendar by AI",
              width: 1920,
              height: 1080,
            },
          ],
          technologies: [
            "React Native",
            "Expo",
            "MongoDB",
            "Express",
            "OpenAI API",
            "Tavily API",
            "Cron JS",
            "Axios",
            "AWS",
          ],
          links: [
            {
              labelKey: "expo",
              url: "https://expo.dev/preview/update?message=fix:%20slicing%2020%20question&updateRuntimeVersion=1.0.0&createdAt=2025-03-17T14:37:37.110Z&slug=exp&projectId=4bd366a8-2bbc-4e99-9fbf-af38b1d16b68&group=4d0832dd-2aa7-4acd-bef5-59916d281c6d",
            },
            {
              labelKey: "github",
              url: "https://github.com/TalentDiscovery/Maneka-Backend-Public",
            },
          ],
        },
      ],
      buttonLabels: {
        website: "Website",
        Docs: "Documentation",
        github: "GitHub",
        expo: "Expo QR",
        demo: "Demo",
      },
    },
    skills: {
      sectionTitle: "Skills",
      description:
        "Technologies I use to build scalable and modern applications",
    },
    experience: {
      sectionTitle: "Experience",
      items: [
        {
          position: "Full-Stack Developer",
          company: "Konten.com",
          logo: "/images/companies/konten.webp",
          duration: "06/26 - Present",
          description: "Building product features for a creator-clipping platform across authentication, rewards, gamification, content, and automation, spanning frontend, backend APIs, and SEO.",
          responsibilities: [
            "Strengthened account security with single-device session enforcement using Supabase GoTrue and server-side validation, invalidating older sessions and prompting re-authentication when an account is accessed from another device",
            "Built a seven-day consecutive-login onboarding system with Rp15,000 reward eligibility and a guided walkthrough covering profile completion, campaign discovery, brief review, video upload, and withdrawal",
            "Developed a weekly Clipper leaderboard and five-tier progression system for Base, Verified, Certified, Professional, and Elite Clippers, combining view thresholds, 0–20% campaign bonuses, and monthly rank reviews",
            "Built an SEO-ready blog system using dynamic metadata, structured data, tables of contents generated automatically from H2 headings, and FAQ schema, and automated daily Discord activity reports through cron jobs and webhooks",
          ],
          technologies: [
            "TypeScript",
            "Next.js",
            "Supabase",
            "PostgreSQL",
            "Discord API",
            "JSON-LD Schema",
          ],
        },
        {
          position: "Backend Developer",
          company: "Kelas Clipper",
          logo: "/images/companies/kelas-clipper.svg",
          duration: "08/26 - 09/26",
          description: "Built the Kelas Clipper backend domain from scratch, an education platform layered onto a shared production database serving approximately 150,000 Konten.com accounts.",
          responsibilities: [
            "Built the backend domain from scratch using Express.js and strict TypeScript, delivering 76 endpoints across student and admin workflows, 22 PostgreSQL tables, and 23 additive migrations on a shared production database serving approximately 150,000 accounts",
            "Unified authentication across Konten.com and Kelas Clipper through a single Supabase GoTrue tenant, letting existing users sign in directly while automatically provisioning clipper accounts, wallets, and roles for email/password, Google PKCE, and payment-based registrations",
            "Secured the 24-hour trial and paid-subscription lifecycle using compare-and-set activation, idempotent Xendit invoice and webhook processing, callback-token validation, and double-entry ledger records",
            "Reduced Bootcamp map database round-trips from 42 queries to 3 and cut generated certificate size from 3.39 MB to 0.54 MB, roughly 84%",
          ],
          technologies: [
            "TypeScript",
            "Express.js",
            "PostgreSQL",
            "Supabase GoTrue",
            "Xendit",
            "OAuth/PKCE",
          ],
        },
        {
          position: "Full-Stack Developer",
          company: "PT. Berkat Indah Garment (DRX)",
          logo: "/images/companies/drx.svg",
          duration: "05/25 - 06/26",
          description: "Contributed to three live production products (DRX Token, Wear, and Sportnet), working across frontend, backend services, and CMS admin dashboards within existing architectures.",
          responsibilities: [
            "Built the Padel Hub feature end to end for the DRX Sportnet mobile application, developing the frontend with React Native and backend services with HonoJS on Bun, Prisma ORM, and PostgreSQL",
            "Improved search visibility across DRX platforms by developing SEO-optimized Next.js interfaces with dynamic metadata, Open Graph, and JSON-LD structured data",
            "Developed scalable backend services using NestJS, Prisma, and PostgreSQL, supporting content lifecycle management, admin workflows, and modular data schemas",
            "Raised Google PageSpeed Insights scores from approximately 50–60 to 80–90 through code cleanup, rendering optimization, asset optimization, and legacy-code refactoring",
          ],
          technologies: [
            "React Native",
            "Next.js",
            "NestJS",
            "HonoJS",
            "Prisma",
            "PostgreSQL",
            "TypeScript",
          ],
        },
        {
          position: "Frontend Developer (Contract)",
          company: "Hallo Hukum",
          logo: "/images/companies/hallo-hukum.webp",
          duration: "02/25 - 05/25",
          description: "Developed two React Native (Expo) applications for a LegalTech product connecting clients with lawyers, covering both the client and the lawyer app.",
          responsibilities: [
            "Converted wireframes into responsive UIs for two React Native (Expo) apps, one for clients and one for lawyers",
            "Integrated Stream real-time chat with voice and video calls plus authentication flows, shipping a stable release with 0 blocking issues",
            "Optimized rendering and state management, improving UI responsiveness by 25% across devices",
            "Implemented JWT/OAuth access control and session management, securing 100% of protected features",
          ],
          technologies: [
            "React Native",
            "Expo",
            "TypeScript",
            "Stream Chat/Voice/Video",
            "JWT/OAuth",
          ],
        },
        {
          position: "Web Developer & SEO Recovery (Freelance)",
          company: "ExplorePulau.id",
          logo: "/images/companies/explore-pulau.webp",
          duration: "03/25 - 04/25",
          description: "Rescued a tourism website from a gambling-spam hack, handling post-hack cleanup, server hardening, and organic search recovery.",
          responsibilities: [
            "Rescued the site from a gambling-spam hack by removing injected files and cleaning the infected server",
            "Hardened security and restructured the file system, improving load stability and reducing attack surface",
            "Improved SEO visibility by removing spam-indexed URLs from Google Search Console",
          ],
          technologies: [
            "JavaScript",
            "SEO",
            "Google Search Console",
            "cPanel",
          ],
        },
      ],
    },
    education: {
      sectionTitle: "Education",
      items: [
        {
          institution: "Hacktiv8",
          program: "Full Stack JavaScript Immersive Program",
          logo: "/images/companies/hacktiv8.webp",
          duration: "October 2024 – February 2025",
          location: "Jakarta, Indonesia",
        },
        {
          institution: "Nurul Huda Baros Vocational High School",
          program: "Multimedia",
          logo: "",
          duration: "2020 – 2023",
          location: "Serang, Indonesia",
        },
      ],
    },
    certificates: {
      sectionTitle: "Certificates",
      description:
        "Here are some of the certificates I've earned through my learning journey and professional development.",
      viewCredential: "View Credential",
      items: [
        {
          title: "Fullstack Javascript Immersive",
          image: "/images/certificates/hacktiv8.webp",
          credentialUrl:
            "https://www.imambahri.com/images/certificates/hacktiv8-certificate.webp",
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          image: "/images/certificates/freecodecamp-javascript.webp",
          credentialUrl:
            "https://freecodecamp.org/certification/alwi2025/javascript-algorithms-and-data-structures-v8",
        },
        {
          title: "Cloud Practitioner Essentials (AWS Cloud Basics)",
          image: "/images/certificates/dicoding-aws.webp",
          credentialUrl: "https://www.dicoding.com/certificates/QLZ92LDKDX5D",
        },
        {
          title: "Problem Solving (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-problem-solving.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/80f26cd43965",
        },
        {
          title: "SQL (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-sql.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/1d057e9da521",
        },
        {
          title: "JavaScript (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-javascript.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/3d00c06b155e",
        },
        {
          title: "Node.js (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-nodejs.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/d9e76b8ad085",
        },
      ],
    },

    contact: {
      sectionTitle: "Let's Work Together",
      description:
        "Have a project in mind? Let's discuss how I can help bring your ideas to life.",
      resumeDownload: "Download Resume",
    },

    // di dalam langData.en
  },
  id: {
    hero: {
      typed: [
        "Full-Stack Developer",
        "Pengembang Perangkat Lunak",
        "Penggemar Teknologi",
      ],
      desc: "Saya full-stack developer yang membangun aplikasi web dan mobile dengan TypeScript, Next.js, React Native, dan Node.js. Saya mengerjakan antarmuka dan layanan di baliknya, termasuk autentikasi, pembayaran, otomasi, dan SEO. Saya juga membangun platform edukasi dengan 76 endpoint API di atas database produksi bersama yang melayani sekitar 150.000 akun, menggunakan Supabase dan PostgreSQL.",
    },

    projects: {
      sectionTitle: "Proyek",
      allLabel: "Semua proyek",
      backLabel: "Kembali ke proyek",
      backHomeLabel: "Kembali ke beranda",
      items: [
        {
          slug: "satria-gear",
          title: "Satria Gear",
          role: "Full-Stack Developer & AI Automation Engineer",
          image: "/images/projects/satria-gear/cover.webp",
          description: "Platform turnamen esports dengan jadwal, bracket, dan pendaftaran publik, dashboard operasional admin, serta alur DevOps berbantuan AI.",
          body: [
            "Satria Gear adalah platform turnamen esports yang dibangun untuk menggantikan spreadsheet dan obrolan grup yang biasanya jadi tulang punggung sebuah turnamen. Sisi publiknya memuat semua yang dibutuhkan peserta: informasi turnamen, jadwal, bracket, halaman tim, live stream, sampai alur pendaftarannya sendiri.",
            "Di belakangnya ada dashboard admin yang memusatkan seluruh operasional. Turnamen, tim resmi, roster, pembayaran, pertandingan, skor langsung, perpindahan slot bracket, stream, pengaturan, dan user admin dikelola dari satu tempat, sehingga hari pertandingan tidak lagi bergantung pada seseorang yang mencocokkan beberapa dokumen secara manual.",
            "Pendaftaran hingga pembayaran berjalan end-to-end tanpa campur tangan panitia. Midtrans menangani transaksinya, webhook menjaga status pembayaran tetap sinkron, dan Resend mengirim email konfirmasi begitu sebuah tim terverifikasi, mengubah proses bolak-balik manual menjadi satu jalur otomatis.",
            "Bagian terakhir adalah AI agent yang tersambung ke Discord, GitHub Actions, dan log deploy Vercel. Ia hanya melaporkan kegagalan, membaca konteks repositori untuk menduga akar masalah beserta file yang terdampak, dan menyusun prompt Codex untuk perbaikannya, memangkas banyak waktu penelusuran saat deploy bermasalah.",
          ],
          gallery: [],
          technologies: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "Midtrans",
            "Resend",
            "Discord API",
            "GitHub Actions",
          ],
          links: [
            {
              labelKey: "website",
              url: "https://www.sg-id.com/",
            },
          ],
        },
        {
          slug: "openclaw",
          title: "OpenClaw Discord AI Moderator",
          role: "AI Automation Engineer",
          image: "/images/projects/openclaw/cover.webp",
          description: "Prototipe moderator AI Discord untuk menguji apakah AI agent bisa mendukung alur moderasi komunitas yang sesungguhnya.",
          body: [
            "OpenClaw berangkat dari sebuah pertanyaan, bukan dari produk: benarkah AI agent bisa memikul sebagian beban moderasi di komunitas Discord yang hidup, atau ia hanya bekerja di demo? Prototipe ini dibuat untuk menjawabnya.",
            "Sisi moderasinya mencakup deteksi pesan tidak pantas, pembuatan peringatan, dan tunduk pada otoritas admin alih-alih bertindak melampauinya. Alurnya dirancang agar manusia selalu berada di atas bot dalam rantai pengambilan keputusan.",
            "Untuk menguji kualitas jawaban dalam tekanan, bot ini menjalankan dua persona berbeda: asisten teknis kripto dan asisten analisis sepak bola. Kedua topik bergerak cepat dan mengundang jawaban yang keliru tapi terdengar meyakinkan, sehingga cocok dipakai menguji bagaimana agent menangani pertanyaan yang seharusnya tidak ia jawab.",
            "Bot juga menjawab sepanjang waktu setiap kali ditandai, menangani pertanyaan komunitas yang berulang yang biasanya jatuh ke moderator mana pun yang kebetulan sedang online.",
          ],
          gallery: [],
          technologies: [
            "OpenClaw",
            "Discord API",
            "AI Agents",
          ],
          links: [],
        },
        {
          slug: "typesynq-royale",
          title: "TypeSynq Royale",
          role: "Full-Stack Web3 Developer",
          image: "/images/projects/typesynq-royale/cover.webp",
          description: "Game balap mengetik multiplayer real-time dengan taruhan dan pembagian hadiah on-chain di Monad Testnet.",
          body: [
            "TypeSynq Royale adalah balapan mengetik multiplayer di mana beberapa pemain melaju pada teks yang sama secara bersamaan. Multisynq menjaga setiap klien tetap sinkron lewat WebSocket, sehingga balapan tetap adil meski koneksi tiap pemain berbeda-beda.",
            "Taruhannya berjalan on-chain. Pemain bertaruh sebelum pertandingan dan smart contract di Monad Testnet menahan pot serta membagikan hadiah kepada pemenang, artinya logika game dan logika kontrak harus sepakat persis soal siapa yang menang dan kapan.",
            "Host mengatur tiap ronde: jumlah kata, batas waktu, dan tema. Kumpulan katanya sendiri dihasilkan AI sesuai tema yang dipilih, sehingga satu lobi bisa berpindah dari istilah pemrograman ke kosakata sepak bola tanpa ada yang perlu merawat daftar kata secara manual.",
            "Proyek ini meraih peringkat 6 besar di Monad Game Hackathon resmi.",
          ],
          gallery: [],
          technologies: [
            "React",
            "TypeScript",
            "Multisynq",
            "Solidity",
            "Ethers.js",
            "MongoDB",
          ],
          links: [
            {
              labelKey: "website",
              url: "https://synqtype.vercel.app/",
            },
            {
              labelKey: "demo",
              url: "https://x.com/p0isonxs/status/1949463249864552547",
            },
          ],
        },
        {
          slug: "galaxy-pos",
          title: "Galaxy POS",
          role: "Full-Stack Developer",
          image: "/images/projects/galaxy-pos/cover.webp",
          description: "Aplikasi Point of Sales untuk mengelola penjualan, kasir, laporan, cabang, dan layanan servis, dibangun dengan Laravel 8.",
          body: [
            "Galaxy POS adalah aplikasi Point of Sales untuk toko yang sekaligus menjalankan layanan servis. Aplikasi ini menangani transaksi penjualan, alur kasir, dan pekerjaan servis dalam satu sistem. Dibangun dengan Laravel 8 dan minimal PHP 7.4, aplikasi ini berangkat dari sebuah proyek tutorial POS open-source yang kemudian saya kembangkan dengan fitur baru, perbaikan bug, dan tampilan yang dirombak.",
            "Penambahan terbesarnya adalah dukungan multi-cabang, di mana tiap cabang punya user dan datanya sendiri, berikut role baru Teknisi yang khusus menangani pekerjaan servis alih-alih penjualan.",
            "Manajemen servis tumbuh menjadi modul tersendiri: menambah dan mengubah pekerjaan servis, memindahkannya melalui status seperti proses, selesai, dan diambil, serta melacak status itu secara real-time. Penghasilan dari servis langsung masuk ke laporan, dan setiap perubahan status mengirim notifikasi WhatsApp berisi tautan tracking ke pelanggan, jadi tidak ada lagi yang perlu menelepon toko sekadar menanyakan apakah perangkatnya sudah siap.",
            "Di sekelilingnya ada perangkat ritel yang standar: kategori dan produk dengan multiple delete serta cetak barcode, member dengan kartu member yang bisa dicetak, supplier, transaksi pengeluaran, pembelian, dan penjualan, laporan laba rugi harian, bulanan, dan rentang custom, nota besar maupun thermal, manajemen user dan profil multi-role, pengaturan toko, serta dashboard ChartJS.",
            "Sepanjang pengerjaan saya memperbaiki error PDF yang membuat cetak barcode member dan produk gagal, memodernkan sidebar, membangun ulang halaman login, dan mendesain ulang tata letak nota. Aplikasinya di-deploy ke AWS dan bisa dicoba langsung.",
          ],
          gallery: [
            {
              src: "/images/projects/galaxy-pos/sidebar.webp",
              caption: "Dashboard dengan sidebar baru dan laporan ChartJS",
              width: 1920,
              height: 1200,
            },
            {
              src: "/images/projects/galaxy-pos/service.webp",
              caption: "Modul manajemen servis",
              width: 1919,
              height: 1000,
            },
            {
              src: "/images/projects/galaxy-pos/tracking.webp",
              caption: "Pelacakan status servis secara real-time",
              width: 1920,
              height: 1200,
            },
            {
              src: "/images/projects/galaxy-pos/whatsapp-notification.webp",
              caption: "Notifikasi WhatsApp ke pelanggan berisi tautan tracking",
              width: 1919,
              height: 1003,
            },
          ],
          technologies: [
            "Laravel",
            "PHP",
            "Livewire",
            "Jetstream",
            "ChartJS",
            "AWS",
          ],
          links: [
            {
              labelKey: "demo",
              url: "https://alwi.biz.id/login",
            },
            {
              labelKey: "Docs",
              url: "https://github.com/alwi2022/galaxy-pos/blob/main/README.md",
            },
            {
              labelKey: "github",
              url: "https://github.com/alwi2022/galaxy-pos",
            },
          ],
        },
        {
          slug: "maneka",
          title: "Maneka",
          role: "Frontend Developer (Team Project)",
          image: "/images/projects/maneka/cover.webp",
          description: "Platform perencanaan karier berbasis AI yang membantu pengguna mengenali kekuatan dirinya lewat Teori Kecerdasan Majemuk Howard Gardner.",
          body: [
            "Maneka membantu pengguna mengenali kekuatan unik dirinya berdasarkan Teori Kecerdasan Majemuk Howard Gardner, menjawab kesulitan nyata yang dihadapi pelajar dan pekerja Indonesia saat memilih jalur karier.",
            "Idenya berangkat dari angka yang pahit: 87% pelajar Indonesia salah memilih jurusan, dan 73% pekerja tidak bahagia dengan pekerjaannya. Kami menyaksikan sendiri teman dan rekan sekelas mengalami persis hal itu, dan ingin membangun sesuatu yang menyentuh masalahnya dari titik awal.",
            "Kontribusi saya ada di sisi frontend: membangun animasi, visualisasi data yang mengubah hasil asesmen menjadi sesuatu yang bisa dibaca sekilas oleh seorang pelajar, serta integrasi dengan API backend. Bagian tersulitnya adalah menyederhanakan teori psikologi yang padat menjadi alat interaktif tanpa menghilangkan hal yang membuatnya berguna.",
            "Mengerjakan ini juga mengajari saya betapa besar peran komunikasi lintas fungsi terhadap hasil akhirnya. Saya menjaga komunikasi erat dengan tim, terutama setiap kali backend atau desain berubah. Miskomunikasi tetap terjadi, dan yang saya ambil darinya adalah pentingnya cepat beradaptasi dan terus bergerak bersama tim, bukan di sekelilingnya.",
          ],
          gallery: [
            {
              src: "/images/projects/maneka/assessment.webp",
              caption: "Layar utama dan dua format asesmen: benar/salah dan skala 1–6",
              width: 1920,
              height: 1080,
            },
            {
              src: "/images/projects/maneka/results.webp",
              caption: "Hasil: kecerdasan dominan, grafik radar, dan skor rinci tiap kecerdasan",
              width: 1920,
              height: 1080,
            },
            {
              src: "/images/projects/maneka/answers.webp",
              caption: "Pertanyaan sepanjang 90 butir, diberi warna berbeda per jenis kecerdasan",
              width: 1920,
              height: 1080,
            },
            {
              src: "/images/projects/maneka/future-plan.webp",
              caption: "Penyusun rencana masa depan, dengan tugas yang dibuat AI ke kalender",
              width: 1920,
              height: 1080,
            },
          ],
          technologies: [
            "React Native",
            "Expo",
            "MongoDB",
            "Express",
            "OpenAI API",
            "Tavily API",
            "Cron JS",
            "Axios",
            "AWS",
          ],
          links: [
            {
              labelKey: "expo",
              url: "https://expo.dev/preview/update?message=fix:%20slicing%2020%20question&updateRuntimeVersion=1.0.0&createdAt=2025-03-17T14:37:37.110Z&slug=exp&projectId=4bd366a8-2bbc-4e99-9fbf-af38b1d16b68&group=4d0832dd-2aa7-4acd-bef5-59916d281c6d",
            },
            {
              labelKey: "github",
              url: "https://github.com/TalentDiscovery/Maneka-Backend-Public",
            },
          ],
        },
      ],
      buttonLabels: {
        website: "Website",
        Docs: "Dokumentasi",
        github: "GitHub",
        expo: "Expo QR",
        demo: "Demo",
      },
    },

    skills: {
      sectionTitle: "Keahlian",
      description:
        "Teknologi yang saya gunakan untuk membangun aplikasi modern dan mudah diskalakan",
    },
    experience: {
      sectionTitle: "Pengalaman",
      items: [
        {
          position: "Full-Stack Developer",
          company: "Konten.com",
          logo: "/images/companies/konten.webp",
          duration: "06/26 - Sekarang",
          description: "Membangun fitur produk untuk platform clipping kreator, mencakup autentikasi, reward, gamifikasi, konten, dan otomasi, dari sisi frontend, API backend, hingga SEO.",
          responsibilities: [
            "Memperkuat keamanan akun dengan pembatasan satu sesi per perangkat menggunakan Supabase GoTrue dan validasi sisi server, menggugurkan sesi lama dan meminta login ulang saat akun diakses dari perangkat lain",
            "Membangun sistem onboarding login beruntun tujuh hari dengan kelayakan reward Rp15.000 dan panduan bertahap mulai dari melengkapi profil, menemukan campaign, meninjau brief, mengunggah video, sampai penarikan dana",
            "Mengembangkan leaderboard Clipper mingguan dan sistem lima tingkat untuk Base, Verified, Certified, Professional, dan Elite Clipper, menggabungkan ambang views, bonus campaign 0–20%, dan peninjauan peringkat bulanan",
            "Membangun sistem blog siap SEO dengan metadata dinamis, structured data, daftar isi otomatis dari heading H2, dan FAQ schema, serta mengotomasi laporan aktivitas harian ke Discord melalui cron job dan webhook",
          ],
          technologies: [
            "TypeScript",
            "Next.js",
            "Supabase",
            "PostgreSQL",
            "Discord API",
            "JSON-LD Schema",
          ],
        },
        {
          position: "Backend Developer",
          company: "Kelas Clipper",
          logo: "/images/companies/kelas-clipper.svg",
          duration: "08/26 - 09/26",
          description: "Membangun domain backend Kelas Clipper dari nol, sebuah platform edukasi di atas database produksi bersama yang melayani sekitar 150.000 akun Konten.com.",
          responsibilities: [
            "Membangun domain backend dari nol dengan Express.js dan TypeScript ketat, menghasilkan 76 endpoint untuk alur siswa dan admin, 22 tabel PostgreSQL, dan 23 migrasi aditif di database produksi bersama yang melayani sekitar 150.000 akun",
            "Menyatukan autentikasi Konten.com dan Kelas Clipper melalui satu tenant Supabase GoTrue, sehingga pengguna lama bisa langsung masuk sementara akun clipper, wallet, dan role dibuat otomatis untuk pendaftaran email/password, Google PKCE, maupun berbasis pembayaran",
            "Mengamankan siklus trial 24 jam dan langganan berbayar menggunakan aktivasi compare-and-set, pemrosesan invoice dan webhook Xendit yang idempoten, validasi callback token, dan pencatatan ledger double-entry",
            "Menurunkan round-trip database pada Bootcamp map dari 42 query menjadi 3 dan memperkecil ukuran sertifikat dari 3,39 MB menjadi 0,54 MB, sekitar 84%",
          ],
          technologies: [
            "TypeScript",
            "Express.js",
            "PostgreSQL",
            "Supabase GoTrue",
            "Xendit",
            "OAuth/PKCE",
          ],
        },
        {
          position: "Full-Stack Developer",
          company: "PT. Berkat Indah Garment (DRX)",
          logo: "/images/companies/drx.svg",
          duration: "05/25 - 06/26",
          description: "Berkontribusi pada tiga produk produksi yang aktif (DRX Token, Wear, dan Sportnet), bekerja di sisi frontend, layanan backend, dan dashboard admin CMS dalam arsitektur yang sudah berjalan.",
          responsibilities: [
            "Membangun fitur Padel Hub secara end-to-end untuk aplikasi mobile DRX Sportnet, mengembangkan frontend dengan React Native dan layanan backend dengan HonoJS di atas Bun, Prisma ORM, dan PostgreSQL",
            "Meningkatkan visibilitas pencarian di seluruh platform DRX dengan membangun antarmuka Next.js yang dioptimalkan untuk SEO, menerapkan metadata dinamis, Open Graph, dan structured data JSON-LD",
            "Mengembangkan layanan backend yang skalabel dengan NestJS, Prisma, dan PostgreSQL untuk mendukung manajemen siklus konten, alur kerja admin, dan skema data modular",
            "Menaikkan skor Google PageSpeed Insights dari sekitar 50–60 menjadi 80–90 melalui pembersihan kode, optimasi rendering, optimasi aset, dan perapian kode lama",
          ],
          technologies: [
            "React Native",
            "Next.js",
            "NestJS",
            "HonoJS",
            "Prisma",
            "PostgreSQL",
            "TypeScript",
          ],
        },
        {
          position: "Frontend Developer (Kontrak)",
          company: "Hallo Hukum",
          logo: "/images/companies/hallo-hukum.webp",
          duration: "02/25 - 05/25",
          description: "Mengembangkan dua aplikasi React Native (Expo) untuk produk LegalTech yang menghubungkan klien dengan pengacara, mencakup aplikasi klien dan aplikasi pengacara.",
          responsibilities: [
            "Mengubah wireframe menjadi antarmuka responsif untuk dua aplikasi React Native (Expo), satu untuk klien dan satu untuk pengacara",
            "Mengintegrasikan chat real-time Stream dengan panggilan suara dan video beserta alur autentikasi, merilis versi stabil tanpa satu pun blocking issue",
            "Mengoptimalkan rendering dan pengelolaan state, meningkatkan responsivitas antarmuka sebesar 25% di berbagai perangkat",
            "Menerapkan kontrol akses JWT/OAuth dan manajemen sesi, mengamankan 100% fitur terproteksi",
          ],
          technologies: [
            "React Native",
            "Expo",
            "TypeScript",
            "Stream Chat/Voice/Video",
            "JWT/OAuth",
          ],
        },
        {
          position: "Web Developer & SEO Recovery (Freelance)",
          company: "ExplorePulau.id",
          logo: "/images/companies/explore-pulau.webp",
          duration: "03/25 - 04/25",
          description: "Menyelamatkan situs pariwisata dari peretasan spam judi, menangani pembersihan pasca-retas, pengerasan keamanan server, dan pemulihan visibilitas pencarian organik.",
          responsibilities: [
            "Menyelamatkan situs dari peretasan spam judi dengan menghapus file sisipan dan membersihkan server yang terinfeksi",
            "Memperkuat keamanan dan menata ulang struktur file, meningkatkan stabilitas pemuatan dan memperkecil permukaan serangan",
            "Memulihkan visibilitas SEO dengan menghapus URL spam yang terindeks melalui Google Search Console",
          ],
          technologies: [
            "JavaScript",
            "SEO",
            "Google Search Console",
            "cPanel",
          ],
        },
      ],
    },
    education: {
      sectionTitle: "Pendidikan",
      items: [
        {
          institution: "Hacktiv8",
          program: "Program Full Stack JavaScript Immersive",
          logo: "/images/companies/hacktiv8.webp",
          duration: "Oktober 2024 – Februari 2025",
          location: "Jakarta, Indonesia",
        },
        {
          institution: "SMK Nurul Huda Baros",
          program: "Multimedia",
          logo: "",
          duration: "2020 – 2023",
          location: "Serang, Indonesia",
        },
      ],
    },
    certificates: {
      sectionTitle: "Sertifikat",
      description:
        "Berikut adalah beberapa sertifikat yang telah saya peroleh melalui perjalanan belajar dan pengembangan profesional.",
      viewCredential: "Lihat Kredensial",
      items: [
        {
          title: "Fullstack Javascript Immersive",
          image: "/images/certificates/hacktiv8.webp",
          credentialUrl:
            "https://www.imambahri.com/images/certificates/hacktiv8-certificate.webp",
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          image: "/images/certificates/freecodecamp-javascript.webp",
          credentialUrl:
            "https://www.freecodecamp.org/certification/alwi2025/javascript-algorithms-and-data-structures-v8",
        },
        {
          title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
          image: "/images/certificates/dicoding-aws.webp",
          credentialUrl: "https://www.dicoding.com/certificates/QLZ92LDKDX5D",
        },
        {
          title: "Problem Solving (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-problem-solving.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/80f26cd43965",
        },
        {
          title: "SQL (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-sql.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/1d057e9da521",
        },
        {
          title: "JavaScript (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-javascript.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/3d00c06b155e",
        },
        {
          title: "Node.js (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-nodejs.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/d9e76b8ad085",
        },
      ],
    },
    contact: {
      sectionTitle: "Mari Bekerja Sama",
      description:
        "Punya ide atau proyek? Saya terbuka untuk berdiskusi dan membantu mewujudkannya.",
      resumeDownload: "Unduh Resume",
    },


    // di dalam langData.id
  },
} as const;

export type LangKey = keyof typeof langData;
export type TranslationKey = (typeof langData)["en"];
