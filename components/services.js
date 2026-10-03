"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, FileCheck, Globe, Zap, ChevronRight, Leaf, HardHat, HeartPulse, Truck, Cpu, Scale } from 'lucide-react';

// Expanded to 10 Specific ISO Services
const services = [
  { id: 1, title: "ISO 9001", desc: "Quality Management Systems for consistent service delivery.", icon: <ShieldCheck className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", theme: "blue" },
  { id: 2, title: "ISO 14001", desc: "Environmental management to reduce your carbon footprint.", icon: <Leaf className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80", theme: "red" },
  { id: 3, title: "ISO 45001", desc: "Occupational health & safety standards for workplace protection.", icon: <HardHat className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80", theme: "blue" },
  { id: 4, title: "ISO 27001", desc: "Information security management to protect sensitive data.", icon: <Cpu className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80", theme: "red" },
  { id: 5, title: "ISO 22000", desc: "Food safety management ensuring hygienic production chains.", icon: <HeartPulse className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", theme: "blue" },
  { id: 6, title: "ISO 39001", desc: "Road traffic safety management for logistics and transport.", icon: <Truck className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", theme: "red" },
  { id: 7, title: "ISO 50001", desc: "Energy management systems to optimize power consumption.", icon: <Zap className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80", theme: "blue" },
  { id: 8, title: "ISO 37001", desc: "Anti-bribery management systems for ethical business conduct.", icon: <Scale className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80", theme: "red" },
  { id: 9, title: "ISO 20000", desc: "IT service management for reliable digital infrastructure.", icon: <Globe className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80", theme: "blue" },
  { id: 10, title: "ISO 22301", desc: "Business continuity management to survive disruptions.", icon: <FileCheck className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80", theme: "red" }
];

const getThemeClasses = (theme) => {
  if (theme === 'red') {
    return { border: "border-t-red-600", grad: "from-red-600 to-red-800", hoverText: "group-hover:text-red-700", shadow: "group-hover:shadow-red-500/20" };
  }
  return { border: "border-t-blue-900", grad: "from-blue-900 to-blue-700", hoverText: "group-hover:text-blue-900", shadow: "group-hover:shadow-blue-900/20" };
};

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3500); // Slightly faster for 10 items
    return () => clearInterval(interval);
  }, [isHovered]);

  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const length = services.length;
    let normalizedDiff = diff;
    if (diff > length / 2) normalizedDiff = diff - length;
    if (diff < -length / 2) normalizedDiff = diff + length;

    const transitionClass = "transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

    if (normalizedDiff === 0) return `${transitionClass} z-30 scale-100 opacity-100 translate-x-0 rotate-y-0 shadow-2xl`;
    if (normalizedDiff === -1 || (activeIndex === 0 && index === length - 1)) return `${transitionClass} z-20 scale-80 opacity-60 -translate-x-[70%] rotate-y-[25deg] shadow-xl blur-[1px] grayscale-[50%]`;
    if (normalizedDiff === 1 || (activeIndex === length - 1 && index === 0)) return `${transitionClass} z-20 scale-80 opacity-60 translate-x-[70%] rotate-y-[-25deg] shadow-xl blur-[1px] grayscale-[50%]`;
    return `${transitionClass} z-0 scale-50 opacity-0 translate-x-[100%] pointer-events-none`;
  };

  return (
    <section className="py-10 bg-white overflow-hidden relative">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="space-y-8 order-2 lg:order-1 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              Our Expertise
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 leading-[1.15]">
              Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-600">Service Solutions</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              We provide end-to-end certification and compliance services tailored to your industry needs. From initial audit to final certification, we ensure your business operates at global standards with zero friction.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="relative overflow-hidden group flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-red-600 hover:shadow-red-600/30 hover:-translate-y-1 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">Explore All Services<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></div>
              </button>
               
            </div>
          </div>

          {/* RIGHT SIDE: 3D Carousel */}
          <div className="relative h-[420px] flex items-center justify-center perspective-1000 order-1 lg:order-2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative w-full max-w-[280px] h-[380px] preserve-3d">
              {services.map((service, index) => {
                const theme = getThemeClasses(service.theme);
                return (
                  <div key={service.id} className={`absolute inset-0 bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col cursor-pointer group ${getCardStyle(index)} ${theme.border} border-t-4 ${theme.shadow}`}>
                    <div className="h-40 w-full relative overflow-hidden">
                      <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${theme.grad} opacity-30 mix-blend-overlay`}></div>
                      <div className={`absolute -bottom-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br ${theme.grad} flex items-center justify-center shadow-lg border-2 border-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6 pt-8 flex-1 flex flex-col">
                      <h3 className={`text-xl font-bold text-slate-900 mb-2 ${theme.hoverText} transition-colors`}>{service.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{service.desc}</p>
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-400 group/link mt-auto">
                        <span className={`group-hover/link:${theme.hoverText.replace('group-hover:', '')} transition-colors`}>Learn More</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
              {services.map((_, idx) => (
                <button key={idx} onClick={() => setActiveIndex(idx)} className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-blue-900' : 'w-2 bg-slate-300 hover:bg-blue-900/50'}`}></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.perspective-1000 { perspective: 1000px; }.preserve-3d { transform-style: preserve-3d; }`}</style>
    </section>
  );
}