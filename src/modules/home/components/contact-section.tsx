"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/constants/site-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Clock } from "lucide-react";

export function ContactSection() {
  const { t, locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gearNeed: "Fujifilm X-T5 Kit",
    rentalDates: "",
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
        gearNeed: "Fujifilm X-T5 Kit",
        rentalDates: "",
        note: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-ground border-t border-border-subtle relative">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
          {/* Left Column: Instant Contact Cards */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {t("contact.eyebrow")}
              </p>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-5">
              {t("contact.title1")}{" "}
              <span className="font-brand text-accent-terracotta font-normal block sm:inline">
                {t("contact.title2")}
              </span>
            </h2>

            <p className="text-text-muted leading-relaxed max-w-md mb-8 text-sm sm:text-base font-light">
              {t("contact.desc")}
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-3.5 mb-8">
              {/* Zalo Direct Button (Primary Conversion) */}
              <a
                href={SITE_CONFIG.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface p-4 rounded-xl flex items-center justify-between hover:border-accent-terracotta transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-[#0068ff]/10 text-[#0068ff] grid place-items-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider block">
                      {locale === "vi" ? "NHẮN ZALO TRỰC TIẾP (PHẢN HỒI NHANH)" : "CHAT ON ZALO (FAST RESPONSE)"}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-accent-terracotta transition-colors">
                      Zalo: {SITE_CONFIG.phoneNumbers.rental}
                    </span>
                  </div>
                </div>
                <span className="tag-badge-peach text-xs font-mono">
                  {locale === "vi" ? "Mở Zalo →" : "Open →"}
                </span>
              </a>

              {/* Hotline Thuê Máy */}
              <a
                href={`tel:${SITE_CONFIG.phoneNumbers.rental}`}
                className="card-surface p-4 rounded-xl flex items-center justify-between hover:border-accent-terracotta transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-accent-terracotta/10 text-accent-terracotta grid place-items-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider block">
                      {locale === "vi" ? "HOTLINE THUÊ MÁY ẢNH & THIẾT BỊ" : "CAMERA RENTAL HOTLINE"}
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

              {/* Hotline Studio 360m² */}
              <a
                href={`tel:${SITE_CONFIG.phoneNumbers.studio}`}
                className="card-surface p-4 rounded-xl flex items-center justify-between hover:border-accent-terracotta transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-accent-sage/15 text-accent-sage grid place-items-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider block">
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

              {/* Địa chỉ tiệm */}
              <div className="card-surface p-4 rounded-xl flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-surface-raised text-accent-terracotta grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider block">
                    {locale === "vi" ? "ĐỊA CHỈ TIỆM TẠI SƠN TRÀ" : "STUDIO BASE LOCATION"}
                  </span>
                  <span className="text-sm font-medium text-text-primary block mt-0.5">
                    {SITE_CONFIG.address}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted mt-1.5 font-light">
                    <Clock className="w-3.5 h-3.5 text-accent-sage" />
                    <span>08:00 – 21:00 hàng ngày (Cả Thứ 7, Chủ Nhật)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Booking Inquiry Form */}
          <div className="card-surface p-7 sm:p-9 rounded-2xl border border-border-subtle shadow-sm">
            <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
              {locale === "vi" ? "Gửi yêu cầu giữ máy nhanh" : "Quick Reservation Request"}
            </h3>
            <p className="text-xs sm:text-sm text-text-muted font-light mb-6">
              {locale === "vi"
                ? "Để lại thông tin, tụi mình sẽ kiểm tra lịch và liên hệ lại ngay cho bạn."
                : "Leave your info and dates. We will check availability and confirm promptly."}
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-accent-sage/15 border border-accent-sage/30 text-center">
                <CheckCircle2 className="w-10 h-10 text-accent-sage mx-auto mb-2" />
                <h4 className="font-semibold text-text-primary mb-1">
                  {locale === "vi" ? "Đã nhận yêu cầu!" : "Inquiry Received!"}
                </h4>
                <p className="text-xs text-text-muted">
                  {locale === "vi"
                    ? "Tụi mình sẽ liên hệ lại qua số điện thoại/Zalo của bạn trong ít phút."
                    : "We will contact you via Phone/Zalo shortly."}
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
                      {locale === "vi" ? "Combo máy quan tâm" : "Camera of Interest"}
                    </label>
                    <select
                      value={formData.gearNeed}
                      onChange={(e) => setFormData({ ...formData, gearNeed: e.target.value })}
                      className="input-editorial"
                    >
                      <option value="Fujifilm X-T5 Kit">Fujifilm X-T5 Kit</option>
                      <option value="Fujifilm X-H2S Cine Kit">Fujifilm X-H2S Cine Kit</option>
                      <option value="Fujifilm GFX 100 II">Fujifilm GFX 100 II</option>
                      <option value="Sony FX3 Cinema">Sony FX3 Cinema</option>
                      <option value="Thuê Studio 360m²">Thuê Studio 360m²</option>
                      <option value="Cần tư vấn chọn máy">Chưa biết, cần tư vấn</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                      {locale === "vi" ? "Ngày dự kiến thuê" : "Rental Dates"}
                    </label>
                    <input
                      type="text"
                      placeholder={locale === "vi" ? "Ví dụ: 20/09 - 22/09" : "e.g. Oct 12 - Oct 14"}
                      value={formData.rentalDates}
                      onChange={(e) => setFormData({ ...formData, rentalDates: e.target.value })}
                      className="input-editorial"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                    {locale === "vi" ? "Ghi chú thêm (nếu có)" : "Notes / Questions"}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={locale === "vi" ? "Ví dụ: Mình cần dây nối sang iPhone, giao tại khách sạn gần Cầu Rồng..." : "Any special requests..."}
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
                  <span>{t("contact.btn")}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
