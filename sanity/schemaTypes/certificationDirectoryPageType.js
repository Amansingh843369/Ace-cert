import { defineField, defineType } from 'sanity';
import { certificationDirectoryPageDefaults } from '../../lib/sanity/certificationDirectoryDefaults';

export const certificationDirectoryPageType = defineType({
  name: 'certificationDirectoryPage',
  title: 'Certification Listing Page',
  type: 'document',
  initialValue: certificationDirectoryPageDefaults,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'titleLine1', title: 'Title line', type: 'string' }),
        defineField({ name: 'titleHighlight', title: 'Highlighted title word', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
        defineField({ name: 'feature1', title: 'Feature 1', type: 'string' }),
        defineField({ name: 'feature2', title: 'Feature 2', type: 'string' }),
        defineField({ name: 'feature3', title: 'Feature 3', type: 'string' }),
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Hero image alt text',
      type: 'string',
    }),
  ],
  preview: { prepare: () => ({ title: 'Certification Listing Page' }) },
});
