import { defineField, defineType } from 'sanity';
import { homePageDefaults } from '../../lib/sanity/homePageContent';

const stringField = (name, title) => defineField({ name, title, type: 'string' });
const textField = (name, title, rows = 3) => defineField({ name, title, type: 'text', rows });

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  initialValue: homePageDefaults,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero section',
      type: 'object',
      fields: [
        stringField('eyebrow', 'Eyebrow'),
        stringField('titleLine1', 'Title line 1'),
        stringField('titleLine2', 'Title line 2'),
        defineField({ name: 'phrases', title: 'Typewriter phrases', type: 'array', of: [{ type: 'string' }] }),
        textField('description', 'Description', 3),
        stringField('buttonLabel', 'Button label'),
        stringField('buttonLink', 'Button link'),
        stringField('backgroundImageAlt', 'Background image alt text'),
        defineField({ name: 'backgroundImage', title: 'Background image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About preview',
      type: 'object',
      fields: [
        stringField('eyebrow', 'Eyebrow'),
        stringField('ariaLabel', 'Section accessibility label'),
        stringField('titleLine1', 'Title line 1'),
        stringField('titleLine2', 'Title line 2'),
        defineField({ name: 'image', title: 'Main image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'overlayImage', title: 'Overlay image', type: 'image', options: { hotspot: true } }),
        stringField('backgroundImageAlt', 'Background image alt text'),
        stringField('foregroundImageAlt', 'Foreground image alt text'),
        stringField('companyName', 'Company name'),
        textField('paragraph1Suffix', 'First paragraph', 4),
        stringField('paragraph2Prefix', 'Second paragraph prefix'),
        stringField('acronym', 'Acronym'),
        textField('paragraph2Suffix', 'Second paragraph suffix', 4),
        stringField('buttonLabel', 'Button label'),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services section',
      type: 'object',
      fields: [
        stringField('titleHighlight', 'Title highlight'),
        stringField('cardLinkLabel', 'Card link label'),
        stringField('buttonLabel', 'View all button'),
      ],
    }),
    defineField({
      name: 'purpose',
      title: 'Purpose section',
      type: 'object',
      fields: [
        stringField('titleLine1', 'Heading line 1'),
        stringField('titleLine2Prefix', 'Heading line 2 prefix'),
        stringField('titleLine2Highlight', 'Heading line 2 highlight'),
        stringField('titleLine3', 'Heading line 3'),
        stringField('firstParagraphPrefix', 'First paragraph prefix'),
        stringField('companyName', 'Company name'),
        textField('firstParagraphSuffix', 'First paragraph suffix', 4),
        textField('secondParagraph', 'Second paragraph', 4),
        stringField('benefitsEyebrow', 'Benefits eyebrow'),
        defineField({
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              stringField('number', 'Number'),
              stringField('title', 'Title'),
              textField('description', 'Description', 4),
              defineField({
                name: 'icon',
                title: 'Icon',
                type: 'string',
                options: { list: ['shieldCheck', 'link2', 'trendingUp'], layout: 'dropdown' },
              }),
            ],
            preview: { select: { title: 'title', subtitle: 'number' } },
          }],
        }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Why choose us',
      type: 'object',
      fields: [
        stringField('title', 'Section title'),
        defineField({
          name: 'items',
          title: 'Features',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              stringField('title', 'Title'),
              textField('text', 'Description', 4),
              stringField('color', 'Card accent hex color'),
              defineField({
                name: 'icon',
                title: 'Illustration',
                type: 'string',
                options: { list: ['chart', 'board', 'circles', 'globe'], layout: 'dropdown' },
              }),
            ],
            preview: { select: { title: 'title' } },
          }],
        }),
      ],
    }),
    defineField({
      name: 'blog',
      title: 'Blog preview',
      type: 'object',
      fields: [
        stringField('eyebrow', 'Eyebrow'),
        stringField('title', 'Title'),
        stringField('buttonLabel', 'View all button'),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Certification call to action',
      type: 'object',
      fields: [
        stringField('titleStart', 'Title (first part)'),
        stringField('titleHighlight', 'Title (highlighted part)'),
        textField('description', 'Description', 4),
        stringField('primaryButtonLabel', 'Primary button'),
        stringField('secondaryButtonLabel', 'Secondary button'),
        textField('reassurance', 'Reassurance text', 2),
        stringField('badgeTitle', 'Image badge title'),
        textField('badgeDescription', 'Image badge description', 2),
        stringField('imageAlt', 'Image alt text'),
        defineField({ name: 'image', title: 'CTA image', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Home Page' }) },
});
