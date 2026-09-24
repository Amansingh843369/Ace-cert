
"use client";   
 import React, { useState } from 'react';

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="font-sans bg-[#F9FAFB] min-h-screen pb-16 sm:pb-24 text-gray-800 relative overflow-x-hidden">
      
      {/* ================= 1. HERO BANNER SECTION (SHORTER HEIGHT) ================= */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 text-white flex flex-col items-center justify-center">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>
        
        {/* Deep Red / Black Opacity Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-red-950/95 via-red-900/85 to-gray-900/95 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-0 bg-red-900/30"></div> 

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight sm:leading-none relative inline-block">
            Contact Us
            {/* Red decorative stroke effect */}
            <svg className="absolute -top-5 -right-6 w-24 sm:w-32 hidden sm:block text-red-500 opacity-60" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M5 25 C 50 5, 150 5, 195 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
               <path d="M15 35 C 70 20, 130 20, 185 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          </h1>
          
          {/* Breadcrumbs */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-300">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="text-red-500">/</span>
            <span className="text-white font-semibold">Contact Us</span>
          </div>
        </div>
      </section>

      {/* ================= 2. MAIN CONTENT GRID (MOVED DOWN, NO OVERLAP) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-10 sm:mt-16 md:mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: CONTACT INFO CARD */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Get In Touch
                </h2>
               
              </div>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold mb-6">
                Universal Certification Conformity Limited
              </p>

              {/* Info Items List */}
              <div className="mt-4 space-y-6 sm:space-y-7">
                
                {/* Address */}
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      <a href="tel:+442079460000" className="hover:text-red-600 transition-colors font-medium">+91 20 0000</a>
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
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed break-all">
                      <a href="mailto:info@yourcompany.co.uk" className="hover:text-red-600 transition-colors">info@yourcompany.co.uk</a>
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
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      <span className="text-xs text-gray-400">Closed on Weekends</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM CARD */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/50">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8">
              Fill in your details below and our support team will respond within 24 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16">
        <div className="bg-white rounded-3xl p-3 sm:p-4 border border-gray-200 shadow-xl shadow-gray-200/50 relative overflow-hidden">
          
          <div className="w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[480px] rounded-2xl overflow-hidden relative">
            <iframe
              title="Office Location Map"
              src="https://maps.google.com/maps?q=11-12%20St.%20Andrew%20Square,%20Edinburgh,%20EH2%202AF,%20United%20Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[10%] contrast-[105%]"
            ></iframe>

           
          </div>

        </div>
      </section>

    </main>
  );
}