import { sanityClient, sanityConfigured } from './client';
import { aboutPageDefaults, mergeAboutPageContent } from './aboutPageContent';
import { aboutPageQuery } from './queries';

export async function getAboutPageContent() {
  if (!sanityConfigured) return aboutPageDefaults;

  try {
    const content = await sanityClient
      .withConfig({ useCdn: false })
      .fetch(aboutPageQuery);
    return mergeAboutPageContent(content);
  } catch (error) {
    console.error('Unable to load Sanity About Page content:', error);
    return aboutPageDefaults;
  }
}
