"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Trophy } from "lucide-react";

export default function AboutSection({
  imageSrc = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=85",
  imageAlt = "Professionals collaborating on quality and compliance",
  overlayImageSrc = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85",
  overlayImageAlt = "A team working together",
  eyebrowText = "About ACE Certification",
  showAcronymHighlights = true,
  showStoryLink = true,
  showTrustCard = true,
  justifyText = false,
  highlightAcronymExpansion = false,
  compactTopPadding = false,
  emphasizeImage = false,
}) {
  return (
    <section
      id="about"
      aria-label="About ACE Certification Services"
      className={`relative overflow-hidden bg-slate-50 font-sans ${
        compactTopPadding
          ? "pt-8 pb-20 sm:pt-12 sm:pb-28 lg:pt-16 lg:pb-32"
          : "py-20 sm:py-28 lg:py-32"
      }`}
    >
      {/* Premium Background Blurs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-red-100/40 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-48 right-0 h-[400px] w-[400px] rounded-full bg-red-200/20 blur-[100px]" />

      <div className={`relative z-10 mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:px-8 ${
        emphasizeImage
          ? "items-stretch lg:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
          : "items-center lg:gap-20 lg:grid-cols-2"
      }`}>
        
        {/* LEFT COLUMN: IMAGE COMPOSITION (Based on your sketch) */}
        <div className={`relative w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none ${emphasizeImage ? "lg:h-full" : ""}`}>
          <div className={`relative w-full ${emphasizeImage ? "pr-10 sm:pr-16 lg:h-full" : "pb-12 pr-12 sm:pb-20 sm:pr-20"}`}>
            
            {/* Main Image */}
            <div className={`relative overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/15 ${
              emphasizeImage
                ? "aspect-[3/4] w-[90%] lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto"
                : "aspect-[3/4] w-[85%]"
            }`}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 85vw, 500px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Front Overlapping Image (Wide/Landscape) */}
            <div className={`absolute right-0 overflow-hidden rounded-3xl border-[8px] border-slate-50 bg-white shadow-2xl ${
              emphasizeImage
                ? "top-[60%] w-[45%] -translate-y-1/2"
                : "bottom-0 w-[70%]"
            }`}>
              <div className={`relative w-full ${emphasizeImage ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={overlayImageSrc}
                  alt={overlayImageAlt}
                  fill
                  sizes="(max-width: 1024px) 70vw, 400px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {showTrustCard && (
              <div className="absolute top-10 -left-6 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:top-16 sm:-left-8 sm:p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <Trophy className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="pr-2 hidden sm:block">
                  <p className="text-base font-extrabold text-slate-900">Trusted worldwide</p>
                  <p className="text-sm font-medium text-slate-500">Quality & Excellence</p>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* RIGHT COLUMN: TEXT CONTENT */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-red-200 bg-red-50/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-600 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <span>{eyebrowText}</span>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Built on Trust.
            <span className="mt-2 block bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Driven by Excellence.
            </span>
          </h2>

          <div className={`mt-8 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-loose ${justifyText ? "text-justify" : ""}`}>
            <p>
              <strong className="font-semibold text-slate-900">ACE Certification Ltd.</strong> is a
              dedicated, client-centric professional services firm helping organizations of all sizes
              achieve international standards of quality, safety, and efficiency.
            </p>
            <p>
              The name &quot;ACE&quot; reflects our promise: to help clients{" "}
              <span className={highlightAcronymExpansion ? "font-semibold text-red-600" : ""}>
                Achieve Compliance &amp; Excellence.
              </span>{" "}
              Our experienced Lead Auditors turn complex standards into practical steps for lasting
              business improvement.
            </p>
            <p>
              We believe certification should be more than a trophy—it should be a strategic tool
              that creates measurable improvement for your business.
            </p>
          </div>

          {/* ACE Acronym Highlights */}
          {showAcronymHighlights && (
            <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:gap-6 sm:p-5">
            {[
              ["A", "Achieve"],
              ["C", "Compliance"],
              ["E", "Excellence"],
            ].map(([letter, label], index) => (
              <React.Fragment key={letter}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-base font-extrabold text-red-600">
                    {letter}
                  </span>
                  <span className="text-sm font-bold text-slate-700 sm:text-base">{label}</span>
                </div>
                {index !== 2 && (
                  <div className="hidden h-5 w-px bg-slate-200 sm:block" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
            </div>
          )}

          {showStoryLink && (
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Discover our story
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}