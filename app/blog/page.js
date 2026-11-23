import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import BlogSection from '../../components/BlogSection';

export const metadata = {
  title: 'ISO Certification Guides & Compliance Blog | ACE-CERT',
  description:
    'Read practical guides about ISO certification, compliance, quality management, cybersecurity, training, and business improvement.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative isolate overflow-hidden bg-blue-950 text-white">
        <Image
          src="/your_success.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-950/55" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-[-12rem] h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-red-200 backdrop-blur-sm sm:text-sm">
              <Sparkles aria-hidden="true" className="h-4 w-4 text-red-300" />
              ACE-CERT Insights
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Blog &amp; <span className="text-red-300">Insights</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Read practical guides about ISO certification, compliance, quality
              management, cybersecurity, training, and business improvement.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#blog-articles"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/20 transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
              >
                Explore articles
                <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/certification"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
              >
                Browse certifications
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="ml-auto max-w-md rounded-3xl border border-white/20 bg-slate-950/30 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-md xl:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/20 text-red-200 ring-1 ring-red-200/20">
                  <BookOpen aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                    Explore topics
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Ideas for better business
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'ISO & Quality',
                  'Compliance',
                  'Cybersecurity',
                  'Training',
                  'Business Improvement',
                ].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <p className="mt-6 border-t border-white/15 pt-5 text-sm leading-6 text-slate-200">
                Clear, practical guidance to help you navigate standards and
                make informed next steps.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <BlogSection showFilters />
    </main>
  );
}

