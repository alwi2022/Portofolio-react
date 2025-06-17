export const langData = {
  en: {
    nav: ["Home", "Projects", "Skills", "Contact"],
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
          title: "QuickHire Dev",
          description:
            "Build professional resumes in minutes. Just fill the form and let AI generate the Summary & Experience sections.",
        },
        {
          title: "Personal Finance Tracker",
          description:
            "A simple yet powerful tool to monitor your daily expenses and manage your personal budget with ease.",
        },
        {
          title: "Maneka",
          description:
            "AI-powered career planning platform inspired by Gardner’s theory of multiple intelligences.",
        },
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
  nav: ["Beranda", "Proyek", "Keahlian", "Kontak"],
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
        title: "QuickHire Dev",
        description:
          "Membuat resume profesional dalam hitungan menit. Cukup isi formulir, dan biarkan AI yang menyusun bagian Ringkasan dan Pengalaman kerja Anda.",
      },
      {
        title: "Personal Finance Tracker",
        description:
          "Alat sederhana namun efektif untuk mencatat pengeluaran harian dan mengelola anggaran pribadi dengan mudah.",
      },
      {
        title: "Maneka",
        description:
          "Platform perencanaan karier berbasis AI yang terinspirasi dari teori kecerdasan majemuk milik Howard Gardner.",
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
