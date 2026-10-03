'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Feather, Sparkles, Filter } from 'lucide-react';
import { HERITAGE_ITEMS } from '@/data/heritage';
import { HERITAGE_CATEGORIES } from '@/data/categories';
import { HeritageItem } from '@/data/types';
import { cn } from '@/lib/utils';

export default function HeritageShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = selectedCategory === 'all'
    ? HERITAGE_ITEMS
    : HERITAGE_ITEMS.filter((item) => item.categorySlug === selectedCategory);

  return (
    <section id="heritage" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden border-t border-antiqueGold-500/15">
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-antiqueGold-500/20">
          <div>
            <div className="flex items-center gap-2.5 text-antiqueGold-400 text-xs uppercase tracking-widest font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lesser-Known Masterpieces</span>
              <span className="text-ivory-400/40">•</span>
              <span className="font-marathi-accent text-sm">दुर्मिळ कला</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-100 uppercase leading-none">
              HIDDEN <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-antiqueGold-300 to-terracotta-300">
                Heritage.
              </span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-2">
            <span className="font-marathi-accent text-antiqueGold-400/90 text-sm sm:text-base font-normal">
              वारसा • हस्तकला आणि पारंपरिक तंत्रज्ञान
            </span>
            <p className="text-xs uppercase tracking-widest text-ivory-400/70">
              Curated by District & Guild Lineage
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={cn(
              'px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 shrink-0 border',
              selectedCategory === 'all'
                ? 'bg-antiqueGold-500/20 text-antiqueGold-300 border-antiqueGold-400'
                : 'bg-charcoal-900/80 text-ivory-300/70 border-antiqueGold-500/15 hover:border-antiqueGold-500/40 hover:text-ivory-100'
            )}
          >
            All Disciplines ({HERITAGE_ITEMS.length})
          </button>
          {HERITAGE_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={cn(
                'px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 shrink-0 border',
                selectedCategory === cat.slug
                  ? 'bg-antiqueGold-500/20 text-antiqueGold-300 border-antiqueGold-400'
                  : 'bg-charcoal-900/80 text-ivory-300/70 border-antiqueGold-500/15 hover:border-antiqueGold-500/40 hover:text-ivory-100'
              )}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              // Asymmetric column span pattern: 1st card wide (7 cols), 2nd card narrow (5 cols), etc.
              const isLarge = index % 5 === 0 || index % 5 === 3;
              const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={cn('group relative flex flex-col justify-between', colSpan)}
                >
                  <Link
                    href={`/heritage`}
                    className="block relative overflow-hidden bg-charcoal-900 border border-antiqueGold-500/20 hover:border-antiqueGold-400/60 transition-all duration-500 shadow-xl"
                  >
                    {/* Image Container with Editorial Aspect Ratio */}
                    <div className={cn(
                      'relative overflow-hidden w-full',
                      isLarge ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[1/1]'
                    )}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 text-[10px] uppercase tracking-widest font-semibold bg-charcoal-950/85 backdrop-blur-md text-antiqueGold-300 border border-antiqueGold-500/30">
                          {item.districtName}
                        </span>
                        <div className="w-8 h-8 rounded-none bg-charcoal-950/80 backdrop-blur-md border border-antiqueGold-500/30 flex items-center justify-center text-ivory-200 group-hover:bg-terracotta-500 group-hover:text-ivory-50 group-hover:border-terracotta-500 transition-colors">
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-widest text-antiqueGold-400 font-medium">
                            {item.category}
                          </span>
                          <span className="text-ivory-400/40">•</span>
                          <span className="font-marathi-accent text-xs text-antiqueGold-400/80">
                            {item.marathiTitle}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory-100 group-hover:text-antiqueGold-300 transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-ivory-300/85 font-sans font-light line-clamp-2 leading-relaxed">
                          {item.summary}
                        </p>

                        {/* Material & Technique Pills */}
                        <div className="pt-2 flex flex-wrap gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                          {item.materials.slice(0, 3).map((mat) => (
                            <span
                              key={mat}
                              className="text-[10px] px-2 py-0.5 bg-charcoal-900/90 border border-antiqueGold-500/20 text-ivory-300/80"
                            >
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA Footer */}
        <div className="mt-16 text-center pt-8 border-t border-antiqueGold-500/20">
          <Link
            href="/heritage"
            className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal-900 hover:bg-terracotta-600 text-ivory-100 hover:text-ivory-50 text-xs font-semibold uppercase tracking-widest border border-antiqueGold-500/30 hover:border-terracotta-500 transition-all duration-300 shadow-xl"
          >
            <span>Explore Complete Heritage Archive</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
