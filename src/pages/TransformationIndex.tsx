import { useEffect } from "react";
import Navigation from "@/components/transformation/Navigation";
import HeroSectionNew from "@/components/transformation/HeroSectionNew";
import WhySection from "@/components/transformation/WhySection";
import PolicyChoice from "@/components/transformation/PolicyChoice";
import TheoryOfChange from "@/components/transformation/TheoryOfChange";
import ValueProposition from "@/components/transformation/ValueProposition";
import OperatingModel from "@/components/transformation/OperatingModel";
import ImplementationPlan from "@/components/transformation/ImplementationPlan";
import NationalAgenda from "@/components/transformation/NationalAgenda";
import ScrollToTop from "@/components/transformation/ScrollToTop";
import Footer from "@/components/transformation/Footer";

const TransformationIndex = () => {
  useEffect(() => {
    // Fade in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content">
        <HeroSectionNew />
        <WhySection />
        <PolicyChoice />
        <TheoryOfChange />
        <ValueProposition />
        <OperatingModel />
        <ImplementationPlan />
        <NationalAgenda />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TransformationIndex;