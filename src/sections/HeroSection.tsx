import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="mb-20 flex flex-col md:flex-row mt-20 px-4 sm:px-10 lg:px-20"
    >
      <div>
        <div>
          <h1 className="text-gray-950 dark:text-gray-100 text-3xl md:text-5xl font-bold mb-2 tracking-tight">
            Imam Bahri Alwi
          </h1>

          {/* Typed Subtitle */}
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Fullstack JavaScript",
              2000,
              "Tech Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-gray-600 dark:text-gray-400 text-xl md:text-2xl font-normal tracking-tight mb-4 block"
            repeat={Infinity}
          />
          {/* Description */}
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
           Full-stack JavaScript developer from Serang, Indonesia. Hacktiv8 graduate,
            passionate about building meaningful digital solutions with clean
            and scalable code.
          </p>
        </div>

        {/* Connect With Me */}
        <div className="mt-8 mb-16">
          <p className="text-gray-600 dark:text-gray-400 text-xl md:text-2xl tracking-tight">
            Connect with me here
          </p>
          <div className="mt-6 flex flex-wrap gap-5">
            {/* GitHub */}
            <a
              href="https://github.com/alwi2022"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform hover:scale-150 dark:fill-white fill-black"
            >
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="GitHub"
                width={30}
                height={30}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/imam-bahri-alwi-019816250/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform hover:scale-150 dark:fill-white fill-black"
            >
              <img
                src="https://skillicons.dev/icons?i=linkedin"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aaalwi1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-transform hover:scale-150 dark:fill-white fill-black"
            >
              <img
                src="https://skillicons.dev/icons?i=instagram"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
