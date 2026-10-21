"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Magnetic } from "./ui/magnetic";
import {
  Copy,
  Check,
  Send,
  Phone,
  MapPin,
  Globe,
  Sparkles,
  ArrowUp
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden w-full max-w-full">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-teal-500/10 blur-[140px] rounded-full" />

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
            Connectons-nous
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Un projet ambitieux ? <br />
            <span className="bg-gradient-to-r from-teal-500 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">
              Discutons de sa concrétisation.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            Que ce soit pour une opportunité Full-Time, un projet d&apos;architecture web ou une collaboration technique, je réponds généralement sous 24 heures.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Direct Info & Copy Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Copy Email Highlight Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/90 dark:bg-[#0F141C]/85 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">
                  Email professionnel
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
              </div>

              <p className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-white truncate mb-4 select-all">
                {personal.email}
              </p>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 
                  bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 
                  text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Email copié dans le presse-papier !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-teal-500" />
                    <span>Copier l&apos;adresse email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Details */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/90 dark:bg-[#0F141C]/85 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl shadow-lg flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Téléphone / WhatsApp</p>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-teal-500 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Localisation</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {personal.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Portfolio en ligne</p>
                  <a
                    href={personal.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    {personal.portfolio.replace("https://", "")}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3">
              <Magnetic strength={0.3} className="flex-1">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white dark:bg-[#0F141C] border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-teal-500/50 hover:text-teal-500 transition-all shadow-sm"
                >
                  <LinkedInIcon className="w-4 h-4 text-teal-500" />
                  LinkedIn
                </a>
              </Magnetic>

              <Magnetic strength={0.3} className="flex-1">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white dark:bg-[#0F141C] border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-teal-500/50 hover:text-teal-500 transition-all shadow-sm"
                >
                  <GitHubIcon className="w-4 h-4 text-teal-500" />
                  GitHub
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-5 sm:p-9 rounded-2xl bg-white/90 dark:bg-[#0F141C]/85 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Envoyer un message direct
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Remplissez le formulaire ci-dessous pour discuter de votre besoin.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Votre Nom & Prénom *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ex: Sarah Martin"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Votre Adresse Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Ex: sarah@entreprise.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Objet / Sujet
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Ex: Opportunité Développeur Full Stack Senior"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Votre Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Décrivez votre besoin, les détails de l'opportunité ou les objectifs de votre projet..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>

              {/* Toast Feedback */}
              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Merci pour votre message ! Je vous répondrai dans les plus brefs délais.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Sleek Footer */}
        <footer className="pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div>
            © 2026{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              {personal.name}
            </span>
            . Tous droits réservés.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-600 dark:text-slate-300">
              Conçu avec Next.js 16, Three.js & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Retour en haut"
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:text-teal-500 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
