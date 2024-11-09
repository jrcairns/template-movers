import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/long-distance-movers`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/moving-to-america`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/storage`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/international-movers`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/corporate-relocation`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
    ]
}