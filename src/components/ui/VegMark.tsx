import React from "react";

interface VegMarkProps {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function VegMark({ size = "md", showLabel = false, className = "" }: VegMarkProps) {
  const boxSizes = {
    sm: "w-3.5 h-3.5 border-[1.5px] p-[1.5px]",
    md: "w-4.5 h-4.5 border-2 p-[2px]",
    lg: "w-6 h-6 border-2 p-[3px]",
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 ${className}`}
      title="100% Pure Vegetarian"
    >
      <div
        className={`${boxSizes[size]} border-green-600 rounded-sm flex items-center justify-center bg-white shadow-xs`}
        aria-label="Pure Vegetarian Mark"
      >
        <div className={`${dotSizes[size]} rounded-full bg-green-600`} />
      </div>
      {showLabel && (
        <span className="text-xs font-semibold text-green-700 tracking-wide uppercase">
          100% Pure Veg
        </span>
      )}
    </div>
  );
}
