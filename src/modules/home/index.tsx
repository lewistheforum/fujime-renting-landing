"use client";

import { useState } from "react";
import { HeroSection } from "./components/hero-section";
import { MarqueeTicker } from "./components/marquee-ticker";
import { AboutSection } from "./components/about-section";
import { ServicesSection } from "./components/services-section";
import { EquipmentSection } from "./components/equipment-section";
import { StudioSection } from "./components/studio-section";
import { WorkSection } from "./components/work-section";
import { AdditionalServicesSection } from "./components/additional-services";
import { ReviewsSection } from "./components/reviews-section";
import { ContactSection } from "./components/contact-section";
import { ShowreelModal } from "@/components/showreel-modal";

export default function HomeModule() {
  const [isReelOpen, setIsReelOpen] = useState(false);

  return (
    <main id="main" className="min-h-screen bg-bg text-ink selection:bg-orange/30">
      <HeroSection onOpenReel={() => setIsReelOpen(true)} />
      <MarqueeTicker />
      <AboutSection />
      <ServicesSection />
      <EquipmentSection />
      <StudioSection />
      <WorkSection onOpenReel={() => setIsReelOpen(true)} />
      <AdditionalServicesSection />
      <ReviewsSection />
      <ContactSection />

      <ShowreelModal isOpen={isReelOpen} onClose={() => setIsReelOpen(false)} />
    </main>
  );
}
