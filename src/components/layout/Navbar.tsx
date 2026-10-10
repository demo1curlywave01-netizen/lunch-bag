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
            ? "bg-white/95 backdrop-blur-md py-2.5 shadow-xs border-b border-[#EFE4D6]"
            : "bg-[#FAF6EE]/90 backdrop-blur-xs py-4 border-b border-[#EFE4D6]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Clear and Prominent */}
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
                        ? "text-[#C85A27] font-bold"
                        : "text-[#4A2D23] hover:text-[#C85A27] hover:bg-[#FDF6F0]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navActiveIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C85A27] rounded-full"
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
                className="relative p-2.5 text-[#2D140D] hover:text-[#C85A27] rounded-full hover:bg-[#FDF6F0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A27]"
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
                    className="absolute -top-1 -right-1 w-5 h-5 bg-[#C85A27] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs"
                  >
                    {displayCount}
                  </motion.span>
                )}
              </button>

              {/* Get My Lunch Pass Primary CTA */}
              <div className="hidden sm:block">
                <MagneticButton href="/passes" size="sm" variant="primary" withArrow>
                  Get Lunch Pass
                </MagneticButton>
              </div>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#2D140D] hover:text-[#C85A27] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A27] rounded-lg"
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
            className="fixed inset-x-0 top-[65px] z-30 bg-white border-b border-[#EFE4D6] shadow-xl p-6 md:hidden"
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
                        ? "bg-[#FDF6F0] text-[#C85A27] font-bold"
                        : "text-[#2D140D] hover:bg-[#FAF6EE]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#C85A27]"></span>}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-[#EFE4D6] flex flex-col gap-3">
                <div onClick={() => setMobileMenuOpen(false)}>
                  <MagneticButton
                    href="/passes"
                    size="md"
                    variant="primary"
                    className="w-full text-center"
                    withArrow
                  >
                    Get Lunch Pass
                  </MagneticButton>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#6B5249] pt-1">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
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
