"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { VERIFIED_CAMERA_KITS, CameraKit } from "@/constants/homepage-data";
import { MessageCircle, Check, Sparkles, Phone, ArrowRight } from "lucide-react";

interface CuratedWardrobeProps {
  initialVibe?: string;
}

export function CuratedWardrobe({ initialVibe = "all" }: CuratedWardrobeProps) {
  const { locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", vi: "Tất cả combo", en: "All Kits" },
    { id: "travel-cafe", vi: "☕ Du lịch & Café", en: "☕ Travel & Café" },
    { id: "video", vi: "🎬 Quay TikTok & Reels", en: "🎬 Video & TikTok" },
    { id: "medium-format", vi: "✨ Studio 102MP", en: "✨ 102MP Studio" },
    { id: "lens", vi: "🔍 Lens & Anamorphic", en: "🔍 Lenses" },
  ];

  const filteredKits = VERIFIED_CAMERA_KITS.filter((kit) => {
    if (activeCategory === "all") return true;
    return kit.category === activeCategory;
  });

  return (
    <section id="curated-wardrobe" className="pt-6 pb-20 md:pt-8 md:pb-28 bg-bg-ground relative">
      <div className="container-editorial">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-sage" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {locale === "vi" ? "BẢNG GIÁ & TỦ MÁY SẴN SÀNG · SƠN TRÀ, ĐÀ NẴNG" : "PRICE LIST & READY-TO-SHOOT KITS · DA NANG"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
              {locale === "vi" ? "Tủ máy ảnh tuyển chọn" : "Curated Camera Wardrobe"}{" "}
              <span className="font-display italic font-normal text-accent-terracotta block sm:inline">
                {locale === "vi" ? "cho chuyến đi của bạn." : "for your creative trip."}
              </span>
            </h2>
          </div>

          <p className="text-text-muted max-w-md text-sm sm:text-base font-light leading-relaxed">
            {locale === "vi"
              ? "Mọi bộ máy đều là combo hoàn chỉnh: sạc đầy 100%, kèm 2 pin, thẻ nhớ tốc độ cao, túi đeo thời trang và nạp sẵn các công thức màu film hot nhất. Bạn chỉ việc nhận máy và bấm chụp."
              : "Every camera package is a complete kit: 100% charged, 2 batteries, fast memory cards, stylish carry pouch, and pre-loaded vintage film simulations. Grab and start shooting right away."}
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-3 border-b border-border-subtle">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                  : "bg-surface border border-border-subtle text-text-muted hover:text-text-primary hover:border-text-muted"
              }`}
            >
              {locale === "vi" ? cat.vi : cat.en}
            </button>
          ))}
        </div>

        {/* Equipment Cards Grid (Lookbook Kit Sheets) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredKits.map((kit) => (
            <article
              key={kit.id}
              className="card-surface p-5 flex flex-col justify-between hover:border-accent-terracotta/60 transition-all duration-300 group hover:shadow-md relative"
            >
              <div>
                {/* Photo Container with subtle 3:2 photographic mat */}
                <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-surface-raised mb-4 border border-border-subtle/70">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  {/* Subtle top shade to ensure badges pop out crisply in any background */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/35 via-black/10 to-transparent pointer-events-none" />

                  {/* Highlight tag (High contrast on warm ivory surface) */}
                  <span className="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-surface/95 backdrop-blur-md text-accent-terracotta border border-accent-terracotta/40 shadow-sm">
                    {locale === "vi" ? kit.badgeVi : kit.badgeEn}
                  </span>
                  {/* Availability badge */}
                  <span className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-surface/95 backdrop-blur-md text-text-primary border border-border-subtle shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-accent-sage inline-block animate-pulse" />
                    {locale === "vi" ? "Sẵn máy" : "Available"}
                  </span>
                </div>

                {/* Brand & Name */}
                <div className="mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted block">
                    {kit.brand}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent-terracotta transition-colors">
                    {kit.name}
                  </h3>
                </div>

                {/* Friendly Vibe Tagline */}
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  {locale === "vi" ? kit.vibeVi : kit.vibeEn}
                </p>

                {/* What's included checklist (Transparent & Trustworthy) */}
                <div className="bg-surface-raised/70 rounded-xl p-3 mb-4 border border-border-subtle/60 text-xs">
                  <div className="font-mono text-[10px] uppercase text-text-muted font-semibold tracking-wider mb-2 flex items-center gap-1">
                    <Check className="w-3 h-3 text-accent-sage" />
                    {locale === "vi" ? "TRONG COMBO CÓ SẴN:" : "WHAT'S IN THE BOX:"}
                  </div>
                  <ul className="space-y-1 text-text-primary text-[11px] font-light">
                    {(locale === "vi" ? kit.whatsIncludedVi : kit.whatsIncludedEn).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-accent-terracotta" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Specs chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {kit.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-block text-[11px] font-mono text-text-muted bg-surface px-2 py-0.5 rounded border border-border-subtle"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & Booking Trigger */}
              <div className="pt-4 border-t border-border-subtle">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-text-muted block">
                      {locale === "vi" ? "Giá thuê ngày" : "Daily Rate"}
                    </span>
                    <span className="price-editorial text-xl font-bold">
                      {kit.formattedPrice}
                      <span className="text-xs text-text-muted font-normal"> / ngày</span>
                    </span>
                    {kit.isPricePlaceholder && (
                      <span className="text-[9px] font-mono text-text-muted block italic">
                        [Giá tham khảo tiệm]
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-accent-sage block">
                      {locale === "vi" ? "Thuê từ 3 ngày" : "3+ days discount"}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {kit.threeDayDiscountVND} / ngày
                    </span>
                  </div>
                </div>

                {/* Zalo Direct Instant Hold Button */}
                <a
                  href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                    `Chào tiệm Fujime, mình muốn hỏi thuê máy ${kit.name} cho chuyến đi sắp tới ạ.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary-terracotta text-xs py-2.5 justify-center shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{locale === "vi" ? "Nhắn Zalo giữ máy này" : "Reserve Kit on Zalo"}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Concierge Advice Banner for beginners */}
        <div className="card-surface-raised p-6 sm:p-8 rounded-2xl border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-terracotta text-white grid place-items-center shrink-0 shadow-xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-1">
                {locale === "vi"
                  ? "Lần đầu thuê máy và chưa biết chọn combo nào?"
                  : "First time renting and unsure which combo fits?"}
              </h3>
              <p className="text-text-muted text-xs sm:text-sm max-w-xl font-light">
                {locale === "vi"
                  ? "Nhắn cho tiệm qua Zalo, gửi địa điểm bạn định đi (Hội An, biển, Bà Nà hay đi café), tụi mình sẽ tư vấn chiếc máy và ống kính vừa tay nhất trong vòng 5 phút!"
                  : "Send us a message on Zalo with your trip destination. We will suggest the perfect camera and lens combo in 5 minutes!"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={SITE_CONFIG.social.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-terracotta text-xs sm:text-sm py-3 px-6 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{locale === "vi" ? "Hỏi tư vấn chọn máy" : "Ask on Zalo"}</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneNumbers.rental}`}
              className="btn-secondary-subtle text-xs sm:text-sm py-3 px-4 hidden md:inline-flex"
            >
              <Phone className="w-3.5 h-3.5 text-accent-terracotta" />
              <span>{SITE_CONFIG.hotlineRental}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
