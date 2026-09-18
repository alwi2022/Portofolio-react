import Link from 'next/link';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import { pagePath, projectPath, type Page } from '@/lib/routes';
import type { LangKey } from '@/lib/content';

export function Navbar({ lang, page, slug }: { lang: LangKey; page: Page; slug?: string }) {
  const other: LangKey = lang === 'en' ? 'id' : 'en';
  // On a project detail page the toggle has to carry the slug, otherwise it
  // drops the visitor on the project index in the other language.
  const switchHref = slug ? projectPath(other, slug) : pagePath(other, page);
  return <nav aria-label={lang === 'id' ? 'Navigasi utama' : 'Main navigation'} className="m-8 flex justify-center">
    <a href="#main" className="sr-only focus:not-sr-only">{lang === 'id' ? 'Ke konten' : 'Skip to content'}</a>
    <div className="flex w-full items-center justify-between md:max-w-xl">
      <Link href={pagePath(lang)}>Portfolio</Link>
      <div className="flex items-center gap-0.5">
        <Link href={switchHref} hrefLang={other} aria-label={lang === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'} className={buttonVariants({ variant: 'ghost', size: 'icon' })}>{lang}</Link>
        <ModeToggle />
      </div>
    </div>
  </nav>;
}
export function Footer({ lang }: { lang: LangKey }) {
  return <footer className="m-10 flex justify-center text-xs">
    <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
      <Link href={pagePath(lang, 'project')}>{lang === 'id' ? 'Proyek' : 'Projects'}</Link>
      <Link href={pagePath(lang, 'experience')}>{lang === 'id' ? 'Pengalaman' : 'Experience'}</Link>
      <Link href={pagePath(lang, 'certificates')}>{lang === 'id' ? 'Sertifikat' : 'Certificates'}</Link>
    </div>
  </footer>;
}
