import { connection } from 'next/server';
import ContactForm from '../../components/ContactForm';
import { getContactPageContent } from '../../lib/sanity/contactPage';

export default async function ContactPage() {
  await connection();
  const content = await getContactPageContent();
  const { hero, info, form } = content;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-800">
      <section className="relative overflow-hidden bg-[#FFF8F7] px-4 py-10 text-center sm:py-14">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
            alt={hero.backgroundImageAlt}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-red-600 drop-shadow-sm sm:text-5xl md:text-6xl">
            {hero.title}
          </h1>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-6 max-w-7xl px-4 pb-14 sm:-mt-8 sm:px-6 lg:-mt-10 lg:px-8 lg:pb-20">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div className="order-2 flex flex-col justify-between space-y-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-32px_rgba(11,23,57,0.28)] sm:p-8 lg:order-1 lg:p-9">
            <div>
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">{info.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B1739] sm:text-3xl">{info.title}</h2>
              </div>
              <p className="mb-6 text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">{info.companyName}</p>

              <div className="mt-6 space-y-6 sm:space-y-7">
                <ContactInfo icon="location" label={info.addressLabel} text={info.address} />
                <ContactInfo icon="phone" label={info.phoneLabel}>
                  <a href={`tel:${info.phoneLink}`} className="font-medium transition-colors hover:text-red-600">{info.phoneDisplay}</a>
                </ContactInfo>
                <ContactInfo icon="email" label={info.emailLabel}>
                  <a href={`mailto:${info.email}`} className="transition-colors hover:text-red-600">{info.email}</a>
                </ContactInfo>
                <ContactInfo icon="clock" label={info.hoursLabel}>
                  {info.hours}<br />
                  <span className="text-xs text-gray-400">{info.weekendLabel}</span>
                </ContactInfo>
              </div>
            </div>
          </div>
          <ContactForm content={form} />
        </div>
      </section>

    </main>
  );
}

function ContactInfo({ icon, label, text, children }) {
  const paths = {
    location: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
    phone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    clock: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  };

  return (
    <div className="group flex items-start gap-4 sm:gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-sm transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{paths[icon]}</svg>
      </div>
      <div>
        <h3 className="mb-1 text-base font-bold text-[#0B1739] sm:text-lg">{label}</h3>
        <p className="whitespace-pre-line break-all text-sm leading-relaxed text-slate-600">{text || children}</p>
      </div>
    </div>
  );
}
