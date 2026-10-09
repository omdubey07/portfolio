export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: "core" | "familiar" | "learning";
    highlight?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming and scripting languages used for production and scripting.",
    skills: [
      { name: "Python", level: "core", highlight: true },
      { name: "JavaScript (ES6+)", level: "core", highlight: true },
      { name: "TypeScript", level: "core", highlight: true },
      { name: "SQL", level: "core", highlight: true },
      { name: "HTML5 & CSS3", level: "core" },
    ],
  },
  {
    title: "Frontend",
    description: "Modern component-driven web interfaces, styling, and client state.",
    skills: [
      { name: "React", level: "core", highlight: true },
      { name: "Next.js (App Router)", level: "core", highlight: true },
      { name: "Tailwind CSS", level: "core", highlight: true },
      { name: "Framer Motion", level: "familiar" },
      { name: "Responsive UI/UX", level: "core" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "RESTful architecture, asynchronous handlers, and server runtimes.",
    skills: [
      { name: "FastAPI", level: "core", highlight: true },
      { name: "Node.js", level: "core" },
      { name: "Express.js", level: "core" },
      { name: "Streamlit", level: "core" },
      { name: "RESTful API Design", level: "core" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Relational, document, and vector databases for structured and semantic retrieval.",
    skills: [
      { name: "MySQL", level: "core", highlight: true },
      { name: "MongoDB", level: "core", highlight: true },
      { name: "ChromaDB (Vector DB)", level: "familiar", highlight: true },
      { name: "SQL Query Optimization", level: "core" },
    ],
  },
  {
    title: "AI, RAG & Data",
    description: "Integrating modern LLMs, embeddings, document OCR, and retrieval pipelines.",
    skills: [
      { name: "LLM APIs (Gemini, OpenAI)", level: "core", highlight: true },
      { name: "RAG Architecture", level: "core", highlight: true },
      { name: "Document OCR Pipelines", level: "core" },
      { name: "Prompt Engineering", level: "core" },
      { name: "Data Processing (Pandas)", level: "familiar" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Development workflow, version control, containerization, and hosting.",
    skills: [
      { name: "Git & GitHub", level: "core", highlight: true },
      { name: "Docker", level: "familiar", highlight: true },
      { name: "Vercel", level: "core" },
      { name: "Render", level: "core" },
      { name: "Postman", level: "core" },
      { name: "VS Code", level: "core" },
    ],
  },
];

export const currentlyLearning = [
  {
    topic: "Multi-Agent Workflows",
    context: "Implementing Planner-Executor-Critic patterns for autonomous task execution.",
  },
  {
    topic: "Vector Search & Hybrid Retrieval",
    context: "Combining BM25 keyword matching with dense embeddings for high-precision RAG.",
  },
  {
    topic: "System Design & Distributed Data",
    context: "Caching strategies with Redis, rate limiting, and microservices communication.",
  },
];
