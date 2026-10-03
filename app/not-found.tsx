import Link from 'next/link';
import { ArrowLeft, Compass, Feather } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-charcoal-900 text-ivory-100 flex flex-col justify-between selection:bg-terracotta-500 selection:text-ivory-50">
      <section className="pt-40 pb-24 px-6 text-center max-w-3xl mx-auto space-y-6 flex-1 flex flex-col justify-center items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal-950 border border-antiqueGold-500/30 text-antiqueGold-300 text-xs uppercase tracking-widest font-medium">
          <Feather className="w-3.5 h-3.5 text-antiqueGold-400" />
          <span>४०४ • अनभिज्ञ पान</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ivory-100 uppercase">
          PAGE NOT FOUND
        </h1>

        <p className="text-ivory-300/80 text-sm sm:text-base font-serif font-light max-w-lg leading-relaxed">
          The cultural document or page you are seeking has either moved or belongs to an unchartered trail of Maharashtra&apos;s living heritage.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-ivory-50 text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Maharashtra Map</span>
          </Link>

          <Link
            href="/home"
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-850 hover:bg-charcoal-800 text-ivory-200 hover:text-ivory-50 text-xs font-semibold uppercase tracking-widest border border-antiqueGold-500/30 transition-colors"
          >
            <Compass className="w-4 h-4 text-antiqueGold-400" />
            <span>Enter Cinematic Home</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
