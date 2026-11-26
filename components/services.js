"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ShieldCheck,
  Globe,
  HeartPulse,
  Award,
  Settings2,
} from 'lucide-react';
import { certifications } from '../data/certifications';
import {
  certificationImages,
  getCertificationImageFile,
} from '../data/certificationImages';

const iconsByType = {
  'ISO STANDARD': ShieldCheck,
  'FOOD SAFETY': HeartPulse,
  CERTIFICATION: Award,
  PRACTICE: Settings2,
  COMPLIANCE: ShieldCheck,
  FRAMEWORK: Globe,
  REGULATORY: Award,
};

const excludedHomepageServicePattern =
  /\b(?:aman|dpdpa?|cmmi|soc|hipaa|fssc|vapt|gdpr|iatf|halal)\b|\bpci\s+dss\b/;

export default function ServicesSection({
  certificationImageFiles = {},
  certificationItems = certifications,
  content = {},
}) {
  const services = certificationItems
    .filter(({ code }) => code !== 'CE Marking')
    .filter(({ code, title, href }) =>
      !excludedHomepageServicePattern.test(
        [code, title, href]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, ' '),
      ),
    )
    .map((certification) => ({
      ...certification,
      img:
        certificationImages[certification.code] ||
        getCertificationImageFile(certification.code, certificationImageFiles) ||
        certification.imageUrl,
    }));
  const extendedServices = [...services, ...services];

  return (
    <section 
      id="services" 
      aria-labelledby="services-heading"
      className="pt-4 pb-10 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 bg-slate-50 overflow-hidden relative font-sans"
    >
      {/* Background Accents (Red & Neutral Theme) */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-red-100/40 rounded-full mix-blend-multiply filter blur-[80px] sm:blur-[100px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-slate-200/50 rounded-full mix-blend-multiply filter blur-[80px] sm:blur-[100px] opacity-70 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6 sm:mb-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-5">
          
          
          {/* Main Heading */}
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
              {content.titleHighlight}
            </span>
          </h2>
          
        
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
                className="relative flex-shrink-0 w-[270px] sm:w-[310px] md:w-[340px] bg-white rounded-2xl overflow-hidden border border-slate-100 group/card transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-red-600/10"
              >
                {/* Image Section */}
                <div className="relative aspect-square w-full overflow-hidden bg-white">
                  {service.img ? (
                    <Image
                      src={service.img}
                      alt=""
                      fill
                      sizes="(max-width: 639px) 270px, (max-width: 767px) 310px, 340px"
                      className="object-contain object-center"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-50">
                      <Icon className="h-16 w-16 text-[#1c2448]" aria-hidden="true" />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex flex-col">
                  <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-red-600">
                    {service.type}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover/card:text-red-600 transition-colors">
                    {service.code}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-red-600 mt-3">
                    <span>{content.cardLinkLabel ?? 'Explore Standard'}</span>
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
            {content.buttonLabel ?? 'View All Certifications'}
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