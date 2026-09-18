"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { MAIN_NAV } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site-config";
import { useLanguage } from "@/contexts/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobileMenu"
      className="menu-overlay fixed inset-0 z-[110] bg-[#0a0a0b]/98 backdrop-blur-2xl flex flex-col transition-opacity duration-300"
      style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div className="menu-inner max-w-7xl mx-auto px-5 md:px-8 h-full flex flex-col w-full">
        {/* Top bar inside menu */}
        <div className="flex items-center justify-between py-5 border-b border-line">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <span className="font-display font-bold text-2xl tracking-tight text-ink flex items-center gap-1.5">
              <span className="text-orange">FUJIFILM</span> RENTAL
            </span>
          </Link>
          <button
            onClick={onClose}
            className="menu-toggle focus-ring flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs uppercase tracking-widest text-muted hover:text-white"
            aria-label="Close menu"
          >
            <span>Close</span>
            <span className="text-orange text-lg leading-none">✕</span>
          </button>
        </div>

        {/* Middle navigation & info */}
        <div className="menu-mid flex-1 grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-center py-8 overflow-y-auto">
          <nav className="menu-nav space-y-4" aria-label="Primary">
            {MAIN_NAV.map((item) => (
              <div key={item.id} className="menu-item group">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="menu-link flex items-baseline gap-4 text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-ink group-hover:text-orange transition-colors"
                >
                  <span className="menu-idx font-mono text-sm tracking-widest text-muted2 group-hover:text-orange">
                    {item.idx}
                  </span>
                  <span>{locale === "vi" ? item.labelVi : item.label}</span>
                </Link>
                {item.subItems && (
                  <div className="menu-sub flex items-center gap-4 pl-10 mt-2 text-sm text-muted">
                    {item.subItems.map((sub, idx) => (
                      <React.Fragment key={sub.href}>
                        {idx > 0 && <span className="text-muted2">·</span>}
                        <Link
                          href={sub.href}
                          onClick={onClose}
                          className="hover:text-orange transition-colors"
                        >
                          {locale === "vi" ? sub.labelVi : sub.label}
                        </Link>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <aside className="menu-aside border-t lg:border-t-0 lg:border-l border-line pt-6 lg:pt-0 lg:pl-12">
            <p className="font-mono text-[10px] tracking-widest text-muted2 mb-4">GET IN TOUCH</p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="block text-ink hover:text-orange transition-colors mb-5 text-lg"
            >
              {SITE_CONFIG.email}
            </a>
            <div className="space-y-3 mb-6">
              <a href={`tel:${SITE_CONFIG.phoneNumbers.rental}`} className="block group">
                <span className="block text-muted2 font-mono text-[10px] tracking-widest">
                  RENTAL / PRODUCTION
                </span>
                <span className="text-ink group-hover:text-orange transition-colors">
                  {SITE_CONFIG.hotlineRental}
                </span>
              </a>
              <a href={`tel:${SITE_CONFIG.phoneNumbers.studio}`} className="block group">
                <span className="block text-muted2 font-mono text-[10px] tracking-widest">
                  STUDIO / PODCAST
                </span>
                <span className="text-ink group-hover:text-orange transition-colors">
                  {SITE_CONFIG.hotlineStudio}
                </span>
              </a>
            </div>
            <p className="text-muted2 text-sm leading-relaxed mb-6">
              {SITE_CONFIG.address}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full grid place-items-center border border-line hover:border-orange hover:text-orange transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full grid place-items-center border border-line hover:border-orange hover:text-orange transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full grid place-items-center border border-line hover:border-orange hover:text-orange transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 2h-3v13.5a2.5 2.5 0 1 1-2.5-2.5c.3 0 .5 0 .8.1V9.9a6 6 0 1 0 5.2 6V9.3a7 7 0 0 0 4 1.3V7.3A4 4 0 0 1 16 2Z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full grid place-items-center border border-line hover:border-orange hover:text-orange transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M22 8a3 3 0 0 0-2.1-2.1C18 5.4 12 5.4 12 5.4s-6 0-7.9.5A3 3 0 0 0 2 8a31 31 0 0 0 0 8 3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5A3 3 0 0 0 22 16a31 31 0 0 0 0-8Z"/><path d="m10 15 5-3-5-3z" fill="currentColor"/></svg>
              </a>
            </div>
          </aside>
        </div>

        {/* Footer inside menu */}
        <div className="menu-foot flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-line">
          <div className="langtoggle flex items-center rounded-full border border-line p-1 bg-surface" role="group">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase transition-colors ${
                locale === "en" ? "bg-orange text-white" : "text-muted hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("vi")}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase transition-colors ${
                locale === "vi" ? "bg-orange text-white" : "text-muted hover:text-white"
              }`}
            >
              VI
            </button>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="btn btn-primary px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide"
          >
            {locale === "vi" ? "Liên hệ ngay" : "Let's talk"}
          </Link>
          <p className="font-mono text-[10px] tracking-widest text-muted2">
            {SITE_CONFIG.slogan.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}
