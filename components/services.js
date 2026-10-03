"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, FileCheck, Globe, Zap } from 'lucide-react';

// Updated Data with Images
const services = [
  {
    id: 1,
    title: "ISO Certification",
    desc: "Achieve global recognition with our streamlined ISO 9001 certification process.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Office/Planning
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 2,
    title: "Compliance Audit",
    desc: "Rigorous auditing to ensure your business meets all international safety standards.",
    icon: <FileCheck className="w-6 h-6 text-white" />,
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Audit/Finance
    color: "from-red-500 to-red-700"
  },
  {
    id: 3,
    title: "Global Training",
    desc: "Empower your workforce with expert-led training on quality management systems.",
    icon: <Globe className="w-6 h-6 text-white" />,
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Training/Team
    color: "from-emerald-500 to-emerald-700"
  },
  {
    id: 4,
    title: "Process Automation",
    desc: "Streamline workflows for maximum efficiency and speed using modern tools.",
    icon: <Zap className="w-6 h-6 text-white" />,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Tech/Automation
    color: "from-orange-500 to-orange-700"
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  // Helper to calculate styles for 3D effect
  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const length = services.length;
    
    // Normalize difference for circular array
    let normalizedDiff = diff;
    if (diff > length / 2) normalizedDiff = diff - length;
    if (diff < -length / 2) normalizedDiff = diff + length;

    if (normalizedDiff === 0) {
      // Center Card: Big, clear, front
      return "z-30 scale-100 opacity-100 translate-x-0 rotate-y-0 shadow-2xl border-t-4 border-t-blue-600";
    } else if (normalizedDiff === -1 || (activeIndex === 0 && index === length - 1)) {
      // Left Card: Tilted back, smaller
      return "z-20 scale-85 opacity-80 -translate-x-[55%] rotate-y-[20deg] shadow-xl blur-[1px] grayscale-[20%] hover:grayscale-0 transition-all duration-500";
    } else if (normalizedDiff === 1 || (activeIndex === length - 1 && index === 0)) {
      // Right Card: Tilted back, smaller
      return "z-20 scale-85 opacity-80 translate-x-[55%] rotate-y-[-20deg] shadow-xl blur-[1px] grayscale-[20%] hover:grayscale-0 transition-all duration-500";
    } else {
      // Hidden Cards
      return "z-0 scale-50 opacity-0 translate-x-[100%] pointer-events-none";
    }
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      
      {/* Background Blobs for Premium Feel */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Content (Text doesn't overlap now) */}
          <div className="space-y-8 order-2 lg:order-1 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-blue-700 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Our Expertise
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
              Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-red-600">
                Service Solutions
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              We provide end-to-end certification and compliance services tailored to your industry needs. From initial audit to final certification, we ensure your business operates at global standards with zero friction.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-600 transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-red-600/30 hover:-translate-y-1">
                Explore All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-blue-900 hover:text-blue-900 transition-all shadow-sm hover:shadow-md">
                Contact Sales
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: 3D Carousel (Compact & Clean) */}
          <div className="relative h-[420px] flex items-center justify-center perspective-1000 order-1 lg:order-2">
            
            {/* Carousel Track */}
            <div className="relative w-full max-w-[320px] h-[380px] preserve-3d">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-700 ease-out flex flex-col ${getCardStyle(index)}`}
                >
                  {/* Image Section */}
                  <div className="h-40 w-full relative overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay on Image */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 mix-blend-overlay`}></div>
                    
                    {/* Floating Icon */}
                    <div className={`absolute -bottom-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg border-2 border-white`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 pt-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{service.desc}</p>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-400 group cursor-pointer hover:text-blue-600 transition-colors mt-auto">
                      Learn More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {services.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                ></button>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* CSS for 3D Transforms */}
      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
}