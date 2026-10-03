'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, ArrowRight, ArrowLeft, Feather, CheckCircle, Eye, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HERITAGE_ITEMS } from '@/data/heritage';
import { HERITAGE_CATEGORIES } from '@/data/categories';
import { HeritageItem } from '@/data/types';
import { cn } from '@/lib/utils';

export default function HeritagePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItemModal, setActiveItemModal] = useState<HeritageItem | null>(null);

  const filteredItems = HERITAGE_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.categorySlug === selectedCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.districtName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.marathiTitle.includes(searchQuery) ||
      item.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <main className="min-h-screen bg-charcoal-900 text-ivory-100">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 sm:pt-40 pb-16 bg-charcoal-950 border-b border-antiqueGold-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-terracotta-500/5 rounded-full blur-3xl pointer-events-none" />

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
                <Feather className="w-3.5 h-3.5" />
                <span>Living Crafts Repository</span>
                <span className="text-ivory-400/40">•</span>
                <span className="font-marathi-accent text-sm">वारसा संग्रह</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory-100 uppercase">
                HERITAGE & <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-antiqueGold-300 to-terracotta-300">
                  Master Crafts.
                </span>
              </h1>
            </div>

            <p className="max-w-md text-xs sm:text-sm text-ivory-300/80 font-sans font-light leading-relaxed">
              Explore the documented arts, ancestral techniques, natural pigments, and living material traditions across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Directory & Explorer */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 mb-8 border-b border-antiqueGold-500/15">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={cn(
                'px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 shrink-0 border',
                selectedCategory === 'all'
                  ? 'bg-antiqueGold-500/20 text-antiqueGold-300 border-antiqueGold-400'
                  : 'bg-charcoal-850 text-ivory-400 border-antiqueGold-500/15 hover:border-antiqueGold-500/40 hover:text-ivory-200'
              )}
            >
              <span>All Disciplines</span>
            </button>
            {HERITAGE_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={cn(
                  'px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 shrink-0 border',
                  selectedCategory === cat.slug
                    ? 'bg-antiqueGold-500/20 text-antiqueGold-300 border-antiqueGold-400'
                    : 'bg-charcoal-850 text-ivory-400 border-antiqueGold-500/15 hover:border-antiqueGold-500/40 hover:text-ivory-200'
                )}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-antiqueGold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by craft, material, district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-charcoal-850 border border-antiqueGold-500/20 text-xs text-ivory-100 placeholder:text-ivory-400/50 focus:outline-none focus:border-antiqueGold-400"
            />
          </div>
        </div>

        {/* Heritage Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="bg-charcoal-850 border border-antiqueGold-500/20 hover:border-antiqueGold-400/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                  
                  {/* District Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-semibold bg-charcoal-950/90 text-antiqueGold-300 border border-antiqueGold-500/30">
                      {item.districtName}
                    </span>
                    <span className="text-xs font-marathi-accent text-antiqueGold-300/90">
                      {item.marathiTitle}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-widest text-antiqueGold-400 font-medium block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-ivory-100 group-hover:text-antiqueGold-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-ivory-300/80 line-clamp-3 leading-relaxed font-light">
                    {item.summary}
                  </p>

                  {/* Materials & Technique Preview */}
                  <div className="space-y-2 pt-2 border-t border-antiqueGold-500/15 text-[11px]">
                    <div className="text-ivory-400">
                      <strong className="text-ivory-200 font-medium">Technique: </strong>
                      <span className="line-clamp-1">{item.technique}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.materials.slice(0, 3).map((mat) => (
                        <span
                          key={mat}
                          className="px-2 py-0.5 bg-charcoal-900 border border-antiqueGold-500/15 text-[10px] text-ivory-300"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveItemModal(item)}
                      className="w-full py-2.5 bg-charcoal-900 hover:bg-terracotta-600 text-ivory-200 hover:text-ivory-50 text-[11px] font-semibold uppercase tracking-widest border border-antiqueGold-500/25 flex items-center justify-center gap-2 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Living Archive</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Deep Archival Inspection Modal */}
      <AnimatePresence>
        {activeItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-charcoal-900 border border-antiqueGold-500/30 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative"
            >
              <button
                onClick={() => setActiveItemModal(null)}
                className="absolute top-4 right-4 p-2 text-ivory-400 hover:text-ivory-100 focus:outline-none"
              >
                ✕
              </button>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-semibold bg-charcoal-950 text-antiqueGold-300 border border-antiqueGold-500/30">
                  {activeItemModal.districtName}
                </span>
                <span className="text-xs font-marathi-accent text-antiqueGold-400">
                  {activeItemModal.marathiTitle}
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-ivory-100">
                  {activeItemModal.title}
                </h2>
                <p className="text-xs uppercase tracking-widest text-antiqueGold-400 mt-1">
                  Category: {activeItemModal.category}
                </p>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden border border-antiqueGold-500/20">
                <Image
                  src={activeItemModal.image}
                  alt={activeItemModal.title}
                  fill
                  className="object-cover brightness-90"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-ivory-200/90 leading-relaxed font-light">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-antiqueGold-400 font-semibold mb-1">
                    Documented Craft Legacy
                  </h4>
                  <p>{activeItemModal.description}</p>
                </div>

                <div className="p-4 bg-charcoal-850 border border-antiqueGold-500/15 space-y-2">
                  <span className="text-[11px] uppercase tracking-widest text-antiqueGold-300 font-semibold block">
                    Authentic Material Palette:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeItemModal.materials.map((m) => (
                      <span key={m} className="px-2.5 py-1 bg-charcoal-900 border border-antiqueGold-500/20 text-xs text-ivory-100">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs">
                    <strong className="text-antiqueGold-400 uppercase tracking-wider">Technique: </strong>
                    <span>{activeItemModal.technique}</span>
                  </div>
                  <div className="text-xs">
                    <strong className="text-antiqueGold-400 uppercase tracking-wider">Cultural Significance: </strong>
                    <span>{activeItemModal.culturalSignificance}</span>
                  </div>
                  {activeItemModal.historicalEra && (
                    <div className="text-xs">
                      <strong className="text-antiqueGold-400 uppercase tracking-wider">Historical Lineage: </strong>
                      <span>{activeItemModal.historicalEra}</span>
                    </div>
                  )}
                  {activeItemModal.artisanCommunity && (
                    <div className="text-xs">
                      <strong className="text-antiqueGold-400 uppercase tracking-wider">Guild / Community: </strong>
                      <span>{activeItemModal.artisanCommunity}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-antiqueGold-500/20 flex justify-end">
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="px-6 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-ivory-50 text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
