'use client';

import Image from 'next/image';
import { ArrowUpRight, CircleCheck } from 'lucide-react';
import { certificationImages as localCertificationImages } from '../data/certificationImages';

const certificationImages = {
  GHP: '/certifications/ghp.png',
  GLP: '/certifications/glp.png',
  GMP: '/certifications/gmp.png',
  GWP: '/certifications/gwp.png',
  'ISO 10002':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
  'ISO 13009':
    'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85',
  'ISO 13485':
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
  'ISO 14001':
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85',
  'ISO 14064':
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85',
  'ISO 20000-1':
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85',
  'ISO 20121':
    'https://images.unsplash.com/photo-1774437786865-2546668c9747?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 21001':
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
  'ISO 21401':
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
  'ISO 22000':
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
  'ISO 22301':
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
  'ISO 22716':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
  'ISO 24161':
    'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 26000':
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85',
  'ISO 27001':
    'https://images.unsplash.com/photo-1792606302247-de06c712bb5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 27002':
    'https://images.unsplash.com/photo-1782945217386-300f33f22069?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 27017':
    'https://plus.unsplash.com/premium_photo-1764695613425-3d23cfa22150?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 27018':
    'https://plus.unsplash.com/premium_photo-1675329253565-24dfb38a4b59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 27701':
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85',
  'ISO 28000':
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
  'ISO 29000':
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85',
  'ISO 29001':
    'https://plus.unsplash.com/premium_photo-1682148795124-dac95dd91fd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 30000':
    'https://plus.unsplash.com/premium_photo-1681987448179-4a93b7975018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 31000':
    'https://plus.unsplash.com/premium_photo-1663089688175-227cd29e3b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 37001':
    ' https://images.unsplash.com/photo-1782849206621-29623b359224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 37301':
    'https://images.unsplash.com/photo-1691935443555-7208a4d326b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 41001':
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
  'ISO 42001':
    'https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 45001':
    'https://images.unsplash.com/photo-1732364247535-52f549ecb46a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 45003':
    ' https://plus.unsplash.com/premium_photo-1666299643987-9771de0efa4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 50001':
    'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'ISO 55000':
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85',
  'ISO 55001':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
  'ISO 9001':
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85',
};

export const getCertificationImage = (title) =>
  (localCertificationImages[title] || certificationImages[title])?.trim();

export default function CertificationImportanceSection({
  id,
  title,
  description,
  benefits,
  certification,
  imageSrc,
}) {
  const content = certification;
  const image = imageSrc || getCertificationImage(title) || content?.heroImageUrl;
  const sectionDescription =
    content?.importanceDescription || description;
  const sectionBenefits =
    Array.isArray(content?.benefits) && content.benefits.length > 0
      ? content.benefits
      : benefits;

  if (!image) {
    throw new Error(`Missing certification image for "${title}"`);
  }

  return (
    <section aria-labelledby={id} className="relative">
      <div className="grid items-stretch gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
        <div className="flex flex-col gap-6 md:gap-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-red-700">
              The value of certification
            </p>
            <h2
              id={id}
              className="whitespace-nowrap text-[clamp(1rem,3vw,2.75rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#111827]"
            >
              Why is <span className="text-[#E30613]">{title}</span> Important?
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#526581] sm:text-base sm:leading-8 md:text-lg">
              {sectionDescription}
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
            {sectionBenefits.map((benefit, index) => (
              <li
                key={`${index}-${benefit}`}
                className="group relative flex min-h-[96px] items-center gap-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_14px_30px_rgba(127,29,29,0.10)] md:min-h-[112px] md:gap-4 md:p-4"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-3 left-0 w-1 scale-y-0 rounded-r-full bg-red-600 transition-transform duration-300 group-hover:scale-y-100"
                />
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700 ring-1 ring-red-100 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white group-hover:ring-red-700 md:h-12 md:w-12">
                  <CircleCheck className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-red-500 md:text-[11px]">
                    Benefit {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="block text-sm font-semibold leading-snug text-slate-700 transition-colors group-hover:text-slate-950 md:text-[15px]">
                    {benefit}
                  </span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-600" />
              </li>
            ))}
          </ol>
        </div>

        <figure className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-red-50 ring-1 ring-black/5 shadow-[0_16px_45px_rgba(17,24,39,0.10)] sm:min-h-[480px] lg:min-h-[620px] lg:rounded-[2rem]">
          <Image
            src={image}
            alt={content?.heroImageAlt || `${title} certification`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className={title.startsWith('ISO ') ? 'object-contain p-8' : 'object-cover'}
            loading="lazy"
          />
          {title === 'ISO 9001' && (
            <figcaption className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-red-100 bg-white px-5 py-3 text-center shadow-lg">
              <span className="block text-lg font-extrabold text-[#1c2448]">ISO 9001</span>
              <span className="block text-xs font-semibold text-slate-600">Quality Management System</span>
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}
