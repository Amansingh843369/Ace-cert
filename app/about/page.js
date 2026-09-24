import React from 'react';

export default function AboutPage() {
  return (
    <main className="font-sans bg-[#F9FAFB] min-h-screen pb-20">
      
      {/* ================= ABOUT US SECTION ================= */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#FFF5F5] via-[#FFEBEB] to-[#FFFFFF] text-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Image Collage Section */}
          {/* Mobile pe height auto kar di hai taaki content na kate, Desktop pe fixed height */}
          <div className="lg:col-span-6 relative w-full min-h-[400px] sm:h-[550px] lg:h-[600px] flex items-center justify-center my-4 lg:my-0">
            
            {/* Main Top Right Image */}
            {/* Mobile pe order change karke top pe laya hai, Desktop pe absolute */}
            <div className="relative lg:absolute top-0 right-0 w-full lg:w-[70%] h-64 lg:h-[70%] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white transition-transform duration-500 hover:scale-[1.02] z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="ACE Team Meeting" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Bottom Left Image */}
            {/* Mobile pe mt-4 diya hai spacing ke liye */}
            <div className="relative lg:absolute bottom-0 lg:bottom-4 left-0 w-full lg:w-[62%] h-64 lg:h-[62%] mt-6 lg:mt-0 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-20 transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="ACE Professional" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Top Left Accent Image */}
            {/* Mobile pe hidden hi rakha hai kyunki jagah kam hai, ya fir chota dikha sakte hain */}
            <div className="absolute top-0 left-0 w-[40%] h-[30%] rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-white z-0 hidden sm:block lg:top-4 lg:left-4 lg:w-[35%] lg:h-[30%]">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80" 
                alt="Office Work" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Circular Badge with Rotating SVG Text */}
            {/* Mobile pe niche center mein shift kiya hai taaki images ke upar na aaye */}
            <div className="absolute -bottom-6 right-4 sm:right-8 lg:bottom-10 lg:right-4 w-28 h-28 sm:w-36 sm:h-36 bg-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-30">
              <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[8px] sm:text-[9.5px] font-bold tracking-widest uppercase fill-white">
                  <textPath href="#circlePath" startOffset="0%">
                    ACE CERTIFICATIONS • COMPLIANCE & EXCELLENCE •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 m-auto w-12 h-12 sm:w-14 sm:h-14 bg-red-700 rounded-full flex items-center justify-center text-white shadow-inner">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>

          </div>

          {/* Right Column: Content Section */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 order-first lg:order-last">
            
            {/* Badge Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-red-800">
                About Us
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Empowering Organizations for Global Excellence
            </h1>

            {/* Text Paragraphs */}
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed text-justify hyphens-auto">
              <p>
                <strong className="text-gray-900 font-semibold">ACE Certifications Ltd.</strong> is a dedicated and client-centric professional services firm established to empower organizations of all sizes to achieve international standards of quality, safety, and efficiency. The name <span className="font-bold text-red-600">"ACE"</span> embodies our core promise: to help our clients <strong className="text-gray-900 underline decoration-red-400 decoration-2">A</strong>chieve <strong className="text-gray-900 underline decoration-red-400 decoration-2">C</strong>ompliance & <strong className="text-gray-900 underline decoration-red-400 decoration-2">E</strong>xcellence.
              </p>
              
              <p>
                Our team comprises highly experienced and qualified Lead Auditors and industry specialists who bring practical, real-world insights to every engagement. At ACE Certification Ltd., we believe that certification should not be a mere trophy but a strategic tool for tangible business improvement, risk management, and enhanced market reputation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= MISSION & VISION SECTION ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Pill & Main Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
              CONSULTING SERVICES
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Turning Vision Into Growth
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We go beyond traditional marketing by integrating digital innovation, customer centric support, and authentic social engagement strategies. With Clarks, your business doesn't just compete, it thrives.
            </p>
          </div>

          {/* Cards Grid: Our Mission & Our Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            
            {/* Our Mission Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center mb-6 shadow-md shadow-red-200 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missions</h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
               Our mission at ACE Certification Ltd. is to simplify the path to certification and embed a culture of continuous improvement within our client organizations. 
              </p>
              <p className='text-gray-600 text-justify lg:mt-2'>  
                We achieve this by: Providing Rigorous & Impartial Certification: Delivering reliable, value-added audit services that uphold the highest standards of integrity and accreditation.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center mb-6 shadow-md shadow-red-200 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Goals</h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                To be the most trusted and impactful partner for organizational excellence, recognized globally for setting the benchmark in certification and training services. We envision a business landscape where the "ACE Certified" mark is synonymous with unparalleled quality, reliability, and customer confidence.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CORE VALUES SECTION ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 inline-block relative">
              Our Core Values
              <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-red-600 rounded-full"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Value: A */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-red-300 transition-colors">
              <div className="text-5xl font-black text-gray-100 mb-2">A</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                <span className="text-red-600">A</span>ccuracy & Integrity
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                We are unwavering in our commitment to impartiality, ethical practices, and technically sound assessments.
              </p>
            </div>

            {/* Value: C */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-red-300 transition-colors">
              <div className="text-5xl font-black text-gray-100 mb-2">C</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                <span className="text-red-600">C</span>lient Success & Collaboration
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Your success is our success. We build long-term partnerships based on understanding, respect, and shared goals.
              </p>
            </div>

            {/* Value: E */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-red-300 transition-colors">
              <div className="text-5xl font-black text-gray-100 mb-2">E</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                <span className="text-red-600">E</span>xcellence & Expertise
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                We continuously invest in the development of our team and services to provide cutting-edge, expert guidance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= OUR PURPOSE SECTION ================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
        {/* Soft Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-50/40 to-white z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Intro & Main Message */}
            <div className="lg:w-1/2 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 absolute"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-red-800 ml-2">
                  Our Purpose
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Bridging the Gap to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                  Business Success
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                <p>
                  At <strong className="text-gray-900">ACERT Certification</strong>, our purpose is to bridge the gap between complex international standards and everyday business success. We believe that compliance shouldn't be a bureaucratic hurdle, but a <strong className="text-red-600">strategic catalyst for growth.</strong>
                </p>
                <p>
                  By delivering accessible, practical, and globally recognized ISO certification, training, and advisory services, we empower small and middle-market businesses to:
                </p>
              </div>
            </div>

            {/* Right Column: 3 Pillar Cards */}
            <div className="lg:w-1/2 w-full space-y-4 sm:space-y-5">
              
              {/* Card 1: Trust */}
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.12)] hover:border-red-200 transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start transform hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Build Unshakeable Trust</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">Prove your commitment to safety, quality, and excellence to your clients and stakeholders.</p>
                </div>
              </div>

              {/* Card 2: Market Potential */}
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.12)] hover:border-red-200 transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start transform hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Unlock Market Potential</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">Open doors to new contracts, global opportunities, and regulatory compliance with confidence.</p>
                </div>
              </div>

              {/* Card 3: Operational Excellence */}
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.12)] hover:border-red-200 transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start transform hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Drive Operational Excellence</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">Transform rigorous industry standards into streamlined, efficient, and highly profitable everyday practices.</p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Bottom Banner */}
          <div className="mt-12 sm:mt-16 bg-gray-900 rounded-[2rem] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden shadow-2xl border border-gray-800 transform hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-red-600 rounded-full blur-[80px] opacity-25 pointer-events-none"></div>
            
            <div className="relative z-10 flex items-start gap-4">
              <span className="text-4xl sm:text-5xl text-red-500 font-serif leading-none opacity-50">"</span>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white max-w-4xl leading-snug">
                We don't just audit businesses—we <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-200">partner with them</span> to ensure they truly Achieve Compliance & Excellence.
              </p>
            </div>
            
            <div className="hidden md:flex relative z-10 shrink-0 w-16 h-16 rounded-full bg-gray-800 items-center justify-center border border-gray-700">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}