"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TiltCard } from "./ui/tilt-card";
import { portfolioData } from "@/data/portfolio-data";
import {
  Cpu,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Globe,
  Bot,
  Zap,
  ShieldCheck
} from "lucide-react";

export function BentoSection() {
  const { personal, skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>("Front-End");

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background radial accents */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full" />

      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Bento Grid • Expertise & Vision
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Une ingénierie logicielle robuste,{" "}
            <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
              orientée résultats
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            Découvrez mon univers technique, mes compétences transversales et ma méthode de travail
            conçue pour livrer du code fiable, sécurisé et scalable.
          </motion.p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Main Bio & Highlights (Col span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 min-h-[340px]"
          >
            <TiltCard tiltAmount={8} className="p-7 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400 border border-teal-500/20">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Profil & Vision Architectural
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Casablanca, Maroc • Full Stack Senior Mindset
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                    5+ ans XP
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {personal.about}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {personal.bioPoints.slice(0, 4).map((pt, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400 font-medium">
                  <Zap className="w-3.5 h-3.5" /> Code maintenable & modulaire
                </span>
                <span>Next.js App Router • NestJS • PostgreSQL</span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Interactive Categorized Tech Stack (Col span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2 min-h-[340px]"
          >
            <TiltCard tiltAmount={8} className="p-7 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Boîte à Outils Technique
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Technologies maîtrisées & en production
                      </p>
                    </div>
                  </div>
                </div>

                {/* Categories Tabs */}
                <div className="flex flex-wrap gap-1.5 mb-5 p-1 rounded-xl bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10">
                  {Object.keys(skillCategories).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveTab(cat)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                        activeTab === cat
                          ? "bg-white dark:bg-white/15 text-teal-600 dark:text-teal-300 shadow-sm"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Tech Pills for active category */}
                <div className="flex flex-wrap gap-2 min-h-[90px]">
                  {skillCategories[activeTab]?.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium 
                        bg-teal-500/10 dark:bg-teal-400/10 
                        text-teal-800 dark:text-teal-200 
                        border border-teal-500/20 dark:border-teal-400/20"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Catégorie sélectionnée : <strong className="text-slate-900 dark:text-white">{activeTab}</strong></span>
                <span>{skillCategories[activeTab]?.length || 0} compétences</span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 3: Backend & Data Excellence (Col span 1 or 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-1 lg:col-span-1"
          >
            <TiltCard tiltAmount={10} className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  Bases de données & Scalabilité
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Modélisation relationnelle rigoureuse en <strong>PostgreSQL</strong> et documents <strong>MongoDB</strong>. Indexation fine et requêtes optimisées.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">
                  PostgreSQL
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">
                  MongoDB
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">
                  Indexation SQL
                </span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 4: Security & DevOps (Col span 1 or 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 lg:col-span-1"
          >
            <TiltCard tiltAmount={10} className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="p-2.5 w-fit rounded-xl bg-teal-500/10 text-teal-500 border border-teal-500/20 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  Sécurité API & Production
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Authentification & autorisation JWT, RBAC, PM2 process management, serveurs Namecheap/cPanel et déploiements Vercel.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">
                  JWT Auth
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">
                  PM2 Cluster
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">
                  Vercel
                </span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 5: AI & Modern Workflow (Col span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="md:col-span-1 lg:col-span-1"
          >
            <TiltCard tiltAmount={10} className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="p-2.5 w-fit rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20 mb-4">
                  <Bot className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  IA & Vélocité Dev
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Intégration d&apos;APIs d&apos;IA générative et workflows assistés par IA pour concevoir plus vite du code sans compromis sur la rigueur.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">
                  AI APIs
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">
                  Automation
                </span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 6: Languages & Cultural Agility (Col span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 lg:col-span-1"
          >
            <TiltCard tiltAmount={10} className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="p-2.5 w-fit rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20 mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white mb-3">
                  Langues & Communication
                </h4>
                <div className="flex flex-col gap-2.5 mb-2">
                  {personal.languages.map((lang) => (
                    <div key={lang.language} className="flex flex-col">
                      <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                        <span>{lang.language}</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {lang.proficiency}
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden mt-1">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full"
                          style={{ width: `${lang.levelPercent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
