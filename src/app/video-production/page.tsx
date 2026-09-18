"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { WorkSection } from "@/modules/home/components/work-section";
import { AdditionalServicesSection } from "@/modules/home/components/additional-services";
import { useState } from "react";
import { ShowreelModal } from "@/components/showreel-modal";

export default function VideoProductionPage() {
  const { locale } = useLanguage();
  const [isReelOpen, setIsReelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-ink pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <nav className="flex items-center gap-2 text-xs font-mono text-muted mb-4 uppercase">
          <Link href="/" className="hover:text-orange transition-colors">
            {locale === "vi" ? "Trang chủ" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-orange font-semibold">
            {locale === "vi" ? "Sản xuất Video" : "Video Production"}
          </span>
        </nav>

        <div className="max-w-3xl mb-16">
          <h1
            className="font-display font-semibold text-ink mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)", lineHeight: 1.1 }}
          >
            {locale === "vi" ? (
              <>
                Sản xuất Phim &amp; Commercials{" "}
                <span className="serif-i text-orange italic font-serif">trọn gói tại Đà Nẵng.</span>
              </>
            ) : (
              <>
                Film &amp; Commercial Production in{" "}
                <span className="serif-i text-orange italic font-serif">Central Vietnam.</span>
              </>
            )}
          </h1>
          <p className="text-muted text-base sm:text-lg font-light leading-relaxed">
            {locale === "vi"
              ? "Từ TVC quảng cáo, brand film cho resort & khách sạn, music video nghệ thuật đến tài liệu doanh nghiệp. Đội ngũ chuyên nghiệp với thiết bị cinema 4K/6K và phòng hậu kỳ chuẩn màu."
              : "High-end commercial video production, brand films, music videos and luxury resort visual campaigns. In-house directing, camera department, lighting, and DaVinci color grading."}
          </p>
        </div>

        <WorkSection onOpenReel={() => setIsReelOpen(true)} />
        <div className="my-16"></div>
        <AdditionalServicesSection />
      </div>

      <ShowreelModal isOpen={isReelOpen} onClose={() => setIsReelOpen(false)} />
    </div>
  );
}
