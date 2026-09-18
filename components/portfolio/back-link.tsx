'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export function BackLink({ href, label }: { href: string; label: string }) {
  return <Link href={href} className="mb-6 inline-flex min-h-9 items-center gap-2 text-xs text-muted-foreground hover:text-foreground"><ArrowLeft className="size-3" />{label}</Link>;
}

// Project detail is reachable from the home preview and from the project index,
// so send the visitor back where they came from. The home list tags its links
// with ?from=home; anything else (including a direct visit) falls back to the index.
export function ProjectBackLink({ home, projects }: { home: { href: string; label: string }; projects: { href: string; label: string } }) {
  const target = useSearchParams().get('from') === 'home' ? home : projects;
  return <BackLink href={target.href} label={target.label} />;
}
