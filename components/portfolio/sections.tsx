import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Code, Download, Github, Home, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { langData, type LangKey } from '@/lib/content';
import { pagePath } from '@/lib/routes';
import { getGitHubContributions } from '@/features/github/server/get-contributions';
import { GitHubContributionsGraph } from '@/features/github/components/contributions-graph';

const skills = ['TypeScript', 'JavaScript', 'React', 'Next.js', 'React Native', 'Node.js', 'NestJS', 'Express.js', 'Prisma', 'PostgreSQL', 'Supabase', 'MongoDB', 'Tailwind CSS', 'Docker'];
export function Intro({ lang }: { lang: LangKey }) {
  return <section>
    <div className="relative flex w-full">
      <div className="relative block size-28 shrink-0 md:size-36"><Image src="/imam.webp" alt="Imam Bahri Alwi" fill sizes="(max-width: 768px) 112px, 144px" preload className="object-contain" /></div>
      <div className="absolute top-1/2 left-28 md:left-36"><h1 className="text-lg leading-6 font-medium">Imam Bahri Alwi</h1><p className="text-sm text-muted-foreground">{langData[lang].hero.typed[0]}</p></div>
    </div>
    <div className="flex flex-col gap-1 text-sm [&_svg]:size-4 [&_svg]:shrink-0">
      <p className="flex min-h-6 items-center gap-3 px-3 whitespace-nowrap"><Code /><span>Full-Stack Developer <span className="font-medium">@Konten.com</span></span></p>
      <a className="profile-link" href="https://www.google.com/maps/search/?api=1&query=Jakarta%2C+Indonesia" target="_blank" rel="noreferrer"><Home />Jakarta, Indonesia</a>
      <a className="profile-link" href="mailto:imambahrialwi21@gmail.com"><Mail />imambahrialwi21@gmail.com</a>
      <a className="profile-link" href="https://www.linkedin.com/in/imambahrialwi/" target="_blank" rel="noreferrer"><Linkedin />linkedin.com/in/imambahrialwi</a>
      <a className="profile-link" href="https://github.com/alwi2022" target="_blank" rel="noreferrer"><Github />github.com/alwi2022</a>
    </div>
  </section>;
}
export function Skills() {
  return <ul className="mt-4 flex flex-wrap gap-2">{skills.map(skill => <li key={skill}><Badge variant="secondary">{skill}</Badge></li>)}</ul>;
}
export async function Contributions({ lang }: { lang: LangKey }) {
  const data = await getGitHubContributions();
  if (!data.length) return <p className="px-2 text-xs text-muted-foreground">{lang === 'id' ? 'Grafik kontribusi belum tersedia.' : 'Contribution graph is currently unavailable.'} <a href="https://github.com/alwi2022" target="_blank" rel="noreferrer" className="underline underline-offset-4">GitHub ↗</a></p>;
  return <GitHubContributionsGraph contributions={Promise.resolve(data)} />;
}
export function Certificates({ lang, preview = false }: { lang: LangKey; preview?: boolean }) {
  const t = langData[lang].certificates;
  return <div>
    <ul className="divide-y">{(preview ? t.items.slice(0, 3) : t.items).map(cert => <li key={cert.title}>
      <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-4 py-4">
        <Image src={cert.image} alt="" width={72} height={48} className="h-12 w-18 rounded border object-cover" />
        <span className="flex-1"><span className="font-medium group-hover:underline underline-offset-4">{cert.title}</span><span className="mt-1 block text-xs text-muted-foreground">{t.viewCredential}</span></span><ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
      </a>
    </li>)}</ul>
    {preview && <Link href={pagePath(lang, 'certificates')} className="mt-3 inline-flex min-h-9 items-center gap-1 text-xs font-medium hover:underline">{lang === 'id' ? 'Semua sertifikat' : 'All certificates'}<ArrowUpRight className="size-3" /></Link>}
  </div>;
}
export function Contact({ lang }: { lang: LangKey }) {
  const t = langData[lang].contact;
  return <section id="contact"><h2 className="mb-4 text-xl font-medium">{t.sectionTitle}</h2><p className="mb-4 leading-relaxed">{t.description}</p>
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium [&_svg]:size-3.5">
      <a className="inline-flex min-h-9 items-center gap-2 hover:underline" href="mailto:imambahrialwi21@gmail.com"><Mail />{lang === 'id' ? 'Kirim email' : 'Email me'}</a>
      <a className="inline-flex min-h-9 items-center gap-2 hover:underline" href="tel:+62895618216004"><Phone />+62 895-6182-16004</a>
      <a className="inline-flex min-h-9 items-center gap-2 hover:underline" href="https://www.instagram.com/aaalwi1/" target="_blank" rel="noreferrer"><Instagram />Instagram</a>
      <a className="inline-flex min-h-9 items-center gap-2 hover:underline" href="/fullstack-cv-imambahrialwi.pdf" download><Download />{t.resumeDownload}</a>
    </div>
  </section>;
}
