import Link from 'next/link';
import { ArrowRight, Globe2, ShieldCheck, Target, UsersRound, MapPin, Check, MoveUpRight } from 'lucide-react';

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
      { '@type': 'ListItem', position: 2, name: 'Our Presence' },
      { '@type': 'ListItem', position: 3, name: 'International', item: 'https://ace-cert.com/presence-international' },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative isolate overflow-hidden border-b border-red-100 bg-white text-slate-900">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,#fff_0%,#fff_54%,#fff1f2_100%)]" />
        <div aria-hidden="true" className="absolute -right-24 -top-32 -z-10 h-[520px] w-[520px] rounded-full border border-red-100 sm:right-0"><div className="absolute inset-12 rounded-full border border-red-100" /><div className="absolute inset-28 rounded-full border border-red-100" /><div className="absolute inset-44 rounded-full bg-red-100/60 blur-3xl" /></div>
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-100" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-10 lg:py-24">
          <div className="relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500"><ol className="flex flex-wrap items-center gap-2"><li><Link href="/" className="hover:text-red-700">Home</Link></li><li aria-hidden="true">/</li><li>Our Presence</li><li aria-hidden="true">/</li><li aria-current="page" className="font-semibold text-red-700">International</li></ol></nav>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[.16em] text-red-700 shadow-sm"><Globe2 className="h-4 w-4" /> ACE-CERT · International</p>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Your standards. <span className="text-red-700">A world of opportunity.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Practical ISO certification support for organizations with global ambitions. Explore the markets we support and talk with our team about your certification goals.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?region=international" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/30 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300/40">Discuss your requirements <ArrowRight className="h-4 w-4" /></Link>
              <a href="#markets-heading" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-800 hover:border-red-400 hover:bg-red-50">Explore countries <MoveUpRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-slate-600"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50"><MapPin className="h-4 w-4 text-red-700" /></span>Serving organizations across international markets</div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:py-8">
            <div aria-hidden="true" className="absolute inset-4 rounded-full bg-red-500/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-white p-5 shadow-[0_24px_70px_rgba(153,27,27,.12)] sm:p-7">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 to-red-300" />
              <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-red-700">International coverage</p><h2 className="mt-2 text-2xl font-bold text-slate-950">Local context. Global standards.</h2></div><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700"><Globe2 className="h-5 w-5" /></span></div>
              <div className="my-6 h-px bg-red-100" />
            <div className="grid grid-cols-2 gap-3 sm:gap-4">{['Asia Pacific', 'Middle East', 'Europe', 'Africa & Americas'].map((region, index) => <div key={region} className="flex min-h-[82px] items-center gap-3 rounded-xl border border-red-100 bg-red-50/50 p-3 transition hover:border-red-200 hover:bg-red-50"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-red-700 shadow-sm">0{index + 1}</span><span className="text-sm font-semibold text-slate-800">{region}</span></div>)}</div>
              <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-500"><Check className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />Service availability is confirmed individually based on location, scope, and applicable requirements.</p>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-red-100 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-xl sm:flex sm:items-center sm:gap-2"><ShieldCheck className="h-5 w-5 text-red-600" /> Standards-led support</div>
          </div>
        </div>
      </section>

      <section aria-labelledby="markets-heading" className="bg-[#f6f7f9]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid gap-6 border-b border-slate-200 pb-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-red-700 sm:text-sm">Our international presence</p><h2 id="markets-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Wherever you operate, <span className="text-red-700">let’s talk.</span></h2><p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">ACE-CERT works with organizations across a broad range of markets. Find your country below, then get in touch to confirm availability for your location and certification scope.</p></div>
            <div className="inline-flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"><Globe2 className="h-5 w-5 text-red-600" /><span><strong className="block text-lg leading-5 text-slate-900">{countries.length}</strong><span className="text-xs text-slate-500">markets listed</span></span></div>
          </div>
          <div className="mt-7 rounded-2xl border border-red-100 bg-white p-4 shadow-[0_20px_60px_rgba(153,27,27,.07)] sm:p-7">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800"><MapPin className="h-4 w-4 text-red-600" /> Countries and territories</div>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
              {countries.map((country) => (
                <li key={country} className="group flex min-h-12 min-w-0 items-center gap-2.5 rounded-lg border border-transparent bg-slate-50 px-3 py-2.5 text-xs font-medium leading-5 text-slate-700 transition duration-200 hover:border-red-200 hover:bg-white hover:shadow-sm sm:text-sm"><span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-red-500 ring-4 ring-red-50 transition group-hover:bg-red-700" /><span className="min-w-0 break-words">{country}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-heading" className="border-y border-red-100 bg-red-50/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700 sm:text-sm">Your certification partner</p>
            <h2 id="why-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Global reach, personal guidance</h2>
          </div>
          <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-6">
            {benefits.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-700"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-red-100 bg-[#fff7f7] px-6 py-10 text-center text-slate-900 shadow-[0_20px_60px_rgba(153,27,27,.08)] sm:px-12 sm:py-14">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(220,38,38,.12),transparent_48%)]" />
          <div className="relative"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-700"><ShieldCheck className="h-6 w-6" aria-hidden="true" /></span>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">Taking your business across borders?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Tell us where you operate, your organization’s scope, and which standard you’re considering. We’ll help you explore a clear next step.</p>
          <Link href="/contact?region=international" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-red-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-200 sm:text-base">Talk to our international team <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </div>
      </section>
    </main>
  );
}