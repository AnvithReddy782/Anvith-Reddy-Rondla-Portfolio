import { MetadataRoute } from 'next';
import { getProjects } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const projects = await getProjects();
    const baseUrl = 'https://axiom.pm';

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/products/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/now`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/secret`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.3,
        },
        ...projectUrls,
    ];
}
