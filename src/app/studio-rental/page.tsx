"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { Check, Calendar, Phone } from "lucide-react";

export default function StudioRentalPage() {
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
            {locale === "vi" ? "Thuê Studio" : "Studio Rental"}
          </span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1
              className="font-display font-semibold text-ink mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
            >
              360m² Studio &amp;{" "}
              <span className="serif-i text-orange italic font-serif">
                Cyclorama Infinity Wall.
              </span>
            </h1>
            <p className="text-muted text-base sm:text-lg font-light leading-relaxed mb-8">
              {locale === "vi"
                ? "Không gian studio 360m² chuyên nghiệp bậc nhất tại Sơn Trà, Đà Nẵng. Được thiết kế tối ưu cho các buổi quay TVC, MV ca nhạc, chụp lookbook, livestream và quay podcast phỏng vấn."
                : "Da Nang's premier 360m² production studio. Seamless infinity cyclorama, full blackout control, high-ceiling rigging, and dedicated client lounge. Available 24/7."}
            </p>

            <div className="grid grid-cols-2 gap-6 p-6 rounded-2xl bg-surface border border-line mb-8">
              <div>
                <div className="font-display font-bold text-3xl text-orange">360m²</div>
                <div className="font-mono text-xs text-muted2 uppercase mt-1">
                  {locale === "vi" ? "Diện tích sàn" : "Shooting Floor"}
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-3xl text-orange">
                  495.000đ<span className="text-sm font-normal text-muted">/h</span>
                </div>
                <div className="font-mono text-xs text-muted2 uppercase mt-1">
                  {locale === "vi" ? "Giá thuê theo giờ" : "Hourly rate"}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://zalo.me/${SITE_CONFIG.phoneNumbers.studio}?text=Xin%20chào,%20tôi%20muốn%20đặt%20lịch%20studio`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-orange hover:bg-orange-bright text-bg font-semibold text-sm tracking-wide transition-colors"
              >
                {locale === "vi" ? "Đặt lịch Studio ngay" : "Book the Studio"}
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
            <video
              className="w-full h-full object-cover"
              src="/video/studio_cyc7989.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/studio-setaaf7.jpg"
            />
          </div>
        </div>

        {/* Features List */}
        <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-line">
          <div className="p-6 rounded-2xl bg-surface border border-line">
            <h3 className="font-display font-semibold text-xl text-orange mb-3">Cyclorama</h3>
            <p className="text-muted text-sm leading-relaxed">
              Seamless infinity wall with curved corners for both white and black background setups.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-surface border border-line">
            <h3 className="font-display font-semibold text-xl text-orange mb-3">Grip &amp; Power</h3>
            <p className="text-muted text-sm leading-relaxed">
              Equipped with C-stands, sandbags, boom arms, apple boxes, and 3-phase high-voltage power.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-surface border border-line">
            <h3 className="font-display font-semibold text-xl text-orange mb-3">Amenities</h3>
            <p className="text-muted text-sm leading-relaxed">
              Professional makeup station, fitting area, air conditioning, client lounge, and high-speed Wi-Fi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
