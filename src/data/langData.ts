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
      items: [
        {
          title: "TypeSynq Royale",
          description: "Multiplayer typing battle game. Race against friends or go solo to test your typing speed and accuracy.",

          image: "/TypeSynq/TypeSynq.png",
          links: [
            { labelKey: "website", url: "https://multisync-type-battle.vercel.app" },
            { labelKey: "github", url: "https://github.com/alwi2022" },
          ],
          tags: ["React", "Multisynq", "Tailwind CSS", "Typescript"],
          status: "Live",
          featured: false,

        },
        {
          title: "QuickHire Dev",
          description:
            "Build professional resumes in minutes. Just fill the form and let AI generate the Summary & Experience sections.",
          image: "/Quickhire/Quickhire.png",
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
          image: "/Expanse-tracker/image.png",
          links: [
            { labelKey: "website", url: "https://finance.alwi.tech" },
            { labelKey: "github", url: "https://github.com/alwi2022" },
          ],
          tags: ["React", "Node.js", "MongoDB", "Express", "Typescript"],
          status: "Live",
          featured: true,

        },
        {
          title: "Maneka",
          description:
            "AI-powered career planning platform inspired by Gardner’s theory of multiple intelligences.",
          image: "/Maneka/Maneka1.PNG",
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
          company: "HalloHukum",
          type: "Freelance",
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
          technologies: ["React Native", "Expo", "REST API", "JavaScript", "State Management"]
        },
        {
          position: "Full Stack JavaScript Student",
          company: "Hacktiv8",
          type: "Intensive Program",
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
        }
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
          image: "/images/certificates/hacktiv8.png",
          credentialUrl: "https://portfolio.alwi.tech/images/certificates/Certificate Hacktiv8 - Imam Bahri Alwi.png",
          showTitle: false
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          image: "/images/certificates/freecodecamp-javascript.png",
          credentialUrl: "https://freecodecamp.org/certification/alwi2025/javascript-algorithms-and-data-structures-v8",
          showTitle: false
        },

        {
          title: "Cloud Practitioner Essentials (AWS Cloud Basics)",
          image: "/images/certificates/dicoding-aws.png",
          credentialUrl: "https://www.dicoding.com/certificates/QLZ92LDKDX5D",
          showTitle: false
        },
        {
          title: "Backend Development for Beginners with JavaScript",
          image: "/images/certificates/dicoding-backend.png",
          credentialUrl: "https://www.dicoding.com/certificates/MEPJN5E3LX3V",
          showTitle: false
        },
        {
          title: "Frontend Web Development for Beginners",
          image: "/images/certificates/dicoding-frontend.png",
          credentialUrl: "https://www.dicoding.com/certificates/72ZDVQM3VZYW",
          showTitle: false
        },
        {
          title: "Web Programming Basics: HTML, CSS, and Responsive Flexbox",
          image: "/images/certificates/dicoding-html-css.png",
          credentialUrl: "https://www.dicoding.com/certificates/ERZRGYR2QPYV",
          showTitle: false
        },
        {
          title: "Problem Solving (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-problem-solving.png",
          credentialUrl: "https://www.hackerrank.com/certificates/80f26cd43965",
          showTitle: false
        },
        {
          title: "SQL (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-sql.png",
          credentialUrl: "https://www.hackerrank.com/certificates/1d057e9da521",
          showTitle: false
        },
        {
          title: "React (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-react.png",
          credentialUrl: "https://www.hackerrank.com/certificates/bb7a82f2383c",
          showTitle: false
        },
        {
          title: "JavaScript (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-javascript.png",
          credentialUrl: "https://www.hackerrank.com/certificates/3d00c06b155e",
          showTitle: false
        },
        {
          title: "Node.js (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-nodejs.png",
          credentialUrl: "https://www.hackerrank.com/certificates/d9e76b8ad085",
          showTitle: false
        },
        {
          title: "CSS (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-css.png",
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
      items: [
        {
          title: "TypeSynq Royale",
          description: "Game mengetik multi-pemain. Tantang teman atau bermain sendiri untuk menguji kecepatan dan akurasi mengetik Anda.",

          image: "/TypeSynq/TypeSynq.png",
          links: [
            { labelKey: "website", url: "https://multisync-type-battle.vercel.app" },
            { labelKey: "github", url: "https://github.com/alwi2022" },
          ],
          tags: ["React", "Multisynq", "Tailwind CSS", "Typescript"],
          status: "Live",
          featured: false,
        },
        {
          title: "QuickHire Dev",
          description:
            "Membuat resume profesional dalam hitungan menit. Cukup isi formulir, dan biarkan AI yang menyusun bagian Ringkasan dan Pengalaman kerja Anda.",
          image: "/Quickhire/Quickhire.png",
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
          image: "/Expanse-tracker/image.png",
          links: [
            { labelKey: "website", url: "https://finance.alwi.tech" },
            { labelKey: "github", url: "https://github.com/alwi2022" },
          ],
          tags: ["React", "Node.js", "MongoDB", "Express", "Typescript"],
          status: "Live",
          featured: true,
        },
        {
          title: "Maneka",
          description:
            "Platform perencanaan karier berbasis AI yang terinspirasi dari teori kecerdasan majemuk milik Howard Gardner.",
          image: "/Maneka/Maneka1.PNG",
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
          company: "HalloHukum",
          type: "Freelance",
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
          technologies: ["React Native", "Expo", "REST API", "JavaScript", "State Management"]
        },
        {
          position: "Siswa Full Stack JavaScript",
          company: "Hacktiv8",
          type: "Program Intensif",
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
        }
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
          image: "/images/certificates/hacktiv8.png",
          credentialUrl: "https://portfolio.alwi.tech/images/certificates/Certificate Hacktiv8 - Imam Bahri Alwi.png",
          showTitle: false
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          image: "/images/certificates/freecodecamp-javascript.png",
          credentialUrl: "https://www.freecodecamp.org/certification/alwi2025/javascript-algorithms-and-data-structures-v8",
          showTitle: false
        },
        {
          title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
          image: "/images/certificates/dicoding-aws.png",
          credentialUrl: "https://www.dicoding.com/certificates/QLZ92LDKDX5D",
          showTitle: false
        },
        {
          title: "Belajar Back-End Pemula dengan JavaScript",
          image: "/images/certificates/dicoding-backend.png",
          credentialUrl: "https://www.dicoding.com/certificates/MEPJN5E3LX3V",
          showTitle: false
        },
        {
          title: "Belajar Membuat Front-End Web untuk Pemula",
          image: "/images/certificates/dicoding-frontend.png",
          credentialUrl: "https://www.dicoding.com/certificates/72ZDVQM3VZYW",
          showTitle: false
        },
        {
          title: "Dasar Pemrograman Web: HTML, CSS, dan Responsive Flexbox",
          image: "/images/certificates/dicoding-html-css.png",
          credentialUrl: "https://www.dicoding.com/certificates/ERZRGYR2QPYV",
          showTitle: false
        },
        {
          title: "Problem Solving (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-problem-solving.png",
          credentialUrl: "https://www.hackerrank.com/certificates/80f26cd43965",
          showTitle: false
        },
        {
          title: "SQL (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-sql.png",
          credentialUrl: "https://www.hackerrank.com/certificates/1d057e9da521",
          showTitle: false
        },
        {
          title: "React (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-react.png",
          credentialUrl: "https://www.hackerrank.com/certificates/bb7a82f2383c",
          showTitle: false
        },
        {
          title: "JavaScript (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-javascript.png",
          credentialUrl: "https://www.hackerrank.com/certificates/3d00c06b155e",
          showTitle: false
        },
        {
          title: "Node.js (Intermediate) - HackerRank",
          image: "/images/certificates/hackerrank-nodejs.png",
          credentialUrl: "https://www.hackerrank.com/certificates/d9e76b8ad085",
          showTitle: false
        },
        {
          title: "CSS (Basic) - HackerRank",
          image: "/images/certificates/hackerrank-css.png",
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


