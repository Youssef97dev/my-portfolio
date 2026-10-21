"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Magnetic } from "./ui/magnetic";
import { Menu, X, ArrowUpRight, Terminal, Download, ChevronRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { portfolioData } from "@/data/portfolio-data";

const navLinks = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Expérience", href: "#experience" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pb-2 transition-all duration-300">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`w-full max-w-7xl flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/85 dark:bg-[#07090E]/90 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/25"
              : "bg-white/60 dark:bg-[#07090E]/60 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-sm"
          }`}
        >
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-1 whitespace-nowrap">
                {portfolioData.personal.firstName}
                <span className="text-teal-500 font-extrabold">{portfolioData.personal.lastName}</span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap">
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Status Badge (Center on desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponible pour opportunités
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.2}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 rounded-lg hover:bg-slate-100/60 dark:hover:bg-white/[0.04]"
                >
                  {link.name}
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Actions (Toggle + Contact CTA + Mobile Menu Button) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ThemeToggle />

            <Magnetic strength={0.25} className="hidden sm:inline-block">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 shadow-md shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-200"
              >
                Me contacter
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Magnetic>

            {/* Mobile hamburger toggle with animated transition */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden relative inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 hover:border-teal-500/40 transition-colors shadow-sm cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-4 h-4 text-teal-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden"
              aria-hidden="true"
            />

            {/* Floating Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-3 sm:inset-x-6 top-[62px] sm:top-[70px] z-50 rounded-2xl bg-white/95 dark:bg-[#07090E]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-5 shadow-2xl flex flex-col gap-3 md:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto"
            >
              {/* Status Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Disponible pour opportunités
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  Casablanca • Remote
                </span>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1 py-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600" />
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 shadow-md shadow-teal-500/20"
                >
                  Me contacter
                </a>
                <a
                  href={portfolioData.personal.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/15 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-teal-500" />
                  <span>Télécharger le CV (PDF)</span>
                </a>
              </div>

              {/* Social links row in mobile drawer */}
              <div className="pt-2 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-around text-xs text-slate-500 dark:text-slate-400">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 p-1.5 hover:text-teal-500 transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-teal-500" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 p-1.5 hover:text-teal-500 transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5 text-teal-500" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}