"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { VERIFIED_CAMERA_KITS, CameraKit } from "@/constants/homepage-data";
import { TIME_SLOT_OPTIONS } from "@/constants/rental-slots";
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  MessageCircle,
  Phone,
  Calendar,
  Clock,
  Truck,
  BatteryCharging,
  Layers,
  ChevronRight,
  Share2,
  ArrowRight,
  Camera,
} from "lucide-react";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const { locale } = useLanguage();
  const [selectedDays, setSelectedDays] = useState(3);
  const [copied, setCopied] = useState(false);

  // Find camera kit by id
  const kit: CameraKit | undefined = VERIFIED_CAMERA_KITS.find((k) => k.id === params.id);

  if (!kit) {
    notFound();
  }

  // Calculate dynamic price based on days
  const baseRate = kit.pricePerDayVND;
  const isDiscounted = selectedDays >= 3;
  const effectiveDailyRate = isDiscounted ? Math.round(baseRate * 0.85) : baseRate;
  const totalAmount = effectiveDailyRate * selectedDays;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-bg-ground text-text-primary pt-28 pb-24 md:pt-36 md:pb-28">
      <div className="container-editorial">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-subtle text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2">
            <Link href="/products" className="hover:text-accent-terracotta flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{locale === "vi" ? "Tất cả máy" : "All Cameras"}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-text-muted/50" />
            <span className="text-text-primary font-medium">{kit.brand}</span>
            <ChevronRight className="w-3.5 h-3.5 text-text-muted/50" />
            <span className="text-accent-terracotta truncate max-w-[200px] sm:max-w-none font-semibold">
              {kit.name}
            </span>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border-subtle hover:border-accent-terracotta text-text-primary transition-colors cursor-pointer"
          >
            <Share2 className="w-3 h-3 text-accent-terracotta" />
            <span>{copied ? (locale === "vi" ? "Đã chép link!" : "Copied!") : (locale === "vi" ? "Chia sẻ" : "Share")}</span>
          </button>
        </div>

        {/* 2-Column Product Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column: Big Product Photography & Recipe Palette */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card-surface p-4 sm:p-5 rounded-3xl border border-border-subtle shadow-sm relative overflow-hidden">
              {/* Scrapbook Tape Accent */}
              <div
                className="absolute -top-3 right-12 w-28 h-6 bg-[#EFE6D8]/90 border-x border-[#DCCBBC] rotate-1 z-20 shadow-2xs pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-raised border border-border-subtle/70">
                <img
                  src={kit.image}
                  alt={kit.name}
                  className="w-full h-full object-cover object-center"
                />

                {/* Badges Over Image */}
                <span className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-surface/95 backdrop-blur-md text-accent-terracotta border border-accent-terracotta/40 shadow-xs">
                  ★ {locale === "vi" ? kit.badgeVi : kit.badgeEn}
                </span>

                <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-surface/95 backdrop-blur-md text-text-primary border border-border-subtle shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-accent-sage inline-block animate-pulse" />
                  {locale === "vi" ? "Sẵn máy tại tiệm Sơn Trà" : "In Stock at Studio"}
                </span>

                {/* Preloaded Recipes Pill Bar */}
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-[#312922]/75 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15 text-white flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-accent-peach" />
                    <span>{locale === "vi" ? "Cài sẵn công thức màu film:" : "Preloaded recipes:"}</span>
                  </span>
                  <span className="text-accent-peach font-semibold">
                    {kit.filmRecipes.join(" · ")}
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Specs Breakdown */}
            <div className="card-surface p-6 sm:p-7 rounded-2xl border border-border-subtle shadow-xs">
              <h3 className="font-display font-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-terracotta" />
                <span>{locale === "vi" ? "Thông số phần cứng chi tiết" : "Technical Specifications"}</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
                {kit.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-surface-raised/60 border border-border-subtle/80 flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta shrink-0" />
                    <span className="text-text-primary">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Dates, Inclusions & Booking Trigger */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header & Pricing */}
            <div className="card-surface p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-text-muted block mb-1">
                {kit.brand} · {locale === "vi" ? "Combo hoàn chỉnh" : "Complete Ready Kit"}
              </span>
              <h1 className="font-display font-semibold text-2xl sm:text-3xl text-text-primary mb-3 leading-snug">
                {kit.name}
              </h1>

              <p className="text-text-muted text-xs sm:text-sm font-light leading-relaxed mb-6">
                {locale === "vi" ? kit.vibeVi : kit.vibeEn}
              </p>

              {/* Price Calculation Card */}
              <div className="p-4 rounded-2xl bg-surface-raised/70 border border-border-subtle mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-mono text-text-muted">
                    {locale === "vi" ? "Đơn giá ngày chuẩn:" : "Daily Rate:"}
                  </span>
                  <span className="price-editorial text-2xl font-bold">
                    {effectiveDailyRate.toLocaleString("vi-VN")}đ
                    <span className="text-xs text-text-muted font-normal"> / ngày</span>
                  </span>
                </div>

                {isDiscounted && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-sage bg-accent-sage/15 px-2.5 py-1 rounded-full mb-3">
                    <span>✓ {locale === "vi" ? "Đã giảm 15% (Thuê từ 3 ngày)" : "15% off applied (3+ days)"}</span>
                  </div>
                )}

                {/* Day Selector Chips */}
                <div className="pt-3 border-t border-border-subtle/80">
                  <label className="block text-[11px] font-mono text-text-muted uppercase tracking-wider mb-2">
                    {locale === "vi" ? "Chọn số ngày dự kiến thuê:" : "Estimated Rental Duration:"}
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 5].map((days) => (
                      <button
                        key={days}
                        type="button"
                        onClick={() => setSelectedDays(days)}
                        className={`py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer border ${
                          selectedDays === days
                            ? "bg-accent-terracotta text-white font-semibold border-accent-terracotta shadow-xs"
                            : "bg-surface text-text-muted border-border-subtle hover:text-text-primary"
                        }`}
                      >
                        {days} {locale === "vi" ? "ngày" : "days"}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-border-subtle/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-muted">{locale === "vi" ? "Tạm tính tổng cộng:" : "Total Estimate:"}</span>
                  <span className="text-base font-bold text-accent-terracotta">
                    {totalAmount.toLocaleString("vi-VN")}đ
                  </span>
                </div>
              </div>

              {/* Real-Time Pickup Time Slot Preview */}
              <div className="card-surface p-4 rounded-2xl border border-border-subtle mb-5 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent-terracotta" />
                    <span>{locale === "vi" ? "LỊCH TRỐNG KHUNG GIỜ HÔM NAY" : "TODAY'S TIME SLOTS"}</span>
                  </span>
                  <span className="text-[10px] font-mono text-accent-sage flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-sage animate-pulse" />
                    <span>Live Update</span>
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOT_OPTIONS.map((slot) => {
                    const isAvailable = slot.status === "available";
                    const isPending = slot.status === "pending";
                    const isBooked = slot.status === "booked";

                    return (
                      <div
                        key={slot.time}
                        className={`p-2 rounded-xl border text-center transition-all ${
                          isBooked
                            ? "bg-surface-raised/40 border-border-subtle/40 opacity-50"
                            : "bg-surface border-border-subtle"
                        }`}
                      >
                        <span className={`block font-mono text-xs font-bold ${isBooked ? "line-through text-stone-400" : "text-text-primary"}`}>
                          {slot.time}
                        </span>
                        <span className={`text-[9px] font-mono block truncate mt-1 font-medium px-1 py-0.5 rounded ${
                          isAvailable
                            ? "text-emerald-800 bg-emerald-50 border border-emerald-200"
                            : isPending
                            ? "text-amber-800 bg-amber-50 border border-amber-200"
                            : "text-stone-500 bg-stone-100 border border-stone-200"
                        }`}>
                          {isAvailable ? "✓ Sẵn máy" : isPending ? "Đang giữ" : "Đã kín"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inclusions Checklist */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold block mb-2.5">
                  {locale === "vi" ? "TRỌN BỘ COMBO BAO GỒM:" : "WHAT'S INCLUDED IN THIS KIT:"}
                </span>
                <div className="space-y-2 text-xs text-text-primary font-light">
                  {(locale === "vi" ? kit.whatsIncludedVi : kit.whatsIncludedEn).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-sage shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="space-y-2.5 pt-2">
                <Link
                  href={`/dat-hang?kit=${kit.id}&days=${selectedDays}`}
                  className="w-full btn-primary-terracotta text-sm py-3 justify-center shadow-xs font-bold"
                >
                  <span>{locale === "vi" ? `Đặt giữ máy online (${totalAmount.toLocaleString("vi-VN")}đ)` : `Book Kit Online`}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                    `Chào tiệm Fujime, mình muốn giữ máy ${kit.name} thuê trong ${selectedDays} ngày (${totalAmount.toLocaleString(
                      "vi-VN"
                    )}đ) ạ.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary-subtle text-xs py-2.5 justify-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-accent-terracotta" />
                  <span>{locale === "vi" ? "Tư vấn & chốt qua Zalo" : "Reserve on Zalo"}</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phoneNumbers.rental}`}
                  className="w-full text-center text-xs text-text-muted hover:text-accent-terracotta font-mono py-1 block transition-colors"
                >
                  <span>{locale === "vi" ? "Hotline hỗ trợ: 077 977 1234" : "Hotline: 077 977 1234"}</span>
                </a>
              </div>
            </div>

            {/* Reassurance Service Guarantees */}
            <div className="card-surface p-5 rounded-2xl border border-border-subtle text-xs space-y-2.5 text-text-muted font-light shadow-2xs">
              <div className="flex items-center gap-2 text-text-primary font-medium">
                <ShieldCheck className="w-4 h-4 text-accent-sage shrink-0" />
                <span>{locale === "vi" ? "Cam kết từ tiệm Fujime Renting:" : "Our Studio Guarantees:"}</span>
              </div>
              <p>✦ Giao máy tận nơi 30 phút nội thành Đà Nẵng & Hội An.</p>
              <p>✦ Cọc linh hoạt: Miễn cọc tiền mặt khi có CCCD gắn chip gốc + thẻ SV.</p>
              <p>✦ Hỗ trợ test máy và hướng dẫn thao tác 5 phút tại chỗ.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
