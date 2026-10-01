'use client'; // <--- Yeh line zaroori hai for styled-jsx and interactions

import React from 'react';
import Head from 'next/head';

export default function IsoCertificationLayout() {
  
  // Data Arrays for cleaner JSX
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
    { id: "01", title: "Customer Focus" },
    { id: "02", title: "Leadership" },
    { id: "03", title: "Engagement of People" },
    { id: "04", title: "Process Approach" },
    { id: "05", title: "Improvement" },
    { id: "06", title: "Evidence-Based Decision Making" },
    { id: "07", title: "Relationship Management" },
  ];

  const industries = [
    "Manufacturing Companies", "Service Providers", "IT Companies",
    "Educational Institutions", "Healthcare Organizations", "Construction Companies",
    "Laboratories", "Government Organizations", "Logistics & Transportation",
    "Startups and SMEs", "Large Enterprises"
  ];

  return (
    <>
      {/* Note: In App Router, use Metadata API instead of Head if possible, 
          but Head still works for some cases. For SEO, prefer export const metadata */}
      
      <div className="min-h-screen bg-[#f0f4f8] text-gray-900 relative overflow-hidden font-sans pb-20">
        
        {/* --- Global Background Elements --- */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[40px] border-white/40 rounded-full -mr-40 -mt-20 pointer-events-none opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[30px] border-blue-100/30 rounded-full -ml-20 -mb-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 space-y-24">
          
          {/* --- SECTION 1: Intro & Definition --- */}
          <section className="relative z-10 pt-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
                ISO 9001:2015 Certification
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-600">
                Quality Management System (QMS)
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
              {/* Left: Image */}
              <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <img
                    src="/9001-removebg.png"
                    alt="ISO 9001 Illustration"
                    className="relative w-full max-w-sm object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right: Text */}
              <div className="w-full lg:w-7/12 flex flex-col gap-6 justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  What is ISO 9001:2015?
                </h3>
                <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                  <p>
                    ISO 9001:2015 is the world's most recognized standard for <strong>Quality Management Systems (QMS)</strong>. It provides a robust framework for organizations to consistently deliver products and services that meet customer requirements and applicable statutory and regulatory requirements.
                  </p>
                  <p>
                    Published by the International Organization for Standardization, this standard is applicable to organizations of all sizes and sectors, focusing heavily on enhancing customer satisfaction through effective system application.
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* --- SECTION 2: Importance & Benefits Grid --- */}
          <section className="relative z-10 py-12">
            {/* Section Glows */}
            <div className="absolute top-1/2 left-[-10%] w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-[-10%] w-72 h-72 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-20">
              
              {/* Left: Content */}
              <div className="w-full lg:w-7/12 flex flex-col gap-8">
                <div>
                  <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide mb-4 border border-blue-100 shadow-sm">
                    🚀 Business Growth Catalyst
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    Why is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">ISO 9001</span> Important?
                  </h3>
                  <p className="mt-4 text-gray-600 text-base md:text-lg">
                    Unlock global quality standards, build unbreakable customer trust, and scale your business operations efficiently.
                  </p>
                </div>

                {/* Interactive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {benefitsList.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="group flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 cursor-default"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 font-medium text-sm md:text-[15px] transition-colors duration-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Floating Image */}
              <div className="w-full lg:w-5/12 flex justify-center lg:justify-end relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 bg-gradient-to-tr from-blue-100 to-teal-50 rounded-full blur-3xl opacity-60"></div>
                </div>
                <img
                  src="/9001.png"
                  alt="Why ISO 9001 is Important"
                  className="w-full max-w-[280px] lg:max-w-[340px] object-contain drop-shadow-2xl relative z-10"
                  style={{ animation: 'floatImage 4s ease-in-out infinite' }}
                  loading="lazy"
                />
              </div>
            </div>
          </section>


          {/* --- SECTION 3: Principles, Detailed Benefits & Scope --- */}
          <section className="bg-slate-50/80 rounded-3xl p-8 md:p-12 border border-white shadow-sm relative overflow-hidden">
            
            {/* Sub-section 1: 7 Principles */}
            <div className="space-y-10 mb-16">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
                  Core Pillars
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Seven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Quality Management Principles</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {principles.map((principle, index) => (
                  <div 
                    key={index}
                    className={`group relative p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${index === 6 ? 'sm:col-span-2 lg:col-span-2 lg:col-start-2' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors">
                        {principle.id}
                      </span>
                      <h4 className="text-gray-800 font-bold text-base md:text-lg group-hover:text-blue-600 transition-colors">
                        {principle.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-section 2: Detailed Benefits Cards */}
            <div className="space-y-10 mb-16">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-wider uppercase mb-3">
                  Value Proposition
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Certification</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <BenefitCard 
                  icon="💼" 
                  color="blue" 
                  title="For Your Business" 
                  items={[
                    "Improved business performance",
                    "Better process control",
                    "Reduced operational costs",
                    "Increased productivity",
                    "Enhanced risk management",
                    "Greater consistency in operations",
                    "Improved supplier performance"
                  ]} 
                />
                {/* Card 2 */}
                <BenefitCard 
                  icon="🤝" 
                  color="teal" 
                  title="For Your Customers" 
                  items={[
                    "Consistent product & service quality",
                    "Increased confidence in your organization",
                    "Better customer experience",
                    "Faster response to customer needs"
                  ]} 
                />
                {/* Card 3 */}
                <BenefitCard 
                  icon="📈" 
                  color="purple" 
                  title="For Market Growth" 
                  items={[
                    "Competitive advantage",
                    "Improved eligibility for tenders",
                    "Increased business opportunities",
                    "Enhanced brand image",
                    "Better access to international markets"
                  ]} 
                />
              </div>
            </div>

            {/* Sub-section 3: Who Can Implement? */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 md:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              
              <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
                  Who Can Implement ISO 9001?
                </h2>
                <p className="text-blue-100 text-sm md:text-base">
                  ISO 9001 is universal and adaptable for organizations of any size or industry.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 relative z-10">
                {industries.map((industry, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-blue-700 transition-all duration-300 cursor-default"
                  >
                    ✨ {industry}
                  </span>
                ))}
              </div>
            </div>

          </section>

        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes floatImage {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </>
  );
}

// Helper Component for Benefit Cards to keep main code clean
function BenefitCard({ icon, color, title, items }) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    teal: "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group h-full">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl mb-4 transition-all duration-300 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
            <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${color === 'blue' ? 'text-teal-500' : color === 'teal' ? 'text-blue-500' : 'text-purple-500'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}