export const aboutPageDefaults = {
  hero: {
    title: 'Our Story',
    backgroundImageAlt: 'ISO Certification Background',
  },
  story: {
    eyebrow: 'Our Story',
    ariaLabel: 'About ACE Certification Services',
    titleLine1: 'Built on Trust.',
    titleLine2: 'Driven by Excellence.',
    backgroundImageAlt: 'Corporate team working together',
    foregroundImageAlt: 'Corporate team discussing work around a table',
    companyName: 'ACE Certification Ltd.',
    paragraph1Suffix:
      ' is a dedicated, client-centric professional services firm helping organizations of all sizes achieve international standards of quality, safety, and efficiency.',
    paragraph2Prefix: 'The name ',
    acronym: 'ACE',
    paragraph2Suffix:
      ' reflects our promise: to help clients Achieve Compliance & Excellence. Our experienced Lead Auditors turn complex standards into practical steps for lasting business improvement.',
    paragraph3:
      'We believe certification should be more than a trophy—it should be a strategic tool that creates measurable improvement for your business.',
    buttonLabel: 'Know More',
  },
  mission: {

    title: 'Our Mission',
    imageAlt: 'Corporate team working together on a mission',
    paragraphs: [
      {
        text: 'Our mission at ACE Certification. is to simplify the path to certification and embed a culture of continuous improvement within our client organizations.',
      },
      {
        text: 'We achieve this by providing rigorous & impartial certification, delivering reliable audit services that uphold the highest standards of integrity.',
      },
    ],
  },
  vision: {
   
    title: 'Our Vision',
    tallImageAlt: 'Business professional leading',
    topImageAlt: 'Corporate office interior',
    bottomImageAlt: 'Global team alignment',
    paragraphs: [
      {
        text: 'To be the most trusted and impactful partner for organizational excellence, recognized globally for setting the benchmark in certification and training services.',
      },
      {
        text: 'We aim to help organizations strengthen their management systems through impartial assessments, practical guidance, and clear communication.',
      },
    ],
  },
  values: {
    eyebrow: 'The ACE Standard',
    titleStart: 'Our Core ',
    titleHighlight: 'Values',
    description:
      'The principles behind every assessment, partnership, and result.',
    items: [
      {
        letter: 'A',
        title: 'Achieve',
        description:
          'We are unwavering in our commitment to impartiality, ethical practices, and technically sound assessments.',
        icon: 'shieldCheck',
      },
      {
        letter: 'C',
        title: 'Compliance',
        description:
          'Your success is our success. We build long-term partnerships based on understanding, respect, and shared goals.',
        icon: 'handshake',
      },
      {
        letter: 'E',
        title: 'Excellence ',
        description:
          'We continuously invest in the development of our team and services to provide cutting-edge, expert guidance.',
        icon: 'trendingUp',
      },
    ],
  },
  purpose: {
    titleLine1: 'Empowering Business',
    titleLine2Prefix: 'Through',
    titleLine2Highlight: 'Achieve',
    titleLine3: 'Compliance & Excellence.',
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
          'Transform rigorous industry standards into streamlined, efficient, and highly profitable everyday practices. We don’t just audit businesses—we partner with them to help them achieve compliance and excellence.',
        icon: 'trendingUp',
      },
    ],
  },
  cta: {
    titleStart: 'A trusted partner for your ',
    titleHighlight: 'certification journey.',
    description:
      'Partner with ACE Certification for impartial assessments, recognized standards, and practical guidance tailored to your organization.',
    primaryButtonLabel: 'Talk to our team',
    secondaryButtonLabel: 'Explore certifications',
    reassurance: 'Independent expertise. Clear guidance. Lasting confidence.',
    badgeTitle: 'Built on trust',
    badgeDescription: 'Standards that move your business forward.',
    imageAlt: 'Modern corporate office interior',
  },
};

export function mergeAboutPageContent(content) {
  if (!content) return aboutPageDefaults;

  return {
    ...aboutPageDefaults,
    ...content,
    hero: { ...aboutPageDefaults.hero, ...content.hero },
    story: { ...aboutPageDefaults.story, ...content.story },
    mission: {
      ...aboutPageDefaults.mission,
      ...content.mission,
      paragraphs:
        content.mission?.paragraphs ?? aboutPageDefaults.mission.paragraphs,
    },
    vision: {
      ...aboutPageDefaults.vision,
      ...content.vision,
      paragraphs:
        content.vision?.paragraphs ?? aboutPageDefaults.vision.paragraphs,
    },
    values: {
      ...aboutPageDefaults.values,
      ...content.values,
      items: content.values?.items ?? aboutPageDefaults.values.items,
    },
    purpose: {
      ...aboutPageDefaults.purpose,
      ...content.purpose,
      benefits:
        content.purpose?.benefits ?? aboutPageDefaults.purpose.benefits,
    },
    cta: { ...aboutPageDefaults.cta, ...content.cta },
  };
}
