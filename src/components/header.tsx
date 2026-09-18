"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="nav"
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 py-4 ${
          isScrolled
            ? "bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-line shadow-2xl py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 focus-ring" aria-label="Home">
            <span className="font-display font-black text-xl sm:text-2xl tracking-tighter text-ink flex items-center gap-1.5">
              <span className="text-orange">FUJIFILM</span>
              <span className="text-white/90">RENTAL</span>
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            {/* Language toggle */}
            <div
              className="langtoggle flex items-center rounded-full border border-line p-0.5 bg-surface/70 backdrop-blur-md"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all ${
                  locale === "en"
                    ? "bg-orange text-white font-semibold"
                    : "text-muted hover:text-white"
                }`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale("vi")}
                className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all ${
                  locale === "vi"
                    ? "bg-orange text-white font-semibold"
                    : "text-muted hover:text-white"
                }`}
                aria-pressed={locale === "vi"}
              >
                VI
              </button>
            </div>

            {/* Let's talk button */}
            <Link
              href="/contact"
              className="btn btn-ghost hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-line text-xs uppercase tracking-widest text-ink hover:border-orange hover:text-orange transition-all"
            >
              <span>{t("letsTalk")}</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>

            {/* Menu trigger */}
            <button
              id="menuBtn"
              onClick={() => setIsMenuOpen(true)}
              className="menu-toggle focus-ring flex items-center gap-2.5 px-4 py-2 rounded-full border border-line bg-surface/80 hover:border-orange/60 text-ink transition-all cursor-pointer"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {t("menu")}
              </span>
              <span className="flex flex-col gap-1 w-4" aria-hidden="true">
                <i className="block h-0.5 w-full bg-orange rounded-full"></i>
                <i className="block h-0.5 w-full bg-orange rounded-full"></i>
              </span>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
