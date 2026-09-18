"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { MessageCircle, Check, Sparkles, ArrowRight, BatteryCharging, Shield } from "lucide-react";

interface EquipmentItemType {
  id: string;
  name: string;
  brand: string;
  category: "fuji-x" | "fuji-gfx" | "sony" | "lens";
  dailyPrice: number;
  formattedPrice: string;
  discount3Days: string;
  image: string;
  taglineVi: string;
  taglineEn: string;
  inclusionsVi: string;
  inclusionsEn: string;
  highlightBadgeVi: string;
  highlightBadgeEn: string;
  specs: string[];
}

export const CURATED_EQUIPMENT: EquipmentItemType[] = [
  {
    id: "fuji-xt5-kit",
    name: "FUJIFILM X-T5 | READY KIT",
    brand: "Fujifilm",
    category: "fuji-x",
    dailyPrice: 500000,
    formattedPrice: "500.000đ",
    discount3Days: "425.000đ",
    image: "/images/camera-rigaaf7.jpg",
    taglineVi: "Chiếc máy quốc dân cho ảnh du lịch, dạo phố và chụp chân dung với màu film mê hoặc.",
    taglineEn: "The dream camera for travel, portraits, and legendary straight-out-of-camera film colors.",
    inclusionsVi: "Body X-T5 + 2 pin chính hãng + sạc đôi + thẻ nhớ SD 128GB + túi đeo thời trang",
    inclusionsEn: "X-T5 Body + 2 Batteries + Dual Charger + 128GB SD Card + Canvas Carry Bag",
    highlightBadgeVi: "Tone màu film hot",
    highlightBadgeEn: "Top Film Recipe",
    specs: ["40.2MP Cảm biến X-Trans 5", "Chống rung IBIS 7-stop", "20 chế độ Film Simulation", "Quay video 6.2K 30p"],
  },
  {
    id: "fuji-xh2s-kit",
    name: "FUJIFILM X-H2S | CINE KIT",
    brand: "Fujifilm",
    category: "fuji-x",
    dailyPrice: 650000,
    formattedPrice: "650.000đ",
    discount3Days: "550.000đ",
    image: "/images/remus-set-2fc87.jpg",
    taglineVi: "Flagship hybrid chuyên quay video mượt mà, chống rolling shutter, quay 4K 120p và ProRes.",
    taglineEn: "Flagship cinema hybrid for silky 4K 120p, ProRes internal, and zero rolling shutter.",
    inclusionsVi: "Body X-H2S + Cage bảo vệ + 2 pin dung lượng cao + thẻ nhớ CFexpress + sạc đôi + túi chống sốc",
    inclusionsEn: "X-H2S Body + Rig Cage + 2 High-cap Batteries + CFexpress Card + Dual Charger + Bag",
    highlightBadgeVi: "Quay video nét căng",
    highlightBadgeEn: "Pro Cinema Video",
    specs: ["26.1MP Stacked Sensor", "Quay 6.2K Open Gate / 4K 120p", "Định dạng Apple ProRes", "Dynamic Range F-Log2"],
  },
  {
    id: "fuji-gfx100-ii-kit",
    name: "FUJIFILM GFX 100 II | MEDIUM FORMAT",
    brand: "Fujifilm",
    category: "fuji-gfx",
    dailyPrice: 1800000,
    formattedPrice: "1.800.000đ",
    discount3Days: "1.550.000đ",
    image: "/images/equip-feature28c4.jpg",
    taglineVi: "Đỉnh cao Medium Format 102 triệu điểm ảnh, dải sáng mênh mông cho lookbook và chiến dịch lớn.",
    taglineEn: "102MP Medium Format masterpiece with unmatched dynamic range for lookbooks & campaigns.",
    inclusionsVi: "Body GFX 100 II + 2 pin dung lượng lớn + sạc nhanh + thẻ nhớ CFexpress tốc độ cao + valy chống sốc",
    inclusionsEn: "GFX 100 II Body + 2 Large Batteries + Fast Charger + CFexpress Card + Hard Shell Case",
    highlightBadgeVi: "Độ chi tiết 102MP",
    highlightBadgeEn: "102MP Medium Format",
    specs: ["102MP BSI Medium Format", "Quay 8K 30p / 4K 60p", "Chống rung 8-stop IBIS", "Màu sắc 16-bit RAW"],
  },
  {
    id: "sony-fx3-kit",
    name: "SONY FX3 | FULLSET CINEMA",
    brand: "Sony",
    category: "sony",
    dailyPrice: 1300000,
    formattedPrice: "1.300.000đ",
    discount3Days: "1.100.000đ",
    image: "/images/rig-pictor601b.jpg",
    taglineVi: "Máy quay cinema full-frame chuẩn điện ảnh, khử nhiễu đêm cực đỉnh với Dual Base ISO 12800.",
    taglineEn: "Full-frame cinema line camera with legendary low-light performance at Dual Base ISO 12800.",
    inclusionsVi: "Body FX3 + Tay cầm XLR + Khung SmallRig + 2 pin NP-FZ100 + thẻ nhớ Tough + sạc đôi",
    inclusionsEn: "FX3 Body + XLR Top Handle + SmallRig Cage + 2 Batteries + Tough Card + Dual Charger",
    highlightBadgeVi: "Quay đêm siêu sáng",
    highlightBadgeEn: "Low-light Master",
    specs: ["Full-Frame 12.1MP BSI", "Dual Base ISO 800 / 12800", "4K 120p 10-bit 4:2:2", "S-Cinetone màu da đẹp"],
  },
  {
    id: "fuji-lens-combo",
    name: "COMBO ỐNG KÍNH FUJINON XF",
    brand: "Fujifilm",
    category: "lens",
    dailyPrice: 250000,
    formattedPrice: "250.000đ",
    discount3Days: "200.000đ",
    image: "/images/rig-sea0877.jpg",
    taglineVi: "Dàn lens chân dung và góc rộng: 16-55mm f/2.8, 56mm f/1.2 R WR, 27mm f/2.8 bánh pancake.",
    taglineEn: "Prime and zoom selection: 16-55mm f/2.8, 56mm f/1.2 portrait lens, 27mm pancake travel lens.",
    inclusionsVi: "Ống kính quang học sạch sẽ + nắp trước/sau + loa che nắng (hood) + filter bảo vệ B+W",
    inclusionsEn: "Pristine optical glass + front/rear caps + hood + protective B+W UV filter",
    highlightBadgeVi: "Xóa phông mượt",
    highlightBadgeEn: "Creamy Bokeh",
    specs: ["Độ sắc nét rìa ảnh cao", "Khẩu độ lớn f/1.2 - f/2.8", "Lớp tráng phủ Nano-GI", "Lấy nét êm ái cho video"],
  },
  {
    id: "blazar-anamorphic-set",
    name: "BLAZAR REMUS | CINE ANAMORPHIC SET",
    brand: "Blazar",
    category: "lens",
    dailyPrice: 850000,
    formattedPrice: "850.000đ",
    discount3Days: "720.000đ",
    image: "/images/equip-hero6c7f.jpg",
    taglineVi: "Bộ lens anamorphic 1.5x vệt lóa xanh điện ảnh, mang đến tỷ lệ khung hình màn bạc độc đáo.",
    taglineEn: "1.5x full-frame anamorphic set with cinematic blue flare and vintage widescreen oval bokeh.",
    inclusionsVi: "Bộ lens Remus 45mm / 65mm / 100mm + vòng bánh răng focus + hộp chống sốc chuyên dụng",
    inclusionsEn: "Remus 45mm / 65mm / 100mm set + focus gears + dedicated rugged flight case",
    highlightBadgeVi: "Hiệu ứng điện ảnh",
    highlightBadgeEn: "1.5x Anamorphic",
    specs: ["Hệ số nén 1.5x Anamorphic", "Flare xanh điện ảnh ấm", "Vòng xoay lấy nét êm mượt", "Ngàm PL / EF / E-mount"],
  },
];

interface EquipmentSectionProps {
  scenarioFilter?: string;
}

export function EquipmentSection({ scenarioFilter }: EquipmentSectionProps) {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredList = CURATED_EQUIPMENT.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <section id="equipment" className="py-20 md:py-28 bg-bg-ground relative overflow-hidden">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {t("equipment.eyebrow")}
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
              {t("equipment.title1")}{" "}
              <span className="font-brand text-accent-terracotta font-normal">
                {t("equipment.title2")}
              </span>
            </h2>
          </div>

          <p className="text-text-muted max-w-md text-sm sm:text-base font-light leading-relaxed">
            {t("equipment.desc")}
          </p>
        </div>

        {/* Tab Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-border-subtle">
          {[
            { id: "all", vi: "Tất cả máy & phụ kiện", en: "All Equipment" },
            { id: "fuji-x", vi: "Fujifilm X-Series (Hot)", en: "Fujifilm X-Series" },
            { id: "fuji-gfx", vi: "GFX Medium Format", en: "GFX Medium Format" },
            { id: "sony", vi: "Sony Cinema", en: "Sony Cinema" },
            { id: "lens", vi: "Ống kính & Anamorphic", en: "Lenses & Glass" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-accent-terracotta text-white font-semibold shadow-xs"
                  : "bg-surface border border-border-subtle text-text-muted hover:text-text-primary hover:border-text-muted"
              }`}
            >
              {locale === "vi" ? tab.vi : tab.en}
            </button>
          ))}
        </div>

        {/* Equipment Grid (Ready-to-Shoot Kit Cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredList.map((item) => (
            <article
              key={item.id}
              className="card-surface p-5 flex flex-col justify-between hover:border-accent-terracotta/50 transition-all duration-300 group hover:shadow-md"
            >
              <div>
                {/* Photo with subtle mat and tag badge */}
                <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-surface-raised mb-4 border border-border-subtle/70">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  {/* Badge top-left */}
                  <span className="absolute top-2.5 left-2.5 tag-badge-peach text-[11px] font-mono shadow-xs">
                    {locale === "vi" ? item.highlightBadgeVi : item.highlightBadgeEn}
                  </span>
                  {/* Availability badge top-right */}
                  <span className="absolute top-2.5 right-2.5 tag-badge-sage text-[11px] font-mono flex items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-sage inline-block" />
                    {locale === "vi" ? "Sẵn máy" : "Available"}
                  </span>
                </div>

                {/* Title & Brand */}
                <div className="mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted block">
                    {item.brand}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent-terracotta transition-colors">
                    {item.name}
                  </h3>
                </div>

                {/* Friendly Tagline */}
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  {locale === "vi" ? item.taglineVi : item.taglineEn}
                </p>

                {/* What's included checklist (Transparent & Friendly) */}
                <div className="bg-surface-raised/70 rounded-lg p-3 mb-4 border border-border-subtle/60 text-xs">
                  <div className="font-mono text-[10px] uppercase text-text-muted font-semibold tracking-wider mb-1.5 flex items-center gap-1">
                    <Check className="w-3 h-3 text-accent-sage" />
                    {locale === "vi" ? "COMBO BAO GỒM:" : "KIT INCLUDES:"}
                  </div>
                  <p className="text-text-primary text-[11px] leading-normal font-light">
                    {locale === "vi" ? item.inclusionsVi : item.inclusionsEn}
                  </p>
                </div>

                {/* Core Specs chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-block text-[11px] font-mono text-text-muted bg-surface px-2 py-0.5 rounded border border-border-subtle"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & Booking Trigger */}
              <div className="pt-4 border-t border-border-subtle">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-text-muted block">
                      {locale === "vi" ? "Giá thuê ngày" : "Daily Rate"}
                    </span>
                    <span className="price-editorial text-xl font-bold">
                      {item.formattedPrice}
                      <span className="text-xs text-text-muted font-normal"> / ngày</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-accent-sage block">
                      {locale === "vi" ? "Thuê từ 3 ngày" : "3+ days rate"}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {item.discount3Days} / ngày
                    </span>
                  </div>
                </div>

                {/* Instant Zalo inquiry button with pre-filled message intent */}
                <a
                  href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                    `Chào tiệm CINEFY, mình muốn hỏi thuê máy ${item.name} ạ.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary-terracotta text-xs py-2.5 justify-center"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{locale === "vi" ? "Nhắn Zalo giữ máy này" : "Reserve on Zalo"}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* "Ask for Advice" Concierge Box */}
        <div className="card-surface-raised p-6 sm:p-8 rounded-2xl border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-terracotta text-white grid place-items-center shrink-0 shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-1">
                {locale === "vi"
                  ? "Chưa chắc chắn chiếc máy nào phù hợp cho chuyến đi?"
                  : "Unsure which camera best fits your project?"}
              </h3>
              <p className="text-text-muted text-xs sm:text-sm max-w-xl font-light">
                {locale === "vi"
                  ? "Nhắn Zalo tụi mình ngày đi và mong muốn (chụp du lịch, dạo phố, quay vlog hay chụp kỷ yếu), tiệm sẽ gợi ý combo lens và body vừa tay, vừa túi tiền nhất trong 5 phút!"
                  : "Tell us your travel dates and shoot goals on Zalo. We will recommend the best body, lens, and accessories within 5 minutes."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={SITE_CONFIG.social.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-terracotta text-xs sm:text-sm py-3 px-6 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{locale === "vi" ? "Hỏi tư vấn chọn máy" : "Ask for Advice on Zalo"}</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneNumbers.rental}`}
              className="btn-secondary-subtle text-xs sm:text-sm py-3 px-4 hidden md:inline-flex"
              title="Gọi Hotline Thuê Máy"
            >
              {SITE_CONFIG.hotlineRental}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
