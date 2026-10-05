"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

// --- Typewriter Component ---
const typewriterPhrases = ["For Security", "For Trust", "For Excellence"];

function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const phrase = typewriterPhrases[phraseIndex];
    
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 2000; 

    let timer;

    if (!deleting && !isPaused) {
      if (visibleText !== phrase) {
        timer = window.setTimeout(() => {
          setVisibleText(phrase.slice(0, visibleText.length + 1));
        }, typeSpeed);
      } else {
        timer = window.setTimeout(() => {
          setIsPaused(true);
        }, pauseTime);
      }
    } else if (isPaused) {
      timer = window.setTimeout(() => {
        setIsPaused(false);
        setDeleting(true);
      }, 100);
    } else {
      if (visibleText !== "") {
        timer = window.setTimeout(() => {
          setVisibleText(phrase.slice(0, visibleText.length - 1));
        }, deleteSpeed);
      } else {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % typewriterPhrases.length);
      }
    }

    return () => window.clearTimeout(timer);
  }, [deleting, phraseIndex, visibleText, isPaused]);

  return (
    <span className="text-red-600 font-bold inline-block min-w-[160px] sm:min-w-[240px] md:min-w-[300px] lg:min-w-[380px] align-bottom"> 
      {visibleText}
      <span className="animate-pulse border-r-2 sm:border-r-[3px] border-red-600 h-[0.85em] inline-block align-middle ml-1"></span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white py-12 sm:py-20 lg:py-0"
    >
      
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0">
        <img 
          src="/your_success.jpg" 
          alt="Team Meeting Professional" 
          className="w-full h-full object-cover object-center lg:object-right"
        />
        
        {/* Mobile (Below md): Solid/Semi-transparent white layer for crisp mobile readability and Red+White theme */}
        <div className="absolute inset-0 bg-white/95 md:hidden" />
        
        {/* Tablet / Small Laptop (md to lg): Gradient overlay */}
        <div className="hidden md:block lg:hidden absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20" />
        
        {/* Desktop / Large Screen (lg+): Soft background gradient */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-3/4" />
      </div>

      {/* Decorative Elements (Updated to Red Theme) */}
      <div className="absolute top-10 left-8 w-3 h-3 sm:w-4 sm:h-4 border-2 border-red-400 rotate-45 z-20 hidden sm:block animate-spin-slow"></div>
      <div className="absolute top-28 right-12 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-300 rounded-full z-20 hidden md:block"></div>
      <div className="absolute bottom-12 right-1/4 w-3 h-3 bg-red-500 rounded-full z-20 hidden lg:block opacity-60"></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl relative z-30">
        <div className="max-w-xl sm:max-w-2xl md:max-w-2xl lg:max-w-2xl xl:max-w-3xl">
          
          {/* Badge / Welcome Text */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-red-900">
              Welcome to ACE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            <span className="block text-slate-900">
              ACE Certification
            </span>
            <span className="block mt-1.5 sm:mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-700 min-h-[1.2em]">
              <TypewriterText />
            </span>
          </h1>

          {/* Subheadline / Description */}
          <p className="text-base md:text-lg lg:text-xl text-slate-600 sm:text-slate-700 mb-8 max-w-lg md:max-w-xl leading-relaxed font-normal sm:font-medium">
            Your trusted partner for Certification, Inspection and training Services. We simplify complex standards to power your business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-base rounded-xl shadow-lg shadow-red-600/25 hover:shadow-red-600/35 transition-all duration-300 transform active:scale-95 sm:hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              <span>CONTACT TODAY</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* Custom Keyframe Animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}