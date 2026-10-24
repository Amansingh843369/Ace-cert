'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  CircleCheck,
  BrainCircuit,
  Lock,
  ShieldCheck,
  Target,
  TrendingUp,
  Eye,
  Scale,
  Cpu,
  Network,
} from 'lucide-react';

export default function IsoCertificationLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data Arrays - Updated for ISO 42001(AIMS) based on the provided image
  const benefitsList = [
    "Establish responsible AI governance",
    "Manage AI-related risks and opportunities",
    "Promote ethical and trustworthy AI practices",
    "Enhance transparency and accountability",
    "Improve regulatory and legal compliance",
    "Protect privacy and data security",
    "Reduce bias and unintended consequences",
    "Strengthen stakeholder confidence and trust",
    "Support innovation and responsible AI adoption",
    "Promote continual improvement"
  ];

  // Principles mapped to AI Management / ISO 42001 context
  const principles = [
    { id: "01", title: "Ethical AI", desc: "Ensuring AI systems are designed and deployed fairly, without harmful bias.", icon: Scale },
    { id: "02", title: "Transparency", desc: "Maintaining clear documentation and explainability of AI models and decisions.", icon: Eye },
    { id: "03", title: "Accountability", desc: "Defining clear roles and responsibilities for AI governance and lifecycle management.", icon: ShieldCheck },
    { id: "04", title: "Risk Management", desc: "Identifying and mitigating AI-specific risks like data poisoning and model drift.", icon: Target },
    { id: "05", title: "Data Privacy", desc: "Protecting personal and sensitive data used to train and operate AI systems.", icon: Lock },
    { id: "06", title: "Security & Robustness", desc: "Securing AI infrastructure against cyber threats and adversarial attacks.", icon: Cpu },
    { id: "07", title: "Continual Improvement", desc: "Regularly monitoring and enhancing AI performance, safety, and compliance.", icon: TrendingUp },
  ];

  const industries = [
    "IT & Software Companies", "Banking & Finance", "Healthcare & MedTech",
    "Government & Public Sector", "E-commerce & Retail", "Telecommunications",
    "Automotive & Autonomous", "Manufacturing", "Legal & Consulting",
    "Media & Entertainment", "Education & EdTech"
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfd] font-sans text-slate-900 selection:bg-red-200 selection:text-red-900">

      {/* Background Blobs - RED & WHITE Theme */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-red-100/50 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[28%] h-[460px] w-[460px] rounded-full bg-rose-100/40 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[10%] h-[520px] w-[520px] rounded-full bg-red-50 blur-[130px]" />

      {/* Spacing reduced for compact layout */}
      <div className="relative z-10 mx-auto max-w-7xl space-y-12 px-4 py-8 md:space-y-16 md:px-6 md:py-10 lg:space-y-20 lg:px-12 lg:py-12">

        {/* --- SECTION 1: Hero & Definition --- */}
        <section aria-labelledby="iso42001-title">
          <div className="mb-6 flex flex-col items-center text-center md:mb-8">
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-red-100 bg-white/90 px-4 py-1.5 text-xs font-semibold text-red-800 shadow-[0_4px_16px_rgba(127,29,29,0.06)] md:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40"></span>
                <span className="relative inline-flex h-full w-full rounded-full bg-[#E30613]"></span>
              </span>
              Global AI Governance Standard
            </div>

            <h1 id="iso42001-title" className="mb-3 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              ISO 42001 <span className="text-[#E30613]">Certification</span>
            </h1>

            <h2 className="max-w-3xl px-2 text-pretty text-base font-medium leading-relaxed text-[#526581] sm:text-lg md:text-xl">
              Govern your AI responsibly with the world's first international standard for Artificial Intelligence Management Systems (AIMS).
            </h2>
          </div>

          <article className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[1.75rem] border border-red-100/90 bg-white/95 p-5 shadow-[0_18px_60px_rgba(17,24,39,0.07)] sm:rounded-[2rem] sm:p-6 md:gap-8 md:p-8 lg:flex-row lg:items-stretch lg:gap-10 lg:rounded-[2.25rem] lg:p-10">
            <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

            <div className="order-1 flex w-full justify-center lg:w-[46%]">
              <figure className="relative aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-2xl bg-red-50 ring-1 ring-black/5 sm:rounded-[1.5rem] lg:h-full lg:aspect-auto">
                {/* AI / Neural Network Image */}
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85"
                  alt="Artificial Intelligence neural network and data processing"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-xl border border-white/70 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-700">Responsible AI</p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900">Ethical & Secure</p>
                </figcaption>
              </figure>
            </div>

            <div className="order-2 flex w-full flex-col justify-center gap-4 text-center sm:gap-4 lg:w-[54%] lg:gap-5 lg:text-left">
              <h3 id="iso42001-introduction" className="relative mx-auto inline-block text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl md:text-[2rem] lg:mx-0 lg:text-4xl">
                What is ISO/IEC 42001?
                <span aria-hidden="true" className="absolute -bottom-2 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-[#E30613] lg:left-0 lg:translate-x-0" />
              </h3>

              {/* Content exactly from the image */}
              <div className="mt-2 space-y-3 text-justify text-sm leading-6 text-[#526581] sm:text-base md:text-[16px] md:leading-7">
                <p>
                  ISO 42001 is the world's first internationally recognized standard for <strong className="font-semibold text-[#111827]">Artificial Intelligence Management Systems (AIMS)</strong>. It provides a framework for organizations to establish, implement, maintain, and continually improve the governance and management of Artificial Intelligence (AI) systems, ensuring their responsible, ethical, transparent, and secure use.
                </p>
                <p>
                  The standard is jointly published by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC) and is applicable to organizations of all sizes and sectors that develop, provide, or use AI-based products, services, and solutions.
                </p>
              </div>

              <div className="mt-2 flex justify-center lg:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#E30613] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_22px_rgba(227,6,19,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-[0_12px_28px_rgba(227,6,19,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 active:translate-y-0 sm:w-auto sm:text-base"
                >
                  <span>Get Certified Today</span>
                  <svg className="w-4 h-4 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                  <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
                </button>
              </div>

            </div>
          </article>
        </section>

        {/* --- SECTION 2: Importance & Benefits Grid --- */}
        <section aria-labelledby="iso42001-importance">
          <div className="relative z-20 flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-12">

            {/* IMAGE SECTION (Now lg:order-2 so it appears on the right) */}
            <div className="relative order-2 flex w-full justify-center lg:order-2 lg:w-[42%]">
              <figure className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-2xl bg-red-50 ring-1 ring-black/5 shadow-[0_16px_45px_rgba(17,24,39,0.10)] sm:rounded-[1.5rem] lg:h-full lg:aspect-auto">
                {/* AI Ethics / Tech Team Image */}
                <Image
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=85"
                  alt="Tech team discussing AI ethics and data governance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-5 pb-4 pt-12">
                  <p className="text-sm font-semibold text-white">Empowering trustworthy AI.</p>
                </figcaption>
              </figure>
            </div>

            {/* TEXT SECTION (Now lg:order-1 so it appears on the left) */}
            <div className="order-1 flex w-full flex-col gap-5 md:gap-6 lg:order-1 lg:w-[58%]">
              <div className="text-center lg:text-left">
                <h3 id="iso42001-importance" className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl md:text-4xl lg:text-4xl">
                  Why is <span className="text-[#E30613]">ISO/IEC 42001</span> Important?
                </h3>

                {/* TEXT JUSTIFY APPLIED HERE & typo fixed */}
                <p className="mt-3 text-justify text-sm leading-6 text-[#526581] sm:text-base md:text-[16px] md:leading-7">
                  Implementing ISO 42001 helps organizations proactively manage AI risks, prevent algorithmic bias, ensure strict regulatory compliance, and build unshakeable trust with customers who demand ethical and transparent AI.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:gap-3">
                {benefitsList.map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative flex min-h-[68px] items-center gap-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white p-3 md:p-3.5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-[0_14px_30px_rgba(127,29,29,0.10)] cursor-default"
                  >
                    <span className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-red-600 scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-700 ring-1 ring-red-100 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white group-hover:ring-red-700">
                      <CircleCheck className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[13px] font-semibold leading-snug text-slate-700 transition-colors group-hover:text-slate-950 md:text-sm">
                        {benefit}
                      </span>
                    </div>
                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* --- SECTION 3: Principles, Detailed Benefits & Scope --- */}
        <section className="space-y-12 md:space-y-16">

          {/* Sub-section 1: 7 Principles */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
              <span className="inline-block py-1 px-4 rounded-full bg-red-50 text-red-700 text-[10px] font-bold tracking-[0.15em] uppercase mb-3 shadow-sm border border-red-100">
                Core Pillars
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Key Principles of <br className="hidden md:block" />
                <span className="text-[#E30613]">ISO/IEC 42001</span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-500 px-4 max-w-2xl mx-auto">
                ISO 42001is based on key AI management principles designed to ensure artificial intelligence is developed and deployed safely, ethically, and effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {principles.map((principle, index) => (
                <article
                  key={index}
                  className={`group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(127,29,29,0.08)] overflow-hidden ${index === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[9px] font-bold tracking-[0.1em] text-slate-500 group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-red-700 transition-colors">
                      {principle.id}
                    </span>
                  </div>

                  <div className="relative z-0 flex flex-col h-full">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-100 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:ring-red-600">
                      <principle.icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <h4 className="text-lg font-bold tracking-tight text-slate-900 mb-2 group-hover:text-red-700 transition-colors">
                      {principle.title}
                    </h4>

                    <p className="text-[13px] leading-relaxed text-slate-500">
                      {principle.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sub-section 2: Detailed Benefits Cards */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
              <span className="inline-flex items-center py-1 px-4 md:py-1.5 md:px-5 rounded-full bg-red-50 text-red-700 text-[10px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase mb-3 md:mb-4 border border-red-100 shadow-sm">
                Value Proposition
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Benefits of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">
                  Certification
                </span>
              </h2>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-500 max-w-2xl mx-auto px-2 text-center">
                Achieving ISO 42001certification acts as a powerful differentiator, proving to regulators, partners, and users that your AI systems are governed with the highest global standards of ethics, safety, and accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { icon: BrainCircuit, label: "Governance", title: "For AI Systems", items: ["Algorithmic bias mitigation", "Model explainability", "AI lifecycle management", "Data quality assurance", "Performance monitoring", "Adversarial attack defense", "Safe AI deployment"] },
                { icon: ShieldCheck, label: "Compliance", title: "For Regulations", items: ["EU AI Act alignment", "Global AI policy readiness", "Audit trail maintenance", "Legal requirement fulfillment", "Privacy law integration"] },
                { icon: TrendingUp, label: "Business", title: "For Growth", items: ["Competitive bidding advantage", "Accelerated AI adoption", "Enhanced brand reputation", "Investor confidence", "Customer & user trust"] }
              ].map((card, idx) => (
                <article key={idx} className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_26px_65px_rgba(127,29,29,0.13)] md:rounded-[1.75rem] md:p-6">

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-50 blur-3xl transition-all duration-300 group-hover:bg-red-100" />

                  <div className="relative z-10 mb-5 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-700 text-white shadow-lg shadow-red-700/20 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 md:h-14 md:w-14">
                      <card.icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-red-700">
                      0{idx + 1} / 03
                    </span>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-red-700 md:text-xs">
                      {card.label}
                    </p>
                    <h3 className="mb-4 text-lg font-extrabold tracking-tight text-slate-900 md:text-xl">
                      {card.title}
                    </h3>

                    <div className="mb-4 h-px w-full bg-gradient-to-r from-red-200 via-red-100 to-transparent md:mb-5" />

                    <ul className="space-y-2.5">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700 transition-colors group-hover:bg-red-100">
                            <CircleCheck className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="leading-5">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-red-800 to-red-500 transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              ))}
            </div>
          </div>

          {/* Sub-section 3: Who Can Implement? */}
          <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-white via-white to-red-50/70 p-6 shadow-[0_16px_50px_rgba(17,24,39,0.06)] sm:rounded-[1.75rem] sm:p-8 md:p-10 lg:rounded-3xl lg:p-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-red-100/60 blur-[90px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-rose-100/50 blur-[90px]" />

            <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 relative z-10 flex flex-col items-center">
              <h2 className="mb-2 text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl md:text-4xl">
                Who Can Implement It?
              </h2>

              <p className="px-2 text-center text-sm leading-6 text-[#526581] md:text-base">
                ISO 42001is essential for any organization that develops, provides, or uses AI-based products and services. From tech startups and SaaS platforms to financial institutions, healthcare providers, and government agencies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 relative z-10 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="rounded-lg border border-red-100 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-red-300 hover:bg-white hover:text-red-800 hover:shadow-md md:px-4 md:py-2 md:text-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

        </section>
      </div>

      {/* --- MODAL POPUP FORM --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

            <div className="relative flex h-28 items-center justify-center bg-gradient-to-r from-red-800 to-[#E30613]">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div className="text-center text-white z-10">
                <h3 id="modal-title" className="text-xl font-bold">Get Certified</h3>
                <p className="text-red-100 text-xs">Fill the form below</p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white text-sm" placeholder="John Doe" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white text-sm" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white text-sm" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-slate-700 mb-1">Organization Name</label>
                  <input type="text" id="org" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white text-sm" placeholder="AI Innovations Ltd." />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                  <textarea id="message" rows="3" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none text-sm" placeholder="Tell us about your AI governance needs..."></textarea>
                </div>

                <button type="button" className="w-full py-3 bg-gradient-to-r from-red-700 to-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-700/25 hover:shadow-red-700/40 hover:-translate-y-0.5 transition-all duration-200 text-sm">
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