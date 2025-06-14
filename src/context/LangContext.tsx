// src/context/LangContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

type LangType = "en" | "id";

interface LangContextProps {
  lang: LangType;
  setLang: (lang: LangType) => void;
}

const LangContext = createContext<LangContextProps>({
  lang: "en",
  setLang: () => {},
});

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<LangType>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "id" || storedLang === "en") {
      setLangState(storedLang);
    }
  }, []);

  const setLang = (newLang: LangType) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
