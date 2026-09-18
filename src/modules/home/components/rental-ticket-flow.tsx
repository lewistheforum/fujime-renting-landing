"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Ticket, Search, PackageCheck, Smile, HelpCircle, ShieldCheck } from "lucide-react";

export function RentalTicketFlow() {
  const { locale } = useLanguage();

  const stations = [
    {
      step: "01",
      icon: Search,
      titleVi: "Chọn máy & Ngày thuê",
      titleEn: "Pick Camera & Dates",
      descVi: "Duyệt tủ máy trên website hoặc nhắn Zalo để tiệm tư vấn combo vừa tay. Kiểm tra lịch trống ngay tức thì.",
      descEn: "Browse kits or message us on Zalo for tailored advice. We verify dates and hold your gear quickly.",
    },
    {
      step: "02",
      icon: PackageCheck,
      titleVi: "Nhận máy sẵn sàng",
      titleEn: "Receive Ready Kit",
      descVi: "Nhận tại tiệm (Sơn Trà) hoặc giao tận nơi trong 30 phút. Máy đã sạc 100% 2 pin, thẻ nhớ và cài sẵn màu film.",
      descEn: "Pickup at Sơn Trà or get 30-min local delivery. 100% charged with 2 batteries, card & recipes loaded.",
    },
    {
      step: "03",
      icon: Smile,
      titleVi: "Sáng tạo & Hoàn cọc nhanh",
      titleEn: "Shoot & Fast Refund",
      descVi: "Thỏa sức ghi lại chuyến đi. Khi trả máy, tiệm kiểm tra nhanh và hoàn trả cọc chỉ trong vòng 5 phút.",
      descEn: "Enjoy your visual journey. When returned, we inspect swiftly and refund your deposit within 5 minutes.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-ground relative" id="rental-flow">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Ticket className="w-4 h-4 text-accent-terracotta" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
              {locale === "vi" ? "THỦ TỤC THUÊ MÁY ĐƠN GIẢN" : "SIMPLE 3-STEP FLOW"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
            {locale === "vi" ? "Thuê máy ảnh tại tiệm" : "How camera rental works"}{" "}
            <span className="font-display italic font-normal text-accent-terracotta block sm:inline">
              {locale === "vi" ? "nhanh & nhẹ tênh." : "swift & effortless."}
            </span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-3 font-light leading-relaxed">
            {locale === "vi"
              ? "Không thủ tục rườm rà, hỗ trợ tận tình cả với các bạn lần đầu tiên cầm máy ảnh số."
              : "No overwhelming bureaucracy — friendly, transparent, and welcoming for first-time renters."}
          </p>
        </div>

        {/* The 3-Station Ticket Strip (Original Horizontal / Vertical Connected Flow) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stations.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="card-surface p-6 sm:p-7 rounded-2xl border border-border-subtle flex flex-col justify-between relative shadow-xs hover:border-accent-terracotta/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-surface-raised border border-border-subtle grid place-items-center text-accent-terracotta">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-accent-terracotta/20">
                      STATION {st.step}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    {locale === "vi" ? st.titleVi : st.titleEn}
                  </h3>

                  <p className="text-text-muted text-xs sm:text-sm font-light leading-relaxed">
                    {locale === "vi" ? st.descVi : st.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle/50 text-[11px] font-mono text-accent-sage flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-sage" />
                  <span>{locale === "vi" ? "Minh bạch · Hỗ trợ trọn vẹn" : "Transparent · Dedicated Support"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deposit Policy Notice Box (Friendly for Gen Z & Students) */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-surface border border-border-subtle flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-accent-peach/20 grid place-items-center text-accent-terracotta shrink-0 mt-0.5">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
            <div className="flex items-center gap-2 mb-1">
              <strong className="text-text-primary font-medium text-sm">
                {locale === "vi"
                  ? "Chính sách đặt cọc linh hoạt cho sinh viên & du khách:"
                  : "Flexible deposit policy for students & travelers:"}
              </strong>
              <span className="text-[10px] font-mono text-text-muted italic">[Chính sách tham khảo tiệm]</span>
            </div>
            <p>
              {locale === "vi"
                ? "Bạn có thể chọn cọc bằng CCCD gắn chip gốc + thẻ sinh viên, hoặc cọc tiền mặt linh hoạt tùy theo giá trị thiết bị. Tiệm luôn giải thích cặn kẽ và lập biên bản bàn giao đầy đủ, cam kết không phát sinh bất kỳ chi phí ẩn nào!"
                : "Choose between original Citizen ID / Student ID, or flexible deposit depending on kit value. We provide clear handover agreements with zero hidden costs!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
