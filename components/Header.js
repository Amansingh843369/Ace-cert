"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BadgeCheck, ChevronDown, FileText, Lock, Menu, Package, ShieldCheck, X } from "lucide-react";
import { navItems, serviceGroups } from "./siteData";

const icons = { badge: BadgeCheck, lock: Lock, package: Package, file: FileText };

function ServiceIcon({ type }) {
  const Icon = icons[type] || ShieldCheck;
  return <Icon size={20} className="text-blue-600 shrink-0" aria-hidden="true" />;
}

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };
    const onDocumentClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setServicesOpen(false);
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

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 lg:gap-6">
        
        {/* LOGO */}
        <Link href="/" aria-label="ACE-CERT home" className="flex shrink-0 items-center group">
          <img
            src="/acecert-logo.png"
            alt="ACE-CERT Logo"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-all"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex min-w-0 flex-1 items-center justify-center gap-5 xl:gap-8" aria-label="Main navigation">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="static">
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 font-bold text-sm xl:text-base transition-colors py-2 cursor-pointer ${
                    servicesOpen ? "text-blue-700" : "text-slate-800 hover:text-blue-700"
                  }`}
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-blue-700" : ""}`}
                  />
                </button>

                {/* --- CENTERED MEGA MENU WITH THIN BLUE SCROLLBAR --- */}
                <div
                  className={`fixed top-[80px] left-1/2 -translate-x-1/2 w-[min(1000px,calc(100vw-32px))] max-h-[82vh] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#2563eb_#f1f5f9] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-blue-700 bg-white rounded-2xl shadow-2xl shadow-blue-950/15 border border-slate-100 p-6 lg:p-8 transition-all duration-300 origin-top z-50 ${
                    servicesOpen
                      ? "opacity-100 scale-100 visible pointer-events-auto"
                      : "opacity-0 scale-95 invisible pointer-events-none"
                  }`}
                >
                  {/* Service Groups Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {serviceGroups.map((group) => (
                      <div key={group.title} className="space-y-3">
                        
                        {/* Group Header */}
                        <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-100">
                          <div className="p-2 rounded-lg bg-blue-50 flex items-center justify-center">
                            <ServiceIcon type={group.icon} />
                          </div>
                          <h4 className="text-slate-900 font-bold text-base tracking-tight">
                            {group.title}
                          </h4>
                        </div>

                        {/* Service Item Links */}
                        <ul className="space-y-1">
                          {group.items.map((service) => (
                            <li key={service}>
                              <Link
                                href={typeof service === 'object' ? service.href : "#services"}
                                onClick={() => setServicesOpen(false)}
                                className="group/item flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/80 transition-all duration-200"
                              >
                                <span className="line-clamp-1">{typeof service === 'object' ? service.name : service}</span>
                                <span className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-blue-600 text-base font-bold">
                                  →
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </div>
                    ))}
                  </div>

                  {/* Dropdown CTA Banner */}
                  <div className="bg-gradient-to-r from-blue-50/90 via-slate-50 to-blue-50/60 p-5 sm:p-6 rounded-2xl mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-blue-100">
                    <div>
                      <p className="text-base sm:text-lg font-bold text-slate-900">
                        Need a custom certification solution?
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        Our experts provide tailored compliance strategies for your business.
                      </p>
                    </div>
                    <Link
                      href="#contact"
                      onClick={() => setServicesOpen(false)}
                      className="bg-blue-600 text-white px-6 py-2.5 sm:py-3 rounded-xl text-sm font-bold hover:bg-blue-700 shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all shrink-0"
                    >
                      Get Free Quote
                    </Link>
                  </div>

                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href || "/"}
                className="font-bold text-sm xl:text-base text-slate-800 hover:text-blue-700 transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex shrink-0">
          <Link
            href="#contact"
            className="bg-slate-900 text-white px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm xl:text-base hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/20 transition-all whitespace-nowrap"
          >
            CONTACT TODAY
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU ACCORDION */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl p-4 sm:p-6 flex flex-col gap-2 max-h-[82vh] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#2563eb_#f1f5f9] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar-thumb]:rounded-full animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  className="w-full flex items-center justify-between text-base sm:text-lg font-bold text-slate-800 py-3 px-2 cursor-pointer"
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-blue-600" : ""}`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-2 mt-1 space-y-4 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                    {serviceGroups.map((group) => (
                      <div key={group.title}>
                        <p className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider mb-2 px-1">
                          {group.title}
                        </p>
                        <div className="space-y-1">
                          {group.items.map((service) => (
                            <Link
                              key={typeof service === 'object' ? service.name : service}
                              href={typeof service === 'object' ? service.href : "#services"}
                              onClick={closeMobile}
                              className="flex items-center justify-between text-sm sm:text-base font-semibold text-slate-700 py-2 px-3 rounded-lg hover:text-blue-600 hover:bg-white transition-all"
                            >
                              <span>{typeof service === 'object' ? service.name : service}</span>
                              <span className="text-sm text-blue-500 font-bold">→</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href || "/"}
                onClick={closeMobile}
                className="text-base sm:text-lg font-bold text-slate-800 py-3 px-2 border-b border-slate-100 block hover:bg-slate-50 rounded-lg"
              >
                {item.name}
              </Link>
            )
          )}
          
          <Link
            href="#contact"
            onClick={closeMobile}
            className="bg-blue-600 text-white text-center block w-full py-3.5 rounded-xl font-bold text-base mt-3 shadow-lg shadow-blue-600/20 active:scale-[0.99] transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      )}
    </header>
  );
}