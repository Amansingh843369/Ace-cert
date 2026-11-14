'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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

const HACCP_INDUSTRIES = [
  'Food Manufacturing', 'Meat & Poultry Processing', 'Dairy Products',
  'Seafood & Fisheries', 'Bakery & Confectionery', 'Fruit & Vegetable Processing',
  'Beverage Production', 'Animal Feed Manufacturing', 'Food Packaging',
  'Warehousing & Distribution', 'Restaurants & Catering Services',
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
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-red-100 bg-gradient-to-br from-white via-[#fff8f7] to-red-50/70">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-16">
          <div className="relative z-10">
            <SectionBadge>Food Safety Management</SectionBadge>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
              HACCP <span className="text-red-600">Certification</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A preventive approach to food safety that identifies, evaluates, and controls hazards
              throughout the food production and supply chain.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-red-600/35 sm:text-base"
              >
                Get Certified Today
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </button>
              <a
                href="#haccp-principles"
                className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white/80 px-5 py-3.5 text-sm font-bold text-[#1c2448] transition hover:border-red-300 hover:bg-white sm:text-base"
              >
                Explore the 7 principles
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl border border-red-100 bg-white shadow-2xl shadow-red-900/10 sm:max-w-[380px] lg:max-w-[440px]">
            <Image
              src="/certifications/haccp.png"
              alt="HACCP food safety inspection in a food production facility"
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What is HACCP */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="flex-1">
            <figure className="relative h-[300px] overflow-hidden rounded-2xl border border-slate-200 shadow-lg sm:h-[380px] lg:h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1606859191214-25806e8e2423?auto=format&fit=crop&w=1200&q=85"
                alt="Food safety inspection and quality control in manufacturing"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center opacity-90"
              />
            </figure>
          </div>
          <div className="flex-1 space-y-6">
            <SectionBadge>About HACCP</SectionBadge>
            <SectionHeading>What is <span className="text-red-600">HACCP?</span></SectionHeading>
            <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                HACCP (Hazard Analysis and Critical Control Points) is an internationally recognized
                food safety management system. Unlike traditional inspection methods, it focuses on
                preventing hazards rather than detecting them after they occur.
              </p>
              <p>
                It systematically identifies biological, chemical, and physical hazards throughout
                the food production and supply chain, ensuring products are safe for consumption
                before they reach the market.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="group inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25 hover:shadow-red-600/35 text-sm sm:text-base cursor-pointer"
              >
                <span>Get Certified Today</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <SectionBadge>Benefits</SectionBadge>
            <SectionHeading className="mt-4" highlight="Certification">
              Benefits of HACCP
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {HACCP_BENEFITS.map((benefit, index) => (
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
      <section id="haccp-principles" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <SectionBadge>The 7 Principles</SectionBadge>
            <SectionHeading className="mt-4">
              Key Principles of <span className="text-red-600">HACCP</span>
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {HACCP_PRINCIPLES.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <article
                  key={principle.id}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-[0_20px_40px_rgba(127,29,29,0.08)] sm:rounded-3xl sm:p-7 md:p-8 ${
                    index === HACCP_PRINCIPLES.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
                    <span className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[9px] font-bold tracking-[0.1em] text-slate-500 transition-colors group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-red-700 sm:px-3 sm:py-1.5 sm:text-[10px]">
                      {principle.id}
                    </span>
                  </div>
                  <div className="flex flex-col relative z-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-100 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:ring-red-600 sm:h-14 sm:w-14 sm:rounded-2xl">
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
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <SectionBadge>Value Proposition</SectionBadge>
            <SectionHeading className="mt-4" highlight="Matters">
              Why HACCP Certification
            </SectionHeading>
            <p className="mx-auto mt-3 max-w-2xl px-2 text-sm leading-relaxed text-slate-500 sm:mt-4 sm:text-base md:text-lg">
              HACCP certification demonstrates your commitment to producing safe, high-quality
              food products that meet the strictest international standards.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {VALUE_CARDS.map((card) => (
              <article
                key={card.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 sm:p-7 md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg shadow-red-700/20 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 sm:h-14 sm:w-14 md:h-16 md:w-16 mb-6">
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

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-white via-white to-red-50/70 px-5 py-10 sm:px-8 sm:py-12 lg:rounded-[2.5rem] lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-100/50 blur-3xl" />
          <div className="relative z-10 mx-auto mb-8 max-w-4xl text-center sm:mb-10">
          <SectionBadge>Scope</SectionBadge>
          <h2 className="mt-4 text-balance text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl md:text-4xl lg:text-5xl">
            Who Can Implement It?
          </h2>
          <p className="mx-auto mt-3 max-w-xl px-2 text-sm leading-7 text-[#526581] sm:mt-4 sm:text-base md:text-lg">
            HACCP is mandatory for many food businesses and highly recommended for any organization
            involved in the food supply chain, from primary production to retail.
          </p>
        </div>
          <div className="relative z-10 mx-auto flex max-w-5xl flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3">
            {HACCP_INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-lg border border-red-100 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-red-300 hover:bg-white hover:text-red-800 hover:shadow-md sm:rounded-xl sm:px-4 sm:py-2 sm:text-xs md:px-5 md:py-2.5 md:text-sm lg:text-base"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

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
