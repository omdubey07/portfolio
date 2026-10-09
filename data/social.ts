export interface SocialLink {
  name: string;
  url: string;
  label: string;
  username?: string;
  icon: "github" | "linkedin" | "mail" | "fileText" | "twitter";
}

export const personalInfo = {
  name: "Om Dubey",
  role: "Software Developer",
  tagline: "Software Developer building practical products with AI, web & data.",
  bio: "BSc Computer Science student at University of Mumbai focused on turning real-world problems into robust, production-minded software. Specializing in AI-assisted workflows, full-stack systems, and data engineering.",
  location: "Mumbai, India",
  status: "Open to Internships & Software Developer Roles",
  statusAvailable: true,
  email: "omdubey.dev@gmail.com", // TODO: Replace with your primary email if different
  resumeUrl: "/resume.pdf", // Placed in public/resume.pdf
  githubUsername: "omdubey", // TODO: Update with exact GitHub username if different
  githubUrl: "https://github.com/omdubey",
  linkedinUrl: "https://linkedin.com/in/om-dubey", // TODO: Update with exact LinkedIn URL
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: personalInfo.githubUrl,
    label: "github.com/omdubey",
    username: "@omdubey",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: personalInfo.linkedinUrl,
    label: "linkedin.com/in/om-dubey",
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
