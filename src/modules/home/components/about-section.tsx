"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <p className="eyebrow mb-5 font-mono text-xs text-orange tracking-widest uppercase">
              {t("about.eyebrow")}
            </p>
            <h2
              className="h-display text-ink font-display font-semibold mb-7"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.15 }}
            >
              {t("about.title1")}{" "}
              <span className="serif-i text-orange italic font-serif">
                {t("about.title2")}
              </span>
            </h2>
            <p
              className="text-muted leading-relaxed mb-6 max-w-xl text-base sm:text-lg font-light"
              style={{ lineHeight: 1.85 }}
            >
              {t("about.desc")}
            </p>
            <p className="serif-i text-2xl text-ink font-serif italic mb-9 leading-relaxed">
              {t("about.quote")}
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/#services"
                className="btn btn-ghost px-6 py-3 rounded-full border border-line hover:border-orange text-sm font-semibold tracking-wide text-ink hover:text-orange transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/video-production"
                className="btn btn-ghost px-6 py-3 rounded-full border border-line hover:border-orange text-sm font-semibold tracking-wide text-ink hover:text-orange transition-colors"
              >
                See the work
              </Link>
            </div>
          </div>

          {/* Film frames gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="filmframe h-60 relative rounded-2xl overflow-hidden border border-line group">
              <div
                className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/mv-set3c9e.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="ff-rec absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-red-500 bg-black/60 px-2 py-1 rounded-full border border-line">
                <i className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
                REC
              </div>
              <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
                On set · Da Nang
              </span>
            </div>

            <div className="filmframe h-40 mt-8 relative rounded-2xl overflow-hidden border border-line group">
              <div
                className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/crew-on-location3c9e.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
                Behind the scenes
              </span>
            </div>

            <div className="filmframe h-40 relative rounded-2xl overflow-hidden border border-line group">
              <div
                className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/podcast-set3c9e.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
                Talking-head
              </span>
            </div>

            <div className="filmframe h-60 -mt-8 relative rounded-2xl overflow-hidden border border-line group">
              <div
                className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/camera-rigaaf7.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
                Camera dept
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
