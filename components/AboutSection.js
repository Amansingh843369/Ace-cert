"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Trophy } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About ACE Certification Services"
      className="relative overflow-hidden bg-gradient-to-br from-white via-red-50/40 to-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-red-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 right-0 h-96 w-96 rounded-full bg-red-50 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-red-600 shadow-sm">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <span>About ACE Certification</span>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-red-600" />
            <span className="text-sm font-semibold text-slate-500">Our story</span>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Built on Trust.
            <span className="mt-1 block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Driven by Excellence.
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>
              <strong className="font-semibold text-slate-900">ACE Certification Ltd.</strong> is a
              dedicated, client-centric professional services firm helping organizations of all sizes
              achieve international standards of quality, safety, and efficiency.
            </p>
            <p>
              The name &quot;ACE&quot; reflects our promise: to help clients Achieve Compliance &amp;
              Excellence. Our experienced Lead Auditors turn complex standards into practical steps
              for lasting business improvement.
            </p>
            <p>
              We believe certification should be more than a trophy—it should be a strategic tool
              that creates measurable improvement for your business.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              ["A", "Achieve"],
              ["C", "Compliance"],
              ["E", "Excellence"],
            ].map(([letter, label]) => (
              <div
                key={letter}
                className="inline-flex items-center gap-2 rounded-xl border border-red-100 bg-white/80 px-3 py-2 shadow-sm"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 text-xs font-extrabold text-white">
                  {letter}
                </span>
                <span className="text-sm font-semibold text-slate-700">{label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Discover our story
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-2xl pb-10 pr-7 sm:pb-12 sm:pr-10">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white shadow-2xl shadow-slate-900/15">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=85"
              alt="Professionals collaborating on quality and compliance"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                Practical expertise
              </p>
              <p className="mt-1 text-lg font-bold sm:text-xl">
                Standards that move business forward
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[38%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=85"
              alt="A team working together"
              width={700}
              height={525}
              sizes="(max-width: 640px) 38vw, 240px"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div className="absolute right-0 top-5 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:right-2 sm:top-8 sm:px-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Trophy className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Trusted worldwide</p>
              <p className="text-xs text-slate-500">Quality. Safety. Excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
