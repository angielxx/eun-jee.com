import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => {
    return {
      url: `https://eun-jee.com${post.slug}/`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: 'https://eun-jee.com',
      lastModified: new Date(),
    },
    {
      url: 'https://eun-jee.com/category',
      lastModified: new Date(),
    },
    ...posts,
  ];
}
