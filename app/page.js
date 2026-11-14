import { readdir } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import AboutSection from "../components/AboutSection";
import { createPageMetadata } from '../lib/seo';
import BlogSection from "../components/BlogSection";
import FaqSection from "../components/FaqSection";
import FeaturesSection from '../components/FeaturesSection'; // Apna exact file path yahan daalein
import HeroSection from "../components/HeroSection";
//  import ExperienceSection  from "../components/exp";
//  import  ContactSection  from "../components/contact";
 import ServiceSection from "../components/services";
 import { certificationCodeToSlug } from "../data/certificationImages";

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

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100">
      <HeroSection />
    
       
      <AboutSection
        showStrategicParagraph={false}
        foregroundImage="/about-team-meeting.png"
        foregroundImageAlt="Corporate team reviewing documents in a meeting"
      />
      <ServiceSection certificationImageFiles={certificationImageFiles} />
     {/* <ExperienceSection />   */}
     <FeaturesSection />
      <FaqSection />
      <BlogSection />
      {/* <ContactSection /> */}
    </main>
  );
}
