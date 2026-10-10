import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Logo } from "@/components/ui/Logo";
import { VegMark } from "@/components/ui/VegMark";
import { ShieldCheck, Clock, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#230E07] text-[#D8C4BC] pt-16 pb-12 border-t border-[#3B1A11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top reassurance banner */}
        <div className="bg-[#2D140D] rounded-3xl p-6 sm:p-8 mb-14 border border-[#442217] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <VegMark size="lg" />
            <div>
              <h3 className="text-white font-display text-lg font-bold">
                100% Pure Vegetarian Kitchen Promise
              </h3>
              <p className="text-sm text-[#C4ABA1]">
                Prepared fresh in a clean, hygienic kitchen with strict quality checks • Zero palm oil • Cold-pressed oils & desi ghee
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#C4ABA1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C85A27]" />
              <span>Under 10 Mins to Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Hyderabad Central Kitchen</span>
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block p-2 bg-[#FAF6EE] rounded-2xl border border-[#EFE4D6]">
              <Logo size="lg" />
            </div>
            <p className="text-sm text-[#C4ABA1] max-w-sm leading-relaxed">
              Wholesome North + South Indian combo meal delivery for Hyderabad offices. Pre-staged fresh and piping hot near major tech hubs so lunch arrives at your desk in under 10 minutes.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C4ABA1]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  North + South Combo Menu
                </Link>
              </li>
              <li>
                <Link href="/passes" className="hover:text-white transition-colors">
                  Lunch Passes (6 & 24 Days)
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-white transition-colors">
                  Corporate Subscriptions
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-white transition-colors">
                  Our Story & Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Hub Locations (Visible List) */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Hyderabad Hubs
            </h4>
            <ul className="space-y-2 text-xs text-[#C4ABA1]">
              {siteConfig.deliveryHubs.map((hub) => (
                <li key={hub} className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A27] shrink-0 mt-0.5" />
                  <span>{hub}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact & WhatsApp
            </h4>
            <ul className="space-y-3 text-sm text-[#C4ABA1]">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C85A27] shrink-0" />
                <span>{siteConfig.contactEmail}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C85A27] shrink-0" />
                <span>{siteConfig.contactPhone}</span>
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(
                    siteConfig.whatsAppDefaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-xs font-bold hover:bg-emerald-900 transition-colors shadow-xs"
                >
                  <span>Order via WhatsApp (₹179)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3B1A11] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9C8278]">
          <p>© {new Date().getFullYear()} Lunch Bag. All rights reserved. Hyderabad, Telangana.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Delivery</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Clean Kitchen Audit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
