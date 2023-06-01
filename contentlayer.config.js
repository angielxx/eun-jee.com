import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  readingTime: {
    type: 'json',
    resolve: (doc) => Math.ceil(readingTime(doc.body.raw).minutes),
  },
};

// export const Page = defineDocumentType(() => ({
//   name: 'Page',
//   filePathPattern: `pages/**/*.mdx`,
//   contentType: 'mdx',
//   fields: {
//     title: {
//       type: 'string',
//       required: true,
//     },
//     description: {
//       type: 'string',
//     },
//   },
//   computedFields,
// }));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `/blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Post],
});
