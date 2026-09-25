"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DataStrategySection = () => {
  const sectionRef = useRef(null);
  const blobRef = useRef(null);
  const contentRef = useRef(null);
  const barsRef = useRef([]);
  const floatingImgRef = useRef(null);

  const skills = [
    { name: "Service Excellence", value: 95 },
    { name: "Inspection Accuracy", value: 98 },
    { name: "Training Impact", value: 88 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Blob Breathing Animation
      gsap.to(blobRef.current, {
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Main Content Entry (Left Side)
      gsap.fromTo(
        contentRef.current.children,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // 3. Floating Image Parallax/Entry
      gsap.fromTo(
        floatingImgRef.current,
        {
          scale: 0.8,
          opacity: 0,
          rotation: -10,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // 4. Progress Bars Animation
      skills.forEach((_, index) => {
        if (barsRef.current[index]) {
          gsap.fromTo(
            barsRef.current[index],
            { width: "0%" },
            {
              width: `${skills[index].value}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 65%",
              },
            }
          );
        }
      });
      
      // 5. Right Side Text Reveal
      gsap.from(".right-side-text", {
        x: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
        }
      })

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        
        {/* =========================================================
            LEFT SIDE — ORGANIC BLOB IMAGE
        ========================================================= */}
        <div className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-none order-2 lg:order-1">
          
          {/* Main Blob Wrapper */}
          <div className="relative aspect-square w-full sm:h-[500px] md:h-[550px] lg:h-[600px]">
            
            {/* SVG Blob Shape */}
            <div ref={blobRef} className="absolute inset-0 h-full w-full">
                <svg
                viewBox="0 0 800 800"
                className="h-full w-full drop-shadow-2xl"
                preserveAspectRatio="xMidYMid meet"
                >
                <defs>
                    {/* Organic Blob Path */}
                    <clipPath id="organicBlob">
                    <path
                        d="M 213.5 104.9 C 392.4 20.3 621.1 55.4 722.9 220.8 C 824.6 386.2 787.8 625.6 623.4 734.5 C 459 843.4 167.3 802.2 60.5 628.7 C -46.3 455.2 -11.9 189.5 213.5 104.9 Z"
                    />
                    </clipPath>

                    {/* Gradient Overlay for the Blob */}
                    <linearGradient
                    id="blobOverlay"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                    >
                    <stop offset="0%" stopColor="#201f44" stopOpacity="0.9" /> 
                    <stop offset="100%" stopColor="#155e75" stopOpacity="0.85" />
                    </linearGradient>
                </defs>

                {/* Base Background Image */}
                <image
                    href="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85"
                    width="800"
                    height="800"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#organicBlob)"
                />

                {/* Dark Blue Gradient Overlay (Matches Theme) */}
                <path
                    d="M 213.5 104.9 C 392.4 20.3 621.1 55.4 722.9 220.8 C 824.6 386.2 787.8 625.6 623.4 734.5 C 459 843.4 167.3 802.2 60.5 628.7 C -46.3 455.2 -11.9 189.5 213.5 104.9 Z"
                    fill="url(#blobOverlay)"
                />
                </svg>
            </div>

            {/* =====================================================
                CONTENT OVER IMAGE
            ===================================================== */}
            <div
              ref={contentRef}
              className="
                absolute
                inset-0
                z-10
                flex
                flex-col
                justify-center
                px-8
                py-10
                text-white
                sm:px-12
                md:px-16
                lg:px-20
              "
            >
              {/* Icon / Badge */}
              <div className="mb-6">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white/30
                    bg-white/10
                    backdrop-blur-md
                    shadow-lg
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7 text-[#df9a62]"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="4" cy="6" r="2" />
                    <circle cx="20" cy="6" r="2" />
                    <circle cx="4" cy="18" r="2" />
                    <circle cx="20" cy="18" r="2" />
                    <line x1="10.5" y1="10.5" x2="5.5" y2="7.5" />
                    <line x1="13.5" y1="10.5" x2="18.5" y2="7.5" />
                    <line x1="10.5" y1="13.5" x2="5.5" y2="16.5" />
                    <line x1="13.5" y1="13.5" x2="18.5" y2="16.5" />
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <h2
                className="
                  max-w-[400px]
                  text-3xl
                  font-bold
                  leading-[1.15]
                  tracking-tight
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Accelerate Your
                <br />
                <span className="text-[#df9a62]">Operational Excellence</span>
              </h2>

              {/* Paragraph */}
              <p
                className="
                  mt-4
                  max-w-[420px]
                  text-sm
                  leading-relaxed
                  text-white/90
                  sm:text-base
                "
              >
                At ACERT, we live up to our name by ensuring you Achieve
                Compliance & Excellence seamlessly. Our seasoned auditors
                provide practical, real-world solutions that streamline your
                processes and build lasting trust.
              </p>

              {/* CTA Button */}
              <button
                type="button"
                className="
                  mt-8
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-[#201f44]
                  transition-all
                  duration-300
                  hover:bg-[#df9a62]
                  hover:text-white
                  shadow-lg
                "
              >
                Talk to Analysts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* =========================================================
              FLOATING CIRCLE IMAGE (Bottom Right)
          ========================================================= */}
          <div
            ref={floatingImgRef}
            className="
              absolute
              -bottom-6
              right-4
              z-30
              h-40
              w-40
              rounded-full
              border-[6px]
              border-white
              bg-white
              shadow-[0_20px_50px_rgba(32,31,68,0.3)]
              sm:-bottom-8
              sm:right-8
              sm:h-48
              sm:w-48
              md:h-56
              md:w-56
              lg:-right-12
              lg:-bottom-12
              lg:h-64
              lg:w-64
            "
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=85"
              alt="Business meeting"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Small Decorative Dot (Bottom Left) */}
          <div
            className="
              absolute
              bottom-10
              left-4
              z-20
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#df9a62]/10
              sm:left-8
              sm:h-16
              sm:w-16
            "
          >
            <div className="h-8 w-8 rounded-full bg-[#df9a62] shadow-lg sm:h-10 sm:w-10"></div>
          </div>
        </div>

        {/* =========================================================
            RIGHT SIDE — CONTENT & PROGRESS BARS
        ========================================================= */}
        <div className="w-full pt-4 lg:pl-8 xl:pl-12 lg:pt-0 order-1 lg:order-2">
          
          {/* Label */}
          <span
            className="
              right-side-text
              block
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#df9a62]
            "
          >
            Our Expertise
          </span>

          {/* Heading */}
          <h3
            className="
              right-side-text
              mt-3
              max-w-xl
              text-3xl
              font-extrabold
              leading-[1.15]
              tracking-tight
              text-[#201f44]
              sm:text-4xl
              md:text-[42px]
              lg:text-[46px]
            "
          >
            Optimize Data for High-ROI Decisions
          </h3>

          {/* Description */}
          <p
            className="
              right-side-text
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-gray-600
              lg:text-lg
            "
          >
            In global business, structural integrity and supply chain quality are non-negotiable. ACERT provides independent, third-party management system certification, inspection and training services that mitigate risk and ensure compliance with international codes.
          </p>

          {/* =========================================================
              PROGRESS BARS
          ========================================================= */}
          <div className="mt-10 space-y-6 sm:mt-12 lg:mt-14">
            {skills.map((skill, index) => (
              <div key={skill.name} className="w-full">
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="
                      text-base
                      font-bold
                      text-[#201f44]
                    "
                  >
                    {skill.name}
                  </span>

                  <span
                    className="
                      text-base
                      font-bold
                      text-[#df9a62]
                    "
                  >
                    {skill.value}%
                  </span>
                </div>

                {/* Track */}
                <div
                  className="
                    relative
                    h-[8px]
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-gray-200
                  "
                >
                  {/* Fill */}
                  <div
                    ref={(el) => (barsRef.current[index] = el)}
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#201f44]
                      to-[#df9a62]
                    "
                    style={{ width: "0%" }} 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="mt-12 sm:mt-14">
            <button
              type="button"
              className="
                right-side-text
                inline-flex
                w-fit
                items-center
                justify-center
                rounded-md
                border-2
                border-[#201f44]
                bg-transparent
                px-8
                py-3.5
                text-sm
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#201f44]
                transition-all
                duration-300
                hover:bg-[#201f44]
                hover:text-white
                hover:shadow-lg
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataStrategySection;