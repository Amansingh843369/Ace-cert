'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { aboutPageType } from './sanity/schemaTypes/aboutPageType';
import { contactPageType } from './sanity/schemaTypes/contactPageType';
import { homePageType } from './sanity/schemaTypes/homePageType';
import { postType } from './sanity/schemaTypes/postType';

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
            S.documentTypeListItem('post').title('Blog Posts'),
          ]),
    }),
  ],
  schema: {
    types: [homePageType, aboutPageType, contactPageType, postType],
  },
});