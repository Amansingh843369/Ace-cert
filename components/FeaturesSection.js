"use client";

import React from "react";
import { Check, ShieldCheck } from "lucide-react";

const features = [
  {
    id: 1,
    title: "The ACE-CERT Promise",
    text: "The name ACE stands for our core promise: helping clients Achieve Compliance & Excellence at every operational level with precision.",
  },
  {
    id: 2,
    title: "Clarity & Simplicity",
    text: "International standards are the foundation of market trust. We simplify complex ISO benchmarks to protect consumers and empower your business growth.",
  },
  {
    id: 3,
    title: "Practical & Industry Focused",
    text: "Our lead auditors are seasoned industry professionals delivering realistic, high-impact ISO certification solutions tailored to your daily operations.",
  },
  {
    id: 4,
    title: "Global Recognition",
    text: "Get ISO certificates that open doors worldwide, delivered through adaptive, fast-acting, and dedicated local client support.",
  },
];

export default function FeaturesSection() {
  return (
    <section 
      id="features" 
      aria-labelledby="features-heading"
      className="py-12 sm:py-16 md:py-24 bg-slate-50 font-sans relative overflow-hidden"
    >
      {/* Background Decor (Red & Neutral Accent) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Top Section: Heading and Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-16 mb-10 sm:mb-14 lg:mb-20">
          <div className="w-full lg:w-1/2">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-widest shadow-sm mb-4">
              <ShieldCheck className="w-4 h-4 text-red-600" aria-hidden="true" />
              <span>Why Choose ACE</span>
            </div>

            <h2 
              id="features-heading" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight"
            >
              Elevating Standards <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                & Empowering Business.
              </span>
            </h2>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pt-10">
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal sm:font-medium">
              We don't just provide ISO certificates; we partner with you to build a foundation of trust, operational excellence, and global compliance that drives sustainable enterprise growth.
            </p>
          </div>
        </div>

        {/* Bottom Section: Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {features.map((feature) => (
            <article 
              key={feature.id} 
              className="flex flex-col p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={3} aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed sm:pl-[3.25rem]">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}