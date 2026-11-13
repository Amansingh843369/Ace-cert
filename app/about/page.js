import React from 'react';

export default function AboutPage() {
  return (
    <main className="font-sans bg-white min-h-screen pb-20 selection:bg-red-100 selection:text-red-900">
      
      {/* ================= HERO / BREADCRUMB SECTION (The "Patti") ================= */}
      <section className="relative py-16 sm:py-24 px-4 text-center overflow-hidden bg-[#FFF8F7]">
        
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
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white text-gray-800 overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-48 top-16 h-[500px] w-[500px] rounded-full bg-red-100/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-64 right-0 h-[500px] w-[500px] rounded-full bg-red-50 blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 relative w-full order-1 lg:order-1">
            <div className="relative w-full max-w-lg lg:max-w-none lg:h-[640px]">
              
              {/* Main Image - Large, prominent */}
              <div className="relative w-full h-[520px] lg:absolute lg:top-0 lg:right-0 lg:w-[90%] lg:h-[85%] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/15 border border-white ring-1 ring-slate-100 z-20 group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85" 
                  alt="ACE Team collaborating on certification project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                    Real partnerships
                  </p>
                  <p className="mt-1 text-lg font-bold sm:text-xl tracking-tight">
                    Delivering measurable results
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Image */}
              <div className="relative mt-6 lg:absolute lg:bottom-8 lg:left-4 lg:mt-0 w-full h-[320px] lg:w-[55%] lg:h-[50%] overflow-hidden rounded-2xl shadow-xl border-4 border-white z-10 group">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85" 
                  alt="Lead Auditor reviewing documentation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Accent Badge - ACE brand */}
              <div className="hidden lg:block absolute -top-4 -left-4 w-32 h-32 lg:w-44 lg:h-44 z-30">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-red-600 rounded-full opacity-10 blur-sm animate-pulse" />
                  <div className="absolute inset-0 bg-red-600 rounded-full opacity-5" />
                  <div className="relative w-full h-full rounded-full flex items-center justify-center">
                    <div className="w-[80%] h-[80%] rounded-full flex items-center justify-center bg-red-600/90 shadow-2xl">
                      <svg className="w-full h-full text-white animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                        <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                        <text className="text-[8px] font-black tracking-widest uppercase fill-white">
                          <textPath href="#circlePath" startOffset="0%">ACE CERTIFICATIONS • COMPLIANCE & EXCELLENCE •</textPath>
                        </text>
                      </svg>
                      <div className="absolute inset-0 m-auto w-1/3 h-1/3 bg-red-700 rounded-full flex items-center justify-center shadow-inner">
                        <svg className="w-3/4 h-3/4 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="hidden lg:block absolute bottom-6 right-6 lg:bottom-16 lg:right-16 z-30 w-64">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-red-100 p-5 shadow-xl shadow-slate-900/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">10+ Years</p>
                      <p className="text-xs text-slate-500">Industry Experience</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-7 order-2 lg:order-2 pr-2 lg:pr-4">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40" />
                <span className="relative inline-flex h-full w-full rounded-full bg-red-600" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-red-700">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Empowering Organizations for 
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                Global Excellence
              </span>
            </h2>

            <div className="space-y-5 text-base leading-7.5 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                <strong className="font-semibold text-slate-900">ACE Certifications Ltd.</strong> is a dedicated, client-centric professional services firm established to empower organizations of all sizes to achieve international standards of quality, safety, and efficiency.
              </p>
              <p>
                The name <span className="font-semibold text-slate-900">"ACE"</span> embodies our core promise: to help our clients 
                <span className="font-bold text-red-600">A</span>chieve 
                <span className="font-bold text-red-600">C</span>ompliance & 
                <span className="font-bold text-red-600">E</span>xcellence.
              </p>
              <p>
                Our team comprises highly experienced and qualified Lead Auditors and industry specialists who bring practical, real-world insights to every engagement. We believe certification should be more than a trophy—it should be a strategic tool for tangible, lasting business improvement.
              </p>
            </div>

            {/* ACE breakdown inline */}
            <div className="mt-2 flex flex-wrap items-center gap-3">
              {[
                { letter: "A", label: "Achieve", color: "bg-red-600" },
                { letter: "C", label: "Compliance", color: "bg-red-600" },
                { letter: "E", label: "Excellence", color: "bg-red-600" },
              ].map((item) => (
                <div
                  key={item.letter}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-red-100 bg-white px-3 py-2 shadow-sm"
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${item.color} text-xs font-extrabold text-white`}>
                    {item.letter}
                  </span>
                  <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white px-4 py-16 text-gray-800 sm:px-6 sm:py-24 lg:px-12">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Consulting Services
              </div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                Our purpose, in practice
              </p>
              <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Turning Vision
                <span className="mt-1 block text-red-600">Into Growth</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                We go beyond traditional consulting by integrating digital innovation, customer centric support, and authentic engagement strategies.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-12 bg-red-600" />
                <span className="text-sm font-semibold text-gray-700">Built around people. Focused on progress.</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl pb-10 pr-8 sm:pb-12 sm:pr-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/15">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85"
                  alt="A team collaborating around a table"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">The ACE approach</p>
                  <p className="mt-1 text-lg font-bold sm:text-xl">Clarity that moves business forward</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-[38%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=85"
                  alt="Colleagues working together"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute right-2 top-5 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:right-5 sm:top-8 sm:px-5">
                <p className="text-xl font-extrabold text-red-600 sm:text-2xl">ACE</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 sm:text-xs">Achieve. Comply. Excel.</p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
            <article className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-[0_20px_50px_rgba(220,38,38,0.1)]">
              <div className="relative h-48 overflow-hidden sm:h-56">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85"
                  alt="Professionals collaborating on a shared goal"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <span className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.18em] text-white/85">What guides us</span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-base leading-relaxed text-gray-600">
                  Our mission at ACE Certification Ltd. is to simplify the path to certification and embed a culture of continuous improvement within our client organizations.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  We achieve this by providing rigorous &amp; impartial certification, delivering reliable audit services that uphold the highest standards of integrity.
                </p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-[0_20px_50px_rgba(220,38,38,0.1)]">
              <div className="relative h-48 overflow-hidden sm:h-56">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
                  alt="A bright, modern workplace"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <span className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.18em] text-white/85">Our direction</span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7s-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-base leading-relaxed text-gray-600">
                  To be the most trusted and impactful partner for organizational excellence, recognized globally for setting the benchmark in certification and training services.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

{/* ================= CORE VALUES SECTION ================= */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-gray-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-white">
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