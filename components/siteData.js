export const navItems = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "/about" },
  { name: "Services", hasDropdown: true },
  { name: "Our Presence", href: "#presence" },
  { name: "Verify Certificate", href: "#verify" },
  { name: "Contact", href: "#contact" },
];

export const serviceGroups = [
  {
    title: "ISO Certification",
    icon: "badge",
    items: [
      "ISO 9001:2015 (QMS)",
      "ISO 14001:2015 (EMS)",
      "ISO 45001:2018 (OH&S)",
      "ISO/IEC 20000-1:2018 (ITSMS)",
      "ISO 27001:2022 (ISMS)",
      "ISO 42001:2023 (AIMS)",
      "ISO 27701:2025 (PIMS)",
      "ISO 37001:2016 (ABMS)",
      "ISO 22301:2019 (BCMS)",
      "ISO 22000:2018 (FSMS)",
      "ISO 50001:2018 (EnMS)",
      "ISO 13485:2016 (MDQMS)",
    ],
  },
  {
    title: "Cybersecurity",
    icon: "lock",
    items: ["CMMI Level 3 & 5", "SOC 1 & SOC 2", "VAPT", "PCI DSS", "Cybersecurity Gap Review", "Security Documentation", "GDPR", "Digital Personal Data Protection"],
  },
  {
    title: "Product Certification",
    icon: "package",
    items: ["Halal Certification", "Kosher Certification", "FSSAI", "FDA", "CE (European Conformity)", "Bureau of Indian Standards (BIS)", "GMP", "GHP", "HACCP", "ZED Certification", "BIFMA", "ROHS"],
  },
  {
    title: "Other Certification",
    icon: "file",
    items: ["SA 8000", "Trademark", "Green Certification", "CSR Compliance"],
  },
];

export const features = [
  { title: "The ACE Name", text: "We live up to our name, ensuring you ace your certification journey", icon: "star" },
  { title: "Clarity and Simplicity", text: "We demystify complex standards, making them accessible and actionable", icon: "globe" },
  { title: "Practical Focus", text: "Our auditors and trainers are seasoned professionals who provide practical solutions", icon: "shield" },
  { title: "Global Recognition", text: "While our certifications are internationally recognized, our approach is personalized", icon: "award" },
];

export const standards = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001", "ISO 22000", "ISO 50001", "HACCP", "CE Marking"];

export const posts = [
  { title: "How to increase your ROI through scientific SEM", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80", date: "Sep 15, 2026" },
  { title: "Understanding the new ISO 27701 Privacy Standards", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80", date: "Sep 10, 2026" },
  { title: "Why Cybersecurity Gap Review is critical for SMEs", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", date: "Sep 05, 2026" },
];

export const faqs = [
  { q: "What is ISO certification and why does my business need it?", a: "ISO certification demonstrates that your organization meets internationally recognized standards for quality, safety, environmental responsibility, or information security, greatly boosting client trust." },
  { q: "Which ISO standards does ACE Certification Ltd. provide?", a: "We provide a wide range including ISO 9001, 14001, 45001, 27001, and many more specialized industry standards." },
  { q: "How long does the ISO certification process take?", a: "Typically between 4 to 12 weeks depending on the size of your organization, readiness, and the complexity of the standard." },
];
