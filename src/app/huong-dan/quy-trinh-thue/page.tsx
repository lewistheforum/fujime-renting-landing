"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import {
  ArrowLeft,
  CalendarCheck,
  Truck,
  CheckCircle2,
  AlertTriangle,
  Camera,
  ShieldCheck,
  RotateCcw,
  MessageCircle,
  Phone,
  Clock,
  HelpCircle,
  BadgeCheck,
} from "lucide-react";

export default function RentalProcessPage() {
  const { locale } = useLanguage();

  return (
    <main className="min-h-screen bg-bg-ground text-text-primary pt-28 pb-28 md:pt-36 md:pb-36 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 10%, #B9684D 0%, transparent 60%), linear-gradient(0deg, #DCCBBC 1px, transparent 1px), linear-gradient(90deg, #DCCBBC 1px, transparent 1px)",
          backgroundSize: "100% 100%, 36px 36px, 36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="container-editorial relative z-10">
        {/* Navigation & Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8 max-w-4xl mx-auto">
          <Link
            href="/huong-dan"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-terracotta transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{locale === "vi" ? "← Trở về mục Hướng Dẫn" : "← Back to Guides Hub"}</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-subtle text-xs font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent-sage animate-pulse" />
            <span>{locale === "vi" ? "Quy định áp dụng toàn hệ thống" : "Official Studio Policy"}</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MASTER SCRAPBOOK DOCUMENT: QUY TRÌNH THUÊ MÁY                */}
        {/* ============================================================ */}
        <article className="max-w-4xl mx-auto rounded-3xl bg-[#FAF6F0] border-2 border-[#DCCBBC] shadow-xl relative overflow-hidden">
          {/* Washi Tape Strip at Top Center */}
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#EFE6D8]/95 border-x border-[#DCCBBC] rotate-[-0.6deg] z-30 shadow-xs pointer-events-none hidden sm:block"
            aria-hidden="true"
          />

          {/* Left Red Notebook Margin Rule */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[2px] bg-red-300/40 pointer-events-none z-10" />

          {/* Ruled Notebook Page Sheet */}
          <div className="paper-lined-grid p-6 sm:p-10 md:p-14 pl-10 sm:pl-18 md:pl-20 relative">
            {/* Header Stamp */}
            <header className="text-center max-w-2xl mx-auto mb-10 pb-8 border-b-2 border-dashed border-[#DCCBBC] relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE6D8] border border-[#DCCBBC] mb-3 rotate-[-1deg] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-accent-terracotta" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-accent-terracotta font-semibold">
                  FUJIME RENTING · SƠN TRÀ, ĐÀ NẴNG
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight tracking-tight">
                Quy Trình Thuê Máy
              </h1>
              <p className="font-display italic text-base sm:text-lg text-accent-terracotta mt-2">
                {locale === "vi"
                  ? "4 bước minh bạch, nhanh gọn để bạn yên tâm nhận máy và sáng tạo."
                  : "4 simple, transparent steps to book, receive gear, and shoot with confidence."}
              </p>
            </header>

            {/* ======================================================== */}
            {/* THE 4 CORE PROCEDURAL STEPS (MATCHING EXACT REQUIREMENTS) */}
            {/* ======================================================== */}
            <div className="space-y-8 mb-12">
              {/* ------------------------------------------------------ */}
              {/* STEP 1: CHECK LỊCH & ĐẶT CỌC GIỮ SLOT                  */}
              {/* ------------------------------------------------------ */}
              <div className="p-6 rounded-2xl bg-surface border-2 border-[#DCCBBC] shadow-xs relative hover:border-accent-terracotta/50 transition-colors">
                <div className="flex items-start gap-4">
                  {/* Step 01 Chalk Circle */}
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-accent-terracotta text-accent-terracotta font-mono font-bold text-sm flex items-center justify-center shrink-0 bg-surface shadow-xs">
                    01
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h2 className="font-display font-semibold text-lg sm:text-xl text-text-primary">
                        Nhắn tin Check Lịch Trống & Cọc Giữ Slot Máy
                      </h2>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent-peach/25 text-accent-terracotta font-semibold border border-accent-peach/40">
                        Bước Khởi Đầu
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-text-primary font-light leading-relaxed mb-3">
                      Khách nhắn tin cho chúng mình qua <strong>Fanpage hoặc Zalo tiệm</strong> để check lịch thuê còn trống. Sau khi chọn được combo ưng ý, khách cọc trước tiền thuê máy để tiệm giữ slot cho bạn nhé.
                    </p>

                    {/* Pro Tip Callout Box */}
                    <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-[#8C432D] leading-relaxed flex items-start gap-2.5">
                      <span className="text-base font-bold font-mono">✎</span>
                      <div>
                        <strong>Lời khuyên từ tiệm:</strong> Nếu khách muốn chắc chắn có máy cho chuyến đi, vui lòng <strong>nhắn trước 1 ngày</strong> cho tụi mình nhé, vì máy tại tiệm có thể luôn full slot vào các ngày cuối tuần và mùa du lịch Đà Nẵng ạ!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------ */}
              {/* STEP 2: HAI HÌNH THỨC NHẬN MÁY & QUY ĐỊNH GIẤY TỜ      */}
              {/* ------------------------------------------------------ */}
              <div className="p-6 rounded-2xl bg-surface border-2 border-[#DCCBBC] shadow-xs relative hover:border-accent-terracotta/50 transition-colors">
                <div className="flex items-start gap-4">
                  {/* Step 02 Chalk Circle */}
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-sky-600 text-sky-700 font-mono font-bold text-sm flex items-center justify-center shrink-0 bg-surface shadow-xs">
                    02
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h2 className="font-display font-semibold text-lg sm:text-xl text-text-primary">
                        Hai Hình Thức Nhận Máy & Chính Sách Giao Nhận
                      </h2>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 font-semibold border border-sky-200">
                        Nhận Tại Tiệm / Ship Tận Nơi
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-text-primary font-light leading-relaxed mb-4">
                      Chúng mình có <strong>2 hình thức</strong> linh hoạt để khách nhận máy thuận tiện nhất:
                    </p>

                    {/* Two Receiving Options */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-4 text-xs">
                      {/* Option A */}
                      <div className="p-3.5 rounded-xl bg-surface-raised/60 border border-border-subtle">
                        <div className="font-display font-semibold text-sm text-text-primary mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-accent-sage" />
                          <span>Khách đến nhận máy trực tiếp</span>
                        </div>
                        <p className="text-text-muted font-light leading-relaxed">
                          Nhận tại tiệm Sơn Trà, Đà Nẵng. Nhân viên hướng dẫn thao tác nút bấm, sạc pin và màu film trực tiếp cầm tay chỉ việc trong 5 phút.
                        </p>
                      </div>

                      {/* Option B */}
                      <div className="p-3.5 rounded-xl bg-surface-raised/60 border border-border-subtle">
                        <div className="font-display font-semibold text-sm text-text-primary mb-1 flex items-center gap-1.5">
                          <Truck className="w-4 h-4 text-accent-terracotta" />
                          <span>Chúng mình ship máy đến khách</span>
                        </div>
                        <p className="text-text-muted font-light leading-relaxed">
                          • Bạn thuê máy <strong>trên 4h</strong>: Chúng mình hỗ trợ <strong>FREE SHIP</strong> tận nơi.<br />
                          • Bạn thuê máy <strong>dưới 4h</strong>: Khách vui lòng thanh toán <strong>100% phí ship</strong> ạ.
                        </p>
                      </div>
                    </div>

                    {/* IMPORTANT NOTE HIGHLIGHT (RED ALERT) */}
                    <div className="p-4 rounded-xl bg-red-50/90 border border-red-200 text-xs text-red-900 leading-relaxed">
                      <div className="flex items-center gap-1.5 font-bold font-mono text-red-700 uppercase tracking-wider mb-1">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span>LƯU Ý QUAN TRỌNG VỀ GIẤY TỜ TUỲ THÂN:</span>
                      </div>
                      <p className="font-light">
                        Khi khách đến nhận máy vui lòng <strong>mang theo giấy tờ tuỳ thân gốc (CCCD gắn chip hoặc Thẻ sinh viên chính chủ)</strong> để làm thủ tục nhận máy.<br />
                        <em>(Trường hợp không thể cọc giấy tờ tuỳ thân, khách vui lòng cọc 100% giá trị máy. Tiệm sẽ hoàn trả 100% đủ tiền cọc ngay khi nhận lại máy).</em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------ */}
              {/* STEP 3: ĐỒNG KIỂM TRA MÁY & QUAY CHỤP BÀN GIAO         */}
              {/* ------------------------------------------------------ */}
              <div className="p-6 rounded-2xl bg-surface border-2 border-[#DCCBBC] shadow-xs relative hover:border-accent-terracotta/50 transition-colors">
                <div className="flex items-start gap-4">
                  {/* Step 03 Chalk Circle */}
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-accent-sage text-emerald-800 font-mono font-bold text-sm flex items-center justify-center shrink-0 bg-surface shadow-xs">
                    03
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h2 className="font-display font-semibold text-lg sm:text-xl text-text-primary">
                        Kiểm Tra Tình Trạng Máy & Quay Chụp Bàn Giao
                      </h2>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent-sage/15 text-accent-sage font-semibold border border-accent-sage/30">
                        Đồng Kiểm Tra Minh Bạch
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-text-primary font-light leading-relaxed mb-3">
                      Khách nhận máy vui lòng <strong>kiểm tra kỹ tình trạng máy</strong>, bao gồm ngoại hình máy, kính ống lens, các nút bấm chức năng và toàn bộ phụ kiện đi kèm (2 pin sạc đầy, sạc đôi, thẻ nhớ 128GB, túi chống sốc, dây đeo).
                    </p>

                    <div className="p-3.5 rounded-xl bg-surface-raised/50 border border-border-subtle text-xs text-text-muted font-light leading-relaxed flex items-center gap-3">
                      <Camera className="w-5 h-5 text-accent-terracotta shrink-0" />
                      <div>
                        <strong>Cam kết từ tiệm:</strong> Chúng mình cũng sẽ <strong>quay chụp chi tiết video tình trạng máy trước khi gửi đến khách</strong> để đảm bảo quyền lợi tối đa và sự an tâm tuyệt đối cho cả hai bên ạ.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------ */}
              {/* STEP 4: TRẢ MÁY & HOÀN CỌC 5 PHÚT                     */}
              {/* ------------------------------------------------------ */}
              <div className="p-6 rounded-2xl bg-surface border-2 border-[#DCCBBC] shadow-xs relative hover:border-accent-terracotta/50 transition-colors">
                <div className="flex items-start gap-4">
                  {/* Step 04 Chalk Circle */}
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-amber-600 text-amber-800 font-mono font-bold text-sm flex items-center justify-center shrink-0 bg-surface shadow-xs">
                    04
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h2 className="font-display font-semibold text-lg sm:text-xl text-text-primary">
                        Trả Máy Trực Tiếp & Hoàn Lại Giấy Tờ Trong 5 Phút
                      </h2>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-semibold border border-amber-200">
                        Hoàn Cọc Nhanh 5 Phút
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-text-primary font-light leading-relaxed mb-3">
                      Khi trả máy khách vui lòng <strong>đến trực tiếp tiệm</strong> để trả máy và nhận lại giấy tờ tuỳ thân ạ. Nhân viên sẽ kiểm tra nhanh ngoại quan máy trong vòng 5 phút và trao trả lại giấy tờ niêm phong cho bạn ngay tức thì.
                    </p>

                    {/* Ship return policy caution */}
                    <div className="p-3.5 rounded-xl bg-surface-raised/70 border border-border-subtle text-xs text-text-muted font-light leading-relaxed">
                      <span className="font-semibold text-text-primary">Trường hợp khách đặt ship trả máy:</span> Trong trường hợp bạn bận không thể đến trực tiếp trả máy, khách có thể đặt shipper gửi máy về tiệm. <em>Tuy nhiên bên mình sẽ không chịu trách nhiệm nếu có vấn đề mất mát phụ kiện, va đập hoặc hỏng máy do shipper vận chuyển bạn nhé.</em> Vì vậy tiệm luôn khuyến khích bạn ghé trực tiếp để kiểm máy và nhận lại giấy tờ an tâm nhất!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* BOTTOM DOODLE ICONS & CONTACT CTA (MATCHING SKETCH)     */}
            {/* ======================================================== */}
            <div className="pt-8 border-t-2 border-dashed border-[#DCCBBC] flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Doodle 4 icons at bottom like in the user sketch */}
              <div className="flex items-center gap-6 text-text-muted">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full border border-[#DCCBBC] flex items-center justify-center bg-white text-accent-terracotta shadow-2xs">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono">1. Giữ slot</span>
                </div>

                <div className="text-border-subtle font-mono">→</div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full border border-[#DCCBBC] flex items-center justify-center bg-white text-accent-terracotta shadow-2xs">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono">2. Nhận máy</span>
                </div>

                <div className="text-border-subtle font-mono">→</div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full border border-[#DCCBBC] flex items-center justify-center bg-white text-accent-terracotta shadow-2xs">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono">3. Sáng tạo</span>
                </div>

                <div className="text-border-subtle font-mono">→</div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full border border-[#DCCBBC] flex items-center justify-center bg-white text-accent-terracotta shadow-2xs">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono">4. Hoàn cọc</span>
                </div>
              </div>

              {/* Instant Zalo Action */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                    "Chào tiệm Fujime, mình muốn nhắn hỏi check lịch thuê máy cho chuyến đi sắp tới ạ."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-terracotta text-xs py-3 px-6 w-full sm:w-auto justify-center shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Nhắn Zalo Check Lịch Máy Ngay</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
