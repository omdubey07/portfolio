import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/social";
import { educationAndExperience } from "@/data/experience";
import { GithubIcon } from "@/components/ui/Icons";
import {
  Terminal,
  Code2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  BookOpen,
  Laptop,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Me & Engineering Journey",
  description:
    "Learn about Om Dubey's background as a BSc Computer Science student at University of Mumbai, engineering principles, and developer journey.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <Container size="narrow">
          <SectionHeading
            badge="Profile &amp; Philosophy"
            title="About Om Dubey"
            subtitle="Software developer, 3rd semester computer science student, and pragmatic system builder based in Mumbai, India."
          />

          {/* Quick Bio Section */}
          <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed mb-12">
            <p>
              Hi, I&apos;m <strong className="text-white font-semibold">Om Dubey</strong>. I am currently in my 3rd semester pursuing a <strong>Bachelor of Science in Computer Science</strong> at Thakur Shyamnarayan Degree College, affiliated with the <strong>University of Mumbai</strong>.
            </p>

            <p>
              My path into software development started with a simple belief: <em>software should solve concrete, unglamorous problems reliably</em>. Rather than building generic to-do apps or copying tutorial clones, I gravitate toward applied AI pipelines, document parsing systems, vector databases, and responsive full-stack architectures.
            </p>

            <p>
              I believe in <strong>proof of work</strong>. As an early-career developer, I don&apos;t pretend to have decades of enterprise legacy experience; instead, I demonstrate that I build seriously, understand what I write down to the network and schema boundaries, and improve quickly with every commit.
            </p>
          </div>

          {/* Core Focus Areas */}
          <div className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-mono mb-6 flex items-center gap-2">
              <span className="text-sky-400">01.</span>
              <span>Where I Spend My Time</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="default" className="p-6 border-zinc-800/80 space-y-2">
                <div className="font-mono text-sm font-bold text-sky-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span>AI &amp; RAG Systems</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Structuring deterministic outputs with Pydantic, tuning chunking strategies for ChromaDB vector embeddings, and building multimodal extraction pipelines.
                </p>
              </Card>

              <Card variant="default" className="p-6 border-zinc-800/80 space-y-2">
                <div className="font-mono text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <Laptop className="w-4 h-4" />
                  <span>Full-Stack Backends &amp; APIs</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Writing asynchronous REST services with FastAPI and Node.js, designing normalized SQL schemas in MySQL, and deploying microservices on Render and Vercel.
                </p>
              </Card>

              <Card variant="default" className="p-6 border-zinc-800/80 space-y-2">
                <div className="font-mono text-sm font-bold text-indigo-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Modern Responsive UI</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Building accessible, dark-mode first client interfaces with React, Next.js App Router, TypeScript, and Tailwind CSS.
                </p>
              </Card>

              <Card variant="default" className="p-6 border-zinc-800/80 space-y-2">
                <div className="font-mono text-sm font-bold text-amber-400 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Technical Community &amp; CSI</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Serving on the Computer Society of India student branch committee, coordinating student hackathons, and running Git/GitHub peer workshops.
                </p>
              </Card>
            </div>
          </div>

          {/* Academic & Community Timeline Summary */}
          <div className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-mono mb-6 flex items-center gap-2">
              <span className="text-sky-400">02.</span>
              <span>Academic &amp; Leadership Track</span>
            </h2>

            <div className="space-y-4">
              {educationAndExperience.map((item) => (
                <Card key={item.id} variant="default" className="p-6 border-zinc-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-mono font-bold text-white text-base">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-sky-400 mb-3">
                    {item.organization} · {item.location}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  {item.badges && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.badges.map((b) => (
                        <Badge key={b} variant="muted" size="sm">
                          {b}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center space-y-4">
            <h3 className="text-xl font-bold text-white">
              Interested in collaborating or discussing an opportunity?
            </h3>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              I am available for software engineering internships and junior developer roles.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button href={`mailto:${personalInfo.email}`} variant="primary" size="md">
                Send an Email
              </Button>
              <Button href={personalInfo.resumeUrl} variant="secondary" size="md" isExternal>
                Download Resume
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
