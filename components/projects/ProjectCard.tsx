"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Activity, CheckCircle2, Layers, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [showArchitecture, setShowArchitecture] = useState(false);
  const paddedIndex = String(index + 1).padStart(2, "0");

  return (
    <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between border-zinc-800/80 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 group">
      <div>
        {/* Top Header: Index + Category + Metrics */}
        <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl sm:text-2xl font-bold text-sky-400 group-hover:scale-105 transition-transform duration-200 inline-block">
              {paddedIndex}
            </span>
            <Badge variant="accent" size="sm">
              {project.category}
            </Badge>
          </div>

          {project.metrics && project.metrics[0] && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900/90 px-2.5 py-1 rounded-md border border-zinc-800/90 shadow-sm">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>{project.metrics[0].label}:</span>
              <span className="text-zinc-200 font-semibold">{project.metrics[0].value}</span>
            </div>
          )}
        </div>

        {/* Title and Tagline */}
        <div className="mb-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors flex items-center justify-between">
            <Link href={`/projects/${project.slug}`} className="hover:underline focus-visible:outline-sky-400 rounded">
              {project.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm font-mono text-sky-400/90 mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Engineering Breakdown: Problem -> Solution -> Core Result */}
        <div className="space-y-2.5 mb-6 p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-xs sm:text-sm shadow-inner">
          <div className="flex items-start gap-2">
            <span className="font-mono font-semibold text-zinc-400 shrink-0 uppercase text-[11px] mt-0.5">
              Problem:
            </span>
            <span className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {project.caseStudy.problem}
            </span>
          </div>
          <div className="flex items-start gap-2 pt-2 border-t border-zinc-800/50">
            <span className="font-mono font-semibold text-sky-400 shrink-0 uppercase text-[11px] mt-0.5">
              Solution:
            </span>
            <span className="text-zinc-200 text-xs sm:text-sm leading-relaxed">
              {project.caseStudy.architecture.summary}
            </span>
          </div>
          {project.caseStudy.results && project.caseStudy.results[0] && (
            <div className="flex items-start gap-2 pt-2 border-t border-zinc-800/50">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                <strong className="text-zinc-200">Outcome:</strong> {project.caseStudy.results[0]}
              </span>
            </div>
          )}

          {/* Quick toggle for key architecture pipeline flow */}
          {project.caseStudy.architecture.flow && project.caseStudy.architecture.flow.length > 0 && (
            <div className="pt-2 border-t border-zinc-800/50">
              <button
                type="button"
                onClick={() => setShowArchitecture(!showArchitecture)}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-sky-300 transition-colors cursor-pointer"
              >
                <Layers className="w-3 h-3 text-sky-400" />
                <span>{showArchitecture ? "Hide System Flow" : "Inspect System Pipeline Flow"}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showArchitecture ? "rotate-180" : ""}`} />
              </button>

              {showArchitecture && (
                <div className="mt-2.5 pt-2 border-t border-zinc-800/60 space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                  {project.caseStudy.architecture.flow.map((step, sIdx) => (
                    <div key={sIdx} className="text-xs flex items-start gap-1.5">
                      <span className="text-sky-400 font-mono">›</span>
                      <span className="text-zinc-300 text-xs">{step}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default" size="sm" className="hover:border-zinc-600 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Links: Case Study, Live Demo, GitHub */}
      <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group/link"
        >
          <span>Read Technical Case Study</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1.5 duration-200" />
        </Link>

        <div className="flex items-center gap-2.5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 px-3 py-1.5 rounded-md border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-105 active:scale-95"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 px-3 py-1.5 rounded-md border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-105 active:scale-95"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
