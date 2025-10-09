// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router";
import App from "./App";
import "./index.css";
import { LangProvider, useLang } from "./context/LangContext";
import Project from "./pages/Project";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Certificates from "./pages/Certificates";
import Experience from "./pages/Experience";
import ChatAssistant from "./components/Chat";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function LangRoute() {
  const { lang: urlLang } = useParams();
  const { setLang } = useLang();

  useEffect(() => {
    if (urlLang === "id" || urlLang === "en") {
      setLang(urlLang);
    }
  }, [urlLang, setLang]);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
             <Route path="/" element={<App />} />

       <Route path="/:lang(id|en)" element={<LangRoute />} />
          <Route path="/project" element={<Project />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/experience" element={<Experience />} />

            <Route path="/:lang(id|en)/project" element={<Project />} />
  <Route path="/:lang(id|en)/certificates" element={<Certificates />} />
  <Route path="/:lang(id|en)/experience" element={<Experience />} />
           <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ChatAssistant />
      </BrowserRouter>
    </LangProvider>
  </React.StrictMode>
);
