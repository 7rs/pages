import { getCollection } from "astro:content";

export type Titles = {
    lang: string;
    title: string;
}

export type Locales = {
    lang: string;
    slug: string;
};

export type PostData = {
    titles: Array<Titles>;
    locales: Array<Locales>;
    publishedAt?: string;
};

export type PostMap = Map<string, PostData>;

/**
 * Normally, if a path is "src/content/blog/en/hello.md", an id is set as "en/hello.md",
 * but this function just returns a string "hello".
 * @param filePath getable path from `post.id` (getCollection).
 */
export function getPostId(filePath: string): string {
    // Checks whether filePath is null or not.
    if (filePath == null) {
        throw new Error("filePath has to be a string.");
    }

    // Checks if filePath is correct.
    if (!(/^[a-z0-9]+(([-_]|\/)?[a-z0-9]+)*(.md[x]?)?$/.test(filePath))) {
        throw new Error("filePath is wrong.");
    }

    // Checks if a path is nested, converts it to a flat path.
    // ex): "en/hello.md" -> "hello.md"
    const splited: string[] = filePath.split("/");
    if (splited.length > 1) {
        filePath = splited[splited.length - 1];
    }
    // Removes extensions like .md and .mdx.
    // ex): "hello.md" -> "hello"
    if (filePath.lastIndexOf(".md")) {
        return filePath.substring(0, filePath.length - (filePath.endsWith("mdx") ? 4 : 3));
    }
    return filePath;
}

export async function getPostMap(): Promise<PostMap> {
    const postMap: PostMap = new Map([]);

    const posts = await getCollection("blog");
    posts.map((post) => {
        if (!post.data.published) {
            return;
        }

        const postId = getPostId(post.id);
        const postData = postMap.get(postId);

        if (!postData) {
            postMap.set(postId, {
                titles: [{ lang: post.data.lang, title: post.data.title }],
                locales: [{ lang: post.data.lang, slug: post.slug }],
                publishedAt: post.data.published_at,
            });
        } else {
            postData.titles.push({ lang: post.data.lang, title: post.data.title });
            postData.locales.push({ lang: post.data.lang, slug: post.slug });
            if (postData.publishedAt === undefined) {
                postData.publishedAt = post.data.published_at;
            }
        }
    });

    return postMap;
}
