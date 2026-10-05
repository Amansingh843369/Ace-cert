import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import FaqSection from "../components/FaqSection";
import FeaturesSection from '../components/FeaturesSection'; // Apna exact file path yahan daalein
import HeroSection from "../components/HeroSection";
//  import ExperienceSection  from "../components/exp";
//  import  ContactSection  from "../components/contact";
 import ServiceSection from "../components/services";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100">
      <HeroSection />
    
       
      <AboutSection />
      <ServiceSection />
     {/* <ExperienceSection />   */}
     <FeaturesSection />
      <FaqSection />
      <BlogSection />
      {/* <ContactSection /> */}
    </main>
  );
}
