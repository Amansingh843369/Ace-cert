"use client";
import React from 'react';
import { ArrowRight, ShieldCheck, FileCheck, Globe, Zap, Leaf, HardHat, HeartPulse, Truck, Cpu, Scale } from 'lucide-react';

const services = [
  { id: 1, title: "ISO 9001", desc: "Quality Management Systems for consistent service delivery.", icon: <ShieldCheck className="w-6 h-6 text-white" />, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", theme: "blue" },
  { id: 2, title: "ISO 14001", desc: "Environmental management to reduce your carbon footprint.", icon: <Leaf className="w-6 h-6 text-white" />, img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80", theme: "red" },
  { id: 3, title: "ISO 45001", desc: "Occupational health & safety standards for workplace protection.", icon: <HardHat className="w-6 h-6 text-white" />, img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80", theme: "blue" },
  { id: 4, title: "ISO 27001", desc: "Information security management to protect sensitive data.", icon: <Cpu className="w-6 h-6 text-white" />, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80", theme: "red" },
  { id: 5, title: "ISO 22000", desc: "Food safety management ensuring hygienic production chains.", icon: <HeartPulse className="w-6 h-6 text-white" />, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", theme: "blue" },
  { id: 6, title: "ISO 39001", desc: "Road traffic safety management for logistics and transport.", icon: <Truck className="w-6 h-6 text-white" />, img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", theme: "red" },
  { id: 7, title: "ISO 50001", desc: "Energy management systems to optimize power consumption.", icon: <Zap className="w-6 h-6 text-white" />, img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80", theme: "blue" },
  { id: 8, title: "ISO 37001", desc: "Anti-bribery management systems for ethical business conduct.", icon: <Scale className="w-6 h-6 text-white" />, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80", theme: "red" },
  { id: 9, title: "ISO 20000", desc: "IT service management for reliable digital infrastructure.", icon: <Globe className="w-6 h-6 text-white" />, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80", theme: "blue" },
  { id: 10, title: "ISO 22301", desc: "Business continuity management to survive disruptions.", icon: <FileCheck className="w-6 h-6 text-white" />, img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80", theme: "red" }
];

const getThemeClasses = (theme) => {
  if (theme === 'red') {
    return { 
      border: "border-t-red-600", 
      grad: "from-red-600 to-red-800", 
      hoverText: "group-hover:text-red-700",
      shadow: "hover:shadow-red-500/20"
    };
  }
  return { 
    border: "border-t-blue-900", 
    grad: "from-blue-900 to-blue-700", 
    hoverText: "group-hover:text-blue-900",
    shadow: "hover:shadow-blue-900/20"
  };
};

export default function ServicesSection() {
  const extendedServices = [...services, ...services];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-900 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Our Expertise
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.2]">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">Service Solutions</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We provide end-to-end certification and compliance services tailored to your industry needs. From initial audit to final certification, we ensure your business operates at global standards.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Marquee Container */}
      <div className="relative w-full flex overflow-hidden group/marquee">
        
        {/* Left/Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

        {/* The Moving Track */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] px-3">
          {extendedServices.map((service, index) => {
            const theme = getThemeClasses(service.theme);
            return (
              <div 
                key={`${service.id}-${index}`} 
                className={`relative flex-shrink-0 w-[300px] md:w-[340px] bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-pointer group/card transition-all duration-300 shadow-sm hover:shadow-xl ${theme.border} border-t-4 ${theme.shadow}`}
              >
                {/* Image Section */}
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700 ease-out" 
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover/card:bg-slate-900/0 transition-colors duration-300"></div>
                  
                  {/* CHANGED: Icon Badge moved to TOP RIGHT */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${theme.grad} flex items-center justify-center shadow-lg border-2 border-white transform group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300 z-10`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col h-[180px]">
                  <h3 className={`text-xl font-bold text-slate-900 mb-3 ${theme.hoverText} transition-colors`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {service.desc}
                  </p>
                  
                  {/* Link / Action */}
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400 mt-auto group/link">
                    <span className={`group-hover/link:${theme.hoverText.replace('group-hover:', '')} transition-colors`}>Explore Standard</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="container mx-auto px-4 mt-16 flex justify-center relative z-10">
        <button className="group/btn relative overflow-hidden flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-red-600 hover:shadow-red-600/30 hover:-translate-y-1 transition-all duration-300">
          <span className="relative z-10 flex items-center gap-2">View All Certifications <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></span>
          <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></div>
        </button>
      </div>

      {/* Custom CSS for the Infinite Scroll Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 24px)); } /* Adjusted for gap-6 (24px) */
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}