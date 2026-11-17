"use client";

const features = [
  {
    id: 1,
    title: "The ACE Name",
    text: "We live up to our name, ensuring you ace your certification journey.",
    color: "#8BD5E5",
    blob: "M12 52C7 38 17 26 32 24C43 12 57 14 67 21C82 25 89 39 85 54C83 70 70 82 54 80C39 88 22 78 17 67C12 63 10 57 12 52Z",
    icon: "chart",
  },
  {
    id: 2,
    title: "Clarity and Simplicity",
    text: "We demystify complex standards, making them accessible and actionable.",
    color: "#FFDA68",
    blob: "M15 49C10 35 22 26 36 25C44 13 61 14 70 24C84 29 89 43 82 56C83 71 69 81 55 77C41 86 23 78 20 65C15 61 13 55 15 49Z",
    icon: "board",
  },
  {
    id: 3,
    title: "Practical Focus",
    text: "Our auditors and trainers are seasoned professionals who provide practical, not just theoretical, solutions.",
    color: "#FF8135",
    blob: "M14 48C8 33 19 23 35 23C46 13 60 17 68 26C83 30 88 44 82 57C80 73 66 82 52 78C37 84 21 75 18 63C14 59 12 53 14 48Z",
    icon: "circles",
  },
  {
    id: 4,
    title: "Global Recognition, Local Service",
    text: "While our certifications are internationally recognized, our approach is personalized and responsive.",
    color: "#B7F0E8",
    blob: "M13 50C8 37 19 28 34 27C43 17 59 16 69 25C83 29 89 42 83 56C85 69 71 80 57 77C43 85 25 78 19 67C13 63 11 56 13 50Z",
    icon: "globe",
  },
];

function FeatureIllustration({ feature }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-24 w-24 shrink-0"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        focusable="false"
      >
        <path d={feature.blob} fill={feature.color} />
      </svg>

      <svg
        viewBox="0 0 100 100"
        className="relative h-full w-full"
        fill="none"
        stroke="#10131C"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        {feature.icon === "chart" && (
          <g>
            <path d="M20 18v63h64M20 29h7M20 41h7M20 53h7M20 65h7" />
            <path d="m29 69 16-14 17-5 18-29" />
            <circle cx="29" cy="69" r="5.5" fill="#fff" />
            <circle cx="45" cy="55" r="5.5" fill="#fff" />
            <circle cx="62" cy="50" r="5.5" fill="#fff" />
            <circle cx="80" cy="21" r="5.5" fill="#fff" />
          </g>
        )}

        {feature.icon === "board" && (
          <g>
            <path d="M21 25h53v39H21zM15 67h66M27 67 18 84M67 67l9 17" />
            <path d="M53 41v18h18L53 41Z" />
            <path d="m49 20 4-7" />
          </g>
        )}

        {feature.icon === "circles" && (
          <g>
            <circle cx="39" cy="40" r="19" />
            <circle cx="62" cy="40" r="19" />
            <circle cx="50.5" cy="58" r="19" />
          </g>
        )}

        {feature.icon === "globe" && (
          <g>
            <circle cx="50" cy="50" r="31" />
            <ellipse cx="50" cy="50" rx="15" ry="31" />
            <path d="M20 50h60M26 36c13 7 35 7 48 0M26 64c13-7 35-7 48 0" />
            <path d="M30 27 70 73M70 27 30 73" />
          </g>
        )}
      </svg>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative isolate overflow-hidden bg-[#F8FAFB] py-14 font-sans sm:py-16 lg:pb-20 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-32 h-72 w-80 rounded-br-[100%] bg-teal-100/45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-96 rounded-tl-[100%] bg-teal-100/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-0 hidden h-56 w-40 opacity-45 sm:block"
        style={{
          backgroundImage: "radial-gradient(#9AA5B1 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to right, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <h2
          id="features-heading"
          className="mb-10 text-center text-3xl font-extrabold leading-tight tracking-tight text-[#343653] sm:mb-12 sm:text-4xl lg:mb-14 lg:text-5xl"
        >
          Why Choose ACE Certification Ltd.?
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-8">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="flex min-h-[360px] flex-col rounded-[18px] border border-slate-100/90 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(32,43,66,0.07)] sm:px-7 sm:py-9 xl:min-h-[400px] xl:px-5 xl:py-8 2xl:min-h-[400px] 2xl:px-8 2xl:py-8"
            >
              <h3 className="min-h-[2.6em] text-[1.35rem] font-extrabold leading-[1.35] tracking-tight text-[#252A3D] sm:text-[1.4rem] xl:text-xl 2xl:text-[1.65rem]">
                {feature.title}
              </h3>

              <div className="mt-4">
                <FeatureIllustration feature={feature} />
              </div>

              <div
                aria-hidden="true"
                className="mb-6 mt-6 h-[3px] w-11 rounded-full bg-[#9A9DA8] 2xl:mb-5 2xl:mt-5"
              />

              <p className="text-left text-[14px] font-semibold uppercase leading-[1.6] tracking-[-0.015em] text-[#34394F] xl:text-[13px] 2xl:text-[15px]">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
