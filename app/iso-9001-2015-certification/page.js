'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function IsoCertificationLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data Arrays
  const benefitsList = [
    "Improve customer satisfaction",
    "Enhance product & service quality",
    "Streamline business processes",
    "Reduce errors and rework",
    "Improve operational efficiency",
    "Strengthen risk management",
    "Increase employee engagement",
    "Build customer confidence",
    "Enhance market reputation",
    "Support continual improvement"
  ];

  const principles = [
    { id: "01", title: "Customer Focus", desc: "Prioritizing customer needs & expectations." },
    { id: "02", title: "Leadership", desc: "Establishing unity of purpose and direction." },
    { id: "03", title: "Engagement of People", desc: "Empowering and involving employees." },
    { id: "04", title: "Process Approach", desc: "Managing activities as interrelated processes." },
    { id: "05", title: "Improvement", desc: "Ongoing focus on enhancing performance." },
    { id: "06", title: "Evidence-Based Decision", desc: "Decisions based on data and information." },
    { id: "07", title: "Relationship Management", desc: "Managing relationships with interested parties." },
  ];

  const industries = [
    "Manufacturing", "Service Providers", "IT & Software",
    "Educational Institutions", "Healthcare", "Construction",
    "Laboratories", "Government", "Logistics",
    "Startups & SMEs", "Large Enterprises"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden font-sans selection:bg-red-200 selection:text-red-900">
      
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[30%] right-0 w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-12 lg:py-20 space-y-20 md:space-y-28 relative z-10">
        
        {/* --- SECTION 1: Hero & Definition --- */}
        <section>
          <div className="text-center mb-10 md:mb-14 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-red-100 shadow-sm text-red-700 font-semibold text-xs md:text-sm mb-6 hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-red-600"></span>
              </span>
              Global Quality Standard
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-slate-900 leading-[1.1]">
              ISO 9001{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">
                Certification
              </span>
            </h1>
            
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-slate-500 max-w-2xl px-2">
              Elevate your business with the ultimate Quality Management System (QMS) framework.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 bg-white p-6 md:p-10 lg:p-12 rounded-3xl md:rounded-[2.5rem] border border-red-100 shadow-[0_24px_80px_rgba(127,29,29,0.10)]">
            
            <div className="w-full lg:w-5/12 flex justify-center order-1 lg:order-1">
              <div className="relative w-full max-w-[460px] aspect-[4/3] overflow-hidden rounded-[2rem] border-[6px] border-white shadow-[0_20px_55px_rgba(127,29,29,0.18)] ring-1 ring-red-100">
                <Image
                  src="/your_success.jpg"
                  alt="Business professionals collaborating on quality improvement"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-700">Quality in action</p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900">Built around your people</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col gap-4 md:gap-6 justify-center order-2 lg:order-2 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 relative inline-block mx-auto lg:mx-0">
                What is ISO 9001?
                <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-20 h-1.5 bg-gradient-to-r from-red-700 to-red-500 rounded-full"></div>
              </h3>
              <div className="space-y-3 md:space-y-4 text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed text-justify md:text-left mt-2">
                <p>
                  ISO 9001 is the world&apos;s most recognized standard for <strong className="text-slate-900">Quality Management Systems (QMS)</strong>. It provides a robust framework for organizations to consistently deliver products and services that meet customer requirements as well as applicable statutory and regulatory demands.
                </p>
                <p>
                  The standard is published by the International Organization for Standardization and is applicable to organizations of all sizes and sectors globally.
                </p>
              </div>
              
              {/* --- NEW ENQUIRE BUTTON --- */}
              <div className="mt-6 flex justify-center lg:justify-start">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-red-700 to-red-600 rounded-full hover:from-red-800 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 shadow-lg shadow-red-700/25 hover:shadow-red-700/40 hover:-translate-y-1"
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
        <section>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-20">
            
            <div className="w-full lg:w-5/12 flex justify-center order-2 lg:order-1 relative">
              <div className="relative w-full max-w-[480px] aspect-[4/3] overflow-hidden rounded-[2rem] border-[6px] border-white shadow-[0_20px_55px_rgba(127,29,29,0.15)] ring-1 ring-red-100">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                  alt="A professional team working together in a modern office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-5 pb-5 pt-16">
                  <p className="text-sm font-semibold text-white">Stronger processes. Better outcomes.</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-7/12 flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  Why is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">ISO 9001</span> Important?
                </h3>
                <p className="mt-3 md:mt-4 text-slate-600 text-sm md:text-base lg:text-lg text-justify md:text-left">
                  Unlock global quality standards, build unbreakable customer trust, and scale your business operations efficiently. Certification is more than a badge—it&apos;s a commitment to excellence.
                </p>
              </div>

              {/* Interactive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {benefitsList.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-red-200 hover:bg-red-50/60 transition-all duration-300 cursor-default"
                  >
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300 shadow-inner">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-slate-700 group-hover:text-slate-900 font-semibold text-xs sm:text-sm md:text-[15px] transition-colors duration-300 leading-snug">
                      {benefit}
                    </span>
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
                7 Quality Management <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">Principles</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className={`group relative p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${index === 6 ? 'sm:col-span-2 lg:col-span-2 lg:col-start-2' : ''}`}
                >
                  <div className="absolute -right-4 -top-6 text-6xl md:text-8xl font-black text-slate-50 group-hover:text-red-50 transition-colors duration-300 pointer-events-none select-none">
                    {principle.id}
                  </div>
                  
                  <div className="relative z-0 flex flex-col gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-red-100 to-red-50 text-red-700 flex items-center justify-center font-bold text-lg md:text-xl shadow-sm border border-white">
                      {parseInt(principle.id)}
                    </div>
                    <h4 className="text-slate-800 font-bold text-lg md:text-xl group-hover:text-red-700 transition-colors">
                      {principle.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 text-justify leading-relaxed">
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
                  Certification
                </span>
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto px-2">
                Certification strengthens your organization, builds customer confidence,
                and creates new opportunities for sustainable business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {[
                { icon: "🏢", label: "Organization", title: "For Your Business", items: ["Improved business performance", "Better process control", "Reduced operational costs", "Increased productivity", "Enhanced risk management", "Greater consistency", "Improved supplier performance"] },
                { icon: "🤝", label: "Customer Value", title: "For Your Customers", items: ["Consistent product quality", "Increased confidence", "Better customer experience", "Faster response times", "High satisfaction rates"] },
                { icon: "🚀", label: "Growth", title: "For Market Growth", items: ["Competitive advantage", "Eligibility for tenders", "Increased opportunities", "Enhanced brand image", "International market access"] }
              ].map((card, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl md:rounded-[2rem] border border-red-100 bg-white p-6 md:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)] flex flex-col">
                  
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-100/60 blur-3xl transition-all duration-300 group-hover:bg-red-200/70" />
                  
                  <div className="relative z-10 flex items-center justify-between mb-6 md:mb-8">
                    <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-2xl md:text-3xl shadow-lg shadow-red-600/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {card.icon}
                    </div>
                    <span className="text-4xl md:text-5xl font-black text-red-50 group-hover:text-red-100 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <p className="mb-1 md:mb-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-red-700">
                      {card.label}
                    </p>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4 md:mb-6">
                      {card.title}
                    </h3>
                    
                    <div className="h-px w-full bg-gradient-to-r from-red-200 via-red-100 to-transparent mb-5 md:mb-6" />
                    
                    <ul className="space-y-2.5 md:space-y-3">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm lg:text-base text-slate-600">
                          <span className="mt-0.5 flex h-4 w-4 md:h-5 md:w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700 text-[10px] font-bold transition-colors group-hover:bg-red-600 group-hover:text-white">
                            ✓
                          </span>
                          <span className="leading-snug md:leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-700 to-red-500 transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Sub-section 3: Who Can Implement? */}
          <div className="relative rounded-2xl md:rounded-[3rem] overflow-hidden bg-red-950 shadow-2xl p-8 md:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-red-600/25 to-rose-500/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-tr from-red-500/20 to-rose-400/15 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 relative z-10 flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 text-white leading-tight">
                Who Can Implement It?
              </h2>
              <p className="text-red-100/90 text-sm md:text-base lg:text-lg text-justify md:text-center px-2">
                ISO 9001 is universal. It adapts flawlessly to organizations of any size, sector, or industry globally.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 relative z-10 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 md:px-5 md:py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white text-xs md:text-sm lg:text-base font-medium hover:bg-white hover:text-slate-900 transition-all duration-200 cursor-default hover:scale-105 active:scale-95 shadow-lg"
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
            <div className="relative h-32 bg-gradient-to-r from-red-800 to-red-600 flex items-center justify-center">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
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

    </div>
  );
}