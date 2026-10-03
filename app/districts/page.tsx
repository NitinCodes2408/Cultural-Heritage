'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Sparkles, ArrowRight, Layers, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DISTRICTS, REGIONS } from '@/data/districts';
import { cn } from '@/lib/utils';

export default function DistrictsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDistricts = DISTRICTS.filter((d) => {
    const matchesRegion = selectedRegion === 'all' || d.region === selectedRegion;
    const matchesQuery =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.marathiName.includes(searchQuery) ||
      d.featuredCrafts.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesQuery;
  });

  return (
    <main className="min-h-screen bg-charcoal-900 text-ivory-100">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 sm:pt-40 pb-16 bg-charcoal-950 border-b border-antiqueGold-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-antiqueGold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-antiqueGold-400 hover:text-ivory-100 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Overview</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-antiqueGold-400 text-xs uppercase tracking-widest font-medium mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Geographic Directory</span>
                <span className="text-ivory-400/40">•</span>
                <span className="font-marathi-accent text-sm">३६ जिल्हे</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory-100 uppercase">
                DISTRICTS OF <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-antiqueGold-300 to-terracotta-300">
                  Maharashtra.
                </span>
              </h1>
            </div>

            <p className="max-w-md text-xs sm:text-sm text-ivory-300/80 font-sans font-light leading-relaxed">
              Explore Maharashtra&apos;s 36 cultural districts organized across Konkan, Western Maharashtra, Marathwada, Vidarbha, and Khandesh.
            </p>
          </div>
        </div>
      </section>

      {/* Controls & Directory */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 mb-8 border-b border-antiqueGold-500/15">
          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={cn(
                  'px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 shrink-0 border',
                  selectedRegion === region.id
                    ? 'bg-antiqueGold-500/20 text-antiqueGold-300 border-antiqueGold-400'
                    : 'bg-charcoal-850 text-ivory-400 border-antiqueGold-500/15 hover:border-antiqueGold-500/40 hover:text-ivory-200'
                )}
              >
                <span>{region.name}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-antiqueGold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search district or craft..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-charcoal-850 border border-antiqueGold-500/20 text-xs text-ivory-100 placeholder:text-ivory-400/50 focus:outline-none focus:border-antiqueGold-400"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDistricts.map((district, idx) => (
              <motion.div
                key={district.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="bg-charcoal-850 border border-antiqueGold-500/20 hover:border-antiqueGold-400/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={district.image}
                    alt={district.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-semibold bg-charcoal-950/90 text-antiqueGold-300 border border-antiqueGold-500/30">
                      {district.region}
                    </span>
                    <span className="text-xs font-marathi-accent text-antiqueGold-300/90">
                      {district.marathiName}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-ivory-100 group-hover:text-antiqueGold-300 transition-colors">
                        {district.name}
                      </h3>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-antiqueGold-400 font-mono">
                      {district.heritageCount} Crafts
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-ivory-300/80 line-clamp-3 leading-relaxed font-light">
                    {district.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-antiqueGold-500/15">
                    <span className="text-[10px] uppercase tracking-widest text-antiqueGold-400 font-semibold block">
                      Documented Crafts
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {district.featuredCrafts.map((craft) => (
                        <span
                          key={craft}
                          className="px-2 py-0.5 bg-charcoal-900 border border-antiqueGold-500/15 text-[11px] text-ivory-300"
                        >
                          {craft}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/district/${district.slug}`}
                      className="w-full py-2.5 bg-charcoal-900 hover:bg-terracotta-600 text-ivory-200 hover:text-ivory-50 text-[11px] font-semibold uppercase tracking-widest border border-antiqueGold-500/25 flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Explore {district.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
