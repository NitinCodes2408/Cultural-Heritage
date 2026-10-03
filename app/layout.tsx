import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VARSA — Explore Maharashtra's Hidden Heritage",
  description: "Discover the hidden arts, crafts, traditions and cultural heritage of Maharashtra's 36 districts.",
  keywords: [
    "Maharashtra cultural heritage",
    "Maharashtra districts map",
    "Warli art",
    "Paithani weaving",
    "Dhokra casting Gadchiroli",
    "Tambat Ali Pune copper",
    "Sawantwadi Ganjifa",
    "Kolhapuri chappal",
    "Maharashtra artisans",
    "Pinguli Chitrakathi",
    "Himroo weaving"
  ],
  authors: [{ name: "VARSA Cultural Archive Foundation" }],
  openGraph: {
    title: "VARSA — Explore Maharashtra's Hidden Heritage",
    description: "Discover the hidden arts, crafts, traditions and cultural heritage of Maharashtra's 36 districts.",
    type: "website",
    locale: "en_IN",
    siteName: "VARSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "VARSA — Explore Maharashtra's Hidden Heritage",
    description: "Discover Maharashtra's living crafts, ancestral techniques, and master artisans across 36 districts.",
  },
};

export const viewport: Viewport = {
  themeColor: "#11100E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-charcoal-900 text-ivory-100 min-h-screen selection:bg-terracotta-500 selection:text-ivory-50 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
