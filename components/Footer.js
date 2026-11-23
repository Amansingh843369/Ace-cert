"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";

const navigation = [
  {
    title: "Product",
    links: [
      { label: "Certification", href: "/certification" },
      { label: " Validate Certificate", href: "/validate_certificate" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      {
        label: "Feedback",
        href: "mailto:info@ace-cert.com?subject=Website%20Feedback",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-4";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#F8F9FA] px-4 pb-8 pt-8 font-sans text-[#0B1739] sm:px-6 sm:pb-12 sm:pt-12 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_55px_rgba(11,23,57,0.07)] sm:px-10 sm:py-10 lg:px-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_repeat(3,minmax(0,1fr))] lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label="ACE-CERT home"
              className={`inline-flex rounded-lg ${focusClass}`}
            >
              <Image
                src="/acecert-logo.png"
                alt="ACE-CERT"
                width={180}
                height={72}
                loading="lazy"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Your trusted partner for certification, inspection and training
              services. Take your next step with clarity and confidence.
            </p>

            <a
              href="mailto:info@ace-cert.com"
              className={`mt-4 inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-slate-600 transition-colors hover:text-red-600 motion-reduce:transition-none ${focusClass}`}
            >
              <Mail aria-hidden="true" className="h-4 w-4 text-red-600" />
              info@ace-cert.com
            </a>
          </div>

          {navigation.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-[#0B1739]">
                {group.title}
              </h2>
              <ul className="mt-3 space-y-1">
                {group.links.map((link) => {
                  const className = `group inline-flex min-h-10 items-center gap-1 rounded-md text-sm text-slate-600 transition-colors hover:text-red-600 motion-reduce:transition-none ${focusClass}`;
                  const content = (
                    <>
                      <span>{link.label}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-red-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                      />
                    </>
                  );

                  return (
                    <li key={link.label}>
                      {link.href.startsWith("mailto:") ? (
                        <a href={link.href} className={className}>
                          {content}
                        </a>
                      ) : (
                        <Link href={link.href} className={className}>
                          {content}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-5 text-center sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs leading-6 text-slate-500">
            © {currentYear} ACE-CERT. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <Link
              href="/privacy-policy"
              className={`inline-flex min-h-10 items-center rounded-md text-xs text-slate-600 underline underline-offset-2 transition-colors hover:text-red-600 motion-reduce:transition-none ${focusClass}`}
            >
              Privacy Policy
            </Link>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className={`group inline-flex min-h-10 items-center gap-2 rounded-md text-xs text-slate-600 transition-colors hover:text-red-600 motion-reduce:transition-none ${focusClass}`}
            >
              Back to top
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white motion-reduce:transition-none"
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </span>
            </motion.button>
          </div>
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
