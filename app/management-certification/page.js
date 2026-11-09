import ManagementCertificationDirectory from './ManagementCertificationDirectory';

export const metadata = {
  title: 'ISO Management System Certifications | ACE Certifications',
  description: 'Explore ACE Certifications’ ISO management system standards. Search ISO 9001, ISO 14001, ISO 27001, ISO 45001, and more.',
  alternates: { canonical: '/management-certification' },
  openGraph: {
    title: 'ISO Management System Certifications | ACE Certifications',
    description: 'Browse and search ISO management system certifications offered by ACE Certifications.',
    url: '/management-certification',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO Management System Certifications | ACE Certifications',
    description: 'Browse and search ISO management system standards offered by ACE Certifications.',
  },
};

export default function ManagementCertificationPage() {
  return <ManagementCertificationDirectory />;
}
