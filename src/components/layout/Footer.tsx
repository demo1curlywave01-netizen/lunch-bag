import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Logo } from "@/components/ui/Logo";
import { VegMark } from "@/components/ui/VegMark";
import { ShieldCheck, Clock, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top reassurance banner */}
        <div className="bg-neutral-900 rounded-3xl p-6 sm:p-8 mb-14 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <VegMark size="lg" />
            <div>
              <h3 className="text-white font-display text-lg font-bold">
                100% Pure Vegetarian Kitchen Promise
              </h3>
              <p className="text-sm text-neutral-400">
                Separated cooking facility • Zero palm oil • Zero synthetic food color • Fresh homestyle daily
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-red" />
              <span>Under 10 Mins to Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Daily Hygiene Audited</span>
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block p-1 bg-white rounded-2xl">
              <Logo size="md" />
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Wholesome, pure-vegetarian homemade office-lunch delivery. We pre-stage hot, nourishing thalis near your corporate hub so lunch reaches your desk in under 10 minutes.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>{siteConfig.fssaiNumber}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Weekly Rotating Menu
                </Link>
              </li>
              <li>
                <Link href="/passes" className="hover:text-white transition-colors">
                  Lunch Passes & Pricing
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

          {/* Hub Locations */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Active Hubs
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {siteConfig.deliveryHubs.map((hub) => (
                <li key={hub} className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0 mt-1" />
                  <span>{hub}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact & Help
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>{siteConfig.contactEmail}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <span>{siteConfig.contactPhone}</span>
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(
                    siteConfig.whatsAppDefaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-green-950/60 border border-green-800 text-green-400 text-xs font-semibold hover:bg-green-900/60 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Lunch Bag. All rights reserved. Made with love for honest home cooking.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Delivery</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">Hygienic Kitchen Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
