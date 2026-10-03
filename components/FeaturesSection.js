"use client";

import React from "react";
import { Globe, TrendingUp, Presentation, Layers, ArrowRight } from "lucide-react";

const features = [
  {
    title: "The ACE-CERT",
    text: "The name ACE stands for our core promise: helping clients Achieve Compliance & Excellence at every level.",
    icon: TrendingUp,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverBorder: "group-hover:border-blue-200",
  },
  {
    title: "Clarity & Simplicity",
    text: "Standards are the foundation of market trust. We implement consistent benchmarks to protect consumers and empower your business.",
    icon: Presentation,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    hoverBorder: "group-hover:border-amber-200",
  },
  {
    title: "Practical Focus",
    text: "Our auditors are seasoned industry professionals delivering realistic, high-impact solutions for your day-to-day operations.",
    icon: Layers,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverBorder: "group-hover:border-emerald-200",
  },
  {
    title: "Global Recognition",
    text: "Certificates that open doors worldwide, delivered through adaptive, fast-acting, and highly attentive local client care.",
    icon: Globe,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    hoverBorder: "group-hover:border-violet-200",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] relative overflow-hidden" aria-labelledby="features-title">
      
      {/* Premium Background Glow Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-[80px] opacity-50 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Side: Sticky Title Area */}
          <div className="lg:col-span-5 mb-16 lg:mb-0 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-blue-600 font-bold text-xs uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Why ACE Certification?
            </div>
            
            <h2 id="features-title" className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Elevating Standards, <br className="hidden lg:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Empowering Business.
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
              We don't just provide certificates; we partner with you to build a foundation of trust, operational excellence, and global compliance that drives real growth.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 font-bold text-white bg-slate-900 hover:bg-blue-600 px-6 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              Speak with our experts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Side: Features 2x2 Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article 
                  key={feature.title} 
                  className={`group p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out hover:-translate-y-1 ${feature.hoverBorder} relative overflow-hidden`}
                >
                  {/* Subtle Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Box */}
                  <div className={`relative w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out shadow-sm`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={2.2} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}