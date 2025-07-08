import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
