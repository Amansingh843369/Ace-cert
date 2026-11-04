'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, Settings2, ArrowUpRight } from 'lucide-react';

const ISO_STANDARDS = [
  { code: 'ISO 9001', title: 'Quality Management Systems', href: '/iso-9001-2015-certification' },
  { code: 'ISO 10002', title: 'Customer Satisfaction & Complaints Handling', href: '/iso-10002-certification' },
  { code: 'ISO 13009', title: 'Beach Operations Management', href: '/iso-13009-certification' },
  { code: 'ISO 13485', title: 'Medical Devices Quality Management', href: '/iso-13485-certification' },
  { code: 'ISO 14001', title: 'Environmental Management Systems', href: '/iso-14001-certification' },
  { code: 'ISO 14064', title: 'Greenhouse Gas Accounting & Verification', href: '/iso-14064-certification' },
  { code: 'ISO 20000-1', title: 'IT Service Management', href: '/iso-20000-1-certification' },
  { code: 'ISO 20121', title: 'Sustainable Event Management', href: '/iso-20121-certification' },
  { code: 'ISO 21001', title: 'Educational Organizations Management', href: '/iso-21001-certification' },
  { code: 'ISO 21401', title: 'Sustainability for Accommodation', href: '/iso-21401-certification' },
  { code: 'ISO 22000', title: 'Food Safety Management Systems', href: '/iso-22000-certification' },
  { code: 'ISO 22301', title: 'Business Continuity Management', href: '/iso-22301-certification' },
  { code: 'ISO 26000', title: 'Social Responsibility Guidance', href: '/iso-26000-certification' },
  { code: 'ISO 27001', title: 'Information Security Management', href: '/iso-27001-certification' },
  { code: 'ISO 27017', title: 'Cloud Security Controls', href: '/iso-27017-certification' },
  { code: 'ISO 27018', title: 'Protection of Personal Data in the Cloud', href: '/iso-27018-certification' },
  { code: 'ISO 27701', title: 'Privacy Information Management', href: '/iso-27701-certification' },
  { code: 'ISO 28000', title: 'Supply Chain Security Management', href: '/iso-28000-certification' },
  { code: 'ISO 29000', title: 'Quality Management for Petroleum & Petrochemical', href: '/iso-29000-certification' },
  { code: 'ISO 30000', title: 'Ship Recycling Management', href: '/iso-30000-certification' },
  { code: 'ISO 31000', title: 'Risk Management Guidelines', href: '/iso-31000-certification' },
  { code: 'ISO 37001', title: 'Anti-Bribery Management Systems', href: '/iso-37001-certification' },
  { code: 'ISO 37301', title: 'Compliance Management Systems', href: '/iso-37301-certification' },
  { code: 'ISO 41001', title: 'Facility Management Systems', href: '/iso-41001-certification' },
  { code: 'ISO 42001', title: 'Artificial Intelligence Management', href: '/iso-42001-certification' },
  { code: 'ISO 45001', title: 'Occupational Health & Safety', href: '/iso-45001-certification' },
  { code: 'ISO 45003', title: 'Psychological Health & Safety at Work', href: '/iso-45003-certification' },
  { code: 'ISO 50001', title: 'Energy Management Systems', href: '/iso-50001-certification' },
  { code: 'ISO 55000', title: 'Asset Management', href: '/iso-55000-certification' },
];

export default function ManagementCertificationDirectory() {
  const [query, setQuery] = useState('');
  const filteredStandards = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return ISO_STANDARDS;
    return ISO_STANDARDS.filter(({ code, title }) => `${code} ${title}`.toLowerCase().includes(normalizedQuery));
  }, [query]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-red-100 bg-gradient-to-br from-red-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-700 sm:text-sm">ACE Certifications</p>
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Management System <span className="text-red-600">Certifications</span></h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">Explore our ISO certification standards. Search by ISO number or management system, then select a standard to view its certification page.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" aria-label="ISO certification standards">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:gap-5">
          <label className="relative block w-full max-w-xl">
            <Search aria-hidden="true" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-red-600" />
            <span className="sr-only">Search ISO certifications</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search ISO, e.g. ISO 9001 or security" className="w-full rounded-xl border border-red-200 bg-white py-3.5 pl-12 pr-4 text-sm shadow-sm outline-none transition placeholder:text-slate-500 focus:border-red-500 focus:ring-4 focus:ring-red-100 sm:rounded-2xl sm:py-4 sm:text-base" />
          </label>
          <p className="flex items-center gap-2 text-sm font-medium text-slate-600" aria-live="polite"><Settings2 aria-hidden="true" className="h-4 w-4 text-red-600" />Showing {filteredStandards.length} of {ISO_STANDARDS.length} standards</p>
        </div>

        {filteredStandards.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {filteredStandards.map(({ code, title, href }) => (
              <Link key={code} href={href} className="group min-w-0 overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-200">
                <div className="flex h-20 items-center justify-between bg-gradient-to-r from-red-700 to-red-600 px-4 sm:h-24 sm:px-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-red-700 shadow-md sm:h-14 sm:w-14 sm:rounded-2xl"><Settings2 aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" /></span>
                  <span className="rounded-lg bg-white px-2.5 py-1.5 text-[10px] font-bold tracking-wide text-red-700 sm:px-3 sm:py-2 sm:text-xs">ISO STANDARD</span>
                </div>
                <div className="flex min-h-28 items-start justify-between gap-3 p-4 sm:min-h-32 sm:gap-4 sm:p-6">
                  <div className="min-w-0"><h2 className="break-words text-lg font-extrabold text-slate-900 sm:text-xl">{code}</h2><p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{title}</p></div>
                  <ArrowUpRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-red-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-red-200 bg-red-50/40 px-5 py-12 text-center sm:px-6 sm:py-14"><h2 className="text-lg font-bold text-slate-900">No ISO standards found</h2><p className="mt-2 text-sm text-slate-600 sm:text-base">Try another ISO number or search term.</p></div>
        )}
      </section>
    </main>
  );
}
