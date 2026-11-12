import ManagementCertificationDirectory from '../management-certification/ManagementCertificationDirectory';

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

export default function CertificationPage() {
  return <ManagementCertificationDirectory />;
}
