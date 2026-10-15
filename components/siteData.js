// ======================================================
// NAVIGATION
// ======================================================

import { isoStandards } from "../data/isoStandards";

export const navItems = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "/about" },
  { name: "Services", hasDropdown: true },
  { name: "Our Presence", href: "#presence" },
  // { name: "Verify Certificate", href: "/verify_certificate" },
  { name: "Contact", href: "/contact" },
];


// ======================================================
// ISO CERTIFICATION LINKS
// ======================================================

export const isoLinks = isoStandards.map(({ code, href }) => ({
  name: code,
  href,
}));


// ======================================================
// SERVICE GROUPS
// ======================================================

export const serviceGroups = [
  {
    title: "ISO Certification",
    icon: "badge",
    items: isoLinks,
  },
 

 
];


// ======================================================
// FEATURES
// ======================================================

export const features = [
  {
    title: "The ACE Name",
    text: "We live up to our name, ensuring you ace your certification journey",
    icon: "star",
  },

  {
    title: "Clarity and Simplicity",
    text: "We demystify complex standards, making them accessible and actionable",
    icon: "globe",
  },

  {
    title: "Practical Focus",
    text: "Our auditors and trainers are seasoned professionals who provide practical solutions",
    icon: "shield",
  },

  {
    title: "Global Recognition",
    text: "While our certifications are internationally recognized, our approach is personalized",
    icon: "award",
  },
];


// ======================================================
// STANDARDS
// ======================================================

 

// ======================================================
// BLOG POSTS
// ======================================================

export const posts = [
  {
    title: "How to increase your ROI through scientific SEM",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    date: "Sep 15, 2026",
  },

  {
    title: "Understanding the new ISO 27701 Privacy Standards",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    date: "Sep 10, 2026",
  },

  {
    title: "Why Cybersecurity Gap Review is critical for SMEs",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    date: "Sep 05, 2026",
  },
];


// ======================================================
// FAQS
// ======================================================

export const faqs = [
  {
    q: "What is ISO certification and why does my business need it?",
    a: "ISO certification demonstrates that your organization meets internationally recognized standards for quality, safety, environmental responsibility, or information security, greatly boosting client trust.",
  },

  {
    q: "Which ISO standards does ACE Certification Ltd. provide?",
    a: "We provide a wide range including ISO 9001, 14001, 45001, 27001, and many more specialized industry standards.",
  },

  {
    q: "How long does the ISO certification process take?",
    a: "Typically between 4 to 12 weeks depending on the size of your organization, readiness, and the complexity of the standard.",
  },
];