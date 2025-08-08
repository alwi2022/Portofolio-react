// src/pages/Experience.tsx
import React from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import Header from "../components/Header";
import Footer from "../sections/FooterSection";

export default function Experience() {
  const { lang } = useLang();
  const experienceLang = langData[lang].experience;

  const ExperienceItem = ({ experience }: { experience: any }) => (
    <div className="mb-12 pb-8 border-b border-zinc-700 last:border-b-0">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {experience.position}
          </h2>
          <div className="text-base sm:text-lg font-semibold text-zinc-300">
            <span className="italic">{experience.company}</span>
          </div>
        </div>

        <div className="flex flex-col lg:items-end gap-2 mt-4 lg:mt-0 text-sm text-zinc-400">
          <div className="font-medium italic">{experience.duration}</div>
          <div className="italic">{experience.location}</div>
        </div>
      </div>

      <p className="text-zinc-300 mb-6 leading-relaxed">{experience.description}</p>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
          {experienceLang.responsibilities}
        </h3>
        <ul className="space-y-3">
          {experience.responsibilities.map((r: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      {!!experience.technologies?.length && (
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            {experienceLang.technologies}
          </h3>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((t: string, i: number) => (
              <span key={i} className="text-xs text-zinc-300 italic">
                {t}{i !== experience.technologies.length - 1 ? "," : ""}
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


      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20">

        <div className="max-w-4xl mx-auto">
        <p className="mt-1 md:mt-2 text-sm text-zinc-400 mb-2">
            {lang === "en" ? "Portfolio / Experience" : "Portofolio / Pengalaman"}
          </p>

          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {experienceLang.sectionTitle}
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl">{experienceLang.description}</p>
          </div>

          <div>
            {experienceLang.items.map((exp: any, i: number) => (
              <ExperienceItem key={i} experience={exp} />
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              {lang === "en" ? "Summary" : "Ringkasan"}
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              {lang === "en"
                ? "Experienced full-stack JavaScript developer with a strong background in modern web technologies, mobile development, and SEO optimization. Demonstrated ability to work effectively in remote teams and deliver scalable solutions."
                : "Full-stack JavaScript developer berpengalaman dengan latar belakang kuat dalam teknologi web modern, pengembangan mobile, dan optimasi SEO. Kemampuan yang terbukti untuk bekerja secara efektif dalam tim remote dan memberikan solusi yang scalable."}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
