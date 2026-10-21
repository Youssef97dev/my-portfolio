"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { portfolioData, Experience, Education } from "@/data/portfolio-data";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Building2,
  ChevronRight,
  Code,
  Sparkles
} from "lucide-react";

export function TimelineSection() {
  const { experiences, education } = portfolioData;
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden w-full max-w-full">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 max-w-[80vw] h-96 bg-teal-500/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 max-w-[80vw] h-96 bg-indigo-500/10 blur-[140px] rounded-full" />

      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Parcours & Évolution
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Expérience &{" "}
            <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
              Formation Académique
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            Un itinéraire jalonné de responsabilités techniques, d&apos;applications à fort impact et
            de diplômes d&apos;ingénierie logicielle.
          </motion.p>

          {/* Toggle Experience vs Education */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 mt-8 w-full max-w-lg mx-auto">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/25"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10"
              }`}
            >
              <Briefcase className="w-4 h-4 shrink-0" />
              <span>Expériences Professionnelles ({experiences.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10"
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>Diplômes & Études ({education.length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-12">
          {/* Background vertical beam */}
          <div className="absolute top-2 bottom-4 left-2 sm:left-4 md:left-5 w-[2px] bg-slate-200 dark:bg-white/10" />

          {/* Glowing dynamic scroll beam */}
          <motion.div
            style={{ scaleY }}
            className="absolute top-2 bottom-4 left-2 sm:left-4 md:left-5 w-[3px] -translate-x-[0.5px] origin-top bg-gradient-to-b from-teal-400 via-emerald-400 to-indigo-500 shadow-[0_0_12px_rgba(20,184,166,0.6)]"
          />

          {/* Items */}
          {activeTab === "experience" ? (
            <div className="flex flex-col gap-10">
              {experiences.map((exp: Experience, idx: number) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-6 sm:-left-10 md:-left-12 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#07090E] border-2 border-teal-500 flex items-center justify-center shadow-[0_0_12px_rgba(20,184,166,0.5)] group-hover:scale-125 transition-transform duration-300">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-7 rounded-2xl bg-white/90 dark:bg-[#0F141C]/85 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl shadow-lg transition-all hover:border-teal-500/40">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-medium bg-teal-500/10 text-teal-600 dark:text-teal-300 border border-teal-500/20">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400 mt-1">
                          <span className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
                            <Building2 className="w-3.5 h-3.5 text-teal-500" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-mono text-slate-700 dark:text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-teal-500" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Summary descriptions */}
                    {exp.description.length > 0 && (
                      <div className="mb-4">
                        {exp.description.map((d, i) => (
                          <p key={i} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {d}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Sub-projects list */}
                    {exp.projects && exp.projects.length > 0 && (
                      <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
                        {exp.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="bg-slate-50/70 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200/60 dark:border-white/5">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                              <ChevronRight className="w-4 h-4 text-teal-500" />
                              {proj.name}
                            </h4>
                            <ul className="space-y-1.5 pl-6 list-disc list-outside text-xs text-slate-600 dark:text-slate-300 marker:text-teal-500">
                              {proj.details.map((detail, dIdx) => (
                                <li key={dIdx} className="leading-relaxed">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech stack badges */}
                    <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-300 mr-1 flex items-center gap-1">
                        <Code className="w-3 h-3 text-teal-500" /> Stack :
                      </span>
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2.5 py-0.5 rounded-md font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {education.map((edu: Education, idx: number) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-6 sm:-left-10 md:-left-12 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#07090E] border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform duration-300">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  </div>

                  <div className="p-4 sm:p-7 rounded-2xl bg-white/90 dark:bg-[#0F141C]/85 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl shadow-lg transition-all hover:border-indigo-500/40">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div className="max-w-xl">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mt-1">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-indigo-500" />
                            {edu.institution}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {edu.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
