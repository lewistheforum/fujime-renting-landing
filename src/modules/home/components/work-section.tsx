"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface WorkSectionProps {
  onOpenReel: () => void;
}

export function WorkSection({ onOpenReel }: WorkSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="work" className="py-24 md:py-32 relative bg-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4 font-mono text-xs text-orange tracking-widest uppercase">
              {t("work.eyebrow")}
            </p>
            <h2
              className="h-display text-ink font-display font-semibold"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.4rem)", lineHeight: 1.1 }}
            >
              {t("work.title1")}{" "}
              <span className="serif-i text-orange italic font-serif">
                {t("work.title2")}
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-xs tracking-widest px-3.5 py-1.5 rounded-full border border-orange/50 text-orange bg-orange/10 font-medium">
              ALL
            </span>
            <span className="font-mono text-xs tracking-widest px-3.5 py-1.5 rounded-full border border-line text-muted">
              COMMERCIALS
            </span>
            <span className="font-mono text-xs tracking-widest px-3.5 py-1.5 rounded-full border border-line text-muted">
              F&amp;B
            </span>
            <span className="font-mono text-xs tracking-widest px-3.5 py-1.5 rounded-full border border-line text-muted">
              MUSIC
            </span>
          </div>
        </div>

        {/* Selected work gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[230px]">
          {/* Main Showreel Card (spans 2x2) */}
          <button
            type="button"
            onClick={onOpenReel}
            className="filmframe col-span-2 row-span-2 relative rounded-2xl overflow-hidden border border-line group text-left cursor-pointer focus:outline-none"
            data-reel
          >
            <div
              className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/rig-sea0877.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="ff-rec absolute top-4 left-4 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-red-500 bg-black/60 px-2.5 py-1 rounded-full border border-line">
              <i className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
              REC 4K
            </div>

            <div className="absolute inset-0 grid place-items-center">
              <span
                className="w-20 h-20 rounded-full grid place-items-center border border-white/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500"
                style={{ background: "rgba(255,107,26,.22)" }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>

            <span className="ff-label absolute bottom-4 left-4 text-xs sm:text-sm font-mono text-white">
              Showreel — <span className="text-orange underline font-semibold">tap to watch</span>
            </span>
          </button>

          <Link
            href="/video-production"
            className="filmframe relative rounded-2xl overflow-hidden border border-line group"
          >
            <div
              className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/op-sea8211.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
              On location
            </span>
          </Link>

          <Link
            href="/video-production"
            className="filmframe relative rounded-2xl overflow-hidden border border-line group"
          >
            <div
              className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/rig-pictor601b.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
              Cinema gear
            </span>
          </Link>

          <Link
            href="/video-production"
            className="filmframe col-span-2 relative rounded-2xl overflow-hidden border border-line group"
          >
            <div
              className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/studio-setaaf7.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
              Studio production · 360m²
            </span>
          </Link>

          <Link
            href="/video-production"
            className="filmframe col-span-2 relative rounded-2xl overflow-hidden border border-line group"
          >
            <div
              className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/work-fireaaf7.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
              VFX · Set build
            </span>
          </Link>

          <Link
            href="/video-production"
            className="filmframe relative rounded-2xl overflow-hidden border border-line group"
          >
            <div
              className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/work-balconyaaf7.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
              Resort · Commercial
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
