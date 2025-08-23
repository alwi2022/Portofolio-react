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
import ChatAssistant from "./components/Chat";
import { HashScrollHandler } from "./components/HashScrollHandler";

function App(): JSX.Element {
  return (
    <div className="min-h-screen font-sans bg-zinc-900 text-white transition-all overflow-x-hidden">
      <HashScrollHandler />
      <Header />
      
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificateSection />
        <ChatAssistant />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;