import { isoStandards } from '../data/isoStandards';

const brand = 'ACE-CERT';
const siteUrl = 'https://ace-cert.com';

export const routeSeo = {
  '/': {
    title: 'ISO Certification, Training & Inspection Services',
    description: 'Explore ISO certification, inspection, and training services from ACE-CERT. Find management system standards and practical support for your organization.',
    openGraphImage: {
      url: '/ace-cert-building-banner.png',
      width: 1365,
      height: 768,
      alt: 'ACE-CERT certification and compliance services',
    },
  },
  '/about': { title: 'About ACE-CERT | Certification & Training', description: 'Learn about ACE-CERT, our certification and training services, and how we support organizations working toward recognized management standards.' },
  '/contact': { title: 'Contact ACE-CERT | ISO Certification Support', description: 'Contact ACE-CERT in Edinburgh for ISO certification, inspection, training and management system support. Email info@ace-cert.com.' },
  '/privacy-policy': { title: 'Privacy Policy', description: 'Learn how ACE-CERT handles information shared through its website and how to contact us with privacy questions.' },
  '/gdp': { title: 'GDP Certification | Good Distribution Practice', description: 'Explore Good Distribution Practice certification support for pharmaceutical storage, handling, and distribution operations.' },
  '/haccp': { title: 'HACCP Certification | Food Safety Support', description: 'Learn about HACCP certification support for identifying food safety hazards and managing critical control points.' },
  '/gmp-certification': { title: 'GMP Certification | Good Manufacturing Practices', description: 'Explore Good Manufacturing Practices (GMP) and certification support for consistent production, quality controls, and product safety across manufacturing operations.' },
  '/glp-certification': { title: 'GLP Certification | Good Laboratory Practices', description: 'Explore Good Laboratory Practices (GLP) and certification support for reliable, consistent, and high-quality non-clinical laboratory studies and data.' },
  '/gwp-certification': { title: 'GWP Certification | Good Warehousing Practices', description: 'Learn about Good Warehouse Practices (GWP) for the proper storage, handling, and movement of products to protect quality and safety.' },
  '/ghp-certification': { title: 'GHP Certification | Good Hygiene Practices', description: 'Explore Good Hygiene Practices (GHP) for maintaining cleanliness and safety across food handling and processing environments.' },
  '/certification': { title: 'ISO Management System Certifications', description: 'Browse and search management system standards including ISO 9001, ISO 14001, ISO 27001, and more. Explore each standard and its scope.' },
  '/blog': { title: 'ISO Certification Guides & Compliance Blog', description: 'Read practical guides about ISO certification, compliance, quality management, cybersecurity, training, and business improvement.' },
  '/training': { title: 'ISO Auditor & Management System Training', description: 'Explore ISO auditor and management system training programs, course topics, durations, and options for your professional development.' },
  '/validate_certificate': { title: 'Certificate Verification', description: 'Use the ACE-CERT certificate verification page to check a certificate number against available verification records.', noIndex: true },
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
  const canonicalUrl = new URL(path, siteUrl).toString();
  const openGraph = {
    title,
    description,
    url: canonicalUrl,
    siteName: brand,
    type: 'website',
  };
  const twitter = { card: 'summary_large_image', title, description };

  if (seo.openGraphImage) {
    openGraph.images = [seo.openGraphImage];
    twitter.images = [{ url: seo.openGraphImage.url, alt: seo.openGraphImage.alt }];
  }

  const metadata = {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph,
    twitter,
  };

  if (seo.noIndex) metadata.robots = { index: false, follow: true };
  return metadata;
}