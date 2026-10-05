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
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white text-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage Section */}
          <div className="lg:col-span-6 relative w-full flex flex-col items-center justify-center my-4 lg:my-0 order-1 lg:order-1">
            
            {/* Container for Desktop Absolute Positioning / Mobile Flex Stacking */}
            <div className="relative w-full max-w-lg lg:max-w-none lg:h-[600px] flex flex-col lg:block items-center lg:items-start">
              
              {/* Main Top Right Image - ISO Team Meeting */}
              <div className="w-full h-64 sm:h-80 lg:absolute lg:top-0 lg:right-0 lg:w-[85%] lg:h-[75%] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10 transition-transform duration-500 hover:scale-[1.02] mb-6 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="ACE Team Meeting" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Bottom Left Image - Professional Auditor */}
              <div className="w-full h-64 sm:h-80 lg:absolute lg:bottom-10 lg:left-0 lg:w-[70%] lg:h-[65%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                  alt="ACE Professional Auditor" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Small Top Left Accent Image - Office Work */}
              <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-white z-0 lg:top-10 lg:left-10">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80" 
                  alt="Office Work" 
                  className="w-full h-full object-cover opacity-90"
                  loading="lazy"
                />
              </div>

              {/* Circular Badge with Rotating SVG Text */}
              <div className="relative mt-[-30px] lg:absolute lg:bottom-20 lg:right-10 w-28 h-28 sm:w-32 sm:h-32 bg-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-30 shrink-0">
                <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[9px] font-bold tracking-widest uppercase fill-white">
                    <textPath href="#circlePath" startOffset="0%">ACE CERTIFICATIONS • COMPLIANCE & EXCELLENCE •</textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto w-12 h-12 sm:w-14 sm:h-14 bg-red-700 rounded-full flex items-center justify-center text-white shadow-inner">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content Section */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 order-2 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-red-800">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Empowering Organizations for <span className="text-red-600">Global Excellence</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
              <p>
                <strong className="text-gray-900 font-semibold">ACE Certifications Ltd.</strong> is a dedicated and client-centric professional services firm established to empower organizations of all sizes to achieve international standards of quality, safety, and efficiency. The name <span className="font-bold text-red-600">"ACE"</span> embodies our core promise: to help our clients <strong className="text-gray-900">A</strong>chieve <strong className="text-gray-900">C</strong>ompliance & <strong className="text-gray-900">E</strong>xcellence.
              </p>
              <p>
                Our team comprises highly experienced and qualified Lead Auditors and industry specialists who bring practical, real-world insights to every engagement. At ACE Certification Ltd., we believe that certification should not be a mere trophy but a strategic tool for tangible business improvement.
              </p>
            </div>

            <div className="pt-4">
              <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg shadow-red-200 hover:bg-red-700 hover:shadow-red-300 transition-all duration-300 transform hover:-translate-y-1">
                Know More
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION SECTION ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50/50 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
              CONSULTING SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Turning Vision Into Growth
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We go beyond traditional consulting by integrating digital innovation, customer centric support, and authentic engagement strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.1)] hover:border-red-100 transition-all duration-300 flex flex-col justify-start group">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
               Our mission at ACE Certification Ltd. is to simplify the path to certification and embed a culture of continuous improvement within our client organizations. 
              </p>
              <p className='text-gray-600 text-justify mt-4'>  
                We achieve this by providing rigorous & impartial certification, delivering reliable audit services that uphold the highest standards of integrity.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.1)] hover:border-red-100 transition-all duration-300 flex flex-col justify-start group">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                To be the most trusted and impactful partner for organizational excellence, recognized globally for setting the benchmark in certification and training services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES SECTION ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block relative">
              Our Core Values
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-red-600 rounded-full"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 group">
              <div className="text-6xl font-black text-red-100 mb-4 group-hover:text-red-200 transition-colors">A</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3"><span className="text-red-600">A</span>ccuracy & Integrity</h4>
              <p className="text-gray-600 text-sm leading-relaxed">We are unwavering in our commitment to impartiality, ethical practices, and technically sound assessments.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 group">
              <div className="text-6xl font-black text-red-100 mb-4 group-hover:text-red-200 transition-colors">C</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3"><span className="text-red-600">C</span>lient Success</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Your success is our success. We build long-term partnerships based on understanding, respect, and shared goals.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 group">
              <div className="text-6xl font-black text-red-100 mb-4 group-hover:text-red-200 transition-colors">E</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3"><span className="text-red-600">E</span>xcellence</h4>
              <p className="text-gray-600 text-sm leading-relaxed">We continuously invest in the development of our team and services to provide cutting-edge, expert guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR PURPOSE SECTION ================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-red-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            <div className="lg:w-1/2 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping absolute"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 relative"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-red-800 ml-2">Our Purpose</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Bridging the Gap to <br/><span className="text-red-600">Business Success</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                <p>
                  At <strong className="text-gray-900">ACERT Certification</strong>, our purpose is to bridge the gap between complex international standards and everyday business success. We believe that compliance shouldn't be a bureaucratic hurdle, but a <strong className="text-red-600">strategic catalyst for growth.</strong>
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 w-full space-y-4 sm:space-y-5">
              {/* Trust Card */}
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.12)] hover:border-red-200 transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start transform hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Build Unshakeable Trust</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Prove your commitment to safety, quality, and excellence to your clients.</p>
                </div>
              </div>

              {/* Market Potential Card */}
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.12)] hover:border-red-200 transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start transform hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Unlock Market Potential</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Open doors to new contracts, global opportunities, and regulatory compliance.</p>
                </div>
              </div>

              {/* Operational Excellence Card */}
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.12)] hover:border-red-200 transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start transform hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Drive Operational Excellence</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Transform rigorous industry standards into streamlined, efficient practices.</p>
                </div>
              </div>
            </div>
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