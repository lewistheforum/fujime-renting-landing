"use client";

import Link from "next/link";
import { useTimecode } from "@/hooks/useTimecode";
import { SITE_CONFIG } from "@/constants/site-config";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  onOpenReel: () => void;
}

export function HeroSection({ onOpenReel }: HeroSectionProps) {
  const timecode = useTimecode();
  const { t, locale } = useLanguage();

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <picture>
          <source
            media="(max-width:768px)"
            srcSet="/images/hero-cinematic-828cbed.webp"
            type="image/webp"
          />
          <source
            srcSet="/images/hero-cinematic.jpgcbed.webp"
            type="image/webp"
          />
          <img
            src="/images/hero-cinematiccbed.jpg"
            alt="Film crew shooting on location in Da Nang"
            className="hero-img w-full h-full object-cover object-center opacity-70 scale-105 transition-transform duration-1000"
          />
        </picture>
        {/* Cinematic gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,10,11,.96) 0%, rgba(10,10,11,.76) 45%, rgba(10,10,11,.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(0deg, rgba(10,10,11,.95), transparent 60%)",
          }}
        />
        <div
          className="glow-orb absolute"
          style={{
            width: "46vw",
            height: "46vw",
            background: "var(--orange)",
            top: "-12%",
            right: "-12%",
            opacity: 0.16,
            filter: "blur(90px)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 72% 8%, rgba(255,107,26,.12), transparent 60%)",
          }}
        />
      </div>

      {/* REC HUD indicator */}
      <div
        className="hero-tc fixed top-24 right-5 sm:right-8 z-20 flex items-center gap-2 font-mono text-xs text-muted font-bold tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-line"
        aria-hidden="true"
      >
        <span className="rdot w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        <span>REC</span>
        <b id="heroTC" className="text-white font-mono">{timecode}</b>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full pt-32 pb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="eyebrow font-mono text-xs uppercase tracking-widest text-orange font-semibold">
            {t("hero.eyebrow")}
          </span>
          <span className="h-px w-10 bg-orange/60 hidden sm:block"></span>
          <span className="eyebrow !text-muted hidden sm:inline font-mono text-xs uppercase tracking-widest">
            {t("hero.subtitle")}
          </span>
        </div>

        <h1
          className="h-display text-ink font-display font-semibold tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 7.5vw, 6.8rem)", lineHeight: 1.05 }}
        >
          <span className="block">{t("hero.title1")}</span>
          <span className="block">
            {t("hero.title2")}{" "}
            <span className="serif-i text-orange italic font-serif">
              {t("hero.title3")}
            </span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p
            className="text-muted max-w-xl text-base sm:text-lg font-light leading-relaxed"
            style={{ lineHeight: 1.75 }}
          >
            {t("hero.desc")}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 w-full md:w-auto">
            <Link
              href="/contact"
              className="btn btn-primary inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-orange hover:bg-orange-bright text-bg font-semibold text-sm tracking-wide transition-colors w-full sm:w-auto"
            >
              {t("hero.ctaProject")}
            </Link>
            <button
              type="button"
              onClick={onOpenReel}
              className="btn btn-ghost inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-line hover:border-orange/60 bg-surface/40 backdrop-blur-md text-ink hover:text-orange text-sm font-semibold tracking-wide transition-colors w-full sm:w-auto"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>{t("hero.ctaReel")}</span>
            </button>
          </div>
        </div>

        {/* Stats counter row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-line pt-8">
          <div>
            <div
              className="stat-num font-display font-bold text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {SITE_CONFIG.stats.yearsExperience}+
            </div>
            <p className="text-muted2 font-mono text-[10px] tracking-widest mt-1 uppercase">
              {t("hero.statYears")}
            </p>
          </div>

          <div>
            <div
              className="stat-num font-display font-bold text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {SITE_CONFIG.stats.studioSpaceM2}
              <span className="text-orange text-xl font-normal ml-1">m²</span>
            </div>
            <p className="text-muted2 font-mono text-[10px] tracking-widest mt-1 uppercase">
              {t("hero.statSpace")}
            </p>
          </div>

          <div>
            <div
              className="stat-num font-display font-bold text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {SITE_CONFIG.stats.projectsCompleted}+
            </div>
            <p className="text-muted2 font-mono text-[10px] tracking-widest mt-1 uppercase">
              {t("hero.statProjects")}
            </p>
          </div>

          <div>
            <div
              className="stat-num font-display font-bold text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {SITE_CONFIG.stats.rating}
              <span className="text-orange text-xl font-normal ml-1">★</span>
            </div>
            <p className="text-muted2 font-mono text-[10px] tracking-widest mt-1 uppercase">
              {SITE_CONFIG.stats.reviewCount} {t("hero.statReviews")}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] tracking-[.3em] text-muted2 group-hover:text-orange transition-colors">
          SCROLL
        </span>
        <span className="w-px h-8 bg-gradient-to-b from-orange to-transparent"></span>
      </a>
    </section>
  );
}
