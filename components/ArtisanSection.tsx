'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Quote, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { ARTISANS } from '@/data/artisans';
import { cn } from '@/lib/utils';

export default function ArtisanSection() {
  const [selectedArtisanIndex, setSelectedArtisanIndex] = useState(0);
  const activeArtisan = ARTISANS[selectedArtisanIndex];

  return (
    <section id="artisans" className="py-24 sm:py-32 bg-charcoal-900 relative overflow-hidden border-t border-antiqueGold-500/15">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-antiqueGold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-terracotta-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-antiqueGold-500/20">
          <div>
            <div className="flex items-center gap-2.5 text-antiqueGold-400 text-xs uppercase tracking-widest font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Living Heritage Keepers</span>
              <span className="text-ivory-400/40">•</span>
              <span className="font-marathi-accent text-sm">कारागीर</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-100 uppercase leading-none">
              MADE BY HAND. <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-antiqueGold-300 to-terracotta-300">
                Carried through generations.
              </span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-2">
            <span className="font-marathi-accent text-antiqueGold-400/90 text-sm sm:text-base font-normal">
              पिढ्यान्पिढ्या जपलेली ज्ञानपरंपरा
            </span>
            <p className="text-xs uppercase tracking-widest text-ivory-400/70">
              Masters of the Living Craft Lineage
            </p>
          </div>
        </div>

        {/* Master Artisan Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Portrait & Visual Composition */}
          <div className="lg:col-span-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArtisan.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden border border-antiqueGold-500/25 shadow-2xl bg-charcoal-950"
              >
                <Image
                  src={activeArtisan.image}
                  alt={activeArtisan.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

                {/* Corner Badges */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-charcoal-950/90 backdrop-blur-md border border-antiqueGold-500/30 text-antiqueGold-300 text-[10px] uppercase tracking-widest font-semibold">
                    {activeArtisan.generation}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 bg-charcoal-950/85 backdrop-blur-md border border-antiqueGold-500/30">
                  <span className="text-[10px] uppercase tracking-widest text-antiqueGold-400 font-medium block mb-0.5">
                    {activeArtisan.craft}
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-display font-bold text-ivory-100">
                      {activeArtisan.name}
                    </h3>
                    <span className="font-marathi-accent text-sm text-antiqueGold-400">
                      {activeArtisan.marathiName}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-ivory-300/80 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-antiqueGold-400" />
                    <span>{activeArtisan.location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-antiqueGold-500/20 -z-10 hidden sm:block pointer-events-none" />
          </div>

          {/* Right Column: Artisan Storytelling & Living Memory */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-ivory-200/90 font-serif leading-relaxed font-light">
                Every tradition carries the hands, knowledge and stories of the people who keep it alive. In an era of rapid mechanization, these custodians maintain the sacred pact between material, ritual, and human touch.
              </p>
            </div>

            {/* Deep Quote Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArtisan.id + '-quote'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 bg-charcoal-850 border-l-2 border-antiqueGold-400 space-y-4 shadow-xl"
              >
                <Quote className="w-8 h-8 text-antiqueGold-400/40 rotate-180" />
                <p className="font-serif italic text-lg sm:text-xl text-ivory-100 leading-relaxed">
                  &ldquo;{activeArtisan.quote}&rdquo;
                </p>
                <div className="pt-2 border-t border-antiqueGold-500/15 flex items-center justify-between">
                  <span className="text-xs text-antiqueGold-400 font-semibold tracking-wider uppercase">
                    {activeArtisan.name} • {activeArtisan.experienceYears} Years of Practice
                  </span>
                  <span className="text-[11px] text-ivory-400/70 font-mono">
                    {activeArtisan.district}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Artisan Selector Tabs */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-antiqueGold-400 font-semibold block">
                Select Featured Custodians:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {ARTISANS.map((artisan, idx) => (
                  <button
                    key={artisan.id}
                    onClick={() => setSelectedArtisanIndex(idx)}
                    className={cn(
                      'p-2.5 text-left border transition-all duration-300',
                      selectedArtisanIndex === idx
                        ? 'bg-antiqueGold-500/20 border-antiqueGold-400 text-ivory-100'
                        : 'bg-charcoal-850/60 border-antiqueGold-500/15 text-ivory-400 hover:border-antiqueGold-500/40 hover:text-ivory-200'
                    )}
                  >
                    <p className="text-[11px] font-medium leading-tight line-clamp-1">{artisan.name}</p>
                    <span className="text-[9px] uppercase tracking-wider text-antiqueGold-400/80 mt-0.5 block">{artisan.district}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/heritage"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-terracotta-500 hover:bg-terracotta-600 text-ivory-50 text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg"
              >
                <span>DISCOVER THE ARTISANS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/districts"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal-850 hover:bg-charcoal-800 text-ivory-200 hover:text-ivory-50 text-xs font-semibold uppercase tracking-widest border border-antiqueGold-500/25 transition-colors"
              >
                <span>Browse by Region</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
