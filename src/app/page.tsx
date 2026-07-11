import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const EvidenceBoard = dynamic(() => import("@/components/EvidenceBoard"));
const MigrationStory = dynamic(() => import("@/components/MigrationStory"));
const GovernmentSection = dynamic(() => import("@/components/GovernmentSection"));
const TheStack = dynamic(() => import("@/components/TheStack"));
const Contact = dynamic(() => import("@/components/Contact"));
const AiAssistant = dynamic(() => import("@/components/AiAssistant"));
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-transparent relative overflow-hidden">
      <Navigation />
      
      <main id="main" className="flex-1 bg-transparent min-h-[100dvh] transition-colors duration-300 relative noise-overlay">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-24">
          <Hero />
          <About />
          <EvidenceBoard />
          <MigrationStory />
          <GovernmentSection />
          <TheStack />
          <Contact />
          <Footer />
        </div>
      </main>
      
      <AiAssistant />
    </div>
  );
}

