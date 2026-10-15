import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CircleHelp, ShieldCheck } from "lucide-react";

export default function IsoStandardPage({ standard }) {
  const titleSuffix = standard.certifiable ? "Certification" : "Standard Guidance";

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#fffdfd] font-sans text-slate-900">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[480px] w-[480px] rounded-full bg-red-100/50 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[440px] w-[440px] rounded-full bg-rose-100/40 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-12 lg:py-16">
        <header className="mx-auto mb-9 max-w-4xl text-center md:mb-12">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-semibold text-red-800 shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#E30613]" />
            {standard.category}
          </span>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#111827] sm:text-5xl md:text-6xl">
            {standard.name} <span className="text-[#E30613]">{titleSuffix}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-[#526581] sm:text-lg md:text-xl">
            {standard.focus}
          </p>
        </header>

        <section className="grid items-center gap-7 rounded-[1.75rem] border border-red-100 bg-white p-5 shadow-[0_18px_60px_rgba(17,24,39,0.07)] sm:rounded-[2rem] sm:p-7 md:gap-10 md:p-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:p-11">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-red-50 ring-1 ring-black/5 sm:rounded-[1.5rem]">
            <Image
              src="/your_success.jpg"
              alt="Business professionals collaborating on management system improvements"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-red-700">
              {standard.name} overview
            </span>
            <h2 className="relative inline-block pb-4 text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
              About {standard.name}
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-14 rounded-full bg-[#E30613]" />
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#526581] sm:text-base sm:leading-8">
              {standard.description}
            </p>
            <p className="mt-4 text-sm leading-7 text-[#526581] sm:text-base sm:leading-8">
              {standard.benefit}
            </p>

            {!standard.certifiable && (
              <div className="mt-5 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
                <p>
                  {standard.certificationNote} Contact our team to confirm the appropriate certification route for your organization.
                </p>
              </div>
            )}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#E30613] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_22px_rgba(227,6,19,0.2)] transition-all hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 active:translate-y-0"
              >
                Contact Our Experts
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#standard-applications"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-red-200 bg-white px-6 py-3 text-sm font-bold text-red-800 transition-colors hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
              >
                Explore the standard
              </a>
            </div>
          </div>
        </section>

        <section id="standard-applications" className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_35px_rgba(17,24,39,0.05)] sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-700 ring-1 ring-red-100">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
              Primary focus
            </h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-[#526581] sm:text-base">
              {standard.focus}
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_35px_rgba(17,24,39,0.05)] sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-700 ring-1 ring-red-100">
              <Check className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
              Where it can be applied
            </h2>
            <ul className="mt-4 space-y-3">
              {standard.applications.map((application) => (
                <li key={application} className="flex items-start gap-3 text-sm leading-6 text-[#526581] sm:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                  <span>{application}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
