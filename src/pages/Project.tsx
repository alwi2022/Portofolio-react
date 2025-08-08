// src/pages/Project.tsx
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import Header from "../components/Header";
import Footer from "../sections/FooterSection";
import { ProjectType } from "../types/project";
import { Link as LinkIcon, Github, QrCode } from "lucide-react";

export default function Project() {
  const { lang } = useLang();
  const projectLang = langData[lang].projects;

  const ProjectCard = ({ project }: { project: ProjectType }) => (
    
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow md:hover:shadow-lg transition-transform duration-300 md:hover:scale-105 motion-reduce:transform-none overflow-hidden">
      <img
        src={project.image}
        alt={`${project.title} Preview`}
        className="w-full aspect-video object-cover"
        loading="lazy"
      />

      <div className="px-6 py-5">
        <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-gray-300 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-zinc-800 text-gray-300 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          {project.links.map((link) => (
            <a
              key={link.labelKey}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 text-sm font-medium rounded-md bg-white text-black hover:opacity-90 transition"
            >
              {link.labelKey === "website" && <LinkIcon className="w-4 h-4" />}
              {link.labelKey === "github" && <Github className="w-4 h-4" />}
              {link.labelKey === "expo" && <QrCode className="w-4 h-4" />}
              {projectLang.buttonLabels[link.labelKey as keyof typeof projectLang.buttonLabels] || link.labelKey}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans bg-zinc-900 text-white transition-all">
      <Header />


      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto">
        <p className="mt-1 md:mt-2 text-sm text-zinc-400 mb-2">
            {lang === "en" ? "Portfolio / Projects" : "Portofolio / Proyek"}
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {lang === "en" ? "All Projects" : "Semua Proyek"}
          </h2>
          <p className="text-lg text-gray-300 mb-8">{projectLang.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {projectLang.items.map((project: any, i: number) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
