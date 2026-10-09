import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Code } from "lucide-react";

export function ProjectGrid() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-[#09090b]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            badge="Evidence of Work"
            title="Featured Engineering Projects"
            subtitle="Deep architectural case studies, verifiable GitHub repositories, and live interactive demos of software systems I've engineered."
            className="mb-0"
          />

          <Button
            href="/projects"
            variant="outline"
            size="sm"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto font-mono text-xs"
          >
            All Projects Index
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
