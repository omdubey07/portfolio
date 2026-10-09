"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { ArrowRight, Terminal, Target, Sparkles, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-[#09090b]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              badge="Background"
              title="Building Practical Products from Mumbai"
              subtitle="An early-career software developer focused on pragmatic engineering, clean architecture, and verifiable proof of work."
              className="mb-8"
            />

            <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
              <p>
                I am a 3rd semester <strong>BSc Computer Science</strong> student at{" "}
                <span className="text-white font-medium">
                  Thakur Shyamnarayan Degree College (University of Mumbai)
                </span>
                . My focus is on turning real-world problems into functional, production-ready software systems rather than chasing superficial trends.
              </p>

              <p>
                I specialize in combining modern backend frameworks (<strong>FastAPI, Python, Node.js</strong>) with component-driven frontend architecture (<strong>React, Next.js, TypeScript, Tailwind</strong>) and retrieval-augmented generation (<strong>RAG, ChromaDB, multimodal LLMs</strong>).
              </p>

              <p>
                Whether it is building an AI engine that safely extracts blood test biomarkers without hallucinating (HealthOS) or indexing collegiate lecture notes for semantic citation search (AI Second Brain), my priority is always <em>correctness, observable failure modes, and user clarity</em>.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Read Full Developer Story
              </Button>
              <Button
                href="/#contact"
                variant="outline"
                size="md"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.15)"
              className="p-6 border-zinc-800/80 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-base font-bold text-white">
                  Engineering Principles
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-mono mt-0.5">▸</span>
                  <span><strong>Proof of work over claims:</strong> Always back technical statements with public code and case studies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-mono mt-0.5">▸</span>
                  <span><strong>Deterministic AI outputs:</strong> Enforce strict JSON schema validation to eliminate UI crashes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-mono mt-0.5">▸</span>
                  <span><strong>Fast, accessible interfaces:</strong> Clean dark themes, responsive typography, and sub-second load times.</span>
                </li>
              </ul>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.12)"
              className="p-6 border-zinc-800/80 font-mono text-xs text-zinc-400 space-y-2.5"
            >
              <div className="text-zinc-300 font-bold flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>om@dubey-dev ~ % whoami</span>
                </div>
                <CopyButton
                  text="om@dubey-dev: BSc Computer Science @ University of Mumbai, Full-Stack & AI Developer"
                  variant="ghost"
                  label=""
                />
              </div>
              <div className="text-zinc-400 pl-4 border-l border-zinc-800 space-y-1.5">
                <div>location: &quot;Mumbai, MH, India&quot;</div>
                <div>education: &quot;BSc Computer Science (2023–2026)&quot;</div>
                <div>interests: [&quot;AI Systems&quot;, &quot;Full-Stack&quot;, &quot;RAG&quot;, &quot;Databases&quot;]</div>
                <div>status: <span className="text-emerald-400">&quot;Looking for Software Developer Internships&quot;</span></div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
