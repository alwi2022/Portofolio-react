// src/sections/ExperienceSection.tsx
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const { lang } = useLang();
  const experienceLang = langData[lang].experience;

  return (
    <section id="Experience" className="mt-20 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-20">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100 mb-16 text-center">
          {experienceLang.sectionTitle}
        </h2>

        <div className="space-y-12">
          {experienceLang.items.map((experience, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l-2  border-zinc-600 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-100 rounded-full border-4 border-zinc-900"></div>

              {/* Content */}
              <div className=" bg-zinc-900 border border-zinc-700 rounded-xl p-6 ml-4 shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-100 mb-1">
                      {experience.position}
                    </h3>
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-100 mb-2">
                      <Briefcase className="w-4 h-4" />
                      {experience.company}
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-medium  bg-zinc-800 text-gray-300 rounded-md">
                      {experience.type}
                    </span>

                  </div>

                  <div className="flex flex-col lg:items-end gap-2 mt-4 lg:mt-0 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-100 mb-3 uppercase tracking-wider">
                    {experienceLang.responsibilities}
                  </h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-100 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-100 mb-3 uppercase tracking-wider">
                      {experienceLang.technologies}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-800 text-gray-300 border border-zinc-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;