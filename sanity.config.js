'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { postType } from './sanity/schemaTypes/postType';

export default defineConfig({
  name: 'ace-cert',
  title: 'ACE-CERT CMS',
  projectId: 'tm720ysi',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [postType],
  },
});