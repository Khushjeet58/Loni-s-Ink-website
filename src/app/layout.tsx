import type { Metadata } from "next";
import "./globals.css";
import { CursorAura } from "@/components/CursorAura";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://lonis-ink.vercel.app"),
  title: "Loni's Ink | Premium Tattoo Studio",
  description:
    "A cinematic booking-first website for Loni's Ink, a private tattoo studio in Jodhpur with custom tattoos, piercing, PMU, aftercare, and appointment requests.",
  keywords: [
    "premium tattoo studio",
    "tattoo booking",
    "blackwork tattoo",
    "fine line tattoo",
    "custom tattoo artist",
    "tattoo aftercare",
  ],
  openGraph: {
    title: "Loni's Ink",
    description: "Custom tattoo work, piercing, PMU, and a polished booking experience with Loni.",
    images: ["/gallery/studio-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <CursorAura />
        <Navigation />
        {children}
        <Footer />
        <div className="grain" />
      </body>
    </html>
  );
}
