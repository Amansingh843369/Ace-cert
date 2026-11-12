import { createPageMetadata } from '../../lib/seo';

export const metadata = {
  ...createPageMetadata('/certification'),
  title: 'ISO Management System Certifications | ACE-CERT',
};

export default function ManagementCertificationLayout({ children }) {
  return children;
}