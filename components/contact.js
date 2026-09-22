"use client";

import React, { useState } from "react";

export default function SeoAnalysisSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SEO Request Data:", formData);
    alert("SEO Analysis Request Submitted!");
  };

  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[700px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900 font-sans">
      
      {/* --- BACKGROUND OFFICE IMAGE WITH OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Office Background"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* --- CENTER CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex justify-center items-center">
      
        {/* Organic Blob Container */}
        <div className="relative w-full max-w-2xl px-6 py-10 sm:px-12 sm:py-14 md:p-16 flex flex-col items-center justify-center text-center">
          
          {/* Outer Layer: Cyan / Blue Organic Blob Backdrop */}
          <div
            className="absolute -inset-4 sm:-inset-6 bg-[#0097a7]/80 backdrop-blur-sm z-0 transition-all duration-300"
            style={{
              borderRadius: "45% 55% 65% 35% / 40% 60% 40% 60%",
            }}
          ></div>

          {/* Main Layer: Bright Lime Green Organic Blob */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#8ec63f] to-[#7cb32f] shadow-2xl z-10 transition-all duration-300"
            style={{
              borderRadius: "52% 48% 44% 56% / 50% 55% 45% 50%",
            }}
          ></div>

          {/* Form Content inside Organic Blob */}
          <div className="relative z-20 w-full max-w-md sm:max-w-lg text-white space-y-6">
            
            {/* Header Text */}
            <div className="space-y-2">
               
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm">
                Talk to our Expert ?
              </h2>
              <p className="text-xs sm:text-sm font-light text-white/95 max-w-sm sm:max-w-md mx-auto leading-relaxed pt-1">
               Let’s Build a Stronger, Compliant Business Together.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 text-left">
                
                {/* Your Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    className="w-full bg-transparent border-b border-white/80 text-white placeholder-white/80 py-1.5 text-xs sm:text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    className="w-full bg-transparent border-b border-white/80 text-white placeholder-white/80 py-1.5 text-xs sm:text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full bg-transparent border-b border-white/80 text-white placeholder-white/80 py-1.5 text-xs sm:text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Website */}
                <div className="relative">
                  <input
                    type="url"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Website*"
                    className="w-full bg-transparent border-b border-white/80 text-white placeholder-white/80 py-1.5 text-xs sm:text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#ff5722] hover:bg-[#f4511e] text-white font-bold px-8 py-3 rounded text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  CHECK NOW
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}