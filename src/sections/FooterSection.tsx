
const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-300 dark:border-zinc-700 py-12 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-zinc-600 dark:text-zinc-300 text-sm">
          &copy; {new Date().getFullYear()} Imam Bahri Alwi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
