import AboutSection from "@/components/HomePage/AboutSection";
import ExperienceSection from "@/components/HomePage/ExperienceSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ProjectSection from "@/components/HomePage/ProjectSection";
import SkillSection from "@/components/HomePage/SkillSection";

export default function Home() {
  return (
    <main className="bg-[#121120] min-h-[calc(100vh-56px)]">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection/>
      <ExperienceSection/>
    </main>
  );
}
