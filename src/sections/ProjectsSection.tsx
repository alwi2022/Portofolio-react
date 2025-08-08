// src/sections/ProjectsSection.tsx
import React from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import { Github, Link, QrCode, Play } from "lucide-react";
import { Link as RouterLink } from "react-router";

const ProjectsSection = () => {
  const { lang } = useLang();
  const projectLang = langData[lang].projects;

  return (
    <section id="Projects" className="scroll-mt-24 md:scroll-mt-28 mb-20 flex flex-col md:flex-row mt-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 text-center">
          {projectLang.sectionTitle}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto text-center">
          {projectLang.description}
        </p>
        <div className="mt-3 mb-4 text-right">
          <RouterLink to="/project" className="text-sm text-white hover:underline">
            {lang === "en" ? "See all projects" : "Lihat semua proyek"}
          </RouterLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projectLang.items.slice(0, 3).map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-700 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full aspect-video object-cover rounded-t-xl"
                loading="lazy"
              />
              <div className="px-6 py-5">
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-zinc-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  {project.links.map((link) => (
                    <a
                      key={link.labelKey}
                      href={link.url}
                      title={link.labelKey}
                      aria-label={`${project.title} - ${link.labelKey}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 text-sm font-medium rounded-md bg-white text-black hover:opacity-90 transition"
                    >
                      {link.labelKey === "website" && <Link className="w-4 h-4" />}
                      {link.labelKey === "github" && <Github className="w-4 h-4" />}
                      {link.labelKey === "expo" && <QrCode className="w-4 h-4" />}
                      {link.labelKey === "demo" && <Play className="w-4 h-4" />}
                      {projectLang.buttonLabels[link.labelKey as keyof typeof projectLang.buttonLabels]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
