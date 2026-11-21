export const certificationImages = {
  "ISO 37001": "/certifications/37001.png",
  "ISO 31000": "/certifications/31000.png",
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
