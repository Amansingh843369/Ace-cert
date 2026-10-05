"use client";
import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, FileCheck, Globe, Zap, Leaf, HardHat, HeartPulse, Truck, Cpu, Scale } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
      hoverText: "text-red-700",
      shadow: "shadow-red-500/20",
      bg: "bg-red-50"
    };
  }
  return { 
    border: "border-t-blue-900", 
    grad: "from-blue-900 to-blue-700", 
    hoverText: "text-blue-900",
    shadow: "shadow-blue-900/20",
    bg: "bg-blue-50"
  };
};

// 3D Tilt Card Component
const TiltCard = ({ service, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const theme = getThemeClasses(service.theme);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, type: "spring", bounce: 0.4 }}
      className={`relative flex-shrink-0 w-[300px] md:w-[340px] bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-pointer group/card transition-shadow duration-300 ${theme.border} border-t-4 hover:${theme.shadow} hover:shadow-xl`}
    >
      {/* Image Section */}
      <div className="h-48 w-full relative overflow-hidden">
        <img 
          src={service.img} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute inset-0 bg-slate-900/10 group-hover/card:bg-slate-900/0 transition-colors duration-300"></div>
        
        {/* Icon Badge - Top Right */}
        <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${theme.grad} flex items-center justify-center shadow-lg border-2 border-white transform group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300 z-10`}>
          {service.icon}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col h-[180px]" style={{ transform: "translateZ(20px)" }}>
        <h3 className={`text-xl font-bold text-slate-900 mb-3 ${theme.hoverText} transition-colors`}>
          {service.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
          {service.desc}
        </p>
        
        <div className="flex items-center gap-2 text-sm font-bold text-slate-400 mt-auto group/link">
          <span className={`group-hover/link:${theme.hoverText} transition-colors`}>Explore Standard</span>
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Mouse Follow Spotlight Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const extendedServices = [...services, ...services];

  return (
    <section ref={sectionRef} className="py-20 bg-slate-50 overflow-hidden relative isolate">
      
      {/* INTERACTIVE SPOTLIGHT BACKGROUND */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(30, 58, 138, 0.06), transparent 40%)`
        }}
      />

      {/* Static Background Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-900 text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Our Expertise
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.2]"
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">Service Solutions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            We provide end-to-end certification and compliance services tailored to your industry needs. From initial audit to final certification, we ensure your business operates at global standards.
          </motion.p>
        </div>
      </div>

      {/* Infinite Scroll Marquee Container */}
      <div className="relative w-full flex overflow-hidden group/marquee">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] px-3">
          {extendedServices.map((service, index) => (
            <TiltCard key={`${service.id}-${index}`} service={service} index={index % 10} />
          ))}
        </div>
      </div>

      {/* Magnetic CTA Button */}
      <div className="container mx-auto px-4 mt-16 flex justify-center relative z-10">
        <MagneticButton />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 24px)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}

// Magnetic Button Component for that "Agency" feel
function MagneticButton() {
  const btnRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className="group/btn relative overflow-hidden flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-red-600 hover:shadow-red-600/30 transition-colors duration-300"
    >
      <span className="relative z-10 flex items-center gap-2">View All Certifications <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></span>
      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></div>
    </motion.button>
  );
}