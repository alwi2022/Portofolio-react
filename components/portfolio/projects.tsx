import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { langData, type LangKey } from '@/lib/content';
import { pagePath, projectPath } from '@/lib/routes';
import { projectFeatures } from '@/lib/project-features';

export function ProjectList({ lang, limit, from }: { lang: LangKey; limit?: number; from?: 'home' }) {
  const t = langData[lang].projects;
  const items = limit ? t.items.slice(0, limit) : t.items;
  // Only the index renders the whole list. There the page <h1> is "Projects",
  // so entries are h2; on the home page they nest under the section's h2 and
  // are therefore h3.
  const isIndex = !limit;
  const Title = isIndex ? 'h2' : 'h3';
  return <div>
    <ul className="divide-y">
      {items.map(project => {
        const subtitle: string = project.role;
        return <li key={project.slug}>
          <Link href={from === 'home' ? `${projectPath(lang, project.slug)}?from=home` : projectPath(lang, project.slug)} className="group flex items-center gap-4 py-4 first:pt-0">
            <span className="min-w-0 flex-1">
              <Title className="font-medium group-hover:underline underline-offset-4">{project.title}</Title>
              <span className="mt-1 block line-clamp-1 text-xs text-muted-foreground">{subtitle || project.description}</span>
            </span>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
          </Link>
        </li>;
      })}
    </ul>
    {limit && t.items.length > limit && <Link href={pagePath(lang, 'project')} className="mt-3 inline-flex min-h-9 items-center gap-1 text-xs font-medium hover:underline">{t.allLabel}<ArrowUpRight className="size-3" /></Link>}
  </div>;
}

export function ProjectDetail({ lang, slug }: { lang: LangKey; slug: string }) {
  const t = langData[lang].projects;
  const project = t.items.find(item => item.slug === slug);
  if (!project) return null;
  const isTaskflow = project.slug === 'taskflow';
  const featureKey = project.slug;
  const featureGroups = featureKey === 'knect' || featureKey === 'galaxy-pos' || featureKey === 'taskflow'
    ? projectFeatures[lang][featureKey]
    : undefined;
  return <article>
    <figure className="mb-8">
      {isTaskflow ? <a href={project.image} target="_blank" rel="noreferrer" className="block rounded-md" aria-label={lang === 'id' ? 'Lihat jadwal mingguan ukuran penuh' : 'View full-size weekly planner'}>
        <Image src={project.image} alt={project.imageCaption} width={1920} height={1200} preload fetchPriority="high" className="h-auto w-full rounded-md border" sizes="(max-width: 768px) calc(100vw - 64px), 576px" />
      </a> : <Image src={project.image} alt={'imageCaption' in project ? project.imageCaption : `${project.title} preview`} width={960} height={540} preload fetchPriority="high" className="aspect-video w-full rounded-md border object-cover" sizes="(max-width: 768px) calc(100vw - 64px), 576px" />}
      {'imageCaption' in project && <figcaption className="mt-2 text-xs text-muted-foreground">
        {project.imageCaption}
      </figcaption>}
    </figure>
    <div className="flex flex-col gap-4 leading-relaxed">{project.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    {featureGroups && <section className="mt-10" aria-labelledby="project-features-title">
      <h2 id="project-features-title" className="text-lg font-medium">{lang === 'id' ? 'Fitur' : 'Features'}</h2>
      <div className="mt-6 flex flex-col gap-7">
        {featureGroups.map(group => <section key={group.title}>
          <h3 className="font-medium">{group.title}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed marker:text-muted-foreground">
            {group.items.map(item => <li key={item} className="pl-1">{item}</li>)}
          </ul>
        </section>)}
      </div>
    </section>}
    {project.gallery.length > 0 && <div className="mt-8 flex flex-col gap-6">
      {project.gallery.map(shot => <figure key={shot.src}>
        {isTaskflow ? <a href={shot.src} target="_blank" rel="noreferrer" className="block rounded-md" aria-label={lang === 'id' ? 'Lihat beban kerja tim ukuran penuh' : 'View full-size team workload'}>
          <Image src={shot.src} alt={shot.caption} width={shot.width} height={shot.height} className="h-auto w-full rounded-md border" sizes="(max-width: 768px) calc(100vw - 64px), 576px" />
        </a> : <Image src={shot.src} alt={shot.caption} width={shot.width} height={shot.height} className={shot.height > shot.width ? 'mx-auto w-full max-w-80 rounded-md border' : 'w-full rounded-md border'} sizes={shot.height > shot.width ? '(max-width: 384px) calc(100vw - 64px), 320px' : '(max-width: 768px) calc(100vw - 64px), 576px'} />}
        <figcaption className="mt-2 text-xs text-muted-foreground">{shot.caption}</figcaption>
      </figure>)}
    </div>}
    <div className="mt-8 flex flex-wrap gap-1">{project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}</div>
    {project.links.length > 0 && <div className="mt-4 flex flex-wrap gap-4">
      {project.links.map(link => <a key={link.labelKey} href={link.url} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-1 text-xs font-medium hover:underline underline-offset-4">{t.buttonLabels[link.labelKey]}<ArrowUpRight className="size-3" /></a>)}
    </div>}
  </article>;
}
