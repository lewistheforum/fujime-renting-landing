"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function MarqueeTicker() {
  const { locale } = useLanguage();

  const perks = locale === "vi" ? [
    "Sạc đầy 2 pin kèm theo mỗi máy",
    "Thẻ nhớ SD tốc độ cao 128GB",
    "Túi đựng chống sốc thời trang",
    "Giao tận nơi Đà Nẵng & Hội An",
    "Cài sẵn công thức màu film đẹp",
    "Thủ tục nhanh gọn, cọc linh hoạt cho sinh viên",
    "Studio 360m² phông vô cực tại Sơn Trà",
  ] : [
    "2 fully charged batteries included",
    "High-speed 128GB SD card",
    "Protective canvas carry bag",
    "Local delivery in Da Nang & Hoi An",
    "Preloaded vintage film recipes",
    "Friendly student deposit options",
    "360m² cyclorama studio in Sơn Trà",
  ];

  return (
    <section className="py-4 border-y border-border-subtle bg-surface-raised/60 overflow-hidden" aria-label="Rental Perks">
      <div className="relative w-full flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee-scroll min-w-full shrink-0 items-center justify-around">
          {perks.map((item, idx) => (
            <span
              key={`pk-1-${idx}`}
              className="inline-flex items-center gap-4 font-body text-xs sm:text-sm font-medium tracking-wide text-text-muted mx-5"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta/60" aria-hidden="true" />
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-scroll min-w-full shrink-0 items-center justify-around" aria-hidden="true">
          {perks.map((item, idx) => (
            <span
              key={`pk-2-${idx}`}
              className="inline-flex items-center gap-4 font-body text-xs sm:text-sm font-medium tracking-wide text-text-muted mx-5"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta/60" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
