import Link from 'next/link';
import { ArrowRight, Globe2, ShieldCheck, Target, UsersRound } from 'lucide-react';

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
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-red-800 via-red-600 to-[#E30613] text-white shadow-lg shadow-red-950/15">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.16),transparent_55%)]" />
        <div className="mx-auto flex min-h-32 max-w-7xl flex-col items-center justify-center gap-4 px-4 py-10 text-center sm:min-h-48 sm:gap-5 sm:px-6 sm:py-14 lg:min-h-[372px] lg:px-8 lg:py-20">
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">Global Certification Support</h1>
          <nav aria-label="Breadcrumb">
            <ol className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-red-100 sm:gap-x-3 sm:text-base">
              <li><Link href="/" className="transition-colors hover:text-white hover:underline hover:underline-offset-4">Home</Link></li>
              <li aria-hidden="true" className="text-white/60">/</li>
              <li>Our Presence</li>
              <li aria-hidden="true" className="text-white/60">/</li>
              <li aria-current="page" className="font-bold text-white">International</li>
            </ol>
          </nav>
        </div>
      </section>

      <section aria-labelledby="markets-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700 sm:text-sm">Markets we support</p>
          <h2 id="markets-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">A worldwide network of opportunity</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">We support organizations across a broad range of countries and regions. Contact us to confirm service availability and the right certification scope for your location.</p>
        </div>
        <ul className="mt-9 grid grid-cols-2 gap-2 sm:mt-12 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
          {countries.map((country) => (
            <li key={country} className="flex min-h-12 min-w-0 items-center gap-2 rounded-xl border border-slate-100 bg-white px-2.5 py-3 text-xs font-medium leading-5 text-slate-700 shadow-sm transition hover:border-red-200 hover:bg-red-50/50 sm:px-4 sm:text-sm"><span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-red-600" /><span className="min-w-0 break-words">{country}</span></li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="why-heading" className="border-y border-red-100 bg-red-50/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700 sm:text-sm">Your certification partner</p>
            <h2 id="why-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Global reach, personal guidance</h2>
          </div>
          <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-6">
            {benefits.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white"><ShieldCheck className="h-7 w-7" aria-hidden="true" /></span>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Planning certification in another country?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Tell us where you operate and which standard you are considering. Our team will help you explore the next steps.</p>
        <Link href="/contact?region=international" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 sm:text-base">Contact ACE-CERT <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </section>
    </main>
  );
}