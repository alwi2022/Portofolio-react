// src/sections/CertificateSection.tsx
import React from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import { ExternalLink } from "lucide-react";
import { Link as RouterLink } from "react-router";

const CertificateSection = () => {
  const { lang } = useLang();
  const certificateLang = langData[lang].certificates;

  return (
    <section id="Certificates" className="mt-16 mb-16 sm:mt-20 sm:mb-20 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            {certificateLang.sectionTitle}
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto">
            {certificateLang.description}
          </p>
          <div className="mt-3 mb-4 text-right">
            <RouterLink
              to="/certificates"
              className="text-sm text-white hover:underline"
            >
              {lang === "en" ? "See all certificates" : "Lihat semua sertifikat"}
            </RouterLink>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificateLang.items.slice(0, 3).map((certificate, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900 border border-zinc-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay (pointer-events: none; biar nggak ganggu scroll) */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {certificate.credentialUrl ? (
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto inline-flex items-center gap-2 min-h-[44px] px-6 py-3 bg-black/60 text-white hover:bg-black/70 rounded-lg font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {certificateLang.viewCredential}
                      </a>
                    ) : (
                      <div className="pointer-events-none inline-flex items-center gap-2 min-h-[44px] px-6 py-3 bg-black/60 text-white rounded-lg font-medium">
                        <ExternalLink className="w-4 h-4" />
                        {certificateLang.viewCredential}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Optional title */}
              {certificate.showTitle && (
                <div className="p-4">
                  <h3 className="text-sm font-medium text-white text-center">
                    {certificate.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
