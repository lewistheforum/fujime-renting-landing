"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Ticket, Search, PackageCheck, Smile, HelpCircle, ShieldCheck, Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";

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

  const customerReviews = [
    {
      id: "rv-1",
      name: "Ngọc Mai & Hoàng Long",
      tagVi: "Du lịch Hà Nội · 4 ngày",
      tagEn: "Travelers from Hanoi",
      gear: "Fujifilm X-T5 · Classic Chrome",
      commentVi: "Tụi mình vào Đà Nẵng chơi 4 ngày, thuê chiếc X-T5 của tiệm dạo biển Mỹ Khê và phố cổ Hội An. Anh chủ sạc đầy 2 pin chụp cả ngày không hết, màu Classic Chrome chụp ra tone film cực thơ!",
      commentEn: "Rented an X-T5 for our 4-day trip to Da Nang and Hoi An. The pre-loaded Classic Chrome film recipe gave us breathtaking nostalgic photos without editing!",
      avatarBg: "bg-accent-terracotta/15 text-accent-terracotta",
      stars: 5,
    },
    {
      id: "rv-2",
      name: "Minh Quân",
      tagVi: "Sinh viên ĐH Kiến Trúc ĐN",
      tagEn: "Architecture Student",
      gear: "Canon EOS M10 · Portrait Kit",
      commentVi: "Nhóm mình thuê máy chụp kỷ yếu tốt nghiệp. Tiệm hỗ trợ thủ tục cọc thẻ sinh viên siêu nhanh gọn, nhiệt tình chỉ cách bấm máy. Ống xóa phông đẹp mê ly bạn bè ai cũng khen.",
      commentEn: "We rented for our graduation photo album. Super friendly student deposit policy, pristine gear condition, and dreamy bokeh portraits!",
      avatarBg: "bg-accent-sage/20 text-accent-sage",
      stars: 5,
    },
    {
      id: "rv-3",
      name: "Thảo Vy (Vee.studio)",
      tagVi: "Local Brand Owner",
      tagEn: "Fashion Brand Owner",
      gear: "Studio 360m² + GFX 100 II",
      commentVi: "Studio tại Sơn Trà không gian trần cao thoáng đãng, phông vô cực trắng tinh tươm. Mình chụp Lookbook mùa mới bằng con GFX 102MP chi tiết vải vóc lên cực kỳ sắc nét!",
      commentEn: "The 360m² cyclorama studio was pristine and spacious. Rented the 102MP GFX body for our fashion campaign — detail and skin tones were extraordinary!",
      avatarBg: "bg-accent-peach/25 text-accent-terracotta",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-ground relative border-t border-border-subtle" id="rental-flow">
      <div className="container-editorial">
        {/* ============================================================ */}
        {/* BLOCK 1: THỦ TỤC THUÊ MÁY ĐƠN GIẢN                           */}
        {/* ============================================================ */}
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

        {/* The 3-Station Ticket Strip */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
        <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-surface border border-border-subtle flex items-start gap-4 shadow-xs mb-20 md:mb-28">
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

        {/* ============================================================ */}
        {/* BLOCK 2: REVIEW ĐÁNH GIÁ TỪ KHÁCH HÀNG (CÙNG LAYOUT STATION) */}
        {/* ============================================================ */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <MessageSquareQuote className="w-4 h-4 text-accent-terracotta" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
              {locale === "vi" ? "TRẢI NGHIỆM THỰC TẾ TỪ KHÁCH THUÊ" : "REAL FEEDBACK FROM RENTERS"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
            {locale === "vi" ? "Cảm nhận những bức hình" : "Stories & memorable frames"}{" "}
            <span className="font-display italic font-normal text-accent-terracotta block sm:inline">
              {locale === "vi" ? "thơ cùng Fujime." : "captured with us."}
            </span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-3 font-light leading-relaxed">
            {locale === "vi"
              ? "Hơn 500+ chuyến đi, kỷ yếu và dự án sáng tạo đã bấm máy trọn vẹn tại Đà Nẵng & Hội An."
              : "Over 500+ travel diaries, graduations, and commercial shoots captured across Da Nang & Hoi An."}
          </p>
        </div>

        {/* 3 Customer Review Cards (Y hệt format station 3 cột) */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {customerReviews.map((rv, idx) => (
            <div
              key={rv.id}
              className="card-surface p-6 sm:p-7 rounded-2xl border border-border-subtle flex flex-col justify-between relative shadow-xs hover:border-accent-terracotta/40 transition-all group"
            >
              <div>
                {/* Header: Avatar + Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl grid place-items-center font-display font-bold text-sm ${rv.avatarBg}`}>
                      {rv.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base text-text-primary">
                        {rv.name}
                      </h3>
                      <span className="text-[11px] font-mono text-text-muted block">
                        {locale === "vi" ? rv.tagVi : rv.tagEn}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xl font-bold text-accent-terracotta/20">
                    0{idx + 1}
                  </span>
                </div>

                {/* Rating 5 stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-500">
                  {[...Array(rv.stars)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="font-mono text-xs text-text-primary font-semibold ml-1">5.0</span>
                </div>

                {/* Feedback Quote */}
                <p className="text-text-muted text-xs sm:text-sm font-light leading-relaxed italic mb-4">
                  &ldquo;{locale === "vi" ? rv.commentVi : rv.commentEn}&rdquo;
                </p>
              </div>

              {/* Footer Gear Used Tag */}
              <div className="mt-4 pt-4 border-t border-border-subtle/50 text-[11px] font-mono text-accent-terracotta flex items-center justify-between">
                <span className="truncate pr-2">✦ {rv.gear}</span>
                <span className="text-accent-sage shrink-0 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-accent-sage" />
                  {locale === "vi" ? "Đã thuê" : "Verified"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Score Pill Footer */}
        <div className="max-w-xl mx-auto p-4 rounded-full bg-surface border border-border-subtle flex items-center justify-center gap-3 shadow-2xs text-xs font-mono text-text-muted text-center">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="font-semibold text-text-primary">5.0 / 5.0</span>
          <span>· Đánh giá từ 178+ lượt khách thuê tại Đà Nẵng</span>
        </div>
      </div>
    </section>
  );
}
