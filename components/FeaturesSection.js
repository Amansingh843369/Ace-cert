import { Globe, TrendingUp, Presentation, Layers, ArrowRight } from "lucide-react";

const features = [
  {
    title: "The ACE-CERT",
    text: "The name ACE stands for our core promise: helping clients Achieve Compliance & Excellence at every level.",
    icon: TrendingUp,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Clarity & Simplicity",
    text: "Standards are the foundation of market trust. We implement consistent benchmarks to protect consumers and empower your business.",
    icon: Presentation,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Practical Focus",
    text: "Our auditors are seasoned industry professionals delivering realistic, high-impact solutions for your day-to-day operations.",
    icon: Layers,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Global Recognition",
    text: "Certificates that open doors worldwide, delivered through adaptive, fast-acting, and highly attentive local client care.",
    icon: Globe,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" aria-labelledby="features-title">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Side: Sticky Title Area */}
          <div className="lg:col-span-5 mb-12 lg:mb-0 lg:sticky lg:top-32 self-start">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm tracking-wide mb-6">
              Why ACE Certification?
            </div>
            <h2 id="features-title" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15]">
              Elevating Standards, <br className="hidden lg:block"/> Empowering Business.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
              We don't just provide certificates; we partner with you to build a foundation of trust, operational excellence, and global compliance that drives real growth.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors group">
              Speak with our experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Side: Features 2x2 Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article 
                  key={feature.title} 
                  className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Icon Box */}
                  <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} strokeWidth={2} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {feature.text}
                  </p>
                </article>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}