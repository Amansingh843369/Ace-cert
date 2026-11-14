
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    purpose: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-800">
      <section className="relative overflow-hidden bg-[#0B1739] px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border-[40px] border-white/5 sm:h-[28rem] sm:w-[28rem]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-200">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red-500" />
              Contact ACE-CERT
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Contact <span className="text-red-400">Us</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Have a question about certification? Our team is ready to help you find the right next step.
            </p>
            <nav aria-label="Breadcrumb" className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-300">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <span aria-hidden="true" className="text-red-400">/</span>
              <span aria-current="page" className="text-white">Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-6 max-w-7xl px-4 pb-14 sm:-mt-8 sm:px-6 sm:pb-18 lg:-mt-10 lg:px-8 lg:pb-20">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          
          {/* LEFT COLUMN: CONTACT INFO CARD */}
          <div className="order-2 flex flex-col justify-between space-y-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-32px_rgba(11,23,57,0.28)] sm:p-8 lg:order-1 lg:p-9">
            <div>
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">We’re here to help</p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B1739] sm:text-3xl">
                  Get in touch
                </h2>
              </div>
              
              <p className="mb-6 text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
                Universal Certification Conformity Limited
              </p>

              {/* Info Items List */}
              <div className="mt-6 space-y-6 sm:space-y-7">
                
                {/* Address */}
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-[#0B1739] sm:text-lg">Our Location</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      11-12 St. Andrew Square,<br />
                      Edinburgh, EH2 2AF,<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-[#0B1739] sm:text-lg">Call Us</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      <a href="tel:+442079460000" className="font-medium transition-colors hover:text-red-600">+44 20 7946 0000</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-[#0B1739] sm:text-lg">Email Us</h3>
                    <p className="break-all text-sm leading-relaxed text-slate-600">
                      <a href="mailto:info@acecert.com" className="transition-colors hover:text-red-600">info@acecert.com</a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-[#0B1739] sm:text-lg">Working Hours</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      <span className="text-xs text-gray-400">Closed on Weekends</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM CARD */}
          <div className="order-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-32px_rgba(11,23,57,0.28)] sm:p-8 lg:order-2 lg:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Have a question?</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B1739] sm:text-3xl">
              Send Us a Message
            </h2>
            <p className="mb-6 mt-2 text-sm leading-6 text-slate-500 sm:mb-8 sm:text-base">
              Fill in your details below and our support team will respond within 24 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                />
              </div>

              <div>
                <label htmlFor="purpose" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Purpose of Contact *</label>
                <select
                  id="purpose"
                  name="purpose"
                  required
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all cursor-pointer"
                >
                  <option value="" disabled>Select a Service Option</option>
                  <option value="Consultation">Consultation Service</option>
                  <option value="Support">Support Request</option>
                  <option value="General">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* ================= 3. MAP SECTION ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mb-5 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Visit us</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B1739] sm:text-3xl">Find our office</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
            11-12 St. Andrew Square, Edinburgh, EH2 2AF, United Kingdom
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2.5 shadow-[0_20px_60px_-32px_rgba(11,23,57,0.28)] sm:p-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[2.4/1]">
            <iframe
              title="Map to the ACE-CERT office in Edinburgh"
              src="https://maps.google.com/maps?q=11-12%20St.%20Andrew%20Square,%20Edinburgh,%20EH2%202AF,%20United%20Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            ></iframe>
          </div>
        </div>
      </section>

    </main>
  );
}