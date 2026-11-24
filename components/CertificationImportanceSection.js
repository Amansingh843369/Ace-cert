'use client';

import Image from 'next/image';
import { ArrowUpRight, CircleCheck } from 'lucide-react';

const certificationImages = {
  GDP: '/2nd_images_ace-cert/gdp.jpg',
  GHP: '/2nd_images_ace-cert/ghp.png',
  GLP: '/2nd_images_ace-cert/glp.jpg',
  GMP: '/2nd_images_ace-cert/gmp.jpg',
  GWP: '/2nd_images_ace-cert/gwp.jpg',
  HACCP: '/2nd_images_ace-cert/haccp.jpg',
  'ISO 10002': '/2nd_images_ace-cert/10002.jpg',
  'ISO 13009': '/2nd_images_ace-cert/13009.jpg',
  'ISO 13485': '/2nd_images_ace-cert/13485.png',
  'ISO 14001': '/2nd_images_ace-cert/14001.jpg',
  'ISO 14064': '/2nd_images_ace-cert/14064.jpg',
  'ISO 20000-1': '/2nd_images_ace-cert/20000-1.jpg',
  'ISO 20121': '/2nd_images_ace-cert/20121.jpg',
  'ISO 21001': '/2nd_images_ace-cert/21001.jpg',
  'ISO 21401': '/2nd_images_ace-cert/21401.jpg',
  'ISO 22000': '/2nd_images_ace-cert/22000.png',
  'ISO 22301': '/2nd_images_ace-cert/22301.jpg',
  'ISO 22716': '/2nd_images_ace-cert/22716.jpg',
  'ISO 24161': '/2nd_images_ace-cert/24161.jpg',
  'ISO 26000': '/2nd_images_ace-cert/26000.jpg',
  'ISO 27001': '/2nd_images_ace-cert/27001.jpg',
  'ISO 27002': '/2nd_images_ace-cert/27002.jpg',
  'ISO 27017': '/2nd_images_ace-cert/27017.jpg',
  'ISO 27018': '/2nd_images_ace-cert/27018.jpg',
  'ISO 27701': '/2nd_images_ace-cert/27701.jpg',
  'ISO 28000': '/2nd_images_ace-cert/28000.png',
  'ISO 29000': '/2nd_images_ace-cert/29000.jpg',
  'ISO 29001': '/2nd_images_ace-cert/29001.jpg',
  'ISO 30000': '/2nd_images_ace-cert/30000.jpg',
  'ISO 31000': '/2nd_images_ace-cert/31000.jpg',
  'ISO 37001': '/2nd_images_ace-cert/37001.jpg',
  'ISO 37301': '/2nd_images_ace-cert/37301.jpg',
  'ISO 41001': '/2nd_images_ace-cert/41001.jpg',
  'ISO 42001': '/2nd_images_ace-cert/42001.jpg',
  'ISO 45001': '/2nd_images_ace-cert/45001.jpg',
  'ISO 45003': '/2nd_images_ace-cert/45003.png',
  'ISO 50001': '/2nd_images_ace-cert/500001.jpg',
  'ISO 55000': '/2nd_images_ace-cert/55000.jpg',
  'ISO 55001': '/2nd_images_ace-cert/55001.jpg',
  'ISO 9001': '/2nd_images_ace-cert/9001.jpg',
};

export default function CertificationImportanceSection({
  id,
  title,
  description,
  benefits,
  certification,
}) {
  const content = certification;
  const image = certificationImages[title] || content?.heroImageUrl;
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
            className="object-cover"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
