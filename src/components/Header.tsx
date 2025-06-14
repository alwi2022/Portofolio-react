import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Cek dan set tema awal
useEffect(() => {
  const storedTheme = localStorage.getItem('color-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const useDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
  if (useDark) {
    document.documentElement.classList.add('dark');
    setIsDark(true);
  } else {
    document.documentElement.classList.remove('dark');
    setIsDark(false);
  }
}, []);


const toggleTheme = () => {
  const newIsDark = !isDark;
  setIsDark(newIsDark);
  if (newIsDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  }
};


  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
      <nav className="flex justify-between items-center px-4 sm:px-10 lg:px-20 py-5 relative">
        {/* Logo */}
    
    <img src="logo.png"
     alt="logo"
     className="w-12 h-12 sm:w-14 sm:h-14"
     />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
          {['Home', 'Projects', 'Skills', 'Contact'].map((label) => (
            <li key={label}>
              <a
                href={label === 'Home' ? '/' : `#${label}`}
                className="px-3 py-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-gray-600 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 flex flex-col items-start gap-4 px-6 py-4 md:hidden z-50 shadow-md">
            {['Home', 'Projects', 'Skills', 'Contact'].map((label) => (
              <li key={label} className="w-full">
                <a
                  href={label === 'Home' ? '/' : `#${label}`}
                  className="block w-full py-2 text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md px-2"
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
  )
}

export default Header
