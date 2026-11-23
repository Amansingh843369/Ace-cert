'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { aboutPageType } from './sanity/schemaTypes/aboutPageType';
import { contactPageType } from './sanity/schemaTypes/contactPageType';
import { homePageType } from './sanity/schemaTypes/homePageType';
import { postType } from './sanity/schemaTypes/postType';
import { certificationType } from './sanity/schemaTypes/certificationType';
import { certificationDirectoryPageType } from './sanity/schemaTypes/certificationDirectoryPageType';
import { certificateRecordType } from './sanity/schemaTypes/certificateRecordType';

export default defineConfig({
  name: 'ace-cert',
  title: 'ACE-CERT CMS',
  projectId: 'tm720ysi',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Page')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
                  .title('Home Page'),
              ),
            S.divider(),
            S.listItem()
              .title('About Page')
              .child(
                S.document()
                  .schemaType('aboutPage')
                  .documentId('aboutPage')
                  .title('About Page'),
              ),
            S.divider(),
            S.listItem()
              .title('Contact Page')
              .child(
                S.document()
                  .schemaType('contactPage')
                  .documentId('contactPage')
                  .title('Contact Page'),
              ),
            S.divider(),
            S.listItem()
              .title('Certification Listing Page')
              .child(
                S.document()
                  .schemaType('certificationDirectoryPage')
                  .documentId('certificationDirectoryPage')
                  .title('Certification Listing Page'),
              ),
            S.divider(),
            S.documentTypeListItem('post').title('Blog Posts'),
            S.divider(),
            S.documentTypeListItem('certification').title('Certification Pages'),
            S.divider(),
            S.documentTypeListItem('certificateRecord').title('Issued Certificate Records'),
          ]),
    }),
  ],
  schema: {
    types: [
      homePageType,
      aboutPageType,
      contactPageType,
      postType,
      certificationType,
      certificationDirectoryPageType,
      certificateRecordType,
    ],
  },
});