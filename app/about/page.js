import React from 'react';
import Link from "next/link";
import Image from "next/image";
export default function AboutPage() {
  return (
    <main className="font-sans bg-white min-h-screen pb-12 selection:bg-red-100 selection:text-red-900">
      
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
            <span className="hover:text-red-600 transition-colors cursor-pointer">Home</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-semibold">About Company</span>
          </nav>
        </div>
      </section>

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
            
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              Our mission at ACE Certification Ltd. is to simplify the path to certification and embed a culture of continuous improvement within our client organizations.
            </p>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              We achieve this by providing rigorous &amp; impartial certification, delivering reliable audit services that uphold the highest standards of integrity.
            </p>

            <div className="pt-4">
              <Link
                href="/mission"
                className="inline-flex rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                LEARN MORE
              </Link>
            </div>
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=85"
                    alt="Business growth and data analysis"
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
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-semibold tracking-wider text-red-600 uppercase">
                Our direction
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Our Vision
              </h2>
            </div>
            
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              To be the most trusted and impactful partner for organizational excellence, recognized globally for setting the benchmark in certification and training services.
            </p>

            <div className="pt-4">
              <Link
                href="/vision"
                className="inline-flex rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
{/* ================= CORE VALUES SECTION ================= */}
      <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        {/* Navy + Red decorative blobs */}
        <div className="pointer-events-none absolute -left-48 top-16 h-[500px] w-[500px] rounded-full bg-red-100/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-48 top-16 h-[500px] w-[500px] rounded-full bg-blue-950/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-64 left-1/2 h-[500px] w-[500px] rounded-full bg-red-50 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40" />
                <span className="relative inline-flex h-full w-full rounded-full bg-red-600" />
              </span>
              The ACE Standard
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Our Core 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-900">
                Values
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The principles behind every assessment, partnership, and result.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {[
              {
                letter: "A",
                label: "A · Integrity",
                title: "Accuracy & Integrity",
                desc: "We are unwavering in our commitment to impartiality, ethical practices, and technically sound assessments.",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                gradient: "from-red-600 to-red-500",
                accent: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
                border: "hover:border-red-200",
                shadow: "hover:shadow-[0_20px_40px_rgba(227,6,19,0.12)]",
              },
              {
                letter: "C",
                label: "C · Partnership",
                title: "Client Success",
                desc: "Your success is our success. We build long-term partnerships based on understanding, respect, and shared goals.",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                gradient: "from-blue-900 to-blue-800",
                accent: "bg-blue-100 text-blue-900 group-hover:bg-blue-900 group-hover:text-white",
                border: "hover:border-blue-200",
                shadow: "hover:shadow-[0_20px_40px_rgba(30,58,138,0.12)]",
              },
              {
                letter: "E",
                label: "E · Progress",
                title: "Excellence",
                desc: "We continuously invest in the development of our team and services to provide cutting-edge, expert guidance.",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                gradient: "from-red-600 via-red-500 to-blue-900",
                accent: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
                border: "hover:border-red-200",
                shadow: "hover:shadow-[0_20px_40px_rgba(227,6,19,0.12)]",
              },
            ].map((value) => (
              <article
                key={value.letter}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1.5 ${value.border} ${value.shadow} sm:p-8`}
              >
                {/* Large background letter */}
                <span className="absolute -right-4 -top-10 select-none text-[10rem] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-red-100/50 group-hover:translate-x-2 group-hover:-translate-y-2" aria-hidden="true">
                  {value.letter}
                </span>

                {/* Top accent bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-red-600 to-blue-900 transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-blue-900/20 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient}`} />
                    <div className="relative">{value.icon}</div>
                  </div>

                  {/* Label */}
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 transition-colors group-hover:text-red-600">
                    {value.label}
                  </p>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl transition-colors group-hover:text-red-600">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7 flex-1">
                    {value.desc}
                  </p>

                  {/* Bottom indicator */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors group-hover:text-red-600">
                    <span>Guiding principle</span>
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PURPOSE SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-red-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              Our Purpose
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Bridging the Gap to <span className="text-red-600">Business Success</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              At <strong className="font-semibold text-gray-900">ACERT Certification</strong>, our purpose is to bridge the gap between complex international standards and everyday business success. We believe that compliance &apos;shouldn&apos;t&apos; be a bureaucratic hurdle, but a <strong className="font-semibold text-red-600">strategic catalyst for growth.</strong>
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-red-100 bg-white/80 p-4 shadow-sm sm:p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-md shadow-red-600/20">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <p className="text-sm font-semibold leading-6 text-gray-800 sm:text-base">
                Turning complex standards into confident, lasting progress.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-red-600">What this means for you</p>
            <article className="group flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg sm:gap-5 sm:p-6">
              <span className="pt-1 text-sm font-extrabold tracking-wider text-red-300">01</span>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-red-600 sm:text-xl">Build Unshakeable Trust</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">Prove your commitment to safety, quality, and excellence to your clients.</p>
              </div>
            </article>

            <article className="group flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg sm:gap-5 sm:p-6">
              <span className="pt-1 text-sm font-extrabold tracking-wider text-red-300">02</span>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-red-600 sm:text-xl">Unlock Market Potential</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">Open doors to new contracts, global opportunities, and regulatory compliance.</p>
              </div>
            </article>

            <article className="group flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg sm:gap-5 sm:p-6">
              <span className="pt-1 text-sm font-extrabold tracking-wider text-red-300">03</span>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-red-600 sm:text-xl">Drive Operational Excellence</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">Transform rigorous industry standards into streamlined, efficient practices.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA SECTION (With ISO Image) ================= */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
            
            {/* Left Side: Text Content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 bg-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Looking For Professional<br/>Certification Partner?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Highly recommend our templates and services for any business looking to establish a strong online presence and achieve global compliance standards.
              </p>
              
              {/* Hand drawn arrow icon simulation */}
              <div className="hidden md:block w-16 h-16 text-gray-800 opacity-80">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                   <path d="M20,80 Q50,20 80,50 T90,20" strokeLinecap="round" />
                   <path d="M80,20 L90,20 L90,30" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Right Side: ISO Related Image + Button Overlay */}
            <div className="relative min-h-[300px] md:min-h-full bg-gray-50">
              {/* ISO Audit / Business Image */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" 
                alt="ISO Certification Audit Meeting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark Overlay for button visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Floating CTA Button Area */}
              <div className="absolute bottom-8 right-8 left-8 sm:left-auto sm:w-fit flex flex-col items-end gap-3 z-20">
                <button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-orange-900/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">
                  Get Started Free
                  <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
                <p className="text-sm text-white/90 font-medium bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">No credit card required</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}