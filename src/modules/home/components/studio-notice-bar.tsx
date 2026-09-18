"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { BatteryCharging, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export function StudioNoticeBar() {
  const { locale } = useLanguage();

  const noticeItems = [
    {
      icon: BatteryCharging,
      iconColor: "text-accent-terracotta",
      vi: "Sạc đầy 100% 2 pin + thẻ 128GB",
      en: "2 fully charged batteries & 128GB SD",
    },
    {
      icon: Sparkles,
      iconColor: "text-accent-peach",
      vi: "Cài sẵn công thức màu film hot",
      en: "Preloaded vintage film recipes",
    },
    {
      icon: ShieldCheck,
      iconColor: "text-accent-sage",
      vi: "Cọc linh hoạt cho sinh viên & du khách",
      en: "Flexible student & traveler deposit",
    },
    {
      icon: MapPin,
      iconColor: "text-text-muted",
      vi: "179B Nguyễn Công Trứ, Sơn Trà",
      en: "179B Nguyen Cong Tru, Son Tra",
    },
  ];

  const renderNoticeSegment = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex items-center gap-x-8 shrink-0 px-4">
      {/* Eyebrow Label */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-sage inline-block animate-pulse" />
        <span className="font-mono uppercase tracking-wider text-[11px] text-text-primary font-semibold">
          {locale === "vi" ? "CAM KẾT CỦA TIỆM:" : "STUDIO PROMISE:"}
        </span>
      </div>

      {/* Commitments List */}
      <div className="flex items-center gap-x-8 text-xs text-text-muted font-light shrink-0">
        {noticeItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <span key={idx} className="inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap">
              <Icon className={`w-3.5 h-3.5 ${item.iconColor} shrink-0`} />
              <span>{locale === "vi" ? item.vi : item.en}</span>
            </span>
          );
        })}
      </div>

      {/* Decorative Separator between loops */}
      <span className="text-accent-peach/60 font-serif select-none px-2 shrink-0">✦</span>
    </div>
  );

  return (
    <section
      className="py-3 bg-surface-raised/85 border-y border-border-subtle overflow-hidden relative select-none"
      aria-label="Studio commitments"
    >
      {/* Subtle edge fade masks for smooth seamless entry and exit */}
      <div
        className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-bg-ground via-bg-ground/70 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-bg-ground via-bg-ground/70 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/*
        Continuous infinite marquee running to the right (marquee-right: translateX(-50%) to translateX(0))
        Duplicates the track so the loop is mathematically seamless and gap-free
      */}
      <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
        {renderNoticeSegment("seg-1")}
        {renderNoticeSegment("seg-2")}
        {renderNoticeSegment("seg-3")}
        {renderNoticeSegment("seg-4")}
      </div>
    </section>
  );
}

