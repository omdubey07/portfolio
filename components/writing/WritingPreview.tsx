"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { articles } from "@/data/writing";
import { ArrowRight, Clock } from "lucide-react";

export function WritingPreview() {
  return (
    <section id="writing" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-[#0c0c0f]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            badge="Technical Communication"
            title="Writing &amp; Engineering Notes"
            subtitle="Documenting architecture decisions, debugging breakthroughs, and practical system design trade-offs."
            className="mb-0"
          />

          <Button
            href="/writing"
            variant="outline"
            size="sm"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto font-mono text-xs"
          >
            All Articles Index
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <SpotlightCard
              key={article.slug}
              className="p-6 border-zinc-800/80 hover:border-sky-500/40 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono text-zinc-400">
                  <Badge variant="accent" size="sm">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-sky-300 transition-colors leading-snug">
                  <Link href={`/writing/${article.slug}`} className="hover:underline focus-visible:outline-sky-400 rounded">
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">{article.date}</span>
                <Link
                  href={`/writing/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 group-hover:translate-x-1 transition-transform font-medium"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
