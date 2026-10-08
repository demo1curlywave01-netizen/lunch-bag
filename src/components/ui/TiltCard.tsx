"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  redHoverBorder?: boolean;
}

export function TiltCard({
  children,
  className = "",
  onClick,
  redHoverBorder = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles (max ~4.5 degrees)
    const rotX = -((y - centerY) / centerY) * 4.5;
    const rotY = ((x - centerX) / centerX) * 4.5;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        y: isHovered && !shouldReduceMotion ? -6 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
      whileTap={{ scale: 0.985 }}
      className={`relative rounded-3xl bg-white transition-all duration-300 ${
        isHovered
          ? redHoverBorder
            ? "shadow-xl shadow-brand-red/10 border-red-200"
            : "shadow-xl shadow-neutral-900/8 border-neutral-300"
          : "shadow-sm border-neutral-100"
      } border ${className}`}
    >
      {children}
    </motion.div>
  );
}
