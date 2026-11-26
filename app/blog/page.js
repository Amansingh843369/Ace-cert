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
      <section className="relative isolate overflow-hidden bg-[#FFF8F7] text-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/your_success.jpg"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/75 via-white/70 to-[#FFF8F7]/95" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-[-12rem] h-96 w-96 rounded-full bg-red-200/50 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:px-8 lg:py-16">
          <div className="text-center lg:text-left">
            <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-red-700 shadow-sm backdrop-blur-sm sm:text-sm lg:mx-0">
              <Sparkles aria-hidden="true" className="h-4 w-4 text-red-600" />
              ACE-CERT Insights
            </p>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-black leading-tight tracking-tight text-[#0B1739] sm:text-5xl lg:mx-0 lg:text-6xl">
              Blog &amp; <span className="text-red-600">Insights</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              Read practical guides about ISO certification, compliance, quality
              management, cybersecurity, training, and business improvement.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="#blog-articles"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/15 transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
              >
                Explore articles
                <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/certification"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-bold text-[#0B1739] shadow-sm backdrop-blur-sm transition hover:border-red-200 hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
              >
                Browse certifications
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="w-full">
            <div className="mx-auto max-w-lg rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_60px_-32px_rgba(11,23,57,0.3)] backdrop-blur-md sm:p-6 lg:ml-auto lg:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
                  <BookOpen aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">
                    Explore topics
                  </p>
                  <p className="mt-1 text-base font-bold text-[#0B1739] sm:text-lg">
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
                    className="rounded-full border border-red-100 bg-red-50 px-3 py-2 text-xs font-semibold text-red-800"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
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

