"use client";

import React, { useState, useEffect } from "react";
import { Timer, Zap } from "lucide-react";

export function SpeedTicker() {
  const [seconds, setSeconds] = useState(599); // 09:59

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 599));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;
  const timeFormatted = `${String(minutes).padStart(2, "0")}:${String(
    remainingSecs
  ).padStart(2, "0")}`;

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/70 shadow-xs">
      <div className="flex items-center gap-1.5 text-brand-red font-bold text-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
        </span>
        <Timer className="w-3.5 h-3.5" />
        <span className="font-mono text-sm tracking-tight font-black">{timeFormatted}</span>
      </div>
      <span className="w-1 h-1 rounded-full bg-red-300" />
      <span className="text-[11px] font-semibold text-neutral-600 flex items-center gap-1">
        <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
        Guaranteed under 10 mins to desk
      </span>
    </div>
  );
}
