import { Globe, TrendingUp, Presentation, Layers } from "lucide-react";

// Data updated to match Image 3 exactly
const features = [
  {
    title: "The ACE Name",
    text: "The name ACE stands for their core promise to help our clients Achieve Compliance & Excellence",
    icon: TrendingUp,
    blobColor: "bg-sky-300", // Light Blue
    iconColor: "text-slate-900",
  },
  {
    title: "Clarity and Simplicity",
    text: "We believe that standards are the foundation of market trust. By helping organizations implement consistent, world-class benchmarks, we protect consumers and empower businesses to lead with confidence. ",
    icon: Presentation,
    blobColor: "bg-yellow-300", 
    iconColor: "text-slate-900",
  },
  {
    title: "Practical Focus",
    text: "Our auditors and trainers are seasoned, hands-on industry professionals who deliver realistic, high-impact solutions designed to work seamlessly in your day-to-day operations.",
    icon: Layers, // Overlapping circles look
    blobColor: "bg-orange-500", // Orange
    iconColor: "text-slate-900",
    hasSpecialMarkers: true, // For the red dot and plus sign
  },
  {
    title: "Global Recognition, Local Service",
    text: "Our certificates open doors worldwide, but our daily focus is close to home. We deliver world-class ISO compliance through adaptive, fast-acting, and highly attentive client care.",
    icon: Globe,
    blobColor: "bg-teal-200", // Mint/Teal
    iconColor: "text-slate-900",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-slate-50 relative overflow-hidden font-sans" aria-labelledby="features-title">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      {/* Left Side Dot Pattern (Subtle) */}
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 opacity-30 hidden xl:block">
         <div className="grid grid-cols-4 gap-3">
            {[...Array(20)].map((_, i) => <div key={i} className="w-1 h-1 bg-slate-400 rounded-full"></div>)}
         </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
         
          <h2 id="features-title" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-2">
            Why Choose ACE Certification Ltd.?
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article 
                key={feature.title} 
                className="group p-6 lg:p-8 rounded-[20px] bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start relative h-full"
              >
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-8 leading-tight min-h-[3.5rem]">
                  {feature.title}
                </h3>

                {/* Icon with Organic Blob */}
                <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                  {/* The Blob Shape */}
                  <div className={`absolute inset-0 ${feature.blobColor} rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transform group-hover:rotate-6 transition-transform duration-500 scale-110`}></div>
                  {/* The Icon */}
                  <Icon className={`w-8 h-8 ${feature.iconColor} relative z-10`} strokeWidth={1.75} aria-hidden="true" />
                </div>

                {/* Divider Line */}
                <div className="w-8 h-[2px] bg-slate-300 mb-6"></div>

                {/* Description Text - Uppercase & Bold like image */}
                <p className="text-slate-700 text-xs lg:text-sm leading-relaxed font-bold uppercase tracking-wide">
                  {feature.text}
                </p>

                {/* Special Markers for "Practical Focus" Card (Index 2) */}
                {feature.hasSpecialMarkers && (
                  <>
                    {/* Red Dot */}
                    <div className="absolute bottom-[4.5rem] left-8 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    {/* Teal Plus Sign */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-teal-400 font-bold text-2xl leading-none">+</div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}