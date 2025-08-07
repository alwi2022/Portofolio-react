// src/sections/ExperienceSection.tsx
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import { Link as RouterLink } from "react-router";

const ExperienceSection = () => {
  const { lang } = useLang();
  const experienceLang = langData[lang].experience;

  return (
    <section id="Experience" className="mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {experienceLang.sectionTitle}
          </h1>
          <p className="text-lg  text-gray-300 max-w-3xl mx-auto text-center">
            {experienceLang.description}
          </p>
          <div className="mb-4 text-right">
          <RouterLink
            to="/experience"
            className="text-sm text-white hover:underline"
          >
            {lang === "en" ? "See all experience" : "Lihat semua pengalaman"}
          </RouterLink>
        </div>
        </div>

      

        {/* Experience Items */}
        <div className="space-y-12">
          {experienceLang.items.slice(0, 1).map((experience, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 shadow-md"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {experience.position}
                  </h2>
                  <div className="text-lg font-semibold text-zinc-300">
                    <span className="italic">{experience.company}</span>
                  </div>
                </div>

                <div className="flex flex-col lg:items-end gap-2 mt-4 lg:mt-0 text-sm text-zinc-400">
                  <div className="font-medium italic">
                    {experience.duration}
                  </div>
                  <div className="italic">
                    {experience.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 mb-6 leading-relaxed">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  {experienceLang.responsibilities}
                </h3>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li
                      key={respIndex}
                      className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              {experience.technologies && experience.technologies.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                    {experienceLang.technologies}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs text-zinc-300 italic"
                      >
                        {`${tech}${techIndex !== experience.technologies.length - 1 ? "," : ""}`}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;