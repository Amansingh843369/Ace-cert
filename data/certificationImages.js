export const certificationImages = {
  "ISO 9001": "/9001.png",
  "ISO 10002": "/10002.png",
  "ISO 13009": "/13009.png",
  "ISO 13485": "/13485.png",
  "ISO 14001": "/14001.png",
  "ISO 14064": "/14064.png",
  "ISO 20000-1": "/20000-1.png",
  "ISO 20121": "/20121.png",
  "ISO 21001": "/21001.png",
  "ISO 21401": "/21401.png",
  "ISO 22000": "/22000.png",
  "ISO 22301": "/22301.png",
  "ISO 26000": "/26000.png",
  "ISO 22716": "/22716.png",
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
  "ISO 50001": "/50001.png",
  "ISO 55000": "/55000.jpeg",
  "ISO 55001": "/55001.jpeg",
  HACCP: "/haccp.jpeg",
  GMP: "/gmp.jpeg",
  GLP: "/glp.jpeg",
  GDP: "/gdp.jpeg",
  GWP: "/gwp.jpeg",
  GHP: "/ghp.jpeg",
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
