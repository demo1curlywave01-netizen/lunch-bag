"use client";

import React from "react";
import { siteConfig } from "@/content/site-config";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(
    siteConfig.whatsAppDefaultMessage
  )}`;

  return (
    <aside aria-label="Quick support via WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
        aria-label="Order or chat with Lunch Bag on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full animate-ping" />
        </div>
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Quick Order on WhatsApp
        </span>
      </a>
    </aside>
  );
}
