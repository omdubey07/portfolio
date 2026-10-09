"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { skillCategories, currentlyLearning } from "@/data/skills";
import { Compass, Filter, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-[#0c0c0f]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionHeading
            badge="Technical Toolkit"
            title="Skills &amp; Technologies"
            subtitle="A categorized breakdown of technologies I write, test, and ship with in production. No inflated percentage bars—only real competencies."
            className="mb-0"
          />

          {/* Quick Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0">
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline-flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-mono rounded-lg transition-all whitespace-nowrap cursor-pointer",
                    isActive
                      ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm"
                      : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCategories.map((category) => (
            <SpotlightCard
              key={category.title}
              className="p-6 border-zinc-800/80 hover:border-zinc-700/80 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white font-mono mb-2 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="text-xs font-normal text-zinc-500 font-sans">
                    {category.skills.length} tools
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={skill.highlight ? "accent" : "default"}
                      size="sm"
                      className="hover:scale-105 transition-transform"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Currently Learning / Public Progression Callout */}
        <SpotlightCard
          spotlightColor="rgba(99, 102, 241, 0.15)"
          className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-[#121215] border-sky-500/20 glow-card"
        >
          <div className="flex items-center gap-2.5 font-mono text-sm font-bold text-sky-400 mb-4">
            <Compass className="w-4 h-4 text-sky-400" />
            <span>CURRENTLY LEARNING &amp; EXPLORING</span>
          </div>

          <p className="text-sm text-zinc-300 mb-6 max-w-2xl leading-relaxed">
            Software engineering evolves rapidly. Here are the topics I am actively building experimental projects and reading documentation around right now:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentlyLearning.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-xs sm:text-sm hover:border-zinc-700 transition-colors"
              >
                <div className="font-mono font-semibold text-zinc-100 mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  {item.topic}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </Container>
    </section>
  );
}
