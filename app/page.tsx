import HeroSection from "@/components/home/HeroSection";
import ServicesTicker from "@/components/home/ServicesTicker";
import ServicesGrid from "@/components/home/ServicesGrid";
import ResultsSection from "@/components/home/ResultsSection";
import ProcessSection from "@/components/home/ProcessSection";
import CurrentWork from "@/components/home/CurrentWork";
import ContactCTA from "@/components/home/ContactCTA";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesTicker />
      <AnimateOnScroll>
        <ServicesGrid />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ResultsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ProcessSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CurrentWork />
      </AnimateOnScroll>
      <div className="h-1 w-full bg-ag-yellow" />
      <AnimateOnScroll>
        <ContactCTA />
      </AnimateOnScroll>
    </>
  );
}
