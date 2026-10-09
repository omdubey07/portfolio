export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  whyBuilt: string;
  role: string;
  architecture: {
    summary: string;
    flow: string[];
    diagramText?: string;
  };
  techStack: {
    category: string;
    items: string[];
  }[];
  howItWorks: string[];
  engineeringDecisions: {
    decision: string;
    rationale: string;
    tradeOff: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  whatWentWrong: string[];
  whatILearned: string[];
  results: string[];
  futureImprovements: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  featured: boolean;
  order: number;
  category: "AI / Data" | "Full-Stack Web" | "Applied ML" | "Dev Tools";
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoVideo?: string;
  metrics?: { label: string; value: string }[];
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: "healthos",
    title: "HealthOS",
    tagline: "AI-Powered Lab Report Understanding & Health Biomarker Intelligence",
    shortDescription: "Transforms complex, medical-jargon-heavy blood and lab test reports into structured biomarker data, accessible plain-language explanations, discussion flags for doctor visits, and actionable lifestyle insights.",
    featured: true,
    order: 1,
    category: "AI / Data",
    technologies: ["FastAPI", "Python", "React", "Gemini AI", "OCR Engine", "Tailwind CSS"],
    githubUrl: "https://github.com/omdubey/healthos", // TODO: Verify repository URL
    liveUrl: "https://healthos-demo.vercel.app", // TODO: Verify live demo URL
    metrics: [
      { label: "Report Processing", value: "< 3.5s" },
      { label: "Biomarker Parsing", value: "Structured JSON" },
      { label: "Safety Guardrails", value: "Strict Doctor Disclaimers" },
    ],
    caseStudy: {
      overview: "HealthOS is an intelligent diagnostic report interpreter designed to bridge the comprehension gap between complex medical lab sheets and everyday patients. Patients often receive multi-page PDF blood reports filled with numerical values, reference ranges, and clinical abbreviations that cause undue anxiety before seeing a clinician. HealthOS ingests the report, extracts structured biomarker data, highlights out-of-range indicators, and prepares concise discussion points for the patient's next clinical consultation.",
      problem: "Medical lab reports are formatted for pathologists, not patients. When patients look up abnormal biomarkers online without contextual guidance, they often encounter alarming, uncalibrated medical forums. Additionally, doctors have limited consultation time to explain every line item from scratch.",
      whyBuilt: "I wanted to build a practical tool that helps family members and friends understand their routine health checks responsibly—emphasizing factual clarity, structured biomarker tracking, and proactive consultation questions rather than diagnosing medical conditions.",
      role: "Sole Developer — Designed end-to-end architecture, backend OCR & prompt pipelines, structured schema validation, and responsive frontend dashboard.",
      architecture: {
        summary: "Pipeline architecture: Image/PDF upload -> OCR / Vision Parser -> Structured JSON Extraction -> Guardrail Validation -> Plain-Language Reasoning Engine -> Interactive Health Report UI.",
        flow: [
          "1. Patient uploads PDF or photo of a medical report via drag-and-drop.",
          "2. FastAPI backend receives file, validates MIME types, and invokes Vision / OCR parser.",
          "3. LLM extraction engine parses unstructured text into strict schema (Biomarker, Value, Unit, Reference Range, Flag).",
          "4. Validation layer applies safety guardrails: strips diagnostic claims and enforces medical disclaimers.",
          "5. Reasoning engine generates 3 distinct outputs: Plain-Language Summary, Key Flags, and Questions for Your Doctor.",
          "6. React frontend renders an interactive dashboard with categorized biomarker cards and printable summaries.",
        ],
        diagramText: "Upload (PDF/Image) -> FastAPI Ingestion -> Vision/OCR Extraction -> Pydantic Schema Validation -> LLM Clinical Summarizer (with Safety Rules) -> React Interactive Dashboard",
      },
      techStack: [
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"] },
        { category: "Backend", items: ["FastAPI (Python)", "Pydantic", "Uvicorn"] },
        { category: "AI & Parsing", items: ["Gemini 1.5 Flash / Vision", "OCR Text Extraction", "Custom Prompt Chains"] },
        { category: "Deployment", items: ["Vercel (Frontend)", "Render (FastAPI Service)"] },
      ],
      howItWorks: [
        "Uploads are handled asynchronously with client-side preview and size validation.",
        "FastAPI streams the image to the vision-capable LLM with a rigid Pydantic JSON schema to avoid hallucinations.",
        "Biomarkers are grouped into logical panels (Lipid Profile, Complete Blood Count, Liver Function, Kidney Function, Vitamins).",
        "Visual indicators (Normal, Borderline, High, Low) are calculated strictly against the reference ranges provided on the lab paper itself.",
        "A dedicated 'Questions for Your Doctor' section is automatically drafted to empower productive clinic visits.",
      ],
      engineeringDecisions: [
        {
          decision: "Strict Pydantic JSON Schema enforcement over free-form chat response.",
          rationale: "Free-form text generation made parsing erratic. Structured JSON guarantees that every biomarker has an exact value, unit, and reference bounds.",
          tradeOff: "Requires slightly more token overhead in prompt schema definitions, but completely eliminated UI rendering crashes.",
        },
        {
          decision: "Separation of OCR/Vision extraction and Medical Explanation into sequential prompts.",
          rationale: "Doing extraction and explanation in a single prompt caused the model to hallucinate missing values or skip secondary pages.",
          tradeOff: "Two-stage API calls add ~1.2s to total processing time, but raised biomarker extraction accuracy dramatically.",
        },
        {
          decision: "Strict non-diagnostic ethical guardrails embedded in system prompts.",
          rationale: "Software must never say 'You have disease X'. It must state 'Your Ferritin is lower than the reference range of 30–400 ng/mL; discuss potential iron deficiency with your physician.'",
          tradeOff: "Less speculative answers, but protects user safety and legal compliance.",
        },
      ],
      challenges: [
        {
          challenge: "Diverse lab report formats with faint print, misaligned columns, and watermarks.",
          solution: "Preprocessed images using contrast enhancement before passing to the multimodal vision parser, and instructed the extractor to flag unreadable lines instead of guessing.",
        },
        {
          challenge: "Handling multi-page lab PDFs without blowing up request timeouts on free-tier hosting.",
          solution: "Implemented page-by-page chunking with progressive client-side status updates so the user gets immediate visual feedback.",
        },
      ],
      whatWentWrong: [
        "Early prompt iterations occasionally misinterpreted units (e.g. converting mg/dL to mmol/L erroneously). Fixed by enforcing strict verbatim unit preservation from the source document.",
        "Initial single-container deployment ran out of memory when processing high-resolution 10MB phone camera uploads. Solved by adding client-side image compression before upload.",
      ],
      whatILearned: [
        "How to design deterministic outputs from non-deterministic LLMs using structured outputs and validation layers.",
        "The critical importance of domain-specific safety boundaries in healthtech applications.",
        "Effective asynchronous file processing in FastAPI and React.",
      ],
      results: [
        "Fully functional end-to-end report interpreter tested on 25+ real-world lab report formats.",
        "Structured biomarker extraction with zero fabricated values.",
        "Clean, responsive UI with instant visual status flags and doctor consultation bullet points.",
      ],
      futureImprovements: [
        "Historical trend tracking: Compare two blood tests 6 months apart to plot biomarker progression.",
        "Local vector database (ChromaDB) to ground medical explanations against peer-reviewed health references (e.g., MedlinePlus).",
        "Exportable PDF summary card formatted specifically for quick doctor handoff.",
      ],
    },
  },
  {
    slug: "ai-second-brain",
    title: "AI Second Brain",
    tagline: "Private Semantic College Knowledge & Study Companion with Strict Source Citations",
    shortDescription: "A retrieval-augmented generation (RAG) platform allowing students to upload lecture notes, syllabus PDFs, and research papers, indexing them in ChromaDB to enable grounded semantic search and citation-backed Q&A.",
    featured: true,
    order: 2,
    category: "AI / Data",
    technologies: ["Next.js", "FastAPI", "ChromaDB", "LangChain", "Python", "Tailwind CSS"],
    githubUrl: "https://github.com/omdubey/ai-second-brain", // TODO: Verify repository URL
    liveUrl: "https://second-brain-om.vercel.app", // TODO: Verify live demo URL
    metrics: [
      { label: "Retrieval Method", value: "Dense Vector RAG" },
      { label: "Vector Store", value: "ChromaDB" },
      { label: "Citation Accuracy", value: "Page-level Chunk Links" },
    ],
    caseStudy: {
      overview: "AI Second Brain is a private, document-grounded knowledge management and question-answering system built specifically for college students and researchers. Instead of asking a generic chatbot that hallucinates ungrounded answers, students upload their specific course textbooks, teacher slides, and syllabus notes. The system chunks and embeds the documents into a local vector store (ChromaDB), retrieves top relevant excerpts with similarity scoring, and generates answers with exact page citations.",
      problem: "College students often have hundreds of pages of lecture slides, textbook chapters, and exam guides scattered across folders. Finding exact definitions, formulas, or proof steps before exams requires tedious manual ctrl+F, while standard AI models hallucinate material outside the syllabus.",
      whyBuilt: "Built to solve my own study workflow challenges during exam season, ensuring every generated summary or answer can be immediately verified with a direct page citation from my actual college notes.",
      role: "Sole Developer — Implemented full RAG pipeline, recursive chunking strategy, vector similarity search, FastAPI API endpoints, and Next.js chat interface.",
      architecture: {
        summary: "Document Ingestion -> Text Extraction & Cleaning -> Recursive Chunking with Overlap -> Embedding Generation -> ChromaDB Vector Storage -> Query Embedding -> Top-K Semantic Similarity Retrieval -> Context-Injected Prompt -> Cited LLM Stream.",
        flow: [
          "1. User uploads PDF or Markdown documents into a course-specific notebook workspace.",
          "2. Backend parses document text and splits it into 600-character chunks with 100-character overlap.",
          "3. Vector embeddings are computed using sentence transformers and stored in ChromaDB with metadata (file name, page number, chunk ID).",
          "4. When a question is submitted, the query is embedded and compared against the vector store using cosine similarity.",
          "5. Top-K (K=4) most relevant chunks are compiled into a grounded prompt context.",
          "6. The response is streamed back with clickable citation badges showing exact source excerpts and page numbers.",
        ],
        diagramText: "Document Upload -> Ingestion Worker -> Text Splitter -> Vector Embeddings -> ChromaDB | User Query -> Query Embedding -> Vector Similarity Match -> Context Assembly -> LLM Generation with Citations -> Next.js UI",
      },
      techStack: [
        { category: "Frontend", items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"] },
        { category: "Backend", items: ["FastAPI", "Python 3.11", "LangChain / Custom RAG Engine"] },
        { category: "Vector Store & AI", items: ["ChromaDB", "Text Embeddings", "Gemini / OpenAI API"] },
        { category: "Storage", items: ["Local / Cloud Blob Storage for source PDFs"] },
      ],
      howItWorks: [
        "Documents are parsed and indexed asynchronously with progress telemetry.",
        "Users can filter chat context by specific subjects (e.g. 'Operating Systems', 'DBMS', 'Algorithms').",
        "Every response displays expandable source drawers containing the exact paragraph and page the information came from.",
        "Flashcard generator auto-extracts high-frequency exam questions based solely on indexed lecture slides.",
      ],
      engineeringDecisions: [
        {
          decision: "Recursive Character Splitting with 15% overlap instead of fixed token slicing.",
          rationale: "Fixed slicing frequently cut sentences in half, ruining semantic meaning in the vector space. Recursive splitting respects paragraph and sentence boundaries.",
          tradeOff: "Slightly variable chunk sizes, but produced significantly higher retrieval relevance.",
        },
        {
          decision: "ChromaDB for lightweight embedded vector storage.",
          rationale: "ChromaDB can be run locally or within containerized services without requiring expensive cloud vector cluster overhead during development.",
          tradeOff: "Great for single-node college workloads, while remaining swappable for Pinecone/Qdrant if horizontal scaling is required.",
        },
        {
          decision: "Strict source citation enforcement with confidence thresholding.",
          rationale: "If similarity score is below threshold (0.65), the system responds with 'No relevant material found in your uploaded notes' instead of guessing.",
          tradeOff: "Prevents hallucinations at the expense of requiring good source uploads.",
        },
      ],
      challenges: [
        {
          challenge: "PDF parsing of multi-column papers and slides with diagrams.",
          solution: "Integrated a structural PDF parser that strips headers/footers and reconstructs coherent paragraph reading order before chunking.",
        },
        {
          challenge: "Context window budget management when querying multiple dense chapters.",
          solution: "Applied reranking to select only the top 3-4 most contextually relevant chunks rather than stuffing all matches.",
        },
      ],
      whatWentWrong: [
        "Initial chunk size was too large (1500 chars), causing embedding vectors to dilute specific formula definitions. Reduced chunk size to 600 chars with 100 char overlap, drastically improving pinpoint answers.",
      ],
      whatILearned: [
        "Deep understanding of the RAG lifecycle: chunking strategies, embedding drift, similarity metrics, and context injection.",
        "How to build streaming UI interactions with Next.js Server-Sent Events (SSE).",
      ],
      results: [
        "Successfully indexed 100+ pages of CS semester study material with sub-second retrieval times.",
        "Zero ungrounded hallucinations when querying indexed coursework.",
        "Intuitive citation viewer verifying exact slide and book source paragraphs.",
      ],
      futureImprovements: [
        "Hybrid Search (BM25 Keyword + Dense Vector embeddings) for exact acronym matching.",
        "Audio lecture transcription pipeline using Whisper AI.",
        "Multi-modal note support (indexing diagram images with vision models).",
      ],
    },
  },
  {
    slug: "plantscan-pro",
    title: "PlantScan Pro",
    tagline: "AI-Powered Botanical Identification, Pathology Detection & Care Guidance",
    shortDescription: "An intelligent mobile-responsive application that identifies botanical species, detects leaf diseases using computer vision models, and provides structured irrigation, sunlight, and treatment schedules.",
    featured: true,
    order: 3,
    category: "Applied ML",
    technologies: ["Python", "FastAPI", "React", "TensorFlow / Vision AI", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/omdubey/plantscan-pro", // TODO: Verify repository URL
    liveUrl: "https://plantscan-pro.vercel.app", // TODO: Verify live demo URL
    metrics: [
      { label: "Classification", value: "Species + Disease Detection" },
      { label: "Care Protocol", value: "Watering, Sunlight, Soil" },
      { label: "Inference Time", value: "< 2.0s" },
    ],
    caseStudy: {
      overview: "PlantScan Pro is a practical computer vision and botanical care assistant. Users upload or capture a photo of a household plant or crop leaf. The application performs dual-layer analysis: first identifying the plant species and its optimal growth parameters, and second analyzing the leaf surface for common pathologies (such as powdery mildew, leaf blight, chlorosis, or pest damage) along with organic and chemical treatment recommendations.",
      problem: "Urban gardeners and agriculture students often struggle to diagnose early symptoms of plant stress or fungal infections. Generic image searches return broad results that fail to differentiate between underwatering, nutrient deficiencies, or active fungal spread.",
      whyBuilt: "Built as an exploration of combining convolutional neural network classification with generative AI reasoning to produce actionable diagnostic care cards.",
      role: "Sole Developer — Model integration, image preprocessing pipeline, FastAPI backend, and modern mobile-first React frontend.",
      architecture: {
        summary: "Camera Capture -> Client Compression -> FastAPI Endpoint -> Image Normalization -> Vision Classifier (Species & Pathology) -> AI Care Recommendation Engine -> Mobile Care Dashboard.",
        flow: [
          "1. User takes a photo of plant leaves or uploads an existing image.",
          "2. Image is compressed on client to optimize cellular network bandwidth.",
          "3. Backend normalizes image tensors and runs inference through classification and multimodal vision pipelines.",
          "4. Model outputs predicted species, health status (Healthy / Diseased), and confidence score.",
          "5. If diseased, the engine generates an actionable care protocol: immediate quarantine advice, organic remediation, watering calibration, and sunlight requirements.",
          "6. Interactive results card displays severity gauge, sunlight meter, and watering reminder presets.",
        ],
        diagramText: "Image Input -> Client Resizer -> FastAPI Router -> Vision Inference Pipeline -> Pathology Detection -> Care Protocol Generator -> React Mobile-First UI",
      },
      techStack: [
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"] },
        { category: "Backend & ML", items: ["FastAPI", "Python", "Pillow (Image Processing)", "Vision AI Models"] },
        { category: "API & Data", items: ["RESTful JSON Endpoints", "Botanical Care Knowledge Base"] },
        { category: "Deployment", items: ["Vercel", "Render"] },
      ],
      howItWorks: [
        "Instant camera feed integration with live viewfinder guidelines for centering leaf subjects.",
        "Diagnostic cards broken down into: Species Identification, Health Assessment, Environmental Needs, and Step-by-Step Treatment.",
        "Visual gauges for sunlight level (Direct, Indirect, Low-light) and watering frequency.",
      ],
      engineeringDecisions: [
        {
          decision: "Client-side image resizing and compression before upload.",
          rationale: "High-megapixel smartphone photos (8–12MB) caused sluggish uploads on mobile 4G networks. Client-side canvas compression reduced payload to < 300KB with zero loss in classification accuracy.",
          tradeOff: "Slight client CPU usage for canvas redraw, resulting in 80% faster network transfers.",
        },
        {
          decision: "Fallback botanical knowledge base for offline/rate-limited scenarios.",
          rationale: "Common houseplant species have cached care profiles to reduce redundant external API calls.",
          tradeOff: "Requires maintaining a structured JSON dataset of top 50 common species.",
        },
      ],
      challenges: [
        {
          challenge: "Handling poorly lit, blurry, or background-cluttered photos.",
          solution: "Implemented pre-check heuristics to verify image contrast and brightness before running deep analysis, prompting the user if lighting is insufficient.",
        },
      ],
      whatWentWrong: [
        "Early models confused natural leaf variegation (like in Monstera Albo or Calatheas) with fungal chlorosis. Fixed by incorporating species context into the pathology evaluation prompt.",
      ],
      whatILearned: [
        "Image preprocessing pipelines and tensor normalization for web inference.",
        "Building responsive mobile-first camera interfaces with HTML5 MediaDevices API.",
      ],
      results: [
        "Accurate classification across popular indoor houseplants and garden crops.",
        "Under 2-second response latency on standard network connections.",
        "Clean, interactive care cards with clear visual hierarchy.",
      ],
      futureImprovements: [
        "Push notification reminders for watering and fertilizing schedules.",
        "Offline Progressive Web App (PWA) caching for garden field use without internet.",
      ],
    },
  },
  {
    slug: "mock-examiner",
    title: "Mock Examiner",
    tagline: "AI-Powered Adaptive Exam & Technical Interview Preparation Suite",
    shortDescription: "An interactive assessment platform that extracts syllabus materials and job descriptions to generate dynamic multiple-choice, theoretical, and coding interview questions with real-time scoring, grading rubrics, and conceptual feedback.",
    featured: true,
    order: 4,
    category: "Full-Stack Web",
    technologies: ["Python", "Streamlit", "Gemini AI", "PDF Processing", "REST APIs"],
    githubUrl: "https://github.com/omdubey/mock-examiner", // TODO: Verify repository URL
    liveUrl: "https://mock-examiner.streamlit.app", // TODO: Verify live demo URL
    metrics: [
      { label: "Question Modes", value: "MCQ + Theory + Coding" },
      { label: "Grading", value: "Instant Rubric Scoring" },
      { label: "Feedback", value: "Concept Gaps & Study Tips" },
    ],
    caseStudy: {
      overview: "Mock Examiner is an automated assessment and technical interview practice tool. Students or job seekers upload their target exam syllabus, lecture notes, or a software engineering job description. The application analyzes the subject matter, generates customizable mock exams (MCQs, short answer theory, and conceptual code questions), times the test session, and grades student submissions against clear evaluation rubrics with constructive diagnostic feedback.",
      problem: "Preparing for college semester exams and technical placement tests requires practicing realistic questions. Generic question banks don't align with specific college syllabi or job descriptions, while hiring a private tutor or evaluator is expensive.",
      whyBuilt: "Built to provide a personalized, on-demand study partner for college exams that tests both factual recall and conceptual understanding under timed conditions.",
      role: "Sole Developer — Implemented question generation algorithms, interactive testing state machine, real-time rubric evaluator, and Streamlit / Web UI.",
      architecture: {
        summary: "Syllabus / Notes Ingestion -> Topic Extraction -> Difficulty Parameterization -> Question Bank Generation -> Timed Testing Session -> Student Answer Evaluation -> Detailed Scorecard & Gap Analysis.",
        flow: [
          "1. User uploads course PDF or selects a predefined CS subject (e.g. Data Structures, SQL, OS).",
          "2. User configures exam parameters: number of questions, difficulty level (Beginner, Intermediate, Advanced), and question types (MCQ, Short Answer, Coding).",
          "3. Engine synthesizes a structured exam with randomized questions and concealed answer keys.",
          "4. User takes the test in an interactive timed interface with auto-save for drafts.",
          "5. Upon submission, the evaluator assesses each answer against the reference rubric, awarding partial credit where appropriate.",
          "6. A comprehensive diagnostic report card is generated highlighting strong topics, weak conceptual areas, and targeted revision advice.",
        ],
        diagramText: "Syllabus Upload -> Topic Deconstructor -> Parametric Exam Generator -> Interactive Test Session -> Multi-Criteria Rubric Evaluator -> Diagnostic Report & Knowledge Gap Analysis",
      },
      techStack: [
        { category: "Frontend & Runtime", items: ["Streamlit / React", "Python 3.11", "HTML5 Custom Components"] },
        { category: "AI & Assessment", items: ["Gemini 1.5 Pro / Flash", "Custom Grading Prompts", "Structured Output Parsing"] },
        { category: "Document Extraction", items: ["PyPDF2 / PDFPlumber", "Regex Parser"] },
        { category: "Deployment", items: ["Streamlit Cloud / Vercel"] },
      ],
      howItWorks: [
        "Stateful session management tracks countdown timer, answered questions, and unattempted flags.",
        "Partial-credit grading evaluates written answers for key terminology, logic flow, and edge cases.",
        "Provides immediate explanation and textbook reference for any incorrect multiple-choice answer.",
      ],
      engineeringDecisions: [
        {
          decision: "Structured JSON output with answer rationale for every generated question.",
          rationale: "Ensures the application has both the test questions and the exact verification criteria cached in memory before the student begins testing.",
          tradeOff: "Initial test generation takes ~4 seconds, but guarantees instant evaluation upon submission.",
        },
        {
          decision: "Three-tier difficulty calibration (Direct Recall, Application, Edge-Case Analysis).",
          rationale: "Allows students to practice basic semester definitions before progressing to interview-grade algorithmic reasoning.",
          tradeOff: "Requires rigorous prompt engineering to maintain consistent difficulty grading.",
        },
      ],
      challenges: [
        {
          challenge: "Accurately grading free-text subjective answers without bias or leniency.",
          solution: "Supplied the grading engine with a rubric breakdown (Core Concepts: 50%, Terminology: 30%, Clarity & Examples: 20%) to standardize scoring.",
        },
      ],
      whatWentWrong: [
        "Initial versions displayed the correct answers in client DOM state, which could be inspected. Refactored architecture to keep answer keys hidden on the server until final submission.",
      ],
      whatILearned: [
        "Designing state machines for interactive quiz/exam workflows.",
        "Formulating structured rubrics for AI-assisted educational evaluation.",
      ],
      results: [
        "Over 100+ generated practice questions across core CS domains.",
        "Constructive feedback loop with diagnostic breakdown of strengths and weaknesses.",
        "Zero server crashes during simulated multi-question test sessions.",
      ],
      futureImprovements: [
        "Live voice interview mode with speech-to-text for HR and technical behavioral rounds.",
        "Exportable PDF report card with performance radar chart.",
      ],
    },
  },
];
