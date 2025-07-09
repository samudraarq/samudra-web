import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="pt-16">
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
