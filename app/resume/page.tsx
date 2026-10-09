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
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { educationAndExperience } from "@/data/experience";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { FileText, Download, Mail, MapPin, ExternalLink, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume & Professional Profile",
  description:
    "Curriculum Vitae of Om Dubey. BSc Computer Science student at University of Mumbai specializing in Python, FastAPI, React, Next.js, and AI systems.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <Container size="narrow">
          {/* Header & Download Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 mb-10 border-b border-zinc-800">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-white mb-3 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-sm sm:text-base font-mono text-sky-400 mt-1">
                {personalInfo.role} · {personalInfo.location}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href={personalInfo.resumeUrl}
                variant="primary"
                size="md"
                isExternal
                icon={<Download className="w-4 h-4" />}
              >
                Download PDF Resume
              </Button>
              <Button
                href={`mailto:${personalInfo.email}`}
                variant="outline"
                size="md"
                icon={<Mail className="w-4 h-4" />}
              >
                Email
              </Button>
            </div>
          </div>

          {/* Quick Contact & Links Header */}
          <Card variant="subtle" className="p-4 mb-10 text-xs font-mono text-zinc-400 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-zinc-200">{personalInfo.email}</span>
              <span>·</span>
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white text-sky-400">
                github.com/{personalInfo.githubUsername}
              </a>
              <span>·</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white text-sky-400">
                linkedin.com/in/om-dubey
              </a>
            </div>
            <div className="text-emerald-400 font-semibold">
              ● {personalInfo.status}
            </div>
          </Card>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-4 pb-2 border-b border-zinc-800">
              Education
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#121215] border border-zinc-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-bold text-white text-base">
                    Bachelor of Science in Computer Science (BSc CS)
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">2024 — 2028 (3rd Semester)</span>
                </div>
                <div className="text-xs font-mono text-sky-400 mb-2">
                  Thakur Shyamnarayan Degree College, University of Mumbai · Mumbai, India
                </div>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Coursework: Data Structures &amp; Algorithms, Database Management Systems (SQL), Operating Systems, Computer Networks, Software Engineering, Python Programming.
                </p>
              </div>
            </div>
          </section>

          {/* Core Technical Skills */}
          <section className="mb-10">
            <h2 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-4 pb-2 border-b border-zinc-800">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="p-3.5 rounded-lg bg-[#121215] border border-zinc-800/80">
                  <div className="font-mono font-bold text-sky-400 text-xs uppercase mb-1.5">
                    {cat.title}
                  </div>
                  <div className="text-zinc-300">
                    {cat.skills.map((s) => s.name).join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-10">
            <h2 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-4 pb-2 border-b border-zinc-800">
              Featured Software Engineering Projects
            </h2>
            <div className="space-y-6">
              {projects.map((proj) => (
                <div key={proj.slug} className="p-5 rounded-lg bg-[#121215] border border-zinc-800/80 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white text-base">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500">|</span>
                      <span className="text-xs font-mono text-sky-400">{proj.category}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-1">
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-1">
                          <span>GitHub</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-zinc-400">
                    {proj.technologies.join(" · ")}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {proj.shortDescription}
                  </p>

                  <ul className="space-y-1 text-xs sm:text-sm text-zinc-400 pl-4 list-disc">
                    <li>{proj.caseStudy.engineeringDecisions[0]?.decision}</li>
                    <li>{proj.caseStudy.results[0]}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Community & Leadership */}
          <section className="mb-12">
            <h2 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-4 pb-2 border-b border-zinc-800">
              Leadership &amp; Community
            </h2>
            <div className="space-y-3">
              {educationAndExperience
                .filter((item) => item.type !== "education")
                .map((item) => (
                  <div key={item.id} className="p-4 rounded-lg bg-[#121215] border border-zinc-800/80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-bold text-white text-sm">
                        {item.title} — {item.organization}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500">{item.period}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
