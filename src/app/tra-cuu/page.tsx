"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import {
  Search,
  Package,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  Camera,
  Calendar,
  MapPin,
  FileText,
  AlertCircle,
  ArrowRight,
  CreditCard,
  UserCheck,
  Hourglass,
} from "lucide-react";

interface MockOrder {
  code: string;
  phone: string;
  customerName: string;
  idCard: {
    numberMasked: string; // e.g. "048202******"
    issueDate: string;
    fullName: string;
    verified: boolean;
    heldType: string; // e.g. "CCCD gắn chip gốc (Bản cứng)"
  };
  kitName: string;
  kitImage: string;
  kitId?: string;
  recipeName: string;
  rentalPeriod: string;
  pickupTime: string; // Giờ nhận máy
  returnDeadline: string; // Giờ & ngày trả máy
  remainingTime: {
    statusType: "active" | "urgent" | "delivering" | "completed";
    labelVi: string;
    labelEn: string;
    detailVi: string;
    detailEn: string;
  };
  totalDays: number;
  dailyRate: string;
  discount: string;
  totalPrice: string;
  depositStatus: string;
  depositMethod: string;
  deliveryMethod: string;
  deliveryAddress: string;
  status: "preparing" | "delivering" | "renting" | "completed";
  statusTextVi: string;
  statusTextEn: string;
  currentStep: number;
  timeline: {
    titleVi: string;
    titleEn: string;
    time: string;
    descVi: string;
    descEn: string;
    done: boolean;
  }[];
}

const MOCK_ORDERS: Record<string, MockOrder> = {
  "FJ-8294": {
    code: "FJ-8294",
    phone: "0905123456",
    customerName: "Nguyễn Hoàng Nam",
    idCard: {
      numberMasked: "048202008921",
      issueDate: "12/04/2023 · Cục CSQLHC về TTXH",
      fullName: "NGUYỄN HOÀNG NAM",
      verified: true,
      heldType: "CCCD gắn chip gốc (Đang niêm phong tại tiệm)",
    },
    kitName: "FUJIFILM X-T5 | TRAVEL & PORTRAIT",
    kitImage: "/images/camera-rigaaf7.jpg",
    kitId: "fujifilm-x-t5",
    recipeName: "Classic Chrome Warm + Astia Dreamy",
    rentalPeriod: "20/09/2026 – 23/09/2026",
    pickupTime: "09:30 · 20/09/2026 (Đang trên đường giao)",
    returnDeadline: "18:00 · 23/09/2026",
    remainingTime: {
      statusType: "delivering",
      labelVi: "Còn 3 ngày 08 giờ 30 phút",
      labelEn: "3 days 8 hrs 30 mins left",
      detailVi: "Thời gian bắt đầu tính khi shipper giao tận tay khách tại khách sạn",
      detailEn: "Clock starts when handed over at hotel",
    },
    totalDays: 3,
    dailyRate: "500.000đ / ngày",
    discount: "-225.000đ (Ưu đãi thuê 3 ngày -15%)",
    totalPrice: "1.275.000đ",
    depositStatus: "Đã giữ CCCD gắn chip gốc & đối soát khuôn mặt",
    depositMethod: "CCCD gắn chip gốc (Miễn 100% tiền cọc mặt)",
    deliveryMethod: "Giao tận nơi nhanh 30 phút (Free ship)",
    deliveryAddress: "Khách sạn Sala Danang Beach, 36 Lâm Hoành, Sơn Trà",
    status: "delivering",
    statusTextVi: "Đang giao máy tận nơi (Dự kiến 15 phút nữa đến)",
    statusTextEn: "Out for 30-min delivery to your hotel",
    currentStep: 2,
    timeline: [
      {
        titleVi: "Đặt lịch & Chốt combo",
        titleEn: "Booked & Confirmed",
        time: "08:30 · 20/09/2026",
        descVi: "Xác nhận combo Fujifilm X-T5 kèm 2 pin, thẻ 128GB & túi chống sốc.",
        descEn: "Confirmed X-T5 kit with 2 batteries, 128GB SD and carry bag.",
        done: true,
      },
      {
        titleVi: "Kiểm tra kỹ thuật & Sạc 100%",
        titleEn: "QC Check & 100% Charged",
        time: "09:00 · 20/09/2026",
        descVi: "Vệ sinh sensor, gắn filter B+W, sạc no 2 pin và nạp sẵn 2 màu film.",
        descEn: "Sensor cleaned, 2 batteries charged, vintage recipes pre-loaded.",
        done: true,
      },
      {
        titleVi: "Shipper đang giao máy",
        titleEn: "Out for Delivery",
        time: "09:15 · 20/09/2026",
        descVi: "Shipper tiệm đang mang máy đến khách sạn Sala Danang.",
        descEn: "Studio courier is en route to Sala Danang Beach Hotel.",
        done: true,
      },
      {
        titleVi: "Trả máy & Hoàn cọc 5 phút",
        titleEn: "Return & Fast Deposit Refund",
        time: "Dự kiến 18:00 · 23/09/2026",
        descVi: "Kiểm tra ngoại quan nhanh và hoàn trả CCCD chỉ trong vòng 5 phút.",
        descEn: "5-min swift gear check and instant deposit return.",
        done: false,
      },
    ],
  },
  "FJ-7512": {
    code: "FJ-7512",
    phone: "0918765432",
    customerName: "Trần Mai Anh",
    idCard: {
      numberMasked: "049301014528",
      issueDate: "05/10/2022 · Cục CSQLHC về TTXH",
      fullName: "TRẦN MAI ANH",
      verified: true,
      heldType: "CCCD gốc + Thẻ sinh viên ĐH Bách Khoa",
    },
    kitName: "CANON EOS R50 | VLOG & TRAVEL",
    kitImage: "/images/equip-feature28c4.jpg",
    kitId: "canon-eos-r50",
    recipeName: "Natural Warm Clean Portrait",
    rentalPeriod: "19/09/2026 – 21/09/2026",
    pickupTime: "15:00 · 19/09/2026 (Nhận tại tiệm Sơn Trà)",
    returnDeadline: "18:00 · 21/09/2026",
    remainingTime: {
      statusType: "urgent",
      labelVi: "Còn 01 ngày 03 giờ 45 phút",
      labelEn: "1 day 3 hrs 45 mins left",
      detailVi: "Hạn trả máy trước 18:00 ngày mai (21/09/2026)",
      detailEn: "Return due before 18:00 tomorrow (Sep 21)",
    },
    totalDays: 2,
    dailyRate: "350.000đ / ngày",
    discount: "0đ (Thuê ngày chuẩn)",
    totalPrice: "700.000đ",
    depositStatus: "Đã giữ CCCD gốc + Thẻ sinh viên ĐHBK",
    depositMethod: "CCCD gốc & Thẻ sinh viên chính chủ",
    deliveryMethod: "Nhận trực tiếp tại tiệm Sơn Trà",
    deliveryAddress: "179B Nguyễn Công Trứ, An Hải Bắc, Sơn Trà, Đà Nẵng",
    status: "renting",
    statusTextVi: "Khách đang cầm máy chụp ảnh · Máy hoạt động tốt",
    statusTextEn: "Gear is currently active on shoot",
    currentStep: 3,
    timeline: [
      {
        titleVi: "Đặt lịch & Chốt combo",
        titleEn: "Booked & Confirmed",
        time: "14:00 · 19/09/2026",
        descVi: "Xác nhận thuê Canon R50 cho chuyến đi café dạo phố.",
        descEn: "Confirmed Canon R50 for café shoot.",
        done: true,
      },
      {
        titleVi: "Nhận máy tại tiệm",
        titleEn: "Picked Up at Studio",
        time: "15:00 · 19/09/2026",
        descVi: "Khách đã ghé tiệm test máy, hướng dẫn thao tác 5 phút.",
        descEn: "Picked up in store, quick 5-min camera onboarding.",
        done: true,
      },
      {
        titleVi: "Đang trong thời gian bấm máy",
        titleEn: "Active Shooting",
        time: "19/09 – 21/09",
        descVi: "Hạn trả máy trước 18:00 ngày 21/09/2026.",
        descEn: "Due return by 18:00 on Sep 21.",
        done: true,
      },
      {
        titleVi: "Trả máy & Hoàn cọc 5 phút",
        titleEn: "Return & Fast Deposit Refund",
        time: "Dự kiến 18:00 · 21/09/2026",
        descVi: "Kiểm tra nhanh & hoàn trả CCCD cùng thẻ sinh viên.",
        descEn: "Fast inspection and student ID + ID card return.",
        done: false,
      },
    ],
  },
  "FJ-6103": {
    code: "FJ-6103",
    phone: "0935999888",
    customerName: "Lê Minh Tuấn (Lookbook Studio)",
    idCard: {
      numberMasked: "001095004192",
      issueDate: "20/08/2021 · Cục CSQLHC về TTXH",
      fullName: "LÊ MINH TUẤN",
      verified: true,
      heldType: "Đã hoàn trả CCCD sau kiểm tra máy 5 phút",
    },
    kitName: "FUJIFILM GFX 100 II | MEDIUM FORMAT 102MP",
    kitImage: "/images/rig-pictor601b.jpg",
    kitId: "fujifilm-gfx-100ii",
    recipeName: "Nostalgic Negative + Reala Ace",
    rentalPeriod: "16/09/2026 – 18/09/2026",
    pickupTime: "08:00 · 16/09/2026 (Giao tận phim trường)",
    returnDeadline: "18:00 · 18/09/2026 (Đã trả đúng hạn)",
    remainingTime: {
      statusType: "completed",
      labelVi: "Đã hoàn tất thời gian thuê (00:00:00)",
      labelEn: "Rental completed (00:00:00)",
      detailVi: "Đã nhận lại thiết bị đầy đủ phụ kiện & hoàn cọc 100% trong 5 phút",
      detailEn: "Gear returned safely and deposit fully refunded",
    },
    totalDays: 2,
    dailyRate: "1.800.000đ / ngày",
    discount: "0đ (Thuê dự án thương mại)",
    totalPrice: "3.600.000đ",
    depositStatus: "Đã hoàn cọc 100% & trao trả CCCD trong 5 phút",
    depositMethod: "CCCD gốc & Hợp đồng studio doanh nghiệp",
    deliveryMethod: "Giao tận studio đối tác",
    deliveryAddress: "Phim trường Cinefy 360m², Sơn Trà, Đà Nẵng",
    status: "completed",
    statusTextVi: "Đơn thuê đã hoàn tất · Đã bàn giao lại CCCD & cọc",
    statusTextEn: "Order completed · Deposit fully refunded",
    currentStep: 4,
    timeline: [
      {
        titleVi: "Đặt lịch & Chốt combo",
        titleEn: "Booked",
        time: "16/09/2026",
        descVi: "Xác nhận combo GFX 102MP cho dự án lookbook thời trang.",
        descEn: "Confirmed 102MP GFX body for commercial shoot.",
        done: true,
      },
      {
        titleVi: "Bàn giao tại Studio",
        titleEn: "Delivered to Set",
        time: "16/09/2026",
        descVi: "Giao máy, test thẻ CFexpress và bàn giao valy chống sốc.",
        descEn: "Delivered flight case and tested pro CFexpress card.",
        done: true,
      },
      {
        titleVi: "Chụp dự án",
        titleEn: "Production Complete",
        time: "16/09 – 18/09",
        descVi: "Chụp 2 ngày trọn vẹn tại phim trường.",
        descEn: "2 full days commercial campaign.",
        done: true,
      },
      {
        titleVi: "Hoàn cọc thành công",
        titleEn: "Refund Completed",
        time: "18:20 · 18/09/2026",
        descVi: "Đã kiểm tra sensor sạch sẽ & hoàn trả CCCD cho khách trong 5 phút.",
        descEn: "Sensor checked and ID card returned within 5 minutes.",
        done: true,
      },
    ],
  },
};

export default function OrderLookupPage() {
  const { locale } = useLanguage();
  const [query, setQuery] = useState("");
  const [searchedOrder, setSearchedOrder] = useState<MockOrder | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = query.trim().toUpperCase();
    const cleanPhone = query.trim().replace(/\D/g, "");

    if (!clean) return;

    // Search by code or phone
    const found =
      MOCK_ORDERS[clean] ||
      Object.values(MOCK_ORDERS).find((o) => o.phone === cleanPhone || o.code === clean);

    setSearchedOrder(found || null);
    setHasSearched(true);
  };

  const handleSampleClick = (code: string) => {
    setQuery(code);
    setSearchedOrder(MOCK_ORDERS[code]);
    setHasSearched(true);
  };

  return (
    <main className="min-h-screen bg-bg-ground text-text-primary pt-28 pb-24 md:pt-36 md:pb-28">
      <div className="container-editorial">
        {/* Page Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-subtle shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-terracotta inline-block animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-accent-terracotta font-semibold">
              {locale === "vi" ? "TRA CỨU ĐƠN THUÊ THỜI GIAN THỰC" : "REAL-TIME ORDER TRACKING"}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-4">
            {locale === "vi" ? "Tra cứu tiến độ đơn thuê " : "Track your camera rental "}
            <span className="italic font-normal text-accent-terracotta">
              {locale === "vi" ? "của bạn." : "effortlessly."}
            </span>
          </h1>

          <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
            {locale === "vi"
              ? "Nhập mã đơn hàng (ví dụ: FJ-8294) hoặc số điện thoại bạn dùng khi đặt máy để kiểm tra trạng thái soạn máy, giờ giao và hoàn cọc."
              : "Enter your order code (e.g. FJ-8294) or phone number to check prep status, delivery ETA, and deposit return."}
          </p>
        </div>

        {/* Search Bar Box */}
        <div className="max-w-2xl mx-auto mb-6">
          <form
            onSubmit={handleSearch}
            className="card-surface p-2.5 sm:p-3 rounded-2xl border border-border-subtle shadow-sm flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={locale === "vi" ? "Nhập mã đơn (FJ-8294) hoặc số điện thoại..." : "Enter code (FJ-8294) or phone..."}
                className="w-full bg-transparent pl-11 pr-4 py-3 text-sm sm:text-base text-text-primary font-mono outline-none placeholder:text-text-muted/60"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto btn-primary-terracotta py-3 px-6 text-sm font-medium shadow-xs cursor-pointer justify-center"
            >
              <span>{locale === "vi" ? "Tra cứu ngay" : "Lookup"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-3 px-1">
            <span className="text-xs font-mono text-text-muted">
              {locale === "vi" ? "Bấm xem đơn mẫu:" : "Try sample orders:"}
            </span>
            {[
              { code: "FJ-8294", label: "FJ-8294 (Đang giao)" },
              { code: "FJ-7512", label: "FJ-7512 (Đang thuê)" },
              { code: "FJ-6103", label: "FJ-6103 (Đã hoàn cọc)" },
            ].map((s) => (
              <button
                key={s.code}
                type="button"
                onClick={() => handleSampleClick(s.code)}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface border border-border-subtle hover:border-accent-terracotta text-accent-terracotta transition-colors cursor-pointer"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Display: The Editorial Analog Rental Docket */}
        {hasSearched && searchedOrder ? (
          <div className="max-w-5xl mx-auto animate-fadeIn">
            {/* Master Analog Ticket / Rental Passport Container */}
            <div className="card-surface rounded-3xl border border-border-subtle shadow-md overflow-hidden relative">
              {/* Top Scrapbook Paper Tape Accent */}
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#EFE6D8]/95 border-x border-[#DCCBBC] rotate-[-0.5deg] z-20 shadow-2xs pointer-events-none hidden sm:block"
                aria-hidden="true"
              />

              {/* ======================================================== */}
              {/* 1. DOCKET HEADER: Studio Branding, Order ID & Live Status */}
              {/* ======================================================== */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-surface via-surface to-surface-raised/30 border-b border-border-subtle">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div>
                    {/* Top Eyebrow Tag */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
                        FUJIME ANALOG LAB · SƠN TRÀ, ĐÀ NẴNG
                      </span>
                      <span className="text-border-subtle">/</span>
                      <span className="font-mono text-[11px] font-semibold text-accent-terracotta bg-accent-terracotta/10 px-2 py-0.5 rounded">
                        {locale === "vi" ? "MÃ ĐƠN: " : "ORDER ID: "}
                        {searchedOrder.code}
                      </span>
                    </div>

                    {/* Customer Name in Fraunces Serif */}
                    <h2 className="text-2xl sm:text-3xl font-display font-semibold text-text-primary leading-tight">
                      {searchedOrder.customerName}
                    </h2>

                    {/* Phone & Address Subtitle */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-mono text-text-muted mt-1.5">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-accent-terracotta" />
                        <span>{searchedOrder.phone}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-accent-terracotta" />
                        <span className="truncate max-w-[280px] sm:max-w-md">
                          {searchedOrder.deliveryAddress}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Live Status Badge */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-surface border border-border-subtle shadow-xs self-start lg:self-center">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-sage opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-sage" />
                    </span>
                    <div className="text-left">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted">
                        {locale === "vi" ? "TRẠNG THÁI HIỆN TẠI" : "CURRENT STATUS"}
                      </span>
                      <span className="font-display font-semibold text-xs sm:text-sm text-text-primary block">
                        {locale === "vi" ? searchedOrder.statusTextVi : searchedOrder.statusTextEn}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ======================================================== */}
                {/* 2. CONNECTED 4-STEP FILM STRIP PROGRESS TRACK           */}
                {/* ======================================================== */}
                <div className="mt-8 pt-6 border-t border-border-subtle/70">
                  <div className="relative">
                    {/* Connecting Track Line behind steps (desktop) */}
                    <div className="hidden sm:block absolute top-4 left-[12%] right-[12%] h-[2px] bg-border-subtle/80 z-0">
                      <div
                        className="h-full bg-accent-terracotta transition-all duration-700"
                        style={{
                          width: `${
                            ((searchedOrder.currentStep - 1) /
                              (searchedOrder.timeline.length - 1)) *
                            100
                          }%`,
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-2 relative z-10">
                      {searchedOrder.timeline.map((step, idx) => {
                        const isCompleted = step.done;
                        const isCurrent = idx + 1 === searchedOrder.currentStep;
                        return (
                          <div
                            key={idx}
                            className="flex sm:flex-col items-start sm:items-center sm:text-center gap-3 sm:gap-0"
                          >
                            {/* Circle Node */}
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 sm:mb-2.5 transition-all ${
                                isCompleted
                                  ? "bg-accent-terracotta text-white shadow-xs"
                                  : isCurrent
                                  ? "bg-surface border-2 border-accent-terracotta text-accent-terracotta shadow-xs ring-4 ring-accent-terracotta/15"
                                  : "bg-surface-raised text-text-muted border border-border-subtle"
                              }`}
                            >
                              {isCompleted ? "✓" : `0${idx + 1}`}
                            </div>

                            <div>
                              <h4
                                className={`font-display font-semibold text-xs sm:text-sm mb-0.5 ${
                                  isCurrent || isCompleted
                                    ? "text-text-primary"
                                    : "text-text-muted"
                                }`}
                              >
                                {locale === "vi" ? step.titleVi : step.titleEn}
                              </h4>
                              <span className="font-mono text-[11px] text-accent-terracotta block sm:mb-1">
                                {step.time}
                              </span>
                              <p className="text-[11px] text-text-muted font-light leading-relaxed max-w-[200px] hidden sm:block">
                                {locale === "vi" ? step.descVi : step.descEn}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* ======================================================== */}
              {/* 3. TIME REMAINING & LIVE COUNTDOWN RIBBON                */}
              {/* ======================================================== */}
              <div className="px-6 py-4 sm:px-8 sm:py-5 bg-[#FAF6F0] border-b border-border-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-terracotta/10 border border-accent-terracotta/30 flex items-center justify-center text-accent-terracotta shrink-0">
                    <Hourglass className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block font-semibold">
                      {locale === "vi" ? "THỜI GIAN THUÊ CÒN LẠI:" : "TIME REMAINING:"}
                    </span>
                    <span className="font-mono text-lg sm:text-xl font-bold text-accent-terracotta tracking-tight">
                      {locale === "vi"
                        ? searchedOrder.remainingTime.labelVi
                        : searchedOrder.remainingTime.labelEn}
                    </span>
                  </div>
                </div>

                {/* Handover & Deadline Chips */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
                  <div className="px-3 py-1.5 rounded-lg bg-surface border border-border-subtle flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent-terracotta" />
                    <span className="text-text-muted">
                      {locale === "vi" ? "Nhận máy:" : "Pickup:"}
                    </span>
                    <span className="text-text-primary font-medium">
                      {searchedOrder.pickupTime}
                    </span>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-surface border border-accent-terracotta/40 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-terracotta" />
                    <span className="text-text-muted">{locale === "vi" ? "Hạn trả:" : "Due:"}</span>
                    <span className="text-accent-terracotta font-semibold">
                      {searchedOrder.returnDeadline}
                    </span>
                  </div>
                </div>
              </div>

              {/* ======================================================== */}
              {/* 4. PERFORATED TICKET TEAR NOTCH DIVIDER                  */}
              {/* ======================================================== */}
              <div className="relative py-1 bg-surface">
                {/* Left Circular Punch-out */}
                <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-bg-ground border-r border-border-subtle z-10" />
                {/* Perforated Dashed Line */}
                <div className="w-full border-b-2 border-dashed border-border-subtle/80" />
                {/* Right Circular Punch-out */}
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-bg-ground border-l border-border-subtle z-10" />
              </div>

              {/* ======================================================== */}
              {/* 5. MAIN DOCKET BODY: GEAR & ID (LEFT) / RECEIPT (RIGHT)  */}
              {/* ======================================================== */}
              <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-8">
                {/* LEFT COLUMN: Equipment Showcase & Verified CCCD (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Equipment Showcase Card */}
                  <div className="p-5 rounded-2xl bg-surface-raised/40 border border-border-subtle">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-semibold flex items-center gap-1.5">
                        <Camera className="w-4 h-4 text-accent-terracotta" />
                        <span>{locale === "vi" ? "THIẾT BỊ ĐÃ BÀN GIAO" : "HANDED OVER GEAR"}</span>
                      </span>
                      {searchedOrder.kitId && (
                        <Link
                          href={`/products/${searchedOrder.kitId}`}
                          className="font-mono text-xs text-accent-terracotta hover:underline inline-flex items-center gap-1"
                        >
                          <span>{locale === "vi" ? "Xem chi tiết máy" : "Kit specs"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      <div className="relative w-full sm:w-36 aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-border-subtle shrink-0">
                        <img
                          src={searchedOrder.kitImage}
                          alt={searchedOrder.kitName}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-lg text-text-primary">
                          {searchedOrder.kitName}
                        </h3>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent-peach/25 text-accent-terracotta border border-accent-peach/40 mt-1 mb-2">
                          ✦ {searchedOrder.recipeName}
                        </span>

                        <div className="space-y-1 text-xs text-text-muted font-light">
                          <div className="flex items-center gap-1.5 text-text-primary">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                            <span>2 pin sạc no 100% kèm sạc đôi & cáp Type-C</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-text-primary">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                            <span>Thẻ nhớ SD tốc độ cao 128GB (đã format sạch)</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-text-primary">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                            <span>Túi đeo thời trang chống sốc + dây đeo cổ tay</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* VERIFIED CCCD CITIZEN ID CARD (High aesthetic security credential) */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-surface to-surface-raised/60 border border-border-subtle relative overflow-hidden">
                    {/* Background Guilloche Watermark Effect */}
                    <div
                      className="absolute inset-0 opacity-[0.035] pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 50% 50%, #B9684D 10%, transparent 60%), repeating-linear-gradient(45deg, #312922 0, #312922 1px, transparent 0, transparent 16px)",
                      }}
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-border-subtle/80">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-accent-terracotta" />
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
                            {locale === "vi"
                              ? "HỒ SƠ ĐỊNH DANH CCCD KHÁCH HÀNG"
                              : "VERIFIED NATIONAL ID (CCCD)"}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-accent-sage/15 text-accent-sage border border-accent-sage/30">
                          <UserCheck className="w-3 h-3" />
                          <span>
                            {locale === "vi" ? "Đã đối soát khuôn mặt" : "Biometrics Verified"}
                          </span>
                        </span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded-xl bg-surface border border-border-subtle/70">
                          <span className="text-[10px] text-text-muted uppercase tracking-wider block mb-0.5">
                            {locale === "vi" ? "Số Căn cước công dân" : "ID Number (Masked)"}
                          </span>
                          <span className="text-base font-bold text-text-primary tracking-widest block">
                            {searchedOrder.idCard.numberMasked.replace(/(\d{4})/g, "$1 ").trim()}
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-surface border border-border-subtle/70">
                          <span className="text-[10px] text-text-muted uppercase tracking-wider block mb-0.5">
                            {locale === "vi" ? "Họ tên người thuê" : "Cardholder Name"}
                          </span>
                          <span className="text-sm font-semibold text-accent-terracotta block truncate">
                            {searchedOrder.idCard.fullName}
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-surface border border-border-subtle/70">
                          <span className="text-[10px] text-text-muted uppercase tracking-wider block mb-0.5">
                            {locale === "vi" ? "Ngày & Nơi cấp" : "Issue details"}
                          </span>
                          <span className="text-[11px] text-text-primary block leading-tight">
                            {searchedOrder.idCard.issueDate}
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-surface border border-border-subtle/70">
                          <span className="text-[10px] text-text-muted uppercase tracking-wider block mb-0.5">
                            {locale === "vi" ? "Tình trạng ký gửi" : "Custody status"}
                          </span>
                          <span className="text-[11px] text-accent-sage font-medium block leading-tight">
                            🔒 {searchedOrder.idCard.heldType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Itemized Rental Receipt & Action Triggers (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="p-5 rounded-2xl bg-surface-raised/40 border border-border-subtle">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-semibold flex items-center gap-1.5 mb-4">
                      <ShieldCheck className="w-4 h-4 text-accent-sage" />
                      <span>
                        {locale === "vi"
                          ? "BIÊN NHẬN CHI PHÍ & TIỀN CỌC"
                          : "RENTAL & DEPOSIT RECEIPT"}
                      </span>
                    </span>

                    {/* Itemized lines */}
                    <div className="space-y-2.5 text-xs font-mono pb-4 border-b border-border-subtle">
                      <div className="flex justify-between text-text-muted">
                        <span>Đơn giá ngày:</span>
                        <span className="text-text-primary font-medium">
                          {searchedOrder.dailyRate}
                        </span>
                      </div>
                      <div className="flex justify-between text-text-muted">
                        <span>Số ngày thuê:</span>
                        <span className="text-text-primary font-medium">
                          {searchedOrder.totalDays} ngày ({searchedOrder.rentalPeriod})
                        </span>
                      </div>
                      <div className="flex justify-between text-accent-sage">
                        <span>Ưu đãi áp dụng:</span>
                        <span className="font-medium">{searchedOrder.discount}</span>
                      </div>
                      <div className="flex justify-between text-text-muted">
                        <span>Hình thức giao:</span>
                        <span className="text-text-primary font-medium text-right max-w-[170px] truncate">
                          {searchedOrder.deliveryMethod}
                        </span>
                      </div>
                    </div>

                    {/* Grand Total */}
                    <div className="py-3 flex items-baseline justify-between">
                      <span className="font-display font-semibold text-sm text-text-primary">
                        {locale === "vi" ? "Tổng tiền thuê:" : "Total Amount:"}
                      </span>
                      <span className="font-mono text-2xl font-bold text-accent-terracotta">
                        {searchedOrder.totalPrice}
                      </span>
                    </div>

                    {/* Deposit Guarantee Box */}
                    <div className="p-3.5 rounded-xl bg-surface border border-accent-sage/30 text-xs">
                      <div className="flex items-center gap-1.5 text-accent-sage font-mono font-semibold text-[11px] mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>CHÍNH SÁCH CỌC ĐÃ XÁC NHẬN:</span>
                      </div>
                      <p className="text-text-primary font-medium text-[11px] mb-0.5">
                        {searchedOrder.depositMethod}
                      </p>
                      <p className="text-text-muted text-[10px] font-light leading-relaxed">
                        ✓ {searchedOrder.depositStatus}. Hoàn trả 100% trong vòng 5 phút sau khi bàn
                        giao lại máy.
                      </p>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="space-y-2.5">
                    <a
                      href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                        `Chào tiệm Fujime, mình cần hỗ trợ về đơn hàng ${searchedOrder.code} (${searchedOrder.customerName}) ạ.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary-terracotta text-xs py-3 justify-center shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{locale === "vi" ? "Nhắn Zalo hỗ trợ đơn này" : "Chat on Zalo"}</span>
                    </a>

                    <div className="flex items-center justify-between text-[11px] font-mono text-text-muted px-1">
                      <span>Hỗ trợ kỹ thuật 24/7:</span>
                      <a
                        href={`tel:${SITE_CONFIG.phoneNumbers.rental}`}
                        className="text-accent-terracotta font-semibold hover:underline"
                      >
                        {SITE_CONFIG.hotlineRental}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : hasSearched && !searchedOrder ? (
          /* Empty / Not Found State */
          <div className="max-w-md mx-auto card-surface p-8 rounded-2xl border border-border-subtle text-center shadow-xs">
            <AlertCircle className="w-12 h-12 text-accent-terracotta mx-auto mb-3 opacity-80" />
            <h3 className="font-display font-semibold text-lg text-text-primary mb-1">
              {locale === "vi" ? "Không tìm thấy mã đơn này" : "Order Not Found"}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed font-light mb-6">
              {locale === "vi"
                ? "Vui lòng kiểm tra lại mã đơn (ví dụ: FJ-8294) hoặc số điện thoại bạn đã đăng ký. Bạn cũng có thể nhắn trực tiếp Zalo để tiệm tra cứu giúp nhé!"
                : "Please check your order code or phone number. Or message our Zalo directly for instant help."}
            </p>
            <a
              href={SITE_CONFIG.social.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-subtle text-xs py-2.5 px-5 mx-auto inline-flex"
            >
              <MessageCircle className="w-3.5 h-3.5 text-accent-terracotta" />
              <span>{locale === "vi" ? "Nhắn Zalo tiệm hỗ trợ ngay" : "Chat with us on Zalo"}</span>
            </a>
          </div>
        ) : !hasSearched ? (
          /* Initial Guide / Waiting for Input State */
          <div className="max-w-2xl mx-auto card-surface p-8 sm:p-10 rounded-3xl border border-border-subtle text-center shadow-xs animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-surface-raised border border-border-subtle mx-auto mb-4 flex items-center justify-center text-accent-terracotta shadow-2xs">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
              {locale === "vi"
                ? "Nhập mã đơn hoặc SĐT để xem thông tin"
                : "Enter order code or phone to view details"}
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-light max-w-md mx-auto mb-6">
              {locale === "vi"
                ? "Mọi thông tin về thiết bị thuê, giờ nhận - trả máy, thời gian thuê còn lại và đối soát CCCD sẽ hiển thị ngay sau khi bạn bấm tra cứu."
                : "Rented camera details, pickup/return times, remaining rental duration, and CCCD ID custody status will appear right after your search."}
            </p>

            <div className="grid sm:grid-cols-3 gap-3 text-left pt-6 border-t border-border-subtle/80">
              <div className="p-3.5 rounded-xl bg-surface-raised/60 border border-border-subtle">
                <span className="font-mono text-[10px] text-accent-terracotta uppercase tracking-wider block font-semibold mb-0.5">
                  01. ĐẾM NGƯỢC
                </span>
                <span className="text-xs text-text-primary font-medium block">
                  {locale === "vi" ? "Thời gian thuê còn lại" : "Time remaining"}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-raised/60 border border-border-subtle">
                <span className="font-mono text-[10px] text-accent-sage uppercase tracking-wider block font-semibold mb-0.5">
                  02. BẢO MẬT CCCD
                </span>
                <span className="text-xs text-text-primary font-medium block">
                  {locale === "vi" ? "Tình trạng giữ giấy tờ" : "ID custody status"}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-raised/60 border border-border-subtle">
                <span className="font-mono text-[10px] text-accent-terracotta uppercase tracking-wider block font-semibold mb-0.5">
                  03. KIỂM SOÁT COMBO
                </span>
                <span className="text-xs text-text-primary font-medium block">
                  {locale === "vi" ? "Phụ kiện & sạc đầy 100%" : "Included kit & QC"}
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
