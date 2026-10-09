"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { achievements } from "@/data/experience";
import { Award, CheckCircle, Sparkles } from "lucide-react";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-[#0c0c0f]">
      <Container>
        <SectionHeading
          badge="Milestones"
          title="Verifiable Achievements"
          subtitle="Key milestones across technical leadership, hackathons, and software delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(251, 191, 36, 0.12)"
              className="p-6 border-zinc-800/80 hover:border-amber-500/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800">
                    {item.period}
                  </span>
                </div>

                <div className="font-mono text-xs uppercase tracking-wider text-amber-400 mb-1 font-semibold">
                  {item.category}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-800/60 flex items-center gap-2 text-xs font-mono text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified Technical Milestone</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
