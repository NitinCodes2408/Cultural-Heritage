'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { District } from '@/data/types';

interface DistrictTooltipProps {
  district: District;
  x: number;
  y: number;
  visible: boolean;
}

export default function DistrictTooltip({ district, x, y, visible }: DistrictTooltipProps) {
  if (!visible || !district) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 8 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -120%)',
      }}
      className="pointer-events-none fixed z-50 min-w-[210px] max-w-[280px] bg-charcoal-900/95 backdrop-blur-md border border-sandstone-300/35 px-4 py-3 shadow-[0_16px_36px_rgba(23,21,18,0.9)]"
    >
      {/* Decorative Top Brass Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brass-400 to-transparent" />

      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[9px] uppercase tracking-widest text-brass-400 font-medium">
            {district.region}
          </span>
          <span className="font-marathi text-[11px] text-sandstone-300">
            {district.marathiName}
          </span>
        </div>

        <h4 className="font-serif text-lg font-bold text-ivory-100 tracking-wide uppercase leading-tight">
          {district.name}
        </h4>

        {district.featuredCrafts && district.featuredCrafts.length > 0 && (
          <p className="text-[11px] text-sandstone-300/80 line-clamp-1">
            {district.featuredCrafts[0]}
          </p>
        )}

        <div className="pt-2 mt-1 border-t border-sandstone-300/15 flex items-center justify-between text-[10px] uppercase tracking-widest font-semibold text-terracotta-400">
          <span className="flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-brass-400" />
            <span>Explore District</span>
          </span>
          <ArrowRight className="w-3 h-3 text-brass-400" />
        </div>
      </div>
    </motion.div>
  );
}
