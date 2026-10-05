"use client";

import React from "react";
import { Trophy, Users, Globe, ShieldCheck, Play, ArrowRight } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Trophy,
    number: "3+ Years",
    label: "Industry Experience",
    iconColor: "text-red-600",
  },
  {
    id: 2,
    icon: Users,
    number: "240+",
    label: "Happy Clients",
    iconColor: "text-red-600",
  },
  {
    id: 3,
    icon: Globe,
    number: "Global",
    label: "Standards Coverage",
    iconColor: "text-red-600",
  },
];

export default function AboutSection() {
  return (
    <section 
      id="about" 
      aria-label="About ACE Certification Services"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden font-sans"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center">
          
          {/* --- COLUMN 1: STATS (Top on Mobile/Tablet, Left on Desktop) --- */}
          <div className="w-full lg:w-2/12 border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 pr-0 lg:pr-6">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-10 text-center">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.id} className="flex flex-col items-center group cursor-default">
                    <div className="mb-2 sm:mb-3 p-2.5 sm:p-3 bg-red-50 rounded-xl group-hover:bg-red-100/80 transform group-hover:-translate-y-1 transition-all duration-300">
                      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${stat.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1 tracking-tight group-hover:text-red-600 transition-colors">
                      {stat.number}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider leading-tight">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- COLUMN 2: IMAGE COLLAGE (Middle) --- */}
          <div className="w-full lg:w-5/12 relative h-[360px] xs:h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] flex items-center justify-center my-4 lg:my-0">
            
            {/* Background Accent Shapes (Red & White Theme) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-28 sm:w-36 md:w-48 h-full bg-red-600/5 absolute rounded-3xl transform -rotate-3"></div>
              <div className="w-full h-32 sm:h-44 md:h-56 bg-red-500/10 absolute rounded-3xl transform rotate-2"></div>
            </div>

            {/* Top Right Image */}
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="ACE Certification team discussing ISO compliance strategies"
              loading="lazy"
              className="absolute top-0 right-0 w-[58%] h-[180px] xs:h-[210px] sm:h-[240px] md:h-[270px] object-cover rounded-xl shadow-md sm:shadow-lg z-10 hover:scale-105 transition-transform duration-500"
            />
            
            {/* Middle Left Image */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="ISO Certification audit and consulting session"
              loading="lazy"
              className="absolute top-[22%] left-0 w-[54%] h-[160px] xs:h-[190px] sm:h-[220px] md:h-[250px] object-cover rounded-xl shadow-md sm:shadow-lg z-20 hover:scale-105 transition-transform duration-500"
            />
            
            {/* Bottom Right Image */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Global standards and business quality management team"
              loading="lazy"
              className="absolute bottom-2 sm:bottom-4 right-[8%] w-[48%] h-[150px] xs:h-[170px] sm:h-[200px] md:h-[230px] object-cover rounded-xl shadow-md sm:shadow-lg z-10 hover:scale-105 transition-transform duration-500"
            />

            {/* Central Play Button */}
            <button 
              type="button"
              aria-label="Play ACE Certification Introduction Video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(220,38,38,0.25)] transition-all duration-300 group cursor-pointer"
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-red-600 ml-1 sm:ml-2 group-hover:text-red-700 transition-colors" fill="currentColor" />
            </button>
          </div>

          {/* --- COLUMN 3: TEXT CONTENT (Right Side) --- */}
          <div className="w-full lg:w-5/12 pl-0 lg:pl-6 mt-4 lg:mt-0">
            
            {/* Badge (Red & White) */}
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-md shadow-red-600/20 mb-4 sm:mb-6">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span>About ACE Certification</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Achieve Compliance & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                Excellence.
              </span>
            </h2>
            
            {/* Description */}
            <div className="space-y-4 sm:space-y-5 text-slate-600 text-sm md:text-base leading-relaxed text-left sm:text-justify">
              <p>
                <strong className="text-slate-900">ACE Certification Ltd.</strong> is a dedicated and client-centric professional services firm established to empower organizations of all sizes to achieve international standards of quality, safety, and efficiency.
              </p>
              <p>
                The name "ACE" embodies our core promise: to help our clients <span className="font-bold text-red-600">Achieve Compliance & Excellence</span>. We bridge the gap between complex international standards and everyday business success.
              </p>
              <p>
                Our team comprises highly experienced Lead Auditors who bring practical insights to every engagement. We believe certification is not just a trophy, but a strategic tool for <span className="font-semibold text-red-600">tangible business improvement</span>.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-6 sm:pt-8">
              <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25 hover:shadow-red-600/35 text-sm sm:text-base cursor-pointer">
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}