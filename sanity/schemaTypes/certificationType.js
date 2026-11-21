import { defineField, defineType } from 'sanity';

export const certificationType = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Certification name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'code',
      title: 'Code / box label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Page URL',
      type: 'slug',
      options: { source: 'code', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'ISO STANDARD',
          'FOOD SAFETY',
          'CERTIFICATION',
          'PRACTICE',
          'COMPLIANCE',
          'FRAMEWORK',
          'REGULATORY',
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'active', title: 'Show on certification page', type: 'boolean', initialValue: true }),
    defineField({ name: 'heroBadge', title: 'Hero badge', type: 'string' }),
    defineField({ name: 'heroTitle', title: 'Hero title', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero description', type: 'text', rows: 3 }),
    defineField({ name: 'heroImage', title: 'Main / hero image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'heroImageAlt', title: 'Main image alt text', type: 'string' }),
    defineField({ name: 'introTitle', title: 'Introduction title', type: 'string' }),
    defineField({
      name: 'introParagraphs',
      title: 'Introduction paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
    }),
    defineField({ name: 'enquireLabel', title: 'Enquire button text', type: 'string', initialValue: 'Get Certified Today' }),
    defineField({ name: 'importanceDescription', title: 'Importance section description', type: 'text', rows: 5 }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pillars',
      title: 'Pillars / principles',
      type: 'array',
      of: [
        defineField({
          name: 'pillar',
          title: 'Pillar',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
    }),
    defineField({
      name: 'industries',
      title: 'Industries / applications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: { title: 'code', subtitle: 'title', media: 'heroImage' },
  },
});
