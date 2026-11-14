"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

const MotionLink = motion.create(Link);

const navigation = [
  {
    title: "Services",
    links: [
      {
        label: "Certification",
        href: "/certification",
      },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Contact Us",
        href: "/contact",
      },
      {
        label: "Feedback",
        href: "mailto:info@acecert.com?subject=Website%20Feedback",
      },
    ],
  },
];

// Keep content visible while adding a subtle entrance animation.
const entrance = {
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true, amount: 0.15 },
};

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-4";

const linkClass = `group inline-flex min-h-11 max-w-full items-center gap-1 rounded-md text-sm text-slate-600 transition-colors duration-200 hover:text-red-600 motion-reduce:transition-none ${focusClass}`;

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
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <footer className="relative isolate overflow-hidden rounded-t-[2rem] border-t border-slate-200 bg-white font-sans text-[#0B1739] sm:rounded-t-[3rem]">
        {/* Top accent */}
        

        <div className="mx-auto max-w-7xl px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10 lg:px-8">
          {/* Certification CTA */}
          <motion.div
            {...entrance}
            className="relative overflow-hidden rounded-2xl border border-red-100 bg-[#FFF5F5] p-5 sm:rounded-3xl sm:p-8 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[40px] border-red-100/70"
            />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
              <div className="min-w-0">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-red-700">
                  <span
                    aria-hidden="true"
                    className="h-0.5 w-6 shrink-0 rounded-full bg-red-600"
                  />
                  Move forward with ACE-CERT
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[2.5rem]">
                  Ready for your{" "}
                  <span className="text-red-600">next step?</span>
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Explore certification and take your next step with
                  confidence.
                </p>
              </div>

              <MotionLink
                href="/certification"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className={`group inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(220,38,38,0.65)] transition-colors hover:bg-red-700 motion-reduce:transition-none md:w-auto ${focusClass}`}
              >
                Explore certification

                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </span>
              </MotionLink>
            </div>
          </motion.div>

          {/* Brand, navigation and contact */}
          <div className="grid grid-cols-2 items-start gap-x-6 gap-y-9 py-9 sm:grid-cols-4 sm:py-12 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12">
            <motion.div
              {...entrance}
              className="col-span-2 min-w-0 lg:col-span-4"
            >
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
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-7 text-slate-600">
                Practical support for your certification journey.
                Take your next step with clarity and confidence.
              </p>

              <a
                href="mailto:info@acecert.com"
                className={`group mt-4 inline-flex min-h-11 max-w-full items-center gap-3 rounded-lg ${focusClass}`}
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-600 transition-colors group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white motion-reduce:transition-none"
                >
                  <Mail className="h-4 w-4" />
                </span>

                <span className="min-w-0">
                  <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    Email us
                  </span>

                  <span className="block break-all text-sm font-medium text-[#0B1739] transition-colors group-hover:text-red-600 motion-reduce:transition-none">
                    info@acecert.com
                  </span>
                </span>
              </a>
            </motion.div>

            {navigation.map((group) => (
              <motion.nav
                key={group.title}
                {...entrance}
                aria-label={group.title}
                className="min-w-0 lg:col-span-2"
              >
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B1739]">
                  {group.title}
                </h2>

                <div
                  aria-hidden="true"
                  className="mt-3 h-0.5 w-7 rounded-full bg-red-600"
                />

                <ul className="mt-3">
                  {group.links.map((link) => {
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
                          <a href={link.href} className={linkClass}>
                            {content}
                          </a>
                        ) : (
                          <Link href={link.href} className={linkClass}>
                            {content}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.nav>
            ))}

            {/* Navy contact card */}
            <motion.div
              {...entrance}
              className="relative col-span-2 overflow-hidden rounded-2xl bg-[#0B1739] p-6 text-white sm:col-span-4 lg:col-span-4"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-[24px] border-white/5"
              />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:flex-col lg:items-stretch lg:gap-5">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                    <MessageCircle
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-red-400"
                    />
                    Here to help
                  </p>

                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                    Let’s talk about your next step.
                  </h2>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
                    Get in touch with our team for guidance on your
                    certification journey.
                  </p>
                </div>

                <MotionLink
                  href="/contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  className="group inline-flex min-h-11 w-full shrink-0 items-center justify-between gap-6 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0B1739] transition-colors hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B1739] motion-reduce:transition-none sm:w-auto lg:w-full"
                >
                  Contact our team

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-red-600 transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </MotionLink>
              </div>
            </motion.div>
          </div>

          {/* Copyright and back to top */}
          <div className="flex flex-col items-center gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-between sm:gap-6">
            <p className="text-center text-xs leading-6 text-slate-500 sm:text-left">
              © {currentYear}{" "}
              <span className="font-semibold text-[#0B1739]">
                ACE-CERT.
              </span>{" "}
              All rights reserved.
            </p>

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
              className={`group inline-flex min-h-11 items-center gap-3 rounded-lg px-1 text-xs font-semibold text-slate-600 transition-colors hover:text-red-600 motion-reduce:transition-none ${focusClass}`}
            >
              Back to top

              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-red-100 bg-red-50 text-red-600 transition-colors group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white motion-reduce:transition-none"
              >
                <ArrowUp className="h-4 w-4" />
              </span>
            </motion.button>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}