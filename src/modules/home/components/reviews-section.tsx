"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export function ReviewsSection() {
  const { t, locale } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      author: "Ngọc Mai & Hoàng Long",
      roleVi: "Cặp đôi du lịch từ Hà Nội",
      roleEn: "Travelers from Hanoi",
      gear: "Thuê Fujifilm X-T5 + 27mm f/2.8",
      quoteVi:
        "Tụi mình vào Đà Nẵng chơi 4 ngày, thuê chiếc X-T5 của tiệm để chụp ảnh kỷ niệm. Máy mới keng, 2 cục pin chụp từ sáng đến tối không hết. Anh chủ cài sẵn màu Classic Chrome nên chụp dạo biển và Hội An ra ảnh tone film cực ưng, gửi thẳng qua điện thoại up story được luôn!",
      quoteEn:
        "We visited Da Nang for 4 days and rented an X-T5 from Fujime. The camera was in pristine condition, with 2 batteries lasting all day. Pre-loaded Classic Chrome gave us magical film tones for our Hoi An trip!",
      date: "Tháng 8, 2024",
    },
    {
      author: "Minh Quân",
      roleVi: "Sinh viên ĐH Kiến Trúc Đà Nẵng",
      roleEn: "Architecture Student in Da Nang",
      gear: "Thuê Fujifilm X-T30 II + 56mm f/1.2",
      quoteVi:
        "Nhóm mình thuê máy chụp kỷ yếu tốt nghiệp. Tiệm hỗ trợ thủ tục cọc sinh viên rất linh hoạt và nhiệt tình. Ống kính 56mm xóa phông lung linh, bạn bè ai cũng khen ảnh đẹp như chụp máy phim ngày xưa.",
      quoteEn:
        "Rented for our graduation shoot. The team offered very flexible student deposit terms and friendly advice. The 56mm portrait lens yielded stunning bokeh and film warmth!",
      date: "Tháng 6, 2024",
    },
    {
      author: "Thảo Vy (Vee.studio)",
      roleVi: "Local Brand Owner",
      roleEn: "Boutique Fashion Brand Owner",
      gear: "Thuê Studio 360m² + Fujifilm GFX 100 II",
      quoteVi:
        "Studio tại Sơn Trà không gian rất rộng và sạch sẽ, phông cyclorama trắng tinh tươm. Mình chụp lookbook mùa hè bằng con GFX 100 II chi tiết vải vóc lên cực kỳ sắc nét. Sẽ tiếp tục book cho các collection tới!",
      quoteEn:
        "Spacious and clean 360m² studio with pristine cyclorama. Rented the GFX 100 II for our summer collection — fabric textures came out incredibly sharp. Will definitely book again!",
      date: "Tháng 7, 2024",
    },
  ];

  const current = reviews[activeIndex];

  return (
    <section className="py-20 md:py-24 bg-surface-raised/30 border-t border-border-subtle" id="reviews">
      <div className="container-editorial">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {t("reviews.eyebrow")}
              </p>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-text-primary">
              {t("reviews.title1")}{" "}
              <span className="font-brand text-accent-terracotta font-normal">
                {t("reviews.title2")}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-text-muted bg-surface px-3.5 py-2 rounded-full border border-border-subtle">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-text-primary">5.0 / 5.0</span>
            <span>· Đánh giá từ khách thuê</span>
          </div>
        </div>

        {/* Review Card with Paper Mat Feel */}
        <div className="card-surface p-7 sm:p-10 rounded-2xl max-w-4xl mx-auto relative border border-border-subtle shadow-xs">
          <Quote className="w-10 h-10 text-accent-terracotta/20 absolute top-6 right-6" />

          <div className="mb-6">
            <span className="tag-badge-peach text-[11px] font-mono inline-block mb-3">
              {current.gear}
            </span>
            <p className="text-text-primary text-base sm:text-lg leading-relaxed font-light italic">
              &ldquo;{locale === "vi" ? current.quoteVi : current.quoteEn}&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-border-subtle">
            <div>
              <h4 className="font-display font-semibold text-base text-text-primary">
                {current.author}
              </h4>
              <p className="text-xs font-mono text-text-muted mt-0.5">
                {locale === "vi" ? current.roleVi : current.roleEn} · {current.date}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
                }
                className="w-9 h-9 rounded-full border border-border-subtle bg-surface-raised hover:border-accent-terracotta grid place-items-center text-text-primary transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
                }
                className="w-9 h-9 rounded-full border border-border-subtle bg-surface-raised hover:border-accent-terracotta grid place-items-center text-text-primary transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
