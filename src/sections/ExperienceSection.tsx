// src/sections/ExperienceSection.tsx
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import { Link as RouterLink } from "react-router";

const ExperienceSection = () => {
  const { lang } = useLang();
  const experienceLang = langData[lang].experience;

  return (
    <section id="Experience" className="scroll-mt-24 md:scroll-mt-28 mb-20 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            {experienceLang.sectionTitle}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            {experienceLang.description}
          </p>
          <div className="mt-3 mb-4 text-right">
            <RouterLink
              to="/experience"
              className="text-sm text-white hover:underline"
            >
              {lang === "en" ? "See all experience" : "Lihat semua pengalaman"}
            </RouterLink>
          </div>
        </div>

        {/* Experience Items */}
        <div className="space-y-8 sm:space-y-12">
          {experienceLang.items.slice(0, 1).map((experience, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 sm:p-8 shadow-md"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-2">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {experience.position}
                  </h2>
                  <div className="text-base sm:text-lg font-semibold text-zinc-300">
                    <span className="italic">{experience.company}</span>
                  </div>
                </div>

                <div className="flex flex-col lg:items-end gap-1 mt-4 lg:mt-0 text-sm text-zinc-400">
                  <div className="font-medium italic">{experience.duration}</div>
                  <div className="italic">{experience.location}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 mb-6 leading-relaxed">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                  {experienceLang.responsibilities}
                </h3>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li
                      key={respIndex}
                      className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              {!!(experience.technologies?.length) && (
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                    {experienceLang.technologies}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span key={i} className="text-xs text-zinc-300 italic">
                        {tech}{i !== experience.technologies.length - 1 ? "," : ""}
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
