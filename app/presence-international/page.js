import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe2, ShieldCheck, Target, UsersRound, MapPin, Check, MoveUpRight, Compass } from 'lucide-react';
import CountryDestinationPicker from './CountryDestinationPicker';

export const metadata = {
  title: 'International ISO Certification Support | ACE-CERT',
  description: 'Explore international ISO certification support from ACE-CERT. View countries we serve and contact our team to discuss certification availability for your organization.',
  keywords: ['international ISO certification', 'global ISO certification support', 'ISO certification countries', 'ACE-CERT international presence'],
  alternates: { canonical: '/presence-international' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'International ISO Certification Support | ACE-CERT',
    description: 'View international markets supported by ACE-CERT and contact our team about ISO certification availability.',
    url: '/presence-international',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'International ISO Certification Support | ACE-CERT',
    description: 'Explore international markets supported by ACE-CERT for ISO certification.',
  },
};

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
  'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Brazil',
  'Brunei', 'Bulgaria', 'Cambodia', 'Cameroon', 'Canada', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Croatia',
  'Cyprus', 'Czechia', 'Denmark', 'Dominican Republic', 'Ecuador', 'Egypt', 'Estonia', 'Ethiopia', 'Finland', 'France',
  'Georgia', 'Germany', 'Ghana', 'Greece', 'Hong Kong', 'Hungary', 'Iceland', 'Indonesia', 'Iraq', 'Ireland',
  'Israel', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Latvia', 'Lebanon', 'Lithuania',
  'Luxembourg', 'Malaysia', 'Maldives', 'Malta', 'Mauritius', 'Mexico', 'Monaco', 'Mongolia', 'Morocco', 'Nepal',
  'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Peru', 'Philippines', 'Poland',
  'Portugal', 'Qatar', 'Romania', 'Saudi Arabia', 'Serbia', 'Singapore', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka',
  'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Türkiye', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Vietnam',
];

const countryRegions = [
  {
    name: 'Africa',
    description: 'North, West, East and Southern Africa',
    countries: ['Algeria', 'Angola', 'Benin', 'Cameroon', 'Egypt', 'Ethiopia', 'Ghana', 'Kenya', 'Mauritius', 'Morocco', 'Nigeria', 'South Africa'],
  },
  {
    name: 'Asia & Middle East',
    description: 'South, East, Southeast and West Asia',
    countries: ['Afghanistan', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Hong Kong', 'Indonesia', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia', 'Nepal', 'Oman', 'Pakistan', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Taiwan', 'Thailand', 'United Arab Emirates', 'Vietnam'],
  },
  {
    name: 'Europe',
    description: 'European countries and markets',
    countries: ['Albania', 'Andorra', 'Armenia', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Monaco', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Spain', 'Sweden', 'Switzerland', 'Türkiye', 'Ukraine', 'United Kingdom'],
  },
  {
    name: 'North America',
    description: 'North American markets',
    countries: ['Bahamas', 'Barbados', 'Belize', 'Canada', 'Costa Rica', 'Dominican Republic', 'Mexico', 'Panama', 'United States'],
  },
  {
    name: 'South America',
    description: 'South American markets',
    countries: ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Peru'],
  },
  {
    name: 'Oceania',
    description: 'Australia, New Zealand and Pacific markets',
    countries: ['Australia', 'New Zealand'],
  },
];

const benefits = [
  {
    title: 'International perspective',
    description: 'Support for organizations working across borders, sectors, and different market expectations.',
    icon: Globe2,
  },
  {
    title: 'Guidance that fits your goals',
    description: 'A clear certification journey shaped around your organization, scope, and chosen standard.',
    icon: Target,
  },
  {
    title: 'Experienced support',
    description: 'Work with a responsive team to understand requirements and prepare for each stage.',
    icon: UsersRound,
  },
];

export default function InternationalPresencePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ace-cert.com/' },
      { '@type': 'ListItem', position: 2, name: 'International', item: 'https://ace-cert.com/presence-international' },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative isolate overflow-hidden border-b border-red-100 bg-white text-slate-900">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,#fff_0%,#fff_54%,#fff1f2_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[.16] [background-image:radial-gradient(#f87171_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(90deg,transparent,black)]" />
        <div aria-hidden="true" className="presence-orbit absolute -right-36 -top-24 -z-10 h-[340px] w-[340px] rounded-full border border-red-100 sm:-right-24 sm:-top-32 sm:h-[520px] sm:w-[520px]"><div className="absolute inset-10 rounded-full border border-red-100 sm:inset-12" /><div className="absolute inset-20 rounded-full border border-red-100 sm:inset-28" /><div className="absolute inset-28 rounded-full bg-red-100/60 blur-3xl sm:inset-44" /><span className="presence-float absolute left-14 top-20 h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_7px_rgba(248,113,113,.12)] sm:left-20 sm:top-32" /><span className="presence-float-delayed absolute bottom-16 right-16 h-2 w-2 rounded-full bg-red-400 shadow-[0_0_0_6px_rgba(248,113,113,.12)] sm:bottom-24 sm:right-28" /></div>
        <div aria-hidden="true" className="pointer-events-none absolute left-[48%] top-28 hidden h-8 w-8 rotate-12 text-red-500/70 sm:block"><svg viewBox="0 0 32 32" fill="none"><path d="M16 3 29 27H3L16 3Z" stroke="currentColor" strokeWidth="2.5" /></svg></div>
        <span aria-hidden="true" className="presence-float pointer-events-none absolute left-[52%] top-24 hidden h-2 w-2 rounded-full bg-red-400 sm:block" />
        <span aria-hidden="true" className="presence-float-delayed pointer-events-none absolute right-[43%] top-44 hidden h-2.5 w-2.5 rounded-full bg-red-300 sm:block" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-100" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:gap-10 sm:px-8 sm:py-14 lg:grid-cols-[1.15fr_.85fr] lg:items-start lg:gap-16 lg:px-10 lg:pb-16 lg:pt-6">
          <div className="relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500 sm:mb-8 sm:text-sm"><ol className="flex flex-wrap items-center gap-1.5 sm:gap-2"><li><Link href="/" className="hover:text-red-700">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-semibold text-red-700">International</li></ol></nav>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.13em] text-red-700 shadow-sm sm:mb-5 sm:px-3.5 sm:py-2 sm:text-xs sm:tracking-[.16em]"><Globe2 className="h-4 w-4" /> ACE-CERT · International</p>
            <h1 className="max-w-3xl text-balance text-[2.15rem] font-extrabold leading-[1.06] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Your standards. <span className="text-red-700">A world of opportunity.</span></h1>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">Practical ISO certification support for organizations with global ambitions. Explore the markets we support and talk with our team about your certification goals.</p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
              <Link href="/contact?region=international" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(185,28,28,.2)] transition hover:-translate-y-0.5 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300/40 sm:w-auto">Discuss your requirements <ArrowRight className="h-4 w-4" /></Link>
              <a href="#markets-heading" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-800 transition hover:border-red-400 hover:bg-red-50 sm:w-auto">Explore countries <MoveUpRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-7 flex items-center gap-3 text-xs leading-5 text-slate-600 sm:mt-10 sm:text-sm"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50"><MapPin className="h-4 w-4 text-red-700" /></span>Serving organizations across international markets</div>
          </div>
          <figure className="presence-image relative mx-auto aspect-[5/4] w-full max-w-lg overflow-hidden rounded-[1.5rem] border border-red-100 shadow-[0_22px_55px_rgba(185,28,28,.14)] sm:aspect-[5/4] sm:rounded-[2rem] lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85"
              alt="International business team collaborating around a table"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#101d3a]/90 via-[#101d3a]/15 to-red-950/10" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,rgba(220,38,38,.18),transparent_48%)]" />
            <svg aria-hidden="true" viewBox="0 0 480 600" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full text-white/55">
              <path d="M48 154C119 104 177 217 239 174S356 111 432 154M61 262C133 218 188 306 266 260S365 215 420 252" fill="none" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1.5" />
              <circle cx="48" cy="154" r="4" fill="currentColor" />
              <circle cx="239" cy="174" r="4" fill="currentColor" />
              <circle cx="432" cy="154" r="4" fill="currentColor" />
              <circle cx="61" cy="262" r="3" fill="currentColor" />
              <circle cx="266" cy="260" r="3" fill="currentColor" />
              <circle cx="420" cy="252" r="3" fill="currentColor" />
            </svg>
            <div className="absolute left-4 top-4 flex items-center gap-2.5 rounded-xl border border-white/25 bg-[#101d3a]/55 px-3 py-2 text-white shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-red-100"><Globe2 className="h-4 w-4" aria-hidden="true" /></span>
              <span><span className="block text-[9px] font-bold uppercase tracking-[.15em] text-white/70">Global network</span><span className="mt-0.5 block text-xs font-extrabold">{countries.length} markets</span></span>
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <h2 className="max-w-sm text-xl font-extrabold leading-tight tracking-tight sm:text-3xl">Local context.<br />Global standards.</h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">Practical certification guidance for organizations working across borders.</p>
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-white/90"><ShieldCheck className="h-4 w-4 text-red-200" aria-hidden="true" /> Standards-led international support</div>
            </figcaption>
            <span aria-hidden="true" className="presence-float absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-lg backdrop-blur-md sm:right-5 sm:top-5 sm:h-11 sm:w-11"><Compass className="h-5 w-5" /></span>
          </figure>
        </div>
      </section>

      <section aria-labelledby="markets-heading" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
        <div aria-hidden="true" className="presence-orbit pointer-events-none absolute -right-40 top-4 hidden h-[34rem] w-[34rem] items-center justify-center opacity-70 md:flex">
          <div className="absolute h-[29rem] w-[29rem] rounded-full border border-slate-200/70" />
          <div className="absolute h-[22rem] w-[22rem] rounded-full border border-dashed border-red-200/80" />
          <div className="absolute h-[15rem] w-[15rem] rounded-full border border-red-100 bg-[radial-gradient(circle_at_35%_30%,rgba(239,68,68,.12),rgba(255,255,255,.4)_48%,transparent_72%)] shadow-[0_0_90px_rgba(239,68,68,.1)]" />
          <div className="absolute h-[11rem] w-[11rem] rounded-full border border-red-200/70 [transform:rotate(-28deg)_scaleY(.38)]" />
          <div className="absolute h-[11rem] w-[11rem] rounded-full border border-red-200/70 [transform:rotate(28deg)_scaleY(.38)]" />
          <span className="absolute right-[8.3rem] top-[7.1rem] h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_6px_rgba(239,68,68,.12),0_0_18px_rgba(239,68,68,.65)]" />
          <span className="presence-float absolute left-[6.2rem] top-[13rem] h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_5px_rgba(239,68,68,.12),0_0_16px_rgba(239,68,68,.45)]" />
          <span className="presence-float-delayed absolute bottom-[7.2rem] right-[11rem] h-2 w-2 rounded-full bg-red-400 shadow-[0_0_0_5px_rgba(248,113,113,.12),0_0_16px_rgba(248,113,113,.45)]" />
          <span className="absolute right-[4.5rem] top-[15rem] rounded-full border border-slate-200/80 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[.16em] text-slate-500 shadow-sm">GLOBAL REACH</span>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute bottom-24 left-0 h-64 w-64 rounded-full bg-red-100/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="relative z-10 mx-auto mb-9 grid max-w-6xl gap-6 border-b border-slate-200/80 pb-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10 sm:mb-12 sm:pb-10">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.18em] text-red-700 shadow-sm sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-red-600" />Our international presence</p>
              <h2 id="markets-heading" className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Wherever you operate,<br className="hidden sm:block" /> <span className="text-red-700">let’s talk.</span></h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">ACE-CERT works with organizations across a broad range of markets. Find your country below, then get in touch to confirm availability for your location and certification scope.</p>
            </div>
            <div className="flex w-fit items-center gap-3 rounded-2xl border border-red-100 bg-white px-4 py-3 shadow-[0_12px_35px_rgba(185,28,28,.08)] ring-1 ring-white sm:gap-3.5 sm:px-5 sm:py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-700 sm:h-11 sm:w-11"><Globe2 className="h-5 w-5" aria-hidden="true" /></span>
              <span><strong className="block text-2xl font-extrabold leading-6 tracking-tight text-slate-950">{countries.length}</strong><span className="mt-1 block text-xs font-medium text-slate-500">markets listed</span></span>
            </div>
          </div>
          <CountryDestinationPicker countries={countries} />
        </div>
      </section>

      <section aria-labelledby="why-heading" className="relative overflow-hidden border-y border-red-100 bg-gradient-to-br from-red-50/70 via-white to-slate-50">
        <div aria-hidden="true" className="presence-orbit pointer-events-none absolute -right-24 top-0 hidden h-80 w-80 rounded-full border border-red-100/80 sm:block" />
        <div aria-hidden="true" className="presence-float-delayed pointer-events-none absolute -right-12 top-12 hidden h-56 w-56 rounded-full border border-red-100/80 sm:block" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl px-2 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700 sm:text-sm">Your certification partner</p>
            <h2 id="why-heading" className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Global reach, personal guidance</h2>
          </div>
          <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-6">
            {benefits.map(({ title, description, icon: Icon }) => (
              <article key={title} className="group relative overflow-hidden rounded-2xl border border-red-100/80 bg-white/95 p-5 shadow-[0_12px_35px_rgba(185,28,28,.05)] transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_22px_45px_rgba(185,28,28,.11)] sm:p-7">
                <span aria-hidden="true" className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-red-100 transition-transform duration-500 group-hover:scale-125" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100/70 text-red-700 ring-1 ring-red-100/80"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_50%_100%,rgba(254,226,226,.65),transparent_60%)] px-4 py-10 sm:px-8 sm:py-16 lg:py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-red-100 bg-[#fff7f7] px-5 py-8 text-center text-slate-900 shadow-[0_20px_60px_rgba(153,27,27,.08)] sm:px-12 sm:py-14">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(220,38,38,.12),transparent_48%)]" />
          <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(220,38,38,.28)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(135deg,black,transparent_65%)]" />
          <div className="relative"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-700"><ShieldCheck className="h-6 w-6" aria-hidden="true" /></span>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">Taking your business across borders?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Tell us where you operate, your organization’s scope, and which standard you’re considering. We’ll help you explore a clear next step.</p>
          <Link href="/contact?region=international" className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-200 sm:w-auto sm:px-6 sm:text-base">Talk to our international team <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </div>
      </section>
    </main>
  );
}