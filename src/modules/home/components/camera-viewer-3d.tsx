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
  { src: "/canon-r50v-hq.glb", short: "R50 White", name: "CANON R50 WHITE", detail: "RF-S 18-45mm", zoom: "105%" },
  { src: "/fujime-hq.glb", short: "X100VI", name: "FUJIFILM X100VI", detail: "23mm f/2", zoom: "105%" },
  { src: "/pocket-4-hq.glb", short: "Pocket 4", name: "DJI OSMO POCKET 4", detail: "3-axis gimbal", zoom: "150%" },
];

const AUTO_ROTATE_DURATION = 8000; // 8 seconds per camera model

export function CameraViewer3D({ onOpenReel }: CameraViewer3DProps) {
  const { locale } = useLanguage();
  const modelViewerRef = useRef<any>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [animState, setAnimState] = useState<"idle" | "exiting" | "entering">("idle");

  const model = MODELS[activeIndex];

  // GLB is meshopt-compressed: decoder must be set before `src` is assigned
  const initModelViewer = () => {
    const ModelViewer = customElements.get("model-viewer") as any;
    if (!ModelViewer) return;
    ModelViewer.meshoptDecoderLocation =
      "https://cdn.jsdelivr.net/npm/meshoptimizer@0.22.0/meshopt_decoder.js";
    setIsScriptLoaded(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") initModelViewer();
  }, []);

  // Listen to model-viewer load / error events
  useEffect(() => {
    const el = modelViewerRef.current;
    if (!el) return;
    const done = () => {
      setIsModelLoaded(true);
      // Trigger smooth slide-in from right when new model is loaded
      setAnimState("entering");
      const timer = setTimeout(() => setAnimState("idle"), 550);
      return () => clearTimeout(timer);
    };
    el.addEventListener("load", done);
    el.addEventListener("error", done);
    return () => {
      el.removeEventListener("load", done);
      el.removeEventListener("error", done);
    };
  }, [activeIndex]);

  // Smooth carousel transition: animate old camera exiting to left, then swap index
  const showModel = (targetIndex: number) => {
    if (targetIndex === activeIndex || animState === "exiting") return;

    // Start slide-out to left
    setAnimState("exiting");
    setIsModelLoaded(false);

    setTimeout(() => {
      setActiveIndex(targetIndex);
      // Let the viewer begin loading the new model; when loaded, 'entering' triggers
    }, 420);
  };

  // Auto-switch camera smoothly when not interacting
  useEffect(() => {
    if (isInteracting || animState === "exiting") return;
    const timer = setTimeout(() => {
      showModel((activeIndex + 1) % MODELS.length);
    }, AUTO_ROTATE_DURATION);
    return () => clearTimeout(timer);
  }, [activeIndex, isInteracting, animState]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!modelViewerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const y = (e.clientY - rect.top) / rect.height; // 0 -> 1

    // Reverse theta so moving mouse right rotates the front face towards the right
    const theta = -(x - 0.5) * 360;
    // Invert phi tilt
    const phi = 75 - (y - 0.5) * 30; // 60 deg to 90 deg
    modelViewerRef.current.cameraOrbit = `${theta}deg ${phi}deg ${model.zoom}`;
  };

  const handlePointerLeave = () => {
    setIsInteracting(false);
    if (!modelViewerRef.current) return;
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
        className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-gradient-to-b from-[#FDFBF7] to-[#EDE1D2]/50 overflow-hidden select-none cursor-grab active:cursor-grabbing"
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

        {/*
          3D Model Viewer Wrapper: Fills entire stage center-stage with Carousel Keyframe Transitions
          animState === 'exiting' -> .animate-carousel-out (swift exit to left, ease-out)
          animState === 'entering' -> .animate-carousel-in (graceful sweep from right)
        */}
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center will-change-transform ${
            animState === "exiting"
              ? "animate-carousel-out"
              : animState === "entering"
              ? "animate-carousel-in"
              : ""
          }`}
        >
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
            class="w-full h-full"
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
              className="w-full h-full flex flex-col items-center justify-center gap-3 bg-surface-raised/40 backdrop-blur-xs"
            >
              <RotateCw className="w-6 h-6 text-accent-terracotta animate-spin" />
              <span className="font-mono text-xs text-text-muted">
                {locale === "vi" ? "Đang nạp mô hình 3D..." : "Loading 3D Camera..."}
              </span>
            </div>

            {/* Suppress model-viewer default progress bar */}
            <div slot="progress-bar" style={{ display: "none" }} />
            {/* @ts-ignore */}
          </model-viewer>
        </div>

        {/* Top Floating Badge: Hover / Drag Guidance */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface/95 backdrop-blur-md border border-border-subtle text-text-primary text-[11px] font-mono shadow-xs pointer-events-none">
          <Compass
            className={`w-3.5 h-3.5 text-accent-terracotta ${isInteracting ? "animate-spin" : ""}`}
          />
          <span className="font-medium">
            {locale === "vi" ? "Rê chuột / Chạm để xoay 360°" : "Hover / Touch to rotate 360°"}
          </span>
        </div>

        {/* Top Right Model Name Badge */}
        <div className="absolute top-3 right-3 z-20 font-mono text-[11px] bg-surface/95 backdrop-blur-md text-accent-terracotta font-semibold px-2.5 py-1 rounded-md border border-border-subtle shadow-xs pointer-events-none">
          {model.short.toUpperCase()} · 3D
        </div>

        {/*
          Model Switcher Pill: Centered horizontally at the bottom of the card frame
        */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 p-[3px] rounded-full bg-surface/95 backdrop-blur-md border border-border-subtle shadow-xs"
          role="group"
          aria-label={locale === "vi" ? "Chọn mô hình 3D" : "Choose 3D model"}
          onPointerMove={(e) => e.stopPropagation()}
        >
          {MODELS.map((m, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={m.src + i}
                type="button"
                onClick={() => showModel(i)}
                aria-pressed={isActive}
                className={`px-3 py-1.5 rounded-full font-mono text-[11px] whitespace-nowrap cursor-pointer transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-terracotta ${
                  isActive
                    ? "bg-accent-terracotta text-white font-semibold shadow-xs scale-102"
                    : "text-text-primary hover:bg-surface-raised/70"
                }`}
              >
                {m.short}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
