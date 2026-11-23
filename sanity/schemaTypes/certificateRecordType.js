import { defineField, defineType } from 'sanity';

export const certificateRecordType = defineType({
  name: 'certificateRecord',
  title: 'Issued certificate record',
  type: 'document',
  fields: [
    defineField({
      name: 'certificateNumber',
      title: 'Certificate number',
      type: 'string',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'companyName',
      title: 'Company name',
      type: 'string',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'registeredEmail',
      title: 'Registered email',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .max(254)
          .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
            name: 'email',
            invert: false,
          }),
    }),
    defineField({
      name: 'standard',
      title: 'Standard / certification',
      type: 'string',
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: 'issueDate',
      title: 'Issue date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'expiryDate',
      title: 'Expiry date',
      type: 'date',
    }),
    defineField({
      name: 'status',
      title: 'Record status',
      type: 'string',
      options: {
        list: [
          { title: 'Valid', value: 'valid' },
          { title: 'Suspended', value: 'suspended' },
          { title: 'Revoked', value: 'revoked' },
        ],
        layout: 'radio',
      },
      initialValue: 'valid',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'certificateNumber',
      subtitle: 'companyName',
    },
  },
});
