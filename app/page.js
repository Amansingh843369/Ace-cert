import AboutSection from "../components/AboutSection";
import { createPageMetadata } from '../lib/seo';
import FeaturesSection from '../components/FeaturesSection'; // Apna exact file path yahan daalein
import HeroSection from "../components/HeroSection";
import PurposeSection from "../components/PurposeSection";
//  import ExperienceSection  from "../components/exp";
//  import  ContactSection  from "../components/contact";
 import ServiceSection from "../components/services";
 import { getHomePageContent } from "../lib/sanity/homePage";
 import { certifications as fallbackCertifications } from "../data/certifications";
 import { certificationsQuery } from "../lib/sanity/queries";
 import { sanityClient, sanityConfigured, urlFor } from "../lib/sanity/client";

export const metadata = createPageMetadata('/');

 async function getHomepageCertifications() {
   if (!sanityConfigured) return fallbackCertifications;

   try {
     const items = await sanityClient.fetch(certificationsQuery);
     if (!Array.isArray(items) || items.length === 0) {
       return fallbackCertifications;
     }

     const byCode = new Map(
       items.map((item) => [item.code?.trim().toLowerCase(), item]),
     );

     const matchedCodes = new Set();
     const matchedFallbacks = fallbackCertifications.map((fallback) => {
       const item = byCode.get(fallback.code?.trim().toLowerCase());
       if (!item) return fallback;

       matchedCodes.add(item.code?.trim().toLowerCase());
       return {
         ...fallback,
         title: item.title || fallback.title,
         type: item.type || fallback.type,
         imageUrl: urlFor(item.heroImage)?.width(600).url(),
       };
     });
     const additionalItems = items
       .filter((item) => !matchedCodes.has(item.code?.trim().toLowerCase()))
       .filter((item) => item.slug)
       .map((item) => ({
         id: item._id,
         code: item.code,
         title: item.title || item.code,
         type: item.type || "CERTIFICATION",
         href: `/certification/${item.slug}`,
         imageUrl: urlFor(item.heroImage)?.width(600).url(),
       }));

     return [...matchedFallbacks, ...additionalItems];
   } catch (error) {
     console.error("Unable to load homepage certifications from Sanity:", error);
     return fallbackCertifications;
   }
 }

 export default async function HomePage() {
   const [content, certificationItems] = await Promise.all([
     getHomePageContent(),
     getHomepageCertifications(),
   ]);
   const heroImageUrl = urlFor(content.hero.backgroundImage)?.width(1920).url();
   const aboutOverlayImageUrl = urlFor(content.about.overlayImage)?.width(800).url();

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100">
      <HeroSection content={{ ...content.hero, backgroundImageUrl: heroImageUrl }} />
    
       
      <AboutSection
        content={{
          ...content.about,
          backgroundImageAlt: "ACE Certification office building and team",
        }}
        showAcronymHighlights={false}
        showStoryLink
        showStrategicParagraph={false}
        storyLinkLabel="Know More"
        showTrustCard={false}
        justifyText
        highlightAcronymExpansion
        compactTopPadding
        compactBottomPadding
        emphasizeImage
        imageSrc="/about-office-building.png"
        overlayImageSrc={aboutOverlayImageUrl || "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85"}
      />
      <ServiceSection
        certificationItems={certificationItems}
        content={content.services}
      />
      <PurposeSection navy content={content.purpose} alignBenefitsWithText />
     {/* <ExperienceSection />   */}
     <FeaturesSection content={content.features} />
      {/* <ContactSection /> */}
    </main>
  );
}
