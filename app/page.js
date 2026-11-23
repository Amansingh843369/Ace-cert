import { readdir } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import AboutSection from "../components/AboutSection";
import { createPageMetadata } from '../lib/seo';
import BlogSection from "../components/BlogSection";
import FeaturesSection from '../components/FeaturesSection'; // Apna exact file path yahan daalein
import HeroSection from "../components/HeroSection";
import PurposeSection from "../components/PurposeSection";
//  import ExperienceSection  from "../components/exp";
//  import  ContactSection  from "../components/contact";
 import ServiceSection from "../components/services";
 import { certificationCodeToSlug } from "../data/certificationImages";
 import { getHomePageContent } from "../lib/sanity/homePage";

export const metadata = createPageMetadata('/');

 const certificationImageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

 async function getCertificationImageFiles() {
   const folder = join(process.cwd(), "public", "certifications");
   const entries = await readdir(folder, { withFileTypes: true });

   return Object.fromEntries(
     entries
       .filter(
         (entry) =>
           entry.isFile() &&
           certificationImageExtensions.has(extname(entry.name).toLowerCase()),
       )
       .map((entry) => [
         certificationCodeToSlug(basename(entry.name, extname(entry.name))),
         `/certifications/${entry.name}`,
       ]),
   );
 }

 export default async function HomePage() {
   const certificationImageFiles = await getCertificationImageFiles();
   const content = await getHomePageContent();

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100">
      <HeroSection content={content.hero} />
    
       
      <AboutSection
        eyebrowText="Our Story"
        showAcronymHighlights={false}
        showStoryLink={false}
        showTrustCard={false}
        justifyText
        highlightAcronymExpansion
        compactTopPadding
        emphasizeImage
        imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
        imageAlt="Corporate professionals discussing a project around a meeting table"
        overlayImageSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85"
        overlayImageAlt="Corporate team collaborating during a strategy meeting"
      />
      <ServiceSection
        certificationImageFiles={certificationImageFiles}
        content={content.services}
      />
      <PurposeSection navy content={content.purpose} alignBenefitsWithText />
     {/* <ExperienceSection />   */}
     <FeaturesSection content={content.features} />
      
      <BlogSection content={content.blog} />
      {/* <ContactSection /> */}
    </main>
  );
}
