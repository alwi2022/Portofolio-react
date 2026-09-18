import { langData, type LangKey } from '@/src/data/langData';

export type Page = 'home' | 'project' | 'experience' | 'certificates';
export type Route = { lang: LangKey; page: Page; slug?: string };

const SUB_PAGES = ['project', 'experience', 'certificates'];
export const PROJECT_SLUGS = langData.en.projects.items.map(project => project.slug);

// Indonesian is the default language and lives at the bare path; only English
// carries a prefix. `/id/...` is redirected to its unprefixed twin in
// vercel.json, so it must not resolve here.
export function resolveRoute(segments: string[] = []): Route | null {
  const parts = [...segments];
  if (parts[0] === 'id') return null;
  const lang: LangKey = parts[0] === 'en' ? 'en' : 'id';
  if (lang === 'en') parts.shift();
  if (parts.length === 0) return { lang, page: 'home' };
  if (parts.length === 1 && SUB_PAGES.includes(parts[0])) return { lang, page: parts[0] as Page };
  if (parts.length === 2 && parts[0] === 'project' && (PROJECT_SLUGS as string[]).includes(parts[1])) {
    return { lang, page: 'project', slug: parts[1] };
  }
  return null;
}

function prefix(lang: LangKey) {
  return lang === 'en' ? '/en' : '';
}

export function pagePath(lang: LangKey, page: Page = 'home') {
  const path = `${prefix(lang)}${page === 'home' ? '' : `/${page}`}`;
  return path || '/';
}

export function projectPath(lang: LangKey, slug: string) {
  return `${prefix(lang)}/project/${slug}`;
}
