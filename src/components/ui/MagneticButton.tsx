"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Gentle magnetic displacement (dampened)
    setPosition({ x: middleX * 0.18, y: middleY * 0.18 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold rounded-lg gap-1.5",
    md: "px-6 py-3 text-sm font-bold rounded-xl gap-2",
    lg: "px-8 py-4 text-base font-bold rounded-2xl gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-brand-red text-white hover:bg-brand-red-dark shadow-md shadow-brand-red/20 hover:shadow-lg hover:shadow-brand-red/35 active:bg-brand-red-dark border border-transparent",
    secondary:
      "bg-neutral-900 text-white hover:bg-neutral-800 shadow-md shadow-neutral-900/10 active:bg-neutral-950 border border-transparent",
    outline:
      "bg-white text-brand-red border-2 border-brand-red hover:bg-red-50/70 active:bg-red-100/80 shadow-xs",
    ghost:
      "bg-transparent text-neutral-800 hover:text-brand-red hover:bg-neutral-100/60 border border-transparent",
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
      whileTap={{ scale: disabled ? 1 : 0.96 }}
      className={`shine-sweep group inline-flex items-center justify-center font-sans tracking-tight transition-all duration-200 select-none cursor-pointer ${
        sizeStyles[size]
      } ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="inline-block bg-transparent border-0 p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 rounded-xl"
    >
      {content}
    </button>
  );
}
