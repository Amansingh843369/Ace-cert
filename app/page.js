import AboutSection from "../components/AboutSection";
import { createPageMetadata } from '../lib/seo';
import BlogSection from "../components/BlogSection";
import FaqSection from "../components/FaqSection";
import FeaturesSection from '../components/FeaturesSection'; // Apna exact file path yahan daalein
import HeroSection from "../components/HeroSection";
//  import ExperienceSection  from "../components/exp";
//  import  ContactSection  from "../components/contact";
 import ServiceSection from "../components/services";

export const metadata = createPageMetadata('/');

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100">
      <HeroSection />
    
       
      <AboutSection
        showStrategicParagraph={false}
        foregroundImage="/about-team-meeting.png"
        foregroundImageAlt="Corporate team reviewing documents in a meeting"
      />
      <ServiceSection />
     {/* <ExperienceSection />   */}
     <FeaturesSection />
      <FaqSection />
      <BlogSection />
      {/* <ContactSection /> */}
    </main>
  );
}
