import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Engineering Case Studies",
  description:
    "Explore full-stack applications, AI reasoning engines, RAG pipelines, and computer vision systems engineered by Om Dubey.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <Container>
          <SectionHeading
            badge="Portfolio Archive"
            title="Projects &amp; Case Studies"
            subtitle="Every project below is backed by source code, architectural documentation, and real engineering trade-off analysis."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
