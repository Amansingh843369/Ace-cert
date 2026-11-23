'use client';

import CertificationImportanceSection from '../../components/CertificationImportanceSection';
import CertificationHeroTitle from '../../components/CertificationHeroTitle';
import { useCertificationContent } from '../../lib/sanity/useCertificationContent';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  BarChart3,
  Building2,
  CircleCheck,
  Cloud,
  Leaf,
  LineChart,
  Recycle,
  ShieldCheck,
  Target,
  TrendingDown,
  Workflow,
  X,
} from 'lucide-react';

/* ---------- Static Data (component ke bahar = re-render pe re-create nahi) ---------- */
const BENEFITS = [
  'Measure and manage greenhouse gas emissions',
  'Improve carbon footprint reporting accuracy',
  'Support climate change mitigation efforts',
  'Enhance environmental sustainability performance',
  'Strengthen ESG and sustainability initiatives',
  'Increase transparency and accountability',
  'Meet stakeholder and regulatory expectations',
  'Support carbon reduction strategies',
  'Enhance corporate reputation',
  'Promote continual improvement',
];

const PRINCIPLES = [
  { id: '01', title: 'Relevance', desc: 'Selecting GHG sources appropriate to decision-making needs.', icon: Target },
  { id: '02', title: 'Completeness', desc: 'Including all relevant GHG emissions and removals.', icon: Cloud },
  { id: '03', title: 'Consistency', desc: 'Using consistent methodologies for valid comparisons.', icon: Workflow },
  { id: '04', title: 'Accuracy', desc: 'Reducing bias and uncertainties in data reporting.', icon: BarChart3 },
  { id: '05', title: 'Transparency', desc: 'Disclosing sufficient information for intended users.', icon: ShieldCheck },
  { id: '06', title: 'Conservativeness', desc: 'Choosing values that do not overestimate performance.', icon: TrendingDown },
  { id: '07', title: 'Verification', desc: 'Ensuring data is credible through independent assessment.', icon: Recycle },
];



const BENEFIT_CARDS = [
  {
    icon: Leaf, label: 'Environment', title: 'For The Planet',
    items: ['Reduced carbon emissions', 'Better resource efficiency', 'Lower environmental impact', 'Support for net-zero goals', 'Improved waste management', 'Cleaner production methods', 'Biodiversity protection'],
  },
  {
    icon: LineChart, label: 'Reporting', title: 'For Transparency',
    items: ['Accurate GHG inventories', 'Verified emission data', 'Standardized reporting format', 'Clear reduction targets', 'Audit-ready documentation'],
  },
  {
    icon: Building2, label: 'Business', title: 'For Your Organization',
    items: ['Regulatory compliance', 'Cost savings via efficiency', 'Enhanced brand image', 'Access to green finance', 'Competitive market advantage'],
  },
];

/* ---------- Small reusable components ---------- */
function SectionBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-red-700 sm:text-xs">
      <span className="h-1.5 w-1.5 rounded-full bg-[#E30613]" aria-hidden="true" />
      {children}
    </span>
  );
}

function SectionHeading({ children, highlight, className = '' }) {
  return (
    <h2
      className={`text-balance text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-5xl ${className}`}
    >
      {children}{' '}
      {highlight && (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">
          {highlight}
        </span>
      )}
    </h2>
  );
}

/* ---------- Main Component ---------- */
export default function IsoCertificationLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const certification = useCertificationContent();

  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfd] font-sans text-slate-900 selection:bg-red-200 selection:text-red-900">

      {/* ---------- Decorative Blobs ---------- */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-red-100/50 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[28%] h-[460px] w-[460px] rounded-full bg-rose-100/40 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[10%] h-[520px] w-[520px] rounded-full bg-red-50 blur-[130px]" />

      {/* ---------- Page Wrapper (consistent responsive padding) ---------- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="space-y-20 py-10 sm:space-y-24 sm:py-14 md:space-y-28 lg:space-y-32 lg:py-20">

          {/* =====================================================
              SECTION 1 — HERO
             ===================================================== */}
          <section aria-labelledby="hero-title">
            {/* Header block */}
            <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center sm:mb-12 md:mb-14">
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-red-100 bg-white/90 px-4 py-2 text-[11px] font-semibold text-red-800 shadow-[0_4px_16px_rgba(127,29,29,0.06)] sm:text-xs md:text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-[#E30613]" />
                </span>
                {certification?.heroBadge || "Global Carbon Standard"}
              </div>

              <h1
                id="hero-title"
                className="mb-4 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#111827] xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl lg:whitespace-nowrap xl:text-[3.5rem]"
              >{certification?.heroTitle ? <CertificationHeroTitle title={certification.heroTitle} highlightClass="text-[#E30613]" /> : <>
                ISO 14064 <span className="text-[#E30613]">Certification</span>
              </>}</h1>

              <p className="max-w-2xl text-pretty text-sm font-medium leading-relaxed text-[#526581] sm:text-base md:text-lg lg:text-xl">{certification?.heroDescription || <>
                Quantify, monitor, and report your greenhouse gas emissions with the
                international standard for carbon accounting.
              </>}</p>
            </div>

            {/* Hero card */}
            <article className="relative flex flex-col items-stretch gap-6 overflow-hidden rounded-3xl border border-red-100/90 bg-white/95 p-4 shadow-[0_18px_60px_rgba(17,24,39,0.07)] sm:gap-8 sm:rounded-[2rem] sm:p-6 md:p-8 lg:flex-row lg:gap-10 lg:rounded-[2.25rem] lg:p-10">

              {/* Top accent line */}
              <div aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

              {/* Image */}
              <div className="w-full shrink-0 lg:w-[44%]">
                <figure className="relative aspect-square w-full overflow-hidden rounded-2xl bg-red-50 ring-1 ring-black/5 lg:h-full">
                  <Image
                    src={certification?.heroImageUrl || "/certifications/14064.png"}
                    alt={certification?.heroImageAlt || "ISO 14064 certification artwork"}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-xl border border-white/70 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-4 sm:py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-red-700 sm:text-xs">
                      Carbon Neutral
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-slate-900 sm:text-sm">
                      Sustainable future starts here
                    </p>
                  </figcaption>
                </figure>
              </div>

              {/* Content */}
              <div className="flex w-full flex-col justify-center lg:justify-between gap-4 text-left sm:gap-5 lg:w-[56%] lg:gap-6">
                <h3 className="relative inline-block text-xl font-bold tracking-tight text-[#111827] sm:text-2xl md:text-3xl lg:text-4xl">{certification?.introTitle || <>
                  What is ISO 14064?
                  </>}<span aria-hidden="true" className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-[#E30613] sm:-bottom-3 sm:w-14" />
                </h3>

                <div className="space-y-3 pt-2 text-sm leading-7 text-[#526581] sm:text-base sm:leading-8 md:text-[17px] text-justify">
                  <p>{certification?.introParagraphs?.[0] || <>
                    ISO 14064 is an internationally recognized standard that provides
                    principles and requirements for{' '}
                    <strong className="font-semibold text-[#111827]">
                      quantifying, monitoring, reporting, and verifying greenhouse gas
                      (GHG) emissions and removals
                    </strong>
                    . It helps organizations establish credible carbon accounting
                    practices and demonstrate their commitment to climate action and
                    environmental sustainability.
                  </>}</p>
                  <p>{certification?.introParagraphs?.[1] || <>
                    The standard is published by the International Organization for
                    Standardization and is applicable to organizations of all sizes and
                    sectors seeking to measure, manage, and reduce their carbon footprint.
                  </>}</p>
                  {certification?.introSupport && <p>{certification.introSupport}</p>}
                </div>

                <div className="mt-2 flex justify-start">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    type="button"
                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E30613] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(227,6,19,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-[0_12px_28px_rgba(227,6,19,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 active:translate-y-0 sm:w-auto sm:px-7 sm:text-base"
                  >
                    <span>{certification?.enquireLabel || "Get Certified Today"}</span>
                    <svg
                      className="h-5 w-5 -mr-1 transition-transform group-hover:translate-x-1"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          </section>

          {/* =====================================================
              SECTION 2 — WHY IMPORTANT + BENEFITS GRID
             ===================================================== */}
          <CertificationImportanceSection
            id="importance-title"
            title="ISO 14064"
            certification={certification}
            description={
              <>
                Implementing ISO 14064 helps organizations accurately track their
                                    environmental impact, meet global climate goals, and build trust with
                                    stakeholders through transparent reporting.
              </>
            }
            benefits={BENEFITS}
          />

          {/* =====================================================
              SECTION 3 — PRINCIPLES
             ===================================================== */}
          <section aria-labelledby="principles-title">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
              <SectionBadge>Core Pillars</SectionBadge>
              <SectionHeading className="mt-4">
                Key Greenhouse Gas <span className="text-[#E30613]">Principles</span>
              </SectionHeading>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
              {PRINCIPLES.map((principle, index) => (
                <article
                  key={principle.id}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_6px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-[0_20px_40px_rgba(127,29,29,0.08)] sm:rounded-3xl sm:p-7 md:p-8 ${
                    index === PRINCIPLES.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  {/* corner badge */}
                  <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
                    <span className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[9px] font-bold tracking-[0.1em] text-slate-500 transition-colors group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-red-700 sm:px-3 sm:py-1.5 sm:text-[10px]">
                      {principle.id}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[#0F1B33] ring-1 ring-slate-200 sm:h-14 sm:w-14 sm:rounded-2xl">
                      <principle.icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>

                    <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-red-700 sm:text-xl">
                      {principle.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-500">
                      {principle.desc}
                    </p>

                    <div className="mt-5 h-0.5 w-10 rounded-full bg-red-100 transition-all duration-300 group-hover:w-20 group-hover:bg-red-300" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* =====================================================
              SECTION 4 — BENEFIT CARDS
             ===================================================== */}
          <section aria-labelledby="benefits-title">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-14">
              <SectionBadge>Value Proposition</SectionBadge>
              <SectionHeading className="mt-4" highlight="Certification">
                Benefits of
              </SectionHeading>
              <p className="mx-auto mt-3 max-w-2xl px-2 text-sm leading-relaxed text-slate-500 sm:mt-4 sm:text-base md:text-lg text-center">
                Certification demonstrates your leadership in sustainability, helps you
                comply with emerging climate regulations, and attracts eco-conscious
                investors and customers.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {BENEFIT_CARDS.map((card, idx) => (
                <article
                  key={card.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.055)] transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-[0_26px_65px_rgba(127,29,29,0.13)] sm:p-7 md:p-8"
                >
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red-50 blur-3xl transition-all duration-300 group-hover:bg-red-100" />

                  <div className="relative z-10 mb-6 flex items-start justify-between sm:mb-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#0F1B33] shadow-sm ring-1 ring-slate-200  sm:h-14 sm:w-14 md:h-16 md:w-16">
                      <card.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
                    </div>
                    <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-red-700 sm:px-3 sm:py-1.5 sm:text-[10px]">
                      0{idx + 1} / 0{BENEFIT_CARDS.length}
                    </span>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-red-700 md:text-xs">
                      {card.label}
                    </p>
                    <h3 className="mb-4 text-lg font-extrabold tracking-tight text-slate-900 sm:mb-5 sm:text-xl md:text-2xl">
                      {card.title}
                    </h3>

                    <div className="mb-4 h-px w-full bg-gradient-to-r from-red-200 via-red-100 to-transparent sm:mb-5 md:mb-6" />

                    <ul className="space-y-2.5 sm:space-y-3">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700 transition-colors group-hover:bg-red-100">
                            <CircleCheck className="h-3 w-3" strokeWidth={2.8} />
                          </span>
                          <span className="leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-red-800 to-red-500 transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              ))}
            </div>
          </section>




        </div>
      </div>

      {/* =====================================================
          MODAL
         ===================================================== */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative max-h-[92vh] w-full max-w-lg animate-in fade-in zoom-in overflow-y-auto rounded-2xl bg-white shadow-2xl sm:rounded-3xl">
            {/* Modal Header */}
            <div className="relative flex h-28 items-center justify-center bg-gradient-to-r from-red-800 to-[#E30613] sm:h-32">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-3 top-3 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30 sm:right-4 sm:top-4"
                aria-label="Close modal"
                type="button"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <div className="relative z-10 text-center text-white">
                <h3 id="modal-title" className="text-xl font-bold sm:text-2xl">
                  Get Certified
                </h3>
                <p className="text-xs text-red-100 sm:text-sm">Fill the form below</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 md:p-8">
              <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text" id="name" name="name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 sm:py-3"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email" id="email" name="email"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 sm:py-3"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                      Phone
                    </label>
                    <input
                      type="tel" id="phone" name="phone"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 sm:py-3"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="org" className="mb-1 block text-sm font-medium text-slate-700">
                    Organization Name
                  </label>
                  <input
                    type="text" id="org" name="org"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 sm:py-3"
                    placeholder="EcoTech Solutions Ltd."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message" name="message" rows="3"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 sm:py-3"
                    placeholder="Tell us about your carbon goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-red-700 to-red-600 py-3 font-bold text-white shadow-lg shadow-red-700/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-red-700/40 sm:py-3.5"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}