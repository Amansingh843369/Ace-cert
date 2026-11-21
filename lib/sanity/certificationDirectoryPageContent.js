import { sanityClient, sanityConfigured } from './client';
import { certificationDirectoryPageQuery } from './queries';
import { certificationDirectoryPageDefaults } from './certificationDirectoryDefaults';

export function mergeCertificationDirectoryPageContent(content) {
  if (!content) return certificationDirectoryPageDefaults;

  return {
    ...certificationDirectoryPageDefaults,
    ...content,
    hero: {
      ...certificationDirectoryPageDefaults.hero,
      ...content.hero,
    },
  };
}

export async function getCertificationDirectoryPageContent() {
  if (!sanityConfigured) return certificationDirectoryPageDefaults;

  try {
    const content = await sanityClient
      .withConfig({ useCdn: false })
      .fetch(certificationDirectoryPageQuery);
    return mergeCertificationDirectoryPageContent(content);
  } catch (error) {
    console.error('Unable to load Sanity certification listing content:', error);
    return certificationDirectoryPageDefaults;
  }
}
