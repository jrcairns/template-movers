import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const robotsTxt = `
User-Agent: *
Allow: /
Disallow: /api/
Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml
`.trim();

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
} 