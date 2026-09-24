"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 pt-16 pb-8 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* --- MAIN FOOTER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-200">
          
          {/* COLUMN  1: Logo & About Us */}
          <div className="lg:col-span-5 space-y-2">
            {/* LOGO  */}
          <div className="flex items-start">
  <img
    src="/acecert-logo.png"
    alt="Company Logo"
    className="h-16 sm:h-20 md:h-17 w-auto object-contain " 
  />
</div>

            {/* About Us Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md text-justify sm:text-left">
               We guide
              you through internal reviews, evidence preparation, audit coordination,
              corrective actions, and final certification or report completion. Our
              team stays engaged until the process is successfully closed and
              outcomes are achieved.
            </p>
          </div>

          {/* COLUMN 2: ACERT Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              ACERT Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  Certification
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  Inspection
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  Training
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Policy */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Policy
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  Feedback form
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  Documents
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  What we do
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  Company
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  About US
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  Feedback Form
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#ea580c] transition-colors">
                  Certification
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM ROW: Copyright & Social Media --- */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          
          {/* Copyright */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} – ACERT. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="font-semibold text-slate-700 hidden sm:inline-block">
              Follow us:
            </span>
            
            <div className="flex items-center gap-3 text-slate-600">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-slate-100 hover:bg-[#ea580c] hover:text-white transition-all border border-slate-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>

              {/* Twitter / X */}
              <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-slate-100 hover:bg-[#ea580c] hover:text-white transition-all border border-slate-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>

              {/* Pinterest */}
              <a href="#" aria-label="Pinterest" className="p-2 rounded-full bg-slate-100 hover:bg-[#ea580c] hover:text-white transition-all border border-slate-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-slate-100 hover:bg-[#ea580c] hover:text-white transition-all border border-slate-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-slate-100 hover:bg-[#ea580c] hover:text-white transition-all border border-slate-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>

              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-slate-100 hover:bg-[#ea580c] hover:text-white transition-all border border-slate-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}