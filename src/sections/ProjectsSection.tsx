import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  links: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    title: "QuickHire",
    description:
      "Build professional resumes in minutes. Just fill the form and let AI generate the Summary & Experience sections.",
    image: "/Quickhire/Quickhire.png",
    links: [
      { label: "Website", url: "https://resume.alwi.tech/" },
      { label: "GitHub", url: "https://github.com/alwi2022" },
    ],
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A simple yet powerful tool to monitor your daily expenses and manage your personal budget with ease.",
    image: "/Expanse-tracker/image.png",
    links: [
      { label: "Website", url: "https://finance.alwi.tech" },
      { label: "GitHub", url: "https://github.com/alwi2022" },
    ],
  },

  {
    title: "Maneka",
    description:
      "AI-powered career planning platform inspired by Gardner’s theory of multiple intelligences.",
    image: "/Maneka/Maneka1.PNG",
    links: [
      {
        label: "Expo QR",
        url: "https://expo.dev/preview/update?message=fix:%20slicing%2020%20question&updateRuntimeVersion=1.0.0&createdAt=2025-03-17T14:37:37.110Z&slug=exp&projectId=4bd366a8-2bbc-4e99-9fbf-af38b1d16b68&group=4d0832dd-2aa7-4acd-bef5-59916d281c6d",
      },
      {
        label: "GitHub",
        url: "https://github.com/TalentDiscovery/Maneka-Backend-Public",
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="Projects" className="mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-12 text-center">
          Recent Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full h-48 object-cover p-4 rounded-3xl"
              />
              <div className="px-6 py-5">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      title={link.label}
                      aria-label={`${project.title} - ${link.label}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium rounded-md bg-zinc-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition"
                    >
                      {link.label}
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
