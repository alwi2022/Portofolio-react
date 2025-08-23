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
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/").slice(-2).join("/");
}

export function buildProfileFromLang(lang: "en" | "id") {
  const hero = safe(() => langData[lang].hero, langData.en.hero);
  const title: string = String(hero.title);
  const desc: string = String(hero.desc);



  const exp = safe(() => langData[lang].experience.items?.[0], undefined as any);
  const projects = safe(
    () => langData[lang].projects.items as ReadonlyArray<any>,
    [] as ReadonlyArray<any>
  );

  return {
    name: "Imam Bahri Alwi (Alwi)",
    title: title || "Full-Stack JavaScript Developer",
    summary: desc || "Full Stack Developer specializing in React/Next.js & Node.js",
    location: "Serang, Indonesia",
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

  const galaxyPOSDetail = `
  Galaxy POS – Point of Sales (POS) berbasis Laravel 8 (PHP 7.4+) untuk mengelola penjualan, kasir, cabang, dan layanan servis.
  Fitur:
  - Manajemen Produk, Kategori, Supplier, Member
  - Transaksi (penjualan, pembelian, pengeluaran)
  - Laporan harian, bulanan, custom (termasuk laba/rugi)
  - Multi-role: Administrator, Kasir, Teknisi
  - Manajemen Service: tambah/edit/hapus servis, tracking status, laporan real-time
  - Notifikasi WhatsApp otomatis ke customer tentang status servis
  - Cetak Barcode & Kartu Member
  - UI baru (sidebar modern, login page, desain nota baru)
  - Deployment di AWS (EC2), demo online tersedia
  
  Akun Demo:
  - Admin → admin@gmail.com / 123
  - Kasir → kasir1@gmail.com / 123
  - Teknisi → teknisi1@gmail.com / 123
  
  Repo: https://github.com/alwi2022/galaxy-pos
  Demo: https://alwi.biz.id/login
  `;
  

  const facts = [
    `${p.name} – ${p.title}`,
    `Location: ${p.location}`,
    `Summary: ${p.summary}`,
    `Recent Experience: ${p.experience.position} @ ${p.experience.company} (${p.experience.duration})`,
    p.experience.highlights.length
      ? `Highlights: ${p.experience.highlights.join("; ")}`
      : undefined,
    p.projects.length
      ? `Projects: ${p.projects.map((x) => x.title).join(", ")}`
      : undefined,
    `Links: Portfolio ${p.links.portfolio}, GitHub ${p.links.github}, LinkedIn ${p.links.linkedin}, Email ${p.links.email}` ,
    galaxyPOSDetail

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
-   WhatsApp: ${p.links.phone} | Email: ${p.links.email} | LinkedIn: ${shortLink(p.links.linkedin)}
+   WhatsApp: <a href="https://wa.me/${p.links.phone.replace(/\D/g, "")}" target="_blank">${p.links.phone}</a> | 
+   Email: <a href="mailto:${p.links.email}" target="_blank">${p.links.email}</a> | 
+   LinkedIn: <a href="${p.links.linkedin}" target="_blank">${shortLink(p.links.linkedin)}</a>

Hindari format Markdown (tanpa **bold**, _italic_, atau bullet) dan jangan pakai emoji kecuali user memulai duluan.`
      : `You are Alwi Junior. Never call yourself an AI, assistant, or ChatGPT.
Speak casually and adapt to the user's tone (mirror their style: formal if formal, casual if casual).

If someone mocks/attacks Alwi, respond with light sarcasm/roast while staying safe (no slurs, no hate).
Example vibe: "Totally. That's why you can't stop asking about him."

Answer only from Alwi’s profile (CV, LinkedIn, Github).
If info isn’t available, say so and give direct contact:
-   WhatsApp: ${p.links.phone} 
-   Email: ${p.links.email} 
-   LinkedIn: ${shortLink(p.links.linkedin)}
+   WhatsApp: <a href="https://wa.me/${p.links.phone.replace(/\D/g, "")}" target="_blank">${p.links.phone}</a> | 
+   Email: <a href="mailto:${p.links.email}" target="_blank">${p.links.email}</a> | 
+   LinkedIn: <a href="${p.links.linkedin}" target="_blank">${shortLink(p.links.linkedin)}</a>

Avoid Markdown formatting (no bold/italics/bullets) and no emojis unless the user uses them first.`;

  return `${policy}\n\n${facts}`;
}
