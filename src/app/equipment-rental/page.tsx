import type { Metadata } from "next";
import { EquipmentModule } from "@/modules/equipment";

export const metadata: Metadata = {
  title: "Equipment Rental | FujiFilm, Cinema Cameras, Lenses & Lighting",
  description:
    "Cho thuê máy ảnh Fujifilm, cinema camera Sony FX, ARRI, RED, ống kính prime/zoom, đèn Aputure tại Đà Nẵng theo ngày.",
};

export default function EquipmentPage() {
  return <EquipmentModule />;
}
