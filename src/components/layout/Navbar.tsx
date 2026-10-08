"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { Logo } from "@/components/ui/Logo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { totalItemsCount, openCart } = useCart();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const displayCount = mounted ? totalItemsCount : 0;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-red-100/60"
            : "bg-white/80 backdrop-blur-xs py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo size={isScrolled ? "sm" : "md"} />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3.5 py-2 text-sm font-semibold transition-colors rounded-full ${
                      isActive
                        ? "text-brand-red font-bold"
                        : "text-neutral-700 hover:text-brand-red hover:bg-red-50/50"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navActiveIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-red rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              {/* Cart Drawer Trigger */}
              <button
                onClick={openCart}
                className="relative p-2.5 text-neutral-700 hover:text-brand-red rounded-full hover:bg-red-50/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label={
                  displayCount > 0
                    ? `Open pre-order tray with ${displayCount} items`
                    : "Open pre-order tray"
                }
              >
                <ShoppingBag className="w-5 h-5" />
                {displayCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs"
                  >
                    {displayCount}
                  </motion.span>
                )}
              </button>

              {/* Get My Lunch Pass Primary CTA */}
              <div className="hidden sm:block">
                <MagneticButton href="/passes" size="sm" variant="primary" withArrow>
                  Get My Lunch Pass
                </MagneticButton>
              </div>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-neutral-700 hover:text-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-lg"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-white border-b border-red-100 shadow-xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-red-50 text-brand-red font-bold"
                        : "text-neutral-800 hover:bg-neutral-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-brand-red"></span>}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
                <div onClick={() => setMobileMenuOpen(false)}>
                  <MagneticButton
                    href="/passes"
                    size="md"
                    variant="primary"
                    className="w-full text-center"
                    withArrow
                  >
                    Get My Lunch Pass
                  </MagneticButton>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-500 pt-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  100% Pure Vegetarian Kitchen
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
