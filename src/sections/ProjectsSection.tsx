// src/sections/ProjectsSection.tsx
import React from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import { Icon, Github, Link, QrCode, X, Twitter } from "lucide-react";
import { Link as RouterLink } from "react-router";



const ProjectsSection = () => {
  const { lang } = useLang();
  const projectLang = langData[lang].projects;



  return (
    <section id="Projects" className="mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 text-center">
          {projectLang.sectionTitle}
        </h1>
        <p className="text-lg  text-gray-300 max-w-3xl mx-auto text-center">
          {projectLang.description}
        </p>
        <div className="mb-4 text-right">
          
          <RouterLink
            to="/project"
            className="text-sm text-white hover:underline"
          >
            {lang === "en" ? "See all projects" : "Lihat semua proyek"}
          </RouterLink>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projectLang.items.slice(0, 3).map((project, index) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-700 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full h-48 object-cover p-4 rounded-3xl"
              />
              <div className="px-6 py-5">
                <h2 className="text-xl font-semibold text-white">
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
                      className="px-4 py-3 text-sm font-medium rounded-md  bg-white text-black hover:opacity-90 transition"
                    >
                      {link.labelKey === "website" && (
                        <Link className="w-4 h-4 text-zinc-900  inline mr-1" />
                      )}
                      {link.labelKey === "github" && (
                        <Github className="w-4 h-4 text-zinc-900  inline mr-1" />
                      )}
                      {link.labelKey === "expo" && (
                        <QrCode className="w-4 h-4 text-zinc-900  inline mr-1" />
                      )}
                      {link.labelKey === "demo" && (
                        <X className="w-4 h-4 text-zinc-900  inline mr-1" />
                      )}
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
