import Image from 'next/image';
import Link from 'next/link';

export default function AboutHeroSection() {
  return (
    // Relative container for background image and overlay
    <section className="relative w-full h-[350px] md:h-[450px] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Top Thin Blue Line (Design Detail) */}
      <div className="absolute top-0 left-0 w-1/4 h-1 bg-blue-500 z-20"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team-meeting.jpg" // Yahan apni background image ka path daalein
          alt="About Us Background"
          fill
          className="object-cover"
          priority
        />
        {/* Deep Blue Overlay - Yeh background image ko dark blue tint dega */}
        <div className="absolute inset-0 bg-[#1c2a63] opacity-85"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center flex flex-col items-center mt-4">
        <h1 className="text-5xl md:text-[5rem] font-extrabold text-white tracking-tight mb-6">
          About us
        </h1>
        
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-3 text-white text-base md:text-lg font-medium">
          <Link href="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <span className="text-sm font-bold">&gt;</span>
          <span>About Us</span>
        </div>
      </div>
    </section>
  );
}

