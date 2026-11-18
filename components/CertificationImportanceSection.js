import Image from 'next/image';
import { ArrowUpRight, CircleCheck } from 'lucide-react';

const certificationImages = {
  DPDPA: '/certifications/dpdpa.png',
  'FSSC 22000':
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
  GDPR: '/certifications/gdpr.png',
  GHP: '/certifications/ghp.png',
  GLP: '/certifications/glp.png',
  GMP: '/certifications/gmp.png',
  GWP: '/certifications/gwp.png',
  HIPAA:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
  'IATF 16949': '/certifications/1atf16949.jpeg',
  'ISO 10002': '/certifications/10002.png',
  'ISO 13009': '/certifications/13009.png',
  'ISO 13485': '/certifications/13485.png',
  'ISO 14001': '/certifications/14001.jpeg',
  'ISO 14064': '/certifications/14064.png',
  'ISO 20000-1': '/certifications/20000-1.png',
  'ISO 20121': '/certifications/20121.png',
  'ISO 21001': '/certifications/21001.jpeg',
  'ISO 21401': '/certifications/21401.png',
  'ISO 22000': '/certifications/22000.png',
  'ISO 22301': '/certifications/22301.png',
  'ISO 22716': '/certifications/22716.png',
  'ISO 24161':
    'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85',
  'ISO 26000': '/certifications/26000.jpeg',
  'ISO 27001':
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85',
  'ISO 27002': '/certifications/27002.png',
  'ISO 27017':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
  'ISO 27018': '/certifications/27018.png',
  'ISO 27701':
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85',
  'ISO 28000': '/certifications/28000.png',
  'ISO 29000': '/certifications/29000.png',
  'ISO 29001': '/certifications/29001.png',
  'ISO 30000': '/certifications/30000.png',
  'ISO 31000': '/certifications/31000.png',
  'ISO 37001': '/certifications/37001.png',
  'ISO 37301': '/certifications/37301.jpeg',
  'ISO 41001': '/certifications/41001.png',
  'ISO 42001':
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
  'ISO 45001': '/certifications/45001.png',
  'ISO 45003':
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=85',
  'ISO 50001':
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85',
  'ISO 55000':
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85',
  'ISO 55001':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
  'ISO 9001': '/certifications/9001.png',
  'PCI DSS': '/certifications/pcidss.png',
  'SOC 2 Type 1': '/certifications/soc2type1.png',
  'SOC 2 Type 2': '/certifications/soc2type2.png',
  VAPT: '/certifications/vapt.png',
};

export default function CertificationImportanceSection({
  id,
  title,
  description,
  benefits,
}) {
  const image = certificationImages[title];

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
              className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.035em] text-[#111827] sm:text-4xl md:text-5xl"
            >
              Why is <span className="text-[#E30613]">{title}</span> Important?
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#526581] sm:text-base sm:leading-8 md:text-lg">
              {description}
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
            {benefits.map((benefit, index) => (
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
            alt={`${title} certification`}
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
