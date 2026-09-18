export interface EquipmentItem {
  id: string;
  name: string;
  brand: string;
  category: "camera" | "lens" | "lighting" | "gimbal" | "drone" | "audio" | "monitor";
  dailyPrice: number;
  formattedPrice: string;
  image: string;
  description: string;
  specs: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  idx: string;
  title: string;
  description: string;
  href: string;
  linkText: string;
  icon: string;
  glowColor: string;
}

export interface ClientReview {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  initials: string;
  gradient: string;
  textColor?: string;
}

export interface StudioFeature {
  title: string;
  desc: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  details: string;
}
