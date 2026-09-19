const SITE_URL = "https://www.imambahri.com";

// The real dimensions of public/og-image.jpg, read from the file itself.
// Exported so the OG tags and the JSON-LD cannot disagree again: they used to
// declare 1200x800 and 1200x630 respectively, and the structured data was the
// one asserting something the file does not say.
export const SHARE_IMAGE = {
  path: "/og-image.jpg",
  width: 1200,
  height: 800,
  type: "image/jpeg",
  alt: "Imam Bahri Alwi, Full-Stack Developer",
} as const;

// Evaluated once when the page is built, so structured data reports a real
// last-modified date instead of a hardcoded one.
const BUILD_DATE = new Date().toISOString();
export type SupportedLang = "en" | "id";
export type SeoPage = "home" | "experience" | "project" | "certificates";

type SeoCopy = {
  title: string;
  description: string;
};

export type SeoState = SeoCopy & {
  page: SeoPage;
  lang: SupportedLang;
  canonicalUrl: string;
  imageUrl: string;
  alternates: Record<SupportedLang | "x-default", string>;
};

const PAGE_PATHS: Record<SeoPage, string> = {
  home: "",
  experience: "experience",
  project: "project",
  certificates: "certificates",
};

const PAGE_BY_SEGMENT: Record<string, SeoPage> = {
  experience: "experience",
  project: "project",
  certificates: "certificates",
};

const SEO_COPY: Record<SupportedLang, Record<SeoPage, SeoCopy>> = {
  en: {
    home: {
      // Must not match the Indonesian title byte-for-byte. Search Console
      // reported /en as "Duplicate, Google chose a different canonical than
      // the user" while the two titles were identical, so the English pages
      // were being folded into their Indonesian twins despite correct,
      // reciprocal hreflang.
      title: "Imam Bahri Alwi | Full-Stack Developer in Jakarta, Indonesia",
      description:
        "Portfolio of Imam Bahri Alwi, a full-stack developer in Jakarta building web and mobile products with TypeScript, Next.js, Node.js, and React Native.",
    },
    experience: {
      title: "Full-Stack Developer Experience | Imam Bahri Alwi",
      description:
        "Professional experience of Imam Bahri Alwi as a full-stack developer working with React, Next.js, Node.js, React Native, SEO, and scalable web systems.",
    },
    project: {
      title: "Full-Stack, Mobile & Web3 Projects | Imam Bahri Alwi",
      description:
        "Selected full-stack, mobile, Web3, and product projects built by Imam Bahri Alwi using React, TypeScript, Node.js, Laravel, and modern development tools.",
    },
    certificates: {
      title: "Certificates in AWS, SQL & JavaScript | Imam Bahri Alwi",
      description:
        "Certificates and credentials earned by Imam Bahri Alwi across full-stack JavaScript, algorithms and data structures, SQL, and AWS cloud basics.",
    },
  },
  id: {
    home: {
      title: "Imam Bahri Alwi | Full-Stack Developer Next.js & Node.js",
      description:
        "Portfolio Imam Bahri Alwi, full-stack developer di Jakarta yang membangun aplikasi web dan mobile dengan TypeScript, Next.js, Node.js, dan React Native.",
    },
    experience: {
      title: "Pengalaman Full-Stack Developer | Imam Bahri Alwi",
      description:
        "Pengalaman profesional Imam Bahri Alwi sebagai full-stack developer dengan React, Next.js, Node.js, React Native, SEO, dan sistem web yang scalable.",
    },
    project: {
      title: "Proyek Full-Stack, Mobile & Web3 | Imam Bahri Alwi",
      description:
        "Kumpulan proyek full-stack, mobile, Web3, dan produk yang dibuat Imam Bahri Alwi menggunakan React, TypeScript, Node.js, Laravel, dan tools modern.",
    },
    certificates: {
      title: "Sertifikat AWS, SQL & JavaScript | Imam Bahri Alwi",
      description:
        "Sertifikat dan kredensial Imam Bahri Alwi di bidang full-stack JavaScript, algoritma dan struktur data, SQL, serta dasar AWS cloud.",
    },
  },
};

function isSupportedLang(value: string | undefined): value is SupportedLang {
  return value === "en" || value === "id";
}

function getPathSegments(pathname: string) {
  return pathname
    .split(/[?#]/)[0]
    .replace(/\/+$/, "")
    .split("/")
    .filter(Boolean);
}

function getLangFromPath(pathname: string): SupportedLang | undefined {
  return getPathSegments(pathname).find((segment, index) => {
    return index === 0 && isSupportedLang(segment);
  }) as SupportedLang | undefined;
}

function getPageFromPath(pathname: string): SeoPage {
  const segments = getPathSegments(pathname);
  const contentSegments = isSupportedLang(segments[0])
    ? segments.slice(1)
    : segments;
  const pageSegment = contentSegments[0] ?? "";

  return PAGE_BY_SEGMENT[pageSegment] ?? "home";
}

function buildPagePath(page: SeoPage, lang?: SupportedLang) {
  const pagePath = PAGE_PATHS[page];
  const parts = [lang, pagePath].filter(Boolean);

  return parts.length ? `/${parts.join("/")}` : "/";
}


export function toAbsoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function getSeoState(
  pathname: string,
  fallbackLang: SupportedLang,
): SeoState {
  const page = getPageFromPath(pathname);
  const pathLang = getLangFromPath(pathname);
  const lang = pathLang ?? fallbackLang;

  return {
    page,
    lang,
    ...SEO_COPY[lang][page],
    canonicalUrl: toAbsoluteUrl(buildPagePath(page, pathLang)),
    imageUrl: toAbsoluteUrl("/og-image.jpg"),
    alternates: {
      en: toAbsoluteUrl(buildPagePath(page, "en")),
      id: toAbsoluteUrl(buildPagePath(page)),
      "x-default": toAbsoluteUrl(buildPagePath(page)),
    },
  };
}

export function buildStructuredData(seo: SeoState) {
  const homeUrl = toAbsoluteUrl("/");
  const logoUrl = toAbsoluteUrl("/logo.webp");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#me`,
        name: "Imam Bahri Alwi",
        url: homeUrl,
        image: seo.imageUrl,
        jobTitle: "Fullstack Developer",
        knowsLanguage: ["id", "en"],
        knowsAbout: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "Frontend Development",
          "Backend Development",
          "React Native",
          "Technical SEO",
        ],
        alumniOf: {
          "@type": "Organization",
          name: "Hacktiv8",
        },
        // Mirrors the social accounts declared on github.com/alwi2022, so the
        // profiles this graph names and the profiles GitHub names agree in
        // both directions. Agreement is what entity resolution runs on.
        sameAs: [
          "https://github.com/alwi2022",
          "https://www.linkedin.com/in/imambahrialwi",
          "https://www.instagram.com/aaalwi1/",
          "https://x.com/AlwiImam72318",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jakarta",
          addressCountry: "ID",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "Imam Bahri Alwi",
        url: homeUrl,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 1024,
          height: 1024,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: homeUrl,
        name: "Imam Bahri Alwi Portfolio",
        inLanguage: ["en", "id"],
        publisher: { "@id": `${SITE_URL}/#org` },
        about: { "@id": `${SITE_URL}/#me` },
      },
      {
        "@type": seo.page === "home" ? "ProfilePage" : "WebPage",
        "@id": `${seo.canonicalUrl}#webpage`,
        url: seo.canonicalUrl,
        name: seo.title,
        description: seo.description,
        inLanguage: seo.lang,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#me` },
        // ProfilePage requires mainEntity (the person the profile is about).
        mainEntity: { "@id": `${SITE_URL}/#me` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: seo.imageUrl,
          width: SHARE_IMAGE.width,
          height: SHARE_IMAGE.height,
        },
        // Full ISO-8601 datetime with timezone; a date-only value is rejected
        // as an invalid datetime by Google's structured-data validator.
        dateModified: BUILD_DATE,
      },
    ],
  };
}

export function getProjectSeoState(
  pathname: string,
  fallbackLang: SupportedLang,
  project: {
    slug: string;
    title: string;
    description: string;
    role?: string;
    kicker?: string;
  },
): SeoState {
  const pathLang = getLangFromPath(pathname);
  const lang = pathLang ?? fallbackLang;
  const projectPath = (forLang?: SupportedLang) =>
    `${forLang ? `/${forLang}` : ""}/project/${project.slug}`;
  // `kicker` is translated per language, so it keeps each project's two titles
  // distinct. Without it both read "<Title> | Imam Bahri Alwi" in either
  // language, which is what got /en folded into / as a duplicate.
  const headline = project.kicker
    ? `${project.title} — ${project.kicker}`
    : project.title;

  return {
    page: "project",
    lang,
    title: `${headline} | Imam Bahri Alwi`,
    description: project.description,
    canonicalUrl: toAbsoluteUrl(projectPath(pathLang)),
    imageUrl: toAbsoluteUrl("/og-image.jpg"),
    alternates: {
      en: toAbsoluteUrl(projectPath("en")),
      id: toAbsoluteUrl(projectPath()),
      "x-default": toAbsoluteUrl(projectPath()),
    },
  };
}
