"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { Heart, Sparkles, MapPin, Coffee } from "lucide-react";

export function AboutSection() {
  const { t, locale } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-bg-ground relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Philosophy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {t("about.eyebrow")}
              </p>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-6">
              {t("about.title1")}{" "}
              <span className="font-brand text-accent-terracotta font-normal block sm:inline">
                {t("about.title2")}
              </span>
            </h2>

            <p className="text-text-muted leading-relaxed mb-6 max-w-xl text-base sm:text-lg font-light">
              {t("about.desc")}
            </p>

            <blockquote className="border-l-2 border-accent-terracotta pl-4 my-6 italic font-display text-xl text-text-primary">
              {t("about.quote")}
            </blockquote>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border-subtle">
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-accent-terracotta shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm text-text-primary">
                    {locale === "vi" ? "Ghé tiệm trò chuyện" : "Drop by for coffee"}
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5">
                    {locale === "vi" ? "Thử máy thoải mái trước khi quyết định thuê" : "Test cameras freely before you rent"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-accent-peach shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm text-text-primary">
                    {locale === "vi" ? "Chỉ dẫn tận tâm" : "Friendly guidance"}
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5">
                    {locale === "vi" ? "Dù bạn chưa từng cầm máy ảnh bao giờ" : "Even if it's your first time shooting"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Warm Analog Photo Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            {/* Scrapbook Tape Detail */}
            <div
              className="absolute -top-3 left-6 w-20 h-5 bg-[#EFE6D8]/80 backdrop-blur-sm border-x border-[#DCCBBC]/70 -rotate-3 z-10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="card-surface p-2.5 rounded-xl shadow-xs">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-surface-raised mb-2">
                <img
                  src="/images/mv-set3c9e.jpg"
                  alt="Không gian làm việc sáng tạo tại tiệm CINEFY"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] font-mono text-text-muted block text-center">
                {locale === "vi" ? "Góc chuẩn bị máy" : "Gear prep bench"}
              </span>
            </div>

            <div className="card-surface p-2.5 rounded-xl shadow-xs mt-6">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-surface-raised mb-2">
                <img
                  src="/images/equip-hero6c7f.jpg"
                  alt="Ống kính và phụ kiện máy ảnh chính hãng"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] font-mono text-text-muted block text-center">
                {locale === "vi" ? "Test thấu kính & sensor" : "Sensor & glass check"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
