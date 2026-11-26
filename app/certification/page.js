import ManagementCertificationDirectory from '../management-certification/ManagementCertificationDirectory';
import { sanityClient, sanityConfigured } from '../../lib/sanity/client';
import { certificationsQuery } from '../../lib/sanity/queries';
import { certifications as fallbackCertifications } from '../../data/certifications';

const title = 'ISO Management System Certifications | ACE Certifications';
const description = 'Explore ACE Certifications’ ISO management system standards. Search ISO 9001, ISO 14001, ISO 27001, ISO 45001, and more.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/certification' },
  openGraph: {
    title,
    description: 'Browse and search ISO management system certifications offered by ACE Certifications.',
    url: '/certification',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'Browse and search ISO management system standards offered by ACE Certifications.',
  },
};

export default async function CertificationPage() {
  let certificationItems = fallbackCertifications;

  if (sanityConfigured) {
    try {
      const sanityCertifications = await sanityClient.fetch(certificationsQuery);
      if (Array.isArray(sanityCertifications) && sanityCertifications.length > 0) {
        const sanityByCode = new Map(
          sanityCertifications
            .filter((item) => item.active !== false)
            .map((item) => [item.code?.trim().toLowerCase(), item])
        );

        certificationItems = fallbackCertifications.map((fallbackItem) => {
          const sanityItem = sanityByCode.get(fallbackItem.code?.trim().toLowerCase());
          return sanityItem
            ? {
                id: sanityItem._id,
                code: sanityItem.code,
                title: sanityItem.title,
                type: sanityItem.type,
                href: fallbackItem.href,
                active: sanityItem.active,
              }
            : fallbackItem;
        });
      }
    } catch (error) {
      console.error('Unable to load certifications from Sanity:', error);
    }
  }

  return (
    <ManagementCertificationDirectory
      initialStandards={certificationItems}
    />
  );
}
