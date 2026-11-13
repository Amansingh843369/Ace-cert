"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck,
  Globe,
  Leaf,
  HeartPulse,
  Award,
  Settings2,
} from 'lucide-react';
import { certifications } from '../data/certifications';

const categoryImages = {
  'ISO STANDARD': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  'FOOD SAFETY': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  CERTIFICATION: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
  PRACTICE: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
  COMPLIANCE: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
  FRAMEWORK: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
  REGULATORY: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
};

const imagesByCode = {
  'ISO 14001': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
  'ISO 45001': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
  'ISO 27001': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
  'ISO 22301': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
  'ISO 37001': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80',
  'ISO 50001': 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
  'ISO 20000-1': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
};

const iconsByType = {
  'ISO STANDARD': ShieldCheck,
  'FOOD SAFETY': HeartPulse,
  CERTIFICATION: Award,
  PRACTICE: Settings2,
  COMPLIANCE: ShieldCheck,
  FRAMEWORK: Globe,
  REGULATORY: Award,
};

const services = certifications
  .filter(({ code }) => code !== 'CE Marking')
  .map((certification) => ({
    ...certification,
    img: imagesByCode[certification.code] || categoryImages[certification.type],
  }));

export default function ServicesSection() {
  const extendedServices = [...services, ...services];

  return (
    <section 
      id="services" 
      aria-labelledby="services-heading"
      className="py-10 sm:py-12 md:py-16 bg-slate-50 overflow-hidden relative font-sans"
    >
      {/* Background Accents (Red & Neutral Theme) */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-red-100/40 rounded-full mix-blend-multiply filter blur-[80px] sm:blur-[100px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-slate-200/50 rounded-full mix-blend-multiply filter blur-[80px] sm:blur-[100px] opacity-70 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6 sm:mb-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span>Our Expertise</span>
          </div>
          
          {/* Main Heading */}
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2]">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">Service Solutions</span>
          </h2>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Explore our full range of ISO standards, certifications, and compliance frameworks for your organization.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Marquee Container */}
      <div className="relative w-full flex overflow-hidden group/marquee">
        
        {/* Left/Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-48 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-48 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none"></div>

        {/* The Moving Track */}
        <div
          className="flex gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] px-3"
          style={{ "--marquee-duration": `${services.length * 3.5}s` }}
        >
          {extendedServices.map((service, index) => {
            const Icon = iconsByType[service.type] || ShieldCheck;
            const isDuplicate = index >= services.length;
            return (
              <Link
                key={`${service.code}-${index}`}
                href={service.href}
                aria-hidden={isDuplicate ? true : undefined}
                tabIndex={isDuplicate ? -1 : undefined}
                className="relative flex-shrink-0 w-[270px] sm:w-[310px] md:w-[340px] bg-white rounded-2xl overflow-hidden border border-slate-100 group/card transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-red-600/10 border-t-4 border-t-red-600"
              >
                {/* Image Section */}
                <div className="h-40 sm:h-48 w-full relative overflow-hidden bg-slate-100">
                  <img 
                    src={service.img} 
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-500 ease-out" 
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover/card:bg-slate-900/0 transition-colors duration-300"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg border-2 border-white transform group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-300 z-10">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex flex-col h-[170px] sm:h-[180px]">
                  <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-red-600">
                    {service.type}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover/card:text-red-600 transition-colors">
                    {service.code}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-3 flex-1 line-clamp-2">
                    {service.title}
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-red-600 mt-auto">
                    <span>Explore Standard</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/card:translate-x-1.5 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="container mx-auto px-4 mt-8 sm:mt-10 flex justify-center relative z-10">
        <Link
          href="/certification"
          className="group/btn relative overflow-hidden flex items-center gap-3 bg-red-600 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-red-600/25 hover:bg-red-700 hover:shadow-red-600/35 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span className="relative z-10 flex items-center gap-2">
            View All Certifications 
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></div>
        </Link>
      </div>

      {/* Custom CSS for Infinite Scroll Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-marquee {
          animation: marquee var(--marquee-duration, 35s) linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}