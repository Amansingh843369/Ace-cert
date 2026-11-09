import { createPageMetadata } from '../../lib/seo';

export const metadata = {
  ...createPageMetadata('/management-certification'),
  title: 'ISO Management System Certifications | ACE-CERT',
};

export default function ManagementCertificationLayout({ children }) {
  return children;
}