"use client";

import { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONFIG } from "@/constants/site-config";
import { VERIFIED_CAMERA_KITS, CameraKit } from "@/constants/homepage-data";
import { TIME_SLOT_OPTIONS, TimeSlotAvailability } from "@/constants/rental-slots";
import {
  Calendar,
  Clock,
  Truck,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Copy,
  QrCode,
  ArrowRight,
  ArrowLeft,
  Camera,
  MessageCircle,
  Phone,
  FileText,
  BadgeCheck,
  Building2,
  Wallet,
  Receipt,
  RotateCcw,
  Check,
} from "lucide-react";

function BookingPaymentContent() {
  const { locale } = useLanguage();
  const searchParams = useSearchParams();
  const initialKitId = searchParams.get("kit") || "fuji-xt5";
  const initialDays = parseInt(searchParams.get("days") || "3", 10);

  // Form State
  const [selectedKitId, setSelectedKitId] = useState<string>(initialKitId);
  const [selectedDays, setSelectedDays] = useState<number>(initialDays || 3);
  const [startDate, setStartDate] = useState<string>(() => {
    // Default to tomorrow
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [pickupTime, setPickupTime] = useState<string>("09:00");
  const [receivingMethod, setReceivingMethod] = useState<"store" | "delivery">("store");
  const [depositMethod, setDepositMethod] = useState<"id_card" | "cash_deposit">("id_card");
  const [paymentOption, setPaymentOption] = useState<"deposit_slot" | "full">("deposit_slot");
  const [paymentMethod, setPaymentMethod] = useState<"vietqr" | "store_cash">("vietqr");

  // Customer Information
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [idCardNumber, setIdCardNumber] = useState<string>("");
  const [deliveryAddress, setDeliveryAddress] = useState<string>("");
  const [orderNote, setOrderNote] = useState<string>("");

  // Submission & Confirmation State
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [orderCode, setOrderCode] = useState<string>("");
  const [copiedBankInfo, setCopiedBankInfo] = useState<boolean>(false);

  // Selected Camera Kit
  const selectedKit = useMemo<CameraKit>(() => {
    return (
      VERIFIED_CAMERA_KITS.find((k) => k.id === selectedKitId) ||
      VERIFIED_CAMERA_KITS[0]
    );
  }, [selectedKitId]);

  // Pricing Calculation
  const baseRate = selectedKit.pricePerDayVND;
  const isDiscounted = selectedDays >= 3;
  const dailyRate = isDiscounted ? Math.round(baseRate * 0.85) : baseRate;
  const rawRentalTotal = baseRate * selectedDays;
  const discountAmount = isDiscounted ? rawRentalTotal - dailyRate * selectedDays : 0;
  const rentalTotal = dailyRate * selectedDays;

  // Shipping Fee Logic (According to Image 13 Policy: >4h or daily free ship, <4h customer pays)
  const shippingFee = receivingMethod === "delivery" ? 0 : 0; // Rentals >= 1 day are free ship

  // Equipment Deposit Logic (If no ID card: 100% equipment deposit placeholder ~ 10,000,000đ or 5,000,000đ depending on kit)
  const equipmentDepositAmount =
    depositMethod === "cash_deposit"
      ? selectedKit.pricePerDayVND >= 1000000
        ? 15000000
        : 8000000
      : 0;

  // Booking Deposit to Hold Slot (Fixed 200.000đ or 50% rental)
  const slotDepositAmount = Math.min(200000, rentalTotal);
  const payableNow = paymentOption === "deposit_slot" ? slotDepositAmount : rentalTotal;

  // Return Date Calculation
  const returnDateString = useMemo(() => {
    if (!startDate) return "";
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + selectedDays);
    return end.toISOString().split("T")[0];
  }, [startDate, selectedDays]);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert(locale === "vi" ? "Vui lòng nhập Họ tên và Số điện thoại để tiệm giữ lịch nhé!" : "Please fill in your name and phone number!");
      return;
    }
    // Generate Random Authentic Order Code: FJ-XXXX
    const randomCode = `FJ-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderCode(randomCode);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyText = (text: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(text);
      setCopiedBankInfo(true);
      setTimeout(() => setCopiedBankInfo(false), 2200);
    }
  };

  // VietQR URL builder using banking standard
  const qrTransferContent = `COC ${orderCode || "FJ-BOOKING"} ${customerPhone || ""}`.trim();
  const vietQrUrl = `https://img.vietqr.io/image/MB-0779771234-compact2.png?amount=${payableNow}&addInfo=${encodeURIComponent(
    qrTransferContent
  )}&accountName=${encodeURIComponent("FUJIME RENTING")}`;

  return (
    <main className="min-h-screen bg-bg-ground text-text-primary pt-28 pb-28 md:pt-36 md:pb-36 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 5%, #B9684D 0%, transparent 55%), linear-gradient(0deg, #DCCBBC 1px, transparent 1px), linear-gradient(90deg, #DCCBBC 1px, transparent 1px)",
          backgroundSize: "100% 100%, 36px 36px, 36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="container-editorial relative z-10 max-w-6xl">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-terracotta transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{locale === "vi" ? "← Trở về danh mục Tủ máy" : "← Back to Camera Catalog"}</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-subtle text-xs font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent-sage animate-pulse" />
            <span>{locale === "vi" ? "Giữ slot máy an toàn · Không phụ phí" : "Guaranteed Reservation"}</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* STEP SUCCESS: DOCKET BILL & VIETQR PAYMENT CONFIRMATION      */}
        {/* ============================================================ */}
        {isSubmitted ? (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
            {/* Success Banner */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border-2 border-emerald-300 shadow-sm mx-auto">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary">
                {locale === "vi" ? "Đã Khởi Tạo Lệnh Đặt Máy!" : "Booking Request Created!"}
              </h1>
              <p className="text-sm sm:text-base text-text-muted font-light max-w-xl mx-auto">
                {locale === "vi"
                  ? "Cảm ơn bạn! Tiệm đã lưu phiếu giữ máy. Bạn chuyển khoản cọc giữ slot hoặc liên hệ Zalo tiệm để hoàn tất thủ tục nhé."
                  : "Thank you! Your camera reservation slip is generated. Please complete the slot deposit below."}
              </p>
            </div>

            {/* Master Ticket Receipt with Perforated Edge */}
            <article className="rounded-3xl bg-[#FAF6F0] border-2 border-[#DCCBBC] shadow-xl relative overflow-hidden">
              {/* Washi Tape Header Accent */}
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#EFE6D8]/95 border-x border-[#DCCBBC] rotate-[-0.8deg] z-30 shadow-xs pointer-events-none"
                aria-hidden="true"
              />

              {/* Red Left Margin Line */}
              <div className="absolute top-0 bottom-0 left-6 sm:left-10 w-[2px] bg-red-300/35 pointer-events-none z-10" />

              <div className="paper-lined-grid p-6 sm:p-10 pl-10 sm:pl-16">
                {/* Header Docket Title */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-dashed border-[#DCCBBC]">
                  <div>
                    <span className="font-mono text-xs text-accent-terracotta uppercase font-bold tracking-wider block mb-1">
                      BIÊN NHẬN ĐẶT MÁY TẠM TÍNH · FUJIME RENTING
                    </span>
                    <h2 className="font-display font-bold text-2xl text-text-primary">
                      Mã Đơn: <span className="text-accent-terracotta font-mono">{orderCode}</span>
                    </h2>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 font-mono text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                      <span>Chờ thanh toán cọc giữ slot</span>
                    </span>
                  </div>
                </div>

                {/* 2-Column Summary: Gear & Customer Data */}
                <div className="grid md:grid-cols-2 gap-6 mb-8 text-xs font-mono">
                  {/* Left Column: Gear Breakdown */}
                  <div className="p-4 rounded-2xl bg-surface border border-border-subtle space-y-2.5">
                    <div className="flex items-center gap-3 pb-2 border-b border-border-subtle">
                      <div className="relative w-14 h-12 rounded-lg overflow-hidden bg-[#EFE6D8] shrink-0 border border-border-subtle">
                        <Image src={selectedKit.image} alt={selectedKit.name} fill className="object-cover" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-text-primary text-sm line-clamp-1">
                          {selectedKit.name}
                        </div>
                        <div className="text-accent-terracotta text-[11px]">
                          {selectedKit.category} · {selectedKit.brand}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between py-1 border-b border-dashed border-border-subtle/70">
                      <span className="text-text-muted">Thời gian thuê:</span>
                      <span className="font-bold text-text-primary">{selectedDays} ngày</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-dashed border-border-subtle/70">
                      <span className="text-text-muted">Ngày bắt đầu:</span>
                      <span className="text-text-primary">{startDate} ({pickupTime})</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-dashed border-border-subtle/70">
                      <span className="text-text-muted">Hạn trả máy:</span>
                      <span className="text-text-primary">{returnDateString} (18:00)</span>
                    </div>

                    <div className="flex justify-between py-1">
                      <span className="text-text-muted">Hình thức nhận:</span>
                      <span className="text-text-primary">
                        {receivingMethod === "store" ? "Nhận tại tiệm Sơn Trà" : "Ship tận nơi nội thành"}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Customer & Deposit Term */}
                  <div className="p-4 rounded-2xl bg-surface border border-border-subtle space-y-2.5">
                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-1">
                      THÔNG TIN KHÁCH HÀNG & THỦ TỤC:
                    </div>

                    <div className="flex justify-between py-1 border-b border-dashed border-border-subtle/70">
                      <span className="text-text-muted">Người nhận máy:</span>
                      <span className="font-bold text-text-primary">{customerName}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-dashed border-border-subtle/70">
                      <span className="text-text-muted">Số điện thoại:</span>
                      <span className="font-bold text-accent-terracotta">{customerPhone}</span>
                    </div>

                    {idCardNumber && (
                      <div className="flex justify-between py-1 border-b border-dashed border-border-subtle/70">
                        <span className="text-text-muted">Số CCCD đối soát:</span>
                        <span className="text-text-primary">{idCardNumber}</span>
                      </div>
                    )}

                    <div className="flex justify-between py-1 border-b border-dashed border-border-subtle/70">
                      <span className="text-text-muted">Phương án cọc:</span>
                      <span className="text-text-primary font-medium">
                        {depositMethod === "id_card" ? "CCCD gắn chip gốc (Miễn cọc tiền)" : "Cọc 100% giá trị thiết bị"}
                      </span>
                    </div>

                    {receivingMethod === "delivery" && deliveryAddress && (
                      <div className="pt-1 text-[11px] text-text-muted">
                        <span className="font-bold text-text-primary">Địa chỉ giao: </span>
                        {deliveryAddress}
                      </div>
                    )}
                  </div>
                </div>

                {/* Perforated Divider */}
                <div className="relative my-8 border-b-2 border-dashed border-[#DCCBBC]">
                  <div className="absolute -left-12 -top-4 w-8 h-8 rounded-full bg-bg-ground border-r-2 border-[#DCCBBC]" />
                  <div className="absolute -right-12 -top-4 w-8 h-8 rounded-full bg-bg-ground border-l-2 border-[#DCCBBC]" />
                </div>

                {/* Payment Breakdown & VietQR Section */}
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* Left: QR Code Box */}
                  <div className="md:col-span-5 bg-white p-5 rounded-2xl border-2 border-[#DCCBBC] text-center shadow-xs">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-terracotta/10 text-accent-terracotta font-mono text-[11px] font-bold mb-3">
                      <QrCode className="w-3.5 h-3.5" />
                      <span>VIETQR CHUYỂN KHOẢN NHANH</span>
                    </div>

                    <div className="relative aspect-square w-full max-w-[220px] mx-auto rounded-xl overflow-hidden border border-border-subtle bg-white shadow-inner mb-3">
                      <Image
                        src={vietQrUrl}
                        alt="Mã VietQR thanh toán cọc máy Fujime Renting"
                        fill
                        className="object-contain p-1"
                        unoptimized
                      />
                    </div>

                    <p className="text-[11px] text-text-muted font-mono leading-relaxed">
                      Quét bằng App Ngân Hàng bất kỳ.<br />
                      Tự động điền số tiền & nội dung chuyển khoản.
                    </p>
                  </div>

                  {/* Right: Manual Transfer Details & Amount */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="p-4 rounded-2xl bg-surface border border-border-subtle space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-text-muted">Tổng tiền thuê {selectedDays} ngày:</span>
                        <span className="font-mono text-text-primary">{rentalTotal.toLocaleString("vi-VN")}đ</span>
                      </div>

                      {discountAmount > 0 && (
                        <div className="flex justify-between items-center text-xs text-accent-terracotta">
                          <span>Ưu đãi thuê từ 3 ngày (-15%):</span>
                          <span className="font-mono font-bold">-{discountAmount.toLocaleString("vi-VN")}đ</span>
                        </div>
                      )}

                      {equipmentDepositAmount > 0 && (
                        <div className="flex justify-between items-center text-xs text-amber-800">
                          <span>Tiền cọc thiết bị (Hoàn lại 100% khi trả máy):</span>
                          <span className="font-mono font-bold">+{equipmentDepositAmount.toLocaleString("vi-VN")}đ</span>
                        </div>
                      )}

                      <div className="pt-2 border-t border-dashed border-border-subtle flex justify-between items-baseline">
                        <div>
                          <span className="font-display font-bold text-sm text-text-primary block">
                            Số Tiền Cần Chuyển Khoản Ngay:
                          </span>
                          <span className="text-[11px] font-mono text-text-muted">
                            {paymentOption === "deposit_slot" ? "(Cọc giữ slot máy trước 1 ngày)" : "(Thanh toán trọn gói)"}
                          </span>
                        </div>
                        <span className="font-mono font-black text-2xl text-accent-terracotta">
                          {payableNow.toLocaleString("vi-VN")}đ
                        </span>
                      </div>
                    </div>

                    {/* Bank Account Credentials */}
                    <div className="p-4 rounded-2xl bg-surface-raised/50 border border-border-subtle space-y-2 text-xs font-mono">
                      <div className="flex justify-between items-center">
                        <span className="text-text-muted">Ngân hàng:</span>
                        <span className="font-bold text-text-primary">MB Bank (Quân Đội)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-muted">Số tài khoản:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-accent-terracotta text-sm">0779771234</span>
                          <button
                            type="button"
                            onClick={() => handleCopyText("0779771234")}
                            className="p-1 hover:bg-surface rounded text-text-muted hover:text-accent-terracotta"
                            title="Sao chép số tài khoản"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-muted">Chủ tài khoản:</span>
                        <span className="font-bold text-text-primary uppercase">NGUYEN PHUONG NAM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-muted">Nội dung CK:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-accent-terracotta bg-accent-terracotta/10 px-2 py-0.5 rounded">
                            {qrTransferContent}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopyText(qrTransferContent)}
                            className="p-1 hover:bg-surface rounded text-text-muted hover:text-accent-terracotta"
                            title="Sao chép nội dung"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {copiedBankInfo && (
                      <div className="text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-center animate-in fade-in">
                        ✓ Đã sao chép vào bộ nhớ tạm!
                      </div>
                    )}

                    {/* Quick Support Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <a
                        href={`${SITE_CONFIG.social.zalo}?text=${encodeURIComponent(
                          `Chào tiệm Fujime, mình vừa đặt giữ máy ${selectedKit.name} với mã đơn ${orderCode} (Số ĐT: ${customerPhone}). Mình gửi bill xác nhận cọc slot nhé!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-terracotta text-xs py-3 px-6 flex-1 justify-center shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Gửi Bill Xác Nhận Qua Zalo</span>
                      </a>

                      <Link
                        href={`/tra-cuu`}
                        className="btn-secondary-subtle text-xs py-3 px-5 justify-center"
                      >
                        <FileText className="w-4 h-4 text-accent-terracotta" />
                        <span>Kiểm Tra Trên Trang Tra Cứu</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ) : (
          /* ============================================================ */
          /* BOOKING & CHECKOUT CONFIGURATOR FORM                         */
          /* ============================================================ */
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* -------------------------------------------------------- */}
            {/* LEFT 7 COLS: CONFIGURATION OPTIONS & USER INFO           */}
            {/* -------------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header Title (Không dùng pill tag AI, phong cách tự nhiên, thoáng đãng) */}
              <div className="space-y-1.5">
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary leading-tight">
                  {locale === "vi" ? "Phiếu Đăng Ký Thuê Máy" : "Camera Rental Order Sheet"}
                </h1>
                <p className="text-sm text-text-muted font-light">
                  {locale === "vi"
                    ? "Xác nhận combo, lịch nhận máy và giữ slot trước 1 ngày để tiệm chuẩn bị chu đáo nhất cho bạn."
                    : "Confirm your camera kit, rental schedule, and secure your slot 1 day in advance."}
                </p>
              </div>

              <form onSubmit={handleSubmitOrder} className="space-y-5">
                {/* 1. COMBO MÁY ĐÃ CHỌN (BỐ CỤC CHUẨN, KHÔNG BỊ TRÀN HAY ÉP MÉO) */}
                <div className="card-surface p-4 sm:p-5 rounded-2xl border border-border-subtle shadow-xs">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Left: Ảnh + Thông tin combo với width an toàn */}
                    <div className="flex items-center gap-3.5 flex-1 min-w-[260px]">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#EFE6D8] shrink-0 border border-border-subtle shadow-2xs">
                        <Image src={selectedKit.image} alt={selectedKit.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] uppercase font-bold text-accent-terracotta tracking-wider whitespace-nowrap">
                            COMBO BẠN ĐANG CHỌN
                          </span>
                          <span className="text-[10px] font-mono text-accent-sage bg-accent-sage/15 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                            ✓ {selectedKit.badgeVi}
                          </span>
                        </div>
                        <h2 className="font-display font-bold text-base sm:text-lg text-text-primary truncate">
                          {selectedKit.name}
                        </h2>
                        <div className="font-mono text-xs font-bold text-accent-terracotta">
                          {selectedKit.formattedPrice} <span className="text-[11px] text-text-muted font-normal">/ ngày</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Dropdown chọn đổi máy khác với max-width rõ ràng và tên rút gọn */}
                    <div className="shrink-0 w-full sm:w-auto flex justify-end">
                      <div className="w-full sm:w-auto relative">
                        <select
                          value={selectedKitId}
                          onChange={(e) => setSelectedKitId(e.target.value)}
                          className="w-full sm:w-[210px] text-xs font-mono py-2 px-3 rounded-xl border border-border-subtle bg-surface text-text-primary hover:border-accent-terracotta/60 transition-colors cursor-pointer outline-none focus:ring-2 focus:ring-accent-terracotta/20"
                          aria-label="Chọn đổi dòng máy khác"
                        >
                          {VERIFIED_CAMERA_KITS.map((k) => (
                            <option key={k.id} value={k.id}>
                              Đổi: {k.name.split("|")[0].trim()} ({k.formattedPrice})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. THỜI GIAN & KHUNG GIỜ NHẬN MÁY (SMART TIME SLOTS VỚI LIVE STATUS) */}
                <div className="card-surface p-5 sm:p-6 rounded-2xl border border-border-subtle shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase font-bold text-text-muted tracking-wider flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent-terracotta" />
                      <span>Thời Gian & Lịch Thuê Máy</span>
                    </span>
                    <span className="text-xs font-mono text-accent-terracotta font-medium">
                      {isDiscounted ? "✓ Đã áp dụng -15% ưu đãi" : "Thuê từ 3 ngày giảm -15%"}
                    </span>
                  </div>

                  {/* Day Pills Selector */}
                  <div>
                    <label className="text-xs font-mono text-text-muted block mb-2">
                      Số ngày thuê:
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 5].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDays(d)}
                          className={`py-2.5 px-3 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
                            selectedDays === d
                              ? "bg-accent-terracotta text-white border-accent-terracotta shadow-2xs"
                              : "bg-surface border-border-subtle text-text-primary hover:bg-surface-raised"
                          }`}
                        >
                          {d} Ngày {d >= 3 && <span className="block text-[9px] font-normal opacity-90">-15%</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Start Date */}
                  <div>
                    <label className="text-xs font-mono text-text-muted block mb-1.5">
                      Ngày bắt đầu nhận máy:
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                      className="input-editorial text-xs font-mono"
                    />
                  </div>

                  {/* Visual Smart Time Slot Picker with Live Availability */}
                  <div className="space-y-2.5 pt-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <label className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent-terracotta" />
                        <span>Khung giờ nhận máy (Trạng thái thời gian thực):</span>
                      </label>

                      {/* Status Legends */}
                      <div className="flex items-center gap-3 text-[10px] font-mono text-text-muted">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-accent-sage animate-pulse" />
                          <span>Sẵn máy</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                          <span>Đang giữ chỗ</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-stone-300" />
                          <span>Đã kín</span>
                        </span>
                      </div>
                    </div>

                    {/* 3x2 Grid of Tactile Time Slots */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {TIME_SLOT_OPTIONS.map((slot) => {
                        const isSelected = pickupTime === slot.time;
                        const isAvailable = slot.status === "available";
                        const isPending = slot.status === "pending";
                        const isBooked = slot.status === "booked";

                        return (
                          <button
                            key={slot.time}
                            type="button"
                            disabled={isBooked}
                            onClick={() => {
                              if (!isBooked) {
                                setPickupTime(slot.time);
                              }
                            }}
                            className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                              isBooked
                                ? "bg-surface-raised/40 border-border-subtle/40 opacity-50 cursor-not-allowed"
                                : isSelected
                                ? "bg-surface border-accent-terracotta ring-1 ring-accent-terracotta/30 shadow-2xs cursor-pointer"
                                : "bg-surface border-border-subtle hover:border-accent-terracotta/40 cursor-pointer"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className={`font-mono text-xs font-bold ${
                                isSelected ? "text-accent-terracotta" : isBooked ? "text-text-muted line-through" : "text-text-primary"
                              }`}>
                                {slot.labelVi}
                              </span>

                              {/* Status Chip */}
                              {isAvailable && (
                                <span className="inline-flex items-center gap-1 text-[9.5px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-sage" />
                                  <span>Trống</span>
                                </span>
                              )}
                              {isPending && (
                                <span className="inline-flex items-center gap-1 text-[9.5px] font-mono text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                  <span>Giữ 15p</span>
                                </span>
                              )}
                              {isBooked && (
                                <span className="text-[9.5px] font-mono text-stone-500 bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded font-medium">
                                  Đã kín
                                </span>
                              )}
                            </div>

                            <p className="text-[10px] text-text-muted font-light leading-tight">
                              {slot.noteVi}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Calculated Return Schedule Note */}
                  <div className="p-3 rounded-xl bg-surface border border-border-subtle text-xs font-mono text-text-muted flex items-center justify-between">
                    <span>Hạn trả máy dự kiến:</span>
                    <span className="font-bold text-text-primary">
                      18:00 · {returnDateString}
                    </span>
                  </div>
                </div>

                {/* 3. THÔNG TIN NGƯỜI THUÊ & HÌNH THỨC NHẬN */}
                <div className="card-surface p-5 sm:p-6 rounded-2xl border border-border-subtle shadow-xs space-y-4">
                  <span className="font-mono text-xs uppercase font-bold text-text-muted tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent-terracotta" />
                    <span>Thông Tin Người Nhận & Phương Thức Cọc</span>
                  </span>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-text-muted block mb-1.5">
                        Họ và tên người nhận *:
                      </label>
                      <input
                        type="text"
                        placeholder="Ví dụ: Nguyễn Hoàng Nam"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                        className="input-editorial text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-text-muted block mb-1.5">
                        Số điện thoại / Zalo nhận máy *:
                      </label>
                      <input
                        type="tel"
                        placeholder="Ví dụ: 0905 123 456"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        required
                        className="input-editorial text-xs font-mono"
                      />
                    </div>
                  </div>

                  {/* Hình thức nhận máy */}
                  <div>
                    <label className="text-xs font-mono text-text-muted block mb-2">
                      Hình thức nhận máy:
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setReceivingMethod("store")}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          receivingMethod === "store"
                            ? "bg-surface border-accent-terracotta ring-1 ring-accent-terracotta/30 shadow-2xs"
                            : "bg-surface hover:bg-surface-raised/40 border-border-subtle"
                        }`}
                      >
                        <div className="font-display font-bold text-xs text-text-primary mb-1 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-accent-terracotta" />
                          <span>Nhận trực tiếp tại tiệm</span>
                        </div>
                        <p className="text-[11px] text-text-muted font-light">
                          179B Nguyễn Công Trứ, Sơn Trà. Hướng dẫn test máy 5 phút.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setReceivingMethod("delivery")}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          receivingMethod === "delivery"
                            ? "bg-surface border-accent-terracotta ring-1 ring-accent-terracotta/30 shadow-2xs"
                            : "bg-surface hover:bg-surface-raised/40 border-border-subtle"
                        }`}
                      >
                        <div className="font-display font-bold text-xs text-text-primary mb-1 flex items-center gap-1.5">
                          <Truck className="w-3.5 h-3.5 text-accent-terracotta" />
                          <span>Giao tận nơi (Free ship)</span>
                        </div>
                        <p className="text-[11px] text-text-muted font-light">
                          Hỗ trợ Free ship nội thành Đà Nẵng khi thuê theo ngày.
                        </p>
                      </button>
                    </div>
                  </div>

                  {receivingMethod === "delivery" && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-text-muted block">
                        Địa chỉ nhận máy tận nơi (Khách sạn / Homestay tại Đà Nẵng):
                      </label>
                      <input
                        type="text"
                        placeholder="Ví dụ: Khách sạn Sala Danang, 36 Lâm Hoành, Sơn Trà..."
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        required={receivingMethod === "delivery"}
                        className="input-editorial text-xs font-mono"
                      />
                    </div>
                  )}

                  {/* Phương án cọc */}
                  <div className="pt-2 border-t border-dashed border-border-subtle">
                    <label className="text-xs font-mono text-text-muted block mb-2">
                      Phương án bảo đảm cọc khi nhận máy:
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setDepositMethod("id_card")}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          depositMethod === "id_card"
                            ? "bg-surface border-accent-terracotta ring-1 ring-accent-terracotta/30 shadow-2xs"
                            : "bg-surface hover:bg-surface-raised/40 border-border-subtle"
                        }`}
                      >
                        <div className="font-display font-bold text-xs text-text-primary mb-1 flex items-center gap-1.5">
                          <BadgeCheck className="w-3.5 h-3.5 text-accent-terracotta" />
                          <span>Giữ CCCD gắn chip (Miễn cọc tiền)</span>
                        </div>
                        <p className="text-[11px] text-text-muted font-light">
                          Niêm phong cẩn thận, hoàn lại trong 5 phút khi trả máy.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDepositMethod("cash_deposit")}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          depositMethod === "cash_deposit"
                            ? "bg-surface border-accent-terracotta ring-1 ring-accent-terracotta/30 shadow-2xs"
                            : "bg-surface hover:bg-surface-raised/40 border-border-subtle"
                        }`}
                      >
                        <div className="font-display font-bold text-xs text-text-primary mb-1 flex items-center gap-1.5">
                          <Wallet className="w-3.5 h-3.5 text-accent-terracotta" />
                          <span>Cọc 100% giá trị thiết bị</span>
                        </div>
                        <p className="text-[11px] text-text-muted font-light">
                          Dành cho khách không giữ lại giấy tờ, hoàn tiền 100% khi nhận lại máy.
                        </p>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 4. PHƯƠNG THỨC THANH TOÁN */}
                <div className="card-surface p-5 sm:p-6 rounded-2xl border border-border-subtle shadow-xs space-y-4">
                  <span className="font-mono text-xs uppercase font-bold text-text-muted tracking-wider flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-accent-terracotta" />
                    <span>Hình Thức Thanh Toán Trực Tuyến</span>
                  </span>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentOption("deposit_slot")}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        paymentOption === "deposit_slot"
                          ? "bg-surface border-accent-terracotta ring-1 ring-accent-terracotta/30 shadow-2xs"
                          : "bg-surface hover:bg-surface-raised/40 border-border-subtle"
                      }`}
                    >
                      <div className="font-display font-bold text-xs text-text-primary mb-1 flex items-center justify-between">
                        <span>Cọc giữ slot trước 1 ngày</span>
                        <span className="font-mono text-accent-terracotta font-bold">
                          {slotDepositAmount.toLocaleString("vi-VN")}đ
                        </span>
                      </div>
                      <p className="text-[11px] text-text-muted font-light leading-relaxed">
                        Khuyên dùng: Cọc 200k để tiệm khóa slot máy cho bạn. Phần còn lại thanh toán khi nhận máy.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentOption("full")}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        paymentOption === "full"
                          ? "bg-surface border-accent-terracotta ring-1 ring-accent-terracotta/30 shadow-2xs"
                          : "bg-surface hover:bg-surface-raised/40 border-border-subtle"
                      }`}
                    >
                      <div className="font-display font-bold text-xs text-text-primary mb-1 flex items-center justify-between">
                        <span>Thanh toán 100% trọn gói</span>
                        <span className="font-mono text-accent-terracotta font-bold">
                          {rentalTotal.toLocaleString("vi-VN")}đ
                        </span>
                      </div>
                      <p className="text-[11px] text-text-muted font-light leading-relaxed">
                        Thanh toán toàn bộ qua VietQR. Lúc nhận máy chỉ cần đối soát giấy tờ là xong.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Submit Primary Action Button */}
                <button
                  type="submit"
                  className="w-full btn-primary-terracotta text-sm py-4 justify-center shadow-md cursor-pointer font-bold tracking-wide"
                >
                  <span>Xác Nhận Giữ Máy & Xem Mã VietQR ({payableNow.toLocaleString("vi-VN")}đ)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* -------------------------------------------------------- */}
            {/* RIGHT 5 COLS: STICKY ORDER RECEIPT SUMMARY               */}
            {/* -------------------------------------------------------- */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              {/* Paper Docket Style Card */}
              <article className="rounded-3xl bg-[#FAF6F0] border-2 border-[#DCCBBC] shadow-lg relative overflow-hidden">
                {/* Washi Tape Accent */}
                <div
                  className="absolute -top-3.5 right-12 w-36 h-7 bg-[#EFE6D8]/95 border-x border-[#DCCBBC] rotate-1 z-20 shadow-xs pointer-events-none"
                  aria-hidden="true"
                />

                {/* Left Margin Line */}
                <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-red-300/35 pointer-events-none z-10" />

                <div className="paper-lined-grid p-6 pl-10">
                  {/* Selected Kit Showcase */}
                  <div className="flex items-center gap-3.5 pb-4 mb-4 border-b-2 border-dashed border-[#DCCBBC]">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#EFE6D8] shrink-0 border border-border-subtle shadow-2xs">
                      <Image src={selectedKit.image} alt={selectedKit.name} fill className="object-cover" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent-terracotta font-bold block">
                        COMBO ĐANG CHỌN
                      </span>
                      <h2 className="font-display font-bold text-sm text-text-primary">
                        {selectedKit.name}
                      </h2>
                      <div className="font-mono text-xs text-text-muted mt-0.5">
                        {selectedKit.formattedPrice} / ngày
                      </div>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-2.5 text-xs font-mono mb-6">
                    <div className="flex justify-between items-center text-text-muted">
                      <span>Đơn giá ngày:</span>
                      <span className="text-text-primary">{selectedKit.formattedPrice}</span>
                    </div>

                    <div className="flex justify-between items-center text-text-muted">
                      <span>Thời gian thuê:</span>
                      <span className="text-text-primary">{selectedDays} ngày</span>
                    </div>

                    {isDiscounted && (
                      <div className="flex justify-between items-center text-accent-terracotta">
                        <span>Ưu đãi thuê từ 3 ngày (-15%):</span>
                        <span className="font-bold">-{discountAmount.toLocaleString("vi-VN")}đ</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-text-muted">
                      <span>Phí giao nhận:</span>
                      <span className="text-emerald-700 font-bold">
                        {receivingMethod === "delivery" ? "FREE SHIP (>4h)" : "0đ (Tại tiệm)"}
                      </span>
                    </div>

                    {depositMethod === "cash_deposit" && (
                      <div className="flex justify-between items-center text-amber-800">
                        <span>Tiền cọc máy (Hoàn 100% khi trả):</span>
                        <span className="font-bold">+{equipmentDepositAmount.toLocaleString("vi-VN")}đ</span>
                      </div>
                    )}

                    <div className="pt-3 border-t-2 border-dashed border-[#DCCBBC] flex justify-between items-baseline">
                      <span className="font-display font-bold text-sm text-text-primary">
                        Tổng tiền thuê {selectedDays} ngày:
                      </span>
                      <span className="font-mono font-bold text-lg text-text-primary">
                        {rentalTotal.toLocaleString("vi-VN")}đ
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-accent-terracotta/10 border border-accent-terracotta/25 flex justify-between items-baseline">
                      <div>
                        <span className="font-display font-bold text-xs text-accent-terracotta block">
                          Cọc Giữ Slot Máy Cần Chuyển:
                        </span>
                        <span className="text-[10px] text-text-muted">
                          {paymentOption === "deposit_slot" ? "Cọc trước để khóa lịch" : "Thanh toán 100% trọn gói"}
                        </span>
                      </div>
                      <span className="font-mono font-black text-xl text-accent-terracotta">
                        {payableNow.toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                  </div>

                  {/* Inclusions Checklist */}
                  <div className="space-y-1.5 pt-4 border-t border-dashed border-[#DCCBBC] text-xs">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-bold block mb-2">
                      TRỌN BỘ PHỤ KIỆN KÈM THEO:
                    </span>
                    {(locale === "vi" ? selectedKit.whatsIncludedVi : selectedKit.whatsIncludedEn).map(
                      (item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-text-primary font-light text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </article>

              {/* Store Guarantees Reminder */}
              <div className="p-4 rounded-2xl bg-surface border border-border-subtle text-xs text-text-muted space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-text-primary font-bold font-mono">
                  <ShieldCheck className="w-4 h-4 text-accent-sage" />
                  <span>Chính sách tiệm cam kết:</span>
                </div>
                <p className="font-light leading-relaxed">
                  • Hoàn cọc giấy tờ tuỳ thân chỉ trong <strong>5 phút</strong> khi trả máy tại tiệm.<br />
                  • Hỗ trợ video đồng kiểm tình trạng máy trước khi giao đến khách.<br />
                  • Đổi máy tương đương ngay tức thì nếu có bất kỳ lỗi kỹ thuật nào từ nhà sản xuất.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function BookingPaymentPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-bg-ground text-text-primary pt-36 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-text-muted">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-terracotta animate-ping" />
            <span>Đang tải phiếu đặt máy...</span>
          </div>
        </main>
      }
    >
      <BookingPaymentContent />
    </Suspense>
  );
}
