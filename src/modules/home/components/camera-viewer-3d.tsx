"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useLanguage } from "@/contexts/LanguageContext";
import { Compass, RotateCw } from "lucide-react";

interface CameraViewer3DProps {
  onOpenReel?: () => void;
}

const MODELS = [
  { src: "/canon-r50-hq.glb", short: "EOS R50", name: "CANON EOS R50", detail: "RF-S 18-45mm", zoom: "105%" },
  { src: "/canon-r50v-hq.glb", short: "EOS R50", name: "CANON EOS R50", detail: "RF-S 18-45mm", zoom: "105%" },
  { src: "/fujime-hq.glb", short: "X100VI", name: "FUJIFILM X100VI", detail: "23mm f/2", zoom: "105%" },
  { src: "/pocket-4-hq.glb", short: "Pocket 4", name: "DJI OSMO POCKET 4", detail: "3-axis gimbal", zoom: "150%" },
];

export function CameraViewer3D({ onOpenReel }: CameraViewer3DProps) {
  const { locale } = useLanguage();
  const modelViewerRef = useRef<any>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const model = MODELS[activeIndex];

  // GLB is meshopt-compressed: decoder must be set before `src` is assigned
  const initModelViewer = () => {
    const ModelViewer = customElements.get("model-viewer") as any;
    if (!ModelViewer) return;
    ModelViewer.meshoptDecoderLocation =
      "https://cdn.jsdelivr.net/npm/meshoptimizer@0.22.0/meshopt_decoder.js";
    setIsScriptLoaded(true);
  };

  // Check if customElements already defined model-viewer
  useEffect(() => {
    if (typeof window !== "undefined") initModelViewer();
  }, []);

  // Countdown only starts once the model is on screen; errors still let the carousel move on
  useEffect(() => {
    const el = modelViewerRef.current;
    if (!el) return;
    const done = () => setIsModelLoaded(true);
    el.addEventListener("load", done);
    el.addEventListener("error", done);
    return () => {
      el.removeEventListener("load", done);
      el.removeEventListener("error", done);
    };
  }, []);

  const showModel = (index: number) => {
    if (index === activeIndex) return;
    setIsModelLoaded(false);
    setActiveIndex(index);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!modelViewerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const y = (e.clientY - rect.top) / rect.height; // 0 -> 1

    // Reverse theta so moving mouse right rotates the front face towards the right (natural object-turn feel)
    const theta = -(x - 0.5) * 360;
    // Invert phi tilt so moving mouse up tilts camera up / pitches object naturally
    const phi = 75 - (y - 0.5) * 30; // 60 deg to 90 deg
    modelViewerRef.current.cameraOrbit = `${theta}deg ${phi}deg ${model.zoom}`;
  };

  const handlePointerLeave = () => {
    setIsInteracting(false);
    if (!modelViewerRef.current) return;
    // Smooth reset to front aesthetic view
    modelViewerRef.current.cameraOrbit = `0deg 75deg ${model.zoom}`;
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
        onLoad={initModelViewer}
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
            background:
              "radial-gradient(circle, #E8B69A 0%, rgba(255, 249, 242, 0) 70%)",
          }}
          aria-hidden="true"
        />

        {/* 3D Model Viewer Web Component */}
        {/* @ts-ignore */}
        <model-viewer
          ref={modelViewerRef}
          src={isScriptLoaded ? model.src : undefined}
          alt={`${model.name} 3D Model`}
          camera-controls
          auto-rotate
          auto-rotate-delay="1000"
          rotation-per-second="20deg"
          camera-orbit={`0deg 75deg ${model.zoom}`}
          field-of-view="32deg"
          min-camera-orbit="auto auto 70%"
          max-camera-orbit="auto auto 200%"
          shadow-intensity="1.5"
          shadow-softness="0.8"
          exposure="1.05"
          interaction-prompt="none"
          class="w-full h-full relative z-10"
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
              {locale === "vi"
                ? "Đang tải mô hình 3D..."
                : "Loading 3D Camera..."}
            </span>
          </div>
          {/* @ts-ignore */}
        </model-viewer>

        {/* Top Floating Badge: Hover / Drag Guidance */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface/95 backdrop-blur-md border border-border-subtle text-text-primary text-[11px] font-mono shadow-xs pointer-events-none">
          <Compass
            className={`w-3.5 h-3.5 text-accent-terracotta ${isInteracting ? "animate-spin" : ""}`}
          />
          <span className="font-medium">
            {locale === "vi"
              ? "Rê chuột / Chạm để xoay 360°"
              : "Hover / Touch to rotate 360°"}
          </span>
        </div>

        {/* Top Right Model Name Badge */}
        <div className="absolute top-3 right-3 z-20 font-mono text-[11px] bg-surface/95 backdrop-blur-md text-accent-terracotta font-semibold px-2.5 py-1 rounded-md border border-border-subtle shadow-xs pointer-events-none">
          {model.short.toUpperCase()} · 3D
        </div>

        {/* Model Switcher: active chip's progress bar is the 10s auto-switch timer (animation-model-progress) */}
        <div
          className="absolute bottom-[10px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 p-1 rounded-full bg-surface/95 backdrop-blur-md border border-border-subtle shadow-xs"
          role="group"
          aria-label={locale === "vi" ? "Chọn mô hình 3D" : "Choose 3D model"}
          onPointerMove={(e) => e.stopPropagation()}
        >
          {MODELS.map((m, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={m.src}
                type="button"
                onClick={() => showModel(i)}
                aria-pressed={isActive}
                className={`relative overflow-hidden px-3 py-1.5 rounded-full font-mono text-[11px] whitespace-nowrap cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-terracotta ${
                  isActive
                    ? "bg-accent-terracotta text-white font-semibold"
                    : "text-text-primary hover:bg-surface-raised"
                }`}
              >
                {m.short}
                {isActive && (
                  <span
                    key={activeIndex}
                    onAnimationEnd={() => showModel((activeIndex + 1) % MODELS.length)}
                    className="absolute left-0 bottom-0 h-[3px] w-full origin-left bg-white/80 animate-model-progress"
                    style={{
                      animationPlayState:
                        isModelLoaded && !isInteracting ? "running" : "paused",
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Recipe / Reel Bar */}
        {/* <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-xs font-mono text-white bg-[#312922]/75 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/15">
          <span className="flex items-center gap-2 text-[11px]" aria-live="polite">
            <span className="w-2 h-2 rounded-full bg-accent-peach animate-pulse" />
            <span>
              {model.name} · {model.detail}
            </span>
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
        </div> */}
      </div>
    </>
  );
}
