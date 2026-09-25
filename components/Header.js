"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BadgeCheck, ChevronDown, FileText, Lock, Menu, Package, ShieldCheck, X } from "lucide-react";
import {
  navItems,
  serviceGroups,
 
} from "./siteData";

// Theme Colors
const THEME = {
  blue: "#201f44", // Deep Royal Blue
  gold: "#df9a62", // Amber/Gold
};

const icons = { badge: BadgeCheck, lock: Lock, package: Package, file: FileText };

function ServiceIcon({ type }) {
  const Icon = icons[type] || ShieldCheck;
  return <Icon size={22} className="text-[#df9a62]" aria-hidden="true" />;
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
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 lg:gap-6">
        
        {/* LOGO */}
        <Link href="/" aria-label="ACE-CERT home" className="flex shrink-0 items-center group">
          <img
            src="/acecert-logo.png"
            alt="ACE-CERT Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex min-w-0 flex-1 items-center justify-center gap-6 xl:gap-10" aria-label="Main navigation">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="static h-full flex items-center">
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 font-bold text-sm xl:text-base transition-colors py-2 cursor-pointer relative ${
                    servicesOpen ? "text-[#201f44]" : "text-slate-700 hover:text-[#201f44]"
                  }`}
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-[#df9a62]" : ""}`}
                  />
                  {/* Active Indicator Line */}
                  {servicesOpen && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#df9a62] rounded-full" />
                  )}
                </button>

                {/* --- PREMIUM MEGA MENU --- */}
                <div
                  className={`fixed top-[72px] left-1/2 -translate-x-1/2 w-[min(1100px,calc(100vw-40px))] max-h-[80vh] overflow-y-auto 
                    bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 
                    transition-all duration-300 origin-top z-50
                    /* Custom Scrollbar for Theme */
                    [scrollbar-width:thin] [scrollbar-color:#df9a62_#f3f4f6] 
                    [&::-webkit-scrollbar]:w-2 
                    [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-[#df9a62] [&::-webkit-scrollbar-thumb]:rounded-full 
                    hover:[&::-webkit-scrollbar-thumb]:bg-[#c58b55]
                    ${
                      servicesOpen
                        ? "opacity-100 scale-100 visible pointer-events-auto translate-y-0"
                        : "opacity-0 scale-95 invisible pointer-events-none -translate-y-2"
                    }`}
                >
                  {/* Service Groups Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {serviceGroups.map((group) => (
                      <div key={group.title} className="space-y-4">
                        
                        {/* Group Header with Icon */}
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                          <div className="p-2 rounded-lg bg-[#201f44]/5 flex items-center justify-center">
                            <ServiceIcon type={group.icon} />
                          </div>
                          <h4 className="text-[#201f44] font-bold text-base tracking-tight">
                            {group.title}
                          </h4>
                        </div>

                        {/* Service Item Links */}
                        <ul className="space-y-2">
                          {group.items.map((service) => (
                            <li key={typeof service === 'object' ? service.name : service}>
                              <Link
                                href={typeof service === 'object' ? service.href : "#services"}
                                onClick={() => setServicesOpen(false)}
                                className="group/item flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-[#201f44] hover:bg-[#201f44]/5 transition-all duration-200"
                              >
                                <span className="line-clamp-1">{typeof service === 'object' ? service.name : service}</span>
                                {/* Arrow appears on hover with Gold color */}
                                <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-[#df9a62] text-lg font-bold">
                                  →
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </div>
                    ))}
                  </div>

                  {/* Dropdown CTA Banner - Themed */}
{serviceGroups[0]?.items.map((iso) => (
  <Link
    key={iso.href}
    href={iso.href}
    onClick={() => setServicesOpen(false)}
    className="block px-4 py-2 text-sm transition hover:bg-black/5"
  >
    {iso.name}
  </Link>
))}

                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href || "/"}
                className="font-bold text-sm xl:text-base text-slate-700 hover:text-[#201f44] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#df9a62] transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex shrink-0">
          <Link
            href="#contact"
            className="bg-[#201f44] text-white px-6 py-2.5 rounded-full font-bold text-sm xl:text-base hover:bg-[#df9a62] hover:shadow-lg hover:shadow-[#df9a62]/30 transition-all whitespace-nowrap border border-transparent hover:border-[#df9a62]"
          >
            CONTACT TODAY
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden p-2 text-[#201f44] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU ACCORDION */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl p-4 sm:p-6 flex flex-col gap-2 max-h-[82vh] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#df9a62_#f1f5f9] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#df9a62] [&::-webkit-scrollbar-thumb]:rounded-full animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="border-b border-gray-100 pb-2">
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  className="w-full flex items-center justify-between text-base sm:text-lg font-bold text-[#201f44] py-3 px-2 cursor-pointer"
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[#df9a62]" : ""}`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-2 mt-1 space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    {serviceGroups.map((group) => (
                      <div key={group.title}>
                        <p className="text-xs font-bold text-[#df9a62] uppercase tracking-wider mb-2 px-1">
                          {group.title}
                        </p>
                        <div className="space-y-1">
                          {group.items.map((service) => (
                            <Link
                              key={typeof service === 'object' ? service.name : service}
                              href={typeof service === 'object' ? service.href : "#services"}
                              onClick={closeMobile}
                              className="flex items-center justify-between text-sm sm:text-base font-medium text-slate-700 py-2 px-3 rounded-lg hover:text-[#201f44] hover:bg-white transition-all"
                            >
                              <span>{typeof service === 'object' ? service.name : service}</span>
                              <span className="text-sm text-[#df9a62] font-bold">→</span>
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
                className="text-base sm:text-lg font-bold text-slate-700 py-3 px-2 border-b border-gray-100 block hover:bg-gray-50 rounded-lg hover:text-[#201f44]"
              >
                {item.name}
              </Link>
            )
          )}
          
          <Link
            href="#contact"
            onClick={closeMobile}
            className="bg-[#201f44] text-white text-center block w-full py-3.5 rounded-xl font-bold text-base mt-3 shadow-lg shadow-[#201f44]/20 active:scale-[0.99] transition-all hover:bg-[#df9a62]"
          >
            Contact Us Today
          </Link>
        </div>
      )}
    </header>
  );
}