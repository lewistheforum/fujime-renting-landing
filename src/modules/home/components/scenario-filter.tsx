"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Compass, Sparkles, Video, Camera, Heart, Film } from "lucide-react";

export interface ScenarioItem {
  id: string;
  icon: typeof Compass;
  labelVi: string;
  labelEn: string;
  descVi: string;
  descEn: string;
  recommendedGear: string;
}

export const SCENARIOS: ScenarioItem[] = [
  {
    id: "travel-cafe",
    icon: Compass,
    labelVi: "Du lịch & Đi café",
    labelEn: "Travel & Café Hopping",
    descVi: "Máy nhỏ gọn, tone màu hoài niệm, chuyển ảnh sang điện thoại cực nhanh.",
    descEn: "Compact, beautiful film recipes, instant phone photo transfer.",
    recommendedGear: "Fujifilm X-T5, X-T30 II, Lens 27mm f/2.8",
  },
  {
    id: "graduation-portrait",
    icon: Heart,
    labelVi: "Chụp kỷ yếu & Nàng thơ",
    labelEn: "Graduation & Portraits",
    descVi: "Xóa phông mượt mà, màu da trong trẻo tự nhiên, chụp ngược sáng lung linh.",
    descEn: "Creamy background blur, luminous skin tones, dreamy portraits.",
    recommendedGear: "Fujifilm X-T5 + 56mm f/1.2, X-H2S",
  },
  {
    id: "tiktok-reels",
    icon: Video,
    labelVi: "Quay TikTok & Reels",
    labelEn: "TikTok & Reels Content",
    descVi: "Chống rung mạnh mẽ cầm tay, video 4K nét căng, lấy nét theo mắt cực nhạy.",
    descEn: "Rock-solid IBIS stabilization, 4K video, reliable eye autofocus.",
    recommendedGear: "Sony FX3, Fujifilm X-H2S, Mic không dây",
  },
  {
    id: "film-simulation",
    icon: Film,
    labelVi: "Màu ảnh Vintage Film",
    labelEn: "Analog Film Simulations",
    descVi: "Công thức màu Classic Chrome, Nostalgic Neg — chụp là đẹp, không cần chỉnh sửa.",
    descEn: "Iconic Classic Chrome and Nostalgic Neg film recipes straight out of camera.",
    recommendedGear: "Fujifilm X-T5, GFX 100 II",
  },
  {
    id: "fashion-lookbook",
    icon: Sparkles,
    labelVi: "Lookbook & Studio",
    labelEn: "Lookbooks & Fashion",
    descVi: "Độ phân giải cực cao, chi tiết chất liệu sắc nét cho brand thời trang và mẫu ảnh.",
    descEn: "High-resolution sensor, crisp fabric textures for fashion brands.",
    recommendedGear: "Fujifilm GFX 100 II, X-T5 + Studio 360m²",
  },
];

interface ScenarioFilterProps {
  activeScenario: string;
  onSelectScenario: (id: string) => void;
}

export function ScenarioFilter({ activeScenario, onSelectScenario }: ScenarioFilterProps) {
  const { locale } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-bg-ground border-b border-border-subtle" id="scenarios">
      <div className="container-editorial">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
            {locale === "vi" ? "Gợi ý theo mục đích" : "Curated for your shoot"}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-text-primary mt-2">
            {locale === "vi" ? "Hôm nay bạn cần chụp gì?" : "What are you shooting today?"}
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-2 font-light">
            {locale === "vi"
              ? "Bấm vào nhu cầu của bạn để xem gợi ý combo máy và phụ kiện vừa tay nhất."
              : "Select your project style below to see matching cameras and pre-bundled accessories."}
          </p>
        </div>

        {/* Scrollable / Responsive Scenario Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {SCENARIOS.map((item) => {
            const Icon = item.icon;
            const isSelected = activeScenario === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectScenario(item.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-surface border-accent-terracotta shadow-md ring-1 ring-accent-terracotta/20"
                    : "bg-surface/70 border-border-subtle hover:bg-surface hover:border-text-muted/40"
                }`}
              >
                <div>
                  <div
                    className={`w-9 h-9 rounded-lg grid place-items-center mb-3 transition-colors ${
                      isSelected
                        ? "bg-accent-terracotta text-white"
                        : "bg-surface-raised text-accent-terracotta"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary mb-1">
                    {locale === "vi" ? item.labelVi : item.labelEn}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                    {locale === "vi" ? item.descVi : item.descEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border-subtle/60 text-[11px] font-mono text-accent-terracotta">
                  {isSelected
                    ? (locale === "vi" ? "Đang chọn ✓" : "Selected ✓")
                    : (locale === "vi" ? "Xem máy →" : "View gear →")}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
