import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Publications />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
