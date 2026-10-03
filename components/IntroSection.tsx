'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Feather, Award, Compass } from 'lucide-react';
import { CULTURAL_STATS } from '@/data/artisans';

export default function IntroSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-charcoal-900 overflow-hidden border-t border-antiqueGold-500/15">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-antiqueGold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-antiqueGold-500/20">
          <div>
            <div className="flex items-center gap-2.5 text-antiqueGold-400 text-xs uppercase tracking-widest font-medium mb-3">
              <Feather className="w-3.5 h-3.5" />
              <span>Cultural Philosophy</span>
              <span className="text-ivory-400/40">•</span>
              <span className="font-marathi-accent text-sm">दृष्टिकोन</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-100 uppercase leading-none">
              MORE THAN WHAT <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-antiqueGold-300 to-terracotta-300">
                we know.
              </span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 max-w-sm text-left md:text-right">
            <span className="font-marathi-accent text-antiqueGold-400/90 text-sm sm:text-base font-normal block mb-1">
              अपरिचित महाराष्ट्राचा जिवंत वारसा
            </span>
            <p className="text-xs uppercase tracking-widest text-ivory-400/70">
              Beyond Monuments & Itineraries
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Evocative Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-antiqueGold-500/20 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
                alt="Warli indigenous painting ritual on red earth wall"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
              
              {/* Overlay Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 bg-charcoal-950/85 backdrop-blur-md border border-antiqueGold-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-antiqueGold-400 font-medium block">
                    Living Tribal Expression • Palghar
                  </span>
                  <p className="text-sm font-serif text-ivory-100 italic">
                    Warli Sacred Rice-Paste Murals
                  </p>
                </div>
                <Link
                  href="/heritage/warli-sacred-art"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-ivory-200 hover:text-antiqueGold-300 font-medium transition-colors"
                >
                  <span>Read Archive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-terracotta-500/20 -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial Text & Thought Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg sm:text-xl font-serif text-ivory-100 leading-relaxed font-light">
                Maharashtra carries countless artistic traditions, craft practices and cultural stories that remain deeply rooted in its communities.
              </p>
              <p className="text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans font-light">
                From the lost-wax bronze casting hidden deep in Gadchiroli&apos;s forests to the 300-year-old rhythmic hammer strokes in Pune&apos;s copper lanes, the soul of Maharashtra lives in the hands of its quiet masters.
              </p>
              <p className="text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans font-light">
                <strong className="text-ivory-100 font-medium">VARSA</strong> brings these lesser-known cultural expressions together into an enduring, dignified digital archive—making living heritage visible, valued, and accessible to the world.
              </p>
            </div>

            {/* Pull Quote Box */}
            <div className="p-6 bg-charcoal-850 border-l-2 border-antiqueGold-400 space-y-2">
              <p className="font-serif italic text-base text-ivory-200 leading-relaxed">
                &ldquo;A craft is not an object. It is memory held in the muscle, transmitted across generations without written blueprints.&rdquo;
              </p>
              <span className="text-[11px] uppercase tracking-widest text-antiqueGold-400 block">
                — VARSA Curatorial Ethos
              </span>
            </div>

            {/* Action Links */}
            <div className="pt-2 flex items-center gap-6">
              <Link
                href="/districts"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-antiqueGold-300 hover:text-ivory-100 font-semibold transition-colors group"
              >
                <span>Explore 36 Districts</span>
                <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <span className="text-ivory-400/30">|</span>
              <Link
                href="/heritage"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-terracotta-400 hover:text-terracotta-300 font-semibold transition-colors group"
              >
                <span>Explore All Crafts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Four Key Metrics Grid */}
        <div className="mt-20 sm:mt-24 pt-12 border-t border-antiqueGold-500/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CULTURAL_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 bg-charcoal-850/60 border border-antiqueGold-500/15 hover:border-antiqueGold-400/40 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 to-antiqueGold-300">
                  {stat.value}
                </span>
                <span className="font-marathi-accent text-xs text-antiqueGold-400/80">
                  {stat.marathiLabel}
                </span>
              </div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-ivory-200 mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-ivory-400/70 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
