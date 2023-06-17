import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';
import rehypePrettyCode from 'rehype-pretty-code';

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
  headings: {
    type: 'json',
    resolve: (doc) => {
      const headingsRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const slugger = new GithubSlugger();
      const headings = Array.from(doc.body.raw.matchAll(headingsRegex)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          let level;
          if (flag.length === 1) level = 'One';
          else if (flag.length === 2) level = 'Two';
          else if (flag.length === 3) level = 'Three';
          else if (flag.length === 4) level = 'Four';
          else if (flag.length === 5) level = 'Five';
          else if (flag.length === 6) level = 'Six';

          return {
            level: level,
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        }
      );
      return headings;
    },
  },
};

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
    toc: {
      type: 'boolean',
      required: false,
      default: false,
    },
  },
  computedFields,
}));

const prettyCodeOption = {};

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOption]],
  },
});
