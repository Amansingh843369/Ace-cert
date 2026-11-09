'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, ChevronDown, Globe2, Search } from 'lucide-react';

const popularCountries = [
  'United Kingdom', 'Australia', 'United States', 'India', 'China', 'Denmark',
  'Spain', 'Netherlands', 'Singapore', 'Sri Lanka', 'Portugal', 'Japan',
];

const countryCodes = {
  Afghanistan: 'AF', Albania: 'AL', Algeria: 'DZ', Andorra: 'AD', Angola: 'AO', Argentina: 'AR', Armenia: 'AM', Australia: 'AU', Austria: 'AT', Azerbaijan: 'AZ',
  Bahamas: 'BS', Bahrain: 'BH', Bangladesh: 'BD', Barbados: 'BB', Belgium: 'BE', Belize: 'BZ', Benin: 'BJ', Bhutan: 'BT', Bolivia: 'BO', Brazil: 'BR',
  Brunei: 'BN', Bulgaria: 'BG', Cambodia: 'KH', Cameroon: 'CM', Canada: 'CA', Chile: 'CL', China: 'CN', Colombia: 'CO', 'Costa Rica': 'CR', Croatia: 'HR',
  Cyprus: 'CY', Czechia: 'CZ', Denmark: 'DK', 'Dominican Republic': 'DO', Ecuador: 'EC', Egypt: 'EG', Estonia: 'EE', Ethiopia: 'ET', Finland: 'FI', France: 'FR',
  Georgia: 'GE', Germany: 'DE', Ghana: 'GH', Greece: 'GR', 'Hong Kong': 'HK', Hungary: 'HU', Iceland: 'IS', Indonesia: 'ID', Iraq: 'IQ', Ireland: 'IE',
  Israel: 'IL', Italy: 'IT', Japan: 'JP', Jordan: 'JO', Kazakhstan: 'KZ', Kenya: 'KE', Kuwait: 'KW', Latvia: 'LV', Lebanon: 'LB', Lithuania: 'LT',
  Luxembourg: 'LU', Malaysia: 'MY', Maldives: 'MV', Malta: 'MT', Mauritius: 'MU', Mexico: 'MX', Monaco: 'MC', Mongolia: 'MN', Morocco: 'MA', Nepal: 'NP',
  Netherlands: 'NL', 'New Zealand': 'NZ', Nigeria: 'NG', Norway: 'NO', Oman: 'OM', Pakistan: 'PK', Panama: 'PA', Peru: 'PE', Philippines: 'PH', Poland: 'PL',
  Portugal: 'PT', Qatar: 'QA', Romania: 'RO', 'Saudi Arabia': 'SA', Serbia: 'RS', Singapore: 'SG', 'South Africa': 'ZA', 'South Korea': 'KR', Spain: 'ES', 'Sri Lanka': 'LK',
  Sweden: 'SE', Switzerland: 'CH', Taiwan: 'TW', Thailand: 'TH', Türkiye: 'TR', Ukraine: 'UA', 'United Arab Emirates': 'AE', 'United Kingdom': 'GB', 'United States': 'US', Vietnam: 'VN',
};

function getFlag(country) {
  const code = countryCodes[country];
  if (!code) return '🌐';
  return String.fromCodePoint(...[...code].map((letter) => 127397 + letter.charCodeAt(0)));
}

export default function CountryDestinationPicker({ countries }) {
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredCountries = useMemo(
    () => countries.filter((country) => country.toLocaleLowerCase().includes(normalizedQuery)),
    [countries, normalizedQuery],
  );
  const destinations = normalizedQuery
    ? filteredCountries
    : showAll
      ? countries
      : popularCountries.filter((country) => countries.includes(country));

  return (
      <section aria-labelledby="destination-picker-title" className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-red-100 bg-white shadow-[0_22px_65px_rgba(185,28,28,.12)] sm:rounded-[2rem]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#101d3a] to-[#27152b] px-4 py-6 text-white sm:px-8 sm:py-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[.12] [background-image:radial-gradient(#fca5a5_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(90deg,transparent,black)]" />
        <div aria-hidden="true" className="presence-orbit absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/10"><div className="absolute inset-8 rounded-full border border-red-300/20" /><div className="absolute inset-16 rounded-full border border-white/10" /><span className="presence-float absolute bottom-10 left-8 h-2 w-2 rounded-full bg-red-300 shadow-[0_0_0_5px_rgba(252,165,165,.12)]" /></div>
        <span aria-hidden="true" className="presence-float absolute left-[12%] top-10 hidden h-2 w-2 rounded-full bg-red-300 shadow-[0_0_0_5px_rgba(252,165,165,.12)] sm:block" />
        <span aria-hidden="true" className="presence-float-delayed absolute right-[18%] top-16 hidden h-2.5 w-2.5 rounded-full bg-red-300 shadow-[0_0_0_5px_rgba(252,165,165,.12)] sm:block" />
        <div className="relative flex flex-col gap-2 text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-red-300 sm:text-xs">ACE-CERT · International coverage</p>
          <h3 id="destination-picker-title" className="text-2xl font-extrabold tracking-tight sm:text-3xl">Choose your destination</h3>
          <p className="mx-auto max-w-xl text-sm leading-6 text-slate-300">Find your country and explore international certification support.</p>
        </div>
        <div className="relative mx-auto mt-6 max-w-2xl">
          <label className="flex min-h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-slate-500 shadow-lg shadow-slate-950/10 focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-300/20">
            <Search className="h-4 w-4 shrink-0 text-red-700" aria-hidden="true" />
            <span className="sr-only">Search destinations</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search a country or destination" className="w-full border-0 bg-transparent text-sm font-medium text-[#101d3a] outline-none placeholder:text-slate-400 focus:ring-0" />
            {query && <button type="button" onClick={() => setQuery('')} className="rounded-md px-2 py-1 text-xs font-bold text-red-700 hover:bg-red-50">Clear</button>}
          </label>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-300" />
      </div>

        <div className="bg-gradient-to-b from-red-50/30 to-white p-3 sm:p-6 lg:p-9">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-red-700">{normalizedQuery ? 'Search results' : showAll ? 'All supported countries' : 'Popular destinations'}</p>
            <p className="mt-1 text-xs text-slate-500">{normalizedQuery ? `${filteredCountries.length} matching destinations` : `${countries.length} countries and territories`}</p>
          </div>
          {!normalizedQuery && <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-800 ring-1 ring-red-100"><Globe2 className="h-3.5 w-3.5 text-red-600" aria-hidden="true" />{countries.length}</span>}
        </div>

        {!normalizedQuery && !showAll ? (
          <ul className="grid overflow-hidden rounded-2xl border border-red-100 bg-white sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((country, index) => (
              <li key={country} className={`group min-w-0 border-slate-100 ${index % 2 === 0 ? 'sm:border-r' : ''} ${index < destinations.length - 1 ? 'border-b lg:border-b-0' : ''} ${index % 3 !== 2 ? 'lg:border-r' : ''}`}>
                <LinkDestination country={country} />
              </li>
            ))}
          </ul>
        ) : (
          destinations.length ? (
            <ul className="grid overflow-hidden rounded-2xl border border-red-100 bg-white sm:grid-cols-2 lg:grid-cols-3">
              {destinations.map((country, index) => (
                <li key={country} className={`group min-w-0 border-slate-100 ${index % 2 === 0 ? 'sm:border-r' : ''} ${index < destinations.length - 1 ? 'border-b lg:border-b-0' : ''} ${index % 3 !== 2 ? 'lg:border-r' : ''}`}>
                  <LinkDestination country={country} />
                </li>
              ))}
            </ul>
          ) : <p className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm font-medium text-slate-600">No destinations match “{query}”. Try another country name.</p>
        )}

        {!normalizedQuery && (
          <div className="mt-5 flex justify-center">
            <button type="button" onClick={() => setShowAll((value) => !value)} aria-expanded={showAll} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-red-700 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-[#101d3a] focus:outline-none focus:ring-4 focus:ring-red-200 sm:text-sm">
              {showAll ? 'Show popular destinations' : 'Show all supported countries'}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function LinkDestination({ country, compact = false }) {
  return (
    <a href={`/contact?region=international&country=${encodeURIComponent(country)}`} className={`group flex min-h-12 items-center justify-between gap-3 px-3 py-2.5 transition duration-200 hover:bg-gradient-to-r hover:from-red-50 hover:to-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500 ${compact ? 'rounded-lg' : 'sm:px-4'}`}>
      <span className="flex min-w-0 items-center gap-3">
        <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg leading-none ring-1 ring-slate-100 transition group-hover:bg-white group-hover:ring-red-100">{getFlag(country)}</span>
        <span className="truncate text-xs font-semibold text-[#101d3a] group-hover:text-red-800 sm:text-sm">{country}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-red-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </a>
  );
}