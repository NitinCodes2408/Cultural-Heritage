'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-950 pt-20 lg:pt-0">
      {/* Background Image Layer with Cinematic Composition */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-cinematic.jpg"
            alt="Cinematic panorama of Maharashtra cultural heritage, historic forts, Gateway of India, Pandharpur Wari, Lavani performers, and traditional master artisans"
            fill
            priority
            quality={90}
            className="object-cover object-center lg:object-[center_30%] filter brightness-90 contrast-[1.05]"
            sizes="100vw"
          />
        </motion.div>

        {/* Multi-layered Cinematic Overlays for Editorial Contrast & Legibility */}
        {/* Top subtle fade for navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/40 to-charcoal-950/90" />
        {/* Left radial vignette for typography emphasis */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/60 to-transparent lg:max-w-[70%]" />
        {/* Deep bottom fade merging seamlessly into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-transparent" />
        {/* Subtle noise/grain texture */}
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-16 lg:py-24 flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-3xl">
          {/* Subtle Marathi Subtitle & Heritage Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-charcoal-900/80 backdrop-blur-md border border-antiqueGold-500/30 text-antiqueGold-300 text-[11px] sm:text-xs uppercase tracking-widest font-medium">
              <Sparkles className="w-3.5 h-3.5 text-antiqueGold-400" />
              <span>Living Cultural Archive</span>
            </div>
            <div className="h-[1px] w-8 sm:w-12 bg-antiqueGold-500/40" />
            <span className="font-marathi-accent text-antiqueGold-400 font-medium text-base sm:text-lg tracking-wider">
              वारसा
            </span>
          </motion.div>

          {/* Primary Editorial Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="space-y-1 sm:space-y-2 mb-6 sm:mb-8"
          >
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-ivory-100 uppercase leading-[1.08]">
              VARSA
            </h1>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-ivory-200 leading-[1.15] italic">
              The Hidden Soul <br />
              <span className="not-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-antiqueGold-300 to-terracotta-300">
                of Maharashtra.
              </span>
            </h2>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-ivory-200/90 text-sm sm:text-base md:text-lg max-w-xl font-sans font-light leading-relaxed mb-8 sm:mb-10 text-balance"
          >
            Discover the arts, crafts, traditions and cultural stories that live across Maharashtra&apos;s districts. An archival journey into indigenous knowledge and living craftsmanship.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            <Link
              href="/heritage"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-ivory-50 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-terracotta-500/25 active:translate-y-0.5"
            >
              <span>EXPLORE HERITAGE</span>
              <ArrowRight className="w-4 h-4 text-ivory-100 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/districts"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-charcoal-900/80 hover:bg-charcoal-800 text-ivory-200 hover:text-ivory-50 text-xs font-semibold uppercase tracking-widest border border-antiqueGold-500/30 hover:border-antiqueGold-400 backdrop-blur-sm transition-all duration-300"
            >
              <Compass className="w-4 h-4 text-antiqueGold-400 group-hover:rotate-45 transition-transform" />
              <span>EXPLORE DISTRICTS</span>
            </Link>
          </motion.div>
        </div>

        {/* Floating Quick Heritage Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 lg:mt-20 pt-6 border-t border-antiqueGold-500/20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl"
        >
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase tracking-widest text-antiqueGold-400/80 font-medium">Districts</span>
            <p className="text-sm sm:text-base font-serif font-medium text-ivory-100">36 Cultural Regions</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase tracking-widest text-antiqueGold-400/80 font-medium">Craft Heritage</span>
            <p className="text-sm sm:text-base font-serif font-medium text-ivory-100">140+ Traditions</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase tracking-widest text-antiqueGold-400/80 font-medium">Guilds & Masters</span>
            <p className="text-sm sm:text-base font-serif font-medium text-ivory-100">8,500+ Artisans</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase tracking-widest text-antiqueGold-400/80 font-medium">Oral Lineage</span>
            <p className="text-sm sm:text-base font-serif font-medium text-ivory-100">2,000+ Years</p>
          </div>
        </motion.div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll down to introduction" className="p-2 text-ivory-300">
          <ChevronDown className="w-5 h-5 animate-bounce text-antiqueGold-400" />
        </a>
      </div>
    </section>
  );
}
