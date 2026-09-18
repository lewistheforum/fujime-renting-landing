"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { locale } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line pt-16 pb-10 bg-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-14">
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-5">
              <span className="font-display font-black text-2xl tracking-tighter text-ink flex items-center gap-1.5">
                <span className="text-orange">Fujime</span> Renting
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {locale === "vi"
                ? "Sản xuất video, studio 360m² và cho thuê thiết bị máy quay điện ảnh tại Đà Nẵng. Cung cấp giải pháp quay phim và thiết bị chuyên nghiệp."
                : "Get creative. Be original. Da Nang video production, 360m² studio & cinema camera rental — based in Sơn Trà, working with international clients."}
            </p>
            <p className="font-mono text-xs text-orange tracking-widest uppercase">
              {SITE_CONFIG.slogan}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <p className="font-mono text-[10px] tracking-widest text-muted2 mb-4">EXPLORE</p>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <Link href="/about" className="hover:text-orange transition-colors">
                    {locale === "vi" ? "Về chúng tôi" : "About"}
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="hover:text-orange transition-colors">
                    {locale === "vi" ? "Dự án" : "Work"}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-orange transition-colors">
                    {locale === "vi" ? "Liên hệ" : "Contact"}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-widest text-muted2 mb-4">SERVICES</p>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <Link href="/video-production" className="hover:text-orange transition-colors">
                    {locale === "vi" ? "Sản xuất Video" : "Video Production"}
                  </Link>
                </li>
                <li>
                  <Link href="/studio-rental" className="hover:text-orange transition-colors">
                    {locale === "vi" ? "Đặt phòng Studio" : "Studio Booking"}
                  </Link>
                </li>
                <li>
                  <Link href="/equipment-rental" className="hover:text-orange transition-colors">
                    {locale === "vi" ? "Thuê máy ảnh & thiết bị" : "Equipment Rental"}
                  </Link>
                </li>
                <li>
                  <Link href="/podcast-talking-head-video" className="hover:text-orange transition-colors">
                    {locale === "vi" ? "Podcast & Phỏng vấn" : "Podcast & Talking-head"}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[10px] tracking-widest text-muted2 mb-4">CONTACT</p>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-orange transition-colors break-all"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.phoneNumbers.rental}`}
                    className="hover:text-orange transition-colors block"
                  >
                    {SITE_CONFIG.hotlineRental}
                  </a>
                  <span className="block text-muted2 text-[11px] font-mono tracking-wide">
                    Rental / Production
                  </span>
                </li>
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.phoneNumbers.studio}`}
                    className="hover:text-orange transition-colors block"
                  >
                    {SITE_CONFIG.hotlineStudio}
                  </a>
                  <span className="block text-muted2 text-[11px] font-mono tracking-wide">
                    Studio / Podcast
                  </span>
                </li>
                <li className="text-muted2 leading-relaxed text-xs">
                  {SITE_CONFIG.address}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-line mb-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted2 text-xs font-mono tracking-wide">
            &copy; {currentYear} {SITE_CONFIG.name} — Đà Nẵng, Việt Nam.
          </p>
          <p className="text-muted2 text-xs font-mono tracking-wide">
            {SITE_CONFIG.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
