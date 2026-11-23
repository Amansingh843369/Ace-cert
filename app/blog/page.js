import Image from 'next/image';
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
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-red-300 sm:text-sm">
            ACE-CERT Insights
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Blog &amp; Insights
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Read practical guides about ISO certification, compliance, quality
            management, cybersecurity, training, and business improvement.
          </p>
        </div>
      </section>
      <BlogSection showFilters />
    </main>
  );
}

