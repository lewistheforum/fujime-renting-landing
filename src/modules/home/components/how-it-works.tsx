"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Search, PackageCheck, Smile, HelpCircle } from "lucide-react";

export function HowItWorks() {
  const { locale } = useLanguage();

  const steps = [
    {
      num: "01",
      icon: Search,
      titleVi: "Chọn máy & Ngày thuê",
      titleEn: "Pick Camera & Dates",
      descVi: "Duyệt tủ máy hoặc nhắn Zalo cho tiệm nếu bạn phân vân. Tiệm kiểm tra lịch và giữ máy nhanh chóng.",
      descEn: "Browse kits or message us on Zalo if you need tips. We will hold your gear immediately.",
    },
    {
      num: "02",
      icon: PackageCheck,
      titleVi: "Nhận máy & Kiểm tra",
      titleEn: "Pickup or Delivery",
      descVi: "Ghé 179B Nguyễn Công Trứ (Sơn Trà) hoặc nhận máy tận nơi. Máy đã sạc 100% 2 pin, cài sẵn màu film đẹp.",
      descEn: "Pickup at our Sơn Trà base or get local hotel delivery. Fully tested, 100% battery, film recipes loaded.",
    },
    {
      num: "03",
      icon: Smile,
      titleVi: "Bấm máy & Hoàn cọc nhanh",
      titleEn: "Shoot & Easy Return",
      descVi: "Thỏa sức ghi lại những bức hình đẹp. Khi trả máy, tiệm kiểm tra nhanh và hoàn cọc trong vòng 5 phút.",
      descEn: "Enjoy your creative trip. Simple return and prompt deposit refund within 5 minutes.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-surface-raised/40 border-y border-border-subtle" id="how-it-works">
      <div className="container-editorial">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
            {locale === "vi" ? "Thủ tục đơn giản" : "Simple 3-Step Process"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text-primary mt-2">
            {locale === "vi" ? "Thuê máy tại tiệm dễ như thế nào?" : "How camera rental works"}
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-2 font-light">
            {locale === "vi"
              ? "Không thủ tục rườm rà, hỗ trợ tận tình cho bạn mới bắt đầu lần đầu thuê máy."
              : "No complicated bureaucracy — supportive and hassle-free, even if it's your very first time."}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="card-surface p-7 rounded-2xl relative flex flex-col justify-between hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-surface-raised border border-border-subtle grid place-items-center text-accent-terracotta">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-accent-terracotta/25">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-2">
                    {locale === "vi" ? step.titleVi : step.titleEn}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed font-light">
                    {locale === "vi" ? step.descVi : step.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle/50 text-[11px] font-mono text-accent-sage flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-sage" />
                  <span>{locale === "vi" ? "Thủ tục minh bạch · Hỗ trợ 24/7" : "Transparent · Instant Support"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deposit Policy Notice Box (Friendly for Gen Z & Students) */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-xl bg-surface border border-border-subtle flex items-start gap-3.5">
          <HelpCircle className="w-5 h-5 text-accent-terracotta shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
            <strong className="text-text-primary font-medium block mb-1">
              {locale === "vi" ? "Chính sách đặt cọc linh hoạt cho sinh viên & du khách:" : "Flexible deposit for students & travelers:"}
            </strong>
            {locale === "vi"
              ? "Bạn có thể chọn cọc bằng CCCD gắn chip gốc + thẻ sinh viên, hoặc cọc tiền mặt/chuyển khoản linh hoạt tùy giá trị combo máy. Tiệm luôn giải thích rõ ràng trước khi ký nhận, cam kết không phát sinh bất kỳ chi phí ẩn nào!"
              : "Optionally deposit with original Citizen ID / Student ID, or flexible deposit depending on gear package value. We explain all terms transparently with zero hidden fees."}
          </div>
        </div>
      </div>
    </section>
  );
}
