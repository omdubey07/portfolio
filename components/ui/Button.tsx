import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold shadow-sm shadow-sky-500/20 active:translate-y-px",
    secondary:
      "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 active:translate-y-px",
    outline:
      "bg-transparent hover:bg-zinc-800/60 text-zinc-200 border border-zinc-700 hover:border-zinc-500 active:translate-y-px",
    ghost:
      "bg-transparent hover:bg-zinc-800/40 text-zinc-400 hover:text-zinc-100",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs sm:text-sm rounded-md gap-1.5",
    md: "px-4 py-2 text-sm rounded-lg gap-2",
    lg: "px-5 py-2.5 text-base rounded-lg gap-2.5",
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
}
