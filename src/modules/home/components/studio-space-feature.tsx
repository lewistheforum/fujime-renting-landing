"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { STUDIO_SPECS } from "@/constants/homepage-data";
import { MessageCircle, Check, Phone, Sparkles, MapPin } from "lucide-react";

export function StudioSpaceFeature() {
  const { locale } = useLanguage();

  return (
    <section id="studio-space" className="py-20 md:py-28 bg-surface-raised/40 border-y border-border-subtle relative">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Light-table Spec Sheet */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-sage" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {locale === "vi" ? "PHIM TRƯỜNG & KHÔNG GIAN SÁNG TẠO" : "CYCLORAMA STUDIO & CREATIVE SPACE"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-5">
              {locale === "vi" ? "Studio 360m² vô cực" : "360m² Infinity Cyclorama"}{" "}
              <span className="font-display italic font-normal text-accent-terracotta block sm:inline">
                {locale === "vi" ? "tại Sơn Trà, Đà Nẵng." : "in Son Tra, Da Nang."}
              </span>
            </h2>

            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8 font-light max-w-lg">
              {locale === "vi"
                ? "Không gian studio phông vô cực trắng & đen, trần cao thoáng đãng, nguồn điện 3 pha công suất lớn và phòng podcast/phỏng vấn setup sẵn. Đặt lịch linh hoạt theo giờ cho cá nhân, creator và local brand thời trang."
                : "Seamless white and black cyclorama with high clearance, 3-phase power, and a pre-lit podcast set. Flexible hourly and daily bookings for creators and fashion brands."}
            </p>

            {/* Light-table Spec Cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {STUDIO_SPECS.map((sp, idx) => (
                <div key={idx} className="card-surface p-4 rounded-xl">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-mono text-2xl font-bold text-accent-terracotta">
                      {sp.metric}
                    </span>
                    {sp.unit && (
                      <span className="text-xs font-mono text-text-muted font-normal">
                        {sp.unit}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-primary font-medium block">
                    {locale === "vi" ? sp.labelVi : sp.labelEn}
                  </span>
                  <p className="text-[11px] text-text-muted font-light mt-1 line-clamp-2">
                    {locale === "vi" ? sp.detailVi : sp.detailEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Booking Actions */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                  "Chào tiệm Fujime, mình muốn hỏi đặt lịch thuê Studio 360m² tại Sơn Trà ạ."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-terracotta text-xs sm:text-sm py-3 px-6 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{locale === "vi" ? "Đặt lịch Studio qua Zalo" : "Book Studio on Zalo"}</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneNumbers.studio}`}
                className="btn-secondary-subtle text-xs sm:text-sm py-3 px-5"
              >
                <Phone className="w-3.5 h-3.5 text-accent-terracotta" />
                <span>{locale === "vi" ? `Hotline Studio: ${SITE_CONFIG.hotlineStudio}` : `Studio: ${SITE_CONFIG.hotlineStudio}`}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio Showcase Card */}
          <div className="relative">
            <div className="card-surface p-4 rounded-2xl shadow-md border border-border-subtle">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-raised mb-3">
                <img
                  src="/images/studio-setaaf7.jpg"
                  alt="Phim trường studio 360m2 Sơn Trà Đà Nẵng"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-surface/95 backdrop-blur-md text-text-primary border border-border-subtle shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-sage inline-block animate-pulse" />
                  <span>SƠN TRÀ · ĐÀ NẴNG</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-surface/90 backdrop-blur-md p-3 rounded-lg border border-border-subtle flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-text-primary block">
                      {locale === "vi" ? "Studio Cyclorama 360m²" : "360m² Cyclorama Studio"}
                    </span>
                    <span className="text-[11px] text-text-muted">
                      179B Nguyễn Công Trứ, An Hải, Sơn Trà
                    </span>
                  </div>
                  <span className="font-mono font-bold text-accent-terracotta text-sm">
                    từ 495.000đ/h
                  </span>
                </div>
              </div>

              <div className="px-1 text-xs text-text-muted font-light flex items-center justify-between">
                <span>{locale === "vi" ? "Đã gồm: C-stands, đèn trần, máy lạnh & bàn trang điểm" : "Includes C-stands, grip, A/C, and makeup station"}</span>
                <span className="text-accent-sage font-mono text-[11px]">SẴN LỊCH THUÊ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
