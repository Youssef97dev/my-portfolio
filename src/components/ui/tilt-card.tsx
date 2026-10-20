"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltAmount?: number;
}

export function TiltCard({
  children,
  className = "",
  glowColor = "rgba(20, 184, 166, 0.16)",
  tiltAmount = 10,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coords for tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for rotation
  const rotateXSpring = useSpring(useTransform(y, [0, 1], [tiltAmount, -tiltAmount]), {
    stiffness: 250,
    damping: 25
  });
  const rotateYSpring = useSpring(useTransform(x, [0, 1], [-tiltAmount, tiltAmount]), {
    stiffness: 250,
    damping: 25
  });

  // Spotlight glare coords
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      x.set(clientX / rect.width);
      y.set(clientY / rect.height);
      setSpotlightPos({ x: clientX, y: clientY });
    },
    [x, y]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  }, [x, y]);

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative w-full h-full overflow-hidden rounded-2xl",
          "bg-white/85 dark:bg-[#0F141C]/80",
          "border border-slate-200/90 dark:border-white/[0.08]",
          "backdrop-blur-xl shadow-lg dark:shadow-2xl",
          "transition-colors duration-300",
          className
        )}
        {...props}
      >
        {/* Dynamic radial cursor spotlight / glare */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(550px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${glowColor}, transparent 65%)`
          }}
        />

        {/* Card Content */}
        <div className="relative z-20 w-full h-full flex flex-col">{children}</div>
      </motion.div>
    </div>
  );
}
