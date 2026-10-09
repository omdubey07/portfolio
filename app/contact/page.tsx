import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ContactSection } from "@/components/contact/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}