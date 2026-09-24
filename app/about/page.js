import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 font-sans">
      
      {/* Top Banner Section */}
      {/* Image ke according light gray background aur bade rounded corners */}
      <section className="bg-[#f4f5f7] rounded-[3rem] py-28 px-6 text-center">
        <h1 className="text-6xl md:text-[5rem] font-bold text-[#0b1b3d] mb-6 tracking-tight">
          About Us
        </h1>
        <div className="flex items-center justify-center gap-3 text-lg font-medium">
          <Link href="/" className="text-[#0b1b3d] hover:opacity-70 transition-opacity">
            Home
          </Link>
          <span className="text-[#6c7293] text-xs">●</span>
          <span className="text-[#6c7293]">About Us</span>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          <span className="text-sm font-bold tracking-widest text-[#727a9c] uppercase">
            About Us
          </span>
          
          <h2 className="text-5xl md:text-[4rem] font-bold text-[#000000] leading-[1.1] tracking-tight">
            Boost your Website <br className="hidden md:block" /> Traffic!
          </h2>
          
          <p className="text-lg text-gray-500 leading-relaxed max-w-lg mt-6">
            Yahan aap apna description daal sakte hain. Ek achha paragraph aapke users ko bataega ki aap unki website grow karne mein kaise madad kar sakte hain.
          </p>
        </div>

        {/* Right Column: Image */}
        {/* Image ke corners design ke hisaab se rounded kiye gaye hain */}
        <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden">
          <Image
            src="/your-image-path.jpg" /* Yahan apni image ka sahi path public folder se lagayein */
            alt="Boost Website Traffic"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
      </section>
    </main>
  );
}