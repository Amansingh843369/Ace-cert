import { createPageMetadata } from '../../lib/seo';

export const metadata = {
  ...createPageMetadata('/verify_certificate'),
  title: 'Certificate Verification | ACE-CERT',
};

export default function RouteLayout({ children }) { return children; }
