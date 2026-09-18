import type { Metadata } from "next";
import { CuratedWardrobe } from "@/modules/home/components/curated-wardrobe";
import { RentalTicketFlow } from "@/modules/home/components/rental-ticket-flow";
import { DirectConcierge } from "@/modules/home/components/direct-concierge";
import { FilmRecipeWall } from "@/modules/home/components/film-recipe-wall";

export const metadata: Metadata = {
  title: "Tủ Máy Ảnh & Thiết Bị Cho Thuê | Fujime Renting Đà Nẵng",
  description:
    "Danh mục máy ảnh Fujifilm, GFX 102MP, Canon M10, ống kính chân dung và dàn đèn studio cho thuê trọn gói tại Sơn Trà, Đà Nẵng. Giá ngày minh bạch từ 250.000đ.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-bg-ground text-text-primary pt-24 md:pt-28">
      {/* Main Curated Wardrobe & Product Grid */}
      <CuratedWardrobe />

      {/* Film Simulation Recipes Lab */}
      <FilmRecipeWall />

      {/* 3-Step Rental Ticket & Deposit Policy */}
      <RentalTicketFlow />

      {/* Direct Booking & Support Concierge */}
      <DirectConcierge />
    </main>
  );
}
