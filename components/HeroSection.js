"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// --- Typewriter Component ---
function TypewriterText({ phrases }) {
  const typewriterPhrases =
    phrases?.length ? phrases : ["For Achieve", "For Compliance", "For Excellence"];
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
        timer = window.setTimeout(() => {
          setDeleting(false);
          setPhraseIndex((current) => (current + 1) % typewriterPhrases.length);
        }, 0);
      }
    }

    return () => window.clearTimeout(timer);
  }, [deleting, phraseIndex, visibleText, isPaused]);

  return (
    <span className="inline-block whitespace-nowrap font-bold text-red-700">
      {visibleText}
      <span className="ml-1 inline-block h-[0.85em] animate-pulse border-r-2 border-red-600 align-middle sm:border-r-[3px]" />
    </span>
  );
}

export default function HeroSection({ content = {} }) {
  return (
    <section 
      id="hero" 
      className="relative isolate flex min-h-[100dvh] w-full items-center overflow-hidden bg-white py-16 sm:py-20"
    >
      <div className="absolute inset-0">
        <Image
          src="/your_success.jpg" 
          alt="Professionals collaborating during a business meeting"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-white/10 md:to-transparent" />
        <div className="absolute inset-0 bg-white/70 md:hidden" />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[24%] w-[26%] bg-red-700 [clip-path:polygon(100%_0,100%_100%,0_100%)] sm:h-[34%] sm:w-[20%] lg:h-[40%] lg:w-[20%]"
      />
      <span
        aria-hidden="true"
        className="absolute left-[8.5%] top-[15%] hidden text-5xl font-light leading-none text-red-500 sm:block"
      >
        +
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="presence-float absolute left-[39%] top-[11%] hidden h-12 w-12 sm:block"
      >
        <path
          d="M6 8 43 4 31 42 6 8Z"
          fill="none"
          stroke="#DC2626"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="presence-float-delayed absolute bottom-[20%] right-[24%] hidden h-12 w-12 sm:block"
      >
        <path
          d="m24 3 21 38H3L24 3Z"
          fill="none"
          stroke="#EF4444"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-10 lg:translate-y-3 lg:px-16">
        <div className="max-w-[690px]">
          <p className="mb-4 text-lg font-semibold uppercase tracking-[0.08em] text-slate-700 sm:text-xl">
            {content.eyebrow ?? "Welcome"}
          </p>

          <h1 className="mb-6 text-[clamp(2rem,5.2vw,5.75rem)] font-black leading-[0.98] tracking-[-0.045em] text-slate-900 sm:text-[clamp(3rem,5.2vw,5.75rem)]">
            <span className="block">{content.titleLine1 ?? "ACE"}</span>
            <span className="block">{content.titleLine2 ?? "Certification"}</span>
            <span className="block min-h-[1em]">
              <TypewriterText phrases={content.phrases} />
            </span>
          </h1>

          <p className="mb-8 max-w-[640px] text-lg leading-relaxed text-slate-700 sm:text-xl lg:text-2xl">
            {content.description ??
              "Your trusted partner for Certification, Inspection and training Services. We simplify complex standards to power your business growth."}
          </p>

          <div>
            <a
              href={content.buttonLink || "/contact"}
              className="group inline-flex w-full items-center justify-center rounded-md bg-red-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-red-700/30 active:scale-[0.98] sm:w-auto sm:px-10 sm:text-lg"
            >
              <span>{content.buttonLabel ?? "CONTACT TODAY"}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}