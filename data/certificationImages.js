export const certificationImages = {
  "ISO 9001": "/acecert-logo.png",
  "ISO 24161": "/24161.jpeg",
  "ISO 27001": "/27001.jpeg",
  "ISO 27002": "/27002.jpeg",
  "ISO 27017": "/27017.jpeg",
  "ISO 27018": "/27018.jpeg",
  "ISO 27701": "/27701.jpeg",
  "ISO 28000": "/28000.jpeg",
  "ISO 29000": "/29000.jpeg",
  "ISO 29001": "/29001.jpeg",
  "ISO 30000": "/30000.jpeg",
  "ISO 31000": "/31000.jpeg",
  "ISO 37001": "/37001.jpeg",
  "ISO 37301": "/37301.jpeg",
  "ISO 41001": "/41001.jpeg",
  "ISO 42001": "/42001.jpeg",
  "ISO 45001": "/45001.jpeg",
  "ISO 45003": "/45003.jpeg",
  "ISO 55000": "/55000.jpeg",
  "ISO 55001": "/55001.jpeg",
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
