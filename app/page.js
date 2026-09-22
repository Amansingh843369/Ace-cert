import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import FaqSection from "../components/FaqSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
 import ExperienceSection  from "../components/exp";
 import  ContactSection  from "../components/contact";
 

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100">
      <HeroSection />
    
      <FeaturesSection />
      <AboutSection />
     <ExperienceSection />  
      <FaqSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
