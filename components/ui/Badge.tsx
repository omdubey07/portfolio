import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "muted" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-zinc-800/80 text-zinc-300 border-zinc-700/60",
    accent: "bg-sky-500/10 text-sky-300 border-sky-500/30",
    success: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    muted: "bg-zinc-900/60 text-zinc-400 border-zinc-800",
    outline: "bg-transparent text-zinc-300 border-zinc-700 hover:border-zinc-500",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs sm:text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md font-mono border transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
