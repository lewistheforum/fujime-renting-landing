"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function StudioSection() {
  const { t } = useLanguage();

  return (
    <section id="studio" className="py-24 md:py-32 bg-bg-2 border-y border-line relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="eyebrow mb-4 font-mono text-xs text-orange tracking-widest uppercase">
              {t("studio.eyebrow")}
            </p>
            <h2
              className="h-display text-ink font-display font-semibold mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.15 }}
            >
              {t("studio.title1")}{" "}
              <span className="serif-i text-orange italic font-serif">
                {t("studio.title2")}
              </span>
            </h2>
            <p
              className="text-muted leading-relaxed mb-9 max-w-lg text-base font-light"
              style={{ lineHeight: 1.85 }}
            >
              {t("studio.desc")}
            </p>

            {/* Studio stats */}
            <div className="grid grid-cols-2 gap-5 mb-9">
              <div>
                <div className="price text-3xl font-display font-bold text-ink">
                  360<span className="text-orange text-lg ml-1">m²</span>
                </div>
                <p className="text-muted2 font-mono text-[10px] tracking-widest mt-1 uppercase">
                  SHOOTING FLOOR
                </p>
              </div>
              <div>
                <div className="price text-3xl font-display font-bold text-ink">
                  from 495K<span className="text-orange text-lg ml-1">/hr</span>
                </div>
                <p className="text-muted2 font-mono text-[10px] tracking-widest mt-1 uppercase">
                  STUDIO RATE
                </p>
              </div>
            </div>

            {/* Bullet features */}
            <ul className="space-y-3 mb-9">
              <li className="flex items-center gap-3 text-ink text-sm sm:text-base">
                <span className="text-orange">✦</span> White &amp; black cyclorama (infinity wall)
              </li>
              <li className="flex items-center gap-3 text-ink text-sm sm:text-base">
                <span className="text-orange">✦</span> Dedicated podcast &amp; talking-head set
              </li>
              <li className="flex items-center gap-3 text-ink text-sm sm:text-base">
                <span className="text-orange">✦</span> Grip, C-stands, flags &amp; apple boxes
              </li>
              <li className="flex items-center gap-3 text-ink text-sm sm:text-base">
                <span className="text-orange">✦</span> Makeup station, client lounge &amp; fast Wi-Fi
              </li>
            </ul>

            <Link
              href="/studio-rental"
              className="btn btn-primary px-8 py-3.5 rounded-full bg-orange hover:bg-orange-bright text-bg font-semibold text-sm tracking-wide transition-colors inline-block"
            >
              {t("studio.cta")}
            </Link>
          </div>

          {/* Studio Video Hub */}
          <div className="relative rounded-3xl overflow-hidden border border-line bg-surface group aspect-[4/3]">
            <video
              className="w-full h-full object-cover"
              src="/video/studio_cyc7989.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/studio-setaaf7.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-xs text-muted bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-line">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
              <span>CYCLORAMA · 360m²</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-white/90">
              <span>High ceiling · 3-phase power</span>
              <span className="text-orange">Sơn Trà, Đà Nẵng</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
