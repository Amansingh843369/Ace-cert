export default function CertificationImportanceSection({
  id,
  title,
  description,
  benefits,
}) {
  return (
    <section aria-labelledby={id} className="relative">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-red-700">
            The value of certification
          </p>
          <h2
            id={id}
            className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.035em] text-[#111827] sm:text-4xl md:text-5xl"
          >
            Why is <span className="text-[#E30613]">{title}</span> Important?
          </h2>
        </div>

        <div className="flex items-start border-l-2 border-red-600 pl-5 text-sm leading-7 text-[#526581] sm:pl-7 sm:text-base sm:leading-8 md:text-lg">
          <p>{description}</p>
        </div>
      </div>

      <ol className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-x-12">
        {benefits.map((benefit, index) => (
          <li
            key={`${index}-${benefit}`}
            className="group relative flex min-h-24 items-start gap-4 border-t border-slate-200 py-5 sm:py-6"
          >
            <span className="mt-0.5 shrink-0 font-mono text-sm font-semibold tracking-wider text-red-600 transition-transform duration-200 group-hover:-translate-y-0.5">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="max-w-sm text-base font-semibold leading-relaxed text-slate-700 transition-colors duration-200 group-hover:text-red-800 sm:text-lg">
              {benefit}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
