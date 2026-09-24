'use client';

import React, { useState } from 'react';

export default function CertificateVerificationPage() {
  const [certNumber, setCertNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!certNumber.trim()) return;

    setLoading(true);
    setSearched(false);

    // Jab aap API integrate karoge tab yahan backend call aayegi
    setTimeout(() => {
      setResult(null); // Abhi ke liye empty rakha hai
      setSearched(true);
      setLoading(false);
    }, 500);
  };

  return (
    <main className="font-sans bg-[#F8FAFC] min-h-screen pb-20 text-gray-800">
      
      {/* ================= HERO SECTION WITH ISO BACKGROUND ================= */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center justify-center text-center">
        
        {/* ISO Background Image */}
        <div 
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-950/90 via-slate-900/90 to-slate-950/95"></div>

        {/* Content */}
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/90 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg shadow-blue-500/20 mb-6 border border-blue-400/30">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Certification Verification</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Search for ISO Certifications
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Use the form below to search and verify ISO certifications issued by our certification body. Enter the certificate number to ensure the authenticity and validity of certifications.
          </p>

        </div>
      </section>

      {/* ================= SEARCH FORM CARD ================= */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-xl">
          
          <form onSubmit={handleSearch} className="space-y-4">
            <label htmlFor="certNumber" className="block text-sm font-bold text-gray-800 tracking-wide uppercase">
              Certificate Number *
            </label>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                id="certNumber"
                required
                placeholder="Enter Certificate Number"
                value={certNumber}
                onChange={(e) => setCertNumber(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl shadow-md shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm shrink-0 cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <span>Searching...</span>
                ) : (
                  <>
                    <span>Search</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </section>

      {/* ================= SEARCH RESULTS SECTION ================= */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Search Results</h2>
        
        {!searched && !loading && (
          <p className="text-sm text-gray-500">
            Results matching your search criteria will appear here.
          </p>
        )}

        {searched && (
          <div className="mt-4">
            {result ? (
              /* REAL RESULT CARD (Jab Backend API aayegi) */
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                {/* API Response UI */}
              </div>
            ) : (
              /* NOT FOUND STATE */
              <div className="bg-white rounded-2xl border border-red-100 p-6 text-center shadow-md">
                <p className="text-sm font-semibold text-red-600">
                  No certification record found for "{certNumber}".
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Please verify the certificate number and try again.
                </p>
              </div>
            )}
          </div>
        )}
      </section>

    </main>
  );
}