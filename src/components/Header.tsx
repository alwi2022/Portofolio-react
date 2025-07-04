import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";

const Header = () => {
  const { lang, setLang } = useLang();
  const navLabels = langData[lang].nav;

  const [menuOpen, setMenuOpen] = useState(false);

  // Set default theme ke dark
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleLang = () => setLang(lang === "en" ? "id" : "en");

  return (
    <header className="border-b border-zinc-700 bg-zinc-900 transition-colors">
      <nav className="flex justify-between items-center px-4 sm:px-10 lg:px-20 py-5 relative">
        {/* Logo */}
        <img
          src="logo.png"
          alt="logo"
          className="w-12 h-12 sm:w-14 sm:h-14"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-lg font-medium text-white">
          {navLabels.map((label, i) => (
            <li key={label}>
              <a
                  href={i === 0 ? "/" : `#${langData["en"].nav[i]}`}
                className="px-3 py-2 rounded-md hover:bg-zinc-700 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="px-3 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 text-sm font-medium text-white transition"
          >
            {lang === "en" ? "ID" : "EN"}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-zinc-800 text-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-700 flex flex-col items-start gap-4 px-6 py-4 md:hidden z-50 shadow-md">
            {navLabels.map((label, i) => (
              <li key={label} className="w-full">
                <a
                  href={i === 0 ? "/" : `#${langData["en"].nav[i]}`}
                  className="block w-full py-2 text-lg hover:bg-zinc-800 rounded-md px-2 text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
