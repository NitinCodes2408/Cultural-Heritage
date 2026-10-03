'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Search, Sparkles } from 'lucide-react';
import { District } from '@/data/types';
import { DISTRICTS, REGIONS } from '@/data/districts';
import DistrictListItem from '@/components/DistrictListItem';
import { cn } from '@/lib/utils';

export default function DistrictIndex() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDistricts = useMemo(() => {
    return DISTRICTS.filter((d) => {
      const matchesRegion = selectedRegion === 'all' || d.region === selectedRegion;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        d.name.toLowerCase().includes(query) ||
        d.marathiName.includes(query) ||
        d.region.toLowerCase().includes(query) ||
        d.featuredCrafts.some((c) => c.toLowerCase().includes(query));

      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  return (
    <section id="districts" className="w-full py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-sandstone-300/20">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-brass-400 rounded-full" />
            <span className="text-xs uppercase tracking-heritage text-brass-400 font-semibold">
              36 DISTRICT ARCHIVE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ivory-100 uppercase tracking-wide">
            Maharashtra District Index
          </h2>
          <p className="font-marathi text-sm text-brass-400/90 mt-1">
            महाराष्ट्रातील सर्व ३६ जिल्ह्यांचा सांस्कृतिक संग्रह
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brass-400/70" />
          <input
            type="text"
            placeholder="Search district or craft..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-charcoal-900/80 border border-sandstone-300/25 text-xs text-ivory-100 placeholder:text-sandstone-400/50 focus:outline-none focus:border-brass-400 transition-colors"
          />
        </div>
      </div>

      {/* Region Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto py-6 scrollbar-none">
        <span className="text-xs uppercase tracking-widest text-brass-400 font-medium mr-2 flex items-center gap-1.5 shrink-0">
          <Layers className="w-3.5 h-3.5" />
          <span>Region:</span>
        </span>
        {REGIONS.map((region) => (
          <button
            key={region.id}
            onClick={() => setSelectedRegion(region.id)}
            className={cn(
              'px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 shrink-0 border',
              selectedRegion === region.id
                ? 'bg-brass-500/20 text-brass-300 border-brass-400 shadow-sm font-semibold'
                : 'bg-charcoal-850/70 text-sandstone-300/75 border-sandstone-300/15 hover:border-sandstone-300/40 hover:text-ivory-100'
            )}
          >
            <span>{region.name}</span>
            <span className="ml-1.5 text-[10px] font-marathi opacity-70">
              ({region.marathiName})
            </span>
          </button>
        ))}
      </div>

      {/* Districts Grid / List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-2">
        <AnimatePresence mode="popLayout">
          {filteredDistricts.length > 0 ? (
            filteredDistricts.map((district, idx) => (
              <DistrictListItem
                key={district.id}
                district={district}
                index={idx}
              />
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-sandstone-400/70 border border-dashed border-sandstone-300/20">
              <p className="text-sm">No districts matching &ldquo;{searchQuery}&rdquo;</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('all');
                }}
                className="mt-3 text-xs uppercase tracking-widest text-brass-400 underline underline-offset-4 hover:text-brass-300"
              >
                Reset filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Supporting Quote */}
      <div className="mt-16 pt-8 border-t border-sandstone-300/15 text-center">
        <p className="font-serif italic text-lg sm:text-xl text-sandstone-200/90 max-w-2xl mx-auto">
          &ldquo;Every district carries its own artistic traditions, craft practices, cultural memories and living heritage.&rdquo;
        </p>
        <span className="text-[10px] uppercase tracking-widest text-brass-400/90 mt-2 block font-sans">
          VARSA Cultural Documentation Archive
        </span>
      </div>
    </section>
  );
}
