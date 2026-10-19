'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  CircleCheck,
  HeartHandshake,
  MessageSquareQuote,
  ShieldCheck,
  Target,
  TrendingUp,
  UsersRound,
  Workflow,
} from 'lucide-react';

export default function IsoCertificationLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data Arrays - Updated for ISO 10002
  const benefitsList = [
    "Improve customer satisfaction",
    "Strengthen customer trust and loyalty",
    "Enhance complaint handling processes",
    "Resolve customer issues effectively and fairly",
    "Identify opportunities for business improvement",
    "Reduce recurring complaints",
    "Improve service quality and customer experience",
    "Increase customer retention",
    "Enhance organizational reputation",
    "Support continual improvement"
  ];

  const principles = [
    { id: "01", title: "Visibility", desc: "Making complaint handling information easily accessible.", icon: Target },
    { id: "02", title: "Accessibility", desc: "Ensuring complainants can easily lodge complaints.", icon: UsersRound },
    { id: "03", title: "Responsiveness", desc: "Acknowledging and resolving complaints promptly.", icon: TrendingUp },
    { id: "04", title: "Objectivity", desc: "Handling complaints in an equitable and unbiased manner.", icon: ShieldCheck },
    { id: "05", title: "Charges", desc: "No charges for lodging or resolving a complaint.", icon: Building2 },
    { id: "06", title: "Confidentiality", desc: "Protecting personal information of the complainant.", icon: Workflow },
    { id: "07", title: "Customer-focused", desc: "Being transparent, responsive, and fair.", icon: HeartHandshake },
  ];

  const industries = [
    "Retail & E-commerce", "Banking & Finance", "IT & Software",
    "Healthcare Services", "Hospitality & Tourism", "Telecommunications",
    "Public Sector", "Education", "Logistics & Transport",
    "Startups & SMEs", "Large Enterprises"
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfd] font-sans text-slate-900 selection:bg-red-200 selection:text-red-900">
      
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-red-100/50 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[28%] h-[460px] w-[460px] rounded-full bg-rose-100/40 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[10%] h-[520px] w-[520px] rounded-full bg-red-50 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-20 px-4 py-8 md:space-y-24 md:px-6 md:py-12 lg:space-y-28 lg:px-12 lg:py-16">
        
        {/* --- SECTION 1: Hero & Definition --- */}
        <section aria-labelledby="iso10002-title">
          <div className="mb-8 flex flex-col items-center text-center md:mb-10">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-red-100 bg-white/90 px-4 py-2 text-xs font-semibold text-red-800 shadow-[0_4px_16px_rgba(127,29,29,0.06)] md:mb-6 md:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40"></span>
                <span className="relative inline-flex h-full w-full rounded-full bg-[#E30613]"></span>
              </span>
              Global Standard for Complaints
            </div>

            <h1 id="iso10002-title" className="mb-4 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              ISO 10002 <span className="text-[#E30613]">Certification</span>
            </h1>
            
            <h2 className="max-w-2xl px-2 text-pretty text-base font-medium leading-relaxed text-[#526581] sm:text-lg md:text-xl">
              Master effective complaint handling and elevate customer satisfaction with a structured, globally recognized framework.
            </h2>
          </div>

          <div className="relative flex flex-col items-center gap-7 overflow-hidden rounded-[1.75rem] border border-red-100/90 bg-white/95 p-5 shadow-[0_18px_60px_rgba(17,24,39,0.07)] sm:rounded-[2rem] sm:p-7 md:gap-10 md:p-9 lg:flex-row lg:items-stretch lg:gap-12 lg:rounded-[2.25rem] lg:p-11">
            <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
            
            <div className="order-1 flex w-full justify-center lg:w-[46%]">
              <div className="relative aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-2xl bg-red-50 ring-1 ring-black/5 sm:rounded-[1.5rem] lg:h-full lg:aspect-auto">
                <Image
                  src="/37.1.png" 
                  alt="Customer support team helping clients"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-700">Complaint Resolution</p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900">Turning feedback into value</p>
                </div>
              </div>
            </div>

            <div className="order-2 flex w-full flex-col justify-center gap-4 text-center sm:gap-5 lg:w-[54%] lg:gap-6 lg:text-left">
              <h3 id="iso10002-introduction" className="relative mx-auto inline-block text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl md:text-[2rem] lg:mx-0 lg:text-4xl">
                What is ISO 10002?
                <span aria-hidden="true" className="absolute -bottom-3 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-[#E30613] lg:left-0 lg:translate-x-0" />
              </h3>
              <div className="mt-2 space-y-4 text-left text-sm leading-7 text-[#526581] sm:text-base md:text-[17px] md:leading-8">
                <p>
                  ISO 10002 is an internationally recognized standard that provides guidelines for <strong className="font-semibold text-[#111827]">effective complaints handling</strong> within organizations. It helps establish a structured and customer-focused process for receiving, managing, investigating, and resolving customer complaints while improving overall satisfaction.
                </p>
                <p>
                  The standard is published by the International Organization for Standardization and is applicable to organizations of all sizes and sectors that seek to enhance customer experience and strengthen customer relationships.
                </p>
              </div>
              
              {/* --- NEW ENQUIRE BUTTON --- */}
              <div className="mt-2 flex justify-center lg:justify-start">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#E30613] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(227,6,19,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-[0_12px_28px_rgba(227,6,19,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 active:translate-y-0 sm:w-auto sm:text-base"
                >
                  <span>Get Certified Today</span>
                  <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* --- SECTION 2: Importance & Benefits Grid --- */}
        <section aria-labelledby="iso10002-importance">
          <div className="relative z-20 flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-16">
            <div className="relative order-2 flex w-full justify-center lg:order-1 lg:w-[42%]">
              <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-2xl bg-red-50 ring-1 ring-black/5 shadow-[0_16px_45px_rgba(17,24,39,0.10)] sm:rounded-[1.5rem] lg:h-full lg:aspect-auto">
                <Image
                  src="/37.png"
                  alt="Customer service representative assisting a client"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-5 pb-5 pt-16">
                  <p className="text-sm font-semibold text-white">Better resolution. Happier customers.</p>
                </div>
              </div>
            </div>

            <div className="order-1 flex w-full flex-col gap-6 md:gap-8 lg:order-2 lg:w-[58%]">
              <div className="text-center lg:text-left">
                <h3 id="iso10002-importance" className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl md:text-4xl lg:text-5xl">
                  Why is <span className="text-[#E30613]">ISO 10002</span> Important?
                </h3>
                <p className="mt-4 text-left text-sm leading-7 text-[#526581] sm:text-base md:text-lg md:leading-8">
                  Implementing ISO 10002 helps organizations build unbreakable customer trust, resolve issues fairly, and turn negative experiences into opportunities for growth.
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
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="inline-block py-1 px-4 md:py-1.5 md:px-5 rounded-full bg-red-50 text-red-700 text-xs md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4 shadow-sm border border-red-100">
                Core Pillars
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Guiding Principles for <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">Complaint Handling</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className={`group relative min-h-[218px] rounded-3xl border border-slate-200/80 bg-white p-6 md:p-7 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-[0_22px_50px_rgba(127,29,29,0.11)] overflow-hidden ${index === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-rose-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-5 -top-8 select-none text-[112px] font-black leading-none text-slate-50 transition-colors duration-300 group-hover:text-red-50">
                    {principle.id.slice(1)}
                  </div>
                  
                  <div className="relative z-0 flex h-full flex-col">
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-white text-red-700 shadow-sm ring-1 ring-red-100 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white group-hover:ring-red-700">
                        <principle.icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-slate-400 transition-colors group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-red-600">
                        PRINCIPLE {principle.id}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-red-700 md:text-xl">
                      {principle.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {principle.desc}
                    </p>
                   </div>
                </div>
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
                  Implementation
                </span>
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto px-2">
                A robust complaint management system strengthens your organization, builds customer confidence, and creates new opportunities for sustainable business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {[
                { icon: Building2, label: "Organization", title: "For Your Business", items: ["Improved operational efficiency", "Reduced recurring complaints", "Better risk management", "Data-driven decision making", "Enhanced staff competence", "Stronger internal processes", "Cost reduction"] },
                { icon: HeartHandshake, label: "Customer Value", title: "For Your Customers", items: ["Fair and consistent treatment", "Faster resolution times", "Increased trust and loyalty", "Transparent communication", "Higher satisfaction levels"] },
                { icon: TrendingUp, label: "Growth", title: "For Market Growth", items: ["Competitive advantage", "Enhanced brand reputation", "Positive word-of-mouth", "Customer retention", "New market opportunities"] }
              ].map((card, idx) => (
                <div key={idx} className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.055)] transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_26px_65px_rgba(127,29,29,0.13)] md:rounded-[2rem] md:p-8">
                  
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
                </div>
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
              <p className="px-2 text-center text-sm leading-7 text-[#526581] md:text-base lg:text-lg">
                ISO 10002 is universal. Any organization that interacts with customers and wants to improve their complaint handling process can benefit.
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            
            {/* Decorative Header */}
            <div className="relative flex h-32 items-center justify-center bg-gradient-to-r from-red-800 to-[#E30613]">
               <button 
                 onClick={() => setIsModalOpen(false)}
                 className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
               </button>
               <div className="text-center text-white z-10">
                 <h3 className="text-2xl font-bold">Get Certified</h3>
                 <p className="text-red-100 text-sm">Fill the form below</p>
               </div>
            </div>

            {/* Form Body */}
            <div className="p-8">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Your Company Ltd." />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                  <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Tell us about your requirements..."></textarea>
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