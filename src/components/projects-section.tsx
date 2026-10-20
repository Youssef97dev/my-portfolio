"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "./ui/tilt-card";
import { portfolioData, Project } from "@/data/portfolio-data";
import {
  Sparkles,
  ArrowUpRight,
  Code
} from "lucide-react";
import { GitHubIcon } from "./icons";
import Image from "next/image";

const categories = ["Tous", "Full-Stack", "Frontend", "Backend / API", "Mobile / AI"] as const;

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background radial glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[150px] rounded-full" />

      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio & Réalisations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Projets Sélectionnés &{" "}
            <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
              Architectures Web
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            Découvrez une sélection d&apos;applications complètes et performantes, conçues avec des
            bonnes pratiques modernes et prêtes pour la production.
          </motion.p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                    : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="h-full"
              >
                <TiltCard
                  tiltAmount={9}
                  className="group flex flex-col justify-between h-full overflow-hidden"
                >
                  <div>
                    {/* Project Image Banner */}
                    <div className="relative w-full h-52 overflow-hidden bg-slate-100 dark:bg-white/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-teal-500/90 text-white text-[11px] font-semibold backdrop-blur-md shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Projet Phare
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-slate-900/80 text-slate-200 text-[11px] font-mono backdrop-blur-md border border-white/15">
                        {project.category}
                      </div>

                      {/* Floating Action Links Overlay */}
                      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Code source pour ${project.title}`}
                            className="p-2 rounded-xl bg-slate-900/80 hover:bg-teal-500 text-white backdrop-blur-md border border-white/20 transition-colors shadow-lg"
                          >
                            <GitHubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Démonstration en direct de ${project.title}`}
                            className="p-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-white backdrop-blur-md transition-colors shadow-lg shadow-teal-500/30"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Body */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-500 transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300">
                      ID: {project.id}
                    </span>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 dark:text-slate-300 hover:text-teal-500 flex items-center gap-1 font-medium transition-colors"
                        >
                          <Code className="w-3.5 h-3.5" /> Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 font-medium"
                        >
                          Démo live <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
