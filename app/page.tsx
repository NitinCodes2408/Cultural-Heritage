import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import MaharashtraMap from '@/components/MaharashtraMap';
import DistrictIndex from '@/components/DistrictIndex';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "VARSA — Explore Maharashtra's Hidden Heritage",
  description: "Discover the hidden arts, crafts, traditions and cultural heritage of Maharashtra's 36 districts.",
  openGraph: {
    title: "VARSA — Explore Maharashtra's Hidden Heritage",
    description: "Discover the hidden arts, crafts, traditions and cultural heritage of Maharashtra's 36 districts.",
    type: 'website',
  },
};

export default function RootPage() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-ivory-100 selection:bg-terracotta-500 selection:text-ivory-50 relative overflow-x-hidden">
      {/* 1. Atmospheric Maharashtra Heritage Background Image */}
      <div className="fixed inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/images/maharashtra-fort-bg.jpg"
          alt="Historic Maharashtra fort and basalt stone heritage landscape"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[center_25%] lg:object-[center_18%] opacity-15 filter saturate-[0.75] contrast-[1.05] brightness-90"
        />

        {/* 2. Layered Translucent Overlays for Warmth and Museum Contrast */}
        {/* Deep charcoal background tint */}
        <div className="absolute inset-0 bg-charcoal-900/80" />

        {/* Warm sandstone subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/75 to-charcoal-950/95" />

        {/* Ambient warm brass and terracotta aura */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-brass-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-48 right-12 w-[550px] h-[550px] bg-terracotta-500/5 rounded-full blur-[140px]" />

        {/* Tactile grain overlay */}
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10 pt-28 sm:pt-36">
        {/* Editorial Introduction Section */}
        <section id="map" className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-8 sm:mb-12">
          <div className="max-w-3xl">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal-800/80 backdrop-blur-sm border border-brass-500/30 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brass-400" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-heritage text-brass-300 font-semibold">
                DISTRICT EXPLORER
              </span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-ivory-100 uppercase leading-[0.95] mb-6">
              EXPLORE<br />
              <span className="font-semibold text-ivory-50 tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-ivory-50 to-sandstone-200">
                MAHARASHTRA
              </span>
            </h1>

            {/* Supporting Text */}
            <div className="space-y-1 text-base sm:text-lg md:text-xl text-ivory-200/90 font-light leading-relaxed">
              <p className="font-serif">36 districts.</p>
              <p className="font-serif">Countless stories.</p>
              <p className="font-serif text-brass-300 font-medium">
                A heritage waiting to be discovered.
              </p>
            </div>

            {/* Mission Statement */}
            <p className="mt-5 text-xs sm:text-sm text-sandstone-300/80 font-sans leading-relaxed max-w-xl">
              Explore Maharashtra through its districts and discover the cultural heritage hidden within them.
            </p>
          </div>
        </section>

        {/* Hero Visual: Maharashtra Interactive Map */}
        <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <MaharashtraMap />
        </section>

        {/* District Quick Access Index */}
        <DistrictIndex />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
