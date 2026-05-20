import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EvidenceBoard from "@/components/EvidenceBoard";
import Manifesto from "@/components/Manifesto";
import TheStack from "@/components/TheStack";
import Thinking from "@/components/Thinking";
import Systems from "@/components/Systems";
import ByTheNumbers from "@/components/ByTheNumbers";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--color-bg)] min-h-screen transition-colors duration-300">
      <Navigation />
      <Hero />
      <EvidenceBoard />
      <Manifesto />
      <TheStack />
      <Thinking />
      <Systems />
      <ByTheNumbers />
      <About />
      <Footer />
    </main>
  );
}
