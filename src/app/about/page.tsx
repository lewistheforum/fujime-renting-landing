"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";

export default function AboutPage() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen bg-bg text-ink pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <nav className="flex items-center gap-2 text-xs font-mono text-muted mb-4 uppercase">
          <Link href="/" className="hover:text-orange transition-colors">
            {locale === "vi" ? "Trang chủ" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-orange font-semibold">
            {locale === "vi" ? "Về chúng tôi" : "About"}
          </span>
        </nav>

        <h1
          className="font-display font-semibold text-ink mb-8"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)", lineHeight: 1.1 }}
        >
          {locale === "vi" ? "Chúng tôi là " : "About "}
          <span className="serif-i text-orange italic font-serif">
            {SITE_CONFIG.shortName}.
          </span>
        </h1>

        <div className="space-y-6 text-muted text-base sm:text-lg font-light leading-relaxed mb-12">
          <p>
            {locale === "vi"
              ? "Trải qua hơn 6 năm hoạt động tại bờ biển miền Trung Việt Nam, chúng tôi đã đồng hành cùng hàng trăm thương hiệu, đạo diễn, và đoàn làm phim trong nước cũng như quốc tế."
              : "With over six years operating on Vietnam's central coast, CINEFY has partnered with hundreds of domestic and international brands, directors, and production crews."}
          </p>
          <p>
            {locale === "vi"
              ? "Tất cả quy trình từ kịch bản, quay phim, đánh sáng cho đến hậu kỳ, chỉnh màu đều được thực hiện in-house với tiêu chuẩn điện ảnh khắt khe nhất."
              : "Every stage from scripting, cinematography, and lighting to post-production and color grading is crafted in-house with the highest cinematic standards."}
          </p>
          <p className="text-xl sm:text-2xl font-serif italic text-ink border-l-2 border-orange pl-6 py-2 my-8">
            “{SITE_CONFIG.slogan}”
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-line">
          <div className="p-6 rounded-2xl bg-surface border border-line text-center">
            <div className="font-display font-bold text-4xl text-orange mb-2">
              {SITE_CONFIG.stats.yearsExperience}+
            </div>
            <div className="font-mono text-xs text-muted uppercase">Years in Da Nang</div>
          </div>
          <div className="p-6 rounded-2xl bg-surface border border-line text-center">
            <div className="font-display font-bold text-4xl text-orange mb-2">
              {SITE_CONFIG.stats.projectsCompleted}+
            </div>
            <div className="font-mono text-xs text-muted uppercase">Projects Produced</div>
          </div>
          <div className="p-6 rounded-2xl bg-surface border border-line text-center">
            <div className="font-display font-bold text-4xl text-orange mb-2">
              {SITE_CONFIG.stats.rating}★
            </div>
            <div className="font-mono text-xs text-muted uppercase">Google Review Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}
