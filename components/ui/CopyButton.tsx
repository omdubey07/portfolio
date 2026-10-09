"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
  label?: string;
  copiedLabel?: string;
  variant?: "ghost" | "badge" | "outline";
}

export function CopyButton({
  text,
  className,
  label = "Copy",
  copiedLabel = "Copied!",
  variant = "ghost",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const baseStyles = "inline-flex items-center gap-1.5 transition-all text-xs font-mono select-none cursor-pointer";
  
  const variantStyles = {
    ghost: "text-zinc-400 hover:text-white p-1 rounded hover:bg-zinc-800/80",
    badge: "px-2.5 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 hover:border-sky-500/40 text-zinc-300 hover:text-white",
    outline: "px-3 py-1.5 rounded-lg border border-zinc-700/80 hover:border-sky-400 text-zinc-300 hover:text-sky-300 bg-zinc-900/40",
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(baseStyles, variantStyles[variant], className)}
      title={`Copy "${text}" to clipboard`}
      aria-label={`Copy ${text}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400 animate-in zoom-in duration-150" />
          <span className="text-emerald-400 font-semibold">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200" />
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
}
