// app/about/page.js

export const metadata = {
  title: 'About Us | ACE Certification',
  description: 'Empowering organizations to achieve international standards of quality, safety, and efficiency.',
};

// Reusable Icon Component for consistency
const Icon = ({ name, className }) => {
  const icons = {
    mission: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    vision: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>,
    check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />,
    arrow: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  };
  
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {icons[name]}
    </svg>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-800 overflow-x-hidden">
      
      {/* =========================================
          SECTION 1: HERO (Exact Tezor Style)
          ========================================= */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden lg:min-h-[700px]">
        
        {/* Layer 1: Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2800&auto=format&fit=crop" 
            alt="Team Collaboration at ACE Certification" 
            className="h-full w-full object-cover animate-fade-in"
          />
        </div>
        
        {/* Layer 2: The Signature Tezor Blue Overlay */}
        {/* Using a multi-stop gradient for depth instead of flat color */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-indigo-900/95 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-10 bg-black/20"></div>

        {/* Layer 3: Subtle Pattern Texture (Optional but adds premium feel) */}
        <div className="absolute inset-0 z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Content Container */}
        <div className="container relative z-20 mx-auto px-6 py-20 text-center lg:px-8">
          
          {/* Massive Heading with Drop Shadow for readability on image */}
          <h1 className="mb-8 text-6xl font-bold tracking-tight text-white drop-shadow-xl md:text-8xl lg:text-9xl leading-none">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Us</span>
          </h1>
          
          {/* Breadcrumb Navigation - Clean & Minimal */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-4 text-lg font-medium text-blue-100/90 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 inline-block shadow-lg">
            <a href="/" className="transition-all hover:text-white hover:scale-105 duration-200">Home</a>
            <Icon name="arrow" className="h-4 w-4 rotate-90 opacity-50" />
            <span className="text-white font-semibold">About Us</span>
          </nav>
        </div>

        {/* Bottom Fade Out Effect for smoother transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* =========================================
          SECTION 2: INTRO STATEMENT
          ========================================= */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-blue-100">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Who We Are
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight">
              Bridging the Gap Between <br/>
              <span className="text-blue-600">Complex Standards</span> & <span className="text-blue-600">Business Success</span>
            </h2>
            
            <p className="text-xl leading-relaxed text-slate-600 font-light">
              ACE Certifications Ltd. is a dedicated and client-centric professional services firm established to empower organizations of all sizes to achieve international standards of quality, safety, and efficiency. The name "ACE" embodies our core promise: to help our clients <strong>A</strong>chieve <strong>C</strong>ompliance &amp; <strong>E</strong>xcellence.
            </p>

            <div className="pt-4 flex justify-center gap-4">
               <button className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-4 text-white font-medium transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30">
                 Our Services
                 <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
               </button>
               <button className="rounded-lg border border-slate-200 px-8 py-4 font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50">
                 Contact Team
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: MISSION & VISION (Premium Cards)
          ========================================= */}
      <section className="bg-slate-50/50 py-24 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            
            {/* Mission Card */}
            <article className="group relative overflow-hidden rounded-3xl bg-white p-1 shadow-xl ring-1 ring-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-blue-200">
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              <div className="relative z-10 m-[1px] rounded-[calc(1.5rem-1px)] bg-white p-8 md:p-12 h-full flex flex-col">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon name="mission" className="h-8 w-8" />
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">Our Mission</h3>
                <p className="text-lg leading-relaxed text-slate-600 flex-grow">
                  To push engagement boundaries, engage diverse audiences, and drive innovation through comprehensive ISO certification services. We simplify the path to compliance while embedding a culture of continuous improvement within your organization.
                </p>
                
                <ul className="mt-8 space-y-3 border-t border-slate-100 pt-6">
                  {[
                    'Rigorous & Impartial Audits',
                    'Value-Added Advisory',
                    'Global Accreditation Standards'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <Icon name="check" className="h-5 w-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Vision Card */}
            <article className="group relative overflow-hidden rounded-3xl bg-white p-1 shadow-xl ring-1 ring-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-indigo-200 delay-100">
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              <div className="relative z-10 m-[1px] rounded-[calc(1.5rem-1px)] bg-white p-8 md:p-12 h-full flex flex-col">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-inner transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon name="vision" className="h-8 w-8" />
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">Our Vision</h3>
                <p className="text-lg leading-relaxed text-slate-600 flex-grow">
                  To be the most trusted and impactful partner for organizational excellence, recognized globally for setting the benchmark in certification and training services. We envision a landscape where the "ACE Certified" mark signifies unparalleled quality.
                </p>
                
                <div className="mt-8 rounded-xl bg-slate-50 p-6 border border-slate-100">
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">Key Impact Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {['Quality', 'Safety', 'Efficiency', 'Trust'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white text-slate-700 text-xs font-bold rounded-md shadow-sm border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: CORE VALUES (A.C.E Framework)
          ========================================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">The Foundation</h2>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">Our Core Values</h3>
            <p className="mt-4 text-lg text-slate-600">
              These aren't just words on a wall. They are the principles that guide every audit, every report, and every partnership we forge.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                letter: 'A',
                title: 'Accuracy & Integrity',
                desc: 'We are unwavering in our commitment to impartiality, ethical practices, and technically sound assessments.',
                colorClass: 'from-blue-500 to-cyan-400',
                bgColor: 'bg-blue-50',
                textColor: 'text-blue-600'
              },
              {
                letter: 'C',
                title: 'Client Success & Collaboration',
                desc: 'Your success is our success. We build long-term partnerships based on understanding, respect, and shared goals.',
                colorClass: 'from-indigo-500 to-purple-400',
                bgColor: 'bg-indigo-50',
                textColor: 'text-indigo-600'
              },
              {
                letter: 'E',
                title: 'Excellence & Expertise',
                desc: 'We continuously invest in the development of our team and services to provide cutting-edge, expert guidance.',
                colorClass: 'from-slate-700 to-slate-900',
                bgColor: 'bg-slate-100',
                textColor: 'text-slate-800'
              }
            ].map((value, idx) => (
              <div key={idx} className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl">
                {/* Big Watermark Letter */}
                <div className={`absolute -right-4 -top-8 text-[10rem] font-black leading-none opacity-5 select-none pointer-events-none transition-opacity group-hover:opacity-10 ${value.textColor}`}>
                  {value.letter}
                </div>
                
                <div className="relative z-10">
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${value.bgColor} ${value.textColor} text-2xl font-black shadow-sm`}>
                    {value.letter}
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-slate-900">{value.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${value.colorClass} transition-all duration-500 group-hover:w-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: WHY CHOOSE US (Dark Contrast)
          ========================================= */}
      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        {/* Abstract Glow Effects */}
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px]"></div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Why Partner With <span className="text-blue-400">ACE?</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                We don't just audit businesses—we partner with them to ensure they truly Achieve Compliance & Excellence. By delivering accessible, practical, and globally recognized ISO certification, we empower small and middle-market businesses to thrive.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Build Unshakeable Trust', desc: 'Prove your commitment to safety and quality to stakeholders.' },
                  { title: 'Unlock Market Potential', desc: 'Open doors to new contracts and global opportunities.' },
                  { title: 'Drive Operational Excellence', desc: 'Transform standards into streamlined, profitable practices.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                      <Icon name="check" className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years Experience', value: '15+' },
                { label: 'Happy Clients', value: '500+' },
                { label: 'Certifications', value: '10K+' },
                { label: 'Success Rate', value: '99%' }
              ].map((stat, idx) => (
                <div key={idx} className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors text-center group">
                  <div className="text-4xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: FINAL CTA
          ========================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-16 text-center shadow-2xl md:px-16 md:py-24">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to Elevate Your Standard?
              </h2>
              <p className="mb-10 text-lg text-blue-100 leading-relaxed">
                Join hundreds of forward-thinking organizations who trust ACE Certification to bridge the gap between complex international standards and everyday business success.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="inline-flex h-14 w-full items-center justify-center rounded-lg bg-white px-8 text-base font-bold text-blue-700 shadow-lg transition-transform hover:scale-105 sm:w-auto">
                  Schedule Free Consultation
                </button>
                <a href="/contact" className="inline-flex h-14 w-full items-center justify-center rounded-lg border-2 border-white/30 px-8 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto">
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}