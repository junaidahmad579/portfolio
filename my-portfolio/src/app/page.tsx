import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import { ProjectCards } from "@/components/ProjectCards";
import Skills from "@/components/Skills-section";



export default async function Home() {

  return (
    <> 
     <Hero/>
     <HeroSection/>
     <Skills/>
     <ProjectCards/>
    </>
  );
}
