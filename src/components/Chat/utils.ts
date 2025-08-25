//src/components/Chat/utils.ts
import { langData } from "../../data/langData";

export function safe<T>(fn: () => T, fallback: T): T {
  try {
    return fn();
  } catch {
    return fallback;
  }
}

function shortLink(url: string) {
  try {
    const u = new URL(url);
    const parts = u.pathname.replace(/\/+$/, "").split("/").filter(Boolean);
    const path =
      parts.length >= 2 ? parts.slice(-2).join("/") : parts.join("/");
    return `${u.hostname.replace(/^www\./, "")}/${path}`;
  } catch {
    return url.replace(/^https?:\/\/(www\.)?/, "");
  }
}

export function buildProfileFromLang(lang: "en" | "id") {
  const hero = safe(() => langData[lang].hero, langData.en.hero);
  const title: string = String(hero.title);
  const desc: string = String(hero.desc);

  const exp = safe(
    () => langData[lang].experience.items?.[0],
    undefined as any
  );
  const projects = safe(
    () => langData[lang].projects.items as ReadonlyArray<any>,
    [] as ReadonlyArray<any>
  );

  return {
    name: "Imam Bahri Alwi (Alwi)",
    title: title || "Full-Stack JavaScript Developer",
    summary:
      desc || "Full Stack Developer specializing in React/Next.js & Node.js",
    location: "Jakarta, Indonesia",
    fullAddress:
      "Jl. Jelambar S No.23, RT 06 RW 02, Jelambar Baru, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11460",

    personal: {
      birthplace: "Serang, Indonesia",
      currentCity: "Jakarta, Indonesia",
      dob: "2005-03-05",
      education: [
        { school: "SMK Nurul Huda (Multimedia)", period: "2020–2023" },
        { school: "BEC (English course)", period: "Sep 2023 – Feb 2024" },
        {
          school: "Hacktiv8 – Fullstack JavaScript Immersive",
          period: "Oct 2024 – Feb 2025",
        },
      ],
      hobbies: ["Running", "Coding"],
    },
    experience: {
      position: String(exp?.position ?? "Frontend Developer"),
      company: String(exp?.company ?? "Hallo Hukum"),
      duration: String(exp?.duration ?? "Apr–Jun 2025"),
      highlights:
        (exp?.responsibilities as ReadonlyArray<string> | undefined) ?? [],
    },
    projects: projects.map((p) => ({ title: String(p.title) })).slice(0, 3),
    links: {
      portfolio:
        projects?.[0]?.links?.find?.((l: any) => l.labelKey === "website")
          ?.url ?? "https://portfolio.alwi.tech/",
      github: "https://github.com/alwi2022",
      linkedin: "https://www.linkedin.com/in/imambahrialwi/",
      email: "imambahrialwi21@gmail.com",
      phone: "+62 895-6182-16004",
    },
  };
}

export function buildSystemPrompt(lang: "en" | "id") {
  const p = buildProfileFromLang(lang);

  const projectsDetail = [
    {
      name: "Galaxy POS",
      short:
        "POS Laravel 8 (PHP 7.4+) untuk penjualan, kasir, cabang, dan layanan servis.",
      points: [
        "Manajemen produk/kategori/supplier/member, penjualan/pembelian/pengeluaran",
        "Laporan harian/bulanan/custom (laba rugi), multi-role (Admin/Kasir/Teknisi)",
        "Manajemen service + tracking status realtime, notifikasi WhatsApp otomatis",
        "Cetak barcode & kartu member, UI sidebar/login/nota baru, deploy AWS (demo online)",
      ],
      links: {
        repo: "https://github.com/alwi2022/galaxy-pos",
        demo: "https://alwi.biz.id/login",
      },
      demoAccounts: [
        "Admin → admin@gmail.com / 123",
        "Kasir → kasir1@gmail.com / 123",
        "Teknisi → teknisi1@gmail.com / 123",
      ],
      stack: [
        "Laravel 8",
        "Livewire/Jetstream",
        "MySQL",
        "ChartJS",
        "DomPDF/TCPDF",
        "AWS EC2",
      ],
    },
    {
      name: "Personal Finance Tracker",
      short:
        "Aplikasi pelacakan pemasukan/pengeluaran dengan analitik dan OTP login.",
      points: [
        "Dashboard visual, kategori transaksi, export Excel (.xlsx)",
        "Auth JWT + OTP, Recharts untuk grafik",
      ],
      links: {
        website: "https://finance.alwi.tech",
        repo: "https://github.com/alwi2022/personal-finance-app",
      },
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Recharts",
        "JWT",
      ],
    },
    {
      name: "QuickHire Dev",
      short:
        "AI resume builder: form bertahap + saran AI untuk Summary/Experience.",
      points: [
        "Memangkas waktu bikin CV dari jam jadi menit untuk fresh grads",
        "Template rapi + validasi konten inti",
      ],
      links: {
        website: "https://resume.alwi.tech",
      },
      stack: [
        "React",
        "Tailwind",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "Vercel",
      ],
    },
    {
      name: "Maneka",
      short:
        "Talent discovery & career planning berbasis teori Multiple Intelligences.",
      points: [
        "Animasi, visualisasi data, integrasi API backend",
        "Terjemahkan teori kompleks jadi pengalaman interaktif",
      ],
      links: {
        expo: "https://expo.dev/preview/update?message=fix:%20slicing%2020%20question&updateRuntimeVersion=1.0.0&createdAt=2025-03-17T14:37:37.110Z&slug=exp&projectId=4bd366a8-2bbc-4e99-9fbf-af38b1d16b68&group=4d0832dd-2aa7-4acd-bef5-59916d281c6d",
        repo: "https://github.com/TalentDiscovery/Maneka-Backend-Public",
      },
      stack: [
        "React Native",
        "Expo",
        "Node.js",
        "MongoDB",
        "OpenAI API",
        "AWS",
      ],
    },
    {
      name: "TypeSynq Royale (type-multisynq-race)",
      short:
        "Real-time multiplayer typing game terintegrasi Multisynq; versi Royale dengan taruhan MON di Monad Testnet.",
      points: [
        "Sinkronisasi pemain/progress/score, countdown global, leaderboard",
        "Mode singleplayer + room settings (timer/word count/theme)",
        "Integrasi Web3 (Monad testnet) + web-contract untuk match bet (Royale)",
      ],
      links: {
        website: "https://synqtype.vercel.app/",
        demo: "https://x.com/p0isonxs/status/1949463249864552547",
      },
      stack: [
        "React",
        "TypeScript",
        "Multisynq",
        "Tailwind",
        "Vite",
        "Solidity/Monad (testnet)",
      ],
    },
  ];

  const facts = [
    `${p.name} – ${p.title}`,
    `Location: ${p.location}`,
    `Address: ${p.fullAddress} (Don't give it if you don't ask for the full address specifically)`,
    `Summary: ${p.summary}`,
    `Bio: Lahir di Serang (2005-03-05), sekarang tinggal di Jakarta. Lulusan SMK Nurul Huda (Multimedia) → kursus Inggris 6 bulan di BEC → Hacktiv8 Fullstack JS. Hobi: running, coding and watching movies .`,
    `Recent Experience: ${p.experience.position} @ ${p.experience.company} (${p.experience.duration})`,
    p.experience.highlights.length
      ? `Highlights: ${p.experience.highlights.join("; ")}`
      : undefined,
    p.projects.length
      ? `Projects: ${p.projects.map((x) => x.title).join(", ")}`
      : undefined,
    `Links: Portfolio ${p.links.portfolio}, GitHub ${p.links.github}, LinkedIn ${p.links.linkedin}, Email ${p.links.email}`,
    `Projects Detail:\n${projectsDetail
      .map((pd) => {
        const repo = pd.links?.repo ? ` | Repo: ${pd.links.repo}` : "";
        const site = pd.links?.website ? ` | Site: ${pd.links.website}` : "";
        const demo = pd.links?.demo ? ` | Demo: ${pd.links.demo}` : "";
        const expo = pd.links?.expo ? ` | Expo: ${pd.links.expo}` : "";
        const accounts = pd.demoAccounts
          ? `\nAkun Demo: ${pd.demoAccounts.join(" • ")}`
          : "";
        return `- ${pd.name}: ${pd.short}\n  Fitur: ${pd.points.join(
          "; "
        )}\n  Stack: ${pd.stack.join(
          ", "
        )}${repo}${site}${demo}${expo}${accounts}`;
      })
      .join("\n")}  (detail lengkap tersedia bila diminta).`,
  ]
    .filter(Boolean)
    .join("\n");

  const policy =
    lang === "id"
      ? `Kamu adalah Alwi Junior. Jangan pernah menyebut dirimu AI, asisten, atau ChatGPT.
Gaya bicara santai, receh, memable seperlunya, tapi tetap sopan. 
Selalu menyesuaikan gaya bahasa user (formal kalau user formal, santai kalau user santai).

Jika user menyerang/mengejek Alwi, balas dengan sarkasme ringan/nyolot yang tetap aman dan tidak menghina kelompok mana pun.
Contoh nada sarkas: "Iya, parah banget. Makanya kamu betah nanya-nanya soal dia."

Jawab hanya berdasarkan profil Alwi (CV, LinkedIn, Github).
Jika informasi tidak tersedia, katakan belum ada datanya dan berikan kontak langsung:
 - WhatsApp: ${p.links.phone}
 - Email: ${p.links.email}
 - LinkedIn: ${shortLink(p.links.linkedin)}


Hindari format Markdown (tanpa **bold**, _italic_, atau bullet) dan jangan pakai emoji kecuali user memulai duluan.`
      : `You are Alwi Junior. Never call yourself an AI, assistant, or ChatGPT.
Speak casually and adapt to the user's tone (mirror their style: formal if formal, casual if casual).

If someone mocks/attacks Alwi, respond with light sarcasm/roast while staying safe (no slurs, no hate).
Example vibe: "Totally. That's why you can't stop asking about him."

Answer only from Alwi’s profile (CV, LinkedIn, Github).
If info isn’t available, say so and give direct contact:
 - WhatsApp: ${p.links.phone}
 - Email: ${p.links.email}
 - LinkedIn: ${shortLink(p.links.linkedin)}

Avoid Markdown formatting (no bold/italics/bullets) and no emojis unless the user uses them first.`;

  return `${policy}\n\n${facts}`;
}
