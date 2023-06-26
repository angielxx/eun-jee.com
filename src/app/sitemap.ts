import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://eunjee.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://eunjee.vercel.app/category',
      lastModified: new Date(),
    },
  ];
}
