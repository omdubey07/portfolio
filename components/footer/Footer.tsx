import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { personalInfo } from "@/data/social";
import { ArrowUpRight, Heart, Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#060608] border-t border-zinc-800/80 text-xs font-mono text-zinc-400">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          <div>
            <div className="flex items-center gap-2 font-bold text-zinc-100 text-sm mb-1">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>OM DUBEY</span>
              <span className="text-zinc-600 font-normal">/ Software Developer</span>
            </div>
            <p className="text-zinc-400 text-xs font-sans">
              Building practical products with AI, web technologies, and data systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/#how-i-build" className="hover:text-white transition-colors">
              How I Build
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/writing" className="hover:text-white transition-colors">
              Writing
            </Link>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-0.5"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-0.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            &copy; {currentYear} Om Dubey. All rights reserved. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Verified proof-of-work portfolio</span>
            <span>·</span>
            <span>Mumbai, India</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
