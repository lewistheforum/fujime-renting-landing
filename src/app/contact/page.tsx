import type { Metadata } from "next";
import { ContactSection } from "@/modules/home/components/contact-section";

export const metadata: Metadata = {
  title: "Contact | CINEFY & FujiFilm Rental Da Nang",
  description: "Liên hệ thuê thiết bị máy ảnh, máy quay cinema và đặt lịch studio tại Đà Nẵng.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
