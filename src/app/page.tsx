import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TechStack />
      <Team />
      <Footer />
    </main>
  );
}
