"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Coffee, Heart, Wrench, Sparkles, MapPin } from "lucide-react";

export function LabStory() {
  const { locale } = useLanguage();

  return (
    <section id="lab-story" className="py-20 md:py-28 bg-bg-ground relative">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Philosophy & Story */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {locale === "vi" ? "GÓC TIỆM TẠI SƠN TRÀ" : "OUR SƠN TRÀ LAB"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-6">
              {locale === "vi" ? "Tiệm máy ảnh sinh ra từ" : "A camera studio crafted from"}{" "}
              <span className="font-display italic font-normal text-accent-terracotta block sm:inline">
                {locale === "vi" ? "tình yêu màu phim ấm áp." : "the love of analog warmth."}
              </span>
            </h2>

            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6 font-light">
              {locale === "vi"
                ? "Tụi mình ở đây để việc cầm trên tay một chiếc máy ảnh xịn trở nên dễ dàng và nhẹ nhàng nhất cho bạn trẻ. Dù bạn vào Đà Nẵng du lịch 3 ngày, đi chụp kỷ yếu với nhóm bạn, hay chụp lookbook thời trang cho shop, tụi mình luôn chuẩn bị máy sạch sẽ, pin sạc đầy 100% và cài sẵn công thức màu film đẹp."
                : "We believe holding an exceptional camera should feel effortless and joyful for every creator. Whether you are traveling through Da Nang, shooting graduation memories, or filming lookbooks, we hand-prepare every kit with 100% charge and curated film recipes."}
            </p>

            <blockquote className="border-l-2 border-accent-terracotta pl-4 my-6 italic font-display text-lg sm:text-xl text-text-primary">
              {locale === "vi"
                ? "“Bạn chỉ việc thỏa sức bấm máy và tận hưởng chuyến đi, phần thiết bị cứ để tụi mình lo.”"
                : "“Focus on your moments and creative vision — we take care of the gear.”"}
            </blockquote>

            {/* 2 Reassurance pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-border-subtle">
              <div className="card-surface p-4 rounded-xl border border-border-subtle">
                <div className="flex items-center gap-2.5 mb-1.5 text-accent-terracotta">
                  <Coffee className="w-4 h-4" />
                  <h4 className="font-display font-semibold text-sm text-text-primary">
                    {locale === "vi" ? "Ghé tiệm uống trà & thử máy" : "Drop by for tea & test"}
                  </h4>
                </div>
                <p className="text-xs text-text-muted font-light leading-relaxed">
                  {locale === "vi"
                    ? "Cứ ghé 179B Nguyễn Công Trứ bấm thử máy thoải mái trước khi quyết định thuê!"
                    : "Test any camera freely at our Sơn Trà base before making your rental decision!"}
                </p>
              </div>

              <div className="card-surface p-4 rounded-xl border border-border-subtle">
                <div className="flex items-center gap-2.5 mb-1.5 text-accent-sage">
                  <Wrench className="w-4 h-4" />
                  <h4 className="font-display font-semibold text-sm text-text-primary">
                    {locale === "vi" ? "Chỉ dẫn 5 phút cho bạn mới" : "5-minute friendly onboarding"}
                  </h4>
                </div>
                <p className="text-xs text-text-muted font-light leading-relaxed">
                  {locale === "vi"
                    ? "Chưa từng chụp máy ảnh bao giờ? Tụi mình chỉ dẫn các nút bấm cơ bản và cách gửi ảnh sang điện thoại."
                    : "Never shot on a camera? We will walk you through buttons and phone transfer in 5 minutes."}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Workshop Atmosphere Frames */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div
              className="absolute -top-3 left-8 w-24 h-5 bg-[#EFE6D8]/90 border-x border-[#DCCBBC] -rotate-2 z-10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="card-surface p-2.5 rounded-xl shadow-xs">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-surface-raised mb-2">
                <img
                  src="/images/mv-set3c9e.jpg"
                  alt="Không gian chuẩn bị thiết bị tại tiệm"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] font-mono text-text-muted block text-center">
                {locale === "vi" ? "Bàn chuẩn bị máy" : "Gear prep table"}
              </span>
            </div>

            <div className="card-surface p-2.5 rounded-xl shadow-xs mt-6">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-surface-raised mb-2">
                <img
                  src="/images/equip-hero6c7f.jpg"
                  alt="Bộ ống kính quang học sạch sẽ"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] font-mono text-text-muted block text-center">
                {locale === "vi" ? "Kiểm tra quang học" : "Sensor & optical check"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
