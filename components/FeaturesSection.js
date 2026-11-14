 
"use client";

import React from "react";
import {
  Award,
  BarChart3,
  CheckCircle2,
  Code2,
  Globe,
  Megaphone,
  MousePointer2,
  ShieldCheck,
  Target,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Award,
    title: "The ACE Name",
    text: "We live up to our name, ensuring you ace your certification journey.",
  },
  {
    id: 2,
    icon: CheckCircle2,
    title: "Clarity & Simplicity",
    text: "We demystify complex standards, making them accessible and actionable.",
  },
  {
    id: 3,
    icon: Target,
    title: "Practical Focus",
    text: "Our auditors and trainers provide practical, not just theoretical, solutions.",
  },
  {
    id: 4,
    icon: Globe,
    title: "Global Recognition, Local Service",
    text: "Our certifications are internationally recognized, with a personalized and responsive approach.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative overflow-hidden bg-white py-10 font-sans sm:py-12 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-50/70 via-white to-slate-50" />

      {/* Small decorative web and marketing elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none"
      >
        <span className="absolute left-[9%] top-8 h-2 w-2 rounded-full bg-red-400" />
        <span className="absolute right-[15%] top-12 h-2 w-2 rounded-full bg-amber-300" />

        {/* Mini browser window */}
        <div className="absolute left-[5%] top-16 hidden w-24 -rotate-12 overflow-hidden rounded-xl border border-red-100 bg-white/80 shadow-sm lg:block">
          <div className="flex items-center gap-1 border-b border-red-100 bg-red-50/80 px-2.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </div>

          <div className="flex items-center gap-2 px-3 py-3">
            <Code2
              className="h-5 w-5 shrink-0 text-red-400"
              strokeWidth={1.7}
            />
            <div className="flex-1 space-y-1.5">
              <span className="block h-1 w-full rounded-full bg-red-100" />
              <span className="block h-1 w-3/4 rounded-full bg-slate-200" />
              <span className="block h-1 w-1/2 rounded-full bg-red-100" />
            </div>
          </div>
        </div>

        {/* Marketing megaphone */}
        <div className="absolute right-[6%] top-16 hidden h-14 w-14 rotate-12 items-center justify-center rounded-2xl border border-red-100 bg-white/80 shadow-sm lg:flex">
          <Megaphone
            className="h-7 w-7 text-red-400"
            strokeWidth={1.6}
          />
        </div>

        {/* Floating triangle */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          className="presence-float absolute left-[6%] top-[38%] hidden h-12 w-12 sm:block"
        >
          <path
            d="M12 12 53 17 28 53 12 12Z"
            stroke="url(#features-triangle-gradient)"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="features-triangle-gradient"
              x1="12"
              y1="12"
              x2="53"
              y2="53"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#20C8C5" />
              <stop offset="1" stopColor="#6675EF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Small cursor with click marks */}
        <div className="absolute bottom-3 left-[12%] -rotate-12 text-red-400 sm:bottom-4">
          <MousePointer2
            className="h-6 w-6 fill-red-100"
            strokeWidth={1.7}
          />
          <span className="absolute -left-2 top-0 h-px w-1.5 rotate-12 bg-red-300" />
          <span className="absolute -top-2 left-0 h-1.5 w-px -rotate-12 bg-red-300" />
          <span className="absolute -left-1.5 -top-1.5 h-px w-1.5 rotate-45 bg-red-300" />
        </div>

        {/* Mini analytics tile */}
        <div className="absolute bottom-3 right-[10%] hidden h-10 w-12 rotate-12 items-center justify-center rounded-xl border border-red-100 bg-white/80 shadow-sm lg:flex">
          <BarChart3
            className="h-6 w-6 text-red-400"
            strokeWidth={1.7}
          />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
        </div>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="presence-float-delayed absolute bottom-[18%] right-[8%] h-6 w-6 text-blue-500"
        >
          <path
            d="M12 4v16M4 12h16"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>

        <span className="absolute bottom-[30%] right-[22%] h-1.5 w-1.5 rounded-full bg-blue-500/70" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-red-700 sm:text-xs">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Why Choose ACE</span>
          </div>

          <h2
            id="features-heading"
            className="mb-4 text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl"
          >
            Why <span className="text-red-600">Choose ACE?</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We partner with you to build lasting trust, operational excellence,
            and global compliance — not just hand you a certificate.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-50/70"
                />

                <div className="relative z-10 mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                  <Icon
                    className="h-7 w-7"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="relative z-10 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-red-600 sm:text-xl">
                  {feature.title}
                </h3>

                <p className="relative z-10 mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
