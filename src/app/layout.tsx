import type { Metadata } from "next";
import "./globals.css";
import "@/styles/cinefy.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QuickContact } from "@/components/quick-contact";
import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: "CINEFY & FUJIFILM RENTAL — Video, Studio, Podcast & Camera Rental Da Nang",
  description:
    "A full-service production house and rental base on Vietnam's central coast — film & commercial production, a 360m² studio, and cinema camera & equipment rental, under one roof.",
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
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-ink min-h-screen relative antialiased selection:bg-orange/30 selection:text-white">
        <CustomCursor />
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
