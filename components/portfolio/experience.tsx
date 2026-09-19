'use client';
import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { langData, type LangKey } from '@/lib/content';
import { cn } from '@/lib/utils';

// Logos supplied only as white artwork; flip them to dark ink on the light theme.
const INVERT_ON_LIGHT = new Set(['/images/companies/explore-pulau.webp']);

function CompanyLogo({ src }: { src: string }) {
  return <Image src={src} alt="" width={32} height={32} className={cn('size-8 shrink-0 object-contain', INVERT_ON_LIGHT.has(src) && 'invert dark:invert-0')} />;
}

export function Experience({ lang, headingLevel }: { lang: LangKey; headingLevel?: 2 | 3 }) {
  return <Accordion collapsible type="single">
    {langData[lang].experience.items.map((work) => <AccordionItem key={work.company} value={work.company}>
      <AccordionTrigger headingLevel={headingLevel}>
        <div className="flex flex-1 items-center gap-4 px-4">
          <CompanyLogo src={work.logo} />
          <div className="flex flex-1 flex-col items-start">
            <div className="flex w-full flex-row justify-between">
              <span className="leading-6">{work.company}</span>
              {/* CSS separates these visually, but the heading serialises as one
                  string for screen readers and for anything extracting text, so
                  it needs real punctuation: "Konten.com, 06/26 - Sekarang,
                  Full-Stack Developer" rather than one run-on word. */}
              <span className="sr-only">, </span>
              {/* Dates use the reference's compact MM/YY form; nowrap keeps a
                  long company name from breaking the range across two lines. */}
              <span className="text-xs whitespace-nowrap text-muted-foreground">{work.duration}</span>
            </div>
            <p className="text-xs font-light text-muted-foreground"><span className="sr-only">, </span>{work.position}</p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pl-16">
        <p className="pb-4">{work.description}</p>
        <ul className="ml-4">{work.responsibilities.map(item => <li key={item} className="list-disc marker:text-muted-foreground/40">{item}</li>)}</ul>
        <div className="mt-4 flex flex-wrap gap-1">{work.technologies.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}</div>
      </AccordionContent>
    </AccordionItem>)}
  </Accordion>;
}

export function Education({ lang }: { lang: LangKey }) {
  return <ul className="divide-y">
    {langData[lang].education.items.map((school) => <li key={school.institution} className="flex items-center gap-4 py-4 first:pt-0">
      {school.logo
        ? <CompanyLogo src={school.logo} />
        : <GraduationCap aria-hidden className="size-8 shrink-0 p-1 text-muted-foreground" />}
      <div className="min-w-0 flex-1">
        <div className="flex flex-col justify-between gap-x-2 sm:flex-row">
          <span className="leading-6">{school.institution}</span>
          <span className="shrink-0 text-xs font-light text-muted-foreground">{school.duration}</span>
        </div>
        <p className="text-xs font-light text-muted-foreground">{school.program} · {school.location}</p>
      </div>
    </li>)}
  </ul>;
}
