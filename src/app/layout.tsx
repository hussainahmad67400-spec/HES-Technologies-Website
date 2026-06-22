import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HES Technologies | AI-First Software Engineering",
  description: "HES Technologies builds intelligent AI solutions — RAG systems, AI agents, predictive analytics, and enterprise software that delivers measurable business value.",
  keywords: "AI engineering, RAG, LLM, AI agents, machine learning, Next.js, Python",
  openGraph: {
    title: "HES Technologies",
    description: "AI-First Technology Company",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}
      >
        {children}
      </body>
    </html>
  );
}
