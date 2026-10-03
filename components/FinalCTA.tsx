'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, Feather } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-28 sm:py-36 bg-charcoal-950 relative overflow-hidden border-t border-antiqueGold-500/20">
      {/* Visual Radial Glow & Archival Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-antiqueGold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-terracotta-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-8">
        {/* Subtle Marathi Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-charcoal-900 border border-antiqueGold-500/30 text-antiqueGold-300 text-xs uppercase tracking-widest font-medium"
        >
          <Feather className="w-3.5 h-3.5 text-antiqueGold-400" />
          <span>अतुल्य सांस्कृतिक ओळख</span>
          <span className="text-ivory-400/40">•</span>
          <span className="font-marathi-accent">वारसा</span>
        </motion.div>

        {/* Large Editorial Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-3"
        >
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ivory-100 uppercase leading-[1.08]">
            THERE IS STILL <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-antiqueGold-300 via-ivory-100 to-terracotta-300">
              so much to discover.
            </span>
          </h2>
          <p className="text-ivory-300/90 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-sans font-light leading-relaxed pt-2">
            Explore Maharashtra beyond the familiar. Join an open digital archive celebrating living crafts, ancestral techniques, and indigenous knowledge.
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/heritage"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-ivory-50 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-2xl hover:shadow-terracotta-500/25 active:translate-y-0.5"
          >
            <span>ENTER VARSA</span>
            <ArrowRight className="w-4 h-4 text-ivory-100 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/districts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal-900 hover:bg-charcoal-850 text-ivory-200 hover:text-ivory-100 text-xs font-semibold uppercase tracking-widest border border-antiqueGold-500/30 hover:border-antiqueGold-400 transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-antiqueGold-400" />
            <span>BROWSE 36 DISTRICTS</span>
          </Link>
        </motion.div>

        {/* Archival Badge */}
        <div className="pt-10 flex items-center justify-center gap-6 text-[11px] uppercase tracking-widest text-ivory-400/60 border-t border-antiqueGold-500/15 max-w-md mx-auto">
          <span>Non-Commercial</span>
          <span>•</span>
          <span>Open Cultural Access</span>
          <span>•</span>
          <span>Preservation First</span>
        </div>
      </div>
    </section>
  );
}
