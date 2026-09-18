import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Intro, Skills, Contributions, Certificates, Contact } from '@/components/portfolio/sections';
import { Experience, Education } from '@/components/portfolio/experience';
import { ProjectList, ProjectDetail } from '@/components/portfolio/projects';
import { BackLink, ProjectBackLink } from '@/components/portfolio/back-link';
import { langData } from '@/src/data/langData';
import { getSeoState, getProjectSeoState, buildStructuredData, toAbsoluteUrl } from '@/src/utils/seo';
import { resolveRoute, pagePath, PROJECT_SLUGS } from '@/lib/routes';

type Props = { params: Promise<{ path?: string[] }> };
export const revalidate = 86400;

// Indonesian is served unprefixed, English under /en. There is no /id/* set.
export function generateStaticParams() {
  const pages = ['', 'project', 'experience', 'certificates'];
  return ['', 'en'].flatMap(lang => [
    ...pages.map(page => ({ path: [lang, page].filter(Boolean) })),
    ...PROJECT_SLUGS.map(slug => ({ path: [lang, 'project', slug].filter(Boolean) })),
  ]);
}

function seoFor(path: string[], lang: 'en' | 'id', slug?: string) {
  const pathname = `/${path.join('/')}`;
  if (!slug) return getSeoState(pathname, lang);
  const project = langData[lang].projects.items.find(item => item.slug === slug)!;
  return getProjectSeoState(pathname, lang, project);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path = [] } = await params;
  const route = resolveRoute(path);
  if (!route) return { title: 'Page not found | Imam Bahri Alwi', robots: { index: false } };
  const seo = seoFor(path, route.lang, route.slug);
  // Share a project's own preview image; every other page uses the site card.
  const project = route.slug ? langData[route.lang].projects.items.find(item => item.slug === route.slug) : undefined;
  const shareImage = project ? toAbsoluteUrl(project.image) : seo.imageUrl;
  return { title: seo.title, description: seo.description, metadataBase: new URL('https://www.imambahri.com'), alternates: { canonical: seo.canonicalUrl, languages: seo.alternates }, openGraph: { type: 'website', title: seo.title, description: seo.description, url: seo.canonicalUrl, images: [shareImage] }, twitter: { card: 'summary_large_image', title: seo.title, description: seo.description, images: [shareImage] }, icons: { icon: '/favicon.ico' } };
}

export default async function Page({ params }: Props) {
  const { path = [] } = await params;
  const route = resolveRoute(path);
  if (!route) notFound();
  const { lang, page, slug } = route;
  const t = langData[lang];
  const project = slug ? t.projects.items.find(item => item.slug === slug) : undefined;
  const heading = project ? project.title
    : page === 'project' ? t.projects.sectionTitle
    : page === 'experience' ? t.experience.sectionTitle
    : page === 'certificates' ? t.certificates.sectionTitle
    : '';
  const home = { href: pagePath(lang), label: t.projects.backHomeLabel };
  const projects = { href: pagePath(lang, 'project'), label: t.projects.backLabel };
  // max-w-screen (100vw), not max-w-full (100%): body is a grid whose auto
  // column grows to max-content, and the ~740px contribution calendar would
  // otherwise widen the whole page and push every paragraph past the viewport.
  return <main id="main" className="flex max-w-screen flex-col items-center font-light">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData(seoFor(path, lang, slug))).replace(/</g, '\\u003c') }} />
    <div className="w-full md:max-w-xl"><div className="mx-8 flex flex-col gap-10 md:mx-0">
      {page === 'home' ? <>
        <Intro lang={lang} />
        <section id="about"><h2 className="mb-4 text-xl font-medium">{lang === 'id' ? 'Tentang' : 'About'}</h2><p className="leading-relaxed">{t.hero.desc}</p></section>
        <section aria-label="GitHub contributions"><Suspense fallback={<div className="h-36 animate-pulse rounded bg-muted" />}><Contributions lang={lang} /></Suspense></section>
        <section id="skills"><h2 className="mb-4 text-xl font-medium">{t.skills.sectionTitle}</h2><Skills /></section>
        <section id="experience"><h2 className="mb-4 text-xl font-medium">{lang === 'id' ? 'Pengalaman Profesional' : 'Professional Experience'}</h2><Experience lang={lang} /></section>
        <section id="projects"><h2 className="mb-4 text-xl font-medium">{t.projects.sectionTitle}</h2><ProjectList lang={lang} limit={3} from="home" /></section>
        <section id="education"><h2 className="mb-4 text-xl font-medium">{t.education.sectionTitle}</h2><Education lang={lang} /></section>
        <section id="certificates"><h2 className="mb-4 text-xl font-medium">{t.certificates.sectionTitle}</h2><Certificates lang={lang} preview /></section>
        <Contact lang={lang} />
      </> : <>
        <div>
          {project
            ? <Suspense fallback={<BackLink href={projects.href} label={projects.label} />}><ProjectBackLink home={home} projects={projects} /></Suspense>
            : <BackLink href={home.href} label={home.label} />}
          <h1 className="text-xl font-medium">{heading}</h1>
          {project?.role && <p className="mt-1 text-xs text-muted-foreground">{project.role}</p>}
        </div>
        {slug && <ProjectDetail lang={lang} slug={slug} />}
        {page === 'project' && !slug && <ProjectList lang={lang} />}
        {page === 'experience' && <Experience lang={lang} />}
        {page === 'certificates' && <Certificates lang={lang} />}
      </>}
    </div></div>
  </main>;
}
