import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mohamedayman-dev.vercel.app',
      lastModified: new Date('2026-07-04T18:43:22.603Z'),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
