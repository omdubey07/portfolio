"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowDown, FileText, MapPin, Sparkles, Terminal, Copy, Check, Code, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { personalInfo } from "@/data/social";
import { cn } from "@/lib/utils";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"terminal" | "architecture">("terminal");

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden tech-grid-bg border-b border-zinc-800/60">
      {/* Subtle background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[200px] bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            {/* Status Badge & Location Strip */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{personalInfo.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs sm:text-sm tracking-wider uppercase mb-3">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Hello, I&apos;m Om Dubey</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Software Developer building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300">
                practical products
              </span>{" "}
              with AI, web &amp; data.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              3rd semester BSc Computer Science student at University of Mumbai. Building production-grade software with deterministic AI pipelines, high-throughput REST APIs, and modern responsive frontends.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Button href="/projects">
                View Projects
              </Button>

              <Button href={personalInfo.githubUrl} variant="outline" isExternal>
                GitHub Code
              </Button>

              <Button href="/resume" variant="secondary">
                Resume
              </Button>
            </div>
            {/* Fast copyable contact strip */}
            <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
              <span className="text-zinc-500">Quick contact:</span>
              <CopyButton
                text={personalInfo.email}
                label={personalInfo.email}
                variant="badge"
              />
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative bg-zinc-900">
              <Image
                src="/image/om.jpeg"
                alt="Om Dubey"
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
