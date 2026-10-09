import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-24">
        <Container size="narrow" className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs mb-6">
            <Terminal className="w-3.5 h-3.5" />
            <span>404: Route Not Found</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Page does not exist
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-md mx-auto mb-8">
            The page or case study you requested could not be located. It might have been moved or refactored.
          </p>

          <Button href="/" variant="primary" size="lg" icon={<ArrowLeft className="w-4 h-4" />}>
            Return to Homepage
          </Button>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
