import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ProofStrip } from "@/components/proof-strip/ProofStrip";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { HowIBuild } from "@/components/how-i-build/HowIBuild";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { AchievementsSection } from "@/components/achievements/AchievementsSection";
import { GitHubSection } from "@/components/github/GitHubSection";
import { WritingPreview } from "@/components/writing/WritingPreview";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ProjectGrid />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
