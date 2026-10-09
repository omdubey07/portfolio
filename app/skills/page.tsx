import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { SkillsSection } from "@/components/skills/SkillsSection";

export const metadata = {
  title: "Skills & Technologies | Om Dubey",
  description: "Comprehensive overview of languages, frameworks, AI/ML tools, databases, and DevOps technologies used by Om Dubey.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1">
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
}
