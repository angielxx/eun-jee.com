import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://eunjee.vercel.app/',
    sitemap: 'https://eunjee.vercel.app/sitemap.xml',
  };
}
