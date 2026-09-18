import type { Metadata } from "next";
import "./globals.css";
import "@/styles/cinefy.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QuickContact } from "@/components/quick-contact";

export const metadata: Metadata = {
  title: "Fujime Renting — Tiệm Thuê Máy Ảnh & Studio Đà Nẵng",
  description:
    "Tiệm cho thuê máy ảnh Fujifilm, thiết bị điện ảnh và studio 360m² tại Sơn Trà, Đà Nẵng. Combo máy sẵn sàng bấm máy cho chuyến đi và dự án sáng tạo.",
  icons: {
    icon: "/brand/cinefy-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-ground text-text-primary min-h-screen relative antialiased selection:bg-accent-terracotta/20 selection:text-text-primary">
        <LanguageProvider>
          <Header />
          <div className="flex-1 w-full min-h-screen">{children}</div>
          <Footer />
          <QuickContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
