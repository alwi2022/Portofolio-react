import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";

const Footer = () => {
  const { lang } = useLang();
  const year = new Date().getFullYear();
  const copyright =
    langData[lang].footer?.copyright?.replace("{{year}}", String(year)) ??
    `© ${year} Imam Bahri Alwi`;

  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 py-12 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-zinc-300 text-sm">
          {copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
