import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { GithubIcon } from "@/components/ui/Icons";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Cpu,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  GitBranch,
  Compass,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study & Architecture`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const { caseStudy } = project;

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20">
        <Container size="narrow">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Featured Projects</span>
            </Link>
          </div>

          {/* Project Hero Header */}
          <div className="mb-12 pb-10 border-b border-zinc-800/80">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <Badge variant="accent" size="md">
                {project.category}
              </Badge>
              <span className="text-zinc-600 font-mono text-xs">/</span>
              <span className="font-mono text-xs text-zinc-400">
                Project #{String(projectIndex + 1).padStart(2, "0")}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl font-mono text-sky-400/90 mb-6 leading-relaxed">
              {project.tagline}
            </p>

            <p className="text-base text-zinc-300 leading-relaxed mb-8">
              {caseStudy.overview}
            </p>

            {/* Action Links & Metrics */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-800/60">
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="primary"
                    size="md"
                    isExternal
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    View Live Application
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="outline"
                    size="md"
                    isExternal
                    icon={<GithubIcon className="w-4 h-4" />}
                  >
                    Inspect Source Code
                  </Button>
                )}
              </div>

              {project.metrics && (
                <div className="flex flex-wrap gap-3">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono"
                    >
                      <span className="text-zinc-500">{m.label}: </span>
                      <span className="text-zinc-200 font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Section 1: Problem & Purpose */}
          <div className="space-y-12 mb-16">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-mono mb-4 flex items-center gap-2">
                <span className="text-sky-400">01.</span>
                <span>The Problem &amp; Motivation</span>
              </h2>
              <Card variant="default" className="p-6 sm:p-7 border-zinc-800/80 space-y-4">
                <div>
                  <h3 className="text-xs font-mono uppercase text-zinc-400 mb-1">
                    Problem Statement
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/60">
                  <h3 className="text-xs font-mono uppercase text-sky-400 mb-1">
                    Why I Built It
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {caseStudy.whyBuilt}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/60">
                  <h3 className="text-xs font-mono uppercase text-zinc-400 mb-1">
                    My Role
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {caseStudy.role}
                  </p>
                </div>
              </Card>
            </section>

            {/* Section 2: Architecture & Execution Flow */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-mono mb-4 flex items-center gap-2">
                <span className="text-sky-400">02.</span>
                <span>System Architecture &amp; Execution Pipeline</span>
              </h2>
              <Card variant="default" className="p-6 sm:p-7 border-zinc-800/80 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase text-zinc-400 mb-2">
                    High-Level Pipeline
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {caseStudy.architecture.summary}
                  </p>
                </div>

                {caseStudy.architecture.diagramText && (
                  <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs sm:text-sm text-sky-300 overflow-x-auto">
                    <div className="text-zinc-500 text-[11px] mb-1.5 uppercase">
                      Architecture Flow:
                    </div>
                    <code>{caseStudy.architecture.diagramText}</code>
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono uppercase text-zinc-400 mb-3">
                    Step-by-Step Execution Sequence
                  </div>
                  <ol className="space-y-2.5">
                    {caseStudy.architecture.flow.map((step, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-zinc-300 p-3 rounded-md bg-zinc-900/60 border border-zinc-800/40"
                      >
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </Card>
            </section>

            {/* Section 3: Tech Stack Breakdown */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-mono mb-4 flex items-center gap-2">
                <span className="text-sky-400">03.</span>
                <span>Technology Stack by Layer</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.techStack.map((layer, idx) => (
                  <Card key={idx} variant="default" className="p-5 border-zinc-800/80">
                    <div className="text-xs font-mono uppercase text-sky-400 mb-3 font-semibold">
                      {layer.category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <Badge key={item} variant="default" size="sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 4: Key Engineering Decisions */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-mono mb-4 flex items-center gap-2">
                <span className="text-sky-400">04.</span>
                <span>Key Engineering Decisions &amp; Trade-offs</span>
              </h2>
              <div className="space-y-4">
                {caseStudy.engineeringDecisions.map((dec, idx) => (
                  <Card key={idx} variant="default" className="p-6 border-zinc-800/80 space-y-3">
                    <div className="text-base font-bold text-white font-mono flex items-start gap-2">
                      <span className="text-sky-400 mt-0.5">▸</span>
                      <span>{dec.decision}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-300 pl-5">
                      <strong className="text-zinc-200">Rationale:</strong> {dec.rationale}
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-400 pl-5 p-2.5 rounded-md bg-zinc-950/60 border border-zinc-800/50">
                      <strong className="text-amber-300 font-mono text-xs uppercase">Trade-off:</strong>{" "}
                      {dec.tradeOff}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 5: Challenges & Lessons (Post-Mortem) */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-mono mb-4 flex items-center gap-2">
                <span className="text-sky-400">05.</span>
                <span>Challenges, Mistakes &amp; What I Learned</span>
              </h2>
              <div className="space-y-4">
                {caseStudy.challenges.map((ch, idx) => (
                  <Card key={idx} variant="default" className="p-6 border-zinc-800/80 space-y-2">
                    <div className="text-xs font-mono uppercase text-amber-400 font-semibold flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Challenge #{idx + 1}: {ch.challenge}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-6">
                      <strong className="text-zinc-200">Solution:</strong> {ch.solution}
                    </p>
                  </Card>
                ))}

                {caseStudy.whatWentWrong && caseStudy.whatWentWrong.length > 0 && (
                  <Card variant="default" className="p-6 border-zinc-800/80 space-y-2">
                    <div className="text-xs font-mono uppercase text-red-400 font-semibold flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>What Went Wrong (Post-Mortem)</span>
                    </div>
                    <ul className="space-y-2 pl-6 text-xs sm:text-sm text-zinc-300">
                      {caseStudy.whatWentWrong.map((w, idx) => (
                        <li key={idx} className="list-disc">
                          {w}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {caseStudy.whatILearned && (
                  <Card variant="default" className="p-6 border-zinc-800/80 space-y-2">
                    <div className="text-xs font-mono uppercase text-emerald-400 font-semibold flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      <span>Core Technical Takeaways</span>
                    </div>
                    <ul className="space-y-2 pl-6 text-xs sm:text-sm text-zinc-300">
                      {caseStudy.whatILearned.map((l, idx) => (
                        <li key={idx} className="list-disc">
                          {l}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>
            </section>

            {/* Section 6: Results & Future Improvements */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-mono mb-4 flex items-center gap-2">
                <span className="text-sky-400">06.</span>
                <span>Verified Results &amp; Roadmap</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card variant="default" className="p-6 border-zinc-800/80">
                  <div className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Delivered Outcomes</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {caseStudy.results.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">✓</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card variant="default" className="p-6 border-zinc-800/80">
                  <div className="text-xs font-mono uppercase text-sky-400 font-semibold mb-3 flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    <span>Future Improvements</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {caseStudy.futureImprovements.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-400 font-mono">▸</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </section>
          </div>

          {/* Bottom Navigation: Next Project */}
          <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              ← Back to All Projects
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>Next Project: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
