import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, Compass, Sparkles, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getDistrictBySlug, getAllDistrictSlugs } from '@/data/districts';

interface DistrictPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllDistrictSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: DistrictPageProps): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);

  if (!district) {
    return {
      title: 'District Not Found — VARSA',
      description: 'The requested Maharashtra district could not be found in the VARSA cultural archive.',
    };
  }

  return {
    title: `${district.name.toUpperCase()} — ${district.marathiName} | Maharashtra District Archive — VARSA`,
    description: `Explore the hidden arts, crafts, master traditions, and cultural heritage of ${district.name} (${district.marathiName}), Maharashtra.`,
  };
}

export default async function DistrictPage({ params }: DistrictPageProps) {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);

  if (!district) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory-100 flex flex-col justify-between selection:bg-terracotta-500 selection:text-ivory-50 relative overflow-hidden">
      {/* Background Ambience & Grain */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none z-0" />
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brass-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-terracotta-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-28 sm:py-36 max-w-5xl mx-auto w-full">
        {/* Back Link */}
        <div className="w-full flex justify-start mb-8 sm:mb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-sandstone-300 hover:text-brass-300 transition-colors py-2 px-4 border border-sandstone-300/25 bg-charcoal-900/80 hover:border-brass-400 hover:bg-charcoal-850 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-brass-400" />
            <span>← Explore Maharashtra</span>
          </Link>
        </div>

        {/* Editorial Showcase Card */}
        <div className="w-full bg-charcoal-900/90 backdrop-blur-md border border-sandstone-300/20 p-8 sm:p-14 text-center shadow-[0_25px_50px_-12px_rgba(23,21,18,0.85)] relative">
          {/* Top Corner Decors */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brass-400/40" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brass-400/40" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brass-400/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brass-400/40" />

          {/* Region & Marathi Tag */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-terracotta-500/20 border border-terracotta-500/30 text-terracotta-300 text-[11px] uppercase tracking-widest font-medium">
              <Layers className="w-3 h-3" />
              <span>{district.region} Division</span>
            </span>
            <span className="font-marathi text-base text-brass-400 font-medium">
              {district.marathiName}
            </span>
          </div>

          {/* Large Editorial Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-wide text-ivory-100 uppercase mb-3">
            {district.name}
          </h1>

          <p className="text-xs sm:text-sm uppercase tracking-heritage text-brass-400 font-semibold mb-8">
            MAHARASHTRA • DISTRICT ARCHIVE
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brass-400/60 to-transparent mx-auto mb-8" />

          {/* District Brief */}
          <p className="text-base sm:text-lg text-sandstone-200/90 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            {district.description}
          </p>

          {/* Coming Soon Notice */}
          <div className="inline-block px-5 py-2.5 bg-charcoal-950/80 border border-sandstone-300/25 mb-10">
            <span className="text-xs uppercase tracking-widest text-brass-300 font-medium flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brass-400" />
              <span>District experience coming soon.</span>
            </span>
          </div>

          {/* Return CTA */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-terracotta-500 hover:bg-terracotta-600 text-ivory-50 text-xs font-semibold uppercase tracking-widest border border-terracotta-400 transition-all duration-300 shadow-lg hover:shadow-terracotta-500/20"
            >
              <Compass className="w-4 h-4" />
              <span>Return to Maharashtra Map</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
