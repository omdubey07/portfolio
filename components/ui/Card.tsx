import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "subtle" | "interactive";
  glow?: boolean;
}

export function Card({
  children,
  variant = "default",
  glow = false,
  className,
  ...props
}: CardProps) {
  const variantClasses = {
    default: "bg-[#121215] border border-zinc-800/80 text-zinc-100",
    subtle: "bg-[#16161c]/50 border border-zinc-800/50 text-zinc-100",
    interactive:
      "bg-[#121215] border border-zinc-800/80 text-zinc-100 transition-all duration-200 hover:border-zinc-700 hover:bg-[#16161b] hover:translate-y-[-2px]",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-6 relative overflow-hidden",
        variantClasses[variant],
        glow && "glow-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
