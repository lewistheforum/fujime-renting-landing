"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, Hand, Play, Pause, Compass } from "lucide-react";

interface CameraAngle {
  id: string;
  src: string;
  labelVi: string;
  labelEn: string;
  degree: number;
  highlightVi: string;
  highlightEn: string;
}

const CANON_M10_ANGLES: CameraAngle[] = [
  {
    id: "front",
    src: "/canon%20m10/images.jpeg",
    labelVi: "Chính diện 0°",
    labelEn: "Front 0°",
    degree: 0,
    highlightVi: "Body trắng tinh khôi · Lens kit 15-45mm STM siêu nét",
    highlightEn: "Pristine white body · Sharp 15-45mm STM lens",
  },
  {
    id: "front-right",
    src: "/canon%20m10/images-4.jpeg",
    labelVi: "Nghiêng phải 45°",
    labelEn: "Quarter 45°",
    degree: 45,
    highlightVi: "Thiết kế bo tròn xinh xắn, cầm gọn trong lòng bàn tay",
    highlightEn: "Delicate rounded curves, fits snugly in small hands",
  },
  {
    id: "side-right",
    src: "/canon%20m10/images-1.jpeg",
    labelVi: "Góc sườn 90°",
    labelEn: "Side 90°",
    degree: 90,
    highlightVi: "Nút flash cóc bật nảy trợ sáng chụp đêm lung linh",
    highlightEn: "Pop-up flash mechanism for dreamy night café portraits",
  },
  {
    id: "rear-right",
    src: "/canon%20m10/images-5.jpeg",
    labelVi: "Nghiêng sau 145°",
    labelEn: "Rear-3/4 145°",
    degree: 145,
    highlightVi: "Bản lề màn hình lật 180° hỗ trợ selfie & quay Vlog",
    highlightEn: "180° flip-up screen hinge for effortless selfies & vlogs",
  },
  {
    id: "rear",
    src: "/canon%20m10/images-6.jpeg",
    labelVi: "Màn hình 180°",
    labelEn: "Back LCD 180°",
    degree: 180,
    highlightVi: "Màn hình cảm ứng 3.0 inch chạm lấy nét như smartphone",
    highlightEn: "Intuitive 3.0-inch touchscreen with tap-to-focus",
  },
  {
    id: "top",
    src: "/canon%20m10/images-3.jpeg",
    labelVi: "Góc đỉnh 270°",
    labelEn: "Top View 270°",
    degree: 270,
    highlightVi: "Vòng xoay chế độ thông minh & nút quay phim tiện dụng",
    highlightEn: "Dedicated mode dial & one-touch movie record button",
  },
  {
    id: "front-left",
    src: "/canon%20m10/images-2.jpeg",
    labelVi: "Nghiêng trái 315°",
    labelEn: "Dynamic 315°",
    degree: 315,
    highlightVi: "Ngàm EF-M kim loại, thấu kính phủ đa lớp bắt sáng tốt",
    highlightEn: "Sturdy metal lens mount & multi-coated glass elements",
  },
];

interface Camera3dPopoutProps {
  onOpenReel?: () => void;
}

export function Camera3dPopout({ onOpenReel }: Camera3dPopoutProps) {
  const { locale } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [rotationOffset, setRotationOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Preload all 7 turntable image angles for instant, zero-latency rotation
  useEffect(() => {
    CANON_M10_ANGLES.forEach((angle) => {
      const img = new Image();
      img.src = angle.src;
    });
  }, []);

  // Gentle auto-rotation loop when idle
  useEffect(() => {
    if (!isAutoRotating || isDragging || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % CANON_M10_ANGLES.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isAutoRotating, isDragging, isHovered]);

  // Handle 3D Parallax tilt tracking on pointer move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle 3D perspective rotation clamped within [-10deg, 10deg]
    const rotY = (x / (rect.width / 2)) * 9;
    const rotX = -(y / (rect.height / 2)) * 9;
    setRotationOffset({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotationOffset({ x: 0, y: 0 });
    setIsHovered(false);
    setIsDragging(false);
  };

  // Drag-to-rotate interaction (Mouse)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setIsAutoRotating(false);
  };

  const handleMouseDrag = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    const step = 38; // Drag threshold per angle step
    if (Math.abs(deltaX) > step) {
      const direction = deltaX > 0 ? -1 : 1;
      setCurrentIdx((prev) => {
        const next = prev + direction;
        if (next < 0) return CANON_M10_ANGLES.length - 1;
        return next % CANON_M10_ANGLES.length;
      });
      setDragStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Drag-to-rotate interaction (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setIsAutoRotating(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStartX;
    const step = 32;
    if (Math.abs(deltaX) > step) {
      const direction = deltaX > 0 ? -1 : 1;
      setCurrentIdx((prev) => {
        const next = prev + direction;
        if (next < 0) return CANON_M10_ANGLES.length - 1;
        return next % CANON_M10_ANGLES.length;
      });
      setDragStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const currentAngle = CANON_M10_ANGLES[currentIdx];

  return (
    <div className="relative select-none" ref={containerRef}>
      {/* Decorative Vintage Paper Tape at the top */}
      <div
        className="absolute -top-4 right-12 w-32 h-7 bg-[#EFE6D8]/90 border-x border-[#DCCBBC] rotate-2 z-30 shadow-xs pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono tracking-widest text-text-muted/80 uppercase">
          ★ CANON EOS M10 ★
        </span>
      </div>

      {/* Main 3D Spatial Presentation Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMoveCapture={handleMouseDrag}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
        className="cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out"
      >
        <div
          className="card-surface p-5 pt-8 sm:pt-10 rounded-2xl shadow-lg border border-border-subtle relative overflow-visible"
          style={{
            transform: `rotateX(${rotationOffset.x}deg) rotateY(${rotationOffset.y}deg)`,
            transition: isDragging ? "none" : "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Top Status & 3D Interactive Badge Bar */}
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-terracotta/10 border border-accent-terracotta/30 text-accent-terracotta font-mono text-[11px] font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-accent-terracotta animate-ping" />
              <span>{locale === "vi" ? "MÔ HÌNH 3D TRỒI KHUNG HÌNH" : "3D POPOUT CAMERA VIEWER"}</span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted bg-surface-raised/80 px-2.5 py-1 rounded-full border border-border-subtle">
              <Compass className="w-3.5 h-3.5 text-accent-terracotta" />
              <span>{currentAngle.degree}°</span>
            </div>
          </div>

          {/*
            POPOUT 3D STAGE (Trồi từ khung hình ra ngoài)
          */}
          <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-b from-[#FDFBF7] to-[#EDE1D2]/40 border border-border-subtle/80 flex items-center justify-center">
            {/* Studio Floor Perspective Grid Lines */}
            <div
              className="absolute inset-0 opacity-25 pointer-events-none rounded-xl overflow-hidden"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% 90%, #B9684D 0%, transparent 65%), linear-gradient(0deg, #DCCBBC 1px, transparent 1px), linear-gradient(90deg, #DCCBBC 1px, transparent 1px)",
                backgroundSize: "100% 100%, 32px 32px, 32px 32px",
              }}
              aria-hidden="true"
            />

            {/* Studio Light Beam Background Accent */}
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-4/5 h-44 rounded-full blur-2xl opacity-40 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #E8B69A 0%, rgba(255, 249, 242, 0) 70%)",
              }}
              aria-hidden="true"
            />

            {/* Circular Turntable Floor Platform */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-16 rounded-full border border-[#DCCBBC]/80 bg-[#FFF9F2]/70 shadow-sm pointer-events-none"
              style={{
                transform: "translateX(-50%) rotateX(65deg)",
              }}
              aria-hidden="true"
            >
              {/* Dynamic Oval Shadow that shifts with tilt */}
              <div
                className="absolute inset-2 rounded-full blur-md opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(49, 41, 34, 0.45) 0%, rgba(49, 41, 34, 0) 75%)",
                  transform: `translate(${rotationOffset.y * 1.5}px, ${-rotationOffset.x * 1.5}px)`,
                }}
              />
            </div>

            {/*
              THE PROTRUDING 3D CAMERA ELEMENT:
              Breaks out of the container with translateZ(65px), scale(1.15)
            */}
            <div
              className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none"
              style={{
                transform: `translateZ(65px) scale(1.15) translateY(-6%)`,
                transition: isDragging ? "none" : "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <img
                key={currentAngle.id}
                src={currentAngle.src}
                alt={`Canon EOS M10 góc ${currentAngle.labelVi}`}
                className="max-h-[105%] max-w-[96%] object-contain filter drop-shadow-[0_20px_20px_rgba(49,41,34,0.32)] transition-opacity duration-150"
                style={{
                  mixBlendMode: "multiply",
                }}
                draggable={false}
              />
            </div>

            {/* Tactile 360° Drag Guidance Watermark */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#312922]/60 backdrop-blur-sm text-white text-[10px] font-mono border border-white/20 pointer-events-none">
              <Hand className="w-3 h-3 text-accent-peach" />
              <span>{locale === "vi" ? "Kéo hoặc vuốt để xoay 360°" : "Drag or swipe to rotate 360°"}</span>
            </div>

            {/* Quick Angle Badge */}
            <div className="absolute top-3 right-3 z-20 font-mono text-[10px] bg-surface/90 text-text-primary px-2 py-0.5 rounded border border-border-subtle shadow-xs">
              {locale === "vi" ? currentAngle.labelVi : currentAngle.labelEn}
            </div>

            {/* Floating Camera Spec Banner over the base */}
            <div className="absolute bottom-2.5 left-3 right-3 z-20 flex items-center justify-between text-xs font-mono text-white bg-[#312922]/75 backdrop-blur-md px-3 py-2 rounded-lg border border-white/15">
              <div className="flex items-center gap-2 truncate mr-2">
                <Sparkles className="w-3.5 h-3.5 text-accent-peach shrink-0" />
                <span className="text-[11px] truncate">
                  {locale === "vi" ? currentAngle.highlightVi : currentAngle.highlightEn}
                </span>
              </div>

              {onOpenReel && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenReel();
                  }}
                  className="text-accent-peach hover:underline cursor-pointer text-[10px] font-sans shrink-0 font-medium"
                >
                  {locale === "vi" ? "Video thực tế →" : "Reel →"}
                </button>
              )}
            </div>
          </div>

          {/* 360 Turntable Control Bar with Scrubber & Angle Buttons */}
          <div className="mt-4 pt-3 border-t border-border-subtle/80 flex flex-col gap-2.5">
            {/* Angle Selection Dots / Scrubber */}
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono transition-colors border ${
                    isAutoRotating
                      ? "bg-accent-terracotta text-white border-accent-terracotta"
                      : "bg-surface-raised border-border-subtle text-text-muted hover:text-text-primary"
                  }`}
                  title={isAutoRotating ? "Dừng tự xoay" : "Bật tự xoay 360°"}
                >
                  {isAutoRotating ? (
                    <>
                      <Pause className="w-2.5 h-2.5" />
                      <span>{locale === "vi" ? "Dừng xoay" : "Pause"}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-2.5 h-2.5" />
                      <span>{locale === "vi" ? "Tự xoay" : "Auto"}</span>
                    </>
                  )}
                </button>

                <span className="text-[10px] font-mono text-text-muted hidden sm:inline">
                  {locale === "vi" ? "7 góc chụp thực tế" : "7 photo angles"}
                </span>
              </div>

              {/* 7 Interactive Angle Pills */}
              <div className="flex items-center gap-1">
                {CANON_M10_ANGLES.map((angle, idx) => (
                  <button
                    key={angle.id}
                    type="button"
                    onClick={() => {
                      setCurrentIdx(idx);
                      setIsAutoRotating(false);
                    }}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] font-mono flex items-center justify-center transition-all cursor-pointer border ${
                      currentIdx === idx
                        ? "bg-accent-terracotta text-white font-bold border-accent-terracotta scale-110 shadow-xs"
                        : "bg-surface-raised text-text-muted border-border-subtle hover:text-text-primary hover:border-accent-terracotta/40"
                    }`}
                    title={locale === "vi" ? angle.labelVi : angle.labelEn}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom In-Store Assurance & Daily Rental Badge */}
            <div className="flex items-center justify-between text-xs pt-1 px-0.5">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-primary">
                <span className="font-semibold text-accent-terracotta">CANON EOS M10</span>
                <span className="text-text-muted">· Trắng sứ ngọc</span>
              </div>
              <div className="font-mono text-[11px] text-accent-terracotta font-medium">
                {locale === "vi" ? "Giá thuê: 250.000đ / ngày" : "Rate: 250k VND / day"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
