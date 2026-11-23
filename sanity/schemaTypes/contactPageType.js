import { defineField, defineType } from 'sanity';
import { contactPageDefaults } from '../../lib/sanity/contactPageContent';

const headingField = (name, title) =>
  defineField({ name, title, type: 'string' });

const textField = (name, title, rows = 2) =>
  defineField({ name, title, type: 'text', rows });

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  initialValue: contactPageDefaults,
  fields: [
    defineField({
      name: 'hero',
      title: 'Page heading',
      type: 'object',
      fields: [
        headingField('title', 'Heading'),
        headingField('backgroundImageAlt', 'Background image alt text'),
        defineField({ name: 'backgroundImage', title: 'Background image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'info',
      title: 'Contact information',
      type: 'object',
      fields: [
        headingField('eyebrow', 'Small heading'),
        headingField('title', 'Title'),
        headingField('companyName', 'Company name'),
        headingField('addressLabel', 'Address label'),
        textField('address', 'Address', 3),
        headingField('emailLabel', 'Email label'),
        headingField('email', 'Email address'),
        headingField('hoursLabel', 'Working hours label'),
        textField('hours', 'Working hours', 2),
        headingField('weekendLabel', 'Weekend text'),
      ],
    }),
    defineField({
      name: 'form',
      title: 'Contact form',
      type: 'object',
      fields: [
        headingField('eyebrow', 'Small heading'),
        headingField('title', 'Title'),
        textField('description', 'Description', 3),
        headingField('firstNameLabel', 'First name label'),
        headingField('lastNameLabel', 'Last name label'),
        headingField('emailLabel', 'Email label'),
        headingField('phoneLabel', 'Phone label'),
        headingField('messageLabel', 'Message label'),
        headingField('submitLabel', 'Submit button'),
        textField('successMessage', 'Success message', 2),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Contact Page' }),
  },
});
