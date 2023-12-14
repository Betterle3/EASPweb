import path from 'path';
import { buildConfig } from 'payload/config';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import Lomba from './collections/Lomba';

export default buildConfig({
  admin: {
    user: Lomba.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Lomba],  // Pastikan koleksi Lomba di sini tanpa tanda kutip
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
