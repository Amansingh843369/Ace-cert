import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata('/contact', {
  openGraphImage: {
    url: '/acecert-logo.png',
    width: 512,
    height: 512,
    alt: 'ACE-CERT',
  },
});

export default function RouteLayout({ children }) { return children; }
