import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Scale from "@/components/Scale";
import Path from "@/components/Path";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Work />
        <Scale />
        <Path />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
