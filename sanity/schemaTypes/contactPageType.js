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
        headingField('homeLabel', 'Home breadcrumb'),
        headingField('backgroundImageAlt', 'Background image alt text'),
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
        headingField('phoneLabel', 'Phone label'),
        headingField('phoneDisplay', 'Phone display text'),
        headingField('phoneLink', 'Phone link'),
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
        headingField('purposeLabel', 'Purpose label'),
        headingField('purposePlaceholder', 'Purpose placeholder'),
        defineField({
          name: 'purposeOptions',
          title: 'Purpose options',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                headingField('label', 'Display label'),
                headingField('value', 'Submitted value'),
              ],
              preview: { select: { title: 'label' } },
            },
          ],
        }),
        headingField('messageLabel', 'Message label'),
        headingField('submitLabel', 'Submit button'),
        textField('successMessage', 'Success message', 2),
      ],
    }),
    defineField({
      name: 'map',
      title: 'Map section',
      type: 'object',
      fields: [
        headingField('eyebrow', 'Small heading'),
        headingField('title', 'Title'),
        textField('address', 'Map address', 2),
        headingField('mapUrl', 'Google Maps embed URL'),
        headingField('mapTitle', 'Map iframe title'),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Contact Page' }),
  },
});
