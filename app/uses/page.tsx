import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Laptop, Terminal, Layers, Sparkles, Cpu, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Uses & Developer Setup",
  description:
    "A living document of the hardware, software, editor configuration, and development tools Om Dubey uses daily.",
};

export default function UsesPage() {
  const sections = [
    {
      category: "Development Environment & Editor",
      icon: <Terminal className="w-4 h-4 text-sky-400" />,
      items: [
        {
          name: "VS Code / Cursor",
          description: "Primary editor with Tokyo Night / JetBrains Dark theme, custom keybindings, and ESLint / Prettier extensions.",
        },
        {
          name: "Terminal & Shell",
          description: "PowerShell & WSL2 (Ubuntu) with custom prompt styling and Git alias shortcuts.",
        },
        {
          name: "JetBrains Mono & Geist",
          description: "My preferred monospace and interface fonts for crisp readability during long coding sessions.",
        },
      ],
    },
    {
      category: "Backend & AI Tooling",
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      items: [
        {
          name: "FastAPI & Python 3.11+",
          description: "Go-to framework for building high-performance asynchronous REST endpoints, OCR pipelines, and AI orchestrators.",
        },
        {
          name: "ChromaDB & Vector Tooling",
          description: "Embedded vector database for local and containerized RAG search pipelines.",
        },
        {
          name: "Postman & Insomnia",
          description: "For rapid API endpoint debugging, header validation, and multipart form-data testing.",
        },
      ],
    },
    {
      category: "Frontend & Design",
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      items: [
        {
          name: "Next.js (App Router) & React 19",
          description: "Server Components, dynamic routes, and fast static generation for production web applications.",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS for rapid, maintainable design systems with dark-first tokens.",
        },
        {
          name: "Figma",
          description: "For wireframing layouts, testing color contrast, and designing system architecture diagrams.",
        },
      ],
    },
    {
      category: "Infrastructure & Hosting",
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      items: [
        {
          name: "Vercel",
          description: "Automated Git deployment pipeline, instant preview branches, and edge caching for Next.js apps.",
        },
        {
          name: "Render & Docker",
          description: "Containerized deployment for Python FastAPI web services and background workers.",
        },
        {
          name: "GitHub",
          description: "For version control, issue tracking, public case studies, and GitHub Actions CI.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <Container size="narrow">
          <SectionHeading
            badge="Workspace &amp; Stack"
            title="What I Use"
            subtitle="Hardware, software, developer tooling, and editor setup that power my daily coding and engineering workflow."
          />

          <div className="space-y-10">
            {sections.map((sec, idx) => (
              <section key={idx}>
                <h2 className="text-lg font-bold font-mono text-white mb-4 flex items-center gap-2">
                  {sec.icon}
                  <span>{sec.category}</span>
                </h2>

                <div className="space-y-3">
                  {sec.items.map((item, itemIdx) => (
                    <Card key={itemIdx} variant="default" className="p-5 border-zinc-800/80">
                      <h3 className="font-mono text-sm font-bold text-zinc-100 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
