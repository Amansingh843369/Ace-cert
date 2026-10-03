"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DigitalMarketingSection = () => {
  const sectionRef = useRef(null);
  const shapeRef = useRef(null);
  const contentRef = useRef(null);
  const barsRef = useRef([]);
  const floatingImgRef = useRef(null);

  const skills = [
    { name: "SEO & Content Strategy", value: 95 },
    { name: "Conversion Optimization", value: 88 },
    { name: "Data Analytics", value: 92 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Shape Floating Animation
      gsap.to(shapeRef.current, {
        y: -15,
        rotation: 2,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Main Content Entry (Left Side)
      gsap.fromTo(
        contentRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );

      // 3. Floating Image Parallax
      gsap.fromTo(
        floatingImgRef.current,
        { scale: 0.8, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
        }
      );

      // 4. Progress Bars Animation
      skills.forEach((_, index) => {
        if (barsRef.current[index]) {
          gsap.fromTo(
            barsRef.current[index],
            { width: "0%" },
            {
              width: `${skills[index].value}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
            }
          );
        }
      });

      // 5. Right Side Text Reveal
      gsap.from(".right-side-text", {
        x: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        
        {/* =========================================================
            LEFT SIDE — DIGITAL MARKETING ABSTRACT SHAPE
        ========================================================= */}
        <div className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-none order-2 lg:order-1">
          
          {/* Main Shape Wrapper */}
          <div className="relative aspect-square w-full sm:h-[500px] md:h-[550px] lg:h-[600px]">
            
            {/* Modern Abstract Digital Shape */}
            <div ref={shapeRef} className="absolute inset-0 h-full w-full drop-shadow-2xl">
              <svg viewBox="0 0 600 600" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="digitalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a8a" /> {/* Dark Blue */}
                    <stop offset="100%" stopColor="#dc2626" /> {/* Red */}
                  </linearGradient>
                  
                  {/* Grid Pattern for Digital Feel */}
                  <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>

                {/* Abstract Tech Shape Path */}
                <path
                  d="M 150 50 C 350 20, 550 80, 520 250 C 490 420, 380 550, 200 520 C 50 490, 20 350, 80 200 C 120 100, 150 50, 150 50 Z"
                  fill="url(#digitalGrad)"
                  opacity="0.9"
                />
                
                {/* Inner Grid Overlay */}
                <path
                  d="M 150 50 C 350 20, 550 80, 520 250 C 490 420, 380 550, 200 520 C 50 490, 20 350, 80 200 C 120 100, 150 50, 150 50 Z"
                  fill="url(#gridPattern)"
                />

                {/* Decorative Nodes/Dots */}
                <circle cx="150" cy="50" r="8" fill="#ffffff" opacity="0.8" />
                <circle cx="520" cy="250" r="6" fill="#ffffff" opacity="0.6" />
                <circle cx="200" cy="520" r="10" fill="#ffffff" opacity="0.9" />
                <circle cx="80" cy="200" r="5" fill="#ffffff" opacity="0.5" />
              </svg>
            </div>

            {/* =====================================================
                CONTENT OVER SHAPE
            ===================================================== */}
            <div
              ref={contentRef}
              className="absolute inset-0 z-10 flex flex-col justify-center px-8 py-10 text-white sm:px-12 md:px-16 lg:px-20"
            >
              {/* Icon Badge */}
              <div className="mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <h2 className="max-w-[400px] text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
                Digital Growth <br />
                <span className="text-white/90">Through Data</span>
              </h2>

              {/* Paragraph */}
              <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-white/80 sm:text-base">
                Transform your online presence with precision-driven digital strategies. We combine analytics, creativity, and technology to deliver measurable ROI and sustainable brand growth.
              </p>

              {/* CTA Button */}
              <button type="button" className="mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-900 transition-all duration-300 hover:bg-red-600 hover:text-white shadow-lg hover:shadow-red-600/30">
                Start Your Campaign
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* =========================================================
              FLOATING CIRCLE IMAGE (Bottom Right)
          ========================================================= */}
          <div
            ref={floatingImgRef}
            className="absolute -bottom-6 right-4 z-30 h-40 w-40 rounded-full border-[6px] border-white bg-white shadow-[0_20px_50px_rgba(30,58,138,0.3)] sm:-bottom-8 sm:right-8 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:-right-12 lg:-bottom-12 lg:h-64 lg:w-64"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=85"
              alt="Digital Analytics Dashboard"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Small Decorative Element */}
          <div className="absolute bottom-10 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/10 sm:left-8 sm:h-16 sm:w-16">
            <div className="h-8 w-8 rounded-full bg-red-600 shadow-lg sm:h-10 sm:w-10"></div>
          </div>
        </div>

        {/* =========================================================
            RIGHT SIDE — CONTENT & PROGRESS BARS
        ========================================================= */}
        <div className="w-full pt-4 lg:pl-8 xl:pl-12 lg:pt-0 order-1 lg:order-2">
          
          <span className="right-side-text block text-xs font-bold uppercase tracking-[0.25em] text-red-600">
            Our Expertise
          </span>

          <h3 className="right-side-text mt-3 max-w-xl text-3xl font-extrabold leading-[1.15] tracking-tight text-blue-900 sm:text-4xl md:text-[42px] lg:text-[46px]">
            Optimize Digital Presence for High-ROI Growth
          </h3>

          <p className="right-side-text mt-6 max-w-2xl text-base leading-relaxed text-gray-600 lg:text-lg">
            In the digital landscape, visibility and engagement are non-negotiable. We provide comprehensive digital marketing solutions that leverage data-driven insights to maximize your conversion rates and brand authority.
          </p>

          {/* Progress Bars */}
          <div className="mt-10 space-y-6 sm:mt-12 lg:mt-14">
            {skills.map((skill, index) => (
              <div key={skill.name} className="w-full">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-base font-bold text-blue-900">{skill.name}</span>
                  <span className="text-base font-bold text-red-600">{skill.value}%</span>
                </div>
                <div className="relative h-[8px] w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    ref={(el) => (barsRef.current[index] = el)}
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-900 to-red-600"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-14">
            <button type="button" className="right-side-text inline-flex w-fit items-center justify-center rounded-md border-2 border-blue-900 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-blue-900 transition-all duration-300 hover:bg-blue-900 hover:text-white hover:shadow-lg">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;