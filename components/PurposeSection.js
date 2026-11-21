import { Link2, ShieldCheck, TrendingUp } from "lucide-react";

const defaultBenefits = [
  {
    number: "01",
    title: "Build Unshakeable Trust",
    description:
      "Prove your commitment to safety, quality, and excellence to your clients and stakeholders.",
    icon: "shieldCheck",
  },
  {
    number: "02",
    title: "Unlock Market Potential",
    description:
      "Open doors to new contracts, global opportunities, and regulatory compliance with confidence.",
    icon: "link2",
  },
  {
    number: "03",
    title: "Drive Operational Excellence",
    description:
      "Transform rigorous industry standards into streamlined, efficient, and highly profitable everyday practices. We don’t just audit businesses—we partner with them to help them achieve compliance and excellence.",
    icon: "trendingUp",
  },
];

const benefitIcons = {
  shieldCheck: ShieldCheck,
  link2: Link2,
  trendingUp: TrendingUp,
};

export default function PurposeSection({ navy = false, content = null, alignBenefitsWithText = false }) {
  const purposeContent = {
    firstParagraphPrefix: "At ",
    companyName: "ACE Certification",
    firstParagraphSuffix:
      ", our purpose is to bridge the gap between complex international standards and everyday business success. We believe compliance shouldn’t be a bureaucratic hurdle, but a strategic catalyst for growth.",
    secondParagraph:
      "By delivering accessible, practical, and globally recognized ISO certification, training, and advisory services, we empower small and middle-market businesses to grow with confidence.",
    ...content,
  };
  const benefits = content?.benefits ?? defaultBenefits;

  return (
    <section
      aria-labelledby="purpose-heading"
      className={`relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 2xl:px-12 ${
        navy
          ? "bg-gradient-to-br from-[#0B1739] via-[#14234A] to-[#0B1739]"
          : "bg-gradient-to-br from-red-50 via-white to-gray-50"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full blur-3xl ${
          navy ? "bg-red-500/15" : "bg-red-100/60"
        }`}
      />
      {navy && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-56 -left-40 h-[28rem] w-[28rem] rounded-full border-[48px] border-white/[0.035]"
        />
      )}

      <div className={`relative mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-start gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] ${alignBenefitsWithText ? "xl:gap-16" : "xl:gap-16"}`}>
        <div className="min-w-0">
           
          <h2
            id="purpose-heading"
            className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
              navy ? "text-white" : "text-gray-900"
            }`}
          >
            Empowering Businesses Through
            <span className={`block ${navy ? "text-red-400" : "text-red-600"}`}>
              Achieve Compliance &amp; Excellence.
            </span>
          </h2>

          <p
            className={`mt-6 text-justify text-base leading-7 sm:text-lg sm:leading-8 ${
              navy ? "text-slate-300" : "text-gray-600"
            }`}
          >
            {purposeContent.firstParagraphPrefix}
            <strong
              className={`font-semibold ${
                navy ? "text-white" : "text-gray-900"
              }`}
            >
              {purposeContent.companyName}
            </strong>
            {purposeContent.firstParagraphSuffix}
          </p>

          <p
            className={`mt-6 text-justify text-base leading-7 sm:text-lg sm:leading-8 ${
              navy ? "text-slate-300" : "text-gray-600"
            }`}
          >
            {purposeContent.secondParagraph}
          </p>
        </div>

        <div className={`min-w-0 space-y-4 ${alignBenefitsWithText ? "xl:mt-0" : ""}`}>
          {!alignBenefitsWithText && (
            <p
              className={`text-xs font-bold uppercase tracking-[0.18em] ${
                navy ? "text-red-300" : "text-red-600"
              }`}
            >
              {content?.benefitsEyebrow ?? "What this means for you"}
            </p>
          )}

          {benefits.map(({ number, title, description, icon }) => {
            const Icon = benefitIcons[icon] || ShieldCheck;

            return (
              <article
                key={number}
                className={`group flex min-w-0 gap-4 rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg sm:gap-5 sm:p-6 ${
                  navy
                    ? "border-white/60 shadow-[0_18px_50px_rgba(0,0,0,0.2)]"
                    : "border-gray-100 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="pt-1 text-sm font-extrabold tracking-wider text-red-300"
                >
                  {number}
                </span>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="break-words text-lg font-bold text-gray-900 transition-colors group-hover:text-red-600 sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">
                    {description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
