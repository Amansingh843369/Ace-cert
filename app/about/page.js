import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Handshake, ShieldCheck, TrendingUp } from "lucide-react";
import AboutSection from "../../components/AboutSection";
import PurposeSection from "../../components/PurposeSection";
export default function AboutPage() {
  return (
    <main className=" bg-white min-h-screen pb-12 selection:bg-red-100 selection:text-red-900">
      
      {/* ================= HERO / BREADCRUMB SECTION (The "Patti") ================= */}
      <section className="relative py-10 sm:py-14 px-4 text-center overflow-hidden bg-[#FFF8F7]">
        
        {/* ISO Related Background Image with Red Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80" 
            alt="ISO Certification Background" 
            className="w-full h-full object-cover opacity-30 "
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-600 tracking-tight drop-shadow-sm">
            About Company
          </h1>
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-500 font-medium bg-white/60 backdrop-blur-sm py-2 px-6 rounded-full w-fit mx-auto border border-red-100 shadow-sm">
            <Link href="/" className="transition-colors hover:text-red-600">Home</Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-semibold">About Company</span>
          </nav>
        </div>
      </section>

      <AboutSection
        showActions={false}
        showVideoButton
        foregroundImage="/about-page-video-team.png"
        foregroundImageAlt="Corporate team discussing work around a table"
      />

{/* ================= ABOUT US CONTENT SECTION ================= */}
   <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-16 font-sans text-gray-800">
      
      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-red-50/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl space-y-12 lg:space-y-16">
        
        {/* ================= 1. OUR MISSION (Text Left, Image Right) ================= */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left: Mission Text */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-semibold tracking-wider text-red-600 uppercase">
                What guides us
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Our Mission
              </h2>
            </div>
            
            <p className="text-justify text-base leading-relaxed text-gray-600 sm:text-lg">
              Our mission at ACE Certification. is to simplify the path to certification and embed a culture of continuous improvement within our client organizations.
            </p>
            <p className="text-justify text-base leading-relaxed text-gray-600 sm:text-lg">
              We achieve this by providing rigorous &amp; impartial certification, delivering reliable audit services that uphold the highest standards of integrity.
            </p>

          </div>

          {/* Right: Mission Image (Also made slightly compact to match) */}
          <div className="order-1 lg:order-2 relative mx-auto aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-[2rem] shadow-2xl lg:mx-0 lg:ml-auto">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85"
              alt="Corporate team working together on a mission"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* ================= 2. OUR VISION (Image Left, Text Right) ================= */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left: Vision Image Collage (MADE SMALLER & COMPACT) */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-[420px]">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              
              {/* Tall Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] rounded-tr-none shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=85"
                  alt="Business professional leading"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              
              {/* Stacked Images */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {/* Top Square Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] rounded-tl-none shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=85"
                    alt="Corporate office interior"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                
                {/* Bottom Square Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] rounded-bl-none shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?auto=format&fit=crop&w=600&q=85"
                    alt="Global team alignment"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision Text */}
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-sm font-semibold tracking-wider text-red-600 uppercase">
                Our direction
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Our Vision
              </h2>
            </div>
            
            <p className="text-justify text-base leading-relaxed text-gray-600 sm:text-lg">
              To be the most trusted and impactful partner for organizational excellence, recognized globally for setting the benchmark in certification and training services.
            </p>

          <p className="text-justify text-base leading-relaxed text-gray-600 sm:text-lg">
            We aim to help organizations strengthen their management systems through impartial assessments, practical guidance, and clear communication.

            </p>
          </div>

        </div>

      </div>
    </section>
{/* ================= CORE VALUES SECTION ================= */}
      <section className="relative overflow-hidden bg-white px-4  sm:px-6 sm:py-20 lg:px-12">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-700">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              The ACE Standard
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Our Core <span className="text-red-600">Values</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The principles behind every assessment, partnership, and result.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-[4.25rem] hidden h-px bg-gradient-to-r from-red-200 via-blue-200 to-red-200 md:block" />
            {[
              {
                letter: "A",
                title: "Achieve",
                desc: "We are unwavering in our commitment to impartiality, ethical practices, and technically sound assessments.",
                icon: ShieldCheck,
                ring: "text-red-600",
              },
              {
                letter: "C",
                title: "Compliance",
                desc: "Your success is our success. We build long-term partnerships based on understanding, respect, and shared goals.",
                icon: Handshake,
                ring: "text-blue-950",
              },
              {
                letter: "E",
                title: "Excellence ",
                desc: "We continuously invest in the development of our team and services to provide cutting-edge, expert guidance.",
                icon: TrendingUp,
                ring: "text-red-600",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <article key={value.letter} className="group relative flex flex-col items-center text-center">
                  <div className="relative mb-7 flex h-[8.5rem] w-[8.5rem] items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.07)] transition-transform duration-300 group-hover:-translate-y-1">
                    <svg className={`absolute inset-0 h-full w-full -rotate-90 ${value.ring}`} viewBox="0 0 136 136" fill="none" aria-hidden="true">
                      <circle cx="68" cy="68" r="63" stroke="currentColor" strokeOpacity="0.16" strokeWidth="2" />
                      <circle cx="68" cy="68" r="63" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="112 396" />
                    </svg>
                    <div className={`flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full ${index === 1 ? "bg-blue-950" : "bg-red-600"} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <span className={`absolute -bottom-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white ${index === 1 ? "bg-blue-950" : "bg-red-600"} text-xs font-bold text-white`}>
                      {value.letter}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-extrabold tracking-tight text-blue-950 transition-colors group-hover:text-red-600 sm:text-2xl">
                    {value.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
                    {value.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PurposeSection />

      {/* ================= ABOUT PAGE CTA ================= */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-blue-950 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
          <div className="grid md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-14 lg:px-14">
              <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                A trusted partner for your{" "}
                <span className="text-red-400">certification journey.</span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
                Partner with ACE Certification for impartial assessments, recognized standards, and practical guidance tailored to your organization.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-950/25 transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-blue-950"
                >
                  Talk to our team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link
                  href="/certification"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950"
                >
                  Explore certifications
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-300">
                <ShieldCheck className="h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
                Independent expertise. Clear guidance. Lasting confidence.
              </div>
            </div>

            <div className="relative min-h-[280px] md:min-h-[440px]">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85"
                alt="Modern corporate office interior"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/10 to-transparent md:bg-gradient-to-l md:from-blue-950/20 md:via-transparent md:to-blue-950/10" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-blue-950/65 p-4 text-white shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-300">Built on trust</p>
                <p className="mt-1 text-lg font-bold sm:text-xl">Standards that move your business forward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}