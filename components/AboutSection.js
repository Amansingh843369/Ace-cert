"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection({
  showActions = true,
  showStrategicParagraph = true,
  foregroundImage = "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=600&q=85",
  foregroundImageAlt = "Corporate professional woman",
}) {
  return (
    <section
      id="about"
      aria-label="About ACE Certification Services"
      className="relative overflow-hidden bg-white py-12 font-sans sm:py-14 lg:py-16"
    >
      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute -left-48 top-12 h-[600px] w-[600px] rounded-full bg-red-100/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-64 right-0 h-[600px] w-[600px] rounded-full bg-red-50 blur-[120px]" />
      <div className="pointer-events-none absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-red-50/40 blur-[100px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-4  sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Left: Overlapping Images */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:h-full lg:max-w-none">
            {/* Main Background Corporate Image (Team Meeting/High-Five vibe) */}
            <div className="relative aspect-[4/5] w-[80%] overflow-hidden rounded-lg shadow-xl lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=85"
                alt="Corporate team working together"
                fill
                sizes="(max-width: 1024px) 80vw, 500px"
                className="object-cover"
              />
            </div>

            {/* Foreground Overlapping Corporate Image */}
            <div className="absolute -right-2 top-[35%] aspect-square w-[60%] overflow-hidden border-8 border-white bg-slate-100 shadow-2xl sm:-right-8 lg:-right-4 xl:-right-12">
              <Image
                src={foregroundImage}
                alt={foregroundImageAlt}
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8 lg:max-w-lg">
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-12 rounded-full bg-red-600" />
              <span className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">
                Our story
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Built on Trust.
              <br className="hidden sm:block" />
              <span className="mt-2 inline-block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Driven by Excellence.
              </span>
            </h2>

            <div className="mt-4 space-y-5 text-base leading-7.5 text-slate-600 sm:text-lg sm:leading-8 text-justify" >
              <p>
                <strong className="font-semibold text-slate-900">ACE Certification Ltd.</strong> is a
                dedicated, client-centric professional services firm helping organizations of all
                sizes achieve international standards of quality, safety, and efficiency.
              </p>
              <p>
                The name{" "}
                <span className="font-semibold text-slate-900">&quot;ACE&quot;</span>{" "}
                reflects our promise: to help clients Achieve Compliance &amp; Excellence. Our
                experienced Lead Auditors turn complex standards into practical steps for lasting
                business improvement.
              </p>
              {showStrategicParagraph && (
                <p>
                  We believe certification should be more than a trophy—it should be a strategic tool
                  that creates measurable improvement for your business.
                </p>
              )}
            </div>

            {showActions && (
              <Link
                href="/about"
                className="group mt-2 inline-flex items-center gap-2.5 rounded-xl bg-red-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                Know More
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            )}
          </div>
        </div>
      </section>

    </section>
  );
}