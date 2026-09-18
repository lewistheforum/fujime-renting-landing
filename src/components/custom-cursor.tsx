"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHover, setIsHover] = useState(false);
  const [viewMode, setViewMode] = useState<string | null>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    setMounted(true);

    let targetX = -100;
    let targetY = -100;
    let curX = -100;
    let curY = -100;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
    };

    const loop = () => {
      curX += (targetX - curX) * 0.18;
      curY += (targetY - curY) * 0.18;
      setRingPos({ x: curX, y: curY });
      rafId = requestAnimationFrame(loop);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [data-tilt], [data-magnetic], input, textarea, select");
      setIsHover(Boolean(interactive));

      const reelEl = target.closest("[data-reel]");
      const filmframe = target.closest(".filmframe");
      if (reelEl) {
        setViewMode("PLAY");
      } else if (filmframe) {
        setViewMode("VIEW");
      } else {
        setViewMode(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className="cursor-dot fixed pointer-events-none z-[9999]"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
        aria-hidden="true"
      />
      <div
        className={`cursor-ring fixed pointer-events-none z-[9998] flex items-center justify-center ${
          isHover ? "hot" : ""
        } ${viewMode ? "view" : ""}`}
        style={{
          transform: `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`,
        }}
        aria-hidden="true"
      >
        {viewMode && <span className="cv font-mono text-[10px] tracking-widest text-white">{viewMode}</span>}
      </div>
    </>
  );
}
