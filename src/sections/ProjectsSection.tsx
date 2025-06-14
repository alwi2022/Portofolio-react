import React from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";

const ProjectsSection = () => {
  const { lang } = useLang();
  const projectLang = langData[lang].projects;

  const projects = [
    {
      image: "/Quickhire/Quickhire.png",
      links: [
        { labelKey: "website", url: "https://resume.alwi.tech/" },
        { labelKey: "github", url: "https://github.com/alwi2022" },
      ],
    },
    {
      image: "/Expanse-tracker/image.png",
      links: [
        { labelKey: "website", url: "https://finance.alwi.tech" },
        { labelKey: "github", url: "https://github.com/alwi2022" },
      ],
    },
    {
      image: "/Maneka/Maneka1.PNG",
      links: [
        {
          labelKey: "expo",
          url: "https://expo.dev/preview/update?message=fix:%20slicing%2020%20question&updateRuntimeVersion=1.0.0&createdAt=2025-03-17T14:37:37.110Z&slug=exp&projectId=4bd366a8-2bbc-4e99-9fbf-af38b1d16b68&group=4d0832dd-2aa7-4acd-bef5-59916d281c6d",
        },
        {
          labelKey: "github",
          url: "https://github.com/TalentDiscovery/Maneka-Backend-Public",
        },
      ],
    },
  ];

  return (
    <section id="Projects" className="mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-12 text-center">
          {projectLang.sectionTitle}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={projectLang.items[index].title}
              className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={`${projectLang.items[index].title} Preview`}
                className="w-full h-48 object-cover p-4 rounded-3xl"
              />
              <div className="px-6 py-5">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {projectLang.items[index].title}
                </h2>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  {projectLang.items[index].description}
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  {project.links.map((link) => (
                    <a
                      key={link.labelKey}
                      href={link.url}
                      title={link.labelKey}
                      aria-label={`${projectLang.items[index].title} - ${link.labelKey}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium rounded-md bg-zinc-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition"
                    >
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
