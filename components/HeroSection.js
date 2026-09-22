"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const typewriterPhrases = ["to Be Trusted", "for Business", "for Excellence"];

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
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 font-bold pr-1">
      {visibleText}
      <span className="animate-pulse border-r-4 border-blue-500 h-8 md:h-12 inline-block align-middle ml-1"></span>
    </span>
  );
}

export default function HeroSection() {
  return (
    // CHANGE HERE: pt-4 lagaya hai taaki navbar se gap kam ho jaye
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900 pt-8" aria-labelledby="hero-title">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80" 
          alt="Professional team meeting" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_30s_ease-in-out_infinite]" 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/80 to-slate-900/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pb-12">
        <div className="max-w-4xl">
          
          {/* Badge - mb-4 rakha hai heading ke saath gap kam rakhne ke liye */}
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-4 backdrop-blur-md shadow-lg shadow-blue-900/20">
           
            <span className="text-blue-200 text-xs font-bold tracking-wider uppercase">Welcome to AceCert</span>
          </div>

          {/* Heading */}
          <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg">
            ACE Certification <br />
            <TypewriterText />
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
            Provider of ISO Management System Certification, Training, and Advisory Services. We simplify complex standards to power your business growth globally.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 relative z-20">
            <a 
              href="#contact" 
              className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-blue-600/20 flex items-center gap-2 hover:-translate-y-1 hover:shadow-blue-500/40 border border-blue-400/20"
            >
              GET STARTED 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              VIEW SERVICES
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}