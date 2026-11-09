import { isoStandards } from '../data/isoStandards';

const brand = 'ACE-CERT';

export const routeSeo = {
  '/': {
    title: 'ISO Certification, Training & Inspection Services',
    description: 'Explore ISO certification, inspection, and training services from ACE-CERT. Find management system standards and practical support for your organization.',
  },
  '/about': { title: 'About ACE-CERT | Certification & Training', description: 'Learn about ACE-CERT, our certification and training services, and how we support organizations working toward recognized management standards.' },
  '/contact': { title: 'Contact ACE-CERT | ISO Certification Support', description: 'Contact ACE-CERT to discuss ISO certification, inspection, training, or management system support for your organization.' },
  '/gdp': { title: 'GDP Certification | Good Distribution Practice', description: 'Explore Good Distribution Practice certification support for pharmaceutical storage, handling, and distribution operations.' },
  '/haccp': { title: 'HACCP Certification | Food Safety Support', description: 'Learn about HACCP certification support for identifying food safety hazards and managing critical control points.' },
  '/halal': { title: 'Halal Certification | ACE-CERT', description: 'Explore Halal certification support and learn how organizations can address applicable halal requirements across their operations.' },
  '/management-certification': { title: 'ISO Management System Certifications', description: 'Browse and search management system standards including ISO 9001, ISO 14001, ISO 27001, and more. Explore each standard and its scope.' },
  '/presence-international': { title: 'International ISO Certification Support', description: 'Explore international ISO certification support from ACE-CERT, view countries served, and contact our team about certification availability.' },
  '/training': { title: 'ISO Auditor & Management System Training', description: 'Explore ISO auditor and management system training programs, course topics, durations, and options for your professional development.' },
  '/verify_certificate': { title: 'Certificate Verification | ACE-CERT', description: 'Use the ACE-CERT certificate verification page to check a certificate number against available verification records.', noIndex: true },
};

export function createPageMetadata(path, overrides = {}) {
  const standard = isoStandards.find((item) => item.href === path);
  const standardSeo = standard
    ? {
        title: standard.certifiable
          ? `${standard.code} Certification | ${standard.category}`
          : `${standard.code} ${standard.category} Guidance`,
        description: `${standard.description} ${standard.benefit}`,
      }
    : {};
  const seo = { ...standardSeo, ...(routeSeo[path] || {}), ...overrides };
  const title = `${seo.title} | ${brand}`;
  const description = seo.description;
  const metadata = {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: brand, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };

  if (seo.noIndex) metadata.robots = { index: false, follow: true };
  return metadata;
}