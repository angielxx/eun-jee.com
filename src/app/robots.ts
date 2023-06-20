import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://eun-jee.com',
    // sitemap: 'https://acme.com/sitemap.xml',
  };
}
