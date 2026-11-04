'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FileText,
  ShieldCheck,
  Play,
  Award,
  Users,
  Clock,
  Globe,
  CheckCircle2,
  ArrowUpRight,
  X,
  TrendingUp,
} from 'lucide-react';

/* ---------- Small Reusable Components ---------- */
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

/* ---------- Static Data ---------- */
const TRAINING_PROGRAMS = [
  {
    title: 'ISO 9001 Lead Auditor Training',
    desc: 'Master quality management system auditing and lead certification audits with confidence.',
    duration: '5 Days',
    level: 'Advanced',
    icon: ShieldCheck,
  },
  {
    title: 'ISO 14001 Environmental Auditor',
    desc: 'Learn to audit environmental management systems and support sustainability compliance.',
    duration: '4 Days',
    level: 'Intermediate',
    icon: Globe,
  },
  {
    title: 'ISO 45001 Safety Auditor',
    desc: 'Occupational health and safety auditing to protect workers and reduce workplace risk.',
    duration: '4 Days',
    level: 'Intermediate',
    icon: Award,
  },
  {
    title: 'ISO 27001 Information Security',
    desc: 'Information security management system auditing for data protection and risk control.',
    duration: '5 Days',
    level: 'Advanced',
    icon: FileText,
  },
  {
    title: 'ISO 22000 Food Safety Auditor',
    desc: 'Food safety management system auditing across the supply chain from farm to fork.',
    duration: '4 Days',
    level: 'Intermediate',
    icon: CheckCircle2,
  },
  {
    title: 'ISO 50001 Energy Auditor',
    desc: 'Energy management system auditing to improve performance and reduce consumption.',
    duration: '3 Days',
    level: 'Intermediate',
    icon: TrendingUp,
  },
];

const BENEFITS = [
  'Globally recognized certificates',
  'Expert-led instructor training',
  'Flexible online and classroom modes',
  'Practical audit case studies',
  'Career advancement opportunities',
  'Continual professional development',
];

const LEARNING_PATHS = [
  { label: 'Beginner', desc: 'Foundation courses for those new to ISO standards.' },
  { label: 'Internal Auditor', desc: 'Learn to conduct internal audits within your organization.' },
  { label: 'Lead Auditor', desc: 'Qualify to lead external certification audits.' },
  { label: 'Implementation', desc: 'Hands-on guidance to implement ISO systems from scratch.' },
];

/* ---------- Main Component ---------- */
export default function TrainingPage() {
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
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfd] font-sans text-slate-900 selection:bg-red-200 selection:text-red-900">

      {/* Decorative Blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-red-100/50 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[28%] h-[460px] w-[460px] rounded-full bg-rose-100/40 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[10%] h-[520px] w-[520px] rounded-full bg-red-50 blur-[130px]" />

      {/* Page Wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="space-y-20 py-10 sm:space-y-24 sm:py-14 md:space-y-28 lg:space-y-32 lg:py-20">

          {/* SECTION 1 — HERO */}
          <section aria-labelledby="hero-title">
            <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center sm:mb-12 md:mb-14">
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-red-100 bg-white/90 px-4 py-2 text-[11px] font-semibold text-red-800 shadow-[0_4px_16px_rgba(127,29,29,0.06)] sm:text-xs md:text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-[#E30613]" />
                </span>
                Professional Training
              </div>

              <h1
                id="hero-title"
                className="mb-4 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#111827] xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem]"
              >
                ISO <span className="text-[#E30613]">Training</span>
              </h1>

              <p className="max-w-2xl text-pretty text-sm font-medium leading-relaxed text-[#526581] sm:text-base md:text-lg lg:text-xl">
                Expert-led ISO training programs designed to build your team&apos;s audit, implementation,
                and compliance capabilities across quality, safety, environment, and security standards.
              </p>
            </div>

            {/* Hero Card */}
            <article className="relative flex flex-col items-stretch gap-6 overflow-hidden rounded-3xl border border-red-100/90 bg-white/95 p-4 shadow-[0_18px_60px_rgba(17,24,39,0.07)] sm:gap-8 sm:rounded-[2rem] sm:p-6 md:p-8 lg:flex-row lg:gap-10 lg:rounded-[2.25rem] lg:p-10">
              <div aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

              <div className="w-full shrink-0 lg:w-[44%]">
                <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-red-50 ring-1 ring-black/5 sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[380px]">
                  <Image
                    src="https://images.unsplash.com/photo-1544717297-fa65b969904e?auto=format&fit=crop&w=1200&q=85"
                    alt="ISO training classroom and certification workshop"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-xl border border-white/70 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-4 sm:py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-red-700 sm:text-xs">
                      Certified Training
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-slate-900 sm:text-sm">
                      Learn from industry experts
                    </p>
                  </figcaption>
                </figure>
              </div>

              <div className="flex w-full flex-col justify-center gap-4 text-left sm:gap-5 lg:w-[56%] lg:gap-6">
                <h3 className="relative inline-block text-xl font-bold tracking-tight text-[#111827] sm:text-2xl md:text-3xl lg:text-4xl">
                  Why Choose ISO Training?
                  <span aria-hidden="true" className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-[#E30613] sm:-bottom-3 sm:w-14" />
                </h3>

                <div className="space-y-3 pt-2 text-sm leading-7 text-[#526581] sm:text-base sm:leading-8 md:text-[17px]">
                  <p>
                    Our training programs combine theory with hands-on practice, preparing
                    professionals to implement, audit, and maintain ISO management systems
                    effectively within their organizations.
                  </p>
                  <p>
                    Whether you are starting your certification journey or advancing your auditing
                    career, our courses provide globally recognized credentials and practical skills.
                  </p>
                </div>

                <div className="mt-2 flex justify-start">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    type="button"
                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E30613] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(227,6,19,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-[0_12px_28px_rgba(227,6,19,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 active:translate-y-0 sm:w-auto sm:px-7 sm:text-base"
                  >
                    <span>Enroll in Training</span>
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

          {/* SECTION 2 — TRAINING PROGRAMS GRID */}
          <section aria-labelledby="programs-title">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
              <SectionBadge>Training Programs</SectionBadge>
              <SectionHeading className="mt-4">
                Available <span className="text-[#E30613]">ISO Training Programs</span>
              </SectionHeading>
              <p className="mx-auto mt-3 max-w-2xl px-2 text-sm leading-relaxed text-slate-500 sm:mt-4 sm:text-base md:text-lg">
                Select the program that matches your role, experience level, and standard of interest.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {TRAINING_PROGRAMS.map((program) => (
                <article
                  key={program.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.055)] transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-[0_26px_65px_rgba(127,29,29,0.13)] sm:p-7 md:p-8"
                >
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red-50 blur-3xl transition-all duration-300 group-hover:bg-red-100" />

                  <div className="relative z-10 mb-6 flex items-start justify-between sm:mb-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg shadow-red-700/20 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 sm:h-14 sm:w-14 md:h-16 md:w-16">
                      <program.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
                    </div>
                    <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-red-700 sm:px-3 sm:py-1.5 sm:text-[10px]">
                      {program.level}
                    </span>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <h3 className="mb-2 text-lg font-extrabold tracking-tight text-slate-900 sm:mb-3 sm:text-xl md:text-2xl">
                      {program.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600">
                      {program.desc}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                        <Clock className="h-4 w-4 text-red-600" />
                        <span>{program.duration}</span>
                      </div>
                      <LinkExternal href="#enroll">
                        Enroll now
                        <ArrowUpRight className="ml-1 h-4 w-4 text-red-600" />
                      </LinkExternal>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-red-800 to-red-500 transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              ))}
            </div>
          </section>

          {/* SECTION 3 — BENEFITS */}
          <section aria-labelledby="benefits-title">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-14">
              <SectionBadge>Why Train With Us</SectionBadge>
              <SectionHeading className="mt-4" highlight="Training">
                Benefits of ISO <span className="text-[#E30613]">Training</span>
              </SectionHeading>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 md:gap-4 lg:grid-cols-3 lg:gap-5">
              {BENEFITS.map((benefit, index) => (
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
                  <ArrowUpRight className="ml-auto hidden h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-600 sm:block" />
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4 — LEARNING PATHS */}
          <section aria-labelledby="paths-title" className="relative overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-white via-white to-red-50/70 p-6 shadow-[0_16px_50px_rgba(17,24,39,0.06)] sm:rounded-[2rem] sm:p-9 md:p-12 lg:rounded-[2.5rem] lg:p-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-red-100/60 blur-[90px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-rose-100/50 blur-[90px]" />

            <div className="relative z-10 mx-auto mb-8 max-w-2xl text-center sm:mb-10 md:mb-12">
              <SectionBadge>Learning Paths</SectionBadge>
              <h2
                id="paths-title"
                className="mt-4 text-balance text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl md:text-4xl lg:text-5xl"
              >
                Choose Your Learning Path
              </h2>
              <p className="mx-auto mt-3 max-w-xl px-2 text-sm leading-7 text-[#526581] sm:mt-4 sm:text-base md:text-lg">
                Progress from foundation to lead auditor with our structured training pathways.
              </p>
            </div>

            <div className="relative z-10 mx-auto flex max-w-5xl flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3">
              {LEARNING_PATHS.map((path) => (
                <span
                  key={path.label}
                  className="rounded-lg border border-red-100 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-red-300 hover:bg-white hover:text-red-800 hover:shadow-md sm:rounded-xl sm:px-4 sm:py-2 sm:text-xs md:px-5 md:py-2.5 md:text-sm lg:text-base"
                >
                  {path.label}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* MODAL POPUP FORM */}
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
                  Enroll in ISO Training
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
                  <label htmlFor="program" className="mb-1 block text-sm font-medium text-slate-700">
                    Training Program
                  </label>
                  <select
                    id="program" name="program"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 sm:py-3"
                  >
                    <option value="">Select a program</option>
                    {TRAINING_PROGRAMS.map((program) => (
                      <option key={program.title} value={program.title}>
                        {program.title} ({program.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mode" className="mb-1 block text-sm font-medium text-slate-700">
                    Training Mode
                  </label>
                  <select
                    id="mode" name="mode"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 sm:py-3"
                  >
                    <option value="online">Online (Live Virtual)</option>
                    <option value="classroom">Classroom (In-Person)</option>
                    <option value="self-paced">Self-Paced E-Learning</option>
                  </select>
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

function LinkExternal({ children, href }) {
  return (
    <a href={href} className="text-xs font-bold text-red-600 hover:text-red-800 transition-colors inline-flex items-center">
      {children}
    </a>
  );
}
