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
import { Seo } from "./components/Seo";

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

const app = (
  <React.StrictMode>
    <LangProvider>
      <BrowserRouter>
        <Seo />
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

// react-snap prerenders each route to static HTML at build time so the per-route
// metadata set by <Seo /> is present in the initial HTML (for social scrapers and
// non-JS crawlers). When that prerendered markup exists, hydrate it; otherwise
// (dev) mount fresh.
const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
