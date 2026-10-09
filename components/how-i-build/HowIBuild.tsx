"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  HelpCircle,
  FileCode,
  Hammer,
  CheckCheck,
  Rocket,
  RefreshCw,
} from "lucide-react";

export function HowIBuild() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      icon: <HelpCircle className="w-5 h-5 text-sky-400" />,
      tagline: "Requirements & Failure Modes",
      description:
        "Deconstruct the core problem before writing a line of code. Define explicit schema contracts, boundary limits, latency budgets, and security considerations.",
    },
    {
      number: "02",
      title: "Design",
      icon: <FileCode className="w-5 h-5 text-indigo-400" />,
      tagline: "Architecture & Data Schemas",
      description:
        "Draft data pipelines, relational/vector data schemas, REST API contracts, and component state trees. Prioritize simplicity over premature abstraction.",
    },
    {
      number: "03",
      title: "Build",
      icon: <Hammer className="w-5 h-5 text-emerald-400" />,
      tagline: "Type-Safe Implementation",
      description:
        "Implement clean TypeScript and Python code. Enforce strict JSON schema validation, asynchronous execution, and predictable error handling.",
    },
    {
      number: "04",
      title: "Test",
      icon: <CheckCheck className="w-5 h-5 text-amber-400" />,
      tagline: "Edge Cases & Validation",
      description:
        "Test with real, messy inputs (corrupt PDFs, low-light photos, network drops). Verify accessibility, responsive layouts, and zero console warnings.",
    },
    {
      number: "05",
      title: "Ship",
      icon: <Rocket className="w-5 h-5 text-sky-400" />,
      tagline: "Production Deployment",
      description:
        "Deploy to Vercel and Render with optimized static assets, cached routes, automated builds, and verified HTTPS and metadata previews.",
    },
    {
      number: "06",
      title: "Improve",
      icon: <RefreshCw className="w-5 h-5 text-purple-400" />,
      tagline: "Telemetry & Iteration",
      description:
        "Observe token costs, latency bottlenecks, and real user feedback to refine prompt chains, optimize SQL queries, and improve UI ergonomics.",
    },
  ];

  return (
    <section id="how-i-build" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-[#0c0c0f]">
      <Container>
        <SectionHeading
          badge="Engineering Philosophy"
          title="How I Build Software"
          subtitle="A disciplined, engineering-first approach that treats software as an evolving system rather than a one-off prototype."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <SpotlightCard
              key={step.number}
              className="p-6 border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono">
                    {step.title}
                  </h3>
                </div>
                <span className="font-mono text-sm font-bold text-zinc-500">
                  {step.number}
                </span>
              </div>

              <div className="text-xs font-mono text-sky-400/90 mb-2 font-medium">
                {step.tagline}
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
