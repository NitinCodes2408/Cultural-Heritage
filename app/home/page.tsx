import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import DistrictExplorer from "@/components/DistrictExplorer";
import HeritageShowcase from "@/components/HeritageShowcase";
import ArtisanSection from "@/components/ArtisanSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VARSA | वारसा — The Cultural Heritage & Living Traditions of Maharashtra",
  description: "A luxury cultural archive documenting the hidden arts, craft traditions, master artisans, and living heritage across Maharashtra's 36 districts.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-charcoal-900 text-ivory-100 selection:bg-terracotta-500 selection:text-ivory-50">
      {/* 1. Transparent Floating & Blur Navbar */}
      <Navbar />

      {/* 2. Hero Section (90-100vh) */}
      <Hero />

      {/* 3. Introduction Section (Asymmetric Editorial Layout) */}
      <IntroSection />

      {/* 4. Maharashtra Discovery Section (36 Districts Interactive Map) */}
      <DistrictExplorer />

      {/* 5. Hidden Heritage Section (Editorial Asymmetric Grid) */}
      <HeritageShowcase />

      {/* 6. Artisan / Living Heritage Section (Emotional Master Stories) */}
      <ArtisanSection />

      {/* 7. Final Archival CTA */}
      <FinalCTA />

      {/* 8. Minimal Luxury Museum Footer */}
      <Footer />
    </main>
  );
}
