// App.tsx
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import { JSX } from "react";
import Footer from "./sections/FooterSection";
import CertificateSection from "./sections/CertificateSection";
import ExperienceSection from "./sections/ExperienceSection";
import { HashScrollHandler } from "./components/HashScrollHandler";

function App(): JSX.Element {
  return (
    <div className="min-h-screen font-sans bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-all">
      <HashScrollHandler />
      <Header />

      <main className="px-4 sm:px-10 lg:px-20">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificateSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;