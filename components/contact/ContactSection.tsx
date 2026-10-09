"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { personalInfo } from "@/data/social";
import { Mail, FileText, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-[#09090b]">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            badge="Get In Touch"
            title="Let's Build Something Useful Together"
            subtitle="I am actively seeking software engineering internships, technical collaborations, and developer roles. My inbox is always open."
            align="center"
          />

          {/* Contact Methods Grid with Spotlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
            <SpotlightCard className="p-5 border-zinc-800/80 hover:border-sky-500/40 hover:bg-[#16161c] transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <CopyButton text={personalInfo.email} variant="ghost" label="" />
                </div>
                <div className="font-mono text-xs uppercase text-zinc-400 mb-1">
                  Direct Email
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-zinc-200 truncate group-hover:text-sky-300 block hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>
            </SpotlightCard>

           <a
              href={personalInfo.linkedinUrl}
              target="_blank"
               rel="noopener noreferrer"
              className="block group focus-visible:outline-sky-400 rounded-xl"
            >
              <SpotlightCard className="p-5 h-full border-zinc-800/80 hover:border-sky-500/40 hover:bg-[#16161c] transition-all flex flex-col justify-between">
                <div>
                  <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit mb-3 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs uppercase text-zinc-400 mb-1">
                    Professional Network
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-zinc-200 truncate group-hover:text-sky-300 flex items-center justify-between">
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                  </div>
                </div>
              </SpotlightCard>
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group focus-visible:outline-sky-400 rounded-xl"
            >
              <SpotlightCard className="p-5 h-full border-zinc-800/80 hover:border-sky-500/40 hover:bg-[#16161c] transition-all flex flex-col justify-between">
                <div>
                  <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit mb-3 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs uppercase text-zinc-400 mb-1">
                    Code &amp; Repos
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-zinc-200 truncate group-hover:text-sky-300 flex items-center justify-between">
                    <span>GitHub / omdubey</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                  </div>
                </div>
              </SpotlightCard>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group focus-visible:outline-sky-400 rounded-xl"
            >
              <SpotlightCard className="p-5 h-full border-zinc-800/80 hover:border-sky-500/40 hover:bg-[#16161c] transition-all flex flex-col justify-between">
                <div>
                  <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit mb-3 group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs uppercase text-zinc-400 mb-1">
                    Recruiter Package
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-zinc-200 truncate group-hover:text-sky-300 flex items-center justify-between">
                    <span>Resume (PDF)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                  </div>
                </div>
              </SpotlightCard>
            </a>
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Button
              href={`mailto:${personalInfo.email}?subject=Software%20Developer%20Opportunity%20-%20Om%20Dubey`}
              variant="primary"
              size="lg"
              icon={<Send className="w-4 h-4" />}
            >
              Send an Email
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              variant="secondary"
              size="lg"
              isExternal
              icon={<FileText className="w-4 h-4" />}
            >
              Download PDF Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
} <section id="contact" className="py-20 sm:py-28">
  <Container size="narrow">

    <SectionHeading
      badge="Contact"
      title="Get In Touch"
      subtitle="Have a project, opportunity, or idea? Send me a message."
    />

    <form className="space-y-5">

      <div>
        <label className="block text-sm text-zinc-300 mb-2">
          Your Name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full rounded-lg bg-[#121215] border border-zinc-800 px-4 py-3 text-white outline-none focus:border-sky-400"
        />
      </div>

      <div>
        <label className="block text-sm text-zinc-300 mb-2">
          Your Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full rounded-lg bg-[#121215] border border-zinc-800 px-4 py-3 text-white outline-none focus:border-sky-400"
        />
      </div>

      <div>
        <label className="block text-sm text-zinc-300 mb-2">
          Your Message
        </label>

        <textarea
          name="message"
          rows={6}
          placeholder="Write your message..."
          className="w-full rounded-lg bg-[#121215] border border-zinc-800 px-4 py-3 text-white outline-none focus:border-sky-400"
        />
      </div>

      <Button type="submit" variant="primary">
        Send Message
      </Button>

    </form>

  </Container>
</section>
