/**
 * Homepage Data Model & Verified Repository Asset Registry
 *
 * All items use verified images present in public/images/.
 * Unverified figures (such as unconfirmed discount policies) are explicitly marked with `isPlaceholder`.
 */

export interface CameraKit {
  id: string;
  name: string;
  brand: string;
  category: "travel-cafe" | "portrait" | "video" | "medium-format" | "lens";
  pricePerDayVND: number;
  formattedPrice: string;
  threeDayDiscountVND: string;
  isPricePlaceholder: boolean; // Flagged true until client confirms official pricing sheet
  image: string;
  badgeVi: string;
  badgeEn: string;
  vibeVi: string;
  vibeEn: string;
  whatsIncludedVi: string[];
  whatsIncludedEn: string[];
  specs: string[];
  filmRecipes: string[];
}

export const VERIFIED_CAMERA_KITS: CameraKit[] = [
  {
    id: "fuji-xt5",
    name: "FUJIFILM X-T5 | TRAVEL & PORTRAIT",
    brand: "Fujifilm",
    category: "travel-cafe",
    pricePerDayVND: 500000,
    formattedPrice: "500.000đ",
    threeDayDiscountVND: "425.000đ",
    isPricePlaceholder: true, // [PLACEHOLDER: Cần xác nhận giá thuê niêm yết chính thức]
    image: "/images/camera-rigaaf7.jpg",
    badgeVi: "Màu film hot nhất",
    badgeEn: "Top Film Recipe",
    vibeVi: "Chiếc máy quốc dân cho ảnh du lịch Đà Nẵng, dạo phố café và chân dung nàng thơ.",
    vibeEn: "The essential camera for travel diaries, café hopping, and dreamy film portraits.",
    whatsIncludedVi: [
      "Thân máy Fujifilm X-T5 nguyên bản",
      "02 Pin dung lượng chuẩn",
      "01 Sạc đôi nhanh",
      "01 Thẻ nhớ SD 128GB tốc độ cao",
      "01 Túi đeo thời trang chống sốc",
    ],
    whatsIncludedEn: [
      "Fujifilm X-T5 Camera Body",
      "02 Genuine high-cap batteries",
      "01 Dual fast charger",
      "01 High-speed 128GB SD card",
      "01 Protective canvas carry bag",
    ],
    specs: ["40.2MP X-Trans CMOS 5 HR", "Chống rung IBIS 7-stop", "20 chế độ Film Simulation", "Quay video 6.2K 30p"],
    filmRecipes: ["Classic Chrome", "Nostalgic Neg", "Astia Soft"],
  },
  {
    id: "fuji-xh2s",
    name: "FUJIFILM X-H2S | HYBRID CINE",
    brand: "Fujifilm",
    category: "video",
    pricePerDayVND: 650000,
    formattedPrice: "650.000đ",
    threeDayDiscountVND: "550.000đ",
    isPricePlaceholder: true, // [PLACEHOLDER: Cần xác nhận giá thuê niêm yết chính thức]
    image: "/images/remus-set-2fc87.jpg",
    badgeVi: "Quay TikTok / Reels nét căng",
    badgeEn: "Pro Cinema & Video",
    vibeVi: "Chuyên trị video chuyển động nhanh, 4K 120p mượt mà, định dạng ProRes và chống rung vững chãi.",
    vibeEn: "High-speed hybrid powerhouse for silky 4K 120p, ProRes recording, and cinematic stabilization.",
    whatsIncludedVi: [
      "Thân máy Fujifilm X-H2S",
      "Khung cage bảo vệ thao tác nhanh",
      "02 Pin dung lượng cao",
      "01 Thẻ nhớ CFexpress Type B",
      "01 Sạc đôi & túi chống sốc",
    ],
    whatsIncludedEn: [
      "Fujifilm X-H2S Camera Body",
      "Rig cage for quick mounting",
      "02 High-capacity batteries",
      "01 High-speed CFexpress Type B card",
      "01 Dual charger & shockproof bag",
    ],
    specs: ["26.1MP Stacked BSI Sensor", "Quay 6.2K Open Gate / 4K 120p", "Định dạng Apple ProRes", "F-Log2 Dynamic Range"],
    filmRecipes: ["F-Log2 Cine Grade", "Eterna Cinema"],
  },
  {
    id: "fuji-gfx100-ii",
    name: "FUJIFILM GFX 100 II | MEDIUM FORMAT",
    brand: "Fujifilm",
    category: "medium-format",
    pricePerDayVND: 1800000,
    formattedPrice: "1.800.000đ",
    threeDayDiscountVND: "1.550.000đ",
    isPricePlaceholder: true, // [PLACEHOLDER: Cần xác nhận giá thuê niêm yết chính thức]
    image: "/images/equip-feature28c4.jpg",
    badgeVi: "Đỉnh cao 102MP Studio",
    badgeEn: "102MP Medium Format",
    vibeVi: "Cảm biến Medium Format lớn gấp 1.7x Full-frame, chi tiết vải vóc và chuyển màu hoàn mỹ cho lookbook.",
    vibeEn: "Large 102MP sensor with breathtaking tonal gradation for commercial lookbooks and editorial campaigns.",
    whatsIncludedVi: [
      "Thân máy Fujifilm GFX 100 II",
      "02 Pin lớn dung lượng cao",
      "01 Sạc nhanh",
      "01 Thẻ CFexpress dung lượng lớn",
      "01 Valy chống sốc chuyên dụng",
    ],
    whatsIncludedEn: [
      "Fujifilm GFX 100 II Body",
      "02 Large capacity batteries",
      "01 Fast charger",
      "01 High-capacity CFexpress card",
      "01 Rugged flight case",
    ],
    specs: ["102MP BSI CMOS Medium Format", "Quay 8K 30p / 4K 60p ProRes", "Chống rung 8-stop", "Hỗ trợ Waveform & Vectorscope"],
    filmRecipes: ["Reala Ace", "Classic Chrome Large", "Acros B&W"],
  },
  {
    id: "sony-fx3",
    name: "SONY FX3 | FULL-FRAME CINEMA",
    brand: "Sony",
    category: "video",
    pricePerDayVND: 1300000,
    formattedPrice: "1.300.000đ",
    threeDayDiscountVND: "1.100.000đ",
    isPricePlaceholder: true, // [PLACEHOLDER: Cần xác nhận giá thuê niêm yết chính thức]
    image: "/images/rig-pictor601b.jpg",
    badgeVi: "Quay đêm siêu nhạy",
    badgeEn: "Low-Light King",
    vibeVi: "Chuẩn mực máy quay cinema full-frame nhỏ gọn, Dual Base ISO 12800 quay cảnh đêm lung linh không nhiễu hạt.",
    vibeEn: "Industry-standard compact full-frame cinema body with extraordinary low-light performance.",
    whatsIncludedVi: [
      "Thân máy Sony FX3",
      "Tay cầm XLR âm thanh",
      "Khung SmallRig",
      "02 Pin Sony NP-FZ100",
      "01 Thẻ nhớ Tough tốc độ cao & sạc đôi",
    ],
    whatsIncludedEn: [
      "Sony FX3 Camera Body",
      "Top XLR Audio Handle",
      "SmallRig protective cage",
      "02 Sony NP-FZ100 batteries",
      "01 High-speed Tough card & dual charger",
    ],
    specs: ["Full-Frame 12.1MP Exmor R", "Dual Base ISO 800 / 12800", "4K 120p 10-bit 4:2:2", "Màu da điện ảnh S-Cinetone"],
    filmRecipes: ["S-Cinetone Film", "S-Log3 Film Grade"],
  },
  {
    id: "fuji-lens-portrait",
    name: "COMBO LENS CHÂN DUNG & DU LỊCH",
    brand: "Fujifilm",
    category: "lens",
    pricePerDayVND: 250000,
    formattedPrice: "250.000đ",
    threeDayDiscountVND: "200.000đ",
    isPricePlaceholder: true, // [PLACEHOLDER: Cần xác nhận giá thuê niêm yết chính thức]
    image: "/images/rig-sea0877.jpg",
    badgeVi: "Xóa phông lung linh",
    badgeEn: "Creamy Bokeh",
    vibeVi: "Bộ lens Fujinon XF 56mm f/1.2 R WR và 16-55mm f/2.8 sắc nét từng chi tiết.",
    vibeEn: "Fujinon XF 56mm f/1.2 portrait lens and versatile 16-55mm f/2.8 zoom lens.",
    whatsIncludedVi: [
      "Ống kính quang học sạch sẽ",
      "Nắp trước & nắp sau chính hãng",
      "Loa che nắng (lens hood)",
      "Filter bảo vệ B+W",
    ],
    whatsIncludedEn: [
      "Pristine optical glass",
      "Front and rear lens caps",
      "Dedicated lens hood",
      "Protective B+W filter",
    ],
    specs: ["Khẩu độ siêu lớn f/1.2", "Độ sắc nét rìa ảnh cao", "Tráng phủ Nano-GI chống lóa", "Motor lấy nét êm ái"],
    filmRecipes: ["Chuyên trị chân dung", "Chụp ngược sáng"],
  },
  {
    id: "blazar-remus-set",
    name: "BLAZAR REMUS | ANAMORPHIC SET",
    brand: "Blazar",
    category: "lens",
    pricePerDayVND: 850000,
    formattedPrice: "850.000đ",
    threeDayDiscountVND: "720.000đ",
    isPricePlaceholder: true, // [PLACEHOLDER: Cần xác nhận giá thuê niêm yết chính thức]
    image: "/images/equip-hero6c7f.jpg",
    badgeVi: "Vệt lóa xanh điện ảnh",
    badgeEn: "Cinematic Blue Flare",
    vibeVi: "Hệ số nén 1.5x Anamorphic mang tỷ lệ khung hình màn ảnh rộng và bokeh hình elip hoài niệm.",
    vibeEn: "1.5x squeeze anamorphic set creating vintage widescreen flare and signature oval bokeh.",
    whatsIncludedVi: [
      "Bộ 3 lens Remus 45mm, 65mm, 100mm",
      "Vòng răng lấy nét follow-focus",
      "Valy chống sốc chuyên dụng",
    ],
    whatsIncludedEn: [
      "Remus 45mm, 65mm, 100mm lens trio",
      "Standard follow-focus gears",
      "Dedicated rugged travel case",
    ],
    specs: ["Độ nén 1.5x Anamorphic", "Vệt lóa xanh cổ điển", "Bao phủ cảm biến Full-frame", "Ngàm PL / EF đa năng"],
    filmRecipes: ["Điện ảnh 2.39:1", "Widescreen Oval Bokeh"],
  },
];

export interface FilmRecipe {
  id: string;
  name: string;
  camera: string;
  descriptionVi: string;
  descriptionEn: string;
  locationVi: string;
  locationEn: string;
  image: string;
  tagColor: string;
}

export const VERIFIED_FILM_RECIPES: FilmRecipe[] = [
  {
    id: "classic-chrome",
    name: "Classic Chrome Warm",
    camera: "FUJIFILM X-T5",
    descriptionVi: "Tone màu phim phóng sự cổ điển, độ bão hòa dịu nhẹ, tương phản sâu ở vùng tối. Rất hợp dạo biển Mỹ Khê và phố cổ.",
    descriptionEn: "Subtle documentary color saturation with deep shadowy contrast. Perfect for coastal walks and heritage streets.",
    locationVi: "Biển Mỹ Khê, Đà Nẵng",
    locationEn: "My Khe Beach, Da Nang",
    image: "/images/rig-sea0877.jpg",
    tagColor: "var(--accent-terracotta)",
  },
  {
    id: "astia-soft",
    name: "Astia Dreamy Skin",
    camera: "FUJIFILM X-T5 + 56mm f/1.2",
    descriptionVi: "Màu da người châu Á trong trẻo, hồng hào tự nhiên, chuyển vùng sáng mịn màng. Công thức ruột cho chụp kỷ yếu và ảnh nàng thơ.",
    descriptionEn: "Luminous, delicate skin tones with gentle highlight roll-off. The favorite recipe for graduation and soft portraits.",
    locationVi: "Phố cổ Hội An",
    locationEn: "Hoi An Ancient Town",
    image: "/images/mv-set3c9e.jpg",
    tagColor: "var(--accent-peach)",
  },
  {
    id: "nostalgic-neg",
    name: "Nostalgic Negative",
    camera: "FUJIFILM GFX 100 II",
    descriptionVi: "Tái hiện màu ảnh in tạp chí thập niên 1970 với sắc hổ phách ở vùng sáng và sắc lục lam mềm mại. Dành cho lookbook thời trang.",
    descriptionEn: "Evoking 1970s print editorial aesthetics with amber highlights and rich cyan undertones. Ideal for lookbooks.",
    locationVi: "Studio 360m² Sơn Trà",
    locationEn: "360m² Studio Sơn Trà",
    image: "/images/studio-setaaf7.jpg",
    tagColor: "var(--accent-sage)",
  },
  {
    id: "flog2-cine",
    name: "F-Log2 Cinematic",
    camera: "FUJIFILM X-H2S + Cine Rig",
    descriptionVi: "Dải tương phản động rộng 14+ stops, giữ trọn chi tiết từ vùng trời sáng rực đến bóng râm. Chuẩn mực cho các dự án MV và TVC.",
    descriptionEn: "14+ stops dynamic range holding full cloud highlight details and shadow depth. Standard for music videos and TVCs.",
    locationVi: "Hiện trường quay phim Sơn Trà",
    locationEn: "Location Set in Son Tra",
    image: "/images/equip-feature28c4.jpg",
    tagColor: "var(--accent-dusty-rose)",
  },
];

export interface StudioSpec {
  metric: string;
  unit?: string;
  labelVi: string;
  labelEn: string;
  detailVi: string;
  detailEn: string;
}

export const STUDIO_SPECS: StudioSpec[] = [
  {
    metric: "360",
    unit: "m²",
    labelVi: "Diện tích sàn",
    labelEn: "Shooting Floor",
    detailVi: "Không gian rộng rãi, thoáng đãng, trần cao thuận tiện bố trí giàn đèn",
    detailEn: "Spacious studio floor with high ceiling clearance for top rigging",
  },
  {
    metric: "495K",
    unit: "/h",
    labelVi: "Giá thuê theo giờ",
    labelEn: "Hourly Rate",
    detailVi: "Linh hoạt từ 2 giờ trở lên; ưu đãi gói nửa ngày (4h) & cả ngày (8h)",
    detailEn: "Flexible booking from 2 hours; half-day and full-day package deals",
  },
  {
    metric: "3-Phase",
    labelVi: "Điện 3 pha công suất cao",
    labelEn: "3-Phase Industrial Power",
    detailVi: "Cấp nguồn ổn định cho đèn công suất lớn như Aputure 600D / 1200D Pro",
    detailEn: "Reliable heavy-duty power for high-output fixtures (Aputure 1200D/600D)",
  },
  {
    metric: "Cyclorama",
    labelVi: "Phông vô cực Trắng & Đen",
    labelEn: "Infinity Cyclorama",
    detailVi: "Sơn bảo dưỡng định kỳ, góc lượn mềm không bóng đổ cho lookbook",
    detailEn: "Pristine white and black curve corners for shadowless lookbook shoots",
  },
];
