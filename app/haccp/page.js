'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCertificationContent } from '../../lib/sanity/useCertificationContent';
import {
  Search,
  ShieldAlert,
  Activity,
  Thermometer,
  RefreshCw,
  ClipboardCheck,
  FileText,
  Award,
  Globe,
  TrendingUp,
  ChevronRight,
  X,
  CheckCircle2,
} from 'lucide-react';

const HACCP_BENEFITS = [
  'Ensure food safety and consumer protection',
  'Identify and control food safety hazards',
  'Reduce the risk of food contamination',
  'Improve product quality and consistency',
  'Meet legal and regulatory requirements',
  'Enhance customer confidence and trust',
  'Strengthen food safety culture',
  'Reduce food recalls and waste',
  'Improve operational efficiency',
  'Promote continual improvement',
];

const HACCP_PRINCIPLES = [
  { id: '01', title: 'Conduct Hazard Analysis', desc: 'Identify potential biological, chemical, or physical hazards that could occur in the food production process.', icon: Search },
  { id: '02', title: 'Determine Critical Control Points (CCPs)', desc: 'Pinpoint specific steps where control can be applied to prevent or eliminate a hazard.', icon: ShieldAlert },
  { id: '03', title: 'Establish Critical Limits', desc: 'Set maximum or minimum values (like temperature or time) for each CCP to ensure safety.', icon: Activity },
  { id: '04', title: 'Monitor CCPs', desc: 'Implement a system to measure or observe critical limits at each control point continuously.', icon: Thermometer },
  { id: '05', title: 'Establish Corrective Actions', desc: 'Define specific actions to take when monitoring indicates a deviation from a critical limit.', icon: RefreshCw },
  { id: '06', title: 'Verify the System', desc: 'Confirm that the HACCP plan is working effectively through audits, testing, and record reviews.', icon: ClipboardCheck },
  { id: '07', title: 'Record Keeping', desc: 'Maintain detailed documentation of all procedures, monitoring results, and corrective actions taken.', icon: FileText },
];

const VALUE_CARDS = [
  {
    icon: ShieldAlert, label: 'Safety First', title: 'Risk Prevention',
    items: ['Proactive hazard identification', 'Elimination of biological risks', 'Control of chemical contaminants', 'Prevention of physical hazards', 'Reduced liability exposure'],
  },
  {
    icon: Globe, label: 'Compliance', title: 'Global Standards',
    items: ['Meets FDA & USDA requirements', 'Aligns with Codex Alimentarius', 'Accepted by international retailers', 'Facilitates export opportunities', 'Regulatory audit readiness'],
  },
  {
    icon: TrendingUp, label: 'Efficiency', title: 'Operational Excellence',
    items: ['Streamlined production processes', 'Reduced product waste', 'Lower recall risks', 'Consistent product quality', 'Improved supply chain management'],
  },
];

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

export default function HaccpCertificationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const certification = useCertificationContent();
  const benefits =
    certification?.benefits?.length > 0
      ? [...certification.benefits, ...HACCP_BENEFITS.slice(certification.benefits.length)]
      : HACCP_BENEFITS;
  const principles = HACCP_PRINCIPLES.map((fallback, index) => {
    const pillar = certification?.pillars?.[index];
    return {
      ...fallback,
      id: String(index + 1).padStart(2, '0'),
      title: pillar?.title || fallback.title,
      desc: pillar?.description || fallback.desc,
    };
  });
  useEffect(() => {
    if (!isModalOpen) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfd] font-sans text-slate-900 selection:bg-red-200 selection:text-red-900">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-red-100/50 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[28%] h-[460px] w-[460px] rounded-full bg-rose-100/40 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[10%] h-[520px] w-[520px] rounded-full bg-red-50 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-20 px-4 py-8 md:space-y-24 md:px-6 md:py-12 lg:space-y-28 lg:px-12 lg:py-16">
        <section aria-labelledby="haccp-title">
          <div className="mb-8 flex flex-col items-center text-center md:mb-10">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-red-100 bg-white/90 px-4 py-2 text-xs font-semibold text-red-800 shadow-[0_4px_16px_rgba(127,29,29,0.06)] md:mb-6 md:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40" />
                <span className="relative inline-flex h-full w-full rounded-full bg-[#E30613]" />
              </span>
              {certification?.heroBadge || 'Food Safety Management'}
            </div>

            <h1 id="haccp-title" className="mb-4 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-5xl md:text-6xl lg:text-5xl xl:text-[3.5rem]">
              {certification?.heroTitle
                ? certification.heroTitle.replace(/\s+Certification$/i, '')
                : 'HACCP'}{' '}
              <span className="text-[#E30613]">Certification</span>
            </h1>

            <h2 className="max-w-2xl px-2 text-pretty text-base font-medium leading-relaxed text-[#526581] sm:text-lg md:text-xl">
              {certification?.heroDescription ||
                'A preventive approach to food safety that identifies, evaluates, and controls hazards throughout the food production and supply chain.'}
            </h2>
          </div>

          <article className="relative flex flex-col items-center gap-7 overflow-hidden rounded-[1.75rem] border border-red-100/90 bg-white/95 p-5 shadow-[0_18px_60px_rgba(17,24,39,0.07)] sm:rounded-[2rem] sm:p-7 md:gap-10 md:p-9 lg:flex-row lg:items-stretch lg:gap-12 lg:rounded-[2.25rem] lg:p-11">
            <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

            <div className="order-1 flex w-full justify-center lg:items-stretch lg:w-[46%]">
              <figure className="relative aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 sm:rounded-[1.5rem] lg:aspect-auto lg:h-full">
                <Image
                  src={certification?.heroImageUrl || '/haccp.jpeg'}
                  alt={certification?.heroImageAlt || 'HACCP certification artwork'}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </figure>
            </div>

            <div className="order-2 flex w-full flex-col justify-center gap-4 text-center sm:gap-5 lg:w-[54%] lg:justify-between lg:gap-6 lg:text-left">
              <h3 id="haccp-introduction" className="relative mx-auto inline-block text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl md:text-[2rem] lg:mx-0 lg:text-4xl">
                {certification?.introTitle || 'What is HACCP?'}
                <span aria-hidden="true" className="absolute -bottom-3 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-[#E30613] lg:left-0 lg:translate-x-0" />
              </h3>

              <div className="mt-2 space-y-4 text-sm leading-7 text-[#526581] sm:text-base md:text-[17px] md:leading-8 text-justify">
                {certification?.introParagraphs?.length >= 2 ? (
                  certification.introParagraphs.map((paragraph, index) => (
                    <p key={`${index}-${paragraph}`}>{paragraph}</p>
                  ))
                ) : (
                  <>
                    <p>
                      HACCP (Hazard Analysis and Critical Control Points) is an internationally recognized
                      food safety management system. Unlike traditional inspection methods, it focuses on
                      preventing hazards rather than detecting them after they occur.
                    </p>
                    <p>
                      It systematically identifies biological, chemical, and physical hazards throughout
                      the food production and supply chain, helping ensure products are safe before they
                      reach consumers.
                    </p>
                  </>
                )}
                <p>
                  Effective HACCP plans build on prerequisite programs such as good hygiene, sanitation,
                  approved supplier controls, and staff training. They also define monitoring, corrective
                  actions, verification, and clear records at every critical control point.
                </p>
              </div>

              <div className="mt-2 flex flex-wrap justify-center gap-3 lg:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  type="button"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#E30613] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(227,6,19,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-[0_12px_28px_rgba(227,6,19,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 sm:w-auto sm:text-base"
                >
                  {certification?.enquireLabel || 'Get Certified Today'}
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#haccp-principles"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3.5 text-sm font-bold text-[#1c2448] transition hover:border-red-300 hover:bg-red-50 sm:text-base"
                >
                  Explore the 7 principles
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </section>

      {/* Benefits */}
      <section aria-label="HACCP certification benefits">
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <SectionBadge>Benefits</SectionBadge>
            <SectionHeading className="mt-4">
              Benefits of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">
                Certification
              </span>
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white p-3 shadow-[0_2px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-[0_10px_24px_rgba(127,29,29,0.08)] sm:min-h-[72px] sm:rounded-2xl sm:p-3.5 md:p-4"
              >
                <span className="absolute inset-y-3 left-0 w-0.5 rounded-r-full bg-red-600 scale-y-0 transition-transform duration-300 group-hover:scale-y-100 sm:w-1" />
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-700 ring-1 ring-red-100 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white group-hover:ring-red-700 sm:h-9 sm:w-9 md:h-10 md:w-10 md:rounded-xl">
                  <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2.2} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="mb-0.5 block text-[9px] font-bold uppercase tracking-[0.14em] text-red-500 sm:text-[10px]">
                    Benefit {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="block text-xs font-semibold leading-snug text-slate-700 transition-colors group-hover:text-slate-950 sm:text-sm md:text-[15px]">
                    {benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Principles */}
      <section id="haccp-principles" className="scroll-mt-24">
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <SectionBadge>The 7 Principles</SectionBadge>
            <SectionHeading className="mt-4">
              Key Principles of <span className="text-red-600">HACCP</span>
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <article
                  key={principle.id}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-[0_20px_40px_rgba(127,29,29,0.08)] sm:rounded-3xl sm:p-7 md:p-8 ${
                    index === principles.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
                    <span className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[9px] font-bold tracking-[0.1em] text-slate-500 transition-colors group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-red-700 sm:px-3 sm:py-1.5 sm:text-[10px]">
                      {principle.id}
                    </span>
                  </div>
                  <div className="flex flex-col relative z-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[#0F1B33] ring-1 ring-slate-200 sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-red-700 sm:text-xl">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {principle.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section>
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <SectionBadge>Value Proposition</SectionBadge>
            <SectionHeading className="mt-4" highlight="Matters">
              Why HACCP Certification
            </SectionHeading>
            <p className="mx-auto mt-3 max-w-2xl px-2 text-sm leading-relaxed text-slate-500 sm:mt-4 sm:text-base md:text-lg">
              {certification?.importanceDescription ||
                'HACCP certification demonstrates your commitment to producing safe, high-quality food products that meet the strictest international standards.'}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {VALUE_CARDS.map((card) => (
              <article
                key={card.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 sm:p-7 md:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#0F1B33] shadow-sm ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 sm:h-14 sm:w-14 md:h-16 md:w-16">
                  <card.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
                </div>
                <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-red-700 sm:px-3 sm:py-1.5 sm:text-[10px]">
                  {card.label}
                </span>
                <h3 className="mb-4 text-lg font-extrabold tracking-tight text-slate-900 sm:mb-5 sm:text-xl md:text-2xl">
                  {card.title}
                </h3>
                <div className="mb-4 h-px w-full bg-gradient-to-r from-red-200 via-red-100 to-transparent sm:mb-5 md:mb-6" />
                <ul className="space-y-2.5 sm:space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700 transition-colors group-hover:bg-red-100">
                        <CheckCircle2 className="h-3 w-3" strokeWidth={2.8} />
                      </span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* Modal */}
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
                  Get HACCP Certified
                </h3>
                <p className="text-xs text-red-100 sm:text-sm">Fill the form below</p>
              </div>
            </div>
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
                    placeholder="Your Food Company Name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message" name="message" rows="3"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 sm:py-3"
                    placeholder="Tell us about your production process..."
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
