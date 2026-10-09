import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Om Dubey — Software Developer",
    template: "%s | Om Dubey",
  },
  description:
    "Software Developer building practical products with AI, web technologies and data. BSc Computer Science student sharing engineering case studies, GitHub repositories, and full-stack systems.",
  keywords: [
    "Om Dubey",
    "Software Developer",
    "Full-Stack Developer",
    "AI Developer",
    "FastAPI",
    "React",
    "Next.js",
    "Python",
    "HealthOS",
    "AI Second Brain",
    "Mumbai Developer",
  ],
  authors: [{ name: "Om Dubey", url: "https://github.com/omdubey" }],
  creator: "Om Dubey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omdubey.dev",
    title: "Om Dubey — Software Developer",
    description:
      "Software Developer building practical products with AI, web technologies and data. Explore project case studies, engineering decisions, and architecture diagrams.",
    siteName: "Om Dubey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Dubey — Software Developer",
    description: "Software Developer building practical products with AI, web & data.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-sky-500/20 selection:text-white flex flex-col min-h-screen">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
