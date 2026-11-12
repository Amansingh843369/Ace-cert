"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About ACE Certification Services"
      className="relative bg-white py-12 font-sans overflow-hidden sm:py-16 lg:py-16"
    >
      {/* Decorative gradient background */}
      <div className="absolute -inset-1 bg-gradient-to-br from-red-50 via-white to-red-50/30 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-50/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 sm:mb-6 sm:text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>About ACE Certification</span>
          </div>
          <h2 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Built on Trust.<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Driven by Excellence.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto opacity-90">
            ACE Certification Ltd. is a client-centric professional services firm empowering organizations
            worldwide to achieve international standards of quality, safety, and efficiency.
          </p>
        </div>

        {/* Two-Column Layout: Content | Single Image */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left Column: Story + Values */}
          <div className="relative space-y-8 lg:space-y-10">
            <div className="relative space-y-6 lg:space-y-8">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/25">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">Our Story</h3>
                </div>
                <div className="h-[2px] w-16 bg-red-600 rounded-full" />
              </div>

              <div className="space-y-5 text-sm leading-relaxed text-slate-600 lg:space-y-6 lg:text-base">
                <p className="leading-relaxed">
                  <strong className="font-semibold text-slate-900">ACE Certification Ltd.</strong> is a
                  dedicated and client-centric professional services firm established to empower
                  organizations of all sizes to achieve international standards of quality, safety, and
                  efficiency.
                </p>
                <p className="leading-relaxed">
                  The name &quot;ACE&quot; embodies our core promise: to help our clients Achieve Compliance
                  &amp; Excellence. We bridge the gap between complex international standards and everyday
                  business success.
                </p>
                <p className="leading-relaxed">
                  Our team comprises highly experienced Lead Auditors who bring practical insights to every
                  engagement. We believe certification is not just a trophy, but a strategic tool for
                  tangible business improvement.
                </p>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-red-600/20 transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>

            </div>
          </div>

          {/* Right Column: Single Large Image */}
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-slate-50/70" />
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85"
              alt="ACE Certification team discussing ISO compliance and quality standards"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-white/60 animate-fade-in-up">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-900">Trusted Worldwide</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
