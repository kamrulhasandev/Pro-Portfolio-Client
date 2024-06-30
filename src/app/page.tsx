import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";

export default function Home() {
  return (
    <main className="bg-[#121120] min-h-[calc(100vh-56px)]">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
