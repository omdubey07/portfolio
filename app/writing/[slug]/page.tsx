import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { articles } from "@/data/writing";
import { ArrowLeft, Clock, Calendar, BookOpen, Share2, Sparkles } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20">
        <Container size="narrow">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Writing Archive</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 pb-8 border-b border-zinc-800">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono text-zinc-400">
              <Badge variant="accent" size="sm">
                {article.category}
              </Badge>
              <span>·</span>
              <span className="flex items-center gap-1 text-zinc-400">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                {article.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          {/* Article Editorial Body */}
          <article className="prose prose-invert max-w-none space-y-8 text-base text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-white mb-4">
                The Context &amp; Motivation
              </h2>
              <p>
                When building modern user interfaces powered by large language models, the most common source of fragility is treating LLMs as free-form chat generators instead of structured data compilers. When an unexpected token format or missing key is returned, client components break silently or throw uncaught rendering errors.
              </p>
              <p>
                In applications like <strong className="text-white">HealthOS</strong> and <strong className="text-white">AI Second Brain</strong>, reliability is not optional. A user inspecting a medical lab report cannot tolerate missing reference values, and students reviewing study notes must have exact citations.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-white mb-4">
                1. Enforcing Strict Schema Boundaries
              </h2>
              <p>
                Instead of prompt instructions like <em>&quot;Please reply with JSON&quot;</em>, modern applications must use strict typing layers such as Pydantic schemas in FastAPI or Zod schemas in Next.js.
              </p>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs sm:text-sm text-sky-300 overflow-x-auto my-4">
                <div className="text-zinc-500 text-[11px] mb-2 uppercase">
                  Example Pydantic Extraction Contract:
                </div>
                <pre className="text-zinc-200">
{`class BiomarkerEntry(BaseModel):
    name: str
    value: float
    unit: str
    reference_low: float
    reference_high: float
    flag: Literal["Normal", "Low", "High", "Critical"]
    clinical_note: Optional[str] = None

class LabReportSchema(BaseModel):
    patient_id_hash: str
    test_date: Optional[str]
    biomarkers: List[BiomarkerEntry]`}
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-white mb-4">
                2. Separating Extraction from Reasoning
              </h2>
              <p>
                A single prompt trying to perform OCR, biomarker extraction, normal-range calculation, and doctor consultation questions will suffer from attention dilution. Splitting into sequential, specialized steps ensures high recall:
              </p>
              <ul className="space-y-2 pl-6 list-disc text-zinc-300">
                <li><strong>Stage 1 (Vision Extraction):</strong> Focus purely on verbatim OCR and tabular schema parsing.</li>
                <li><strong>Stage 2 (Validation):</strong> Verify that extracted numerical values conform to physical biological limits.</li>
                <li><strong>Stage 3 (Reasoning &amp; Guidance):</strong> Generate conversational patient summaries and doctor discussion points.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-white mb-4">
                Key Takeaways
              </h2>
              <Card variant="default" className="p-6 border-zinc-800/80 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-sky-400 font-mono font-bold">✓</span>
                  <span>Always treat LLM endpoints as untrusted external API inputs requiring schema validation.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sky-400 font-mono font-bold">✓</span>
                  <span>Sequential specialized prompts outperform monolithic all-in-one prompts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sky-400 font-mono font-bold">✓</span>
                  <span>Expose verifiable citations and source excerpts directly to the end user for transparency.</span>
                </div>
              </Card>
            </section>
          </article>

          {/* Related Project Link */}
          <div className="mt-14 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase mb-1">
                Related Project
              </div>
              <Link
                href="/projects/healthos"
                className="font-mono text-sm font-semibold text-sky-400 hover:underline"
              >
                HealthOS Case Study &amp; Architecture →
              </Link>
            </div>

            <Link
              href="/writing"
              className="text-xs font-mono text-zinc-400 hover:text-white"
            >
              ← Back to all articles
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
