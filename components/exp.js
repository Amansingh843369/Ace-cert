"use client";

import React, { useEffect, useRef, useState } from "react";

const DataStrategySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "Service", value: 85 },
    { name: "Inspection", value: 91 },
    { name: "Training", value: 77 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
        
        {/* =========================================================
            LEFT SIDE — ORGANIC BLOB IMAGE
        ========================================================= */}
        <div className="relative mx-auto w-full max-w-[650px] lg:mx-0 lg:max-w-none">
          
          {/* Main Blob Wrapper */}
          <div className="relative aspect-square w-full sm:h-[540px] md:h-[600px] lg:h-[620px] xl:h-[660px]">
            
            {/* SVG Blob Shape */}
            <svg
              viewBox="0 0 800 800"
              className="absolute inset-0 h-full w-full drop-shadow-2xl"
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
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.88" />
                  <stop offset="55%" stopColor="#0891b2" stopOpacity="0.80" />
                  <stop offset="100%" stopColor="#155e75" stopOpacity="0.90" />
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

              {/* Teal/Cyan Gradient Overlay */}
              <path
                d="M 213.5 104.9 C 392.4 20.3 621.1 55.4 722.9 220.8 C 824.6 386.2 787.8 625.6 623.4 734.5 C 459 843.4 167.3 802.2 60.5 628.7 C -46.3 455.2 -11.9 189.5 213.5 104.9 Z"
                fill="url(#blobOverlay)"
              />
            </svg>

            {/* =====================================================
                CONTENT OVER IMAGE
            ===================================================== */}
            <div
              className="
                absolute
                inset-0
                z-10
                flex
                flex-col
                justify-center
                px-10
                py-12
                text-white
                sm:px-14
                md:px-16
                lg:px-20
                xl:px-24
              "
            >
              {/* Icon / Badge */}
              <div className="mb-6 sm:mb-8">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-white
                    bg-white/10
                    backdrop-blur-sm
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
                    className="h-8 w-8"
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
                  max-w-[480px]
                  text-[32px]
                  font-bold
                  leading-[1.15]
                  tracking-tight
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[42px]
                  xl:text-[52px]
                "
              >
                Accelerate Your
                <br />
                Operational Excellence
              </h2>

              {/* Paragraph */}
              <p
                className="
                  mt-5
                  max-w-[450px]
                  text-sm
                  leading-relaxed
                  text-white/95
                  sm:mt-6
                  sm:text-base
                "
              >
                At ACERT, we live up to our name by ensuring you Achieve
                Compliance & Excellence seamlessly. Our seasoned auditors
                provide practical, real-world solutions that streamline your
                processes, manage risks, and build lasting customer trust.
              </p>

              {/* CTA Button (White Background as per image) */}
              <button
                type="button"
                className="
                  mt-8
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-md
                  bg-white
                  px-6
                  py-3.5
                  text-[15px]
                  font-bold
                  text-[#201f44]
                  transition-all
                  duration-300
                  hover:bg-gray-100
                  shadow-md
                "
              >
                Talk to our analysts
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
            className="
              absolute
              -bottom-4
              right-0
              z-30
              h-44
              w-44
              rounded-full
              border-[8px]
              border-white
              bg-white
              shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              sm:-bottom-6
              sm:right-4
              sm:h-52
              sm:w-52
              md:-bottom-10
              md:right-6
              md:h-64
              md:w-64
              lg:-right-12
              lg:-bottom-12
              lg:h-[280px]
              lg:w-[280px]
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
              bottom-6
              left-6
              z-20
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-[#df9a62]/20
              sm:bottom-10
              sm:left-8
            "
          >
            <div className="h-10 w-10 rounded-full bg-[#df9a62] shadow-lg"></div>
          </div>
        </div>

        {/* =========================================================
            RIGHT SIDE — CONTENT & PROGRESS BARS
        ========================================================= */}
        <div className="w-full pt-8 lg:pl-6 xl:pl-10 lg:pt-0">
          
          {/* Label */}
          <span
            className="
              block
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-gray-400
            "
          >
            Experience
          </span>

          {/* Heading */}
          <h3
            className="
              mt-3
              max-w-xl
              text-[34px]
              font-extrabold
              leading-[1.15]
              tracking-tight
              text-[#201f44]
              sm:text-4xl
              md:text-[42px]
              lg:text-[46px]
              xl:text-[52px]
            "
          >
            Optimize Data for High-ROI Decisions
          </h3>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-2xl
              text-[15px]
              leading-relaxed
              text-gray-600
              sm:text-base
              lg:text-[17px]
            "
          >
            In global business, structural integrity, equipment reliability,
            and supply chain quality are non-negotiable. ACERT provides
            independent, third-party management system certification,
            inspection and training services that mitigate risk, ensure
            compliance with international codes, and protect your investments.
            
          </p>

          {/* =========================================================
              PROGRESS BARS
          ========================================================= */}
          <div className="mt-10 space-y-7 sm:mt-12 lg:mt-14">
            {skills.map((skill, index) => (
              <div key={skill.name} className="w-full">
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="
                      text-[17px]
                      font-bold
                      text-[#201f44]
                    "
                  >
                    {skill.name}
                  </span>

                  <span
                    className="
                      text-[17px]
                      font-bold
                      text-[#df9a62]
                    "
                  >
                    {isVisible ? skill.value : 0}%
                  </span>
                </div>

                {/* Track */}
                <div
                  className="
                    relative
                    h-[10px]
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-gray-300/60
                  "
                >
                  {/* Fill */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#e6a877]
                      to-[#df9a62]
                    "
                    style={{
                      width: isVisible ? `${skill.value}%` : "0%",
                      transition: `width 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${
                        index * 0.2
                      }s`,
                      boxShadow: isVisible
                        ? "0 4px 15px rgba(223,154,98,0.5)"
                        : "none",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Button (Dark Blue background, Orange border) */}
          <div className="mt-12 sm:mt-14">
            <button
              type="button"
              className="
                inline-flex
                w-fit
                items-center
                justify-center
                rounded-md
                border-[3px]
                border-[#df9a62]
                bg-[#201f44]
                px-8
                py-3.5
                text-[15px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-white
                transition-all
                duration-300
                hover:bg-[#df9a62]
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