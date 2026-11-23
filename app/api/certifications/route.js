import { sanityClient, sanityConfigured, urlFor } from '../../../lib/sanity/client';
import { certificationByCodeQuery } from '../../../lib/sanity/queries';

export async function GET(request) {
  const code = request.nextUrl.searchParams.get('code')?.trim();
  if (!code) {
    return Response.json({ error: 'A certification code is required.' }, { status: 400 });
  }

  if (!sanityConfigured) {
    return Response.json({ error: 'Sanity is not configured.' }, { status: 503 });
  }

  try {
    const certification = await sanityClient.fetch(certificationByCodeQuery, { code });
    if (!certification) {
      return Response.json({ certification: null });
    }

    return Response.json({
      certification: {
        ...certification,
        heroImageUrl: urlFor(certification.heroImage)?.width(1200).url() || null,
      },
    });
  } catch (error) {
    console.error(`Unable to load certification "${code}" from Sanity:`, error);
    return Response.json({ error: 'Unable to load certification content.' }, { status: 500 });
  }
}