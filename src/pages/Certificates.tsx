// src/pages/Certificates.tsx
import React from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import Header from "../components/Header";
import Footer from "../sections/FooterSection";
import { ExternalLink } from "lucide-react";

export default function Certificates() {
  const { lang } = useLang();
  const certificateLang = langData[lang].certificates;

  const CertificateCard = ({ certificate }: { certificate: any }) => (
    <div className="group relative bg-zinc-900 border border-zinc-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {certificate.credentialUrl ? (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 min-h-[44px] px-6 py-3 bg-black/60 text-white rounded-lg hover:bg-black/70"
              >
                <ExternalLink className="w-4 h-4" />
                {certificateLang.viewCredential}
              </a>
            ) : (
              <div className="pointer-events-none inline-flex items-center gap-2 min-h-[44px] px-6 py-3 bg-black/60 text-white rounded-lg">
                <ExternalLink className="w-4 h-4" />
                {certificateLang.viewCredential}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-white text-center">
          {certificate.title}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans bg-zinc-900 text-white transition-all">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8  pt-24 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto"> 
        <p className="mt-1 md:mt-2 text-sm text-zinc-400 mb-2">
            {lang === "en" ? "Portfolio / Certificates" : "Portofolio / Sertifikat"}
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {lang === "en" ? "All Certificates" : "Semua Sertifikat"}
          </h2>

          <p className="text-lg text-zinc-300 mb-8">
            {certificateLang.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certificateLang.items.map((certificate: any, i: number) => (
              <CertificateCard key={i} certificate={certificate} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
