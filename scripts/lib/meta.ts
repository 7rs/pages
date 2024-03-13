export function getLocale(lang: string): string {
    switch (lang) {
        case "ja":
        case "jp":
        case "japanese":
        case "japan":
            return "ja-JP"
        default:
            return "en";
    }
}

import { z } from "astro:content";

export const websiteSchema = z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
    author: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    keywords: z.array(z.string()).optional(),
    twitterId: z.string().optional(),
})
export type Website = z.infer<typeof websiteSchema>;
