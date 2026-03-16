import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/products');
const DATA_DIR = path.join(process.cwd(), 'src/data');

export interface ProjectData {
    slug: string;
    frontmatter: {
        title: string;
        tier: number;
        category: string;
        stack: string[];
        metrics: string;
        story: string;
        nobodyAsked?: boolean;
        soloBuild?: boolean;
        zeroCost?: boolean;
    };
    content: string;
}

export async function getProjects(): Promise<ProjectData[]> {
    if (!fs.existsSync(CONTENT_DIR)) return [];
    const files = fs.readdirSync(CONTENT_DIR);

    return files
        .filter(file => file.endsWith('.mdx'))
        .map(file => {
            const filePath = path.join(CONTENT_DIR, file);
            const source = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(source);

            return {
                slug: file.replace('.mdx', ''),
                frontmatter: {
                    ...data,
                    stack: data.stack || [],
                    tier: data.tier || 2,
                    category: data.category || "General",
                    metrics: data.metrics || "0",
                    story: data.story || ""
                } as ProjectData['frontmatter'],
                content
            };
        });
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);

    return {
        slug,
        frontmatter: {
            ...data,
            stack: data.stack || [],
            tier: data.tier || 2,
            category: data.category || "General",
            metrics: data.metrics || "0",
            story: data.story || ""
        } as ProjectData['frontmatter'],
        content
    };
}

export function getGlobalData(fileName: 'status' | 'metrics') {
    const filePath = path.join(DATA_DIR, `${fileName}.json`);
    if (!fs.existsSync(filePath)) return null;
    const source = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(source);
}
