"use client";
import { Trophy, ClipboardCheck, ShieldCheck, ArrowRight, CheckCircle2, Users, Globe } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-18 bg-white relative overflow-hidden">
      
      {/* Background Decorative Blobs - Red & Blue Theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-950 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg shadow-blue-900/20">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>About ACE Certification</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Achieve Compliance & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                 Excellence. 
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
              <p>
                <strong className="text-slate-900">ACE Certification Ltd.</strong> is a dedicated and client-centric professional services firm established to empower organizations of all sizes to achieve international standards of quality, safety, and efficiency.
              </p>
              <p>
                The name "ACE" embodies our core promise: to help our clients <span className="font-bold text-blue-900">Achieve Compliance & Excellence</span>. We bridge the gap between complex international standards and everyday business success.
              </p>
              <p>
                Our team comprises highly experienced Lead Auditors who bring practical insights to every engagement. We believe certification is not just a trophy, but a strategic tool for <span className="font-semibold text-red-600">tangible business improvement</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <StatCard 
                icon={<Trophy className="w-6 h-6 text-red-600" />} 
                title="10+ Years" 
                desc="Industry Experience" 
              />
              <StatCard 
                icon={<Users className="w-6 h-6 text-blue-900" />} 
                title="500+" 
                desc="Happy Clients" 
              />
              <StatCard 
                icon={<Globe className="w-6 h-6 text-red-600" />} 
                title="Global" 
                desc="Standards Coverage" 
              />
            </div>

            {/* CTA Button */}
            <div className="pt-4">
               <button className="group flex items-center gap-2 bg-blue-950 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/30">
                  Know More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
             
          </div>

          {/* RIGHT COLUMN: Interactive Image */}
          <div 
            className="relative group perspective-1000 order-1 lg:order-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Decorative Border/Frame behind image */}
            <div className={`absolute inset-0 border-2 border-red-100 rounded-3xl transform translate-x-4 translate-y-4 transition-transform duration-500 ${isHovered ? 'translate-x-2 translate-y-2 border-red-200' : ''}`}></div>

            {/* Main Image Container */}
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 transition-all duration-700 ease-out transform ${isHovered ? 'scale-[1.01] -rotate-1' : 'scale-100 rotate-0'}`}>
              {/* NEW IMAGE: Professional Corporate Team/Consulting */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional team discussing compliance strategies" 
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              
            </div>

          </div>

        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

// Reusable Stat Card Component
function StatCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 cursor-default group flex flex-col items-center text-center">
      <div className="mb-2 p-2 bg-slate-50 rounded-lg group-hover:bg-red-50 transition-colors duration-300">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">{title}</h4>
      <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">{desc}</p>
    </div>
  );
}