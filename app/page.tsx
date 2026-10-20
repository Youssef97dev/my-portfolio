import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { BentoSection } from "@/components/bento-section";
import { TimelineSection } from "@/components/timeline-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-teal-500/20 selection:text-teal-400">
      {/* Top Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <BentoSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
