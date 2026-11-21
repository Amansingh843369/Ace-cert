export const contactPageDefaults = {
  hero: {
    title: 'Contact Us',
    homeLabel: 'Home',
    backgroundImageAlt: 'Business team collaborating',
  },
  info: {
    eyebrow: 'We are here to help',
    title: 'Get in touch',
    companyName: 'Universal Certification Conformity Limited',
    addressLabel: 'Our Location',
    address: '11-12 St. Andrew Square,\nEdinburgh, EH2 2AF,\nUnited Kingdom',
    phoneLabel: 'Call Us',
    phoneDisplay: '+44 20 7946 0000',
    phoneLink: '+442079460000',
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
    purposeLabel: 'Purpose of Contact',
    purposePlaceholder: 'Select a Service Option',
    purposeOptions: [
      { label: 'Consultation Service', value: 'Consultation' },
      { label: 'Support Request', value: 'Support' },
      { label: 'Other Inquiry', value: 'General' },
    ],
    messageLabel: 'Your Message',
    submitLabel: 'Send Message',
    successMessage:
      'Thank you for contacting us! We will get back to you shortly.',
  },
  map: {
    eyebrow: 'Visit us',
    title: 'Find our office',
    address: '11-12 St. Andrew Square, Edinburgh, EH2 2AF, United Kingdom',
    mapUrl:
      'https://maps.google.com/maps?q=11-12%20St.%20Andrew%20Square,%20Edinburgh,%20EH2%202AF,%20United%20Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed',
    mapTitle: 'Map to the ACE-CERT office in Edinburgh',
  },
};

export function mergeContactPageContent(content) {
  if (!content) return contactPageDefaults;

  return {
    ...contactPageDefaults,
    ...content,
    hero: { ...contactPageDefaults.hero, ...content.hero },
    info: { ...contactPageDefaults.info, ...content.info },
    form: {
      ...contactPageDefaults.form,
      ...content.form,
      purposeOptions:
        content.form?.purposeOptions ?? contactPageDefaults.form.purposeOptions,
    },
    map: { ...contactPageDefaults.map, ...content.map },
  };
}
