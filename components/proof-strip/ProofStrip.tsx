import React from "react";
import { Container } from "@/components/ui/Container";
import { Code2, GraduationCap, Users, Cpu, Layers, GitBranch } from "lucide-react";

export function ProofStrip() {
  const highlights = [
    {
      icon: <Code2 className="w-4 h-4 text-sky-400" />,
      label: "4 Shipped Projects",
      detail: "HealthOS, Second Brain, PlantScan, Examiner",
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-indigo-400" />,
      label: "BSc Computer Science",
      detail: "Univ of Mumbai · 3rd Semester",
    },
    {
      icon: <Users className="w-4 h-4 text-emerald-400" />,
      label: "CSI Tech Committee",
      detail: "Workshops & Hackathons",
    },
    {
      icon: <Cpu className="w-4 h-4 text-amber-400" />,
      label: "Core Architecture",
      detail: "FastAPI · React · Vector RAG",
    },
    {
      icon: <Layers className="w-4 h-4 text-sky-400" />,
      label: "Databases",
      detail: "MySQL · MongoDB · ChromaDB",
    },
    {
      icon: <GitBranch className="w-4 h-4 text-purple-400" />,
      label: "Open Source",
      detail: "Public Repositories on GitHub",
    },
  ];

  return (
    <div className="py-6 bg-[#0c0c0f] border-b border-zinc-800/80">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-1 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="font-mono text-xs font-semibold text-zinc-200">
                  {item.label}
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-sans truncate">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
