import React from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import { Calendar, MapPin, Users, Code } from "lucide-react";

const ExperienceSection = () => {
  const { lang } = useLang();
  const experienceLang = langData[lang].experience;

  return (
    <section id="experience" className="mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight dark:text-white mb-12 text-center">
          {experienceLang.sectionTitle}
        </h1>

        <div className="space-y-8">
          {experienceLang.items.map((experience, index) => (
            <div
              key={index}
              className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 p-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    {experience.position}
                  </h2>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    {experience.type}
                  </p>
                </div>
                <div className="flex flex-col md:items-end space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {experienceLang.responsibilities}
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li
                      key={respIndex}
                      className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              {experience.technologies && experience.technologies.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    {experienceLang.technologies}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
                      >
                        {tech}
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