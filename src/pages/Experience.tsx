import React from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import Header from "../components/Header";
import Footer from "../sections/FooterSection";

export default function Experience() {
  const { lang } = useLang();
  const experienceLang = langData[lang].experience;

  const ExperienceItem = ({ experience, index }: { experience: any; index: number }) => (
    <div className="mb-12 pb-8 border-b border-zinc-700 last:border-b-0">
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
          {experience.responsibilities.map((responsibility: string, respIndex: number) => (
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
            {experience.technologies.map((tech: string, techIndex: number) => (
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
  );

  return (
    <div className="min-h-screen font-sans bg-zinc-900 text-white">
      <Header />

      <main className="px-4 sm:px-10 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-sm text-zinc-500 mb-6">
            {lang === "en" ? "Portfolio / Experience" : "Portofolio / Pengalaman"}
          </p>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {experienceLang.sectionTitle}
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl">
              {experienceLang.description}
            </p>
          </div>

          {/* Experience List */}
          <div>
            {experienceLang.items.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} index={index} />
            ))}
          </div>

          {/* Footer Summary */}
          <div className="mt-12 pt-8 border-t border-zinc-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              {lang === "en" ? "Summary" : "Ringkasan"}
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              {lang === "en" 
                ? "Experienced full-stack JavaScript developer with a strong background in modern web technologies, mobile development, and SEO optimization. Demonstrated ability to work effectively in remote teams and deliver scalable solutions."
                : "Full-stack JavaScript developer berpengalaman dengan latar belakang kuat dalam teknologi web modern, pengembangan mobile, dan optimasi SEO. Kemampuan yang terbukti untuk bekerja secara efektif dalam tim remote dan memberikan solusi yang scalable."
              }
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}