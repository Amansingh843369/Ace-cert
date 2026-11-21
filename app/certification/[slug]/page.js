import { permanentRedirect } from 'next/navigation';
import { certifications } from '../../../data/certifications';

export default async function CertificationSlugPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const matched = certifications.find((item) => {
    const routeSlug = item.href.split('/').filter(Boolean).pop();
    const codeSlug = item.code?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return (
      routeSlug === slug ||
      routeSlug === `${slug}-certification` ||
      codeSlug === slug ||
      routeSlug?.startsWith(`${slug}-`)
    );
  });

  permanentRedirect(matched?.href || '/certification');
}