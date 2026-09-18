"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useLanguage } from "@/contexts/LanguageContext";
import { Compass, RotateCw } from "lucide-react";

interface CameraViewer3DProps {
  onOpenReel?: () => void;
}

export function CameraViewer3D({ onOpenReel }: CameraViewer3DProps) {
  const { locale } = useLanguage();
  const modelViewerRef = useRef<any>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  // Check if customElements already defined model-viewer
  useEffect(() => {
    if (typeof window !== "undefined" && customElements.get("model-viewer")) {
      setIsScriptLoaded(true);
    }
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!modelViewerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const y = (e.clientY - rect.top) / rect.height; // 0 -> 1

    // Reverse theta so moving mouse right rotates the front face towards the right (natural object-turn feel)
    const theta = -(x - 0.5) * 360;
    // Invert phi tilt so moving mouse up tilts camera up / pitches object naturally
    const phi = 75 - (y - 0.5) * 30; // 60 deg to 90 deg
    modelViewerRef.current.cameraOrbit = `${theta}deg ${phi}deg 105%`;
  };

  const handlePointerLeave = () => {
    setIsInteracting(false);
    if (!modelViewerRef.current) return;
    // Smooth reset to front aesthetic view
    modelViewerRef.current.cameraOrbit = "0deg 75deg 105%";
  };

  const handlePointerEnter = () => {
    setIsInteracting(true);
  };

  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        type="module"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />

      <div
        className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-gradient-to-b from-[#FDFBF7] to-[#EDE1D2]/50 flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing"
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        {/* Analog Grid & Soft Studio Lighting Backdrop */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 85%, #B9684D 0%, transparent 65%), linear-gradient(0deg, #DCCBBC 1px, transparent 1px), linear-gradient(90deg, #DCCBBC 1px, transparent 1px)",
            backgroundSize: "100% 100%, 28px 28px, 28px 28px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Warm Studio Glow */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-4/5 h-36 rounded-full blur-2xl opacity-40 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #E8B69A 0%, rgba(255, 249, 242, 0) 70%)",
          }}
          aria-hidden="true"
        />

        {/* 3D Model Viewer Web Component */}
        {/* @ts-ignore */}
        <model-viewer
          ref={modelViewerRef}
          src="/canon-r50.glb"
          alt="Canon EOS R50 3D Model"
          camera-controls
          auto-rotate
          auto-rotate-delay="1000"
          rotation-per-second="20deg"
          camera-orbit="0deg 75deg 105%"
          field-of-view="32deg"
          min-camera-orbit="auto auto 70%"
          max-camera-orbit="auto auto 150%"
          shadow-intensity="1.5"
          shadow-softness="0.8"
          exposure="1.05"
          interaction-prompt="none"
          className="w-full h-full relative z-10"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "320px",
            backgroundColor: "transparent",
            outline: "none",
          }}
        >
          {/* Loading Fallback State */}
          <div
            slot="poster"
            className="w-full h-full flex flex-col items-center justify-center gap-3 bg-surface-raised/60 backdrop-blur-sm"
          >
            <RotateCw className="w-6 h-6 text-accent-terracotta animate-spin" />
            <span className="font-mono text-xs text-text-muted">
              {locale === "vi" ? "Đang tải mô hình 3D..." : "Loading 3D Camera..."}
            </span>
          </div>
          {/* @ts-ignore */}
        </model-viewer>

        {/* Top Floating Badge: Hover / Drag Guidance */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface/95 backdrop-blur-md border border-border-subtle text-text-primary text-[11px] font-mono shadow-xs pointer-events-none">
          <Compass className={`w-3.5 h-3.5 text-accent-terracotta ${isInteracting ? "animate-spin" : ""}`} />
          <span className="font-medium">
            {locale === "vi" ? "Rê chuột / Chạm để xoay 360°" : "Hover / Touch to rotate 360°"}
          </span>
        </div>

        {/* Top Right Model Name Badge */}
        <div className="absolute top-3 right-3 z-20 font-mono text-[11px] bg-surface/95 backdrop-blur-md text-accent-terracotta font-semibold px-2.5 py-1 rounded-md border border-border-subtle shadow-xs pointer-events-none">
          CANON EOS R50 · 3D
        </div>

        {/* Bottom Recipe / Reel Bar */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-xs font-mono text-white bg-[#312922]/75 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/15">
          <span className="flex items-center gap-2 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-accent-peach animate-pulse" />
            <span>CANON EOS R50 · RF-S 18-45mm</span>
          </span>
          {onOpenReel && (
            <button
              type="button"
              onClick={onOpenReel}
              className="text-accent-peach hover:underline cursor-pointer text-[11px] font-sans font-medium"
            >
              {locale === "vi" ? "Xem video thực tế →" : "Watch reel →"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
