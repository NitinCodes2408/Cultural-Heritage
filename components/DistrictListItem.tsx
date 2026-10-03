'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { District } from '@/data/types';

interface DistrictListItemProps {
  district: District;
  index: number;
}

export default function DistrictListItem({ district, index }: DistrictListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.4) }}
    >
      <Link
        href={`/district/${district.slug}`}
        className="group relative flex items-center justify-between p-4 sm:p-5 bg-charcoal-850/60 hover:bg-charcoal-800/90 border border-sandstone-300/15 hover:border-sandstone-300/40 transition-all duration-300 overflow-hidden"
      >
        {/* Subtle hover background sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta-500/0 via-terracotta-500/5 to-brass-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Left Side: Number, Name, Marathi Name */}
        <div className="flex items-baseline gap-3 sm:gap-4 relative z-10">
          <span className="font-mono text-xs text-brass-400/60 group-hover:text-brass-300 transition-colors w-5 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg sm:text-xl font-medium text-ivory-100 group-hover:text-sandstone-50 transition-colors tracking-wide">
                {district.name}
              </span>
              <span className="font-marathi text-xs text-brass-400/80 group-hover:text-brass-300 transition-colors">
                {district.marathiName}
              </span>
            </div>

            <p className="text-[11px] text-sandstone-400/60 uppercase tracking-widest mt-0.5">
              {district.region}
            </p>
          </div>
        </div>

        {/* Right Side: Craft Preview & Arrow */}
        <div className="flex items-center gap-3 relative z-10">
          <span className="hidden md:inline-block text-xs text-sandstone-300/70 group-hover:text-sandstone-200 transition-colors">
            {district.featuredCrafts?.[0] || `${district.heritageCount} crafts`}
          </span>

          <div className="w-8 h-8 rounded-none border border-sandstone-300/20 group-hover:border-terracotta-500 flex items-center justify-center bg-charcoal-900/60 group-hover:bg-terracotta-500 text-sandstone-300 group-hover:text-ivory-50 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Bottom underline reveal animation */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-terracotta-500 via-brass-400 to-terracotta-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
    </motion.div>
  );
}
