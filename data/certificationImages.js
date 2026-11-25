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

export const certificationDetailImages = {
  "ISO 9001": "/big images/9001.jpg",
  "ISO 10002": "/big images/10002.jpg",
  "ISO 13009": "/big images/13009.jpg",
  "ISO 13485": "/big images/13485.png",
  "ISO 14001": "/big images/14001.jpg",
  "ISO 14064": "/big images/14064.jpg",
  "ISO 20000-1": "/big images/20000-1-service-management.png",
  "ISO 20121": "/big images/20121-stadium.png",
  "ISO 21001": "/big images/21001.jpg",
  "ISO 21401": "/big images/21401.jpg",
  "ISO 22000": "/big images/22000.jpg",
  "ISO 22301": "/big images/22301.jpg",
  "ISO 22716": "/big images/22716.jpg",
  "ISO 24161": "/big images/24161.jpg",
  "ISO 26000": "/big images/26000.jpg",
  "ISO 27001": "/big images/27001.jpg",
  "ISO 27002": "/big images/27002.jpg",
  "ISO 27017": "/big images/27017.jpg",
  "ISO 27018": "/big images/27018.jpg",
  "ISO 27701": "/big images/27701.jpg",
  "ISO 28000": "/big images/28000.jpg",
  "ISO 29000": "/big images/29000.jpg",
  "ISO 29001": "/big images/29001.jpg",
  "ISO 30000": "/big images/30000.jpg",
  "ISO 31000": "/big images/31000.jpg",
  "ISO 37001": "/big images/37001.jpg",
  "ISO 37301": "/big images/37301.jpg",
  "ISO 41001": "/big images/41001.jpg",
  "ISO 42001": "/big images/42001.jpg",
  "ISO 45001": "/big images/45001.jpg",
  "ISO 45003": "/big images/45003.jpg",
  "ISO 50001": "/big images/500001.jpg",
  "ISO 55000": "/big images/55000.jpg",
  "ISO 55001": "/big images/55001.jpg",
  HACCP: "/big images/haccp.jpg",
  GMP: "/big images/gmp.jpg",
  GLP: "/big images/glp.jpg",
  GDP: "/big images/gdp.jpg",
  GWP: "/big images/gwp.jpg",
  GHP: "/big images/GHP.jpg",
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
