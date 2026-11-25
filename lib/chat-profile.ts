import { langData, type LangKey } from './content';
import { skills } from './skills';
import { pagePath, projectPath } from './routes';

export function getChatProfile(lang: LangKey) {
  const content = langData[lang];
  return {
    name: 'Imam Bahri Alwi',
    location: 'Jakarta, Indonesia',
    summary: content.hero.desc,
    skills,
    links: {
      portfolio: 'https://www.imambahri.com',
      cv: 'https://www.imambahri.com/cv',
      github: 'https://github.com/alwi2022',
      linkedin: 'https://www.linkedin.com/in/imambahrialwi/',
      email: 'imambahrialwi21@gmail.com',
    },
    experience: content.experience.items.map(({ position, company, duration, description, responsibilities, technologies }) => ({ position, company, duration, description, responsibilities, technologies })),
    projects: content.projects.items.map(({ title, role, description, body, technologies, links, slug }) => ({ title, role, description, details: body, technologies, links, portfolioUrl: `https://www.imambahri.com${projectPath(lang, slug)}` })),
    education: content.education.items,
    certificates: content.certificates.items.map(({ title, issuer, credentialUrl }) => ({ title, issuer, credentialUrl })),
  };
}

export function getChatSources(reply: string, lang: LangKey) {
  const text = reply.toLowerCase();
  const sources: { label: string; href: string }[] = langData[lang].projects.items
    .filter(project => text.includes(project.title.toLowerCase()))
    .map(project => ({ label: project.title, href: projectPath(lang, project.slug) }));
  if (langData[lang].experience.items.some(item => {
    const company = item.company.toLowerCase();
    const shortName = company.replace(/^pt\.?\s+/, '').split(/\s+/)[0];
    const acronym = company.match(/\(([^)]+)\)/)?.[1];
    return text.includes(company) || text.includes(shortName) || (!!acronym && text.includes(acronym));
  })) {
    sources.push({ label: lang === 'id' ? 'Pengalaman kerja' : 'Work experience', href: pagePath(lang, 'experience') });
  }
  return sources.slice(0, 4);
}
