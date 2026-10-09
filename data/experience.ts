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
    title: "B.Sc. Computer Science",
    organization: "Thakur Shyamnarayan Degree College, University of Mumbai",
    location: "Mumbai, Maharashtra",
    period: "Expected Graduation: 2028 (Semester 3)",
    description: "Second-year B.Sc. Computer Science student. Academic scores: Class X: 83.40% | Class XII: 52.50%. Focus on software development, AI, data structures, and database management.",
    highlights: [
      "Semester: 3 | Class X: 83.40% | Class XII: 52.50%",
      "Focused on software development, artificial intelligence, and data analysis.",
    ],
    badges: ["B.Sc. CS", "Mumbai University", "Semester 3"],
    verified: true,
  },
  {
    id: "csi-member",
    type: "community",
    title: "Member",
    organization: "Computer Society of India (CSI)",
    location: "Mumbai, Maharashtra",
    period: "Active Member",
    description: "Contributed to organizing and decorating technical events. Built a dragon model from recycled materials demonstrating creativity and teamwork.",
    highlights: [
      "Contributed to organizing and decorating technical events.",
      "Built a dragon model from recycled materials demonstrating creativity and teamwork.",
    ],
    badges: ["CSI Member", "Technical Events", "Teamwork"],
    verified: true,
  },
  {
    id: "summer-hacks-2026",
    type: "hackathon",
    title: "Summer Hacks 2026 – 18th Place",
    organization: "Summer Hacks 2026",
    location: "Mumbai, India",
    period: "2026",
    description: "Secured 18th Place building an AI Medical Assistant application.",
    highlights: [
      "18th Place finish for AI Medical Assistant prototype.",
      "Integrated rapid generative AI APIs and interactive healthcare workflows.",
    ],
    badges: ["18th Place", "AI Medical Assistant", "Hackathon"],
    verified: true,
  },
  {
    id: "hackathon-dadar",
    type: "hackathon",
    title: "Professional Hackathon, Dadar – 8th Place",
    organization: "Professional Hackathon Dadar",
    location: "Dadar, Mumbai",
    period: "2026",
    description: "Secured 8th Place building an AI Resume Identifier application.",
    highlights: [
      "8th Place finish for AI Resume Identifier.",
      "Engineered automated candidate document parsing and scoring.",
    ],
    badges: ["8th Place", "AI Resume Identifier", "Hackathon"],
    verified: true,
  },
];

export const certificationsList = [
  "Deloitte Virtual Experience Program",
  "HackArena 2.0 Zonals",
  "CSI",
];

export const achievements = [
  {
    title: "Summer Hacks 2026 – 18th Place",
    category: "Hackathon",
    description: "Built and deployed an AI Medical Assistant.",
    period: "2026",
  },
  {
    title: "Professional Hackathon, Dadar – 8th Place",
    category: "Hackathon",
    description: "Built and deployed an AI Resume Identifier.",
    period: "2026",
  },
  {
    title: "CSI Event Organizing & Creative Modeling",
    category: "Community",
    description: "Organized technical events & engineered a recycled dragon model demonstrating creativity and teamwork.",
    period: "Active",
  },
];
