"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Play, Sparkles } from "lucide-react";

interface WorkSectionProps {
  onOpenReel: () => void;
}

export function WorkSection({ onOpenReel }: WorkSectionProps) {
  const { t, locale } = useLanguage();

  const sampleFrames = [
    {
      img: "/images/rig-sea0877.jpg",
      titleVi: "Hoàng hôn biển Mỹ Khê",
      titleEn: "Sunset at My Khe Beach",
      camera: "FUJIFILM X-T5",
      recipe: "Classic Chrome Warm",
      tagVi: "Chụp dạo phố & biển",
      tagEn: "Travel & Coastal",
    },
    {
      img: "/images/mv-set3c9e.jpg",
      titleVi: "Chân dung nàng thơ phố cổ",
      titleEn: "Hoi An Old Town Portrait",
      camera: "FUJIFILM X-T5 + 56mm f/1.2",
      recipe: "Astia Dreamy Skin",
      tagVi: "Xóa phông trong trẻo",
      tagEn: "Dreamy Bokeh",
    },
    {
      img: "/images/studio-setaaf7.jpg",
      titleVi: "Lookbook thời trang Studio 360m²",
      titleEn: "Studio 360m² Fashion Lookbook",
      camera: "FUJIFILM GFX 100 II",
      recipe: "Nostalgic Negative",
      tagVi: "Độ chi tiết 102MP",
      tagEn: "102MP High Detail",
    },
    {
      img: "/images/equip-feature28c4.jpg",
      titleVi: "Thước phim tài liệu nghệ thuật",
      titleEn: "Documentary Film Reel",
      camera: "FUJIFILM X-H2S + Cine Rig",
      recipe: "F-Log2 Film Grade",
      tagVi: "Video 6.2K 10-bit",
      tagEn: "6.2K Cinema Video",
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 bg-bg-ground relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-dusty-rose" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {t("work.eyebrow")}
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
              {t("work.title1")}{" "}
              <span className="font-brand text-accent-terracotta font-normal">
                {t("work.title2")}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenReel}
              className="btn-primary-terracotta text-xs sm:text-sm py-2.5 px-5 shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{locale === "vi" ? "Xem Showreel tiệm" : "Watch Studio Reel"}</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid: Subtle photo mat / contact sheet cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sampleFrames.map((item, idx) => (
            <div
              key={idx}
              className="card-surface p-3 rounded-2xl flex flex-col justify-between group hover:border-accent-terracotta/40 transition-all shadow-xs hover:shadow-md"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-raised mb-3">
                <img
                  src={item.img}
                  alt={item.titleVi}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 tag-badge-peach text-[10px] font-mono shadow-xs">
                  {locale === "vi" ? item.tagVi : item.tagEn}
                </span>
              </div>

              <div className="px-1.5 pb-1">
                <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary mb-1">
                  {locale === "vi" ? item.titleVi : item.titleEn}
                </h3>
                <div className="flex items-center justify-between text-xs font-mono text-text-muted mt-2 pt-2 border-t border-border-subtle/60">
                  <span className="text-accent-terracotta font-medium">{item.camera}</span>
                  <span className="text-[11px] text-text-muted">{item.recipe}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about recipes preloaded */}
        <div className="mt-8 text-center text-xs text-text-muted font-light">
          <Sparkles className="w-3.5 h-3.5 text-accent-peach inline mr-1.5" />
          {locale === "vi"
            ? "Mọi máy ảnh Fujifilm thuê tại tiệm đều được nhân viên cài sẵn các công thức màu film hot nhất (Classic Chrome, Nostalgic Neg, Kodak Portra Sim) miễn phí!"
            : "All Fujifilm rental cameras come pre-loaded with curated vintage film simulation recipes ready for your shoot!"}
        </div>
      </div>
    </section>
  );
}
