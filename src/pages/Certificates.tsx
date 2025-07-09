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

  const CertificateCard = ({
    certificate,
    index,
  }: {
    certificate: any;
    index: number;
  }) => (
    <div className="group relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Certificate Image */}
      <div className="relative overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {certificate.credentialUrl ? (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black/60 text-white font-medium rounded-lg hover:text-blue-200 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                {certificateLang.viewCredential}
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/60 text-white font-medium rounded-lg">
                <ExternalLink className="w-4 h-4" />
                {certificateLang.viewCredential}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Always show title on full page */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-zinc-900 dark:text-white text-center">
          {certificate.title}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-all">
      <Header />

      <main className="px-4 sm:px-10 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-500 dark:text-zinc-400 mb-2">
            {lang === "en"
              ? "Portfolio / Certificates"
              : "Portofolio / Sertifikat"}
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {lang === "en" ? "All Certificates" : "Semua Sertifikat"}
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            {certificateLang.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certificateLang.items.map((certificate: any, index: number) => (
              <CertificateCard
                key={index}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
