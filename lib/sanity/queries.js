import { groq } from 'next-sanity';

export const aboutPageQuery = groq`
  *[_type == "aboutPage" && _id == "aboutPage"][0] {
    hero,
    story,
    mission,
    vision,
    values,
    purpose,
    cta
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage" && _id == "homePage"][0] {
    hero,
    about,
    services,
    purpose,
    features,
    blog,
    cta
  }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage" && _id == "contactPage"][0] {
    hero,
    info,
    form
  }
`;

export const certificationDirectoryPageQuery = groq`
  *[_type == "certificationDirectoryPage" && _id == "certificationDirectoryPage"][0] {
    hero,
    heroImage,
    heroImageAlt
  }
`;

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    author,
    category,
    publishedAt,
    mainImage
  }
`;

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    author,
    category,
    publishedAt,
    mainImage,
    body,
    metaTitle,
    metaDescription
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

export const certificationsQuery = groq`
  *[_type == "certification" && active != false]
  | order(code asc) {
    _id,
    active,
    code,
    title,
    type,
    "slug": slug.current,
    heroBadge,
    heroTitle,
    heroDescription,
    heroImage,
    heroImageAlt,
    introTitle,
    introParagraphs,
    enquireLabel,
    importanceDescription,
    benefits,
    pillars,
    industries
  }
`;

export const certificationBySlugQuery = groq`
  *[_type == "certification" && slug.current == $slug && active != false][0] {
    _id,
    active,
    code,
    title,
    type,
    "slug": slug.current,
    heroBadge,
    heroTitle,
    heroDescription,
    heroImage,
    heroImageAlt,
    introTitle,
    introParagraphs,
    enquireLabel,
    importanceDescription,
    benefits,
    pillars,
    industries
  }
`;

