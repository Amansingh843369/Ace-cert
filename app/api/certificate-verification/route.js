import { sanityClient, sanityConfigured } from '../../../lib/sanity/client';
import { certificateVerificationQuery } from '../../../lib/sanity/queries';

const json = (body, status = 200) =>
  Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });

export async function POST(request) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 4096) {
    return json({ error: 'Request is too large.' }, 413);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Request body must be valid JSON.' }, 400);
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return json({ error: 'Enter the certificate details to verify.' }, 400);
  }

  const certificateNumber =
    typeof payload.certificateNumber === 'string'
      ? payload.certificateNumber.trim()
      : '';
  const companyName =
    typeof payload.companyName === 'string' ? payload.companyName.trim() : '';
  const registeredEmail =
    typeof payload.registeredEmail === 'string'
      ? payload.registeredEmail.trim()
      : '';

  if (!certificateNumber || !companyName || !registeredEmail) {
    return json({ error: 'All three certificate fields are required.' }, 400);
  }

  if (
    certificateNumber.length > 120 ||
    companyName.length > 200 ||
    registeredEmail.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registeredEmail)
  ) {
    return json({ error: 'Enter valid certificate details.' }, 400);
  }

  if (!sanityConfigured) {
    return json({ error: 'Certificate verification is not configured.' }, 503);
  }

  try {
    const records = await sanityClient.fetch(
      certificateVerificationQuery,
      {
        certificateNumber,
        companyName,
        registeredEmail,
      },
      { useCdn: false },
    );

    if (records.length > 1) {
      console.error('Certificate verification found duplicate matching records.');
      return json(
        { error: 'The certificate record needs review. Please contact ACE-CERT.' },
        500,
      );
    }

    const record = records[0];
    if (!record) {
      return json({ certificate: null });
    }

    const today = new Date().toISOString().slice(0, 10);
    let status = record.status;

    if (status === 'valid' && record.issueDate > today) {
      status = 'not-yet-valid';
    } else if (status === 'valid' && record.expiryDate && record.expiryDate < today) {
      status = 'expired';
    }

    return json({
      certificate: {
        certificateNumber: record.certificateNumber,
        companyName: record.companyName,
        standard: record.standard,
        issueDate: record.issueDate,
        expiryDate: record.expiryDate || null,
        status,
        verified: status === 'valid',
      },
    });
  } catch (error) {
    console.error('Certificate verification lookup failed:', error);
    return json(
      { error: 'Certificate verification is temporarily unavailable.' },
      500,
    );
  }
}
