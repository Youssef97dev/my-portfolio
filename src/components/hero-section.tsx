"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hero3D } from "./3d/hero-3d";
import { Magnetic } from "./ui/magnetic";
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Layers,
  ArrowRight,
  Terminal,
  Activity,
  ShieldCheck,
  Zap
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { portfolioData } from "@/data/portfolio-data";

const TECH_TICKER = [
  "Next.js (App Router)",
  "TypeScript",
  "React 19",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS v4",
  "MongoDB",
  "Architecture RESTful",
  "Authentification JWT",
  "PM2 & Cluster",
  "Docker & Vercel",
  "Framer Motion",
  "SEO & Core Web Vitals"
];

export function HeroSection() {
  const { personal, metrics } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden w-full max-w-full"
    >
      {/* Cinematic Ambient Background Lights */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] max-w-[100vw] h-[550px] bg-gradient-to-b from-teal-500/20 via-indigo-500/15 to-transparent blur-[140px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[450px] max-w-[80vw] h-[450px] bg-teal-500/15 blur-[120px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-[500px] max-w-[80vw] h-[500px] bg-indigo-500/15 blur-[130px] rounded-full -z-10" />

      {/* Main Grid Container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center my-auto relative z-10">
        
        {/* Left Column: Editorial Headline, Bio, & Action Hub */}
        <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
          
          {/* Status & Availability Capsule */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1.5 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-slate-900/5 dark:bg-white/[0.05] border border-slate-300/80 dark:border-white/10 backdrop-blur-xl mb-6 shadow-sm max-w-full"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Disponible pour opportunités
            </span>
            <span className="hidden sm:inline text-slate-400 dark:text-slate-600">•</span>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-teal-500 shrink-0" />
              Casablanca • Remote
            </span>
          </motion.div>

          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold mb-3"
          >
            <Terminal className="w-4 h-4 shrink-0" />
            <span>Full-Stack Software Engineer & Architect</span>
          </motion.div>

          {/* Dramatic Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-5 break-words max-w-full"
          >
            Bâtir des architectures web{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-teal-500 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">
                résilientes & élégantes
              </span>
            </span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
          >
            Moi c&apos;est <strong className="text-slate-900 dark:text-white font-semibold">{personal.name}</strong>. 
            Avec <span className="text-teal-600 dark:text-teal-400 font-semibold">5+ années d&apos;expertise</span>, je conçois et déploie des applications web complètes — de la modélisation de bases de données hautement optimisées (<strong>PostgreSQL</strong>, <strong>MongoDB</strong>) et d&apos;APIs sécurisées (<strong>NestJS</strong>, <strong>Node.js</strong>) aux interfaces immersives ultra-fluides (<strong>React 19</strong>, <strong>Next.js App Router</strong>).
          </motion.p>

          {/* Interactive Action Bar (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 mb-8 w-full"
          >
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden w-full sm:w-auto"
              >
                <Layers className="w-4 h-4" />
                <span>Explorer les projets</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Magnetic>

            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <a
                href={personal.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-white/[0.06] border border-slate-300 dark:border-white/15 hover:border-teal-500 hover:bg-slate-50 dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 shadow-sm backdrop-blur-md w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-teal-500" />
                <span>Télécharger le CV (PDF)</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100/80 dark:hover:bg-white/5 transition-all duration-200 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>Me contacter</span>
              </a>
            </Magnetic>
          </motion.div>

          {/* Social Proof & Connect Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-3 pt-5 border-t border-slate-200 dark:border-white/10 w-full"
          >
            <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">
              Réseaux & Code :
            </span>

            <div className="flex items-center gap-2">
              <Magnetic strength={0.3}>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500/50 transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-teal-500" />
                  <span>LinkedIn</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.3}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500/50 transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5 text-teal-500" />
                  <span>GitHub</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.3}>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Envoyer un email"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500/50 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-500" />
                  <span>{personal.email}</span>
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Cybernetic 3D Stage with HUD Deck */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full relative rounded-3xl p-1 bg-gradient-to-b from-teal-500/30 via-slate-500/10 to-indigo-500/20 shadow-2xl"
          >
            {/* Glass Container Framing the 3D Experience */}
            <div className="relative w-full rounded-[22px] overflow-hidden bg-white/70 dark:bg-[#0A0E17]/85 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10">
              
              {/* Top HUD Deck Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/80 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 ml-2">
                    interactive_mesh_view.glb
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400">
                    <Activity className="w-3 h-3 animate-pulse" />
                    60 FPS
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                  <span className="text-slate-500 dark:text-slate-400">WebGL 2.0</span>
                </div>
              </div>

              {/* The 3D Canvas */}
              <div className="relative">
                <Hero3D />

                {/* Floating HUD Badge Top-Right */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="pointer-events-none absolute top-4 right-4 z-20 px-3 py-2 rounded-xl bg-white/90 dark:bg-[#0F141C]/90 border border-slate-200 dark:border-white/15 backdrop-blur-md shadow-lg flex items-center gap-2.5"
                >
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                      Core Stack
                    </p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      Next.js • NestJS • SQL
                    </p>
                  </div>
                </motion.div>

                {/* Floating HUD Badge Bottom-Left */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="pointer-events-none absolute bottom-4 left-4 z-20 px-3.5 py-2.5 rounded-xl bg-white/90 dark:bg-[#0F141C]/90 border border-slate-200 dark:border-white/15 backdrop-blur-md shadow-lg flex items-center gap-3"
                >
                  <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                      Core Web Vitals
                    </p>
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      Score 99+ • Latence &lt; 80ms
                    </p>
                  </div>
                </motion.div>

                {/* Bottom Control Hint */}
                <div className="pointer-events-none absolute bottom-3 right-4 z-20 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  Faites glisser pour faire pivoter
                </div>
              </div>

              {/* Bottom HUD Deck Specs Bar */}
              <div className="px-4 py-2.5 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                  Code certifié TypeScript Strict
                </span>
                <span className="text-teal-600 dark:text-teal-400 font-semibold">
                  5+ ans d&apos;expérience
                </span>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Tech Marquee Ticker */}
      <div className="w-full max-w-7xl mx-auto mt-12 mb-6 overflow-hidden relative select-none">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
        
        <div className="flex items-center gap-3 py-2 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...TECH_TICKER, ...TECH_TICKER].map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium 
                bg-slate-100/90 dark:bg-white/[0.04] 
                border border-slate-200 dark:border-white/10 
                text-slate-700 dark:text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Metrics Counter Bar */}
      <div className="w-full max-w-7xl mx-auto pt-6 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        {metrics.map((m, idx) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="p-3.5 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#0F141C]/70 border border-slate-200/80 dark:border-white/[0.07] backdrop-blur-xl shadow-sm flex flex-col"
          >
            <span className="text-2xl sm:text-3xl font-black font-mono bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
              {m.value}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
              {m.label}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
              {m.description}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-8 flex justify-center">
        <a
          href="#about"
          aria-label="Faire défiler"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors"
        >
          <span>Découvrir le parcours</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-teal-500" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
