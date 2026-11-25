import Link from "next/link";

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
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173EBE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFE34A]";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-2 py-2 font-sans sm:px-4 sm:py-4">
      <div className="mx-auto max-w-screen-2xl rounded-2xl border border-[#173EBE]/15 bg-[#FFE34A] px-5 py-7 text-[#173EBE] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
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

        <div className="mt-9 grid max-w-xl grid-cols-2 gap-8 sm:mt-12 sm:gap-12">
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
                        className={`inline-flex min-h-7 items-center text-sm text-[#526581] transition-colors hover:text-[#173EBE] hover:underline hover:underline-offset-2 motion-reduce:transition-none ${focusClass}`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={`inline-flex min-h-7 items-center text-sm text-[#526581] transition-colors hover:text-[#173EBE] hover:underline hover:underline-offset-2 motion-reduce:transition-none ${focusClass}`}
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

        <div className="mt-8 border-t border-[#173EBE]/20 pt-4">
          <p className="text-xs text-[#526581]">
            © {currentYear} ACE-CERT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
