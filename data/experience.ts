export interface TimelineItem {
  id: string;
  type: "education" | "community" | "hackathon" | "event";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights?: string[];
  badges?: string[];
  link?: string;
  verified?: boolean;
}

export const educationAndExperience: TimelineItem[] = [
  {
    id: "bsc-cs",
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Thakur Shyamnarayan Degree College, University of Mumbai",
    location: "Mumbai, India",
    period: "2025 — 2028 (3rd Semester)",
    description: "Coursework focused on Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.",
    highlights: [
      "Deep focus on systems programming, web technologies, and database architecture.",
      "Leading technical initiatives and peer study groups for applied software development.",
    ],
    badges: ["BSc Computer Science", "University of Mumbai", "Core CS"],
    verified: true,
  },
  {
    id: "csi-committee",
    type: "community",
    title: "Technical Committee Member",
    organization: "Computer Society of India (CSI) Student Chapter",
    location: "Mumbai, India",
    period: "2024 — Present",
    description: "Active member in the collegiate technical chapter. Helping coordinate coding workshops, technical hack nights, and peer mentoring sessions for junior developers.",
    highlights: [
      "Organized student coding hackathons and technical project exhibitions.",
      "Facilitated hands-on workshops on Git/GitHub fundamentals and full-stack basics.",
    ],
    badges: ["CSI Student Chapter", "Technical Community", "Leadership"],
    verified: true,
  },
  {
    id: "hackathons-events",
    type: "hackathon",
    title: "Hackathons & Technical Competitions",
    organization: "Collegiate & Regional Hackathons",
    location: "Mumbai, India",
    period: "2024 — Present",
    description: "Participating in fast-paced software hackathons building functional prototypes under tight time constraints, focusing on AI integrations, automation, and full-stack solutions.",
    highlights: [
      "Built working MVP solutions in 24–36 hour hackathon environments.",
      "Specialized in rapid API integration, prompt orchestration, and responsive frontend scaffolding.",
    ],
    badges: ["Hackathons", "Rapid Prototyping", "Team Building"],
    verified: true,
  },
  {
    id: "tech-workshops",
    type: "event",
    title: "Technical Workshops & Developer Gatherings",
    organization: "Google Cloud, MongoDB & Open Source Communities",
    location: "Mumbai, India",
    period: "2024 — Present",
    description: "Attended specialized developer workshops covering modern database architectures, cloud deployments, and machine learning developer tooling.",
    highlights: [
      "Attended MongoDB / Google Cloud hands-on technical community sessions.",
      "Engaged in PyTorch India & ML developer community meetups.",
    ],
    badges: ["Continuous Learning", "Workshops", "Cloud & Data"],
    verified: true,
  },
];

export const achievements = [
  {
    title: "CSI Technical Committee Leadership",
    category: "Leadership & Community",
    description: "Selected to contribute to technical event planning and peer developer mentorship at CSI student chapter.",
    period: "2024 — Present",
  },
  {
    title: "Rapid AI Systems Development",
    category: "Engineering",
    description: "Engineered and shipped 4+ functional AI & web projects including HealthOS, AI Second Brain, PlantScan Pro, and Mock Examiner.",
    period: "2024 — 2026",
  },
  {
    title: "Active Open Source & Public Learning",
    category: "Open Source",
    description: "Documenting architecture decisions, GitHub repositories, and engineering trade-offs publicly.",
    period: "Ongoing",
  },
];
