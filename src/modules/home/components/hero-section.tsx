"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, ArrowRight, ShieldCheck, BatteryCharging, Sparkles, MapPin } from "lucide-react";

interface HeroSectionProps {
  onOpenReel: () => void;
}

export function HeroSection({ onOpenReel }: HeroSectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section id="home" className="relative min-h-[92svh] flex items-center overflow-hidden bg-bg-ground pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Soft warm ambient background accents (subtle paper warmth, no neon orbs) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-24 -right-24 w-[48vw] h-[48vw] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #EDE1D2 0%, rgba(246, 240, 231, 0) 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #E8B69A 0%, rgba(246, 240, 231, 0) 70%)" }}
        />
      </div>

      <div className="container-editorial relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div>
            {/* Location & Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-surface mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-sage inline-block animate-pulse" />
              <span className="font-mono text-xs text-text-muted tracking-wide flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent-terracotta inline" />
                179B Nguyễn Công Trứ, Sơn Trà · Đà Nẵng
              </span>
            </div>

            {/* Main Editorial Headline with SVN-Tangerine HB brand accent */}
            <h1 className="text-text-primary mb-6">
              <span className="block font-brand text-4xl sm:text-5xl md:text-6xl text-accent-terracotta leading-tight">
                {locale === "vi" ? "Ghi lại từng khoảnh khắc đẹp" : "Capture beautiful memories"}
              </span>
              <span className="block font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-text-primary mt-1">
                {locale === "vi"
                  ? "cùng máy ảnh tone film hoài niệm."
                  : "with analog-warmth cameras."}
              </span>
            </h1>

            {/* Approachable Description */}
            <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-light">
              {t("hero.desc")}
            </p>

            {/* Price Starting Anchor (Transparent Pricing Priority #1) */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-surface border border-border-subtle mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                {locale === "vi" ? "Giá thuê ngày chỉ từ" : "Daily rates from"}
              </span>
              <span className="font-mono font-bold text-accent-terracotta text-lg sm:text-xl">
                350.000đ<span className="text-xs text-text-muted font-normal"> / ngày</span>
              </span>
              <span className="hidden sm:inline text-xs text-accent-sage font-medium bg-accent-sage/15 px-2 py-0.5 rounded-full">
                {locale === "vi" ? "Thuê từ 3 ngày -15%" : "3+ days discount"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#equipment"
                className="btn-primary-terracotta text-sm sm:text-base font-medium shadow-sm hover:shadow-md"
              >
                <span>{t("hero.ctaRent")}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href={SITE_CONFIG.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-subtle text-sm sm:text-base hover:text-accent-terracotta"
              >
                <MessageCircle className="w-4 h-4 text-accent-terracotta" />
                <span>{t("hero.ctaZalo")}</span>
              </a>
            </div>

            {/* 3 Friendly Commitment Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-border-subtle">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <BatteryCharging className="w-4 h-4 text-accent-terracotta shrink-0" />
                <span>{t("hero.badge1")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <ShieldCheck className="w-4 h-4 text-accent-sage shrink-0" />
                <span>{t("hero.badge2")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <Sparkles className="w-4 h-4 text-accent-peach shrink-0" />
                <span>{t("hero.badge3")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (Real Camera Focal Point + Film Frame) */}
          <div className="relative">
            {/* Scrapbook Tape Accent at top-right */}
            <div
              className="absolute -top-3 right-8 w-24 h-6 bg-[#EFE6D8]/80 backdrop-blur-sm border-x border-[#DCCBBC]/70 rotate-2 z-20 shadow-xs pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Editorial Photo Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-border-subtle bg-surface p-3 shadow-md">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-raised">
                <picture>
                  <source
                    media="(max-width:768px)"
                    srcSet="/images/hero-cinematic-828cbed.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/hero-cinematiccbed.jpg"
                    alt="Bộ máy ảnh Fujifilm X-Series trên bối cảnh Đà Nẵng"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  />
                </picture>

                {/* Soft gradient overlay for calm film warmth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#312922]/50 via-transparent to-transparent pointer-events-none" />

                {/* Film Recipe Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/95 z-10 bg-[#312922]/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-peach" />
                    <span>FUJIFILM X-T5 · Classic Chrome</span>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenReel}
                    className="hover:underline text-accent-peach cursor-pointer font-sans text-xs"
                  >
                    {locale === "vi" ? "Xem video thực tế →" : "Watch sample reel →"}
                  </button>
                </div>
              </div>

              {/* Ready-to-Shoot Mini Inclusion Note underneath photo */}
              <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-text-muted">
                <span className="font-mono text-[11px]">KIT SẴN SÀNG BẤM MÁY</span>
                <span className="text-[11px] text-text-primary font-medium">
                  {locale === "vi" ? "Nhận máy tại tiệm hoặc giao nhanh 30p" : "Pickup or 30-min local delivery"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
