"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/social";
import { projects } from "@/data/projects";
import { GitBranch, ArrowUpRight, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function GitHubSection() {
  return (
    <section id="github" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-[#09090b]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            badge="Open Source"
            title="GitHub &amp; Code Repositories"
            subtitle="Explore real, inspectable codebases. No hidden proprietary fluff—review the commits, schema definitions, and implementation details."
            className="mb-0"
          />

          <Button
            href={personalInfo.githubUrl}
            variant="outline"
            size="sm"
            isExternal
            icon={<ArrowUpRight className="w-4 h-4" />}
            className="self-start md:self-auto font-mono text-xs"
          >
            Visit github.com/{personalInfo.githubUsername}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.map((project) => (
            <SpotlightCard
              key={project.slug}
              className="p-6 border-zinc-800/80 hover:border-sky-500/40 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-zinc-100 group-hover:text-sky-400 transition-colors">
                    <FolderGit2 className="w-4 h-4 text-sky-400" />
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline truncate focus-visible:outline-sky-400 rounded"
                    >
                      {personalInfo.githubUsername}/{project.slug}
                    </a>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors p-1 rounded hover:bg-zinc-800"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                  <span>{project.technologies[0]} / {project.technologies[1]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5 text-zinc-500" />
                    <span>main</span>
                  </span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <SpotlightCard
          spotlightColor="rgba(56, 189, 248, 0.1)"
          className="p-5 border-zinc-800 text-center sm:flex sm:items-center sm:justify-between sm:text-left gap-4 bg-zinc-900/60"
        >
          <div className="text-xs sm:text-sm text-zinc-400 mb-3 sm:mb-0">
            <span className="text-zinc-200 font-semibold font-mono">Public Learning &amp; Version Control:</span>{" "}
            All active repositories follow clean git commit standards, modular directory structures, and type safety.
          </div>
          <Button
            href={personalInfo.githubUrl}
            variant="secondary"
            size="sm"
            isExternal
            icon={<GithubIcon className="w-3.5 h-3.5" />}
            className="font-mono text-xs shrink-0"
          >
            Follow on GitHub
          </Button>
        </SpotlightCard>
      </Container>
    </section>
  );
}
