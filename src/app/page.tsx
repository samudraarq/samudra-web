import AboutSection from "@/components/home/about-section";
import ContactSection from "@/components/home/contact-section";
import HeroSection from "@/components/home/hero-section";

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
