import { defineField, defineType } from 'sanity';
import { aboutPageDefaults } from '../../lib/sanity/aboutPageContent';

const iconOptions = [
  { title: 'Shield', value: 'shieldCheck' },
  { title: 'Handshake', value: 'handshake' },
  { title: 'Growth', value: 'trendingUp' },
  { title: 'Opportunity', value: 'link2' },
];

const textField = (name, title, rows = 2) =>
  defineField({ name, title, type: 'text', rows });

const headingField = (name, title) =>
  defineField({ name, title, type: 'string' });

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  initialValue: aboutPageDefaults,
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
      name: 'cta',
      title: 'Contact call to action',
      type: 'object',
      fields: [
        headingField('titleStart', 'Title (first part)'),
        headingField('titleHighlight', 'Title (highlighted part)'),
        textField('description', 'Description', 4),
        headingField('primaryButtonLabel', 'Primary button'),
        headingField('secondaryButtonLabel', 'Secondary button'),
        textField('reassurance', 'Reassurance text', 2),
        headingField('badgeTitle', 'Image badge title'),
        textField('badgeDescription', 'Image badge description', 2),
        headingField('imageAlt', 'Image alt text'),
        defineField({ name: 'image', title: 'CTA image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'story',
      title: 'Our story',
      type: 'object',
      fields: [
        headingField('eyebrow', 'Small heading'),
        headingField('ariaLabel', 'Section accessibility label'),
        headingField('titleLine1', 'Title line 1'),
        headingField('titleLine2', 'Title line 2'),
        defineField({ name: 'image', title: 'Main image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'overlayImage', title: 'Overlay image', type: 'image', options: { hotspot: true } }),
        headingField('backgroundImageAlt', 'Background image alt text'),
        headingField('foregroundImageAlt', 'Foreground image alt text'),
        headingField('companyName', 'Company name'),
        textField('paragraph1Suffix', 'First paragraph (after company name)', 4),
        headingField('paragraph2Prefix', 'Second paragraph (before acronym)'),
        headingField('acronym', 'Acronym'),
        textField('paragraph2Suffix', 'Second paragraph (after acronym)', 4),
        textField('paragraph3', 'Third paragraph', 4),
        headingField('buttonLabel', 'Button label'),
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Our mission',
      type: 'object',
      fields: [
        headingField('eyebrow', 'Small heading'),
        headingField('title', 'Title'),
        headingField('imageAlt', 'Image alt text'),
        defineField({ name: 'image', title: 'Mission image', type: 'image', options: { hotspot: true } }),
        defineField({
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'object', fields: [textField('text', 'Text', 4)] }],
        }),
      ],
    }),
    defineField({
      name: 'vision',
      title: 'Our vision',
      type: 'object',
      fields: [
        headingField('eyebrow', 'Small heading'),
        headingField('title', 'Title'),
        defineField({ name: 'tallImage', title: 'Tall image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'topImage', title: 'Top image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'bottomImage', title: 'Bottom image', type: 'image', options: { hotspot: true } }),
        headingField('tallImageAlt', 'Tall image alt text'),
        headingField('topImageAlt', 'Top image alt text'),
        headingField('bottomImageAlt', 'Bottom image alt text'),
        defineField({
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'object', fields: [textField('text', 'Text', 4)] }],
        }),
      ],
    }),
    defineField({
      name: 'values',
      title: 'Core values',
      type: 'object',
      fields: [
        headingField('eyebrow', 'Small heading'),
        headingField('titleStart', 'Title (first part)'),
        headingField('titleHighlight', 'Title (highlighted part)'),
        textField('description', 'Description', 3),
        defineField({
          name: 'items',
          title: 'Values',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                headingField('letter', 'Letter'),
                headingField('title', 'Title'),
                textField('description', 'Description', 4),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: { list: iconOptions, layout: 'dropdown' },
                }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'letter' },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'purpose',
      title: 'Purpose section',
      type: 'object',
      fields: [
        headingField('titleLine1', 'Heading line 1'),
        headingField('titleLine2Prefix', 'Heading line 2 prefix'),
        headingField('titleLine2Highlight', 'Heading line 2 highlight'),
        headingField('titleLine3', 'Heading line 3'),
        headingField('firstParagraphPrefix', 'First paragraph (before bold text)'),
        headingField('companyName', 'Bold company name'),
        textField('firstParagraphSuffix', 'First paragraph (after bold text)', 4),
        textField('secondParagraph', 'Second paragraph', 4),
        headingField('benefitsEyebrow', 'Benefits heading'),
        defineField({
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                headingField('number', 'Number'),
                headingField('title', 'Title'),
                textField('description', 'Description', 4),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: { list: iconOptions, layout: 'dropdown' },
                }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'number' },
              },
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'About Page' }),
  },
});
