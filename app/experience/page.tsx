import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ExperienceSection } from "@/components/experience/ExperienceSection";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1">
        <ExperienceSection />
      </main>

      <Footer />
    </div>
  );
}