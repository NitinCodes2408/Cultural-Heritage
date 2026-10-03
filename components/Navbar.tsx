'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Compass, MapPin, Feather, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
  label: string;
  marathiLabel: string;
  href: string;
  icon?: React.ReactNode;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Explore', marathiLabel: 'शोध', href: '/#map', icon: <Compass className="w-4 h-4" /> },
  { label: 'Districts', marathiLabel: 'जिल्हे', href: '/#districts', icon: <MapPin className="w-4 h-4" /> },
  { label: 'Heritage', marathiLabel: 'वारसा', href: '/home#heritage', icon: <Feather className="w-4 h-4" /> },
  { label: 'About', marathiLabel: 'परिचय', href: '/home#about', icon: <Sparkles className="w-4 h-4" /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isScrolled
            ? 'bg-charcoal-900/90 backdrop-blur-md border-b border-sandstone-300/20 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-charcoal-900/90 via-charcoal-900/50 to-transparent py-5 sm:py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-baseline gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-brass-400"
          >
            <span className="font-serif font-bold text-2xl sm:text-3xl tracking-widest text-ivory-100 group-hover:text-brass-300 transition-colors">
              VARSA
            </span>
            <span className="font-marathi text-sm sm:text-base text-brass-400/90 tracking-wide font-normal">
              वारसा
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-sandstone-400/70 border-l border-sandstone-300/30 pl-2.5 ml-1">
              Cultural Archive
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-2 text-xs uppercase tracking-widest text-sandstone-200/80 hover:text-ivory-50 transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  {link.label}
                  <span className="text-[10px] font-marathi opacity-0 group-hover:opacity-75 text-brass-400 transition-opacity">
                    {link.marathiLabel}
                  </span>
                </span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1px] bg-brass-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right Action CTA: ENTER VARSA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/home"
              className="relative group overflow-hidden px-5 py-2 text-xs uppercase tracking-widest font-semibold text-ivory-100 border border-sandstone-300/30 hover:border-brass-400 rounded-none bg-charcoal-800/70 hover:bg-terracotta-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <span>ENTER VARSA</span>
              <ArrowRight className="w-3.5 h-3.5 text-brass-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/home"
              className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-medium text-brass-300 border border-sandstone-300/30 bg-charcoal-850"
            >
              ENTER VARSA →
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 text-ivory-200 hover:text-brass-300 focus:outline-none focus:ring-1 focus:ring-brass-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-charcoal-900/98 backdrop-blur-xl pt-24 px-6 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6 pt-4">
              <div className="pb-4 border-b border-sandstone-300/20">
                <p className="text-[11px] uppercase tracking-widest text-brass-400 font-semibold mb-1">
                  Maharashtra Cultural Discovery
                </p>
                <p className="font-marathi text-sm text-sandstone-300/80">
                  महाराष्ट्राचा समृद्ध वारसा आणि लोककला
                </p>
              </div>

              <div className="space-y-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2.5 text-lg font-serif tracking-wide text-ivory-100 hover:text-brass-300 border-b border-sandstone-300/15"
                    >
                      <span className="flex items-center gap-3">
                        {link.icon}
                        <span>{link.label}</span>
                      </span>
                      <span className="font-marathi text-sm text-brass-400/90">
                        {link.marathiLabel}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-sandstone-300/20">
              <Link
                href="/home"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-terracotta-500 hover:bg-terracotta-600 text-ivory-50 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors border border-terracotta-400"
              >
                <span>ENTER VARSA</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center">
                <span className="text-[11px] tracking-widest uppercase text-sandstone-400/60">
                  VARSA • वारसा © 2026
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
