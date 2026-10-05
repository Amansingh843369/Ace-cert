 "use client";

import React from "react";
import { Check } from "lucide-react";

const features = [
  {
    title: "The ACE-CERT",
    text: "The name ACE stands for our core promise: helping clients Achieve Compliance & Excellence at every level.",
  },
  {
    title: "Clarity & Simplicity",
    text: "Standards are the foundation of market trust. We implement consistent benchmarks to protect consumers and empower your business.",
  },
  {
    title: "Practical Focus",
    text: "Our auditors are seasoned industry professionals delivering realistic, high-impact solutions for your day-to-day operations.",
  },
  {
    title: "Global Recognition",
    text: "Certificates that open doors worldwide, delivered through adaptive, fast-acting, and highly attentive local client care.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f2f9ff] font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Top Section: Heading and Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-20">
          <div className="lg:w-1/2">
            <p className="text-[#ea580c] font-semibold text-lg mb-4">
              Why ACE Certification?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#08203e] leading-[1.1] tracking-tight">
              Elevating Standards <br className="hidden md:block" /> 
              & Empowering <br className="hidden md:block" /> 
              Business.
            </h2>
          </div>
          
          <div className="lg:w-1/2 lg:pt-12">
            <p className="text-lg md:text-xl text-[#1e4a79] leading-relaxed font-medium">
              We don't just provide certificates; we partner with you to build a foundation of trust, operational excellence, and global compliance that drives real growth.
            </p>
          </div>
        </div>

        {/* Bottom Section: Features Grid */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Check className="w-6 h-6 text-[#ea580c]" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-[#08203e]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-base md:text-lg text-[#1e4a79] leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}