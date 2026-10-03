'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import MaharashtraMap from './MaharashtraMap';

export default function DistrictExplorer() {
  return (
    <section id="districts" className="py-24 sm:py-32 bg-charcoal-900 relative overflow-hidden border-t border-antiqueGold-500/15">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-terracotta-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-antiqueGold-500/20">
          <div>
            <div className="flex items-center gap-2.5 text-antiqueGold-400 text-xs uppercase tracking-widest font-medium mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Geographical Archive</span>
              <span className="text-ivory-400/40">•</span>
              <span className="font-marathi-accent text-sm">३६ जिल्हे</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-100 uppercase leading-none">
              36 DISTRICTS. <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-antiqueGold-300 to-terracotta-300">
                Countless stories.
              </span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-2">
            <span className="font-marathi-accent text-antiqueGold-400/90 text-sm sm:text-base font-normal">
              अगणित सांस्कृतिक गाथा आणि जिवंत परंपरा
            </span>
            <Link
              href="/districts"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ivory-200 hover:text-antiqueGold-300 font-medium transition-colors group"
            >
              <span>View Full 36 District Archive</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Interactive Maharashtra Map Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MaharashtraMap />
        </motion.div>
      </div>
    </section>
  );
}
