// src/main.tsx
import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router";
import App from "./App";
import "./index.css";
import { LangProvider, useLang } from "./context/LangContext";
import { useLocation } from "react-router";

const Project = lazy(() => import("./pages/Project"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Experience = lazy(() => import("./pages/Experience"));
const ChatAssistant = lazy(() => import("./components/Chat"));

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function LocalizedRoute({ children }: { children: React.ReactNode }) {
  const { lang: urlLang } = useParams();
  const { setLang } = useLang();

  useEffect(() => {
    if (urlLang === "id" || urlLang === "en") {
      setLang(urlLang);
    }
  }, [urlLang, setLang]);

  if (urlLang !== "id" && urlLang !== "en") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<App />} />

            <Route
              path="/:lang"
              element={
                <LocalizedRoute>
                  <App />
                </LocalizedRoute>
              }
            />
            <Route path="/project" element={<Project />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/experience" element={<Experience />} />

            <Route
              path="/:lang/project"
              element={
                <LocalizedRoute>
                  <Project />
                </LocalizedRoute>
              }
            />
            <Route
              path="/:lang/certificates"
              element={
                <LocalizedRoute>
                  <Certificates />
                </LocalizedRoute>
              }
            />
            <Route
              path="/:lang/experience"
              element={
                <LocalizedRoute>
                  <Experience />
                </LocalizedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <ChatAssistant />
        </Suspense>
      </BrowserRouter>
    </LangProvider>
  </React.StrictMode>
);
