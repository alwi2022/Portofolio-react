import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { langData, type LangKey } from '@/lib/content';
import { pagePath, projectPath } from '@/lib/routes';

export function ProjectList({ lang, limit, from }: { lang: LangKey; limit?: number; from?: 'home' }) {
  const t = langData[lang].projects;
  const items = limit ? t.items.slice(0, limit) : t.items;
  // Only the index renders the whole list. There the page <h1> is "Projects",
  // so entries are h2; on the home page they nest under the section's h2 and
  // are therefore h3. The index also carries the intro, thumbnails and
  // per-project summaries — the home teaser stays compact.
  const isIndex = !limit;
  const Title = isIndex ? 'h2' : 'h3';
  return <div>
    {isIndex && <p className="mb-6 leading-relaxed">{t.intro}</p>}
    <ul className="divide-y">
      {items.map(project => {
        // Widened so a project without a role still falls back to its summary.
        const subtitle: string = project.role;
        return <li key={project.slug}>
          <Link href={from === 'home' ? `${projectPath(lang, project.slug)}?from=home` : projectPath(lang, project.slug)} className={`group flex gap-4 py-4 first:pt-0 ${isIndex ? 'items-start' : 'items-center'}`}>
            {/* Empty alt: the heading beside it already names the project. */}
            {isIndex && <Image src={project.image} alt="" width={96} height={56} className="h-14 w-24 shrink-0 rounded border object-cover" />}
            <span className="min-w-0 flex-1">
              <Title className="font-medium group-hover:underline underline-offset-4">{project.title}</Title>
              <span className={`mt-1 block text-xs text-muted-foreground ${isIndex ? '' : 'line-clamp-1'}`}>{subtitle || project.description}</span>
              {isIndex && <span className="mt-1.5 block text-sm text-muted-foreground">{project.description}</span>}
            </span>
            <ArrowUpRight className={`size-4 shrink-0 text-muted-foreground ${isIndex ? 'mt-1' : ''}`} />
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
  return <article>
    {/* `preload` replaces the deprecated `priority` prop in Next 16. It only
        inserts a <link rel=preload>, so the LCP hint on the element itself
        still has to be set explicitly. */}
    <Image src={project.image} alt={`${project.title} preview`} width={960} height={540} preload fetchPriority="high" className="mb-8 aspect-video w-full rounded-md border object-cover" sizes="(max-width: 768px) calc(100vw - 64px), 576px" />
    <div className="flex flex-col gap-4 leading-relaxed">{project.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    {project.gallery.length > 0 && <div className="mt-8 flex flex-col gap-6">
      {project.gallery.map(shot => <figure key={shot.src}>
        <Image src={shot.src} alt={shot.caption} width={shot.width} height={shot.height} className="w-full rounded-md border" sizes="(max-width: 768px) calc(100vw - 64px), 576px" />
        <figcaption className="mt-2 text-xs text-muted-foreground">{shot.caption}</figcaption>
      </figure>)}
    </div>}
    <div className="mt-8 flex flex-wrap gap-1">{project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}</div>
    {project.links.length > 0 && <div className="mt-4 flex flex-wrap gap-4">
      {project.links.map(link => <a key={link.labelKey} href={link.url} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-1 text-xs font-medium hover:underline underline-offset-4">{t.buttonLabels[link.labelKey]}<ArrowUpRight className="size-3" /></a>)}
    </div>}
  </article>;
}
