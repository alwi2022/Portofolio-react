import React from "react";
import { useLang } from "../context/LangContext";
import { langData } from "../data/langData";
import Header from "../components/Header";
import Footer from "../sections/FooterSection";
import { ProjectType } from "../types/project";
import { Link, Github, QrCode } from "lucide-react";

export default function Project() {
    const { lang } = useLang();
    const projectLang = langData[lang].projects;






    const ProjectCard = ({ project, index }: { project: ProjectType, index: number }) => (
        <div
            className={`bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-105`}
        >
            <div className="relative">
                <img
                    src={project.image}
                    alt={`${projectLang.items[index]?.title || 'Project'} Preview`}
                    className="w-full h-48 object-cover p-4 rounded-3xl"

                />

                <div className="absolute top-0 left-0 flex items-center space-x-2">     
                    <span className="text-xs font-medium bg-white dark:bg-zinc-800 px-2 py-1 rounded text-zinc-700 dark:text-zinc-300"> 
                        {project.status}
                    </span>
                </div>

            </div>

            <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {projectLang.items[index]?.title || `Project ${index + 1}`}
                </h3>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                    {projectLang.items[index]?.description || 'Project description coming soon...'}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag: string, tagIndex: number) => (
                        <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 mt-5">
                    {project.links.map((link: { labelKey: string; url: string }) => (
                        <a
                            key={link.labelKey}
                            href={link.url}
                            title={link.labelKey}
                            aria-label={`${projectLang.items[index]?.title || 'Project'} - ${link.labelKey}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium rounded-md bg-zinc-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
                        >
                            {link.labelKey === "website" && (
                                <Link className="w-4 h-4 text-zinc-900  inline mr-1" />
                            )}
                            {link.labelKey === "github" && (
                                <Github className="w-4 h-4 text-zinc-900  inline mr-1" />
                            )}
                            {link.labelKey === "expo" && (
                                <QrCode className="w-4 h-4 text-zinc-900  inline mr-1" />
                            )}
                            {projectLang.buttonLabels[link.labelKey as keyof typeof projectLang.buttonLabels] || link.labelKey}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen font-sans bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-all">
            <Header />

            <main className="px-4 sm:px-10 lg:px-20 py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                            All {projectLang.sectionTitle}
                        </h1>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                            Explore my portfolio of web applications, mobile apps, and software solutions.
                            Each project represents a unique challenge and learning experience.
                        </p>
                    </div>

                    {/* Featured Projects */}
                    {projectLang.items.length > 0 && (
                        <section className="mb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                                Featured Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {projectLang.items.map((project: any, index: number) => (
                                    <ProjectCard
                                        key={index}
                                        project={project}
                                        index={index}

                                    />
                                ))}

                            </div>
                        </section>
                    )}



                    {/* Call to Action */}
                    <div className="text-center mt-16 p-8 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Have a Project in Mind?
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            I'm always interested in new opportunities and collaborations.
                        </p>
                        <a
                            href="/#Contact"
                            className="inline-block px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-medium rounded-md hover:opacity-90 transition-opacity"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}