// src/sections/HeroSection.tsx
import { TypeAnimation } from "react-type-animation";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";

const HeroSection = () => {
  const { lang } = useLang();
  const hero = langData[lang].hero;

  return (
    <section id="Home" className="scroll-mt-24 md:scroll-mt-28 mb-20 mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {hero.title}
        </h1>

        <TypeAnimation
          key={lang}
          sequence={hero.typed.flatMap((text) => [text, 2000])}
          wrapper="span"
          speed={50}
          className="text-gray-400 text-xl md:text-2xl font-normal tracking-tight mb-4 block motion-reduce:hidden"
          repeat={Infinity}
        />
        {/* Fallback teks statis saat motion-reduce aktif */}
        <span className="hidden motion-reduce:block text-gray-400 text-xl md:text-2xl font-normal tracking-tight mb-4">
          {hero.typed[0]}
        </span>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-300">
          {hero.desc}
        </p>

        {/* Connect With Me */}
        <div className="mt-8 mb-2">
          <h2 className="text-gray-400 text-lg sm:text-xl md:text-2xl tracking-tight">
            {hero.connect}
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-5">
            {[
              { href: "https://github.com/alwi2022", label: "GitHub", icon: "github" },
              { href: "https://www.linkedin.com/in/imambahrialwi/", label: "LinkedIn", icon: "linkedin" },
              { href: "https://www.instagram.com/aaalwi1/", label: "Instagram", icon: "instagram" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-3 rounded-lg bg-zinc-800/40 hover:bg-zinc-800 transition 
                           focus:outline-none focus:ring-2 focus:ring-zinc-500"
              >
                <img
                  src={`/icons/${social.icon}.svg`}
                  alt={social.label}
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
