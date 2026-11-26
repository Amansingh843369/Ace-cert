export const contactPageDefaults = {
  hero: {
    title: 'Contact Us',
    backgroundImageAlt: 'Business team collaborating',
  },
  info: {
    eyebrow: 'We are here to help',
    title: 'Get in touch',
    addressLabel: 'Our Location',
    address: '11-12 St. Andrew Square,\nEdinburgh, EH2 2AF,\nUnited Kingdom',
    emailLabel: 'Email Us',
    email: 'info@ace-cert.com',
    hoursLabel: 'Working Hours',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
    weekendLabel: 'Closed on Weekends',
  },
  form: {
    eyebrow: 'Have a question?',
    title: 'Send Us a Message',
    description:
      'Fill in your details below and our support team will respond within 24 business hours.',
    firstNameLabel: 'First Name',
    lastNameLabel: 'Last Name',
    emailLabel: 'Email Address',
    phoneLabel: 'Phone Number',
    messageLabel: 'Your Message',
    submitLabel: 'Send Message',
    successMessage:
      'Thank you for contacting us! We will get back to you shortly.',
  },
};

export function mergeContactPageContent(content) {
  if (!content) return contactPageDefaults;

  return {
    ...contactPageDefaults,
    ...content,
    hero: { ...contactPageDefaults.hero, ...content.hero },
    info: { ...contactPageDefaults.info, ...content.info },
    form: { ...contactPageDefaults.form, ...content.form },
  };
}
