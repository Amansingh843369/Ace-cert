"use client";
import { Trophy, ClipboardCheck, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-10 bg-blue-50/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/50 to-transparent skew-x-12 origin-top-right -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg shadow-blue-600/30">
              <span>About Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
             Achieve Compliance & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                 Excellence. 
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
              <p>
                <strong className="text-slate-800">ACE Certification Ltd.</strong> is a dedicated and client-centric professional services firm established to empower organizations of all sizes to achieve international standards of quality, safety, and efficiency.
              </p>
              <p>
                The name "ACE" embodies our core promise: to help our clients <span className="font-bold text-blue-700">Achieve Compliance & Excellence</span>.
              </p>
              <p>
                Our team comprises highly experienced Lead Auditors who bring practical insights to every engagement. We believe certification is not just a trophy, but a strategic tool for <span className="font-semibold text-slate-800">tangible business improvement</span>.
              </p>
            </div>

             
          </div>

          {/* RIGHT COLUMN: Interactive Image */}
          <div 
            className="relative group perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Image Container */}
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out transform ${isHovered ? 'scale-[1.02] rotate-1' : 'scale-100 rotate-0'}`}>
              <img 
                src="https://img.magnific.com/free-photo/compliance-rules-regulations-policies-codes-concept_53876-138510.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Team meeting discussing ISO certification" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </section>
  );
}

// Reusable Stat Card Component with Hover Effect
function StatCard({ icon, title, desc, delay }) {
  return (
    <div 
      className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4 hover:shadow-md hover:border-blue-100 transition-all duration-300 cursor-default group"
      style={{ animationDelay: delay }}
    >
      <div className="flex-shrink-0 bg-slate-50 p-3 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{title}</h4>
        <p className="text-sm text-slate-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}