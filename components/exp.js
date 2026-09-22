"use client";

import React, { useEffect, useRef, useState } from "react";

const DataStrategySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "Service", value: 85 },
    { name: "Inspection", value: 91 },
    { name: "Training", value: 77 },
  ];

  // Scroll aane par progress bars animate hongi
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Thoda jaldi trigger hone ke liye 0.2 kar diya
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-4 md:px-8 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* --- LEFT SIDE: Shaped Image with Overlay & Floating Element --- */}
        <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none">
          
          {/* Main Organic Shaped Container */}
          <div 
            className="relative w-full h-[500px] sm:h-[550px] lg:h-[650px] overflow-hidden shadow-2xl"
            style={{
              // Unique blob/organic shape matching the design
              borderRadius: "5% 45% 45% 5% / 20% 50% 60% 10%",
            }}
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Businessman working on laptop"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Teal/Cyan Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/90 to-[#0891b2]/75 mix-blend-multiply"></div>

            {/* Left Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 sm:px-10 lg:pl-12 lg:pr-16 text-white">
              
              {/* Network / Data Icon */}
              <div className="mb-4 lg:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white opacity-90 lg:w-[48px] lg:h-[48px]"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <circle cx="4" cy="6" r="2"></circle>
                  <circle cx="20" cy="6" r="2"></circle>
                  <circle cx="4" cy="18" r="2"></circle>
                  <circle cx="20" cy="18" r="2"></circle>
                  <line x1="10.5" y1="10.5" x2="5.5" y2="7.5"></line>
                  <line x1="13.5" y1="10.5" x2="18.5" y2="7.5"></line>
                  <line x1="10.5" y1="13.5" x2="5.5" y2="16.5"></line>
                  <line x1="13.5" y1="13.5" x2="18.5" y2="16.5"></line>
                </svg>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
               Accelerate Your<br className="hidden sm:block"/> Operational Excellence
              </h2>
              
              <p className="text-sm sm:text-base text-white/95 max-w-md mb-8 font-light leading-relaxed text-justify">
                At ACERT, we live up to our name by ensuring you Achieve Compliance & Excellence seamlessly. Our seasoned auditors provide practical, real-world solutions that streamline your processes, manage risks, and build lasting customer trust.
              </p>

              <button className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity w-fit">
                Talk to our analysts
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Floating Desk Lamp Circular Image (Responsive placement & size) */}
          <div className="absolute -bottom-4 right-2 sm:right-6 lg:-bottom-8 lg:-right-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-white rounded-full p-1.5 lg:p-2 shadow-2xl z-20">
            <img 
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Desk Lamp" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* --- RIGHT SIDE: Text & Progress Bars --- */}
        <div className="lg:pl-8 mt-10 lg:mt-0">
          <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 mb-2 lg:mb-3">
            Experience
          </span>
          
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#201f44] mb-4 lg:mb-5 leading-[1.2]">
            Optimize Data for High-ROI Decisions
          </h3>
          
          {/* Text alignment justified for a clean look */}
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 max-w-xl text-justify">
            In global business, structural integrity, equipment reliability, and supply chain quality are non-negotiable. ACERT provides independent, third-party management system certification, inspection and training services that mitigate risk, ensure compliance with international codes, and protect your investments.
          </p>

          {/* Progress Bars */}
          <div className="space-y-6 lg:space-y-8 mb-10">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-base lg:text-lg font-medium text-[#201f44]">
                    {skill.name}
                  </span>
                  <span className="text-base lg:text-lg font-bold text-[#df9a62]">
                    {isVisible ? skill.value : 0}%
                  </span>
                </div>
                {/* Bar Track */}
                <div className="w-full h-[6px] bg-gray-100 rounded-full relative">
                  {/* Glowing Bar Fill */}
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#f0b57e] to-[#df9a62]"
                    style={{ 
                      width: isVisible ? `${skill.value}%` : "0%",
                      transition: `width 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.2}s`,
                      boxShadow: isVisible ? "0 4px 12px rgba(223, 154, 98, 0.4)" : "none" 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <button className="px-6 py-3 lg:px-8 lg:py-3.5 w-full sm:w-auto border-2 border-[#df9a62] text-[#201f44] font-bold text-sm tracking-wider rounded uppercase hover:bg-[#df9a62] hover:text-white transition-all duration-300 text-center">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default DataStrategySection;