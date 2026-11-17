'use client';

import { useState } from 'react';
import { BadgeCheck, Search, ShieldCheck } from 'lucide-react';

export default function CertificateVerificationPage() {
  const [certNumber, setCertNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    if (!certNumber.trim()) return;

    setLoading(true);
    setSearched(false);

    setTimeout(() => {
      setResult(null);
      setSearched(true);
      setLoading(false);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-20 font-sans text-[#0B1739]">
      <section className="relative isolate overflow-hidden bg-[#0B1739] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-56 h-[34rem] w-[34rem] rounded-full border-[60px] border-white/[0.04] sm:-right-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:text-sm">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-red-400" />
            Certification verification
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Search for ISO <span className="text-red-500">Certifications</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Verify certifications issued by ACE-CERT. Enter the certificate
            number below to check its authenticity and validity.
          </p>
        </div>
      </section>

      <section
        aria-label="Certificate search"
        className="relative z-10 mx-auto -mt-8 max-w-3xl px-4 sm:-mt-10 sm:px-6"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(11,23,57,0.12)] sm:p-8 md:p-10">
          <div className="mb-6">
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Find a certificate
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Enter the certificate number exactly as it appears on the
              certificate.
            </p>
          </div>

          <form onSubmit={handleSearch} className="space-y-3">
            <label
              htmlFor="certNumber"
              className="block text-sm font-semibold text-[#0B1739]"
            >
              Certificate number <span className="text-red-600">*</span>
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                id="certNumber"
                required
                placeholder="e.g. ACE-123456"
                value={certNumber}
                onChange={(event) => setCertNumber(event.target.value)}
                className="min-h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-[#0B1739] placeholder:text-slate-400 focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-600/10"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-14 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 px-7 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(220,38,38,0.8)] transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
              >
                {loading ? 'Searching...' : 'Search'}
                {!loading && <Search aria-hidden="true" className="h-4 w-4" />}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section
        aria-live="polite"
        className="mx-auto mt-10 max-w-3xl px-4 sm:px-6"
      >
        <h2 className="text-lg font-semibold tracking-tight">Search results</h2>

        {!searched && !loading && (
          <div className="mt-4 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <BadgeCheck aria-hidden="true" className="h-5 w-5" />
            </span>
            <p className="pt-1 text-sm leading-6 text-slate-600">
              Results matching your search will appear here.
            </p>
          </div>
        )}

        {searched && (
          <div className="mt-4">
            {result ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" />
            ) : (
              <div className="rounded-2xl border border-red-100 bg-white p-5 sm:p-6">
                <p className="text-sm font-semibold text-[#0B1739]">
                  No certification record found for{' '}
                  <span className="font-mono text-red-600">
                    &quot;{certNumber}&quot;
                  </span>
                  .
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Please check the certificate number and try again.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}