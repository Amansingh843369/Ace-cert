import React from 'react';
// Agar Lucide React installed nahi hai toh install kar lena: npm install lucide-react
import { Target } from 'lucide-react'; 

export default function AboutUs() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#fffdf9] to-[#fff5e6] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Image Collage Section (Image Reference Inspired) */}
        <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
          {/* Main Background Image */}
          <div className="absolute top-0 right-0 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-lg">
            {/* Yahan apni image ka path daal dena */}
            <img 
              src="/images/office-meeting.jpg" 
              alt="ACE Team Meeting" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Front Image */}
          <div className="absolute bottom-4 left-0 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white z-10">
            {/* Yahan apni dusri image ka path daal dena */}
            <img 
              src="/images/professionals.jpg" 
              alt="ACE Professionals" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Orange Circular Badge */}
          <div className="absolute top-12 left-4 w-32 h-32 bg-orange-400 rounded-full flex flex-col items-center justify-center text-black font-bold text-center shadow-xl border-4 border-white z-20">
            <span className="text-3xl tracking-wider">ACE</span>
            <span className="text-[10px] uppercase tracking-widest mt-1 text-gray-900">
              Excellence
            </span>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="flex flex-col space-y-6 relative z-10">
          <div className="inline-block">
            <h4 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">
              About Us
            </h4>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Empowering Organizations for Global Standards
          </h2>

          <div className="text-gray-600 space-y-5 leading-relaxed text-lg">
            <p>
              ACE Certifications Ltd. is a dedicated and client-centric professional services firm established to empower organizations of all sizes to achieve international standards of quality, safety, and efficiency. The name "ACE" embodies our core promise: to help our clients <strong>A</strong>chieve <strong>C</strong>ompliance & <strong>E</strong>xcellence.
            </p>
            <p>
              Our team comprises highly experienced and qualified Lead Auditors and industry specialists who bring practical, real-world insights to every engagement. At ACE Certification Ltd., we believe that certification should not be a mere trophy but a strategic tool for tangible business improvement, risk management, and enhanced market reputation.
            </p>
          </div>

          {/* Floating Highlight Card (Like the one in your reference image) */}
          <div className="mt-8 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-3 pr-8 flex items-center gap-5 max-w-lg border border-gray-100 transform transition hover:-translate-y-1">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center shrink-0 border border-gray-100">
              <Target className="w-7 h-7 text-gray-800" />
            </div>
            <p className="font-bold text-gray-900 text-lg leading-snug">
              Strategic tools for tangible business improvement & risk management
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}