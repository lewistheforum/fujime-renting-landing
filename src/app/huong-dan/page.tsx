"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { CAMERA_GUIDES } from "@/constants/camera-guides-data";
import {
  BookOpen,
  ArrowRight,
  Camera,
  Compass,
  Sparkles,
  Zap,
  CheckCircle2,
  Video,
  Layers,
} from "lucide-react";

export default function CameraGuidesHubPage() {
  const { locale } = useLanguage();
  const guidesList = Object.values(CAMERA_GUIDES);

  return (
    <main className="min-h-screen bg-bg-ground text-text-primary pt-28 pb-28 md:pt-36 md:pb-36 relative overflow-hidden">
      {/* Studio Backdrop Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 15%, #B9684D 0%, transparent 60%), linear-gradient(0deg, #DCCBBC 1px, transparent 1px), linear-gradient(90deg, #DCCBBC 1px, transparent 1px)",
          backgroundSize: "100% 100%, 32px 32px, 32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="container-editorial relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-subtle shadow-2xs mb-4">
            <BookOpen className="w-4 h-4 text-accent-terracotta" />
            <span className="font-mono text-xs uppercase tracking-wider text-accent-terracotta font-semibold">
              {locale === "vi" ? "SỔ TAY CƠ KHÍ & HƯỚNG DẪN 4 DÒNG MÁY TIỆM" : "4 CAMERA FIELD NOTEBOOKS & MANUALS"}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-4">
            {locale === "vi" ? "Sổ tay hướng dẫn & " : "Field guides & "}
            <span className="italic font-normal text-accent-terracotta">
              {locale === "vi" ? "quy trình thuê máy ảnh." : "rental procedures."}
            </span>
          </h1>

          <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            {locale === "vi"
              ? "Biên soạn chi tiết từng bước: từ quy trình check lịch, cọc giữ slot máy, chính sách giao nhận đến sổ tay cơ khí giải phẫu từng bánh xe của 4 dòng máy ảnh."
              : "Detailed step-by-step notebooks: from booking, deposit rules, delivery policies to mechanical teardown guides of 4 camera models."}
          </p>
        </div>

        {/* ============================================================ */}
        {/* SPECIAL FEATURE BANNER: QUY TRÌNH THUÊ MÁY (4 BƯỚC CHUẨN)    */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="rounded-3xl bg-[#FAF6F0] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-border-subtle/30">
            {/* Washi Tape Strip */}
            <div
              className="absolute -top-3 left-10 w-32 h-6 bg-[#EFE6D8]/95 border-x border-[#DCCBBC]/50 rotate-[-1deg] shadow-2xs pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-terracotta text-white flex items-center justify-center shrink-0 shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[11px] font-semibold text-accent-terracotta uppercase tracking-wider">
                    CHÍNH SÁCH TIỆM · ĐÀ NẴNG
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-sage" />
                  <span className="font-mono text-[11px] text-text-muted">4 BƯỚC ĐỒNG KIỂM TRA</span>
                </div>
                <h2 className="font-display font-semibold text-xl sm:text-2xl text-text-primary">
                  Quy Trình Thuê Máy Chi Tiết
                </h2>
                <p className="text-xs sm:text-sm text-text-muted font-light mt-1 max-w-xl">
                  Check lịch trống fanpage, cọc giữ slot, 2 hình thức nhận máy (trực tiếp / freeship trên 4h), lưu ý giấy tờ tuỳ thân và quy trình trả máy hoàn cọc trong 5 phút.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Link
                href="/huong-dan/quy-trinh-thue"
                className="btn-primary-terracotta text-xs py-3 px-6 w-full md:w-auto justify-center shadow-xs group"
              >
                <span>Xem Quy Trình Thuê Chi Tiết</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4 NOTEBOOK CARDS GRID (SCRAPBOOK FIELD GUIDES)               */}
        {/* ============================================================ */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {guidesList.map((guide, idx) => (
            <div
              key={guide.id}
              className="notebook-paper-sheet-container relative rounded-3xl group"
            >
              {/* Y2K Holographic Washi Tape (Đặt bên ngoài article để không bị cắt xén bởi overflow-hidden) */}
              <div
                className="absolute -top-3.5 right-16 z-30 pointer-events-none flex items-center -rotate-1 group-hover:rotate-2 group-hover:-translate-y-0.5 transition-all duration-300 drop-shadow-xs"
                aria-hidden="true"
              >
                {/* Răng cưa bên trái của cuộn băng keo Y2K */}
                <svg viewBox="0 0 6 26" className="w-[6px] h-[26px] shrink-0 fill-[#E8DFD3]/90" aria-hidden="true">
                  <polygon points="6,0 0,3.25 6,6.5 0,9.75 6,13 0,16.25 6,19.5 0,22.75 6,26" />
                </svg>

                {/* Thân băng keo Y2K Hologram chuyển sắc pastel với vệt quét sáng */}
                <div className="h-[26px] bg-gradient-to-r from-[#FDF4EB]/95 via-[#EBF4FE]/90 to-[#FCEAF2]/95 border-y border-white/70 shadow-[0_2px_8px_-1px_rgba(49,41,34,0.12)] flex items-center px-3 relative overflow-hidden">
                  {/* Màng bóng bắt sáng Hologram lướt qua khi hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/75 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

                  {/* Chữ tem Y2K retro analog */}
                  <span className="relative z-10 font-mono text-[9px] font-bold tracking-[0.16em] text-[#55473A]/90 uppercase flex items-center gap-1.5 whitespace-nowrap">
                    <span className="text-[10px] text-accent-terracotta">✦</span>
                    <span>FUJIME Y2K · 0{idx + 1}</span>
                    <span className="text-[10px] text-accent-peach">★</span>
                  </span>
                </div>

                {/* Răng cưa bên phải của cuộn băng keo Y2K */}
                <svg viewBox="0 0 6 26" className="w-[6px] h-[26px] shrink-0 fill-[#E8DFD3]/90" aria-hidden="true">
                  <polygon points="0,0 6,3.25 0,6.5 6,9.75 0,13 6,16.25 0,19.5 6,22.75 0,26" />
                </svg>
              </div>

              {/* Nếp lật góc giấy (Dog-Ear Flap) với bóng nhòe mềm mại, triệt tiêu 100% vệt trắng dư ra */}
              <div className="page-curl-flap" aria-hidden="true">
                <svg
                  viewBox="0 0 44 44"
                  className="w-full h-full drop-shadow-[-3px_4px_7px_rgba(49,41,34,0.18)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Clip path để tuyệt đối không có pixel ánh sáng nào tràn ra ngoài mép thẻ */}
                    <clipPath id={`flapClip-${guide.id}`}>
                      <path d="M0 0 L44 44 L16 44 Q0 44 0 28 Z" />
                    </clipPath>

                    {/* Gradient nền giấy gập: chuyển sắc ấm tự nhiên từ nếp gấp sang đỉnh bo */}
                    <linearGradient id={`curlGrad-${guide.id}`} x1="0" y1="44" x2="44" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#E6D9C5" />
                      <stop offset="35%" stopColor="#F2E7D7" />
                      <stop offset="70%" stopColor="#FAF4EC" />
                      <stop offset="100%" stopColor="#FAF6F0" />
                    </linearGradient>

                    {/* Bóng nhòe tạo độ cong hình trụ (Cylinder Ambient Shadow) cho mặt lá lật */}
                    <linearGradient id={`curlRollShadow-${guide.id}`} x1="12" y1="12" x2="18" y2="38" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(49, 41, 34, 0.0)" />
                      <stop offset="40%" stopColor="rgba(49, 41, 34, 0.09)" />
                      <stop offset="80%" stopColor="rgba(49, 41, 34, 0.02)" />
                      <stop offset="100%" stopColor="rgba(49, 41, 34, 0.0)" />
                    </linearGradient>

                    {/* Bộ lọc làm nhòe ánh sáng mềm mại (Feathery Soft Diffuse Glow) thay thế đường kẻ trắng cứng */}
                    <filter id={`softDiffuseGlow-${guide.id}`} x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.2" />
                    </filter>

                    {/* Dải sáng nhòa êm lướt dọc nếp gập, mờ hẳn 0% ở 2 đầu để không bị đốm trắng thừa */}
                    <linearGradient id={`creaseGlow-${guide.id}`} x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.0)" />
                      <stop offset="25%" stopColor="rgba(255, 255, 255, 0.75)" />
                      <stop offset="75%" stopColor="rgba(255, 255, 255, 0.75)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
                    </linearGradient>
                  </defs>

                  {/* Toàn bộ nội dung lá lật được bọc trong clipPath để triệt tiêu 100% vệt trắng dư ra */}
                  <g clipPath={`url(#flapClip-${guide.id})`}>
                    {/* Nền giấy mặt sau của lá lật */}
                    <path d="M0 0 L44 44 L16 44 Q0 44 0 28 Z" fill={`url(#curlGrad-${guide.id})`} />

                    {/* Lớp bóng cuộn nhòe mềm mại tạo khối cong 3D tự nhiên cho mặt giấy */}
                    <path d="M0 0 L44 44 L16 44 Q0 44 0 28 Z" fill={`url(#curlRollShadow-${guide.id})`} />

                    {/* Vệt sáng bóng nhòe (diffuse soft glow) lướt êm dọc sống nếp gấp */}
                    <line
                      x1="4"
                      y1="4"
                      x2="40"
                      y2="40"
                      stroke={`url(#creaseGlow-${guide.id})`}
                      strokeWidth="4.5"
                      filter={`url(#softDiffuseGlow-${guide.id})`}
                    />
                  </g>

                  {/* Mép ngoài viền mờ tiệp màu viền sổ tay, không có đường trắng thô */}
                  <path
                    d="M44 44 L16 44 Q0 44 0 28 L0 0"
                    fill="none"
                    stroke="rgba(220, 203, 188, 0.45)"
                    strokeWidth="0.75"
                  />
                </svg>
              </div>

              {/* Thân thẻ sổ tay: Nâng nhẹ và đổ bóng tự nhiên khi hover */}
              <article className="notebook-paper-sheet rounded-3xl relative overflow-hidden flex flex-col justify-between border border-border-subtle/25 h-full">
                {/* Notebook Left Red Margin Line */}
                <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-red-300/35 pointer-events-none z-10" />

                {/* Notebook Ruled Sheet Body */}
                <div className="paper-lined-grid p-6 sm:p-8 pl-10 sm:pl-12">
                  {/* Stamp Eyebrow */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] font-semibold uppercase text-accent-terracotta bg-accent-terracotta/10 px-2 py-0.5 rounded">
                      TẬP 0{idx + 1} · {guide.shortName}
                    </span>
                    <span className="text-[11px] font-mono text-text-muted">
                      {guide.mechanicalSections.length} {locale === "vi" ? "góc giải phẫu" : "views"}
                    </span>
                  </div>

                  {/* Title in Fraunces */}
                  <h2 className="font-display font-semibold text-2xl text-text-primary group-hover:text-accent-terracotta transition-colors mb-1">
                    <Link href={`/huong-dan/${guide.id}`}>
                      {guide.name}
                    </Link>
                  </h2>

                  <p className="font-display italic text-sm text-accent-terracotta mb-4 font-normal">
                    {locale === "vi" ? guide.subtitleVi : guide.subtitleEn}
                  </p>

                  {/* Visual Snapshot & Polaroid Container */}
                  <div className="flex gap-4 items-center mb-6">
                    {/* Camera Cutout Mini Frame */}
                    <div className="relative w-28 h-24 rounded-xl overflow-hidden bg-surface border border-border-subtle/40 shrink-0 shadow-2xs">
                      <img
                        src={guide.heroImage}
                        alt={guide.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Pinned Polaroid Sample */}
                    {guide.polaroids[0] && (
                      <div
                        className="w-24 bg-white p-1.5 pb-2 rounded shadow-xs border border-[#DCCBBC]/40 rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300 shrink-0"
                      >
                        <div className="aspect-square rounded overflow-hidden mb-1 bg-neutral-100">
                          <img
                            src={guide.polaroids[0].image}
                            alt="sample"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-mono text-[8px] text-accent-terracotta block truncate">
                          {guide.polaroids[0].recipeOrSetting}
                        </span>
                      </div>
                    )}

                    {/* Tagline snippet */}
                    <p className="text-xs text-text-muted font-light leading-relaxed line-clamp-3">
                      {locale === "vi" ? guide.taglineVi : guide.taglineEn}
                    </p>
                  </div>

                  {/* Key Controls Highlights */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-dashed border-[#DCCBBC]/60 text-xs font-mono">
                    <div className="text-[10px] uppercase text-text-muted tracking-wider font-semibold mb-1">
                      CÁC BỘ PHẬN ĐÃ GIẢI PHẪU:
                    </div>
                    {guide.mechanicalSections[0]?.annotations.slice(0, 3).map((ann, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
                        <span className="font-medium">{ann.nameVi}</span>
                        <span className="text-text-muted text-[10px]">({ann.type})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-4 sm:p-5 bg-[#FAF6F0] border-t border-border-subtle/40 flex items-center justify-between">
                  <span className="text-xs font-mono text-accent-sage flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Kèm 3D xoay 360°</span>
                  </span>

                  <Link
                    href={`/huong-dan/${guide.id}`}
                    className="btn-primary-terracotta text-xs py-2 px-4 group/btn shadow-2xs"
                  >
                    <span>{locale === "vi" ? "Mở sổ tay xem chi tiết" : "Open Field Guide"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Bottom Concierge Note */}
        <div className="max-w-2xl mx-auto text-center p-6 rounded-2xl bg-surface border border-border-subtle shadow-xs">
          <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
            💡 {locale === "vi"
              ? "Bạn vẫn còn thắc mắc về cách chọn chế độ chụp? Khi nhận máy tại tiệm hoặc giao tận nơi, nhân viên kỹ thuật Fujime sẽ dành 5 phút hướng dẫn trực tiếp cầm tay chỉ việc cho bạn nhé!"
              : "Still have questions? Our technical staff provides a 5-minute hands-on onboarding session upon gear delivery."}
          </p>
        </div>
      </div>
    </main>
  );
}
