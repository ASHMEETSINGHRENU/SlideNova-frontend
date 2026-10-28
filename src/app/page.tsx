"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { WhyChooseSection } from "@/components/why-choose-us/WhyChooseSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { VisionSection } from "@/components/vision/VisionSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";
import { ProjectModal } from "@/components/modals/ProjectModal";
import { PortfolioItem } from "@/lib/data";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [inquiryService, setInquiryService] = useState<string>("Website Development");

  const handleSelectService = (serviceName: string) => {
    setInquiryService(serviceName);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStartSimilarProject = (projectName: string) => {
    setInquiryService(projectName);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenContactModal = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#09090D] text-[#E8E8F0] selection:bg-[#7655F6] selection:text-white font-sans antialiased">
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenContactModal={handleOpenContactModal} />

      {/* Main Page Flow */}
      <main className="relative">
        {/* Section 1: Hero */}
        <HeroSection onOpenContactModal={handleOpenContactModal} />

        {/* Section 2: About Nova */}
        <AboutSection />

        {/* Section 3: Our Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 4: Our Portfolio */}
        <PortfolioSection onOpenProjectModal={setSelectedProject} />

        {/* Section 5: Why Choose Nova? */}
        <WhyChooseSection />

        {/* Section 6: Our Process */}
        <ProcessSection />

        {/* Section 7: Our Vision */}
        <VisionSection onOpenContactModal={handleOpenContactModal} />

        {/* Section 8: Let's Work Together */}
        <ContactSection initialService={inquiryService} />
      </main>

      {/* Section 9: Footer */}
      <Footer />

      {/* Interactive Project Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilarProject={handleStartSimilarProject}
      />
    </div>
  );
}
