import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import {
  buildPagePath,
  buildStructuredData,
  getSeoState,
  SUPPORTED_LANGS,
} from "./src/utils/seo.ts";

const SEO_PAGES = ["home", "experience", "project", "certificates"];
const SEO_BLOCK = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;

function escapeAttr(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function seoRoutes() {
  const routes = [];

  for (const page of SEO_PAGES) {
    routes.push(buildPagePath(page));

    for (const lang of SUPPORTED_LANGS) {
      routes.push(buildPagePath(page, lang));
    }
  }

  return routes;
}

function renderSeoBlock(pathname) {
  const seo = getSeoState(pathname, "en");
  const locale = seo.lang === "id" ? "id_ID" : "en_US";
  const alternateLocale = seo.lang === "id" ? "en_US" : "id_ID";
  const title = escapeAttr(seo.title);
  const description = escapeAttr(seo.description);

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${seo.canonicalUrl}" />`,
    `<meta property="og:locale" content="${locale}" />`,
    `<meta property="og:locale:alternate" content="${alternateLocale}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<link rel="canonical" href="${seo.canonicalUrl}" />`,
    ...Object.entries(seo.alternates).map(
      ([hreflang, href]) =>
        `<link rel="alternate" href="${href}" hreflang="${hreflang}" />`,
    ),
    `<script id="structured-data" type="application/ld+json">${JSON.stringify(
      buildStructuredData(seo),
    ).replace(/</g, "\\u003c")}</script>`,
  ];

  return [
    "<!-- seo:start -->",
    ...tags.map((tag) => `    ${tag}`),
    "    <!-- seo:end -->",
  ].join("\n");
}

function renderPage(template, pathname) {
  const { lang } = getSeoState(pathname, "en");

  return template
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace(SEO_BLOCK, () => renderSeoBlock(pathname));
}

function outputFileFor(outDir, pathname) {
  return pathname === "/"
    ? join(outDir, "index.html")
    : join(outDir, pathname, "index.html");
}

/**
 * Writes a static HTML file per route with that route's title, meta tags,
 * canonical/hreflang links and JSON-LD baked into the head, so social scrapers
 * and non-JS crawlers see the right metadata without executing the bundle.
 *
 * This replaces react-snap: its bundled Chromium (puppeteer 1.20) cannot start
 * on Vercel's build image (missing libnss3.so), and a headless browser is more
 * than we need — the app renders identical markup on every route, only the head
 * differs. The copy comes from src/utils/seo.ts, the same module <Seo /> uses at
 * runtime, so the prerendered head and the client-side head cannot drift.
 */
function prerenderSeo() {
  let outDir;

  return {
    name: "prerender-seo",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const template = await readFile(join(outDir, "index.html"), "utf8");

      if (!SEO_BLOCK.test(template)) {
        this.error(
          "index.html has no <!-- seo:start --> / <!-- seo:end --> block to fill in",
        );
      }

      const routes = seoRoutes();

      for (const pathname of routes) {
        const file = outputFileFor(outDir, pathname);

        await mkdir(dirname(file), { recursive: true });
        await writeFile(file, renderPage(template, pathname));
      }

      this.info(`prerendered SEO head for ${routes.length} routes`);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), prerenderSeo()],
});
