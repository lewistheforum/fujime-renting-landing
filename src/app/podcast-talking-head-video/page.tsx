"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { Mic, Video, Volume2, Phone } from "lucide-react";

export default function PodcastPage() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen bg-bg text-ink pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <nav className="flex items-center gap-2 text-xs font-mono text-muted mb-4 uppercase">
          <Link href="/" className="hover:text-orange transition-colors">
            {locale === "vi" ? "Trang chủ" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-orange font-semibold">
            {locale === "vi" ? "Podcast & Phỏng vấn" : "Podcast & Talking-head"}
          </span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1
              className="font-display font-semibold text-ink mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
            >
              Podcast &amp;{" "}
              <span className="serif-i text-orange italic font-serif">
                Talking-head Studio.
              </span>
            </h1>
            <p className="text-muted text-base sm:text-lg font-light leading-relaxed mb-8">
              {locale === "vi"
                ? "Gói quay podcast và video phỏng vấn chuyên nghiệp — hệ thống multi-cam 4K, set đèn ấm cúng chuẩn cinema, micro phòng thu Shure SM7B lọc âm tuyệt đối."
                : "Complete talking-head and podcast studio package in Da Nang. Multi-camera 4K setup, cinematic studio lighting, Shure SM7B microphones, and multi-track clean audio recording."}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-ink">
                <Video className="w-5 h-5 text-orange" />
                <span>2-4 Cinema Camera angles (4K 10-bit)</span>
              </div>
              <div className="flex items-center gap-3 text-ink">
                <Mic className="w-5 h-5 text-orange" />
                <span>Broadcast microphones &amp; isolated audio tracks</span>
              </div>
              <div className="flex items-center gap-3 text-ink">
                <Volume2 className="w-5 h-5 text-orange" />
                <span>Acoustically treated studio space</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://zalo.me/${SITE_CONFIG.phoneNumbers.studio}?text=Xin%20chào,%20tôi%20muốn%20hỏi%20về%20gói%20thuê%20phòng%20quay%20Podcast`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-orange hover:bg-orange-bright text-bg font-semibold text-sm tracking-wide transition-colors"
              >
                {locale === "vi" ? "Đặt lịch quay Podcast" : "Book a Podcast Session"}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phoneNumbers.studio}`}
                className="px-6 py-3.5 rounded-full border border-line hover:border-orange text-ink hover:text-orange text-sm font-semibold tracking-wide transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{SITE_CONFIG.hotlineStudio}</span>
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-line aspect-[4/3] bg-surface">
            <img
              src="/images/podcast-set3c9e.jpg"
              alt="Podcast studio setup in Da Nang"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 font-mono text-xs text-white/90">
              Multi-cam setup · Shure SM7B · Warm lighting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
