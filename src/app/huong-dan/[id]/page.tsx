"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { CAMERA_GUIDES, CameraGuideData } from "@/constants/camera-guides-data";
import { SITE_CONFIG } from "@/constants/site-config";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Camera,
  CheckCircle2,
  Compass,
  HelpCircle,
  MessageCircle,
  RotateCw,
  Zap,
} from "lucide-react";

interface GuidePageProps {
  params: {
    id: string;
  };
}

export default function CameraGuideDetailPage({ params }: GuidePageProps) {
  const { locale } = useLanguage();
  const guide = CAMERA_GUIDES[params.id];

  if (!guide) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        type="module"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-bg-ground text-text-primary pt-28 pb-28 md:pt-36 md:pb-36 relative overflow-hidden">
        {/* Ambient Subtle Studio Background */}
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
          {/* Top Breadcrumb & Switcher to Other Cameras */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Link
                href="/huong-dan"
                className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-terracotta transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{locale === "vi" ? "← Trở về tủ sổ tay" : "← Back to Notebooks"}</span>
              </Link>
              <span className="text-border-subtle">·</span>
              <Link
                href="/huong-dan/quy-trinh-thue"
                className="text-xs font-mono text-accent-terracotta hover:underline inline-flex items-center gap-1"
              >
                <span>{locale === "vi" ? "Xem quy trình thuê máy →" : "Rental procedure →"}</span>
              </Link>
            </div>

            {/* Quick 4-Camera Pill Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-surface/90 border border-border-subtle shadow-2xs overflow-x-auto max-w-full">
              <Link
                href="/huong-dan/quy-trinh-thue"
                className="px-3 py-1 rounded-full text-xs font-mono text-text-muted hover:text-text-primary hover:bg-surface-raised whitespace-nowrap"
              >
                {locale === "vi" ? "Quy trình thuê" : "Process"}
              </Link>
              {Object.values(CAMERA_GUIDES).map((item) => {
                const isActive = item.id === guide.id;
                return (
                  <Link
                    key={item.id}
                    href={`/huong-dan/${item.id}`}
                    className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                        : "text-text-muted hover:text-text-primary hover:bg-surface-raised"
                    }`}
                  >
                    {item.shortName}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* THE MASTER SCRAPBOOK NOTEBOOK SPREAD                         */}
          {/* ============================================================ */}
          <article className="max-w-5xl mx-auto rounded-3xl bg-[#FAF6F0] border-2 border-[#DCCBBC] shadow-xl relative overflow-hidden">
            {/* Washi Tape Strip at Top Center */}
            <div
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-44 h-8 bg-[#EFE6D8]/95 border-x border-[#DCCBBC] rotate-[-0.8deg] z-30 shadow-xs pointer-events-none hidden sm:block"
              aria-hidden="true"
            />

            {/* Left Margin Notebook Binder Line (Analog Red Ruled Line) */}
            <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[2px] bg-red-300/40 pointer-events-none z-10" />

            {/* Ruled Horizontal Lines Background for the notebook page */}
            <div className="paper-lined-grid p-6 sm:p-10 md:p-14 pl-10 sm:pl-18 md:pl-20 relative">
              {/* ======================================================== */}
              {/* NOTEBOOK HEADER: Handwritten Title & Scrapbook Accents  */}
              {/* ======================================================== */}
              <header className="mb-10 pb-8 border-b border-dashed border-[#DCCBBC] relative">
                {/* Vintage Rubber Stamp Header */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE6D8]/80 border border-[#DCCBBC] mb-3 rotate-[-1deg] shadow-2xs">
                  <BookOpen className="w-3.5 h-3.5 text-accent-terracotta" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent-terracotta font-semibold">
                    {locale === "vi" ? "SỔ TAY CƠ KHÍ & BẢNG GIẢI PHẪU MÁY" : "MECHANICAL TEARDOWN NOTEBOOK"}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight tracking-tight">
                      {guide.name}
                    </h1>
                    <p className="font-display italic text-lg sm:text-xl text-accent-terracotta mt-1.5 font-normal">
                      {locale === "vi" ? guide.subtitleVi : guide.subtitleEn}
                    </p>
                    <p className="text-xs sm:text-sm text-text-muted font-mono mt-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-sage" />
                      <span>{locale === "vi" ? guide.categoryVi : guide.categoryEn}</span>
                    </p>
                  </div>

                  {/* Quick Rent Button for this Camera */}
                  <div className="shrink-0 flex items-center gap-2">
                    <a
                      href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                        `Chào tiệm Fujime, mình vừa xem xong sổ tay hướng dẫn máy ${guide.name} và muốn thuê máy này ạ.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-terracotta text-xs py-2.5 px-5 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{locale === "vi" ? "Thuê chiếc máy này" : "Rent This Kit"}</span>
                    </a>
                  </div>
                </div>

                {/* Hand-Drawn Arrow and Chalk Quote */}
                <div className="mt-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 max-w-xl text-xs sm:text-sm text-text-primary font-light flex items-center gap-2.5">
                  <span className="text-accent-terracotta font-mono text-base font-bold">✎</span>
                  <span className="italic">
                    &ldquo;{locale === "vi" ? guide.taglineVi : guide.taglineEn}&rdquo;
                  </span>
                </div>
              </header>

              {/* ======================================================== */}
              {/* HERO VISUAL SECTION: 3D Model + Polaroid Snapshots       */}
              {/* ======================================================== */}
              <section className="mb-14">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left 3D Interactive Turntable (7 cols) */}
                  <div className="lg:col-span-7 relative">
                    {/* Washi Tape Corner Stamp */}
                    <div
                      className="absolute -top-3 -left-3 w-24 h-6 bg-[#E8B69A]/80 rotate-[-12deg] z-20 shadow-2xs border-x border-[#DCCBBC] pointer-events-none"
                      aria-hidden="true"
                    />

                    <div className="card-surface rounded-2xl p-2.5 border-2 border-[#DCCBBC] shadow-md bg-gradient-to-b from-surface to-surface-raised/50 overflow-hidden relative">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-raised flex items-center justify-center">
                        {/* @ts-ignore */}
                        <model-viewer
                          src={guide.glbModel}
                          alt={guide.name}
                          camera-controls
                          auto-rotate
                          auto-rotate-delay="1000"
                          rotation-per-second="22deg"
                          shadow-intensity="1.5"
                          shadow-softness="0.8"
                          exposure="1.05"
                          interaction-prompt="none"
                          style={{
                            width: "100%",
                            height: "100%",
                            minHeight: "280px",
                            backgroundColor: "transparent",
                            outline: "none",
                          }}
                        >
                          <div slot="poster" className="w-full h-full flex flex-col items-center justify-center gap-2 bg-surface-raised/40">
                            <RotateCw className="w-6 h-6 text-accent-terracotta animate-spin" />
                            <span className="font-mono text-xs text-text-muted">
                              {locale === "vi" ? "Đang mở mô hình 3D cơ khí..." : "Loading 3D anatomy..."}
                            </span>
                          </div>
                          <div slot="progress-bar" style={{ display: "none" }} />
                          {/* @ts-ignore */}
                        </model-viewer>

                        {/* Chalk Guidance Tag */}
                        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface/95 backdrop-blur-md border border-border-subtle text-[11px] font-mono text-accent-terracotta shadow-xs">
                          <Compass className="w-3.5 h-3.5" />
                          <span>{locale === "vi" ? "Xoay 360° để soi từng bánh xe cơ học" : "Rotate 360° to inspect dials"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Pinned Polaroids Showing Actual Output (5 cols) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="text-center lg:text-left">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent-terracotta font-semibold block mb-1">
                        {locale === "vi" ? "✦ ẢNH CHỤP THỰC TẾ TỪ MÁY" : "✦ REAL SAMPLE PHOTOGRAPHY"}
                      </span>
                      <h3 className="font-display font-semibold text-xl text-text-primary">
                        {locale === "vi" ? "Chất ảnh & Màu sắc chân thực" : "Authentic Film Color & Texture"}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {guide.polaroids.map((p, pIdx) => (
                        <div
                          key={pIdx}
                          className="bg-white p-2.5 pb-4 rounded-lg shadow-md border border-[#DCCBBC] relative transition-transform hover:scale-103 hover:z-20 cursor-pointer"
                          style={{
                            transform: `rotate(${p.rotationDeg}deg)`,
                          }}
                        >
                          {/* Mini Tape on Polaroid */}
                          <div
                            className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#EFE6D8]/90 border-x border-[#DCCBBC] shadow-2xs pointer-events-none"
                            aria-hidden="true"
                          />

                          <div className="aspect-square rounded overflow-hidden mb-2 bg-neutral-100">
                            <img
                              src={p.image}
                              alt={p.captionVi}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="text-[11px] font-display font-semibold text-text-primary leading-tight">
                            {locale === "vi" ? p.captionVi : p.captionEn}
                          </div>
                          <span className="font-mono text-[9px] text-accent-terracotta block mt-1">
                            {p.recipeOrSetting}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-surface border border-border-subtle/80 text-xs text-text-muted font-light leading-relaxed">
                      💡 <em>{locale === "vi" ? "Toàn bộ máy tại tiệm đều nạp sẵn thẻ nhớ tốc độ cao và công thức màu này, bạn chỉ việc nhận máy và bấm chụp." : "All cameras come with these recipes preloaded on fast SD cards."}</em>
                    </div>
                  </div>
                </div>
              </section>

              {/* ======================================================== */}
              {/* SECTION 2: 5-MINUTE QUICK START FIELD GUIDE              */}
              {/* ======================================================== */}
              <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-surface border-2 border-[#DCCBBC] shadow-xs relative">
                {/* Pushpin Stamp */}
                <div
                  className="absolute -top-3 right-8 w-16 h-6 bg-accent-peach/30 border-x border-accent-terracotta/40 rotate-1 shadow-2xs pointer-events-none"
                  aria-hidden="true"
                />

                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-accent-terracotta" />
                  <h2 className="font-display font-semibold text-2xl text-text-primary">
                    {locale === "vi" ? "Hướng Dẫn Bấm Máy Nhanh Trong 5 Phút" : "5-Minute Quick Start Field Guide"}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-text-muted font-light mb-6">
                  {locale === "vi"
                    ? "Dành cho các bạn lần đầu cầm máy. Thực hiện đúng 4 bước cơ bản này để có ngay những khung hình đẹp nhất trong chuyến đi."
                    : "Designed for beginners. Follow these 4 essential steps for effortless, stunning photos."}
                </p>

                {/* 4 Steps Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {guide.quickStartSteps.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-surface-raised/50 border border-border-subtle flex flex-col justify-between relative hover:border-accent-terracotta/60 transition-colors"
                    >
                      <div>
                        {/* Step Number in Chalk Circle */}
                        <div className="w-8 h-8 rounded-full border-2 border-dashed border-accent-terracotta text-accent-terracotta font-mono font-bold text-xs flex items-center justify-center mb-3 bg-surface">
                          {s.step}
                        </div>

                        <h3 className="font-display font-semibold text-sm text-text-primary mb-1.5 leading-snug">
                          {locale === "vi" ? s.titleVi : s.titleEn}
                        </h3>

                        <p className="text-xs text-text-muted font-light leading-relaxed mb-3">
                          {locale === "vi" ? s.detailVi : s.detailEn}
                        </p>
                      </div>

                      {s.chalkHighlight && (
                        <div className="pt-2 border-t border-border-subtle/80">
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-100 text-[#8C432D]">
                            ✎ {s.chalkHighlight}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ======================================================== */}
              {/* SECTION 3: DETAILED MECHANICAL TEARDOWN & CHALK CALLOUTS */}
              {/* ======================================================== */}
              <section className="mb-14">
                <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-accent-terracotta" />
                      <span className="font-mono text-xs uppercase tracking-wider text-accent-terracotta font-semibold">
                        {locale === "vi" ? "GIẢI PHẪU CƠ KHÍ TỪNG CHI TIẾT" : "MECHANICAL TEARDOWN & CONTROLS"}
                      </span>
                    </div>
                    <h2 className="font-display font-semibold text-2xl sm:text-3xl text-text-primary">
                      {locale === "vi" ? "Các bộ phận & Nút bấm quan trọng" : "Crucial Dials, Buttons & Levers"}
                    </h2>
                  </div>

                  {/* Section View Tabs */}
                  {guide.mechanicalSections.length > 1 && (
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-border-subtle">
                      {guide.mechanicalSections.map((sec, sIdx) => (
                        <button
                          key={sec.id}
                          type="button"
                          onClick={() => setActiveTab(sIdx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            activeTab === sIdx
                              ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                              : "text-text-muted hover:text-text-primary"
                          }`}
                        >
                          {locale === "vi" ? sec.viewTitleVi.split(":")[0] : sec.viewTitleEn.split(":")[0]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Active Section Blueprint Card */}
                {guide.mechanicalSections[activeTab] && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-surface border-2 border-[#DCCBBC] shadow-sm relative overflow-hidden">
                    <div className="mb-6 pb-4 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary">
                          {locale === "vi"
                            ? guide.mechanicalSections[activeTab].viewTitleVi
                            : guide.mechanicalSections[activeTab].viewTitleEn}
                        </h3>
                        <p className="text-xs text-text-muted font-light mt-0.5">
                          {locale === "vi"
                            ? guide.mechanicalSections[activeTab].descriptionVi
                            : guide.mechanicalSections[activeTab].descriptionEn}
                        </p>
                      </div>

                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#EFE6D8] text-text-primary font-semibold border border-border-subtle shrink-0 self-start">
                        {guide.mechanicalSections[activeTab].annotations.length} {locale === "vi" ? "cơ cấu" : "controls"}
                      </span>
                    </div>

                    {/* Annotations List (Mechanical Blueprint Callouts) */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {guide.mechanicalSections[activeTab].annotations.map((ann, aIdx) => {
                        const colorStyles = {
                          terracotta: {
                            badge: "border-accent-terracotta text-accent-terracotta bg-accent-terracotta/10",
                            title: "text-accent-terracotta",
                          },
                          blue: {
                            badge: "border-sky-600 text-sky-700 bg-sky-50",
                            title: "text-sky-800",
                          },
                          amber: {
                            badge: "border-amber-600 text-amber-700 bg-amber-50",
                            title: "text-amber-800",
                          },
                          sage: {
                            badge: "border-accent-sage text-emerald-800 bg-accent-sage/15",
                            title: "text-emerald-900",
                          },
                        }[ann.color];

                        return (
                          <div
                            key={aIdx}
                            className="p-4 rounded-xl bg-surface-raised/40 border border-border-subtle relative hover:border-accent-terracotta/50 transition-all flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-start gap-3 mb-2">
                                {/* Chalk Circled Number */}
                                <div
                                  className={`w-7 h-7 rounded-full border-2 border-dashed font-mono font-bold text-xs flex items-center justify-center shrink-0 ${colorStyles.badge}`}
                                >
                                  {ann.number}
                                </div>

                                <div>
                                  <h4 className="font-display font-semibold text-sm text-text-primary">
                                    {locale === "vi" ? ann.nameVi : ann.nameEn}
                                  </h4>
                                  <span className="font-mono text-[10px] uppercase text-text-muted">
                                    {ann.type}
                                  </span>
                                </div>
                              </div>

                              <p className="text-xs text-text-primary font-light leading-relaxed pl-10 mb-3">
                                {locale === "vi" ? ann.instructionVi : ann.instructionEn}
                              </p>
                            </div>

                            {/* Pro Tip Callout Box */}
                            <div className="pl-10">
                              <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/70 text-[11px] text-[#8C432D] leading-snug">
                                <span className="font-semibold font-mono">💡 Mẹo tiệm: </span>
                                <span>{locale === "vi" ? ann.proTipVi : ann.proTipEn}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>

              {/* ======================================================== */}
              {/* SECTION 4: FREQUENT QUESTIONS & PRACTICAL ADVICE         */}
              {/* ======================================================== */}
              <section className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#FAF6F0] border border-border-subtle">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-5 h-5 text-accent-terracotta" />
                  <h3 className="font-display font-semibold text-xl text-text-primary">
                    {locale === "vi" ? "Câu hỏi thường gặp khi cầm máy này" : "Frequently Asked Questions"}
                  </h3>
                </div>

                <div className="space-y-4">
                  {guide.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-4 rounded-xl bg-surface border border-border-subtle/80"
                    >
                      <h4 className="font-display font-semibold text-sm text-text-primary mb-1.5 flex items-start gap-2">
                        <span className="text-accent-terracotta font-mono font-bold">Q.</span>
                        <span>{locale === "vi" ? faq.qVi : faq.qEn}</span>
                      </h4>
                      <p className="text-xs text-text-muted font-light leading-relaxed pl-5">
                        {locale === "vi" ? faq.aVi : faq.aEn}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ======================================================== */}
              {/* BOTTOM FOOTER: Ready to Rent CTA & Hotline               */}
              {/* ======================================================== */}
              <footer className="pt-8 border-t-2 border-dashed border-[#DCCBBC] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-accent-sage" />
                  <span>{locale === "vi" ? "Tiệm hướng dẫn thao tác 5 phút khi nhận máy" : "5-minute hands-on onboarding at pickup"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                      `Chào tiệm, mình muốn hỏi thuê combo máy ${guide.name} ạ.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-terracotta text-xs py-2.5 px-6 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{locale === "vi" ? "Đặt thuê combo này qua Zalo" : "Reserve on Zalo"}</span>
                  </a>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
