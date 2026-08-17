import Preloader from "@/components/Preloader";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Structure from "@/components/Structure";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0c10] overflow-x-hidden">
      <Preloader />
      <Navbar />
      <Hero />
      <TechStack />
      <Structure />
      <Projects />
      <Services />
      <Footer />
    </main>
  );
}
