import Link from "next/link";
import Image from "next/image";

const navigation = [
  {
    title: "OVERVIEW",
    links: [
      { label: "Home", href: "/" },
      { label: "Certifications", href: "/certification" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "QUICK LINKS",
    links: [
      { label: "ISO 9001", href: "/iso-9001-2015-certification" },
      { label: "ISO 10002", href: "/iso-10002-certification" },
      { label: "ISO 14001", href: "/iso-14001-certification" },
      { label: "ISO 27001", href: "/iso-27001-certification" },
    ],
  },
  {
    title: "EXPLORE",
    links: [
      { label: "Verify Certificate", href: "/validate_certificate" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      {
        label: "Feedback",
        href: "mailto:info@ace-cert.com?subject=Website%20Feedback",
      },
    ],
  },
];

const focusClass =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1739]";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-2 py-2 font-sans sm:px-4 sm:py-4">
      <div className="mx-auto max-w-screen-2xl rounded-2xl border border-slate-300 bg-[#0B1739] px-5 py-7 text-white sm:px-8 sm:py-9 lg:px-10 lg:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Work With Us
          </h2>
          <a
            href="mailto:info@ace-cert.com"
            className={`w-fit break-all text-lg font-bold tracking-tight hover:underline hover:underline-offset-4 sm:text-xl ${focusClass}`}
          >
            info@ace-cert.com
          </a>
        </div>

        <div className="mt-9 grid gap-8 sm:mt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10">
          <div className="grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
            {navigation.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="text-xs font-bold tracking-wide sm:text-sm">
                  {group.title}
                </h3>
                <ul className="mt-2 space-y-1">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("mailto:") ? (
                        <a
                          href={link.href}
                          className={`inline-flex min-h-7 items-center text-sm text-slate-200 transition-colors hover:text-[#FFE34A] hover:underline hover:underline-offset-2 motion-reduce:transition-none ${focusClass}`}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className={`inline-flex min-h-7 items-center text-sm text-slate-200 transition-colors hover:text-[#FFE34A] hover:underline hover:underline-offset-2 motion-reduce:transition-none ${focusClass}`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="relative aspect-[2.4/1] w-full overflow-hidden rounded-xl border border-white/20 shadow-lg lg:max-w-[650px] lg:justify-self-end">
            <Image
              src="/your_success.jpg"
              alt="Professionals collaborating on a business project"
              fill
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-8 border-t border-white/25 pt-4">
          <p className="text-xs text-slate-200">
            © {currentYear} ACE-CERT. All rights reserved.
          </p>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="pointer-events-none mt-8 select-none text-center text-[clamp(5rem,19vw,17rem)] font-bold leading-[0.8] tracking-[-0.08em] text-slate-300/45"
      >
        ACE-CERT
      </p>
    </footer>
  );
}
