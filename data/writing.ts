export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: "deterministic-llm-outputs-healthos",
    title: "How I Built HealthOS: Enforcing Deterministic Pydantic Schemas from Vision LLMs",
    excerpt:
      "Why free-form generative AI fails in medical report interfaces, and how two-stage prompt pipelines and Pydantic validation guarantee zero UI crashes.",
    date: "2026-03-10",
    readTime: "6 min read",
    category: "AI Architecture",
    tags: ["FastAPI", "Gemini Vision", "Pydantic", "HealthTech"],
  },
  {
    slug: "private-college-rag-chromadb",
    title: "Building a Private College RAG Pipeline with FastAPI, ChromaDB and Next.js",
    excerpt:
      "A deep dive into indexing 100+ pages of dense college syllabus slides, comparing embedding chunk sizes, and implementing strict source citations.",
    date: "2026-02-24",
    readTime: "8 min read",
    category: "Vector Search",
    tags: ["RAG", "ChromaDB", "Next.js", "Python"],
  },
  {
    slug: "recursive-chunking-vs-fixed-slicing",
    title: "Why Recursive Character Chunking Outperforms Fixed Token Slicing for Study Notes",
    excerpt:
      "An empirical comparison of chunking strategies for mathematical proofs and code snippets in vector retrieval systems.",
    date: "2026-01-18",
    readTime: "5 min read",
    category: "Engineering Decisions",
    tags: ["Embeddings", "LangChain", "Vector DB"],
  },
];
