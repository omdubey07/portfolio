import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/Container";
import { personalInfo } from "@/data/social";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  Download,
  Mail,
  ArrowLeft,
  ExternalLink,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  Trophy,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Om Dayashankar Dubey",
  description:
    "Official resume of Om Dayashankar Dubey. AI & Full-Stack Developer, Aspiring Data Analyst. BSc Computer Science student at University of Mumbai.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <Container size="narrow">
          {/* Top Bar: Navigation & Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-800/80">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-white mb-2 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Curriculum Vitae
              </h1>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-0.5">
                Official Resume &amp; Professional Credentials
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={personalInfo.resumeUrl}
                download="Om_Dubey_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all shadow-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-mono"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                <span>View Raw PDF</span>
              </a>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="flex items-center justify-between p-3.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Technical Roles, Internships &amp; Collaborations</span>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sky-400 hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Directly</span>
            </a>
          </div>

          {/* RESUME PAPER CONTAINER (Styled to look crisp, professional & clean) */}
          <div className="rounded-xl border border-zinc-700/60 bg-[#0f0f12] shadow-2xl p-6 sm:p-10 text-zinc-200 space-y-8">
            
            {/* RESUME HEADER */}
            <div className="text-center space-y-2 pb-6 border-b border-zinc-800">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white uppercase font-sans">
                OM DAYASHANKAR DUBEY
              </h2>
              <p className="text-xs sm:text-sm font-medium text-sky-400 tracking-wide font-mono">
                AI &amp; Full-Stack Developer | Aspiring Data Analyst
              </p>

              {/* Contact details line */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-400 font-mono pt-1">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  Mumbai, Maharashtra
                </span>
                <span>•</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-1 hover:text-white text-zinc-300 transition-colors"
                >
                  <Phone className="w-3 h-3 text-zinc-500" />
                  {personalInfo.phone}
                </a>
                <span>•</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1 hover:text-sky-300 text-sky-400 transition-colors"
                >
                  <Mail className="w-3 h-3 text-zinc-500" />
                  {personalInfo.email}
                </a>
              </div>

              {/* Social & Code links */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-400 font-mono pt-0.5">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 hover:underline"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/{personalInfo.linkedinUsername}</span>
                </a>
                <span>•</span>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 hover:underline"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/{personalInfo.githubUsername}</span>
                </a>
              </div>
            </div>

            {/* ABOUT */}
            <section className="space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold font-mono text-white uppercase tracking-wider pb-1 border-b border-zinc-800 flex items-center gap-2">
                <span>About</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed text-justify">
                Second-year B.Sc. Computer Science student at the University of Mumbai with a strong passion for
                software development, artificial intelligence, and data analysis. Built and deployed multiple AI-powered
                applications using Python, React, FastAPI, and generative AI APIs while continuously exploring modern
                technologies through self-driven projects and hackathons. Eager to contribute technical expertise,
                problem-solving ability, and a collaborative mindset to the Technical Team.
              </p>
            </section>

            {/* EDUCATION */}
            <section className="space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold font-mono text-white uppercase tracking-wider pb-1 border-b border-zinc-800 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>Education</span>
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white">
                  <span>Thakur Shyamnarayan Degree College, University of Mumbai</span>
                  <span className="font-mono text-xs text-sky-400 font-normal">Expected Graduation: 2028</span>
                </div>
                <div className="text-zinc-400 font-mono text-xs">
                  B.Sc. Computer Science | Semester: 3 | Class X: 83.40% | Class XII: 52.50%
                </div>
              </div>
            </section>

            {/* RELEVANT EXPERIENCE */}
            <section className="space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold font-mono text-white uppercase tracking-wider pb-1 border-b border-zinc-800 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-sky-400" />
                <span>Relevant Experience</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="font-semibold text-white">
                  Member, Computer Society of India (CSI)
                </div>
                <ul className="space-y-1 pl-4 text-zinc-300 list-disc marker:text-sky-400">
                  <li>Contributed to organizing and decorating technical events.</li>
                  <li>Built a dragon model from recycled materials demonstrating creativity and teamwork.</li>
                </ul>
              </div>
            </section>

            {/* PROJECTS */}
            <section className="space-y-3">
              <h3 className="text-xs sm:text-sm font-bold font-mono text-white uppercase tracking-wider pb-1 border-b border-zinc-800 flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Projects</span>
              </h3>
              <ul className="space-y-2.5 pl-4 text-xs sm:text-sm list-disc marker:text-sky-400">
                <li className="text-zinc-300">
                  <strong className="text-white">PlantScan Pro:</strong> Built a full-stack AI application using Python, FastAPI, React, TensorFlow and REST APIs for plant identification and care recommendations.
                </li>
                <li className="text-zinc-300">
                  <strong className="text-white">Mock Examiner:</strong> Developed an AI-powered exam generator using Python, Streamlit, Gemini 2.5 Flash API and PyPDF2 with session memory and PDF processing.
                </li>
                <li className="text-zinc-300">
                  <strong className="text-white">AI Second Brain (In Progress):</strong> Developing an AI-powered semantic document search and knowledge management system.
                </li>
              </ul>
            </section>

            {/* HACKATHONS */}
            <section className="space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold font-mono text-white uppercase tracking-wider pb-1 border-b border-zinc-800 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-sky-400" />
                <span>Hackathons</span>
              </h3>
              <ul className="space-y-1.5 pl-4 text-xs sm:text-sm list-disc marker:text-sky-400 text-zinc-300">
                <li>
                  <strong className="text-white">Summer Hacks 2026</strong> – 18th Place (AI Medical Assistant).
                </li>
                <li>
                  <strong className="text-white">Professional Hackathon, Dadar</strong> – 8th Place (AI Resume Identifier).
                </li>
              </ul>
            </section>

            {/* CERTIFICATIONS */}
            <section className="space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold font-mono text-white uppercase tracking-wider pb-1 border-b border-zinc-800 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400" />
                <span>Certifications</span>
              </h3>
              <div className="text-xs sm:text-sm text-zinc-300 flex flex-wrap items-center gap-2 font-mono">
                <span className="px-2.5 py-1 rounded bg-zinc-800/80 border border-zinc-700/60 text-zinc-200">
                  Deloitte Virtual Experience Program
                </span>
                <span>•</span>
                <span className="px-2.5 py-1 rounded bg-zinc-800/80 border border-zinc-700/60 text-zinc-200">
                  HackArena 2.0 Zonals
                </span>
                <span>•</span>
                <span className="px-2.5 py-1 rounded bg-zinc-800/80 border border-zinc-700/60 text-zinc-200">
                  CSI
                </span>
              </div>
            </section>

            {/* SKILLS */}
            <section className="space-y-3">
              <h3 className="text-xs sm:text-sm font-bold font-mono text-white uppercase tracking-wider pb-1 border-b border-zinc-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Skills</span>
              </h3>
              <ul className="space-y-2 pl-4 text-xs sm:text-sm list-disc marker:text-sky-400">
                <li className="text-zinc-300 leading-relaxed">
                  <strong className="text-white">Technical Skills:</strong> Python, JavaScript, HTML, CSS, FastAPI (Learning), Git, GitHub, Vercel, Render, Gemini AI, Claude, Cursor, MySQL (Learning), Problem Solving, Team Collaboration
                </li>
                <li className="text-zinc-300 leading-relaxed">
                  <strong className="text-white">Languages:</strong> English, Hindi, Marathi
                </li>
              </ul>
            </section>

          </div>

          {/* Download Action Callout Card at the bottom */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">Need a PDF copy for your records?</h4>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Download the exact single-page ATS-formatted PDF resume.
              </p>
            </div>
            <a
              href={personalInfo.resumeUrl}
              download="Om_Dubey_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
