import React from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import { ExternalLink } from "lucide-react";
import { Link as RouterLink } from "react-router";
const CertificateSection = () => {
    const { lang } = useLang();
    const certificateLang = langData[lang].certificates;

    return (
        <section id="Certificates" className="mt-20 mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
                <div className="text-center ">

                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight dark:text-white mb-4">
                        {certificateLang.sectionTitle}
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        {certificateLang.description}
                    </p>
                    <div className="mb-4 text-right">
                        <RouterLink
                            to="/certificates"
                            className="text-sm text-zinc-900 dark:text-white hover:underline"
                        >
                            {lang === "en" ? "See all certificates" : "Lihat semua sertifikat"}
                        </RouterLink>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {certificateLang.items.slice(0, 3).map((certificate, index) => (
                        <div
                            key={index}
                            className="group relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            {/* Certificate Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        {certificate.credentialUrl ? (
                                            <a
                                                href={certificate.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-black/60 hover:text-blue-200 font-medium rounded-lg hover:bg-black/60 transition-colors duration-200"
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

                            {/* Certificate Title (Optional - hanya tampil jika ada) */}
                            {certificate.showTitle && (
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-zinc-900 dark:text-white text-center">
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