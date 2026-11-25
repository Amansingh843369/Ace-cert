export const certificationImages = {
  "ISO 9001": "/acecert-logo.png",
  "ISO 24161": "/WhatsApp Image 2026-11-24 at 5.38.50 PM.jpeg",
  "ISO 27001": "/WhatsApp Image 2026-11-24 at 5.09.12 PM.jpeg",
  "ISO 27002": "/WhatsApp Image 2026-11-24 at 5.39.47 PM.jpeg",
  "ISO 27017": "/WhatsApp Image 2026-11-24 at 5.11.47 PM.jpeg",
  "ISO 27018": "/WhatsApp Image 2026-11-24 at 5.13.45 PM.jpeg",
  "ISO 27701": "/WhatsApp Image 2026-11-24 at 5.14.47 PM.jpeg",
  "ISO 28000": "/WhatsApp Image 2026-11-24 at 5.10.38 PM.jpeg",
  "ISO 29000": "/WhatsApp Image 2026-11-24 at 5.18.41 PM.jpeg",
  "ISO 29001": "/WhatsApp Image 2026-11-24 at 5.43.32 PM.jpeg",
  "ISO 30000": "/WhatsApp Image 2026-11-24 at 5.23.07 PM.jpeg",
  "ISO 31000": "/WhatsApp Image 2026-11-24 at 5.24.12 PM.jpeg",
  "ISO 37001": "/WhatsApp Image 2026-11-24 at 5.25.47 PM.jpeg",
  "ISO 37301": "/WhatsApp Image 2026-11-24 at 5.27.06 PM.jpeg",
  "ISO 41001": "/WhatsApp Image 2026-11-24 at 5.28.06 PM.jpeg",
  "ISO 42001": "/WhatsApp Image 2026-11-24 at 5.29.33 PM.jpeg",
  "ISO 45001": "/WhatsApp Image 2026-11-24 at 5.30.52 PM.jpeg",
  "ISO 45003": "/WhatsApp Image 2026-11-24 at 5.34.05 PM.jpeg",
  "ISO 55000": "/WhatsApp Image 2026-11-24 at 5.36.46 PM.jpeg",
  "ISO 55001": "/WhatsApp Image 2026-11-24 at 5.46.05 PM.jpeg",
};

export const certificationCodeToSlug = (code) =>
  code.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const getCertificationImageFile = (code, imageFiles) => {
  const slug = certificationCodeToSlug(code);
  const shortCode = slug.startsWith("iso-") ? slug.slice(4) : slug.split("-")[0];
  const compactSlug = slug.replace(/-/g, "");

  return (
    imageFiles[slug] ||
    imageFiles[shortCode] ||
    imageFiles[compactSlug] ||
    imageFiles[shortCode.replace(/-/g, "")]
  );
};
