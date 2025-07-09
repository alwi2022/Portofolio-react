import { TypeAnimation } from "react-type-animation";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";

const HeroSection = () => {
  const { lang } = useLang();
  const hero = langData[lang].hero;

  return (
    <section
      id="Home"
      className="mb-20 flex flex-col md:flex-row mt-20 px-4 sm:px-10 lg:px-20"
    >
      <div>
        <div>
          <h1 className="text-gray-950 dark:text-gray-100 text-3xl md:text-5xl font-bold mb-2 tracking-tight">
            {hero.title}
          </h1>

          {/* Typed Subtitle */}
         <TypeAnimation
  key={lang}
  sequence={hero.typed.flatMap((text) => [text, 2000])}
  wrapper="span"
  speed={50}
  className="text-gray-600 dark:text-gray-400 text-xl md:text-2xl font-normal tracking-tight mb-4 block"
  repeat={Infinity}
/>


          {/* Description */}
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
            {hero.desc}
          </p>
        </div>

        {/* Connect With Me */}
        <div className="mt-8 mb-16">
          <p className="text-gray-600 dark:text-gray-400 text-xl md:text-2xl tracking-tight">
            {hero.connect}
          </p>
          <div className="mt-6 flex flex-wrap gap-5">
            {[
              {
                href: "https://github.com/alwi2022",
                label: "GitHub",
                icon: "github",
              },
              {
                href: "https://www.linkedin.com/in/imam-bahri-alwi-019816250/",
                label: "LinkedIn",
                icon: "linkedin",
              },
              {
                href: "https://www.instagram.com/aaalwi1/",
                label: "Instagram",
                icon: "instagram",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transition-transform hover:scale-150 dark:fill-white fill-black"
              >
                <img
                  src={`https://skillicons.dev/icons?i=${social.icon}`}
                  alt={social.label}
                  width={30}
                  height={30}
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
