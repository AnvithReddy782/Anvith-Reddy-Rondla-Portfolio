import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EvidenceBoard from "@/components/EvidenceBoard";
import Thinking from "@/components/Thinking";
import Systems from "@/components/Systems";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--color-bg)] min-h-screen transition-colors duration-300">
      <Navigation />
      <Hero />
      <EvidenceBoard />
      <Thinking />
      <Systems />
      <About />
      <Footer />
    </main>
  );
}
