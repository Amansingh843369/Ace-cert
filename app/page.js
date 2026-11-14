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
        foregroundImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=85"
        foregroundImageAlt="Corporate team collaborating in a meeting"
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
