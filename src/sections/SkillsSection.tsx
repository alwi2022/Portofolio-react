import React, { JSX } from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";

const languagesAndFrameworks = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "tailwindcss",
  "vite",
  "apollo",
  "nodejs",
  "express",
  "sequelize",
  "postgresql",
  "mongodb",
  "graphql",
];

const toolsAndPlatforms = [
  "aws",
  "firebase",
  "jest",
  "postman",
  "vercel",
  "supabase",
  "git",
  "github",
  "githubactions",
  "vscode",
  "heroku",
  "npm",
];

const SkillCategory = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
    <div className="p-6 bg-zinc-900 border border-zinc-700 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
      {title}
    </h2>
    <div className="flex flex-wrap gap-4">
      {items.map((item) => (
        <img
          key={item}
          src={`https://skillicons.dev/icons?i=${item}`}
          alt={item}
          className="w-10 h-10 sm:w-14 sm:h-14"
        />
      ))}
    </div>
  </div>
);

const SkillsSection = (): JSX.Element => {
  const { lang } = useLang();
  const skills = langData[lang].skills;

  return (
    <section id="Skills" className="mt-20 mb-20 px-4 sm:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          {skills.sectionTitle}
        </h1>
        <p className="mt-3 text-lg text-zinc-400">
          {skills.description}
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <SkillCategory
          title={skills.languagesTitle}
          items={languagesAndFrameworks}
        />
        <SkillCategory
          title={skills.toolsTitle}
          items={toolsAndPlatforms}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
