'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Filter, Search, Settings2, ShieldCheck, Globe, Award } from 'lucide-react';
import { certifications as ISO_STANDARDS } from '../../data/certifications';

const DIRECTORY_STANDARDS = ISO_STANDARDS.filter(({ code }) => code !== 'CE Marking');

const FILTER_OPTIONS = [
  { value: 'ALL', label: 'All Certifications', count: DIRECTORY_STANDARDS.length },
  {
    value: 'ISO STANDARD',
    label: 'ISO Standards',
    count: DIRECTORY_STANDARDS.filter(({ type }) => type === 'ISO STANDARD').length,
  },
  {
    value: 'OTHER',
    label: 'Other Certifications',
    count: DIRECTORY_STANDARDS.filter(({ type }) => type !== 'ISO STANDARD').length,
  },
];

export default function ManagementCertificationDirectory() {
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');

  const filteredStandards = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return DIRECTORY_STANDARDS.filter(({ code, title, type }) => {
      const matchesQuery = `${code} ${title} ${type}`.toLowerCase().includes(normalizedQuery);
      const matchesType =
        selectedType === 'ALL' ||
        (selectedType === 'OTHER' ? type !== 'ISO STANDARD' : type === selectedType);
      return matchesQuery && matchesType;
    });
  }, [query, selectedType]);

  const selectedFilterCount =
    FILTER_OPTIONS.find(({ value }) => value === selectedType)?.count ?? DIRECTORY_STANDARDS.length;

  return (
    <main className="min-h-screen bg-white text-[#1c2448]">
      <section className="relative border-b border-red-100 bg-gradient-to-br from-red-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=85')] bg-cover bg-center opacity-[0.10] pointer-events-none" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-14">
          {/* Left: Content */}
          <div className="min-w-0 space-y-4">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-sm shadow-red-600/25">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-[#E30613]" />
                </span>
                ACE Certifications
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-600 tracking-wider uppercase sm:text-xs">
                {DIRECTORY_STANDARDS.length} Standards
              </span>
            </div>
            <h1 className="max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-tight text-[#1c2448] sm:text-4xl md:text-5xl">
              ACE Cert <span className="text-red-600">Certification</span>
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-[#1c2448]/80 sm:text-base sm:leading-8 md:text-lg">
              Explore our complete range of ISO management system certifications — from quality and
              environment to security and food safety. Search by ISO number or standard name to find
              the right certification for your organization.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1c2448]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>Internationally Recognized</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-[#1c2448]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <Award className="h-3 w-3" />
                </span>
                <span>Global Accreditation</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-[#1c2448]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <Globe className="h-3 w-3" />
                </span>
                <span>Industry Trusted</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex min-w-0 items-center justify-center">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-red-100 shadow-2xl shadow-red-200/40">
              <Image
                src="/ace-cert-building-banner.png"
                alt="ACE-CERT certification with a globe in front of a modern office building"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="ISO certification standards"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
      >
        <div className="lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:items-start lg:gap-6">
          <aside className="mb-4 rounded-2xl border border-[#1c2448]/15 bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:mb-0">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-[#1c2448]">
              <Filter className="h-4 w-4 text-red-600" aria-hidden="true" />
              Filter By
            </h2>
            <div className="grid grid-cols-3 gap-2 lg:flex lg:flex-col">
              {FILTER_OPTIONS.map(({ value, label, count }) => {
                const isSelected = selectedType === value;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedType(value)}
                    className={`flex min-w-0 flex-col items-start justify-between gap-1 rounded-xl border px-3 py-2.5 text-left text-xs transition-colors sm:text-sm lg:flex-row lg:items-center ${
                      isSelected
                        ? 'border-[#1c2448] bg-[#1c2448] font-semibold text-white'
                        : 'border-transparent text-[#1c2448] hover:border-red-100 hover:bg-red-50'
                    }`}
                  >
                    <span>{label}</span>
                    <span className={`text-[11px] ${isSelected ? 'text-white/75' : 'text-[#1c2448]/65'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:gap-5">
              <label className="relative block w-full max-w-xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-red-600" aria-hidden="true" />
                <span className="sr-only">Search ISO certifications</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search ISO, e.g. ISO 9001 or security"
                  className="w-full rounded-xl border border-red-200 bg-white py-3.5 pl-12 pr-4 text-sm shadow-sm outline-none transition placeholder:text-slate-500 focus:border-red-500 focus:ring-4 focus:ring-red-100 sm:rounded-2xl sm:py-4 sm:text-base"
                />
              </label>
              <p className="flex items-center gap-2 text-sm font-medium text-[#1c2448]/75" aria-live="polite">
                <Settings2 className="h-4 w-4 text-[#1c2448]" aria-hidden="true" />
                Showing {filteredStandards.length} of {selectedFilterCount} standards
              </p>
            </div>

            {filteredStandards.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
                {filteredStandards.map(({ code, title, href, type }) => (
                  <Link
                    key={code}
                    href={href}
                    className="group min-w-0 overflow-hidden rounded-2xl border border-[#1c2448]/15 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-red-200"
                  >
                    <div className="flex h-16 items-center justify-between bg-gradient-to-r from-red-700 to-red-600 px-4 sm:h-20 sm:px-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#1c2448] shadow-sm sm:h-12 sm:w-12 sm:rounded-xl">
                        <Settings2 className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                      </span>
                      <span className="rounded-lg bg-white px-2 py-1 text-[9px] font-bold tracking-wide text-[#1c2448] sm:px-2.5 sm:py-1.5 sm:text-xs">
                        {type}
                      </span>
                    </div>
                    <div className="flex min-h-24 items-start justify-between gap-2 p-4 sm:min-h-28 sm:gap-3 sm:p-5">
                      <div className="min-w-0">
                        <h2 className="break-words text-lg font-extrabold text-[#1c2448] sm:text-xl">{code}</h2>
                        <p className="mt-1.5 text-xs sm:text-sm leading-6 text-[#1c2448]/75">{title}</p>
                      </div>
                      <ArrowUpRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#1c2448] transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-[#1c2448]/15 bg-white px-6 py-10 text-center text-[#1c2448]/75">
                No standards found. Try another ISO number or keyword.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
