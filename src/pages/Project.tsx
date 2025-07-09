//src/pages/Project.tsx
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
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
      <img
        src={project.image}
        alt={`${project.title} Preview`}
        className="w-full h-48 object-cover p-4 rounded-3xl"
      />



      <div className="px-6 py-5">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-zinc-800 text-gray-300 rounded-md"
            >
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
              className="px-4 py-3 text-sm font-medium rounded-md  bg-white text-black hover:opacity-90 transition-opacity"
            >
              {link.labelKey === "website" && (
                <LinkIcon className="w-4 h-4 text-zinc-900 inline mr-1" />
              )}
              {link.labelKey === "github" && (
                <Github className="w-4 h-4 text-zinc-900 inline mr-1" />
              )}
              {link.labelKey === "expo" && (
                <QrCode className="w-4 h-4 text-zinc-900 inline mr-1" />
              )}
              {
                projectLang.buttonLabels[
                link.labelKey as keyof typeof projectLang.buttonLabels
                ] || link.labelKey
              }
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans bg-zinc-900 text-white transition-all">
      <Header />

      <main className="px-4 sm:px-10 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-zinc-400 mb-2">
            {lang === "en" ? "Portfolio / Projects" : "Portofolio / Proyek"}
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {lang === "en" ? "All Projects" : "Semua Proyek"}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {projectLang.description}
          </p>


          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {projectLang.items.map((project: any, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
