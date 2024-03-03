import { getCollection } from "astro:content";

import { Langs, Locale } from "@lib/locale"

export type PostData = {
    localeDatas: Array<Locale>;
    datas: Array<any>;
};

type PostMap = Map<string, PostData>;

/**
 * Normally, if a path is "src/content/blog/en/hello.md", an id is set as "en/hello.md",
 * but this function just returns a string "hello".
 * @param filePath getable path from `post.id` (getCollection).
 */
function getPostId(filePath: string): string {
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

// This function returns `Map` with keys and lists of multilingual posts.
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
                datas: [post.data],
                localeDatas: [{
                    slug: post.slug,
                    title: post.data.title,
                    lang: post.data.lang,
                }],
            });
        } else {
            postData.datas.push(post.data);
            postData.localeDatas.push(
                {
                    slug: post.slug,
                    title: post.data.title,
                    lang: post.data.lang,
                }
            );
        }
    });

    return postMap;
}
