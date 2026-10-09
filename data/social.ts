export interface SocialLink {
  name: string;
  url: string;
  label: string;
  username?: string;
  icon: "github" | "linkedin" | "mail" | "fileText" | "twitter";
}

export const personalInfo = {
  name: "Om Dayashankar Dubey",
  shortName: "Om Dubey",
  role: "AI & Full-Stack Developer | Aspiring Data Analyst",
  tagline: "AI & Full-Stack Developer passionate about software development, AI systems, and data analysis.",
  bio: "Second-year B.Sc. Computer Science student at the University of Mumbai with a strong passion for software development, artificial intelligence, and data analysis. Built and deployed multiple AI-powered applications using Python, React, FastAPI, and generative AI APIs while continuously exploring modern technologies through self-driven projects and hackathons.",
  location: "Mumbai, Maharashtra",
  phone: "8468907996",
  status: "Open to Technical Roles & Internships",
  statusAvailable: true,
  email: "omdubeyclg07@gmail.com",
  resumeUrl: "/resume.pdf",
  githubUsername: "Omdubey07",
  githubUrl: "https://github.com/Omdubey07",
  linkedinUsername: "om-dubey-4206aa393",
  linkedinUrl: "https://linkedin.com/in/om-dubey-4206aa393",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: personalInfo.githubUrl,
    label: "github.com/Omdubey07",
    username: "@Omdubey07",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: personalInfo.linkedinUrl,
    label: "linkedin.com/in/om-dubey-4206aa393",
    username: "Om Dubey",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    label: personalInfo.email,
    icon: "mail",
  },
  {
    name: "Resume",
    url: personalInfo.resumeUrl,
    label: "Download Resume",
    icon: "fileText",
  },
];
