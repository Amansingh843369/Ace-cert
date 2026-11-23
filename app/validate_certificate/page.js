'use client';

import { useState } from 'react';
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Hash,
  Mail,
  Search,
  ShieldCheck,
} from 'lucide-react';

const statusLabels = {
  valid: 'Valid',
  expired: 'Expired',
  suspended: 'Suspended',
  revoked: 'Revoked',
  'not-yet-valid': 'Not yet valid',
};

function formatDate(value) {
  if (!value) return 'Not specified';

  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`));
}

export default function CertificateVerificationPage() {
  const [form, setForm] = useState({
    companyName: '',
    registeredEmail: '',
    certificateNumber: '',
  });
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSearched(false);
    setCertificate(null);
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSearched(false);
    setCertificate(null);
    setError('');

    try {
      const response = await fetch('/api/certificate-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const payload = await response.json();

      if (!response.ok) {
        setError(payload.error || 'Unable to verify this certificate right now.');
        return;
      }

      setCertificate(payload.certificate || null);
    } catch (requestError) {
      console.error('Certificate verification request failed:', requestError);
      setError('Could not connect to certificate verification. Please try again.');
    } finally {
      setSearched(true);
      setLoading(false);
    }
  };

  const inputClassName =
    'min-h-16 w-full rounded-xl border border-white/10 bg-white px-5 py-4 text-base text-[#0B1739] shadow-sm outline-none transition placeholder:text-slate-500 focus:border-red-400 focus:ring-4 focus:ring-red-500/20 sm:text-lg';

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-16 font-sans text-[#0B1739]">
      <section
        aria-labelledby="certificate-title"
        className="relative isolate overflow-hidden bg-[#101827] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-56 h-[34rem] w-[34rem] rounded-full border-[60px] border-white/[0.04] sm:-right-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="flex items-center justify-center gap-3 text-center">
            <BadgeCheck
              aria-hidden="true"
              className="h-8 w-8 shrink-0 text-white sm:h-10 sm:w-10"
              strokeWidth={2.5}
            />
            <h1
              id="certificate-title"
              className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
            >
              Find Certificate
            </h1>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-slate-300 sm:text-base">
            Verify an ACE-CERT record using the company name, registered email,
            and certificate number.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-5 sm:mt-10 sm:grid-cols-2 sm:gap-y-6"
          >
            <div>
              <label
                htmlFor="companyName"
                className="mb-2 block text-base font-semibold text-white sm:text-lg"
              >
                Company Name <span className="text-red-300">*</span>
              </label>
              <div className="relative">
                <Building2
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                />
                <input
                  autoComplete="organization"
                  className={`${inputClassName} pl-12 disabled:cursor-wait disabled:opacity-70`}
                  id="companyName"
                  maxLength={200}
                  name="companyName"
                  disabled={loading}
                  onChange={(event) =>
                    updateField('companyName', event.target.value)
                  }
                  placeholder="Enter company name as registered"
                  required
                  value={form.companyName}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="registeredEmail"
                className="mb-2 block text-base font-semibold text-white sm:text-lg"
              >
                Registered Email <span className="text-red-300">*</span>
              </label>
              <div className="relative">
                <Mail
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                />
                <input
                  autoComplete="email"
                  className={`${inputClassName} pl-12 disabled:cursor-wait disabled:opacity-70`}
                  id="registeredEmail"
                  maxLength={254}
                  name="registeredEmail"
                  disabled={loading}
                  onChange={(event) =>
                    updateField('registeredEmail', event.target.value)
                  }
                  placeholder="Enter the email registered with ACE-CERT"
                  required
                  type="email"
                  value={form.registeredEmail}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="certificateNumber"
                className="mb-2 block text-base font-semibold text-white sm:text-lg"
              >
                Certificate Number <span className="text-red-300">*</span>
              </label>
              <div className="relative">
                <Hash
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                />
                <input
                  autoComplete="off"
                  className={`${inputClassName} pl-12 disabled:cursor-wait disabled:opacity-70`}
                  id="certificateNumber"
                  maxLength={120}
                  name="certificateNumber"
                  disabled={loading}
                  onChange={(event) =>
                    updateField('certificateNumber', event.target.value)
                  }
                  placeholder="Enter certificate number (e.g. QMS 260703 00087)"
                  required
                  value={form.certificateNumber}
                />
              </div>
            </div>

            <button
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-base font-extrabold uppercase tracking-wide text-[#0B1739] shadow-lg transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-400/60 disabled:cursor-wait disabled:opacity-70 sm:col-span-2 sm:text-lg"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                'Verifying...'
              ) : (
                <>
                  <Search aria-hidden="true" className="h-6 w-6" />
                  Verify Certificate
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {searched && (
        <section
          aria-live="polite"
          aria-labelledby="verification-result-title"
          className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <h2 id="verification-result-title" className="sr-only">
            Certificate verification result
          </h2>

          {error ? (
            <div className="rounded-2xl border border-red-200 bg-white p-5 text-sm leading-6 text-red-800 shadow-sm sm:p-6">
              {error}
            </div>
          ) : certificate ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      certificate.verified
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    <ShieldCheck aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0B1739]">
                      {certificate.verified
                        ? 'Certificate verified'
                        : 'Certificate record found'}
                    </h3>
                    <p className="text-sm text-slate-600">
                      ACE-CERT certificate record
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-sm font-bold ${
                    certificate.verified
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-amber-50 text-amber-800'
                  }`}
                >
                  {statusLabels[certificate.status] || 'Needs review'}
                </span>
              </div>

              <dl className="mt-6 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Certificate number
                  </dt>
                  <dd className="mt-1 break-words font-semibold text-[#0B1739]">
                    {certificate.certificateNumber}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Company
                  </dt>
                  <dd className="mt-1 break-words font-semibold text-[#0B1739]">
                    {certificate.companyName}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Standard
                  </dt>
                  <dd className="mt-1 break-words font-semibold text-[#0B1739]">
                    {certificate.standard}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Issue date
                  </dt>
                  <dd className="mt-1 inline-flex items-center gap-2 font-semibold text-[#0B1739]">
                    <CalendarDays
                      aria-hidden="true"
                      className="h-4 w-4 text-slate-500"
                    />
                    {formatDate(certificate.issueDate)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Expiry date
                  </dt>
                  <dd className="mt-1 inline-flex items-center gap-2 font-semibold text-[#0B1739]">
                    <CalendarDays
                      aria-hidden="true"
                      className="h-4 w-4 text-slate-500"
                    />
                    {formatDate(certificate.expiryDate)}
                  </dd>
                </div>
              </dl>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="font-semibold text-[#0B1739]">
                No matching certificate found.
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Check the company name, registered email, and certificate
                number, then try again.
              </p>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
