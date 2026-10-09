import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { articles } from "@/data/writing";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Writing & Engineering Notes",
  description:
    "Technical articles and architecture breakdown by Om Dubey covering AI pipelines, vector databases, and full-stack systems.",
};

export default function WritingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <Container size="narrow">
          <SectionHeading
            badge="Technical Writing"
            title="Engineering Notes &amp; Articles"
            subtitle="Deep dives into system architecture, debugging non-deterministic LLMs, vector database chunking, and software trade-offs."
          />

          <div className="space-y-6">
            {articles.map((article) => (
              <Card
                key={article.slug}
                variant="interactive"
                className="p-6 sm:p-7 border-zinc-800/80 hover:border-sky-500/40 transition-all group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Badge variant="accent" size="sm">
                      {article.category}
                    </Badge>
                    <span>{article.date}</span>
                  </div>

                  <div className="flex items-center gap-1 text-zinc-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  <Link href={`/writing/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                <div className="pt-4 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="muted" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/writing/${article.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-sky-400 hover:text-sky-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Full Note</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
