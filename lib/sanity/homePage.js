import { sanityClient, sanityConfigured } from './client';
import { homePageDefaults, mergeHomePageContent } from './homePageContent';
import { homePageQuery } from './queries';

export async function getHomePageContent() {
  if (!sanityConfigured) return homePageDefaults;

  try {
    const content = await sanityClient
      .withConfig({ useCdn: false })
      .fetch(homePageQuery);
    return mergeHomePageContent(content);
  } catch (error) {
    console.error('Unable to load Sanity Home Page content:', error);
    return homePageDefaults;
  }
}
