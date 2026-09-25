import Link from "next/link";

export default function ISOPage({ iso }) {
  return (
    <main className="min-h-screen bg-[#F7F3E8] text-[#2C1E16]">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E16] via-[#3c281d] to-[#A64B2A]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              {iso.code}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              {iso.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              {iso.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#CD7F5D] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#A64B2A]"
              >
                Get Certified
              </Link>

              <Link
                href="/verify-certificate"
                className="rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Verify Certificate
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A64B2A]">
              ISO Certification
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Why choose {iso.code}?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              {iso.description}
            </p>

            <div className="mt-8 rounded-2xl border border-[#2C1E16]/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Suitable For
              </h3>

              <p className="mt-3 leading-7 text-black/65">
                {iso.suitableFor}
              </p>
            </div>
          </div>

          {/* CERTIFICATE CARD */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#CD7F5D]/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-[#2C1E16]/10 bg-white p-8 shadow-2xl">
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-[#F7F3E8]">

                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#CD7F5D] text-2xl font-bold">
                    ✓
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {iso.code}
                  </h3>

                  <p className="mt-2 text-black/50">
                    Management System Certification
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#2C1E16]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CD7F5D]">
              Benefits
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
              Key benefits of certification
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {iso.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#CD7F5D] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {benefit}
                </h3>

                <p className="mt-3 leading-7 text-white/60">
                  Improve your organization's management system,
                  compliance and overall business performance.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <div className="rounded-[2rem] bg-[#A64B2A] px-6 py-16 text-white md:px-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            ACE-CERT
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Start your certification journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Connect with our certification team to understand the
            certification process and requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-semibold text-[#2C1E16] transition hover:-translate-y-1"
          >
            Contact Us Today
          </Link>

        </div>
      </section>

    </main>
  );
}