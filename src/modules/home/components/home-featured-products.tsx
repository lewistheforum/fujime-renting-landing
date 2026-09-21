"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { VERIFIED_CAMERA_KITS } from "@/constants/homepage-data";
import { ArrowRight, MessageCircle, Check } from "lucide-react";

export function HomeFeaturedProducts() {
  const { locale } = useLanguage();

  // Exactly 6 featured products
  const featuredKits = VERIFIED_CAMERA_KITS.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-bg-ground relative border-t border-border-subtle" id="featured-cameras">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {locale === "vi" ? "TỦ MÁY ẢNH NỔI BẬT" : "FEATURED CAMERA KITS"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
              {locale === "vi" ? "Combo máy sẵn sàng" : "Ready-to-Shoot Kits"}{" "}
              <span className="font-display italic font-normal text-accent-terracotta block sm:inline">
                {locale === "vi" ? "cho chuyến đi của bạn." : "for your creative journey."}
              </span>
            </h2>
          </div>

          <p className="text-text-muted max-w-md text-sm sm:text-base font-light leading-relaxed">
            {locale === "vi"
              ? "Tất cả combo đều sạc đầy 100%, nạp sẵn công thức màu film vintage, kèm 2 pin, thẻ nhớ và túi đeo. Chỉ việc nhận máy và bấm chụp."
              : "Every combo is 100% charged with vintage film recipes loaded, 2 batteries, memory card, and canvas pouch. Pick up and shoot instantly."}
          </p>
        </div>

        {/* 6 Products Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredKits.map((kit) => (
            <article
              key={kit.id}
              className="card-surface p-5 flex flex-col justify-between hover:border-accent-terracotta/60 transition-all duration-300 group hover:shadow-md relative"
            >
              <div>
                {/* Photo Container with 3:2 aspect ratio */}
                <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-surface-raised mb-4 border border-border-subtle/70">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/35 via-black/10 to-transparent pointer-events-none" />

                  {/* Highlight Tag */}
                  <span className="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-surface/95 backdrop-blur-md text-accent-terracotta border border-accent-terracotta/40 shadow-sm">
                    {locale === "vi" ? kit.badgeVi : kit.badgeEn}
                  </span>

                  {/* Availability Badge */}
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
                  <Link
                    href={`/products/${kit.id}`}
                    className="font-display font-semibold text-lg text-text-primary group-hover:text-accent-terracotta transition-colors block"
                  >
                    {kit.name}
                  </Link>
                </div>

                {/* Friendly Vibe Tagline */}
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  {locale === "vi" ? kit.vibeVi : kit.vibeEn}
                </p>

                {/* What's included checklist */}
                <div className="bg-surface-raised/70 rounded-xl p-3 mb-4 border border-border-subtle/60 text-xs">
                  <div className="font-mono text-[10px] uppercase text-text-muted font-semibold tracking-wider mb-2 flex items-center gap-1">
                    <Check className="w-3 h-3 text-accent-sage" />
                    {locale === "vi" ? "TRONG COMBO CÓ SẴN:" : "WHAT'S IN THE BOX:"}
                  </div>
                  <ul className="space-y-1 text-text-primary text-[11px] font-light">
                    {(locale === "vi" ? kit.whatsIncludedVi : kit.whatsIncludedEn).slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-accent-terracotta" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing & Actions */}
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
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-accent-sage block">
                      {locale === "vi" ? "Thuê từ 3 ngày" : "3+ days"}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {kit.threeDayDiscountVND} / ngày
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/products/${kit.id}`}
                    className="btn-secondary-subtle text-xs py-2 justify-center shadow-2xs text-center"
                  >
                    <span>{locale === "vi" ? "Chi tiết" : "Details"}</span>
                  </Link>
                  <a
                    href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                      `Chào tiệm Fujime, mình muốn hỏi thuê máy ${kit.name} cho chuyến đi sắp tới ạ.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-terracotta text-xs py-2 justify-center shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{locale === "vi" ? "Giữ máy" : "Reserve"}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Products Button (CTA Navigation to /products) */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent-terracotta text-white font-mono text-sm tracking-wider uppercase font-semibold shadow-md hover:bg-[#a85a40] hover:shadow-lg transition-all duration-300 group"
          >
            <span>{locale === "vi" ? "Xem toàn bộ tủ máy & phụ kiện (12+ combo)" : "View All Cameras & Accessories"}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
          <p className="text-xs font-mono text-text-muted mt-3">
            {locale === "vi" ? "✦ Cập nhật trạng thái máy sẵn sàng hàng ngày" : "✦ Updated daily with ready kits"}
          </p>
        </div>
      </div>
    </section>
  );
}
