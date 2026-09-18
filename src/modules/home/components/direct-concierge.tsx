"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/constants/site-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export function DirectConcierge() {
  const { locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    selectedKit: "FUJIFILM X-T5 Ready Kit",
    dates: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        selectedKit: "FUJIFILM X-T5 Ready Kit",
        dates: "",
        note: "",
      });
    }, 4000);
  };

  return (
    <section id="contact-concierge" className="py-20 md:py-28 bg-surface-raised/30 border-t border-border-subtle relative">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Verified Channels */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {locale === "vi" ? "KẾT NỐI GIỮ LỊCH NHANH" : "DIRECT BOOKING & CONCIERGE"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-5">
              {locale === "vi" ? "Nhắn Zalo hoặc gọi tiệm" : "Message on Zalo or call"}{" "}
              <span className="font-display italic font-normal text-accent-terracotta block sm:inline">
                {locale === "vi" ? "để giữ máy nhé." : "to hold your gear."}
              </span>
            </h2>

            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8 font-light max-w-md">
              {locale === "vi"
                ? "Tụi mình túc trực Zalo từ 08:00 đến 21:00 hàng ngày, phản hồi nhanh trong 5–15 phút. Bạn có thể ghé trực tiếp tiệm tại Sơn Trà hoặc nhờ tiệm ship tận nơi."
                : "We are active on Zalo daily from 08:00 to 21:00, responding in 5–15 minutes. Drop by our Sơn Trà studio base or request hotel delivery."}
            </p>

            {/* Direct Channel Tiles */}
            <div className="space-y-3.5 mb-8">
              {/* Zalo Primary Conversion Card */}
              <a
                href={SITE_CONFIG.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface p-4 rounded-xl flex items-center justify-between hover:border-accent-terracotta transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-[#0068ff]/10 text-[#0068ff] grid place-items-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                      {locale === "vi" ? "NHẮN ZALO TRỰC TIẾP (NHANH NHẤT)" : "DIRECT ZALO CHAT (FASTEST)"}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-accent-terracotta transition-colors">
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
                className="card-surface p-4 rounded-xl flex items-center justify-between hover:border-accent-terracotta transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-accent-terracotta/10 text-accent-terracotta grid place-items-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                      {locale === "vi" ? "HOTLINE THUÊ MÁY ẢNH & LENS" : "CAMERA RENTAL HOTLINE"}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-accent-terracotta transition-colors">
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
                className="card-surface p-4 rounded-xl flex items-center justify-between hover:border-accent-terracotta transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-accent-sage/15 text-accent-sage grid place-items-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                      {locale === "vi" ? "HOTLINE THUÊ STUDIO 360M²" : "STUDIO 360M² HOTLINE"}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-accent-terracotta transition-colors">
                      {SITE_CONFIG.hotlineStudio}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-text-muted">
                  {locale === "vi" ? "Đặt studio" : "Book studio"}
                </span>
              </a>

              {/* Địa chỉ Base Sơn Trà */}
              <div className="card-surface p-4 rounded-xl flex items-start gap-3.5 shadow-xs">
                <div className="w-11 h-11 rounded-lg bg-surface-raised text-accent-terracotta grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                    {locale === "vi" ? "ĐỊA CHỈ TIỆM TẠI SƠN TRÀ" : "STUDIO BASE ADDRESS"}
                  </span>
                  <span className="text-sm font-medium text-text-primary block mt-0.5">
                    {SITE_CONFIG.address}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted mt-1 font-light">
                    <Clock className="w-3.5 h-3.5 text-accent-sage" />
                    <span>08:00 – 21:00 hàng ngày (Cả Thứ 7, CN)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Hold Reservation Form */}
          <div className="card-surface p-6 sm:p-8 rounded-2xl border border-border-subtle shadow-sm">
            <h3 className="font-display font-semibold text-xl text-text-primary mb-1.5">
              {locale === "vi" ? "Gửi yêu cầu giữ máy nhanh" : "Quick Kit Reservation"}
            </h3>
            <p className="text-xs text-text-muted font-light mb-6">
              {locale === "vi"
                ? "Để lại thông tin, tụi mình sẽ kiểm tra lịch trống và phản hồi qua Zalo/Điện thoại ngay."
                : "Drop your dates and contact info. We will verify availability and confirm promptly."}
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-accent-sage/15 border border-accent-sage/30 text-center">
                <CheckCircle2 className="w-9 h-9 text-accent-sage mx-auto mb-2" />
                <h4 className="font-semibold text-text-primary mb-1">
                  {locale === "vi" ? "Đã nhận yêu cầu!" : "Inquiry Received!"}
                </h4>
                <p className="text-xs text-text-muted">
                  {locale === "vi"
                    ? "Tụi mình sẽ liên hệ lại qua số điện thoại/Zalo trong ít phút."
                    : "We will message or call you shortly to confirm."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                    {locale === "vi" ? "Tên của bạn" : "Your Name"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={locale === "vi" ? "Ví dụ: Ngọc Mai" : "e.g. Alex"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-editorial"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                    {locale === "vi" ? "Số điện thoại / Zalo" : "Phone / Zalo"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-editorial"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                      {locale === "vi" ? "Máy quan tâm" : "Camera Kit"}
                    </label>
                    <select
                      value={formData.selectedKit}
                      onChange={(e) => setFormData({ ...formData, selectedKit: e.target.value })}
                      className="input-editorial"
                    >
                      <option value="FUJIFILM X-T5 Ready Kit">Fujifilm X-T5 Ready Kit</option>
                      <option value="FUJIFILM X-H2S Cine Kit">Fujifilm X-H2S Cine Kit</option>
                      <option value="FUJIFILM GFX 100 II">Fujifilm GFX 100 II (102MP)</option>
                      <option value="Sony FX3 Cinema Kit">Sony FX3 Cinema Kit</option>
                      <option value="Combo Lens Fujinon XF">Combo Lens Fujinon XF</option>
                      <option value="Thuê Studio 360m²">Thuê Studio 360m²</option>
                      <option value="Chưa biết, cần tư vấn">Chưa biết, cần tư vấn</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                      {locale === "vi" ? "Ngày cần thuê" : "Rental Dates"}
                    </label>
                    <input
                      type="text"
                      placeholder={locale === "vi" ? "Ví dụ: 24/09 - 26/09" : "e.g. Oct 12 - Oct 14"}
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className="input-editorial"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                    {locale === "vi" ? "Ghi chú thêm (nếu có)" : "Special Requests"}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={locale === "vi" ? "Ví dụ: Cần thêm cáp cắm vào iPhone, giao tại khách sạn gần biển..." : "Any notes..."}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="input-editorial resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary-terracotta text-sm py-3 justify-center shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{locale === "vi" ? "Gửi yêu cầu giữ máy" : "Send Kit Request"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
