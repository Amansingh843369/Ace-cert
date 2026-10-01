'use client';

import React from 'react';

export default function Iso27001Layout() {
  // Data Arrays based on your content
  const benefitsList = [
    "Protect sensitive & confidential data",
    "Strengthen cybersecurity defenses",
    "Reduce information security risks",
    "Prevent data breaches & cyber threats",
    "Ensure regulatory & legal compliance",
    "Improve business resilience",
    "Enhance customer confidence & trust",
    "Strengthen risk management processes",
    "Improve operational security controls",
    "Promote continual improvement"
  ];

  const principles = [
    { id: "01", title: "Confidentiality", desc: "Ensuring information is accessible only to authorized personnel." },
    { id: "02", title: "Integrity", desc: "Safeguarding the accuracy and completeness of sensitive data." },
    { id: "03", title: "Availability", desc: "Ensuring authorized users have access to information when required." },
    { id: "04", title: "Risk Assessment", desc: "Identifying, analyzing, and treating information security risks." },
    { id: "05", title: "Leadership", desc: "Top management commitment to establishing and supporting the ISMS." },
    { id: "06", title: "Security Controls", desc: "Implementing robust governance and technical safeguards." },
    { id: "07", title: "Incident Management", desc: "Detecting, reporting, and responding swiftly to security events." },
    { id: "08", title: "Continual Improvement", desc: "Regularly upgrading security systems to combat emerging threats." },
  ];

  const industries = [
    "IT Companies", "Software Development Firms", "Financial Institutions",
    "Healthcare Organizations", "Government Agencies", "Educational Institutions",
    "Telecommunications", "E-Commerce Businesses", "Cloud & Data Centers",
    "Startups and SMEs", "Large Enterprises"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* --- Premium Background Glowing Orbs (Blue/Indigo/Cyan Theme) --- */}
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
              Information Security Standard
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-slate-900 leading-[1.1]">
              ISO 27001{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Certification
              </span>
            </h1>
            
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-slate-500 max-w-2xl px-2">
              Protect your sensitive information, defend against cyber threats, and build trust with a globally recognized ISMS framework.
            </h2>
          </div>

          {/* Glassmorphism Container */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 bg-white/60 backdrop-blur-xl p-6 md:p-10 lg:p-12 rounded-3xl md:rounded-[2.5rem] border border-white/80 shadow-xl">
            
            {/* Left: Image Placeholder */}
            <div className="w-full lg:w-5/12 flex justify-center order-1 lg:order-1">
              <div className="relative group p-2 md:p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-[2rem] md:rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <img
                  src="/27001-removebg.png" 
                  alt="ISO 27001 Illustration"
                  className="relative w-full max-w-[280px] md:max-w-sm object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.03] hover:-rotate-1"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display='none';
                    e.target.nextSibling.style.display='flex';
                  }}
                />
                 {/* Fallback Icon */}
                <div className="hidden relative w-full max-w-[280px] md:max-w-sm h-[280px] md:h-[320px] bg-gradient-to-br from-blue-100 to-indigo-50 rounded-3xl items-center justify-center text-9xl text-blue-200 shadow-inner">
                  🔒
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4 md:gap-6 justify-center order-2 lg:order-2 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 relative inline-block mx-auto lg:mx-0">
                What is ISO 27001?
                <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
              </h3>
              <div className="space-y-3 md:space-y-4 text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed text-justify md:text-left mt-2">
                <p>
                  ISO 27001 is an internationally recognized standard for <strong className="text-slate-900">Information Security Management Systems (ISMS)</strong>. It provides a systematic framework for managing and protecting sensitive information, ensuring its confidentiality, integrity, and availability.
                </p>
                <p>
                  The standard is published by the International Organization for Standardization and is applicable to organizations of all sizes and sectors that need to safeguard business, customer, employee, and stakeholder information from security threats and cyber risks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: Importance & Benefits Grid --- */}
        <section>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-20">
            
            {/* Left: Floating Image */}
            <div className="w-full lg:w-5/12 flex justify-center order-2 lg:order-1 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 bg-gradient-to-tr from-indigo-200 to-blue-200 rounded-full blur-3xl opacity-60"></div>
              </div>
               <img
                src="/27001.png"
                alt="Why ISO 27001 is Important"
                className="w-full max-w-[260px] md:max-w-[320px] lg:max-w-[380px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] relative z-10 floating-img"
                loading="lazy"
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display='none';
                    e.target.nextSibling.style.display='flex';
                  }}
              />
               {/* Fallback Icon */}
               <div className="hidden relative w-full max-w-[260px] md:max-w-[320px] lg:max-w-[380px] h-[300px] md:h-[350px] bg-white rounded-3xl items-center justify-center text-8xl text-indigo-200 shadow-xl border border-indigo-100">
                  🛡️
                </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-7/12 flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  Why is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">ISO 27001</span> Important?
                </h3>
                <p className="mt-3 md:mt-4 text-slate-600 text-sm md:text-base lg:text-lg text-justify md:text-left">
                  Implementing ISO 27001 helps organizations mitigate the ever-growing threat of data breaches and cyber-attacks, ensuring business continuity while remaining compliant with complex global data protection laws.
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
                Key Information <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Security Principles</span>
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
                Certification establishes your organization as a secure, trustworthy partner, mitigating risks and empowering global business expansion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {[
                { color: "blue", icon: "🏢", label: "Organization", title: "For Your Business", items: ["Improved information security management", "Enhanced protection against cyber threats", "Better legal and regulatory compliance", "Reduced risk of data breaches & financial loss", "Improved operational resilience", "Stronger risk management capabilities", "Enhanced organizational reputation"] },
                { color: "indigo", icon: "🛡️", label: "Customer Value", title: "For Your Customers", items: ["Greater confidence in data security & privacy", "Protection of sensitive customer information", "Improved trust and transparency", "Reliable and secure business operations", "Enhanced customer satisfaction"] },
                { color: "cyan", icon: "🚀", label: "Growth", title: "For Business Growth", items: ["Competitive advantage in the marketplace", "Improved eligibility for contracts & tenders", "Enhanced brand credibility & reputation", "Increased stakeholder confidence", "Better access to domestic & international markets"] }
              ].map((card, idx) => (
                <div key={idx} className={`group relative overflow-hidden rounded-2xl md:rounded-[2rem] border border-${card.color}-100 bg-white p-6 md:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)] flex flex-col`}>
                  
                  <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-${card.color}-100/50 blur-3xl transition-all duration-300 group-hover:bg-${card.color}-200/60`} />
                  
                  <div className="relative z-10 flex items-center justify-between mb-6 md:mb-8">
                    <div className={`flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br from-${card.color}-500 to-${card.color}-600 text-2xl md:text-3xl shadow-lg shadow-${card.color}-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {card.icon}
                    </div>
                    <span className={`text-4xl md:text-5xl font-black text-${card.color}-50 group-hover:text-${card.color}-100 transition-colors`}>
                      0{idx + 1}
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
                ISO 27001 is essential for any organization—regardless of size or sector—that handles sensitive data, relies heavily on IT infrastructure, or wants a competitive edge.
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

      {/* Animation Styles */}
      <style jsx>{`
        .floating-img {
          animation: floatImage 6s ease-in-out infinite;
        }
        @keyframes floatImage {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
}