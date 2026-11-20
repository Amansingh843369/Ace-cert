import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-01';

export const sanityConfigured =
  Boolean(projectId) && projectId !== 'replace-with-project-id';

export const sanityClient = createClient({
  projectId: projectId || 'replace-with-project-id',
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source) {
  const asset = source?.asset;
  if (!asset?._ref && !asset?._id) return null;
  return builder.image(source).auto('format').fit('max');
}

