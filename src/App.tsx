import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import { JSX } from "react";
import Footer from "./sections/FooterSection";

function App(): JSX.Element {
  return (
    <div className="min-h-screen font-sans bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-all">
      {/* Header dengan navbar dan dark-mode toggle */}
      <Header />

      {/* Main content */}
      <main className="px-4 sm:px-10 lg:px-20">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
