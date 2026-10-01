'use client';

import React from 'react';

export default function Iso22000Layout() {
  // Data Arrays based on ISO 22000 content
  const benefitsList = [
    "Ensure food safety throughout the supply chain",
    "Identify and control food safety hazards",
    "Meet regulatory and legal requirements",
    "Enhance consumer confidence and trust",
    "Improve product quality and consistency",
    "Reduce food safety risks and incidents",
    "Strengthen traceability and transparency",
    "Improve operational efficiency",
    "Enhance brand reputation",
    "Promote continual improvement"
  ];

  const principles = [
    { id: "01", title: "Hazard Control", desc: "Systematically identifying and controlling biological, chemical, and physical food safety hazards." },
    { id: "02", title: "HACCP Approach", desc: "Integrating Hazard Analysis and Critical Control Points (HACCP) principles into operations." },
    { id: "03", title: "Interactive Comm.", desc: "Ensuring effective communication across the food chain, from suppliers to consumers." },
    { id: "04", title: "Prerequisite Programs", desc: "Establishing basic conditions and activities necessary to maintain a hygienic environment." },
    { id: "05", title: "Risk-Based Thinking", desc: "Proactively addressing risks and opportunities within the food safety management system." },
    { id: "06", title: "Regulatory Compliance", desc: "Ensuring strict adherence to statutory and regulatory food safety requirements." },
    { id: "07", title: "Supply Chain Mgmt", desc: "Monitoring and managing food safety practices across all suppliers and vendors." },
    { id: "08", title: "Continual Improvement", desc: "Continuously evaluating and enhancing the food safety management procedures." },
  ];

  const industries = [
    "Food Manufacturers", "Food Processing Companies", "Restaurants & Catering Services",
    "Food Packaging Companies", "Food Storage & Warehousing", "Food Distributors & Wholesalers",
    "Retail Food Businesses", "Dairy & Beverage Manufacturers", "Agricultural Producers",
    "Logistics & Transportation", "Startups & Large Enterprises"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* --- Premium Background Glowing Orbs --- */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[30%] right-0 w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-12 lg:py-20 space-y-20 md:space-y-28 relative z-10">
        
        {/* --- SECTION 1: Hero & Definition --- */}
        <section>
          <div className="text-center mb-10 md:mb-14 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 font-semibold text-xs md:text-sm mb-6 hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-blue-500"></span>
              </span>
              Food Safety Management Systems (FSMS)
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-slate-900 leading-[1.1]">
              ISO 22000{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Certification
              </span>
            </h1>
            
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-slate-500 max-w-3xl px-2">
              Identify, control, and manage food safety hazards to ensure that products are consistently safe for consumption.
            </h2>
          </div>

          {/* Glassmorphism Container */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 bg-white/60 backdrop-blur-xl p-6 md:p-10 lg:p-12 rounded-3xl md:rounded-[2.5rem] border border-white/80 shadow-xl">
            
            {/* Left: Blank Box Placeholder */}
            <div className="w-full lg:w-5/12 flex justify-center order-1 lg:order-1">
              <div className="relative w-full max-w-[280px] md:max-w-sm aspect-square md:h-[320px] bg-slate-200/50 rounded-3xl border-2 border-dashed border-slate-300 flex items-center justify-center">
                <span className="text-slate-400 font-medium text-sm tracking-widest uppercase">Blank Box Placeholder</span>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4 md:gap-6 justify-center order-2 lg:order-2 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 relative inline-block mx-auto lg:mx-0">
                What is ISO 22000?
                <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
              </h3>
              <div className="space-y-3 md:space-y-4 text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed text-justify md:text-left mt-2">
                <p>
                  ISO 22000 is an internationally recognized standard for <strong className="text-slate-900">Food Safety Management Systems (FSMS)</strong>. It provides a framework for organizations involved in the food chain to identify, control, and manage food safety hazards, ensuring that food products are safe for consumption.
                </p>
                <p>
                  Published by the International Organization for Standardization, it is applicable to organizations of all sizes involved in food production, processing, packaging, storage, transportation, distribution, and food services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: Importance & Benefits Grid --- */}
        <section>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-20">
            
            {/* Left: Blank Box Placeholder */}
            <div className="w-full lg:w-5/12 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[380px] aspect-[4/5] bg-slate-200/50 rounded-3xl border-2 border-dashed border-slate-300 flex items-center justify-center">
                <span className="text-slate-400 font-medium text-sm tracking-widest uppercase">Blank Box Placeholder</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-7/12 flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  Why is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">ISO 22000</span> Important?
                </h3>
                <p className="mt-3 md:mt-4 text-slate-600 text-sm md:text-base lg:text-lg text-justify md:text-left">
                  Implementing ISO 22000 ensures food safety from farm to fork, reducing risks, enhancing consumer confidence, and meeting strict regulatory standards across the global supply chain.
                </p>
              </div>

              {/* Interactive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {benefitsList.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 cursor-default"
                  >
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-inner">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          
          {/* Sub-section 1: Key Principles */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="inline-block py-1 px-4 md:py-1.5 md:px-5 rounded-full bg-indigo-100 text-indigo-700 text-xs md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4 shadow-sm border border-indigo-200">
                Core Pillars
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Key Food Safety <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Principles</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className={`group relative p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${index === 7 ? 'sm:col-span-2 lg:col-span-2 lg:col-start-2' : ''}`}
                >
                  <div className="absolute -right-4 -top-6 text-6xl md:text-8xl font-black text-slate-50 group-hover:text-blue-50 transition-colors duration-300 pointer-events-none select-none">
                    {principle.id}
                  </div>
                  
                  <div className="relative z-0 flex flex-col gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-50 text-blue-600 flex items-center justify-center font-bold text-lg md:text-xl shadow-sm border border-white">
                      {parseInt(principle.id)}
                    </div>
                    <h4 className="text-slate-800 font-bold text-lg md:text-xl group-hover:text-blue-600 transition-colors">
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
              <span className="inline-flex items-center py-1.5 px-4 md:py-2 md:px-5 rounded-full bg-cyan-50 text-cyan-700 text-[10px] md:text-sm font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase mb-4 md:mb-5 border border-cyan-200 shadow-sm">
                Value Proposition
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Benefits of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-600">
                  Certification
                </span>
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto px-2">
                Elevate your food safety protocols to protect consumers, reduce incidents, and unlock new opportunities in the global food market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {[
                { color: "blue", number: "01", label: "Organization", title: "For Your Business", items: ["Improved food safety management processes", "Enhanced compliance with food safety regulations", "Better risk management and hazard control", "Reduced product recalls and food safety incidents", "Increased operational efficiency", "Improved supplier & supply chain management", "Stronger organizational reputation"] },
                { color: "indigo", number: "02", label: "Consumers", title: "For Your Customers", items: ["Safe and reliable food products", "Increased confidence in food quality and safety", "Improved customer satisfaction", "Greater transparency and traceability", "Enhanced consumer protection"] },
                { color: "cyan", number: "03", label: "Growth", title: "For Business Growth", items: ["Competitive advantage in the food industry", "Improved eligibility for contracts & supply agreements", "Enhanced brand image and market credibility", "Increased business opportunities", "Better access to domestic and international markets"] }
              ].map((card, idx) => (
                <div key={idx} className={`group relative overflow-hidden rounded-2xl md:rounded-[2rem] border border-${card.color}-100 bg-white p-6 md:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)] flex flex-col`}>
                  
                  <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-${card.color}-100/50 blur-3xl transition-all duration-300 group-hover:bg-${card.color}-200/60`} />
                  
                  <div className="relative z-10 flex items-center justify-between mb-6 md:mb-8">
                    <div className={`flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br from-${card.color}-500 to-${card.color}-600 text-white font-bold text-xl md:text-2xl shadow-lg shadow-${card.color}-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      ✓
                    </div>
                    <span className={`text-4xl md:text-5xl font-black text-${card.color}-50 group-hover:text-${card.color}-100 transition-colors`}>
                      {card.number}
                    </span>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <p className={`mb-1 md:mb-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-${card.color}-500`}>
                      {card.label}
                    </p>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4 md:mb-6">
                      {card.title}
                    </h3>
                    
                    <div className={`h-px w-full bg-gradient-to-r from-${card.color}-200 via-${card.color}-100 to-transparent mb-5 md:mb-6`} />
                    
                    <ul className="space-y-2.5 md:space-y-3">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm lg:text-base text-slate-600">
                          <span className={`mt-0.5 flex h-4 w-4 md:h-5 md:w-5 shrink-0 items-center justify-center rounded-full bg-${card.color}-50 text-${card.color}-600 text-[10px] font-bold transition-colors group-hover:bg-${card.color}-500 group-hover:text-white`}>
                            ✓
                          </span>
                          <span className="leading-snug md:leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-${card.color}-500 to-indigo-500 transition-all duration-300 group-hover:w-full`} />
                </div>
              ))}
            </div>
          </div>

          {/* Sub-section 3: Who Can Implement? */}
          <div className="relative rounded-2xl md:rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl p-8 md:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-tr from-cyan-500/15 to-blue-500/15 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 relative z-10 flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 text-white leading-tight">
                Who Can Implement It?
              </h2>
              <p className="text-blue-100/80 text-sm md:text-base lg:text-lg text-justify md:text-center px-2">
                ISO 22000 applies to any organization in the food chain, from agricultural producers to retail, ensuring seamless safety across the board.
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
    </div>
  );
}