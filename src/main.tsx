// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import App from "./App";
import { LangProvider } from "./context/LangContext";
import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path=":lang(en|id)" element={<App />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  </React.StrictMode>
);
