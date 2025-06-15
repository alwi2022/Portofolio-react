// src/pages/NotFoundPage.tsx
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import { Link, useParams } from "react-router";

const NotFoundPage = () => {
  const { lang } = useLang();
  const { lang: langParam } = useParams();
  const t = langData[lang]?.notFound;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-zinc-900 text-center px-4">
      <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
        {t.title}
      </h2>
      <p className="text-md text-zinc-600 dark:text-zinc-400 max-w-md">
        {t.message}
      </p>
      <Link
        to={`/${langParam ?? "en"}`}
        className="mt-6 inline-block px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-lg hover:opacity-90 transition"
      >
        {t.back}
      </Link>
    </div>
  );
};

export default NotFoundPage;
