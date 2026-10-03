'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-sandstone-200 border-t border-sandstone-300/20 pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-sandstone-300/15">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-baseline gap-2.5">
              <span className="font-serif font-bold text-2xl tracking-widest text-ivory-100">
                VARSA
              </span>
              <span className="font-marathi text-base text-brass-400">
                वारसा
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-sandstone-300/80 font-sans font-light leading-relaxed max-w-sm">
              A digital cultural archive dedicated to discovering and preserving the hidden arts, craft lineages, and living heritage across Maharashtra&apos;s 36 districts.
            </p>
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-widest text-brass-400 font-semibold block mb-1">
                Curatorial Direction:
              </span>
              <p className="text-xs text-sandstone-400/80">
                Cultural Heritage & Indigenous Knowledge Preservation
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-widest text-brass-400 font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-brass-300 transition-colors">
                  District Explorer
                </Link>
              </li>
              <li>
                <Link href="/home" className="hover:text-brass-300 transition-colors">
                  Cinematic Landing (Home)
                </Link>
              </li>
              <li>
                <Link href="/#districts" className="hover:text-brass-300 transition-colors">
                  36 Districts Index
                </Link>
              </li>
              <li>
                <Link href="/home#heritage" className="hover:text-brass-300 transition-colors">
                  Living Heritage
                </Link>
              </li>
            </ul>
          </div>

          {/* Cultural Regions Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-brass-400 font-semibold block">
              Cultural Regions
            </span>
            <ul className="space-y-2 text-xs text-sandstone-300/80">
              <li className="flex items-center justify-between">
                <span>Konkan Coast (कोकण)</span>
                <span className="text-[10px] text-brass-400/80 font-mono">7 Districts</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Western Maharashtra (पश्चिम महाराष्ट्र)</span>
                <span className="text-[10px] text-brass-400/80 font-mono">5 Districts</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Marathwada (मराठवाडा)</span>
                <span className="text-[10px] text-brass-400/80 font-mono">8 Districts</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Vidarbha (विदर्भ)</span>
                <span className="text-[10px] text-brass-400/80 font-mono">11 Districts</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Khandesh (खान्देश)</span>
                <span className="text-[10px] text-brass-400/80 font-mono">5 Districts</span>
              </li>
            </ul>
          </div>

          {/* Connect & Social Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-brass-400 font-semibold block">
              Archive Initiative
            </span>
            <p className="text-xs text-sandstone-300/80 leading-relaxed">
              VARSA is an independent non-commercial digital platform honoring indigenous creators, tribal craft guilds, and master artisans of Maharashtra.
            </p>
            <div className="pt-2">
              <Link
                href="/home"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs bg-charcoal-900 border border-sandstone-300/30 text-brass-300 hover:text-ivory-100 hover:border-brass-400 transition-colors uppercase tracking-wider font-medium"
              >
                <span>ENTER VARSA EXPERIENCE →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sandstone-400/60">
          <div className="flex items-center gap-2">
            <span>© 2026 VARSA (वारसा). All Rights Reserved.</span>
            <span>•</span>
            <span>Digital Cultural Heritage Archive</span>
          </div>

          <button
            onClick={scrollToTop}
            className="text-[11px] uppercase tracking-widest text-brass-400 hover:text-ivory-100 transition-colors flex items-center gap-1.5"
          >
            <span>Back to Top</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
