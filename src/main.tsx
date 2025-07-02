// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css";
import { LangProvider } from "./context/LangContext";
import Project from "./pages/Project";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top setiap kali path berubah
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
        <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  </React.StrictMode>
);
