import ScrollyCanvas from "@/components/ScrollyCanvas";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import AiSpecialist from "@/components/AiSpecialist";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/30 selection:text-white">
      <ScrollyCanvas />
      <Skills />
      <AiSpecialist />
      <Experience />
      <Achievements />
      <Projects />
    </main>
  );
}
