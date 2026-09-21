export interface TimeSlotAvailability {
  time: string; // e.g. "08:00"
  labelVi: string;
  labelEn: string;
  status: "available" | "booked" | "pending";
  noteVi: string;
  noteEn: string;
  renterShortName?: string; // e.g. "Hoàng N." hoặc "Khách đặt"
}

export const TIME_SLOT_OPTIONS: TimeSlotAvailability[] = [
  {
    time: "08:00",
    labelVi: "08:00 Sáng",
    labelEn: "08:00 AM",
    status: "available",
    noteVi: "Mở cửa tiệm · Sẵn máy",
    noteEn: "Store open · In stock",
  },
  {
    time: "09:00",
    labelVi: "09:00 Sáng",
    labelEn: "09:00 AM",
    status: "booked",
    noteVi: "Đã có khách nhận (H. Nam)",
    noteEn: "Reserved (H. Nam)",
    renterShortName: "H. Nam",
  },
  {
    time: "11:30",
    labelVi: "11:30 Trưa",
    labelEn: "11:30 AM",
    status: "available",
    noteVi: "Khung trưa vắng · Lấy nhanh",
    noteEn: "Quiet hours · Swift pickup",
  },
  {
    time: "14:00",
    labelVi: "14:00 Chiều",
    labelEn: "02:00 PM",
    status: "pending",
    noteVi: "Đang giữ slot 15p (M. Anh)",
    noteEn: "Hold slot 15m (M. Anh)",
    renterShortName: "M. Anh",
  },
  {
    time: "16:30",
    labelVi: "16:30 Chiều",
    labelEn: "04:30 PM",
    status: "available",
    noteVi: "Giờ vàng hoàng hôn biển",
    noteEn: "Golden hour shoot",
  },
  {
    time: "19:00",
    labelVi: "19:00 Tối",
    labelEn: "07:00 PM",
    status: "available",
    noteVi: "Nhận máy tối chụp đêm",
    noteEn: "Night shoot setup",
  },
];
