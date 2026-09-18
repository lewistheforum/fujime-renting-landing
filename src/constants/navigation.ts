export interface NavItem {
  id: string;
  idx: string;
  label: string;
  labelVi: string;
  href: string;
  subItems?: { label: string; labelVi: string; href: string }[];
}

export const MAIN_NAV: NavItem[] = [
  { id: "home", idx: "01", label: "Home", labelVi: "Trang chủ", href: "/" },
  {
    id: "video-production",
    idx: "02",
    label: "Video Production",
    labelVi: "Sản xuất Video",
    href: "/video-production",
  },
  {
    id: "studio-services",
    idx: "03",
    label: "Studio Services",
    labelVi: "Dịch vụ Studio",
    href: "/studio-rental",
    subItems: [
      { label: "Studio Booking", labelVi: "Đặt phòng Studio", href: "/studio-rental" },
      { label: "Podcast & Talking-head", labelVi: "Podcast & Phỏng vấn", href: "/podcast-talking-head-video" },
    ],
  },
  {
    id: "equipment-rental",
    idx: "04",
    label: "Equipment Rentals",
    labelVi: "Thuê thiết bị máy ảnh",
    href: "/equipment-rental",
  },
  { id: "about", idx: "05", label: "About", labelVi: "Về chúng tôi", href: "/about" },
  { id: "contact", idx: "06", label: "Contact", labelVi: "Liên hệ", href: "/contact" },
];
