import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "full" | "iconOnly";
}

export function Logo({ className = "", size = "md", variant = "default" }: LogoProps) {
  // Proportional heights for the official logo
  const heights = {
    sm: 46,
    md: 58,
    lg: 76,
    xl: 96,
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const h = heights[size];
  // Logo aspect ratio is approximately 900x1024 (~0.88)
  const w = Math.round(h * (900 / 1024));

  if (variant === "full") {
    return (
      <Link
        href="/"
        className={`inline-flex items-center group transition-transform active:scale-95 ${className}`}
        aria-label="Lunch Bag - Homemade Food"
      >
        <div className="relative overflow-hidden rounded-2xl bg-[#FAF6EE] p-2 border border-[#EFE4D6] shadow-xs group-hover:border-[#C85A27]/40 transition-colors">
          <Image
            src="/images/logo.png"
            alt="Lunch Bag - Homemade Food"
            width={w + 24}
            height={h + 10}
            className="h-auto w-auto object-contain max-h-[80px]"
            priority
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 sm:gap-4 group transition-transform active:scale-95 ${className}`}
      aria-label="Lunch Bag - Homemade Food"
    >
      {/* High-Resolution Brand Bag Image with generous padding */}
      <div
        className="relative flex items-center justify-center rounded-2xl overflow-hidden bg-[#FAF6EE] border border-[#EFE4D6] shadow-xs p-1.5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#C85A27]/40 shrink-0"
        style={{ width: h, height: h }}
      >
        <Image
          src="/images/logo.png"
          alt="Lunch Bag Logo"
          width={h}
          height={h}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {variant !== "iconOnly" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display font-black tracking-tight text-[#2D140D] group-hover:text-[#C85A27] transition-colors ${textSizes[size]}`}
            >
              LUNCH <span className="text-[#C85A27]">BAG</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-[#C85A27]"></span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#A1715E] uppercase pt-1">
            Homemade Food • Pure Veg
          </span>
        </div>
      )}
    </Link>
  );
}

