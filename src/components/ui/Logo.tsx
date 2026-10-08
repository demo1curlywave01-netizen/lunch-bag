import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "full" | "iconOnly";
}

export function Logo({ className = "", size = "md", variant = "default" }: LogoProps) {
  const iconPixelSizes = {
    sm: 36,
    md: 44,
    lg: 54,
    xl: 72,
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  if (variant === "full") {
    const fullHeights = {
      sm: 42,
      md: 52,
      lg: 64,
      xl: 80,
    };
    return (
      <Link
        href="/"
        className={`inline-flex items-center group transition-transform active:scale-95 ${className}`}
        aria-label="Lunch Bag - Homemade Food"
      >
        <div className="relative overflow-hidden rounded-xl bg-[#FAF7F2] p-1 border border-amber-900/10 shadow-xs">
          <Image
            src="/images/logo.png"
            alt="Lunch Bag - Homemade Food"
            width={Math.round(fullHeights[size] * (900 / 1024))}
            height={fullHeights[size]}
            className="h-auto w-auto object-contain"
            priority
          />
        </div>
      </Link>
    );
  }

  const px = iconPixelSizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-transform active:scale-95 ${className}`}
      aria-label="Lunch Bag - Homemade Food"
    >
      {/* Official Brand Bag Icon */}
      <div
        className="relative flex items-center justify-center rounded-xl overflow-hidden bg-[#FAF7F2] border border-amber-900/10 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1 shrink-0"
        style={{ width: px, height: px }}
      >
        <Image
          src="/images/lunch-bag-icon.png"
          alt="Lunch Bag Icon"
          width={px}
          height={px}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {variant !== "iconOnly" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display font-black tracking-tight text-neutral-900 group-hover:text-brand-red transition-colors ${textSizes[size]}`}
            >
              LUNCH <span className="text-brand-red">BAG</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-amber-900/70 uppercase pt-0.5">
            Homemade Food • Pure Veg
          </span>
        </div>
      )}
    </Link>
  );
}

