"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";

// --- Typewriter Component (Same Logic, Updated Style) ---
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
    <span className="text-indigo-900 font-bold inline-block">
      {visibleText}
      {/* Cursor blinking effect */}
      <span className="animate-pulse border-r-[3px] border-indigo-600 h-[0.8em] inline-block align-middle ml-1"></span>
    </span>
  );
}

export default function HeroSection() {
  return (
    // Main Container: Full width, min height, relative positioning for absolute shapes
    <section 
      id="hero" 
      className="relative w-full min-h-[90vh] md:min-h-[88vh] flex items-center overflow-hidden bg-slate-50  pb-10"
    >
      
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80" 
          alt="Team Meeting Professional" 
          className="w-full h-full object-cover opacity-90"
        />
        
        {/* Gradient Overlay to blend left side into white shape */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-900/90 via-indigo-900/40 to-transparent md:w-[40%] right-0" />
      </div>
 
      
     
      <div className="hidden md:block absolute top-0 left-0 h-full w-[55%] z-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white drop-shadow-xl">
       
           <path d="M0,0 L70,0 Q108,50 70,100 L0,100 Z" />
        </svg>
      </div>
      
      
      {/* Mobile Fallback Shape (Simpler circle/blob behind text) */}
      <div className="md:hidden absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-white rounded-full blur-3xl opacity-90 z-0"></div>


      {/* 2. Top Right Diagonal Cut (Dark Blue/Purple) */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[150px] border-t-indigo-950 border-l-[150px] border-l-transparent z-20 hidden lg:block"></div>
      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[100px] border-b-indigo-900 border-l-[100px] border-l-transparent z-20 hidden lg:block"></div>

      {/* Small Floating Geometric Accents (Triangles/Dots) */}
      <div className="absolute top-20 left-1/4 w-4 h-4 border-2 border-orange-400 rotate-45 z-20 hidden md:block animate-spin-slow"></div>
      <div className="absolute top-40 right-1/3 w-3 h-3 bg-teal-400 rounded-full z-20 hidden md:block"></div>


      {/* --- CONTENT CONTAINER --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-30">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          
          {/* Welcome Text */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">Welcome</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold text-indigo-950 leading-[1.1] mb-6">
            ACE <br/>
            Certification <br/>
            <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl">
              <TypewriterText />
            </span>
          </h1>

          {/* Subheadline / Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl leading-relaxed font-medium">
            Provider of ISO Management System Certification, Training, and Advisory Services. We empower organizations to achieve global standards with confidence.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              CONTACT TODAY
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            
          </div>

        </div>
      </div>

      {/* Custom Animation Class for Spinner */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}