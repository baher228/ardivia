import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import RecentProjectsSection from "@/components/RecentProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <RecentProjectsSection />
      <FaqSection />
    </div>
  );
}
