"use client";

import React from "react";
import { SITE_CONFIG } from "@/constants/site-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Phone, MapPin, Clock, ShieldCheck, Sparkles, Truck } from "lucide-react";

export function DirectConcierge() {
  const { locale } = useLanguage();

  return (
    <section id="contact-concierge" className="py-20 md:py-28 bg-surface-raised/30 border-t border-border-subtle relative">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Direct Verified Channels */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {locale === "vi" ? "KẾT NỐI GIỮ LỊCH NHANH" : "DIRECT BOOKING & CONCIERGE"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-4">
              {locale === "vi" ? "Nhắn Zalo hoặc gọi tiệm" : "Message on Zalo or call"}{" "}
              <span className="font-display italic font-normal text-accent-terracotta block sm:inline">
                {locale === "vi" ? "để giữ máy nhé." : "to hold your gear."}
              </span>
            </h2>

            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8 font-light max-w-lg">
              {locale === "vi"
                ? "Tụi mình túc trực Zalo từ 08:00 đến 21:00 hàng ngày, phản hồi nhanh trong 5–15 phút. Bạn có thể ghé trực tiếp tiệm tại Sơn Trà hoặc tiệm giao máy tận nơi khách sạn."
                : "We are active on Zalo daily from 08:00 to 21:00, responding within 5–15 minutes. Drop by our Sơn Trà base or request hotel delivery across Da Nang."}
            </p>

            {/* Direct Channel Tiles */}
            <div className="space-y-3.5">
              {/* Zalo Primary Conversion Card */}
              <a
                href={SITE_CONFIG.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface p-4.5 rounded-xl flex items-center justify-between hover:border-accent-terracotta transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#0068ff]/10 text-[#0068ff] grid place-items-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                      {locale === "vi" ? "NHẮN ZALO TRỰC TIẾP (NHANH NHẤT)" : "DIRECT ZALO CHAT (FASTEST)"}
                    </span>
                    <span className="text-base font-semibold text-text-primary group-hover:text-accent-terracotta transition-colors">
                      Zalo: {SITE_CONFIG.phoneNumbers.rental}
                    </span>
                  </div>
                </div>
                <span className="tag-badge-peach text-xs font-mono">
                  {locale === "vi" ? "Mở Zalo →" : "Chat →"}
                </span>
              </a>

              {/* Hotline Thuê Máy */}
              <a
                href={`tel:${SITE_CONFIG.phoneNumbers.rental}`}
                className="card-surface p-4.5 rounded-xl flex items-center justify-between hover:border-accent-terracotta transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-accent-terracotta/10 text-accent-terracotta grid place-items-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                      {locale === "vi" ? "HOTLINE THUÊ MÁY ẢNH & LENS" : "CAMERA RENTAL HOTLINE"}
                    </span>
                    <span className="text-base font-semibold text-text-primary group-hover:text-accent-terracotta transition-colors">
                      {SITE_CONFIG.hotlineRental}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-text-muted">
                  {locale === "vi" ? "Gọi ngay" : "Call now"}
                </span>
              </a>

              {/* Hotline Thuê Studio */}
              <a
                href={`tel:${SITE_CONFIG.phoneNumbers.studio}`}
                className="card-surface p-4.5 rounded-xl flex items-center justify-between hover:border-accent-terracotta transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-accent-sage/15 text-accent-sage grid place-items-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                      {locale === "vi" ? "HOTLINE THUÊ STUDIO 360M²" : "STUDIO 360M² HOTLINE"}
                    </span>
                    <span className="text-base font-semibold text-text-primary group-hover:text-accent-terracotta transition-colors">
                      {SITE_CONFIG.hotlineStudio}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-text-muted">
                  {locale === "vi" ? "Đặt studio" : "Book studio"}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio Base & Reassurance Info */}
          <div className="lg:col-span-6 space-y-4">
            {/* Base Studio Address & Map Card */}
            <div className="card-surface p-6 sm:p-7 rounded-2xl border border-border-subtle shadow-xs">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-surface-raised text-accent-terracotta grid place-items-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                    {locale === "vi" ? "ĐỊA CHỈ TIỆM TẠI SƠN TRÀ" : "STUDIO BASE ADDRESS"}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-semibold text-text-primary mt-0.5">
                    {SITE_CONFIG.address}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-text-muted mt-1.5 font-light">
                    <Clock className="w-3.5 h-3.5 text-accent-sage" />
                    <span>08:00 – 21:00 hàng ngày (Cả Thứ 7, Chủ Nhật)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle/80 flex flex-wrap gap-2 text-[11px] font-mono text-text-muted">
                <span className="bg-surface-raised px-2.5 py-1 rounded-md">✦ Cách Cầu Rồng 800m</span>
                <span className="bg-surface-raised px-2.5 py-1 rounded-md">✦ Cách Biển Mỹ Khê 1.2km</span>
                <span className="bg-surface-raised px-2.5 py-1 rounded-md">✦ Chỗ đậu ô tô & xe máy</span>
              </div>
            </div>

            {/* Reassurance Service Guarantees Card */}
            <div className="card-surface-raised p-6 sm:p-7 rounded-2xl border border-border-subtle shadow-xs">
              <h4 className="font-display font-semibold text-base text-text-primary mb-3.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-terracotta" />
                <span>{locale === "vi" ? "Cam kết đồng hành từ tiệm" : "Our Studio Guarantees"}</span>
              </h4>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
                  <span className="text-text-primary font-light">
                    {locale === "vi" ? "Giao máy tận nơi nhanh 30 phút nội thành" : "30-min express delivery in Da Nang"}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-accent-sage shrink-0 mt-0.5" />
                  <span className="text-text-primary font-light">
                    {locale === "vi" ? "Hoàn cọc nhanh 5 phút khi trả máy" : "Instant 5-min deposit return"}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-accent-peach shrink-0 mt-0.5" />
                  <span className="text-text-primary font-light">
                    {locale === "vi" ? "Máy sạc 100%, kèm 2 pin & thẻ tốc độ cao" : "2 batteries & fast SD included"}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
                  <span className="text-text-primary font-light">
                    {locale === "vi" ? "Hướng dẫn thao tác 5 phút cho người mới" : "5-min onboarding for beginners"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
