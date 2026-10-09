"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { personalInfo } from "@/data/social";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Resume", href: "/resume" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change & handle body scroll lock
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-md shadow-black/50"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-zinc-100 hover:text-white transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform duration-200" />
            <span className="font-mono text-base sm:text-lg tracking-tight">OM DUBEY</span>
            <span className="hidden sm:inline-block text-xs font-mono font-normal text-zinc-500 border-l border-zinc-800 pl-2.5">
              software engineer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "text-sky-400 bg-sky-500/10 font-semibold"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Links (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium font-mono text-zinc-200 bg-zinc-800/80 hover:bg-zinc-700/80 hover:text-white border border-zinc-700/60 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              Resume
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium font-mono text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-mono text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-md"
            >
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-lg focus-visible:outline-2 focus-visible:outline-sky-400 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 animate-in zoom-in-75 duration-150" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-[#09090b]/98 backdrop-blur-2xl border-t border-zinc-800/80 px-6 py-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200 flex flex-col justify-between">
            <nav className="flex flex-col space-y-2">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Navigation
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800/60 rounded-xl transition-colors border border-transparent hover:border-zinc-800"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-6 border-t border-zinc-800/80 space-y-4">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Connect &amp; Profiles
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-xs font-mono text-sky-400"
                >
                  <span>Email Om</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
