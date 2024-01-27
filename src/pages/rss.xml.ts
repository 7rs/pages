import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog', ({ data }) => {
        return data.published;
    });
    return rss({
        title: "Cbrnex's blog",
        description: "If there are any problems, please create an issue: https://github.com/7rs/pages",
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.published_at,
            link: `${post.slug}`,
        })),
    });
}
