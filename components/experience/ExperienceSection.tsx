"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { educationAndExperience } from "@/data/experience";
import { GraduationCap, Users, Trophy, Sparkles, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-sky-400" />;
      case "community":
        return <Users className="w-4 h-4 text-emerald-400" />;
      case "hackathon":
        return <Trophy className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-[#09090b]">
      <Container>
        <SectionHeading
          badge="Trajectory"
          title="Education &amp; Experience"
          subtitle="My academic foundation, technical community leadership, hackathons, and software milestones."
        />

        <div className="relative border-l-2 border-zinc-800/90 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {educationAndExperience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#121215] border-2 border-zinc-700 group-hover:border-sky-400 flex items-center justify-center transition-colors shadow-sm">
                {getIcon(item.type)}
              </div>

              {/* Content card */}
              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.12)"
                className="p-6 sm:p-7 border-zinc-800/80 hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-mono group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-sm font-medium text-sky-400/90 mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {item.period}
                    </span>
                    <span className="hidden sm:inline text-zinc-600">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlights && (
                  <ul className="space-y-2 mb-4 text-xs sm:text-sm text-zinc-400">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-sky-400 font-mono mt-0.5">▸</span>
                        <span className="text-zinc-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.badges && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                    {item.badges.map((badge) => (
                      <Badge key={badge} variant="muted" size="sm">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </SpotlightCard>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
