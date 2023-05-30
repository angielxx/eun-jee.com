import { defineDocumentType, makeSource } from 'contentlayer/source-files';

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
  filePathPattern: `/blog/**/*.md`,
  contentType: 'md',
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
