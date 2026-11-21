export const homePageDefaults = {
  hero: {
    eyebrow: 'Welcome',
    titleLine1: 'ACE',
    titleLine2: 'Certification',
    phrases: ['For Achieve', 'For Compliance', 'For Excellence'],
    description:
      'Your trusted partner for Certification, Inspection and training Services. We simplify complex standards to power your business growth.',
    buttonLabel: 'CONTACT TODAY',
    buttonLink: '/contact',
    backgroundImageAlt:
      'Professionals collaborating during a business meeting',
  },
  about: {
    eyebrow: 'Our story',
    ariaLabel: 'About ACE Certification Services',
    titleLine1: 'Built on Trust.',
    titleLine2: 'Driven by Excellence.',
    backgroundImageAlt: 'Corporate team working together',
    foregroundImageAlt:
      'Corporate team reviewing documents in a meeting',
    companyName: 'ACE Certification Ltd.',
    paragraph1Suffix:
      ' is a dedicated, client-centric professional services firm helping organizations of all sizes achieve international standards of quality, safety, and efficiency.',
    paragraph2Prefix: 'The name ',
    acronym: 'ACE',
    paragraph2Suffix:
      ' reflects our promise: to help clients Achieve Compliance & Excellence. Our experienced Lead Auditors turn complex standards into practical steps for lasting business improvement.',
    buttonLabel: 'Know More',
  },
  services: {
    eyebrow: 'Our Expertise',
    titleStart: 'Comprehensive ',
    titleHighlight: 'Service Solutions',
    description:
      'Explore our full range of ISO standards, certifications, and compliance frameworks for your organization.',
    cardLinkLabel: 'Explore Standard',
    buttonLabel: 'View All Certifications',
  },
  purpose: {
    titleStart: 'Building a Better Future ',
    titleHighlight: 'for Your Business',
    firstParagraphPrefix: 'At ',
    companyName: 'ACE Certification',
    firstParagraphSuffix:
      ', our purpose is to bridge the gap between complex international standards and everyday business success. We believe compliance shouldn’t be a bureaucratic hurdle, but a strategic catalyst for growth.',
    secondParagraph:
      'By delivering accessible, practical, and globally recognized ISO certification, training, and advisory services, we empower small and middle-market businesses to grow with confidence.',
    benefitsEyebrow: 'What this means for you',
    benefits: [
      {
        number: '01',
        title: 'Build Unshakeable Trust',
        description:
          'Prove your commitment to safety, quality, and excellence to your clients and stakeholders.',
        icon: 'shieldCheck',
      },
      {
        number: '02',
        title: 'Unlock Market Potential',
        description:
          'Open doors to new contracts, global opportunities, and regulatory compliance with confidence.',
        icon: 'link2',
      },
      {
        number: '03',
        title: 'Drive Operational Excellence',
        description:
          'Transform rigorous industry standards into streamlined, efficient, and highly profitable everyday practices.',
        icon: 'trendingUp',
      },
    ],
  },
  features: {
    title: 'Why Choose ACE Certification Ltd.?',
    items: [
      {
        title: 'The ACE Name',
        text: 'We live up to our name, ensuring you ace your certification journey.',
        color: '#8BD5E5',
        icon: 'chart',
      },
      {
        title: 'Clarity and Simplicity',
        text: 'We demystify complex standards, making them accessible and actionable.',
        color: '#FFDA68',
        icon: 'board',
      },
      {
        title: 'Practical Focus',
        text: 'Our auditors and trainers are seasoned professionals who provide practical, not just theoretical, solutions.',
        color: '#FF8135',
        icon: 'circles',
      },
      {
        title: 'Global Recognition, Local Service',
        text: 'While our certifications are internationally recognized, our approach is personalized and responsive.',
        color: '#B7F0E8',
        icon: 'globe',
      },
    ],
  },
  blog: {
    eyebrow: 'Latest News & Insights',
    title: 'Explore our latest articles and expert guides',
    buttonLabel: 'View All Posts',
  },
};

export function mergeHomePageContent(content) {
  if (!content) return homePageDefaults;

  return {
    ...homePageDefaults,
    ...content,
    hero: { ...homePageDefaults.hero, ...content.hero, phrases: content.hero?.phrases ?? homePageDefaults.hero.phrases },
    about: { ...homePageDefaults.about, ...content.about },
    services: { ...homePageDefaults.services, ...content.services },
    purpose: { ...homePageDefaults.purpose, ...content.purpose, benefits: content.purpose?.benefits ?? homePageDefaults.purpose.benefits },
    features: { ...homePageDefaults.features, ...content.features, items: content.features?.items ?? homePageDefaults.features.items },
    blog: { ...homePageDefaults.blog, ...content.blog },
  };
}
