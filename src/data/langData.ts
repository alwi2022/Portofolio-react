export const langData = {
  en: {
    hero: {
      title: "Imam Bahri Alwi",
      typed: ["Software Developer", "Fullstack JavaScript", "Tech Enthusiast"],
      desc: "Full-stack JavaScript developer from Serang, Indonesia. Hacktiv8 graduate, passionate about building meaningful digital solutions with clean and scalable code.",
      connect: "Connect with me here",
    },
    projects: {
      sectionTitle: "Recent Projects",
      description: "Here are some of the projects I've worked on recently",
      items: [
        {
          title: "TypeSynq Royale",
          description: "Web3 multiplayer typing battle game powered by smart contracts on Monad Testnet.",
          image: "/images/projects/TypeSynq.webp",
          links: [
            { labelKey: "website", url: "https://synqtype.vercel.app/" },
            { labelKey: "github", url: "https://github.com/p0isonxs/synqType" },
          ],
          tags: ["React", "Multisynq", "Typescript", "Web3", "Solidity"],
          status: "Live",
          featured: false,


        },
        {
          title: "QuickHire Dev",
          description:
            "Build professional resumes in minutes. Just fill the form and let AI generate the Summary & Experience sections.",
          image: "/images/projects/Quickhire.webp",
          links: [
            { labelKey: "website", url: "https://resume.alwi.tech/" },
            { labelKey: "github", url: "https://github.com/alwi2022" },
          ],
          tags: ["React", "Node.js", "PostgreSQL", "Express", "Typescript"],
          status: "Live",
          featured: true,

        },
        {
          title: "Personal Finance Tracker",
          description:
            "A simple yet powerful tool to monitor your daily expenses and manage your personal budget with ease.",
          image: "/images/projects/Expanse-tracker.webp",
          links: [
            { labelKey: "website", url: "https://finance.alwi.tech" },
            { labelKey: "github", url: "https://github.com/alwi2022/personal-finance-app" },
          ],
          tags: ["React", "Node.js", "MongoDB", "Express", "Typescript"],
          status: "Live",
          featured: true,

        },
        {
          title: "Maneka",
          description:
            "AI-powered career planning platform inspired by Gardner’s theory of multiple intelligences.",
          image: "/images/projects/Maneka.webp",
          links: [
            { labelKey: "expo", url: "https://expo.dev/preview/update?message=fix:%20slicing%2020%20question&updateRuntimeVersion=1.0.0&createdAt=2025-03-17T14:37:37.110Z&slug=exp&projectId=4bd366a8-2bbc-4e99-9fbf-af38b1d16b68&group=4d0832dd-2aa7-4acd-bef5-59916d281c6d" },
            { labelKey: "github", url: "https://github.com/TalentDiscovery/Maneka-Backend-Public" },
          ],

          tags: ["React Native", "Expo", "Node.js", "MongoDB", "Typescript"],
          status: "Beta",
          featured: true,
        }

      ],
      buttonLabels: {
        website: "Website",
        github: "GitHub",
        expo: "Expo QR",
      },
    },
    skills: {
      sectionTitle: "Skills",
      description:
        "Technologies I use to build scalable and modern applications",
      languagesTitle: "Languages & Frameworks",
      toolsTitle: "Tools & Platforms",
    },
    experience: {


      sectionTitle: "Experience",
      responsibilities: "Key Responsibilities",
      technologies: "Technologies Used",
      items: [



        {
          position: "Frontend Developer",
          company: "HalloHukum LegalTech mobile app ",
          duration: "April 2025 – July 2025",
          location: "Remote",
          description: "Developed a LegalTech mobile application connecting clients with lawyers, focusing on creating intuitive user interfaces and seamless user experiences for both client and lawyer applications.",
          responsibilities: [
            "Built two mobile applications (client and lawyer) using React Native with Expo framework",
            "Integrated real-time chat functionality, video/audio calls, and secure authentication using REST APIs",
            "Designed responsive UI components with consistent state management across both applications",
            "Collaborated in agile development sprints with backend engineers to ensure feature alignment",
            "Implemented user-friendly interfaces for legal consultation workflows"
          ],
          technologies: ["React Native", "Expo", "REST API", "Typescript", "React Navigation", "Axios", "State Management"]
        },

        {
          position: "Web Developer & SEO Recovery",
          company: "ExplorePulau.id",
          duration: "March 2025 – April 2025",
          location: "Remote",
          description: "Resolved a critical SEO and security breach on a tourism website. Led post-hack cleanup, hardening server protection, and restoring organic search visibility.",
          responsibilities: [
            "Removed injected malicious files from gambling-site hack and cleaned infected server files",
            "Strengthened server security and restructured the file system for better protection",
            "Recovered Google search visibility by removing spam and gambling-related URLs via Search Console",
            "Maintained and improved page structures including destination and itinerary layouts",
            "Optimized technical SEO to stabilize indexing and prevent future SEO issues"
          ],
          technologies: ["HTML", "CSS", "JavaScript", "SEO", "Google Search Console", "cPanel"]
        },
        {
          position: "Full Stack JavaScript Immersive",
          company: "Hacktiv8",
          duration: "October 2024 – February 2025",
          location: "Jakarta, Indonesia",
          description: "Completed an intensive full-stack JavaScript bootcamp program, gaining comprehensive knowledge in modern web development technologies and best practices.",
          responsibilities: [
            "Mastered full-stack development using JavaScript ecosystem",
            "Built multiple web applications using React.js, Node.js, and databases",
            "Learned modern development workflows and deployment strategies",
            "Collaborated on team projects using Git version control",
            "Participated in code reviews and pair programming sessions"
          ],
          technologies: ["JavaScript", "React.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git"]
        },



      ]
    },
    certificates: {
      sectionTitle: "Certificates",
      subtitle: "My Achievements",
      description: "Here are some of the certificates I've earned through my learning journey and professional development.",
      viewCredential: "View Credential",
      items: [
        {
          title: "Fullstack Javascript Immersive",
          image: "/images/certificates/hacktiv8.webp",
          credentialUrl: "https://portfolio.alwi.tech/images/certificates/Certificate Hacktiv8 - Imam Bahri Alwi.webp",
          showTitle: false
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          image: "/images/certificates/freecodecamp-javascript.webp",
          credentialUrl: "https://freecodecamp.org/certification/alwi2025/javascript-algorithms-and-data-structures-v8",
          showTitle: false
        },

        {
          title: "Cloud Practitioner Essentials (AWS Cloud Basics)",
          image: "/images/certificates/dicoding-aws.webp",
          credentialUrl: "https://www.dicoding.com/certificates/QLZ92LDKDX5D",
          showTitle: false
        },
        {
          title: "Backend Development for Beginners with JavaScript",
          image: "/images/certificates/dicoding-backend.webp",
          credentialUrl: "https://www.dicoding.com/certificates/MEPJN5E3LX3V",
          showTitle: false
        },
        {
          title: "Frontend Web Development for Beginners",
          image: "/images/certificates/dicoding-frontend.webp",
          credentialUrl: "https://www.dicoding.com/certificates/72ZDVQM3VZYW",
          showTitle: false
        },
        {
          title: "Web Programming Basics: HTML, CSS, and Responsive Flexbox",
          image: "/images/certificates/dicoding-html-css.webp",
          credentialUrl: "https://www.dicoding.com/certificates/ERZRGYR2QPYV",
          showTitle: false
        },
        {
          title: "Problem Solving (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-problem-solving.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/80f26cd43965",
          showTitle: false
        },
        {
          title: "SQL (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-sql.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/1d057e9da521",
          showTitle: false
        },
        {
          title: "React (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-react.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/bb7a82f2383c",
          showTitle: false
        },
        {
          title: "JavaScript (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-javascript.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/3d00c06b155e",
          showTitle: false
        },
        {
          title: "Node.js (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-nodejs.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/d9e76b8ad085",
          showTitle: false
        },
        {
          title: "CSS (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-css.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/645c2a3d72e1",
          showTitle: false
        }
      ]
    },

    contact: {
      sectionTitle: "Let's Work Together",
      description:
        "Have a project in mind? Let's discuss how I can help bring your ideas to life.",
      formTitle: "Send me a message",
      form: {
        firstName: "First Name *",
        lastName: "Last Name",
        email: "Email Address *",
        message: "Message *",
        placeholder: "Let me know how I can support your idea or product.",
        send: "Send Message",
        sending: "Sending...",
      },
      infoTitle: "Get in touch",
      infoLabels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      resumeDownload: "Download Resume",
      validation: {
        empty: "Please fill in all required fields.",
        invalidEmail: "Please enter a valid email address.",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again later.",
        loading: "Sending message...",
      },
    },
    footer: {
      copyright: "© 2025 Imam Bahri Alwi. All rights reserved.",
    },
    notFound: {
      title: "Page not found",
      message: "Sorry, we couldn’t find the page you’re looking for.",
      back: "Back to Homepage",
    },
  },
  id: {
    hero: {
      title: "Imam Bahri Alwi",
      typed: [
        "Pengembang Perangkat Lunak",
        "Fullstack JavaScript",
        "Pemerhati Teknologi",
      ],
      desc: "Fullstack JavaScript developer asal Serang, Indonesia. Lulusan Hacktiv8 yang fokus membangun solusi digital yang bersih, efisien, dan mudah dikembangkan.",
      connect: "Hubungi saya di sini",
    },

    projects: {
      sectionTitle: "Proyek Terbaru",
      description: "Berikut adalah beberapa proyek yang telah saya kerjakan terbaru",
      items: [
        {
          title: "TypeSynq Royale",
          description: "Game mengetik multi-pemain dengan integrasi Web3, dibangun dengan smart contract di jaringan Monad.",
          image: "/images/projects/TypeSynq.webp",
          links: [
            { labelKey: "website", url: "https://synqtype.vercel.app/" },
            { labelKey: "github", url: "https://github.com/p0isonxs/synqType" },
          ],
          tags: ["React", "Multisynq", "Typescript", "Web3", "Solidity"],
          status: "Live",
          featured: false,
        },
        {
          title: "QuickHire Dev",
          description:
            "Membuat resume profesional dalam hitungan menit. Cukup isi formulir, dan biarkan AI yang menyusun bagian Ringkasan dan Pengalaman kerja Anda.",
          image: "/images/projects/Quickhire.webp",
          links: [
            { labelKey: "website", url: "https://resume.alwi.tech/" },
            { labelKey: "github", url: "https://github.com/alwi2022" },
          ],
          tags: ["React", "Node.js", "PostgreSQL", "Express", "Typescript"],
          status: "Live",
          featured: true,
        },

        {
          title: "Personal Finance Tracker",
          description:
            "Alat sederhana namun efektif untuk mencatat pengeluaran harian dan mengelola anggaran pribadi dengan mudah.",
          image: "/images/projects/Expanse-tracker.webp",
          links: [
            { labelKey: "website", url: "https://finance.alwi.tech" },
            { labelKey: "github", url: "https://github.com/alwi2022/personal-finance-app" },
          ],
          tags: ["React", "Node.js", "MongoDB", "Express", "Typescript"],
          status: "Live",
          featured: true,
        },
        {
          title: "Maneka",
          description:
            "Platform perencanaan karier berbasis AI yang terinspirasi dari teori kecerdasan majemuk milik Howard Gardner.",
          image: "/images/projects/Maneka.webp",
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
          tags: ["React Native", "Expo", "Node.js", "MongoDB", "Typescript"],
          status: "Beta",
          featured: true,
        },

      ],
      buttonLabels: {
        website: "Kunjungi Situs",
        github: "GitHub",
        expo: "QR Expo",
      },
    },

    skills: {
      sectionTitle: "Keahlian",
      description:
        "Teknologi yang saya gunakan untuk membangun aplikasi modern dan mudah diskalakan",
      languagesTitle: "Bahasa & Framework",
      toolsTitle: "Alat & Platform",
    },
    experience: {
      sectionTitle: "Pengalaman",
      responsibilities: "Tanggung Jawab Utama",
      technologies: "Teknologi yang Digunakan",
      items: [



        {
          position: "Frontend Developer",
          company: "HalloHukum LegalTech mobile app ",
          duration: "April 2025 – Juli 2025",
          location: "Remote",
          description: "Mengembangkan aplikasi mobile LegalTech yang menghubungkan klien dengan pengacara, fokus pada pembuatan antarmuka pengguna yang intuitif dan pengalaman pengguna yang mulus untuk aplikasi klien dan pengacara.",
          responsibilities: [
            "Membangun dua aplikasi mobile (klien dan pengacara) menggunakan React Native dengan framework Expo",
            "Mengintegrasikan fungsi chat real-time, panggilan video/audio, dan otentikasi aman menggunakan REST API",
            "Merancang komponen UI responsif dengan manajemen state yang konsisten di kedua aplikasi",
            "Berkolaborasi dalam sprint pengembangan agile dengan backend engineer untuk memastikan keselarasan fitur",
            "Mengimplementasikan antarmuka yang user-friendly untuk alur kerja konsultasi hukum"
          ],
          technologies: ["React Native", "Expo", "REST API", "Typescript", "React Navigation", "Axios", "State Management"]
        },
        {
          position: "Web Developer & SEO Recovery",
          company: "ExplorePulau.id",
          duration: "Maret 2025 – April 2025",
          location: "Remote",
          description: "Menangani pemulihan keamanan dan SEO untuk situs wisata yang terkena hack. Bertanggung jawab atas pembersihan sistem, penguatan server, dan pemulihan visibilitas pencarian organik.",
          responsibilities: [
            "Menghapus file berbahaya yang disuntikkan dari hack situs perjudian dan membersihkan file server yang terinfeksi",
            "Mengamankan server dan merestrukturisasi sistem file untuk perlindungan lebih lanjut",
            "Memulihkan visibilitas di Google Search dengan menghapus spam dan URL perjudian melalui Google Search Console",
            "Memelihara dan memperbaiki struktur halaman seperti destinasi dan rencana perjalanan",
            "Mengoptimalkan SEO teknis untuk menstabilkan proses indexing dan mencegah masalah di masa depan"
          ],
          technologies: ["HTML", "CSS", "JavaScript", "SEO", "Google Search Console", "cPanel"]
        },
        {
          position: "Full Stack JavaScript Immersive",
          company: "Hacktiv8",
          duration: "Oktober 2024 – Februari 2025",
          location: "Jakarta, Indonesia",
          description: "Menyelesaikan program bootcamp JavaScript full-stack intensif, memperoleh pengetahuan komprehensif tentang teknologi pengembangan web modern dan praktik terbaik.",
          responsibilities: [
            "Menguasai pengembangan full-stack menggunakan ekosistem JavaScript",
            "Membangun beberapa aplikasi web menggunakan React.js, Node.js, dan database",
            "Mempelajari alur kerja pengembangan modern dan strategi deployment",
            "Berkolaborasi dalam proyek tim menggunakan Git version control",
            "Berpartisipasi dalam code review dan pair programming"
          ],
          technologies: ["JavaScript", "React.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git"]
        },

      ]
    },
    certificates: {
      sectionTitle: "Sertifikat",
      subtitle: "Pencapaian Saya",
      description: "Berikut adalah beberapa sertifikat yang telah saya peroleh melalui perjalanan belajar dan pengembangan profesional.",
      viewCredential: "Lihat Kredensial",
      items: [
        {
          title: "Fullstack Javascript Immersive",
          image: "/images/certificates/hacktiv8.webp",
          credentialUrl: "https://portfolio.alwi.tech/images/certificates/Certificate Hacktiv8 - Imam Bahri Alwi.webp",
          showTitle: false
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          image: "/images/certificates/freecodecamp-javascript.webp",
          credentialUrl: "https://www.freecodecamp.org/certification/alwi2025/javascript-algorithms-and-data-structures-v8",
          showTitle: false
        },
        {
          title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
          image: "/images/certificates/dicoding-aws.webp",
          credentialUrl: "https://www.dicoding.com/certificates/QLZ92LDKDX5D",
          showTitle: false
        },
        {
          title: "Belajar Back-End Pemula dengan JavaScript",
          image: "/images/certificates/dicoding-backend.webp",
          credentialUrl: "https://www.dicoding.com/certificates/MEPJN5E3LX3V",
          showTitle: false
        },
        {
          title: "Belajar Membuat Front-End Web untuk Pemula",
          image: "/images/certificates/dicoding-frontend.webp",
          credentialUrl: "https://www.dicoding.com/certificates/72ZDVQM3VZYW",
          showTitle: false
        },
        {
          title: "Dasar Pemrograman Web: HTML, CSS, dan Responsive Flexbox",
          image: "/images/certificates/dicoding-html-css.webp",
          credentialUrl: "https://www.dicoding.com/certificates/ERZRGYR2QPYV",
          showTitle: false
        },
        {
          title: "Problem Solving (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-problem-solving.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/80f26cd43965",
          showTitle: false
        },
        {
          title: "SQL (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-sql.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/1d057e9da521",
          showTitle: false
        },
        {
          title: "React (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-react.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/bb7a82f2383c",
          showTitle: false
        },
        {
          title: "JavaScript (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-javascript.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/3d00c06b155e",
          showTitle: false
        },
        {
          title: "Node.js (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-nodejs.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/d9e76b8ad085",
          showTitle: false
        },
        {
          title: "CSS (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-css.webp",
          credentialUrl: "https://www.hackerrank.com/certificates/645c2a3d72e1",
          showTitle: false
        }
      ]
    },
    contact: {
      sectionTitle: "Mari Bekerja Sama",
      description:
        "Punya ide atau proyek? Saya terbuka untuk berdiskusi dan membantu mewujudkannya.",
      formTitle: "Kirim Pesan",
      form: {
        firstName: "Nama Depan *",
        lastName: "Nama Belakang",
        email: "Alamat Email *",
        message: "Pesan *",
        placeholder: "Tuliskan bagaimana saya dapat membantu proyek atau ide Anda.",
        send: "Kirim Pesan",
        sending: "Sedang mengirim...",
      },
      infoTitle: "Kontak",
      infoLabels: {
        email: "Email",
        phone: "Telepon",
        location: "Lokasi",
      },
      resumeDownload: "Unduh Resume",
      validation: {
        empty: "Harap lengkapi semua kolom wajib.",
        invalidEmail: "Alamat email tidak valid.",
        success: "Pesan berhasil dikirim!",
        error: "Gagal mengirim pesan. Silakan coba beberapa saat lagi.",
        loading: "Mengirim pesan...",
      },
    },

    footer: {
      copyright: "© 2025 Imam Bahri Alwi. Seluruh hak dilindungi.",
    },

    notFound: {
      title: "Halaman Tidak Ditemukan",
      message: "Maaf, kami tidak dapat menemukan halaman yang Anda maksud.",
      back: "Kembali ke Beranda",
    },
  }

} as const;

export type LangKey = keyof typeof langData;
export type TranslationKey = (typeof langData)["en"];


