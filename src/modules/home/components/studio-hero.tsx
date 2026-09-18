"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_CONFIG } from "@/constants/site-config";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  MessageCircle,
  ArrowRight,
  MapPin,
  Sparkles,
  BatteryCharging,
  ShieldCheck,
} from "lucide-react";
import { CameraViewer3D } from "./camera-viewer-3d";

interface StudioHeroProps {
  onSelectVibe: (vibeId: string) => void;
  onOpenReel: () => void;
}

export function StudioHero({ onSelectVibe, onOpenReel }: StudioHeroProps) {
  const { locale } = useLanguage();
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState("travel-cafe");

  const handleExplore = () => {
    onSelectVibe(selectedGoal);
    router.push("/products");
  };

  return (
    <section className="relative min-h-[90svh] flex items-center bg-bg-ground pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Delicate paper grain & subtle ambient warmth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
      >
        <div
          className="absolute -top-32 -right-32 w-[55vw] h-[55vw] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #EDE1D2 0%, rgba(246, 240, 231, 0) 70%)",
          }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[45vw] h-[45vw] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #E8B69A 0%, rgba(246, 240, 231, 0) 60%)",
          }}
        />
      </div>

      <div className="container-editorial relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
          {/* Left Column: Handcrafted Brand & Intent Bar */}
          <div>
            {/* Studio Location Stamp */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border-subtle bg-surface mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-accent-sage inline-block animate-pulse" />
              <span className="font-mono text-[11px] sm:text-xs text-text-muted tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-terracotta inline" />
                179B Nguyễn Công Trứ, Sơn Trà · Đà Nẵng
              </span>
            </div>

            {/* Main Editorial Headline with continuous inline flow */}
            <h1 className="mb-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.2] tracking-tight">
              <span className="italic font-normal text-accent-terracotta">
                {locale === "vi"
                  ? "Ghi lại những khung hình thơ "
                  : "Capture your poetry "}
              </span>
              <span className="font-semibold text-text-primary">
                {locale === "vi"
                  ? "cùng tiệm thuê máy ảnh Fujifilm tại Đà Nẵng."
                  : "with our curated Fujifilm camera studio in Da Nang."}
              </span>
            </h1>

            {/* Friendly, human description */}
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-lg mb-7 font-light">
              {locale === "vi"
                ? "Tụi mình chuẩn bị sẵn những combo máy ảnh Fujifilm màu phim ấm áp, lens chân dung và studio 360m². Đầy đủ phụ kiện pin sạc, cài sẵn màu film đẹp, cầm máy là chụp được ngay."
                : "Curated aesthetic Fujifilm cameras, portrait glass, and 360m² studio in Da Nang. Every kit comes loaded with vintage film recipes, 2 batteries, and memory cards."}
            </p>

            {/* Transparent Daily Price Banner */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface border border-border-subtle mb-7 shadow-xs">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                {locale === "vi" ? "GIÁ THUÊ TỪ" : "DAILY RATES FROM"}
              </span>
              <span className="font-mono font-bold text-accent-terracotta text-lg sm:text-xl">
                350.000đ
                <span className="text-xs text-text-muted font-normal">
                  {" "}
                  / ngày
                </span>
              </span>
              <span className="text-[11px] font-mono text-accent-sage bg-accent-sage/15 px-2 py-0.5 rounded-full font-medium">
                {locale === "vi" ? "Thuê từ 3 ngày -15%" : "3+ days -15%"}
              </span>
            </div>

            {/* Original Interactive Intent Bar */}
            <div className="card-surface p-4 sm:p-5 rounded-2xl border border-border-subtle shadow-sm mb-7 max-w-xl">
              <span className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2.5 font-semibold">
                {locale === "vi"
                  ? "BẠN ĐANG CẦN CHỤP GÌ CHO CHUYẾN ĐI?"
                  : "WHAT ARE YOU SHOOTING TODAY?"}
              </span>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  {
                    id: "travel-cafe",
                    vi: "☕ Đi café & dạo phố",
                    en: "☕ Café & Travel",
                  },
                  {
                    id: "portrait",
                    vi: "🌸 Chụp kỷ yếu & nàng thơ",
                    en: "🌸 Portraits & Grad",
                  },
                  {
                    id: "video",
                    vi: "🎬 Quay TikTok & Reels",
                    en: "🎬 TikTok & Reels",
                  },
                  {
                    id: "medium-format",
                    vi: "✨ Studio Lookbook 102MP",
                    en: "✨ Studio Lookbook",
                  },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedGoal(option.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all cursor-pointer border ${
                      selectedGoal === option.id
                        ? "bg-accent-terracotta/10 border-accent-terracotta text-accent-terracotta font-semibold"
                        : "bg-surface-raised border-transparent text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {locale === "vi" ? option.vi : option.en}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleExplore}
                  className="w-full sm:w-auto flex-1 btn-primary-terracotta text-xs sm:text-sm py-2.5 justify-center shadow-xs cursor-pointer"
                >
                  <span>
                    {locale === "vi"
                      ? "Xem tủ máy phù hợp ngay"
                      : "Browse Matching Cameras"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={SITE_CONFIG.social.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-secondary-subtle text-xs sm:text-sm py-2.5 justify-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-accent-terracotta" />
                  <span>
                    {locale === "vi" ? "Nhắn Zalo tiệm tư vấn" : "Chat on Zalo"}
                  </span>
                </a>
              </div>
            </div>

            {/* 3 Reassurance Perks */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted font-light pt-2">
              <span className="inline-flex items-center gap-1.5">
                <BatteryCharging className="w-4 h-4 text-accent-terracotta" />
                {locale === "vi"
                  ? "Đủ 2 pin sạc & thẻ 128GB"
                  : "2 batteries & 128GB SD"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent-sage" />
                {locale === "vi"
                  ? "Giao tận nơi Đà Nẵng - Hội An"
                  : "Local hotel delivery"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-accent-peach" />
                {locale === "vi"
                  ? "Cài sẵn màu film đẹp"
                  : "Vintage recipes loaded"}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Camera & Film Frame */}
          <div className="relative">
            {/* Scrapbook Tape Accent on the left corner */}
            <div
              className="absolute -top-3 left-10 w-28 h-6 bg-[#EFE6D8]/85 border-x border-[#DCCBBC] -rotate-2 z-20 shadow-xs pointer-events-none"
              aria-hidden="true"
            />

            {/* Hand-drawn Paper Arrow pointing to the 3D Camera - Extended & placed close to top-right corner of photo */}
            <div
              className="absolute -top-20 -right-2 sm:-top-24 sm:right-2 lg:right-4 z-30 pointer-events-none animate-paper-arrow hidden sm:block"
              aria-hidden="true"
            >
              <div className="flex flex-col items-center gap-1.5">
                {/* Paper Strip Tag with Handcrafted Text - Positioned centrally above the arrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF9F2]/95 backdrop-blur-md border border-[#DCCBBC] shadow-xs rotate-[3deg]">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta animate-ping shrink-0 mt-0.5" />
                  <span className="font-display italic text-xs md:text-sm text-accent-terracotta font-medium tracking-tight whitespace-nowrap leading-none pt-1">
                    {locale === "vi"
                      ? "Xem ngoại hình 3D máy ảnh ✦"
                      : "Explore 3D camera body ✦"}
                  </span>
                </div>

                {/* Handcrafted Curved Paper Arrow SVG - Extended longer reach curving into the camera */}
                <svg
                  width="100"
                  height="72"
                  viewBox="0 0 100 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent-terracotta -mt-1 filter drop-shadow-[0_1px_2px_rgba(49,41,34,0.12)]"
                >
                  {/* Textured, longer swooping dashed stroke down-left towards camera */}
                  <path
                    d="M 52 2 C 48 24, 30 42, 12 56"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeDasharray="4 3"
                    className="opacity-90"
                  />
                  {/* Arrowhead pointing down-left into the 3D frame */}
                  <path
                    d="M 26 50 L 10 58 L 16 40"
                    stroke="currentColor"
                    strokeWidth="2.0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Main Curated Showcase Frame with 3D Model Viewer */}
            <div className="card-surface p-4 rounded-2xl shadow-md border border-border-subtle relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-raised border border-border-subtle/60 flex items-center justify-center">
                <CameraViewer3D onOpenReel={onOpenReel} />
              </div>

              {/* Caption Note Below Image */}
              <div className="mt-3 px-1 flex items-center justify-between text-xs text-text-muted font-light">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-primary font-medium">
                  {locale === "vi"
                    ? "MÔ HÌNH 3D XOAY 360°"
                    : "360° INTERACTIVE 3D MODEL"}
                </span>
                <span className="text-[11px] font-mono text-accent-terracotta">
                  {locale === "vi"
                    ? "Rê chuột để đổi góc nhìn"
                    : "Hover to rotate view"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
