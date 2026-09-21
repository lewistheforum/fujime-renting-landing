"use client";

import { useState } from "react";
import { StudioHero } from "./components/studio-hero";
import { StudioNoticeBar } from "./components/studio-notice-bar";
import { HomeFeaturedProducts } from "./components/home-featured-products";
import { StudioSpaceFeature } from "./components/studio-space-feature";
import { RentalTicketFlow } from "./components/rental-ticket-flow";
import { LabStory } from "./components/lab-story";
import { DirectConcierge } from "./components/direct-concierge";
import { ShowreelModal } from "@/components/showreel-modal";

export default function HomeModule() {
  const [isReelOpen, setIsReelOpen] = useState(false);
  const [selectedVibe, setSelectedVibe] = useState("all");

  return (
    <main id="main" className="min-h-screen bg-bg-ground text-text-primary selection:bg-accent-terracotta/20 selection:text-text-primary">
      {/* 1. Studio Counter & Creative Hub Intro (Hero) */}
      <StudioHero
        onSelectVibe={(vibe) => setSelectedVibe(vibe)}
        onOpenReel={() => setIsReelOpen(true)}
      />

      {/* 2. Studio Notice Bar (Infinite marquee to the right) */}
      <StudioNoticeBar />

      {/* 3. Featured 6 Camera Kits with "Xem thêm" link to /products */}
      <HomeFeaturedProducts />

      {/* 4. Studio 360m² Cyclorama Space Feature */}
      <StudioSpaceFeature />

      {/* 5. The 3-Step Rental Ticket Flow, Deposit Policy & Customer Reviews */}
      <RentalTicketFlow />

      {/* 6. Our Sơn Trà Lab Story & 5-minute Onboarding */}
      <LabStory />

      {/* 7. Direct Booking & Instant Concierge (Zalo, Hotline, Base) */}
      <DirectConcierge />

      {/* Video Showreel Modal */}
      <ShowreelModal isOpen={isReelOpen} onClose={() => setIsReelOpen(false)} />
    </main>
  );
}
