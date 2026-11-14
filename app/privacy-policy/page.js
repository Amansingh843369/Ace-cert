import Link from "next/link";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata("/privacy-policy");

const sections = [
  {
    title: "Information you provide",
    paragraphs: [
      "If you email ACE-CERT directly, you may choose to share details such as your name, email address, phone number, and message. The website contact form currently displays an on-screen confirmation but does not transmit or store the details entered into it.",
    ],
  },
  {
    title: "How information is used",
    paragraphs: [
      "Information you send us directly is used to respond to your enquiry and provide the support or information you requested. Please do not include sensitive personal information in a general enquiry.",
    ],
  },
  {
    title: "Sharing and external services",
    paragraphs: [
      "Some pages include content or services provided by third parties, such as maps or video embeds. Those providers may process technical information under their own privacy policies.",
    ],
  },
  {
    title: "Your choices and questions",
    paragraphs: [
      "You can contact us to ask about information you have sent us or request its correction or deletion, subject to applicable requirements.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 font-sans sm:px-6 sm:py-16">
      <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-red-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Privacy Policy</span>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
          ACE-CERT
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          This page explains how information you choose to share with ACE-CERT
          is handled when you use this website.
        </p>

        <div className="mt-8 space-y-7">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-slate-900">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-2 leading-7 text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-8 border-t border-slate-200 pt-6 leading-7 text-slate-600">
          For privacy questions, email{" "}
          <a
            href="mailto:info@acecert.com"
            className="font-medium text-red-600 hover:text-red-700"
          >
            info@acecert.com
          </a>
          .
        </p>
      </article>
    </main>
  );
}
