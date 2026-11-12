'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Filter, Search, Settings2, ShieldCheck, Globe, Award } from 'lucide-react';

const ISO_STANDARDS = [
  { code: 'ISO 9001', title: 'Quality Management Systems', href: '/iso-9001-2015-certification', type: 'ISO STANDARD' },
  { code: 'ISO 10002', title: 'Customer Satisfaction & Complaints Handling', href: '/iso-10002-certification', type: 'ISO STANDARD' },
  { code: 'ISO 13009', title: 'Beach Operations Management', href: '/iso-13009-certification', type: 'ISO STANDARD' },
  { code: 'ISO 13485', title: 'Medical Devices Quality Management', href: '/iso-13485-certification', type: 'ISO STANDARD' },
  { code: 'ISO 14001', title: 'Environmental Management Systems', href: '/iso-14001-certification', type: 'ISO STANDARD' },
  { code: 'ISO 14064', title: 'Greenhouse Gas Accounting & Verification', href: '/iso-14064-certification', type: 'ISO STANDARD' },
  { code: 'ISO 20000-1', title: 'IT Service Management', href: '/iso-20000-1-certification', type: 'ISO STANDARD' },
  { code: 'ISO 20121', title: 'Sustainable Event Management', href: '/iso-20121-certification', type: 'ISO STANDARD' },
  { code: 'ISO 21001', title: 'Educational Organizations Management', href: '/iso-21001-certification', type: 'ISO STANDARD' },
  { code: 'ISO 21401', title: 'Sustainability for Accommodation', href: '/iso-21401-certification', type: 'ISO STANDARD' },
  { code: 'ISO 22000', title: 'Food Safety Management Systems', href: '/iso-22000-certification', type: 'ISO STANDARD' },
  { code: 'ISO 22301', title: 'Business Continuity Management', href: '/iso-22301-certification', type: 'ISO STANDARD' },
  { code: 'ISO 26000', title: 'Social Responsibility Guidance', href: '/iso-26000-certification', type: 'ISO STANDARD' },
  { code: 'ISO 27001', title: 'Information Security Management', href: '/iso-27001-certification', type: 'ISO STANDARD' },
  { code: 'ISO 27017', title: 'Cloud Security Controls', href: '/iso-27017-certification', type: 'ISO STANDARD' },
  { code: 'ISO 27018', title: 'Protection of Personal Data in the Cloud', href: '/iso-27018-certification', type: 'ISO STANDARD' },
  { code: 'ISO 27701', title: 'Privacy Information Management', href: '/iso-27701-certification', type: 'ISO STANDARD' },
  { code: 'ISO 28000', title: 'Supply Chain Security Management', href: '/iso-28000-certification', type: 'ISO STANDARD' },
  { code: 'ISO 29000', title: 'Quality Management for Petroleum & Petrochemical', href: '/iso-29000-certification', type: 'ISO STANDARD' },
  { code: 'ISO 30000', title: 'Ship Recycling Management', href: '/iso-30000-certification', type: 'ISO STANDARD' },
  { code: 'ISO 31000', title: 'Risk Management Guidelines', href: '/iso-31000-certification', type: 'ISO STANDARD' },
  { code: 'ISO 37001', title: 'Anti-Bribery Management Systems', href: '/iso-37001-certification', type: 'ISO STANDARD' },
  { code: 'ISO 37301', title: 'Compliance Management Systems', href: '/iso-37301-certification', type: 'ISO STANDARD' },
  { code: 'ISO 41001', title: 'Facility Management Systems', href: '/iso-41001-certification', type: 'ISO STANDARD' },
  { code: 'ISO 42001', title: 'Artificial Intelligence Management', href: '/iso-42001-certification', type: 'ISO STANDARD' },
  { code: 'ISO 45001', title: 'Occupational Health & Safety', href: '/iso-45001-certification', type: 'ISO STANDARD' },
  { code: 'ISO 45003', title: 'Psychological Health & Safety at Work', href: '/iso-45003-certification', type: 'ISO STANDARD' },
  { code: 'ISO 50001', title: 'Energy Management Systems', href: '/iso-50001-certification', type: 'ISO STANDARD' },
  { code: 'ISO 55000', title: 'Asset Management', href: '/iso-55000-certification', type: 'ISO STANDARD' },
  { code: 'ISO 22716', title: 'Cosmetics Good Manufacturing Practices', href: '/contact?standard=ISO%2022716', type: 'ISO STANDARD' },
  { code: 'ISO 24161', title: 'Waste Collection & Transportation Management', href: '/contact?standard=ISO%2024161', type: 'ISO STANDARD' },
  { code: 'ISO 27002', title: 'Information Security Controls', href: '/contact?standard=ISO%2027002', type: 'ISO STANDARD' },
  { code: 'ISO 29001', title: 'Oil, Gas & Petrochemical Quality Management', href: '/contact?standard=ISO%2029001', type: 'ISO STANDARD' },
  { code: 'ISO 55001', title: 'Asset Management System', href: '/contact?standard=ISO%2055001', type: 'ISO STANDARD' },
  { code: 'IATF 16949', title: 'Automotive Quality Management System', href: '/contact?standard=IATF%2016949', type: 'ISO STANDARD' },
  { code: 'FSSC 22000', title: 'Food Safety System Certification', href: '/contact?standard=FSSC%2022000', type: 'FOOD SAFETY' },
  { code: 'HACCP', title: 'Hazard Analysis & Critical Control Points', href: '/haccp', type: 'FOOD SAFETY' },
  { code: 'HALAL', title: 'Halal Certification', href: '/halal', type: 'CERTIFICATION' },
  { code: 'GMP', title: 'Good Manufacturing Practices', href: '/contact?standard=GMP', type: 'PRACTICE' },
  { code: 'GLP', title: 'Good Laboratory Practices', href: '/contact?standard=GLP', type: 'PRACTICE' },
  { code: 'GDP', title: 'Good Distribution Practices', href: '/gdp', type: 'PRACTICE' },
  { code: 'GWP', title: 'Good Warehousing Practices', href: '/contact?standard=GWP', type: 'PRACTICE' },
  { code: 'GHP', title: 'Good Hygiene Practices', href: '/contact?standard=GHP', type: 'PRACTICE' },
  { code: 'GDPR', title: 'General Data Protection Regulation Compliance', href: '/contact?standard=GDPR', type: 'COMPLIANCE' },
  { code: 'SOC 2 Type 1', title: 'Service Organization Controls — Type 1', href: '/contact?standard=SOC%202%20Type%201', type: 'COMPLIANCE' },
  { code: 'SOC 2 Type 2', title: 'Service Organization Controls — Type 2', href: '/contact?standard=SOC%202%20Type%202', type: 'COMPLIANCE' },
  { code: 'PCI DSS', title: 'Payment Card Industry Data Security Standard', href: '/contact?standard=PCI%20DSS', type: 'COMPLIANCE' },
  { code: 'VAPT', title: 'Vulnerability Assessment & Penetration Testing', href: '/contact?standard=VAPT', type: 'COMPLIANCE' },
  { code: 'CMMI', title: 'Capability Maturity Model Integration', href: '/contact?standard=CMMI', type: 'FRAMEWORK' },
  { code: 'DPDPA India', title: 'Digital Personal Data Protection Act Compliance', href: '/contact?standard=DPDPA%20India', type: 'COMPLIANCE' },
  { code: 'HIPAA', title: 'Health Information Privacy Compliance', href: '/contact?standard=HIPAA', type: 'COMPLIANCE' },
  { code: 'CE Marking', title: 'European Product Conformity', href: '/contact?standard=CE%20Marking', type: 'REGULATORY' },
];

const FILTER_OPTIONS = [
  { value: 'ALL', label: 'All Certifications', count: ISO_STANDARDS.length },
  {
    value: 'ISO STANDARD',
    label: 'ISO Standards',
    count: ISO_STANDARDS.filter(({ type }) => type === 'ISO STANDARD').length,
  },
  {
    value: 'OTHER',
    label: 'Other Certifications',
    count: ISO_STANDARDS.filter(({ type }) => type !== 'ISO STANDARD').length,
  },
];

export default function ManagementCertificationDirectory() {
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');

  const filteredStandards = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return ISO_STANDARDS.filter(({ code, title, type }) => {
      const matchesQuery = `${code} ${title} ${type}`.toLowerCase().includes(normalizedQuery);
      const matchesType =
        selectedType === 'ALL' ||
        (selectedType === 'OTHER' ? type !== 'ISO STANDARD' : type === selectedType);
      return matchesQuery && matchesType;
    });
  }, [query, selectedType]);

  const selectedFilterCount =
    FILTER_OPTIONS.find(({ value }) => value === selectedType)?.count ?? ISO_STANDARDS.length;

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
                {ISO_STANDARDS.length} Standards
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
