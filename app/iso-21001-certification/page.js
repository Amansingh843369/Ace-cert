'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Building2,
  CircleCheck,
  Globe,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  LineChart,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  UsersRound,
  Workflow,
} from 'lucide-react';

export default function Iso21001CertificationLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data Arrays - Updated for ISO 21001 (Educational Organizations) with RED Theme
  const benefitsList = [
    "Enhance learner satisfaction and outcomes",
    "Provide inclusive and equitable education",
    "Align educational mission with operations",
    "Improve institutional efficiency and processes",
    "Promote personalized learning experiences",
    "Strengthen credibility and global reputation",
    "Demonstrate commitment to excellence",
    "Meet diverse special educational needs",
    "Stimulate innovation in teaching methods",
    "Increase engagement of interested parties"
  ];

  const principles = [
    { id: "01", title: "Learner Focus", desc: "Focusing on the needs of learners and other beneficiaries.", icon: GraduationCap },
    { id: "02", title: "Visionary Leadership", desc: "Establishing unity of purpose for educational excellence.", icon: Target },
    { id: "03", title: "Engagement of People", desc: "Involving educators, staff, and the learning community.", icon: UsersRound },
    { id: "04", title: "Process Approach", desc: "Managing educational activities as interrelated processes.", icon: Workflow },
    { id: "05", title: "Continual Improvement", desc: "Consistently enhancing the learning system and curricula.", icon: TrendingUp },
    { id: "06", title: "Evidence-Based", desc: "Using academic data and analytics to drive decisions.", icon: BarChart3 },
    { id: "07", title: "Accessibility & Equity", desc: "Ensuring inclusive, fair, and accessible education for all.", icon: HeartHandshake },
  ];

  const industries = [
    "Universities & Colleges", "K-12 Schools", "Training Centers",
    "E-Learning Platforms", "Tutoring Services", "Corporate Training",
    "Vocational Institutes", "Special Education Centers", "Language Schools",
    "Early Childhood Education", "Adult Education Academies"
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfd] font-sans text-slate-900 selection:bg-red-200 selection:text-red-900">

      {/* Background Blobs - RED & WHITE Theme */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-red-100/50 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[28%] h-[460px] w-[460px] rounded-full bg-rose-100/40 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[10%] h-[520px] w-[520px] rounded-full bg-red-50 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-20 px-4 py-8 md:space-y-24 md:px-6 md:py-12 lg:space-y-28 lg:px-12 lg:py-16">

        {/* --- SECTION 1: Hero & Definition --- */}
        <section aria-labelledby="iso21001-title">
          <div className="mb-8 flex flex-col items-center text-center md:mb-10">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-red-100 bg-white/90 px-4 py-2 text-xs font-semibold text-red-800 shadow-[0_4px_16px_rgba(127,29,29,0.06)] md:mb-6 md:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40"></span>
                <span className="relative inline-flex h-full w-full rounded-full bg-[#E30613]"></span>
              </span>
              Global Education Standard
            </div>

            <h1 id="iso21001-title" className="mb-4 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              ISO 21001 <span className="text-[#E30613]">Certification</span>
            </h1>

            <h2 className="max-w-2xl px-2 text-pretty text-base font-medium leading-relaxed text-[#526581] sm:text-lg md:text-xl">
              Elevate your educational impact with the international standard for Educational Organizations Management Systems (EOMS).
            </h2>
          </div>

          <article className="relative flex flex-col items-center gap-7 overflow-hidden rounded-[1.75rem] border border-red-100/90 bg-white/95 p-5 shadow-[0_18px_60px_rgba(17,24,39,0.07)] sm:rounded-[2rem] sm:p-7 md:gap-10 md:p-9 lg:flex-row lg:items-stretch lg:gap-12 lg:rounded-[2.25rem] lg:p-11">
            <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

            <div className="order-1 flex w-full justify-center lg:w-[46%]">
              <figure className="relative aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-2xl bg-red-50 ring-1 ring-black/5 sm:rounded-[1.5rem] lg:h-full lg:aspect-auto">
                {/* Education-focused Image */}
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85"
                  alt="Students walking on a modern university campus representing ISO 21001 education standards"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-700">Educational Excellence</p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900">Empowering future generations</p>
                </figcaption>
              </figure>
            </div>

            <div className="order-2 flex w-full flex-col justify-center gap-4 text-center sm:gap-5 lg:w-[54%] lg:gap-6 lg:text-left">
              <h3 id="iso21001-introduction" className="relative mx-auto inline-block text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl md:text-[2rem] lg:mx-0 lg:text-4xl">
                What is ISO 21001?
                <span aria-hidden="true" className="absolute -bottom-3 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-[#E30613] lg:left-0 lg:translate-x-0" />
              </h3>

              <div className="mt-2 space-y-4 text-justify text-sm leading-7 text-[#526581] sm:text-base md:text-[17px] md:leading-8">
                <p>
                  ISO 21001 is an internationally recognized standard that specifies requirements for an <strong className="font-semibold text-[#111827]">Educational Organizations Management System (EOMS)</strong>. It provides a common management tool for organizations providing educational products and services capable of meeting the needs of learners and other beneficiaries.
                </p>
                <p>
                  Whether you are a university, a specialized training center, or an e-learning platform, this standard helps you align your educational mission with operational processes, driving inclusive, equitable, and high-quality education.
                </p>
              </div>

              <div className="mt-2 flex justify-center lg:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#E30613] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(227,6,19,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-[0_12px_28px_rgba(227,6,19,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 active:translate-y-0 sm:w-auto sm:text-base"
                >
                  <span>Get Certified Today</span>
                  <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                  <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
                </button>
              </div>

            </div>
          </article>
        </section>

        {/* --- SECTION 2: Importance & Benefits Grid --- */}
        <section aria-labelledby="iso21001-importance">
          <div className="relative z-20 flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-16">

            {/* IMAGE SECTION */}
            <div className="relative order-2 flex w-full justify-center lg:order-2 lg:w-[42%]">
              <figure className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-2xl bg-red-50 ring-1 ring-black/5 shadow-[0_16px_45px_rgba(17,24,39,0.10)] sm:rounded-[1.5rem] lg:h-full lg:aspect-auto">
                {/* Modern learning environment Image */}
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern classroom demonstrating interactive learning and ISO 21001 principles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-5 pb-5 pt-16">
                  <p className="text-sm font-semibold text-white">Better processes. Brighter futures.</p>
                </figcaption>
              </figure>
            </div>

            {/* TEXT SECTION */}
            <div className="order-1 flex w-full flex-col gap-6 md:gap-8 lg:order-1 lg:w-[58%]">
              <div className="text-center lg:text-left">
                <h3 id="iso21001-importance" className=" text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl md:text-4xl lg:text-5xl">
                  Why is <span className="text-[#E30613]">ISO 21001</span> Important?
                </h3>

                <p className="mt-4 text-left text-sm leading-7 text-[#526581] sm:text-base md:text-lg md:leading-8 text-justify">
                  Implementing ISO 21001 helps educational institutions demonstrate their commitment to delivering highly effective, equitable, and personalized learning experiences while optimizing operational resources.
                </p>
              </div>

              {/* Interactive Grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
                {benefitsList.map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative flex min-h-[78px] items-center gap-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3.5 md:p-4 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_14px_30px_rgba(127,29,29,0.10)] cursor-default"
                  >
                    <span className="absolute inset-y-3 left-0 w-1 rounded-r-full bg-red-600 scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700 ring-1 ring-red-100 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white group-hover:ring-red-700">
                      <CircleCheck className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-red-500">Benefit {String(index + 1).padStart(2, '0')}</span>
                      <span className="block text-sm font-semibold leading-snug text-slate-700 transition-colors group-hover:text-slate-950 md:text-[15px]">
                        {benefit}
                      </span>
                    </div>
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: Principles, Detailed Benefits & Scope --- */}
        <section className="space-y-20 md:space-y-28">

          {/* Sub-section 1: 7 Principles */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block py-1.5 px-5 rounded-full bg-red-50 text-red-700 text-xs font-bold tracking-[0.15em] uppercase mb-4 shadow-sm border border-red-100">
                Core Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Key Principles of <br className="hidden md:block" />
                <span className="text-[#E30613]">ISO 21001</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {principles.map((principle, index) => (
                <article
                  key={index}
                  className={`group relative rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(127,29,29,0.08)] overflow-hidden ${index === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  {/* Top Right Badge */}
                  <div className="absolute top-8 right-8">
                    <span className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px] font-bold tracking-[0.1em] text-slate-500 group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-red-700 transition-colors">
                      PRINCIPLE {principle.id}
                    </span>
                  </div>

                  <div className="relative z-0 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:ring-red-600">
                      <principle.icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>

                    <h4 className="text-xl font-bold tracking-tight text-slate-900 mb-3 group-hover:text-red-700 transition-colors">
                      {principle.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-slate-500 text-justify">
                      {principle.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sub-section 2: Detailed Benefits Cards */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="inline-flex items-center py-1.5 px-4 md:py-2 md:px-5 rounded-full bg-red-50 text-red-700 text-[10px] md:text-sm font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase mb-4 md:mb-5 border border-red-100 shadow-sm">
                Value Proposition
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Benefits of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">
                  Certification
                </span>
              </h2>

              <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto px-2 text-center ">
                Certification distinguishes your institution globally, appealing to students, parents, and sponsors who prioritize quality education, ethical practices, and measurable academic success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {[
                { icon: Users, label: "Learner Experience", title: "For The Students", items: ["Personalized learning plans", "Improved educational outcomes", "Inclusive & accessible environments", "Special needs accommodations", "Enhanced safety and well-being", "Fair assessment practices"] },
                { icon: BookOpen, label: "Operational Excellence", title: "For The Institution", items: ["Streamlined academic processes", "Optimized resource allocation", "Risk management & mitigation", "Continuous curriculum improvement", "Regulatory compliance tracking"] },
                { icon: Globe, label: "Global Reputation", title: "For Your Brand", items: ["International recognition", "Higher stakeholder trust", "Competitive enrollment advantage", "Partnership opportunities", "Proof of educational quality"] }
              ].map((card, idx) => (
                <article key={idx} className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.055)] transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_26px_65px_rgba(127,29,29,0.13)] md:rounded-[2rem] md:p-8">

                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red-50 blur-3xl transition-all duration-300 group-hover:bg-red-100" />

                  <div className="relative z-10 mb-7 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg shadow-red-700/20 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 md:h-16 md:w-16">
                      <card.icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-red-700">
                      0{idx + 1} / 03
                    </span>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-700 md:text-xs">
                      {card.label}
                    </p>
                    <h3 className="mb-5 text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
                      {card.title}
                    </h3>

                    <div className="mb-5 h-px w-full bg-gradient-to-r from-red-200 via-red-100 to-transparent md:mb-6" />

                    <ul className="space-y-3">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700 transition-colors group-hover:bg-red-100">
                            <CircleCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
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
          </div>

          {/* Sub-section 3: Who Can Implement? */}
          <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-white via-white to-red-50/70 p-7 shadow-[0_16px_50px_rgba(17,24,39,0.06)] sm:rounded-[2rem] sm:p-9 md:p-12 lg:rounded-[2.5rem] lg:p-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-red-100/60 blur-[90px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-rose-100/50 blur-[90px]" />

            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 relative z-10 flex flex-col items-center">
              <h2 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
                Who Can Implement It?
              </h2>

              <p className="px-2 text-center text-sm leading-7 text-[#526581] md:text-base lg:text-lg text-center">
                ISO 21001 is applicable to any organization that uses a curriculum to support the development of competence through teaching, learning, or research—regardless of its size, type, or delivery method.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 lg:gap-4 relative z-10 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="rounded-xl border border-red-100 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-red-300 hover:bg-white hover:text-red-800 hover:shadow-md md:px-5 md:py-2.5 md:text-sm lg:text-base"
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

            <div className="relative flex h-32 items-center justify-center bg-gradient-to-r from-red-800 to-[#E30613]">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div className="text-center text-white z-10">
                <h3 id="modal-title" className="text-2xl font-bold">Get Certified</h3>
                <p className="text-red-100 text-sm">Fill the form below</p>
              </div>
            </div>

            <div className="p-8">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="john@institute.edu" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-slate-700 mb-1">Institution Name</label>
                  <input type="text" id="org" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Global Institute of Technology" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                  <textarea id="message" rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Tell us about your educational institution..."></textarea>
                </div>

                <button type="button" className="w-full py-3.5 bg-gradient-to-r from-red-700 to-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-700/25 hover:shadow-red-700/40 hover:-translate-y-0.5 transition-all duration-200">
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