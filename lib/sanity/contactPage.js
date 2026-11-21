import { sanityClient, sanityConfigured } from './client';
import {
  contactPageDefaults,
  mergeContactPageContent,
} from './contactPageContent';
import { contactPageQuery } from './queries';

export async function getContactPageContent() {
  if (!sanityConfigured) return contactPageDefaults;

  try {
    const content = await sanityClient
      .withConfig({ useCdn: false })
      .fetch(contactPageQuery);
    return mergeContactPageContent(content);
  } catch (error) {
    console.error('Unable to load Sanity Contact Page content:', error);
    return contactPageDefaults;
  }
}
