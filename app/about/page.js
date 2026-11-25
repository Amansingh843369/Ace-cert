import React from 'react';
import Image from "next/image";
import { Handshake, ShieldCheck, TrendingUp } from "lucide-react";
import { connection } from 'next/server';
import AboutSection from "../../components/AboutSection";
import CertificationCtaSection from "../../components/CertificationCtaSection";
import { getAboutPageContent } from '../../lib/sanity/aboutPage';
import { urlFor } from '../../lib/sanity/client';

const valueIcons = {
  shieldCheck: ShieldCheck,
  handshake: Handshake,
  trendingUp: TrendingUp,
};

export default async function AboutPage() {
  await connection();
  const content = await getAboutPageContent();
  const { hero, story, mission, vision, values, cta } = content;
  const heroImageUrl = urlFor(hero.backgroundImage)?.width(1920).url();
  const storyOverlayImageUrl = urlFor(story.overlayImage)?.width(800).url();
  const visionTopImageUrl = urlFor(vision.topImage)?.width(600).url();
  const ctaImageUrl = urlFor(cta.image)?.width(1000).url();

  return (
    <main className=" bg-white min-h-screen pb-12 selection:bg-red-100 selection:text-red-900">
      
      {/* ================= HERO / BREADCRUMB SECTION (The "Patti") ================= */}
      <section className="relative py-10 sm:py-14 px-4 text-center overflow-hidden bg-[#FFF8F7]">
        
        {/* ISO Related Background Image with Red Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl || "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"}
            alt={hero.backgroundImageAlt}
            fill
            sizes="100vw"
            preload
            className="object-cover opacity-30"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-600 tracking-tight drop-shadow-sm">
            {hero.title}
          </h1>
        </div>
      </section>

      <AboutSection
        imageFirst
        eyebrowText="Our Story"
        showAcronymHighlights={false}
        showStoryLink={false}
        showTrustCard={false}
        justifyText
        highlightAcronymExpansion
        compactTopPadding
        emphasizeImage
        showActions={false}
        showVideoButton
        imageSrc="/about-office-building.png"
        overlayImageSrc={storyOverlayImageUrl || "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85"}
        content={{
          ...story,
          backgroundImageAlt: "ACE Certification office building and team",
        }}
      />

{/* ================= ABOUT US CONTENT SECTION ================= */}
   <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:pt-16 lg:pb-10 font-sans text-gray-800">
      
      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-red-50/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl space-y-12 lg:space-y-16">
        
        {/* ================= 1. OUR MISSION (Text Left, Image Right) ================= */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left: Mission Text */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl md:text-5xl">
                {mission.title}
              </h2>
            </div>
            
            {mission.paragraphs.map((paragraph, index) => (
              <p key={paragraph._key ?? index} className="text-justify text-base leading-relaxed text-gray-600 sm:text-lg">
                {paragraph.text}
              </p>
            ))}

          </div>

          {/* Right: Mission Image (Also made slightly compact to match) */}
          <div className="order-1 lg:order-2 relative mx-auto aspect-[3/2] w-full max-w-[500px] overflow-hidden rounded-[2rem] bg-white shadow-2xl lg:mx-0 lg:ml-auto">
            <Image
              src="/our-mission-team.png"
              alt="ACE Certification team working together toward its mission"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* ================= 2. OUR VISION (Image Left, Text Right) ================= */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          <div className="relative mx-auto aspect-[10/9] w-full max-w-[520px] overflow-hidden rounded-[1.5rem] shadow-xl lg:mx-0">
            <Image
              src={visionTopImageUrl || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=85"}
              alt={vision.topImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          </div>

          {/* Right: Vision Text */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl md:text-5xl">
                {vision.title}
              </h2>
            </div>
            
            {vision.paragraphs.map((paragraph, index) => (
              <p key={paragraph._key ?? index} className="text-justify text-base leading-relaxed text-gray-600 sm:text-lg">
                {paragraph.text}
              </p>
            ))}
          </div>

        </div>

      </div>
    </section>
{/* ================= CORE VALUES SECTION ================= */}
      <section className="relative overflow-hidden bg-white px-4 sm:px-6 sm:pt-16 sm:pb-20 lg:px-12">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-700">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              {values.eyebrow}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              {values.titleStart}<span className="text-red-600">{values.titleHighlight}</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              {values.description}
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-[4.25rem] hidden h-px bg-gradient-to-r from-red-200 via-blue-200 to-red-200 md:block" />
            {values.items.map((value, index) => {
              const Icon = valueIcons[value.icon] || TrendingUp;
              return (
                <article key={value.letter} className="group relative flex flex-col items-center text-center">
                  <div className="relative mb-7 flex h-[8.5rem] w-[8.5rem] items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.07)] transition-transform duration-300 group-hover:-translate-y-1">
                    <svg className={`absolute inset-0 h-full w-full -rotate-90 ${index === 1 ? "text-blue-950" : "text-red-600"}`} viewBox="0 0 136 136" fill="none" aria-hidden="true">
                      <circle cx="68" cy="68" r="63" stroke="currentColor" strokeOpacity="0.16" strokeWidth="2" />
                      <circle cx="68" cy="68" r="63" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="112 396" />
                    </svg>
                    <div className={`flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full ${index === 1 ? "bg-blue-950" : "bg-red-600"} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <span className={`absolute -bottom-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white ${index === 1 ? "bg-blue-950" : "bg-red-600"} text-xs font-bold text-white`}>
                      {value.letter}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-extrabold tracking-tight text-blue-950 transition-colors group-hover:text-red-600 sm:text-2xl">
                    {value.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CertificationCtaSection content={{ ...cta, imageUrl: ctaImageUrl }} />

    </main>
  );
}