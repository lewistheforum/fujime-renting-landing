"use client";

import { useState } from "react";
import { CLIENT_REVIEWS } from "@/constants/equipment-data";
import { SITE_CONFIG } from "@/constants/site-config";

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentReview = CLIENT_REVIEWS[activeIndex];

  return (
    <section className="py-24 md:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-4 mb-12">
          <p className="eyebrow font-mono text-xs text-orange tracking-widest uppercase">
            07 — Reviews
          </p>
          <span className="h-px flex-1 bg-line"></span>
          <span className="font-mono text-xs sm:text-sm text-ink font-semibold">
            ★★★★★ <span className="text-orange">{SITE_CONFIG.stats.rating}</span> · {SITE_CONFIG.stats.reviewCount} Google reviews
          </span>
        </div>

        {/* Testimonials Stack */}
        <div className="relative max-w-4xl mx-auto">
          <blockquote className="border border-line rounded-3xl p-8 sm:p-12 bg-surface relative min-h-[300px] flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-start justify-between">
                <div className="serif-i text-orange text-6xl leading-none mb-3 font-serif">
                  &ldquo;
                </div>
                <span className="font-mono text-[10px] tracking-widest text-muted2 border border-line px-2.5 py-1 rounded-full">
                  ★ GOOGLE REVIEW
                </span>
              </div>

              <p
                className="text-ink leading-relaxed mb-8 text-lg sm:text-xl font-light"
                style={{ lineHeight: 1.8 }}
              >
                {currentReview.quote}
              </p>
            </div>

            <footer className="flex items-center gap-3.5 border-t border-line pt-6">
              <span
                className="w-11 h-11 rounded-full grid place-items-center font-display font-semibold text-sm shadow-md"
                style={{
                  background: currentReview.gradient,
                  color: currentReview.textColor || "#ffffff",
                }}
              >
                {currentReview.initials}
              </span>
              <div>
                <p className="text-base font-semibold text-ink">{currentReview.author}</p>
                <p className="text-muted2 text-xs font-mono">
                  {currentReview.role} · {currentReview.location}
                </p>
              </div>
            </footer>
          </blockquote>

          {/* Dots navigation */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {CLIENT_REVIEWS.map((rev, idx) => (
              <button
                key={rev.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-8 bg-orange"
                    : "bg-muted2/40 hover:bg-muted2"
                }`}
                aria-label={`Review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
