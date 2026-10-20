"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

function CanvasLoader() {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
      {/* Background glow placeholder */}
      <div className="absolute inset-0 bg-radial from-teal-500/10 dark:from-teal-400/10 via-indigo-500/5 to-transparent blur-3xl animate-pulse" />
      
      {/* Sleek geometric loader */}
      <div className="relative flex flex-col items-center gap-4 z-10">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-teal-500/40 dark:border-teal-400/40"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-indigo-500/30 dark:border-indigo-400/30"
          />
          <motion.div
            animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-indigo-500 blur-[2px]"
          />
        </div>
        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wider uppercase">
          Initialisation 3D...
        </span>
      </div>
    </div>
  );
}

const DynamicHeroCanvas = dynamic(() => import("./hero-canvas"), {
  ssr: false,
  loading: () => <CanvasLoader />
});

export function Hero3D() {
  return <DynamicHeroCanvas />;
}
