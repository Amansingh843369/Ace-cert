'use client';

import { useState } from 'react';

export default function ContactForm({ content }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(content.successMessage);
  };

  return (
    <div className="order-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-32px_rgba(11,23,57,0.28)] sm:p-8 lg:order-2 lg:p-9">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">
        {content.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B1739] sm:text-3xl">
        {content.title}
      </h2>
      <p className="mb-6 mt-2 text-sm leading-6 text-slate-500 sm:mb-8 sm:text-base">
        {content.description}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <div>
            <label htmlFor="firstName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">
              {content.firstNameLabel} *
            </label>
            <input id="firstName" name="firstName" type="text" required autoComplete="given-name" value={formData.firstName} onChange={handleChange} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/20" />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">
              {content.lastNameLabel}
            </label>
            <input id="lastName" name="lastName" type="text" autoComplete="family-name" value={formData.lastName} onChange={handleChange} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/20" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">
            {content.emailLabel} *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/20" />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">
            {content.phoneLabel} *
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" value={formData.phone} onChange={handleChange} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/20" />
        </div>

        <div>
          <label htmlFor="purpose" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">
            {content.purposeLabel} *
          </label>
          <select id="purpose" name="purpose" required value={formData.purpose} onChange={handleChange} className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-700 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/20">
            <option value="" disabled>{content.purposePlaceholder}</option>
            {content.purposeOptions.map((option, index) => (
              <option key={option.value || index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">
            {content.messageLabel} *
          </label>
          <textarea id="message" name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/20" />
        </div>

        <div className="pt-2">
          <button type="submit" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-red-600/50 active:bg-red-800 sm:w-auto sm:text-base">
            <span>{content.submitLabel}</span>
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
