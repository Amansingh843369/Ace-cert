"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight, Lightbulb } from "lucide-react";

const faqData = [
  {
    question: "Ut enim ad minim veniam exercitation ullamco?",
    answer:
      "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    question: "Excepteur sint proident culpa qui officia?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Sed ut perspiciatis unde omnis iste natus errorsit?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    question: "Consectetur adipisicing incididunt?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0); // Pehla item open by default like image

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-4 md:px-8 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: FAQ Content --- */}
        <div className="order-2 lg:order-1 mt-10 lg:mt-0">
          <span className="text-[#f97316] text-sm font-bold uppercase tracking-wider mb-2 block">
            FAQ
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1b4b] mb-10 leading-tight">
            Frequently Ask Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`border-b border-gray-200 pb-4 transition-all duration-300 ${activeIndex === index ? 'pb-6' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span 
                    className={`text-lg font-medium transition-colors duration-300 ${
                      activeIndex === index ? 'text-[#f97316]' : 'text-[#1e1b4b] group-hover:text-[#f97316]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div className={`p-1 rounded-full transition-colors duration-300 ${activeIndex === index ? 'text-[#f97316]' : 'text-gray-400'}`}>
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                {/* Answer with smooth height transition logic could be added here, keeping it simple for now */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 text-base leading-relaxed pr-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 px-8 py-3 border border-[#1e1b4b] text-[#1e1b4b] font-semibold text-sm uppercase tracking-wide hover:bg-[#1e1b4b] hover:text-white transition-all duration-300">
            Discover More
          </button>
        </div>

        {/* --- RIGHT SIDE: Visuals & CTA --- */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          
          {/* Decorative Background Elements (Dots & Lines) */}
          <div className="absolute -left-10 top-1/4 w-32 h-32 opacity-20 hidden lg:block pointer-events-none">
             {/* Simple SVG Pattern for dots */}
             <svg width="100%" height="100%" viewBox="0 0 100 100" fill="#1e1b4b">
               <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1.5"></circle>
               </pattern>
               <rect width="100" height="100" fill="url(#dots)"></rect>
             </svg>
          </div>

          {/* Main Organic Image Container */}
          <div className="relative w-full max-w-md lg:max-w-lg">
            
            {/* The Blob/Image Shape */}
            <div 
              className="relative w-full aspect-square overflow-hidden shadow-2xl"
              style={{
                borderRadius: "45% 55% 65% 35% / 55% 45% 55% 45%", // Asymmetric blob shape
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional thinking"
                className="w-full h-full object-cover"
              />
              
              {/* Orange Overlay Gradient matching the design */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f97316]/80 via-[#ea580c]/40 to-transparent mix-blend-multiply"></div>

              {/* Floating Text Content inside Image */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 text-white z-10">
                <Lightbulb className="w-10 h-10 mb-4 text-white/90" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  Have any doubt in your mind?
                </h3>
                <p className="text-sm md:text-base text-white/80 mb-6 max-w-xs leading-relaxed">
                 Find out how our process works; we're here to answer all your questions.

                </p>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
                  Get In Touch <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Decorative Lines (Simulated with absolute divs) */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-[#f97316]/30 rounded-bl-full pointer-events-none hidden md:block"></div>
            <div className="absolute -top-10 -right-10 w-24 h-24 border-t border-r border-[#1e1b4b]/10 rounded-tr-full pointer-events-none"></div>

          </div>
        </div>
      </div>

    </section>
  );
}