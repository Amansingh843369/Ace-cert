import { isoStandards } from '../data/isoStandards';
import { routeSeo } from '../lib/seo';
import { sanityClient, sanityConfigured } from '../lib/sanity/client';
import { postSlugsQuery } from '../lib/sanity/queries';

const siteUrl = 'https://ace-cert.com';

export default async function sitemap() {
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

  let blogRoutes = [];
  if (sanityConfigured) {
    try {
      const slugs = await sanityClient.fetch(postSlugsQuery);
      blogRoutes = slugs.map((slug) => ({
        url: `${siteUrl}/blog/${slug}`,
        changeFrequency: 'weekly',
        priority: 0.65,
      }));
    } catch (error) {
      console.error('Unable to add Sanity blog routes to sitemap:', error);
    }
  }

  return [...staticRoutes, ...standardRoutes, ...blogRoutes];
}