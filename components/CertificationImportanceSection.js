'use client';

import Image from 'next/image';
import { ArrowUpRight, CircleCheck } from 'lucide-react';
import {
  certificationDetailImages,
  certificationImages,
} from '../data/certificationImages';



export const getCertificationImage = (title) =>
  certificationImages[title]?.trim();

export default function CertificationImportanceSection({
  id,
  title,
  description,
  benefits,
  certification,
  imageSrc,
}) {
  const content = certification;
  const image =
    certificationDetailImages[title]?.trim() ||
    imageSrc ||
    getCertificationImage(title) ||
    content?.heroImageUrl;
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

        <figure className="relative aspect-[1055/1491] w-full overflow-hidden rounded-[1.75rem] bg-red-50 ring-1 ring-black/5 shadow-[0_16px_45px_rgba(17,24,39,0.10)] lg:aspect-auto lg:rounded-[2rem]">
          <Image
            src={image}
            alt={content?.heroImageAlt || `${title} certification`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
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
