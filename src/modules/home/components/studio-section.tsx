"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { MessageCircle, Check, ArrowRight, Video, Sparkles } from "lucide-react";

export function StudioSection() {
  const { t, locale } = useLanguage();

  return (
    <section id="studio" className="py-20 md:py-28 bg-surface-raised/40 border-y border-border-subtle relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Spec Sheet & Values */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-sage" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {t("studio.eyebrow")}
              </p>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-5">
              {t("studio.title1")}{" "}
              <span className="font-brand text-accent-terracotta font-normal block sm:inline">
                {t("studio.title2")}
              </span>
            </h2>

            <p className="text-text-muted leading-relaxed mb-8 max-w-lg text-sm sm:text-base font-light">
              {t("studio.desc")}
            </p>

            {/* Studio Key Specs Light-table */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <div className="card-surface p-4 rounded-xl text-center">
                <span className="font-mono text-2xl font-bold text-accent-terracotta block">
                  360<span className="text-sm font-normal text-text-muted">m²</span>
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mt-1">
                  {locale === "vi" ? "DIỆN TÍCH SÀN" : "STUDIO FLOOR"}
                </span>
              </div>

              <div className="card-surface p-4 rounded-xl text-center">
                <span className="font-mono text-2xl font-bold text-accent-terracotta block">
                  495K<span className="text-xs font-normal text-text-muted">/h</span>
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mt-1">
                  {locale === "vi" ? "GIÁ THUÊ GIỜ" : "HOURLY RATE"}
                </span>
              </div>

              <div className="card-surface p-4 rounded-xl text-center col-span-2 sm:col-span-1">
                <span className="font-mono text-2xl font-bold text-accent-sage block">
                  3-Phase
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mt-1">
                  {locale === "vi" ? "NGUỒN ĐIỆN 3 PHA" : "3-PHASE POWER"}
                </span>
              </div>
            </div>

            {/* Checklist of amenities included */}
            <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-text-muted font-light">
              <li className="flex items-center gap-2.5 text-text-primary">
                <Check className="w-4 h-4 text-accent-sage shrink-0" />
                <span>{locale === "vi" ? "Phông cuốn cyclorama vô cực trắng & đen" : "Seamless white & black infinity cyclorama"}</span>
              </li>
              <li className="flex items-center gap-2.5 text-text-primary">
                <Check className="w-4 h-4 text-accent-sage shrink-0" />
                <span>{locale === "vi" ? "Phòng thu podcast & talking-head setup sẵn" : "Pre-lit podcast & talking-head recording set"}</span>
              </li>
              <li className="flex items-center gap-2.5 text-text-primary">
                <Check className="w-4 h-4 text-accent-sage shrink-0" />
                <span>{locale === "vi" ? "Đã bao gồm C-stands, chân đèn, cờ tản sáng & apple box" : "Includes C-stands, grip, sandbags, and flags"}</span>
              </li>
              <li className="flex items-center gap-2.5 text-text-primary">
                <Check className="w-4 h-4 text-accent-sage shrink-0" />
                <span>{locale === "vi" ? "Bàn trang điểm gương LED, phòng thay đồ & máy lạnh mát rượi" : "Makeup vanity, fitting room & high-power A/C"}</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                  "Chào tiệm CINEFY, mình muốn hỏi đặt lịch thuê Studio 360m² ạ."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-terracotta text-xs sm:text-sm py-3 px-6 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("studio.cta")}</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneNumbers.studio}`}
                className="btn-secondary-subtle text-xs sm:text-sm py-3 px-5"
              >
                <span>{locale === "vi" ? `Hotline: ${SITE_CONFIG.hotlineStudio}` : `Hotline: ${SITE_CONFIG.hotlineStudio}`}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio Photo Showcase */}
          <div className="relative">
            <div className="card-surface p-3 rounded-2xl shadow-md border border-border-subtle">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-raised">
                <img
                  src="/images/studio-setaaf7.jpg"
                  alt="Không gian studio vô cực 360m² tại Sơn Trà Đà Nẵng"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 tag-badge-sage text-[11px] font-mono shadow-xs">
                  SƠN TRÀ · ĐÀ NẴNG
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
