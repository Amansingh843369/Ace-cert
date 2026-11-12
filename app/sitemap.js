import { isoStandards } from '../data/isoStandards';
import { routeSeo } from '../lib/seo';

const siteUrl = 'https://ace-cert.com';

export default function sitemap() {
  const staticRoutes = Object.entries(routeSeo)
    .filter(([, page]) => !page.noIndex)
    .map(([path]) => ({
      url: `${siteUrl}${path === '/' ? '' : path}`,
      changeFrequency: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : path === '/certification' ? 0.9 : 0.7,
    }));

  const standardRoutes = isoStandards.map((standard) => ({
    url: `${siteUrl}${standard.href}`,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...standardRoutes];
}