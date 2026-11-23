import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { aboutPageDefaults } from "../lib/sanity/aboutPageContent";

export default function CertificationCtaSection({
  content = aboutPageDefaults.cta,
}) {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-blue-950 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
        <div className="grid md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-14 lg:px-14">
            <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {content.titleStart}
              <span className="text-red-400">{content.titleHighlight}</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-950/25 transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-blue-950"
              >
                {content.primaryButtonLabel}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/certification"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950"
              >
                {content.secondaryButtonLabel}
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-300">
              <ShieldCheck
                className="h-5 w-5 shrink-0 text-red-400"
                aria-hidden="true"
              />
              {content.reassurance}
            </div>
          </div>

          <div className="relative min-h-[280px] md:min-h-[440px]">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85"
              alt={content.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/10 to-transparent md:bg-gradient-to-l md:from-blue-950/20 md:via-transparent md:to-blue-950/10" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-blue-950/65 p-4 text-white shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-300">
                {content.badgeTitle}
              </p>
              <p className="mt-1 text-lg font-bold sm:text-xl">
                {content.badgeDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
