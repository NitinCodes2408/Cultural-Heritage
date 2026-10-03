'use client';

import React, { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { District } from '@/data/types';
import { DISTRICTS, REGIONS } from '@/data/districts';
import DistrictTooltip from '@/components/DistrictTooltip';
import { cn } from '@/lib/utils';

interface MaharashtraMapProps {
  onSelectDistrict?: (district: District) => void;
  className?: string;
}

export default function MaharashtraMap({ onSelectDistrict, className }: MaharashtraMapProps) {
  const router = useRouter();
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const [activeRegion, setActiveRegion] = useState<string>('all');
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [focusedDistrictId, setFocusedDistrictId] = useState<string | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setTooltipPos({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  const handleDistrictHover = (district: District, e: React.MouseEvent) => {
    setHoveredDistrict(district);
    setTooltipPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleDistrictLeave = () => {
    setHoveredDistrict(null);
  };

  const handleDistrictClick = (district: District) => {
    if (onSelectDistrict) {
      onSelectDistrict(district);
    }
    router.push(`/district/${district.slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent, district: District) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDistrictClick(district);
    }
  };

  return (
    <div className={cn('w-full relative', className)} ref={mapContainerRef} onMouseMove={handleMouseMove}>
      {/* Floating Interactive Tooltip */}
      <AnimatePresence>
        {hoveredDistrict && (
          <DistrictTooltip
            district={hoveredDistrict}
            x={tooltipPos.x}
            y={tooltipPos.y}
            visible={!!hoveredDistrict}
          />
        )}
      </AnimatePresence>

      {/* Region Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-sandstone-300/15">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
          <span className="text-xs uppercase tracking-widest text-brass-400 font-semibold mr-1 flex items-center gap-1.5 shrink-0">
            <Layers className="w-3.5 h-3.5" />
            <span>Region:</span>
          </span>
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={cn(
                'px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 shrink-0 border',
                activeRegion === region.id
                  ? 'bg-brass-500/20 text-brass-300 border-brass-400 shadow-sm font-semibold'
                  : 'bg-charcoal-800/70 text-sandstone-300/75 border-sandstone-300/15 hover:border-sandstone-300/40 hover:text-ivory-100'
              )}
            >
              <span>{region.name}</span>
              <span className="ml-1.5 text-[10px] font-marathi opacity-70">
                ({region.marathiName})
              </span>
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs text-sandstone-400/60 font-mono">
          <Compass className="w-3.5 h-3.5 text-brass-400 animate-spin" style={{ animationDuration: '40s' }} />
          <span>72.6°E — 80.9°E • 15.6°N — 22.0°N</span>
        </div>
      </div>

      {/* Primary SVG Map Stage */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-charcoal-900/90 backdrop-blur-md border border-sandstone-300/20 p-4 sm:p-8 shadow-[0_25px_50px_-12px_rgba(23,21,18,0.85)] overflow-hidden"
      >
        {/* Subtle Ambient Glow and Noise */}
        <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-brass-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Map Header Line */}
        <div className="relative z-10 flex items-center justify-between border-b border-sandstone-300/10 pb-3 mb-4 text-[11px] uppercase tracking-widest text-sandstone-400/70">
          <div className="flex items-center gap-2 text-brass-400">
            <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
            <span className="font-medium">Interactive Cartographic Archive</span>
          </div>
          <span className="hidden sm:inline-block">Click district boundary to inspect heritage</span>
        </div>

        {/* SVG Container */}
        <div className="relative w-full aspect-[1000/780] flex items-center justify-center">
          <svg
            viewBox="0 0 1000 780"
            className="w-full h-full select-none"
            aria-label="Interactive Maharashtra 36 Districts Map"
          >
            <defs>
              {/* Default District Fill Gradient (Deep Warm Charcoal) */}
              <radialGradient id="districtGradient" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#29231F" />
                <stop offset="100%" stopColor="#1E1916" />
              </radialGradient>

              {/* Hover Highlight Gradient (Muted Terracotta) */}
              <radialGradient id="hoverGradient" cx="50%" cy="50%" r="65%">
                <stop offset="0%" stopColor="#B66046" />
                <stop offset="100%" stopColor="#A6533B" />
              </radialGradient>

              {/* Active Region Accent Gradient */}
              <radialGradient id="regionActiveGradient" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#352C26" />
                <stop offset="100%" stopColor="#241E1A" />
              </radialGradient>

              {/* Soft Drop Shadow Filter for Map Elements */}
              <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Subtle Cartographic Grid Lines */}
            <g className="cartographic-grid opacity-15 pointer-events-none" stroke="#B08A52" strokeWidth="0.5" strokeDasharray="3 3">
              <line x1="50" y1="200" x2="950" y2="200" />
              <line x1="50" y1="400" x2="950" y2="400" />
              <line x1="50" y1="600" x2="950" y2="600" />
              <line x1="250" y1="50" x2="250" y2="730" />
              <line x1="500" y1="50" x2="500" y2="730" />
              <line x1="750" y1="50" x2="750" y2="730" />
            </g>

            {/* Render All 36 District SVG Paths */}
            <g className="districts-layer">
              {DISTRICTS.map((district) => {
                if (!district.svgPath) return null;

                const isHovered = hoveredDistrict?.id === district.id;
                const isFocused = focusedDistrictId === district.id;
                const isRegionMatch = activeRegion === 'all' || district.region === activeRegion;

                return (
                  <path
                    key={district.id}
                    id={`district-${district.id}`}
                    d={district.svgPath}
                    role="button"
                    tabIndex={0}
                    aria-label={`${district.name} (${district.marathiName}), ${district.region}`}
                    className="cursor-pointer transition-all duration-300 focus:outline-none"
                    style={{
                      fill: isHovered
                        ? 'url(#hoverGradient)'
                        : isRegionMatch
                        ? 'url(#districtGradient)'
                        : '#141210',
                      fillOpacity: isHovered ? 1 : isRegionMatch ? 0.95 : 0.3,
                      stroke: isHovered
                        ? '#FAF6F0'
                        : isFocused
                        ? '#B08A52'
                        : isRegionMatch
                        ? '#D8C9B8'
                        : '#544941',
                      strokeWidth: isHovered ? 2.2 : isFocused ? 2 : isRegionMatch ? 1.1 : 0.6,
                      strokeOpacity: isHovered ? 1 : isRegionMatch ? 0.55 : 0.2,
                      filter: isHovered ? 'url(#glowEffect)' : 'none',
                    }}
                    onMouseEnter={(e) => handleDistrictHover(district, e)}
                    onMouseMove={(e) => handleDistrictHover(district, e)}
                    onMouseLeave={handleDistrictLeave}
                    onClick={() => handleDistrictClick(district)}
                    onFocus={() => {
                      setFocusedDistrictId(district.id);
                      setHoveredDistrict(district);
                    }}
                    onBlur={() => {
                      setFocusedDistrictId(null);
                      setHoveredDistrict(null);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, district)}
                  />
                );
              })}
            </g>

            {/* Subtle District Centroid Label Nodes */}
            <g className="district-labels pointer-events-none">
              {DISTRICTS.map((district) => {
                if (!district.svgCenter) return null;
                const isHovered = hoveredDistrict?.id === district.id;
                const isRegionMatch = activeRegion === 'all' || district.region === activeRegion;

                const { x, y } = district.svgCenter;

                return (
                  <g key={`label-${district.id}`} className="transition-opacity duration-300" style={{ opacity: isHovered ? 1 : isRegionMatch ? 0.9 : 0.25 }}>
                    {/* Small center pin dot */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered ? 3.5 : 1.8}
                      fill={isHovered ? '#FAF6F0' : '#D8C9B8'}
                      fillOpacity={isHovered ? 1 : 0.75}
                      className="transition-all duration-300"
                    />

                    {/* District Name */}
                    <text
                      x={x}
                      y={y + 11}
                      textAnchor="middle"
                      className={cn(
                        'text-[8px] sm:text-[9.5px] font-sans font-medium uppercase tracking-wider transition-all duration-300',
                        isHovered
                          ? 'fill-ivory-50 font-semibold text-[10.5px]'
                          : 'fill-sandstone-200'
                      )}
                      style={{
                        paintOrder: 'stroke',
                        stroke: '#171512',
                        strokeWidth: '2.5px',
                        strokeLinejoin: 'round',
                      }}
                    >
                      {district.name}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* Map Bottom Status Bar */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 mt-2 border-t border-sandstone-300/15 text-xs text-sandstone-300/80">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brass-400" />
            <span>
              Showing <strong className="text-ivory-100 font-semibold">{activeRegion === 'all' ? 36 : DISTRICTS.filter(d => d.region === activeRegion).length}</strong> of 36 districts
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-brass-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-terracotta-500 border border-ivory-100" />
              <span>Hover: Terracotta</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-charcoal-800 border border-sandstone-300/50" />
              <span>Click: Open Archive</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Supporting Content Box */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-12 pt-8 border-t border-sandstone-300/20">
        <div className="md:col-span-4 flex items-baseline gap-4 sm:gap-6">
          <div>
            <span className="block text-4xl sm:text-5xl font-serif font-bold text-brass-300">
              36
            </span>
            <span className="text-[11px] uppercase tracking-heritage text-sandstone-400 font-medium">
              DISTRICTS
            </span>
          </div>

          <div className="h-10 w-[1px] bg-sandstone-300/25" />

          <div>
            <span className="block text-4xl sm:text-5xl font-serif font-bold text-terracotta-400">
              ∞
            </span>
            <span className="text-[11px] uppercase tracking-heritage text-sandstone-400 font-medium">
              COUNTLESS STORIES
            </span>
          </div>
        </div>

        <div className="md:col-span-8">
          <p className="font-serif text-lg sm:text-xl text-ivory-200/90 leading-relaxed">
            &ldquo;Every district carries its own artistic traditions, craft practices, cultural memories and living heritage.&rdquo;
          </p>
          <p className="font-marathi text-sm text-brass-400/90 mt-1">
            प्रत्येक जिल्ह्याला स्वतःची अनोखी कलापरंपरा, हस्तकलेचा वारसा आणि समृद्ध इतिहास आहे.
          </p>
        </div>
      </div>
    </div>
  );
}
