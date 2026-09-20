"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { LogIn } from "lucide-react";

export function Header() {
  const { locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const onAuthPage = ["/login", "/register", "/forgot-password"].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      id="nav"
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-surface/92 backdrop-blur-xl border-b border-border-subtle shadow-xs py-3"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          onClick={handleHomeClick}
          className="flex items-center gap-2 focus-ring"
          aria-label="Fujime Renting Home"
        >
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-text-primary flex items-center gap-1.5">
            <span className="text-accent-terracotta">Fujime</span>
            <span className="text-text-primary">Renting</span>
          </span>
        </Link>

        {/* Center: 2 Primary Page Navigation Links (Homepage & Sản phẩm) */}
        <div className="flex items-center gap-1 sm:gap-2 px-1.5 py-1 rounded-full bg-surface/80 backdrop-blur-md border border-border-subtle shadow-2xs">
          <Link
            href="/"
            onClick={handleHomeClick}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              pathname === "/"
                ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                : "text-text-muted hover:text-text-primary hover:bg-surface-raised/60"
            }`}
          >
            {locale === "vi" ? "Trang chủ" : "Homepage"}
          </Link>

          <Link
            href="/products"
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              pathname.startsWith("/products")
                ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                : "text-text-muted hover:text-text-primary hover:bg-surface-raised/60"
            }`}
          >
            {locale === "vi" ? "Sản phẩm" : "Products"}
          </Link>

          <Link
            href="/products"
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              pathname.startsWith("/products")
                ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                : "text-text-muted hover:text-text-primary hover:bg-surface-raised/60"
            }`}
          >
            {locale === "vi" ? "Tra cứu" : "Search"}
          </Link>

           <Link
            href="/products"
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              pathname.startsWith("/products")
                ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                : "text-text-muted hover:text-text-primary hover:bg-surface-raised/60"
            }`}
          >
            {locale === "vi" ? "Hướng dẫn" : "Guidelines"}
          </Link>

          <Link
            href="/products"
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              pathname.startsWith("/products")
                ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                : "text-text-muted hover:text-text-primary hover:bg-surface-raised/60"
            }`}
          >
            {locale === "vi" ? "Liên hệ" : "Contact"}
          </Link>
        </div>

        {/* Right: Language toggle & Quick Zalo Concierge */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Language toggle */}
          <div
            className="flex items-center rounded-full border border-border-subtle p-0.5 bg-surface/80 backdrop-blur-md shadow-2xs"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLocale("vi")}
              className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                locale === "vi"
                  ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                  : "text-text-muted hover:text-text-primary"
              }`}
              aria-pressed={locale === "vi"}
            >
              VI
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                locale === "en"
                  ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                  : "text-text-muted hover:text-text-primary"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>

          {/* Account entry */}
          <Link
            href="/login"
            aria-current={onAuthPage ? "page" : undefined}
            className={
              onAuthPage
                ? "text-xs font-medium py-2 px-3.5 sm:px-4 rounded-full hidden sm:inline-flex items-center gap-1.5 bg-surface-raised text-accent-terracotta border border-border-subtle"
                : "btn-primary-terracotta text-xs py-2 px-3.5 sm:px-4 hidden sm:inline-flex items-center gap-1.5 shadow-xs"
            }
          >
            <LogIn className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{locale === "vi" ? "Đăng nhập" : "Log In"}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
