"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BadgeCheck, ChevronDown, FileText, Lock, Menu, Package, ShieldCheck, X } from "lucide-react";
import { navItems, serviceGroups } from "./siteData";

const icons = { badge: BadgeCheck, lock: Lock, package: Package, file: FileText };

function ServiceIcon({ type }) {
  const Icon = icons[type] || ShieldCheck;
  return <Icon size={20} className="text-red-600 shrink-0" aria-hidden="true" />;
}

const getService = (service) =>
  typeof service === "object"
    ? { name: service.name, href: service.href }
    : { name: service, href: "#services" };

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [presenceOpen, setPresenceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePresenceOpen, setMobilePresenceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setPresenceOpen(false);
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobilePresenceOpen(false);
      }
    };
    const onDocumentClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setServicesOpen(false);
        setPresenceOpen(false);
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobilePresenceOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onDocumentClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobilePresenceOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 font-sans ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-white py-4 border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 lg:gap-6">
        
        {/* LOGO */}
        <Link href="/" aria-label="ACE-CERT Homepage" className="flex shrink-0 items-center group">
          <img
            src="/acecert-logo.png"
            alt="ACE-CERT - Accredited ISO Certification & Assessment Body"
            loading="eager"
            decoding="async"
            className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden lg:flex min-w-0 flex-1 items-center justify-center gap-6 xl:gap-10"
          aria-label="Main Navigation"
        >
          {navItems.map((item) =>
            item.dropdown === "services" ? (
              <div key={item.name} className="relative flex items-center">
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  aria-controls="desktop-services-dropdown"
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 font-bold text-sm xl:text-base transition-colors py-2 cursor-pointer relative ${
                    servicesOpen ? "text-red-600" : "text-slate-800 hover:text-red-600"
                  }`}
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180 text-red-600" : ""
                    }`}
                    aria-hidden="true"
                  />
                    {servicesOpen && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full" />
                  )}
                </button>

                {/* SERVICES DROPDOWN */}
                <div
                  id="desktop-services-dropdown"
                  className={`fixed left-1/2 ${
                    scrolled ? "top-[60px]" : "top-[72px]"
                  } z-50 w-full max-w-sm sm:w-[440px] -translate-x-1/2
                    rounded-2xl border border-slate-200 bg-white p-4 sm:p-6
                    transition-all duration-300 origin-top
                    ${
                      servicesOpen
                        ? "opacity-100 scale-100 visible pointer-events-auto translate-y-0"
                        : "opacity-0 scale-95 invisible pointer-events-none -translate-y-2"
                    }`}
                >
                  <div className="space-y-4">
                    {serviceGroups.map((group) => (
                      <React.Fragment key={group.title}>
                        {group.href && (
                            <Link
                              href={group.href}
                              onClick={() => setServicesOpen(false)}
                              className="flex items-center gap-3 pb-3 border-b border-slate-100 last:border-0"
                            >
                              {group.icon && (
                                <div className="p-2 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                                  <ServiceIcon type={group.icon} />
                                </div>
                              )}
                              <h3 className="text-slate-900 font-bold text-base tracking-tight">
                                {group.title}
                              </h3>
                            </Link>
                        )}
                        {group.items.length > 0 && (
                          <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 xl:grid-cols-4">
                            {group.items.map((service) => {
                              const { name, href } = getService(service);
                              return (
                                <li key={name}>
                                  <Link
                                    href={href}
                                    onClick={() => setServicesOpen(false)}
                                    className="group/item flex min-h-10 items-center justify-between gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 transition-all duration-200 hover:bg-red-50 hover:text-red-700 sm:px-3.5 sm:text-sm"
                                  >
                                    <span>{name}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              item.dropdown === "presence" ? (
                <div key={item.name} className="relative flex items-center">
                  <button
                    type="button"
                    onClick={() => {
                      setPresenceOpen((open) => !open);
                      setServicesOpen(false);
                    }}
                    aria-expanded={presenceOpen}
                    aria-controls="desktop-presence-dropdown"
                    aria-haspopup="true"
                    className={`flex items-center gap-1.5 font-bold text-sm xl:text-base transition-colors py-2 cursor-pointer ${presenceOpen ? "text-red-600" : "text-slate-800 hover:text-red-600"}`}
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${presenceOpen ? "rotate-180 text-red-600" : ""}`} aria-hidden="true" />
                  </button>
                  <div id="desktop-presence-dropdown" className={`absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-2 shadow-xl transition-all ${presenceOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
                    {item.items.map((option) => (
                      <Link key={option.name} href={option.href} onClick={() => setPresenceOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-red-50 hover:text-red-700">
                        {option.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
              <Link
                key={item.name}
                href={item.href || "/"}
                className="font-bold text-sm xl:text-base text-slate-800 hover:text-red-600 transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              )
            )
          )}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex shrink-0">
          <Link
            href="/contact"
            className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-slate-900 hover:shadow-lg transition-all duration-300 whitespace-nowrap active:scale-95"
          >
            Contact Today
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU ACCORDION */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-2xl p-4 sm:p-6 flex flex-col gap-2 max-h-[82vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden animate-in slide-in-from-top-2 duration-200"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.dropdown === "services" ? (
                <div key={item.name} className="border-b border-slate-100 pb-2">
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-iso-dropdown"
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    className="w-full flex items-center justify-between text-base font-bold text-slate-900 py-3 px-2 cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180 text-red-600" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div
                      id="mobile-iso-dropdown"
                      className="pl-2 mt-1 space-y-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100"
                    >
                    {serviceGroups.map((group) => (
                        <div key={group.title} className="space-y-1">
                          {group.href && (
                            <Link
                              href={group.href}
                              onClick={closeMobile}
                              className="flex items-center justify-between text-base font-bold text-slate-900 py-3 px-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                {group.icon && <ServiceIcon type={group.icon} />}
                                <span>{group.title}</span>
                              </div>
                              <ChevronDown
                                size={16}
                                className="text-red-600"
                                aria-hidden="true"
                              />
                            </Link>
                          )}
                          {group.items.length > 0 && (
                            <div className="space-y-1">
                              {group.items.map((service) => {
                                const { name, href } = getService(service);
                                return (
                                  <Link
                                    key={name}
                                    href={href}
                                    onClick={closeMobile}
                                    className="flex items-center justify-between text-sm font-medium text-slate-700 py-2 px-3 rounded-lg hover:text-red-600 hover:bg-white transition-all"
                                  >
                                    <span>{name}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                    ))}
                    </div>
                  )}
                </div>
              ) : item.dropdown === "presence" ? (
                <div key={item.name} className="border-b border-slate-100 pb-2">
                  <button
                    type="button"
                    aria-expanded={mobilePresenceOpen}
                    aria-controls="mobile-presence-dropdown"
                    onClick={() => setMobilePresenceOpen((open) => !open)}
                    className="w-full flex items-center justify-between text-base font-bold text-slate-900 py-3 px-2 cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={18} className={`transition-transform duration-200 ${mobilePresenceOpen ? "rotate-180 text-red-600" : ""}`} aria-hidden="true" />
                  </button>
                  {mobilePresenceOpen && (
                    <div id="mobile-presence-dropdown" className="mt-1 space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-3">
                      {item.items.map((option) => (
                        <Link key={option.name} href={option.href} onClick={closeMobile} className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-white hover:text-red-600">
                          {option.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href || "/"}
                  onClick={closeMobile}
                  className="text-base font-bold text-slate-800 py-3 px-2 border-b border-slate-100 block hover:bg-slate-50 rounded-lg hover:text-red-600 transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <Link
            href="/contact"
            onClick={closeMobile}
            className="bg-red-600 text-white text-center block w-full py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider mt-3 shadow-md active:scale-[0.99] transition-all hover:bg-slate-900"
          >
            Contact Us Today
          </Link>
        </div>
      )}
    </header>
  );
}