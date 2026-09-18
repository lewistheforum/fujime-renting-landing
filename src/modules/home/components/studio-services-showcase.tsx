"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import {
  Camera,
  Building2,
  Mic2,
  Clapperboard,
  ArrowRight,
  Check,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export function StudioServicesShowcase() {
  const { locale } = useLanguage();

  return (
    <section id="services-overview" className="py-20 md:py-28 bg-bg-ground relative overflow-hidden">
      {/* Subtle ambient warmth background */}
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
        <div
          className="absolute top-1/4 -right-40 w-[45vw] h-[45vw] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #EDE1D2 0%, rgba(246, 240, 231, 0) 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[40vw] h-[40vw] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #E8B69A 0%, rgba(246, 240, 231, 0) 65%)" }}
        />
      </div>

      <div className="container-editorial relative z-10">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-subtle shadow-2xs mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-terracotta inline-block animate-pulse" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-accent-terracotta font-semibold">
                {locale === "vi" ? "HỆ SINH THÁI DỊCH VỤ SÁNG TẠO" : "CREATIVE STUDIO SERVICES"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-[1.15] tracking-tight">
              {locale === "vi" ? "Không gian & Dịch vụ " : "Spaces & Services "}
              <span className="italic font-normal text-accent-terracotta">
                {locale === "vi" ? "dành riêng cho bạn." : "curated for your craft."}
              </span>
            </h2>
          </div>

          <p className="text-text-muted max-w-md text-sm sm:text-base font-light leading-relaxed">
            {locale === "vi"
              ? "Tụi mình chuẩn bị trọn gói từ máy ảnh tone film dạo phố, studio phông vô cực 360m², phòng thu podcast đến ekip sản xuất video chuyên nghiệp tại Sơn Trà, Đà Nẵng."
              : "From pocket-sized vintage film cameras to our 360m² cyclorama studio, podcast room, and creative video crew in Sơn Trà, Da Nang."}
          </p>
        </div>

        {/* Bento Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* ============================================================ */}
          {/* 1. HERO FLAGSHIP CARD: Cho thuê máy ảnh & Combo Ready-to-Shoot */}
          {/* ============================================================ */}
          <article className="lg:col-span-12 card-surface rounded-3xl border border-accent-terracotta/40 shadow-sm p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:shadow-md transition-all duration-300">
            {/* Scrapbook Tape Accent */}
            <div
              className="absolute -top-3 right-12 w-32 h-6 bg-[#EFE6D8]/90 border-x border-[#DCCBBC] rotate-1 z-20 shadow-2xs pointer-events-none hidden sm:block"
              aria-hidden="true"
            />

            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-center">
              {/* Left Column: Information, Specs & Perks */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Service Badge & Info Row */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    <span className="px-3 py-1 rounded-full bg-accent-terracotta text-white font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
                      {locale === "vi" ? "Dịch vụ trọng tâm" : "Core service"}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-raised border border-border-subtle font-mono text-[11px] text-text-muted">
                      {locale === "vi" ? "Tủ máy 30+ thiết bị sẵn sàng" : "30+ curated kits ready"}
                    </span>
                    <span className="font-mono text-xs text-accent-terracotta font-semibold sm:ml-auto">
                      {locale === "vi" ? "Giá từ 350.000đ / ngày" : "From 350k VND / day"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-text-primary mb-4 leading-tight">
                    {locale === "vi"
                      ? "Cho thuê máy ảnh & Combo Ready-to-Shoot"
                      : "Curated Camera Rental & Ready-to-Shoot Kits"}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light mb-6">
                    {locale === "vi"
                      ? "Tủ máy Fujifilm X-Series, GFX 102MP, Canon M10 và dàn lens chân dung nghệ thuật. Máy luôn sạc đầy 100%, nạp sẵn các công thức màu film hot nhất để bạn nhận máy là chụp được ngay không cần chỉnh sửa."
                      : "Curated aesthetic Fujifilm, GFX, and Canon mirrorless kits. Every package comes 100% charged with 2 batteries, fast memory cards, canvas carry pouch, and pre-loaded vintage film simulations."}
                  </p>

                  {/* Key Feature Highlights in 2 Columns */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8 pt-5 border-t border-border-subtle/80">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-text-primary font-light">
                      <Sparkles className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
                      <span>{locale === "vi" ? "Cài sẵn 20+ công thức màu film vintage" : "20+ pre-loaded film recipes"}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-text-primary font-light">
                      <Check className="w-4 h-4 text-accent-sage shrink-0 mt-0.5" />
                      <span>{locale === "vi" ? "Đầy đủ 2 pin sạc, thẻ nhớ 128GB & túi" : "2 batteries, 128GB SD & pouch"}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-text-primary font-light">
                      <Check className="w-4 h-4 text-accent-sage shrink-0 mt-0.5" />
                      <span>{locale === "vi" ? "Giao máy tận nơi Đà Nẵng & Hội An (30p)" : "Fast 30-min local delivery"}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-text-primary font-light">
                      <ShieldCheck className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
                      <span>{locale === "vi" ? "Cọc linh hoạt thẻ SV hoặc CCCD" : "Flexible student deposit policy"}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Action Row */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <Link
                    href="/products"
                    className="w-full sm:w-auto btn-primary-terracotta text-xs sm:text-sm py-3 px-6 shadow-xs justify-center group/btn"
                  >
                    <span>{locale === "vi" ? "Xem toàn bộ tủ máy & bảng giá thuê" : "Browse All Cameras & Rates"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <a
                    href={SITE_CONFIG.social.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto btn-secondary-subtle text-xs sm:text-sm py-3 px-5 justify-center"
                  >
                    <span>{locale === "vi" ? "Nhắn Zalo tiệm tư vấn" : "Chat on Zalo"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent-terracotta" />
                  </a>
                </div>
              </div>

              {/* Right Column: High-Craft Photographic Presentation Card */}
              <div className="relative">
                <div className="card-surface p-3.5 rounded-2xl border border-border-subtle shadow-sm relative">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-raised border border-border-subtle/70">
                    <img
                      src="/images/equip-feature28c4.jpg"
                      alt="Combo máy ảnh Fujifilm cho thuê đầy đủ phụ kiện"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#312922]/60 via-transparent to-transparent pointer-events-none" />

                    {/* High-Contrast Badge Over Photo (PRODUCT.md compliant) */}
                    <div className="absolute top-3 left-3 bg-surface/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border-subtle text-text-primary text-[11px] font-mono font-medium shadow-xs flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-accent-terracotta" />
                      <span>Fujifilm X-Series · X-T5 · X100VI</span>
                    </div>

                    {/* Bottom Recipe Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white bg-[#312922]/75 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/15">
                      <span className="flex items-center gap-2 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-accent-peach" />
                        {locale === "vi" ? "Đã nạp sẵn màu film vintage" : "Vintage recipes loaded"}
                      </span>
                      <span className="text-[11px] text-accent-peach font-mono">
                        {locale === "vi" ? "Sạc đầy 100%" : "Ready to shoot"}
                      </span>
                    </div>
                  </div>

                  {/* Caption underneath photo */}
                  <div className="mt-2.5 px-1 flex items-center justify-between text-[11px] font-mono text-text-muted">
                    <span>{locale === "vi" ? "Trọn gói phụ kiện pin sạc & thẻ" : "Full accessory package included"}</span>
                    <span className="text-accent-terracotta font-medium">
                      {locale === "vi" ? "Giao nhanh 30 phút" : "30-min express drop-off"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 2. CARD: Cho thuê Studio vô cực & Phông nền nghệ thuật (360m²) */}
          {/* ============================================================ */}
          <article className="lg:col-span-4 card-surface rounded-3xl border border-border-subtle shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:border-accent-terracotta/40 hover:shadow-md transition-all duration-300 group">
            <div>
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface-raised mb-6 border border-border-subtle/70">
                <img
                  src="/images/studio-setd3f4.jpg"
                  alt="Không gian studio phông vô cực 360m² tại Sơn Trà Đà Nẵng"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#312922]/50 via-transparent to-transparent pointer-events-none" />

                {/* High Contrast Badges */}
                <div className="absolute top-3 left-3 bg-surface/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-border-subtle font-mono text-[10px] text-accent-terracotta font-semibold uppercase">
                  {locale === "vi" ? "Phim trường 360m²" : "360m² cyclorama"}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 bg-[#312922]/70 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-white/15 text-white font-mono text-[10px] flex items-center justify-between">
                  <span>{locale === "vi" ? "Phông trắng & xám / đen" : "White & black cyclorama"}</span>
                  <span className="text-accent-peach font-mono">Điện 3 pha</span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-text-muted">
                <Building2 className="w-3.5 h-3.5 text-accent-terracotta" />
                <span>{locale === "vi" ? "Không gian sáng tạo" : "Creative studio space"}</span>
              </div>

              <h3 className="font-display font-semibold text-xl text-text-primary mb-2.5 leading-snug">
                {locale === "vi" ? "Studio vô cực 360m² & Phông nền nghệ thuật" : "360m² Cyclorama & Creative Studio"}
              </h3>

              <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-light mb-5">
                {locale === "vi"
                  ? "Không gian phông vô cực trắng tinh khôi, phông đen nghệ thuật, trần cao thoáng, điện 3 pha phục vụ lookbook thời trang, TVC, MV ca nhạc và sự kiện."
                  : "Spacious seamless white and black cyclorama with high clearance, 3-phase power, and dedicated makeup station for fashion lookbooks and commercial shoots."}
              </p>

              {/* Specs Checklist */}
              <div className="space-y-2 mb-6 pt-4 border-t border-border-subtle/70">
                <div className="flex items-center gap-2 text-xs text-text-primary font-light">
                  <Check className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                  <span>{locale === "vi" ? "Trần cao thoáng, phông cong liền mạch" : "Seamless curved cyclorama wall"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-primary font-light">
                  <Check className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                  <span>{locale === "vi" ? "Sẵn C-stands, đèn trần cơ bản & máy lạnh" : "Includes grip, overhead light & A/C"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-primary font-light">
                  <Check className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                  <span>{locale === "vi" ? "Phòng thay đồ và bàn makeup riêng biệt" : "Private fitting & makeup dressing room"}</span>
                </div>
              </div>
            </div>

            {/* Link CTA */}
            <div className="pt-4 border-t border-border-subtle/80">
              <a
                href="#studio-space"
                className="w-full btn-secondary-subtle text-xs py-2.5 justify-center group/btn"
              >
                <span>{locale === "vi" ? "Xem chi tiết studio 360m²" : "Explore 360m² Studio"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent-terracotta transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 3. CARD: Phòng thu Podcast, Talkshow & Livestream */}
          {/* ============================================================ */}
          <article className="lg:col-span-4 card-surface rounded-3xl border border-border-subtle shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:border-accent-terracotta/40 hover:shadow-md transition-all duration-300 group">
            <div>
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface-raised mb-6 border border-border-subtle/70">
                <img
                  src="/images/podcast-set6c9c.jpg"
                  alt="Phòng thu podcast talkshow setup sẵn tại Đà Nẵng"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#312922]/50 via-transparent to-transparent pointer-events-none" />

                {/* High Contrast Badges */}
                <div className="absolute top-3 left-3 bg-surface/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-border-subtle font-mono text-[10px] text-accent-terracotta font-semibold uppercase">
                  {locale === "vi" ? "Setup sẵn đèn & mic" : "Pre-lit & mic set"}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 bg-[#312922]/70 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-white/15 text-white font-mono text-[10px] flex items-center justify-between">
                  <span>{locale === "vi" ? "Micro Shure & Rode pro" : "Shure & Rode Pro Mics"}</span>
                  <span className="text-accent-peach font-mono">Multi-cam 4K</span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-text-muted">
                <Mic2 className="w-3.5 h-3.5 text-accent-terracotta" />
                <span>{locale === "vi" ? "Phòng thu âm chuẩn" : "Acoustic podcast studio"}</span>
              </div>

              <h3 className="font-display font-semibold text-xl text-text-primary mb-2.5 leading-snug">
                {locale === "vi" ? "Phòng thu Podcast, Talkshow & Livestream" : "Podcast, Talkshow & Livestream Room"}
              </h3>

              <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-light mb-5">
                {locale === "vi"
                  ? "Phòng thu cách âm tiêu chuẩn, setup sẵn micro định hướng, ánh sáng cinematic ấm áp và hỗ trợ quay đa góc máy cho creator, phỏng vấn và podcast chuyên nghiệp."
                  : "Sound-treated studio room pre-configured with pro studio mics, multi-angle camera rigging, and warm diffused cinematic lighting for creators."}
              </p>

              {/* Specs Checklist */}
              <div className="space-y-2 mb-6 pt-4 border-t border-border-subtle/70">
                <div className="flex items-center gap-2 text-xs text-text-primary font-light">
                  <Check className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                  <span>{locale === "vi" ? "Micro thu âm lọc tạp âm phòng thu" : "Broadcast noise-cancelling mics"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-primary font-light">
                  <Check className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                  <span>{locale === "vi" ? "Ánh sáng cinematic ấm áp dịu mắt" : "Warm diffused cinematic studio lighting"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-primary font-light">
                  <Check className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                  <span>{locale === "vi" ? "Hỗ trợ kỹ thuật viên setup góc máy" : "On-site multi-angle camera support"}</span>
                </div>
              </div>
            </div>

            {/* Link CTA */}
            <div className="pt-4 border-t border-border-subtle/80">
              <a
                href={SITE_CONFIG.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary-subtle text-xs py-2.5 justify-center group/btn"
              >
                <span>{locale === "vi" ? "Tư vấn đặt lịch phòng thu" : "Book Podcast Set"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-terracotta transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 4. CARD: Dịch vụ Sản xuất Video & Ekip quay chụp */}
          {/* ============================================================ */}
          <article className="lg:col-span-4 card-surface rounded-3xl border border-border-subtle shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:border-accent-terracotta/40 hover:shadow-md transition-all duration-300 group">
            <div>
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface-raised mb-6 border border-border-subtle/70">
                <img
                  src="/images/crew-on-location3c9e.jpg"
                  alt="Ekip sản xuất video ngắn TikTok và Lookbook chuyên nghiệp tại Đà Nẵng"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#312922]/50 via-transparent to-transparent pointer-events-none" />

                {/* High Contrast Badges */}
                <div className="absolute top-3 left-3 bg-surface/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-border-subtle font-mono text-[10px] text-accent-terracotta font-semibold uppercase">
                  {locale === "vi" ? "Ekip tác nghiệp trọn gói" : "Full crew production"}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 bg-[#312922]/70 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-white/15 text-white font-mono text-[10px] flex items-center justify-between">
                  <span>{locale === "vi" ? "Máy quay Cinema 4K/6K" : "Cinema 4K/6K Cam"}</span>
                  <span className="text-accent-peach font-mono">Chỉnh màu film</span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-text-muted">
                <Clapperboard className="w-3.5 h-3.5 text-accent-terracotta" />
                <span>{locale === "vi" ? "Sản xuất hình ảnh" : "Video production crew"}</span>
              </div>

              <h3 className="font-display font-semibold text-xl text-text-primary mb-2.5 leading-snug">
                {locale === "vi" ? "Dịch vụ Sản xuất Video & Ekip quay chụp" : "Video Production & Creative Media Crew"}
              </h3>

              <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-light mb-5">
                {locale === "vi"
                  ? "Ekip trẻ trung, sáng tạo nhận sản xuất video ngắn TikTok, Reels, Lookbook thời trang, TVC, MV âm nhạc và recap sự kiện với màu sắc đậm chất điện ảnh."
                  : "Youthful creative crew producing TikToks, Reels, fashion campaigns, and music videos with distinct analog aesthetics and pro cinema gear."}
              </p>

              {/* Specs Checklist */}
              <div className="space-y-2 mb-6 pt-4 border-t border-border-subtle/70">
                <div className="flex items-center gap-2 text-xs text-text-primary font-light">
                  <Check className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                  <span>{locale === "vi" ? "Lên ý tưởng kịch bản & storyboard trực quan" : "Visual storyboard & concept creation"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-primary font-light">
                  <Check className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                  <span>{locale === "vi" ? "Ekip máy cinema 4K/6K, gimbal & ánh sáng" : "4K/6K cinema camera & lighting setup"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-primary font-light">
                  <Check className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                  <span>{locale === "vi" ? "Dựng phim & chỉnh màu film nghệ thuật" : "Post-production & film-grade grading"}</span>
                </div>
              </div>
            </div>

            {/* Link CTA */}
            <div className="pt-4 border-t border-border-subtle/80">
              <a
                href={SITE_CONFIG.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary-subtle text-xs py-2.5 justify-center group/btn"
              >
                <span>{locale === "vi" ? "Liên hệ trao đổi dự án" : "Discuss Your Project"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-terracotta transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
