"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { EQUIPMENT_CATALOGUE } from "@/constants/equipment-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, Filter, Phone, Check } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site-config";

export function EquipmentModule() {
  const { locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Gear", labelVi: "Tất cả" },
    { id: "camera", label: "Cameras", labelVi: "Máy quay / Máy ảnh" },
    { id: "lens", label: "Lenses", labelVi: "Ống kính" },
    { id: "lighting", label: "Lighting", labelVi: "Đèn & Ánh sáng" },
    { id: "gimbal", label: "Gimbals", labelVi: "Chống rung" },
    { id: "drone", label: "Drones", labelVi: "Flycam" },
  ];

  const filteredEquipment = useMemo(() => {
    return EQUIPMENT_CATALOGUE.filter((item) => {
      const matchCat = activeCategory === "all" || item.category === activeCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-bg text-ink pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Breadcrumb & Hero */}
        <nav className="flex items-center gap-2 text-xs font-mono text-muted mb-4 uppercase">
          <Link href="/" className="hover:text-orange transition-colors">
            {locale === "vi" ? "Trang chủ" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-orange font-semibold">
            {locale === "vi" ? "Bảng giá thuê thiết bị" : "Equipment Rental"}
          </span>
        </nav>

        <h1
          className="font-display font-semibold text-ink mb-6"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)", lineHeight: 1.1 }}
        >
          {locale === "vi" ? (
            <>
              Thuê máy ảnh &amp; Thiết bị quay phim tại{" "}
              <span className="serif-i text-orange italic font-serif">Đà Nẵng theo ngày.</span>
            </>
          ) : (
            <>
              Camera &amp; Film Equipment Rental in{" "}
              <span className="serif-i text-orange italic font-serif">Da Nang, by the day.</span>
            </>
          )}
        </h1>

        <p className="text-muted max-w-3xl text-base sm:text-lg font-light leading-relaxed mb-10">
          {locale === "vi"
            ? "Cung cấp đầy đủ thiết bị máy ảnh Fujifilm, cinema camera Sony FX, ARRI, RED, Blackmagic, ống kính prime/zoom, đèn Aputure, gimbal DJI và phụ kiện. Báo giá công khai, thiết bị luôn được kiểm tra và vệ sinh sẵn sàng bấm máy."
            : "Rent a full inventory of film equipment in Da Nang: Fujifilm, Sony, RED, Blackmagic and ARRI cinema cameras, lenses, lighting, gimbals and drones, by the day. 5.0 Google rating with transparent daily rates."}
        </p>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 border-b border-line mb-10">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-colors ${
                  activeCategory === cat.id
                    ? "bg-orange text-bg font-bold"
                    : "bg-surface border border-line text-muted hover:text-ink hover:border-orange/50"
                }`}
              >
                {locale === "vi" ? cat.labelVi : cat.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={locale === "vi" ? "Tìm kiếm thiết bị..." : "Search gear..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-surface border border-line text-sm text-ink focus:outline-none focus:border-orange transition-colors"
            />
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              className="border border-line rounded-3xl overflow-hidden bg-surface hover:border-orange/60 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-line font-mono text-[10px] text-orange tracking-widest uppercase">
                    {item.brand}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-lg text-ink group-hover:text-orange transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-muted text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Specs */}
                  <ul className="space-y-1.5 mb-4 text-xs text-muted2 font-mono">
                    {item.specs.slice(0, 3).map((spec, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-orange">·</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-0 border-t border-line/40 flex items-center justify-between gap-4 mt-auto">
                <div>
                  <div className="font-display font-bold text-xl text-orange">
                    {item.formattedPrice}
                  </div>
                  <div className="font-mono text-[10px] text-muted2 uppercase">
                    {locale === "vi" ? "Mỗi ngày" : "Per day"}
                  </div>
                </div>

                <a
                  href={`https://zalo.me/${SITE_CONFIG.phoneNumbers.rental}?text=Xin%20chào,%20tôi%20muốn%20hỏi%20thuê%20${encodeURIComponent(
                    item.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-orange hover:bg-orange-bright text-bg font-semibold text-xs tracking-wide transition-colors"
                >
                  {locale === "vi" ? "Thuê ngay" : "Book now"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredEquipment.length === 0 && (
          <div className="text-center py-24 text-muted">
            <p className="text-lg">No equipment found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 text-orange underline text-sm font-mono"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-surface border border-line flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-semibold text-xl text-ink mb-1">
              {locale === "vi" ? "Cần báo giá trọn gói ekip hoặc dự án dài ngày?" : "Need a custom multi-day production bundle?"}
            </h3>
            <p className="text-muted text-sm">
              {locale === "vi"
                ? "Liên hệ hotline hoặc Zalo để nhận chiết khấu tốt nhất cho dự án dài hạn."
                : "Contact our gear specialists for custom pricing and equipment packages."}
            </p>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phoneNumbers.rental}`}
            className="px-6 py-3 rounded-full bg-orange hover:bg-orange-bright text-bg font-semibold text-sm tracking-wide transition-colors whitespace-nowrap inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>{SITE_CONFIG.hotlineRental}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
