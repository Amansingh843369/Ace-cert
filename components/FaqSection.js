"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight, Lightbulb } from "lucide-react";

// SEO Optimized FAQ Data (Replaced Lorem Ipsum for better keyword relevance)
const faqData = [
  {
    question: "What is the process for obtaining ISO certification?",
    answer:
      "The process typically involves an initial gap analysis, followed by system implementation, internal auditing, and finally, a formal certification audit by an accredited body to ensure full compliance.",
  },
  {
    question: "How long does the certification process take?",
    answer:
      "Depending on the size and complexity of your organization, the entire process can take anywhere from 3 to 6 months. We provide a streamlined roadmap to accelerate this timeline.",
  },
  {
    question: "Which ISO standard is right for my business?",
    answer:
      "ISO 9001 is the most universal standard for quality management. However, if you are in manufacturing, IT, or logistics, specific standards like ISO 14001, ISO 27001, or ISO 45001 might be strictly required.",
  },
  {
    question: "How much does ISO certification cost?",
    answer:
      "Costs vary based on your company's size, number of employees, and the specific standard required. We offer transparent, customized quotes without any hidden fees.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: FAQ Content --- */}
        <div className="order-2 lg:order-1 mt-8 lg:mt-0">
          
          <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 block">
            FAQ
          </span>
          
          <h2 
            id="faq-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 sm:mb-10 leading-[1.15]"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border-b border-slate-200 pb-4 transition-all duration-300 ${isActive ? 'pb-6' : ''}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex justify-between items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 rounded-md"
                  >
                    <span 
                      className={`text-base sm:text-lg font-bold transition-colors duration-300 pr-4 ${
                        isActive ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'
                      }`}
                    >
                      {item.question}
                    </span>
                    <div 
                      className={`flex-shrink-0 p-1.5 rounded-full transition-colors duration-300 ${
                        isActive ? 'text-red-600 bg-red-50' : 'text-slate-400 group-hover:bg-slate-50'
                      }`}
                      aria-hidden="true"
                    >
                      {isActive ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  {/* Accessible Answer Container with smooth transition */}
                  <div 
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pr-6 sm:pr-10">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="mt-8 sm:mt-10 px-8 py-3.5 border-2 border-slate-900 text-slate-900 font-bold text-sm uppercase tracking-wide hover:bg-slate-900 hover:text-white hover:shadow-lg transition-all duration-300 rounded-lg active:scale-95">
            Discover More
          </button>
        </div>

        {/* --- RIGHT SIDE: Visuals & CTA --- */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end w-full">
          
          {/* Decorative Background Elements (Dots) */}
          <div className="absolute -left-10 top-1/4 w-32 h-32 opacity-10 hidden lg:block pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 100 100" fill="#dc2626">
               <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1.5"></circle>
               </pattern>
               <rect width="100" height="100" fill="url(#dots)"></rect>
             </svg>
          </div>

          {/* Main Organic Image Container */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            
            {/* The Blob/Image Shape */}
            <div 
              className="relative w-full aspect-square overflow-hidden shadow-2xl shadow-red-900/10"
              style={{
                borderRadius: "45% 55% 65% 35% / 55% 45% 55% 45%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Expert consultant helping client with compliance"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              
              {/* Red Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-700/80 via-red-600/50 to-transparent mix-blend-multiply"></div>

              {/* Floating Text Content inside Image */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-12 text-white z-10">
                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-white/90" aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3 leading-tight drop-shadow-md">
                  Have any doubts in your mind?
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/90 mb-5 sm:mb-6 max-w-xs leading-relaxed font-medium">
                  Find out how our certification process works; our experts are here to answer all your technical questions.
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all w-max group"
                >
                  Get In Touch 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-32 sm:w-40 h-32 sm:h-40 border-l-2 border-b-2 border-red-600/20 rounded-bl-full pointer-events-none hidden sm:block"></div>
            <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-20 sm:w-24 h-20 sm:h-24 border-t-2 border-r-2 border-slate-900/10 rounded-tr-full pointer-events-none"></div>

          </div>
        </div>
      </div>
    </section>
  );
}