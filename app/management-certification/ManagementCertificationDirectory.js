'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search, Settings2 } from 'lucide-react';
import { certifications as ISO_STANDARDS } from '../../data/certifications';

const DIRECTORY_STANDARDS = ISO_STANDARDS.filter(({ code }) => code !== 'CE Marking');

export default function ManagementCertificationDirectory({ initialStandards }) {
  const [query, setQuery] = useState('');
  const standards = useMemo(
    () => Array.isArray(initialStandards) && initialStandards.length > 0
      ? initialStandards.filter(({ code }) => code !== 'CE Marking')
      : DIRECTORY_STANDARDS,
    [initialStandards]
  );

  const filteredStandards = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return standards.filter(({ code, title, type }) =>
      `${code} ${title} ${type}`.toLowerCase().includes(normalizedQuery),
    );
  }, [query, standards]);

  return (
    <main className="min-h-screen bg-white text-[#1c2448]">
      <section aria-label="ACE certification banner" className="overflow-hidden border-b border-red-100 bg-white">
        <div className="sr-only">
          <h1>ACE Certification</h1>
          <p>
            Explore our complete range of management system certifications — from quality and
            environment to security and food safety. Search by standard number or standard name to
            find the right certification for your organization.
          </p>
          <ul>
            <li>Internationally Recognized</li>
            <li>Global Accreditation</li>
            <li>Industry Trusted</li>
          </ul>
        </div>
        <Image
          src="/certification-hero.png"
          alt="A framed certificate beside a globe and books"
          width={1600}
          height={653}
          sizes="100vw"
          priority
          className="h-auto w-full"
        />
      </section>

      <section
        aria-label="Certification standards"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
      >
        <div className="min-w-0">
            <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:gap-5">
              <label className="relative block w-full max-w-xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-red-600" aria-hidden="true" />
                <span className="sr-only">Search certifications</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by standard, e.g. 9001 or security"
                  className="w-full rounded-xl border border-red-200 bg-white py-3.5 pl-12 pr-4 text-sm shadow-sm outline-none transition placeholder:text-slate-500 focus:border-red-500 focus:ring-4 focus:ring-red-100 sm:rounded-2xl sm:py-4 sm:text-base"
                />
              </label>
              <p className="flex items-center gap-2 text-sm font-medium text-[#1c2448]/75" aria-live="polite">
                <Settings2 className="h-4 w-4 text-[#1c2448]" aria-hidden="true" />
                Showing {filteredStandards.length} standards
              </p>
            </div>

            {filteredStandards.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
                {filteredStandards.map(({ code, title, href, type }) => (
                  <Link
                    key={code}
                    href={href}
                    className="group min-w-0 overflow-hidden rounded-2xl border border-[#1c2448]/15 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-red-200"
                  >
                    <div className="flex h-16 items-center justify-between bg-gradient-to-r from-red-700 via-red-600 to-[#1c2448] px-4 sm:h-20 sm:px-5">
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
                No standards found. Try another standard number or keyword.
              </p>
            )}
        </div>
      </section>
    </main>
  );
}
