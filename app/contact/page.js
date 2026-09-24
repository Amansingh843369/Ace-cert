import React from 'react';

export default function ContactPage() {
  return (
    <main className="font-sans bg-[#F9FAFB] min-h-screen pb-10 sm:pb-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-28 sm:pt-28 sm:pb-36 px-4 sm:px-6 lg:px-12 bg-gray-900 text-white overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute bottom-0 -left-20 w-72 h-72 bg-red-800 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 w-fit mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-red-200">
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Let's Build <span className="text-red-500">Excellence</span> Together
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Whether you need a consultation, have a query about our certification process, or just want to explore possibilities, our team is ready to help.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTACT SECTION ================= */}
      <section className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto -mt-16 sm:-mt-24 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            
            {/* Location Card */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-lg shadow-gray-200/50 flex items-start gap-4 sm:gap-6 hover:border-red-200 transition-colors group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Head Office</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  123 Business Avenue, Suite 400<br />
                  Tech District, New York, NY 10001<br />
                  United States
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-lg shadow-gray-200/50 flex items-start gap-4 sm:gap-6 hover:border-red-200 transition-colors group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-1">For general inquiries:</p>
                <a href="mailto:info@acecert.com" className="text-red-600 font-semibold hover:underline break-all">info@acecert.com</a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-lg shadow-gray-200/50 flex items-start gap-4 sm:gap-6 hover:border-red-200 transition-colors group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-1">Mon-Fri from 9am to 6pm:</p>
                <a href="tel:+12345678900" className="text-gray-900 font-semibold hover:text-red-600 transition-colors">+1 (234) 567-8900</a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-6 sm:p-10 border border-gray-100 shadow-2xl shadow-red-900/5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-8 text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours.</p>

            <form className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="John" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-gray-800"
                  />
                </div>
                
                {/* Last Name */}
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Doe" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-gray-800"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@company.com" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-gray-800"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Service Required</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-gray-800 cursor-pointer appearance-none"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="iso9001">ISO 9001 Certification</option>
                  <option value="iso45001">ISO 45001 Certification</option>
                  <option value="audit">Internal Audit Services</option>
                  <option value="training">Corporate Training</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Tell us about your requirements..." 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-gray-800 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}