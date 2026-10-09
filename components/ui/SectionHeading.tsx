import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-3xl",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs font-medium uppercase tracking-wider mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
