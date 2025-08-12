import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "../context/LangContext";
import { getNavigationItems } from "../utils/navigation";
import { useNavigation } from "../hooks/useNavigation";

const Header = () => {
  const { lang, setLang } = useLang();
  const navigationItems = getNavigationItems(lang);
  const { handleNavigation } = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleLang = () => setLang(lang === "en" ? "id" : "en");

  const handleNavClick = (item: typeof navigationItems[0], event: React.MouseEvent) => {
    event.preventDefault();
    handleNavigation(item);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = original; };
    }
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-700 bg-zinc-900/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 transition-colors">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={(e) => handleNavClick(navigationItems[0], e)}
          className="cursor-pointer"
          aria-label="Go to home"
        >
          <img src="logo.webp" alt="logo" className="w-12 h-auto aspect-square" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-lg font-medium text-white">
          {navigationItems.map((item) => (
            <li key={item.target}>
              <button
                onClick={(e) => handleNavClick(item, e)}
                className="px-3 py-2 rounded-md hover:bg-zinc-700 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="px-3 py-2 min-h-[48px] rounded-md bg-zinc-800 hover:bg-zinc-700 text-sm font-medium text-white transition"
          >
            {lang === "en" ? "ID" : "EN"}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 min-w-[48px] min-h-[48px] rounded-lg bg-zinc-800 text-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <ul
            id="mobile-menu"
            role="menu"
            className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-700 flex flex-col items-start gap-2 px-4 sm:px-6 py-4 md:hidden z-50 shadow-md"
          >
            {navigationItems.map((item) => (
              <li key={item.target} className="w-full">
                <button
                  onClick={(e) => handleNavClick(item, e)}
                  className="block w-full py-3 text-lg hover:bg-zinc-800 rounded-md px-2 text-white text-left"
                  role="menuitem"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Overlay untuk close di luar panel (area klik layar) */}
      {menuOpen && (
        <button
          aria-label="Close menu overlay"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 md:hidden bg-black/30"
        />
      )}
    </header>
  );
};

export default Header;
