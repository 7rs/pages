type SiteMetadata = {
    name: string;
    description: string;
    url?: string;
    keywords?: string[];
}

type AuthorMetadata = {
    name: string;
    description: string;
    alternateName?: string;
    image?: string;
    url?: string;
    alterUrl?: string;
}

type MetadataJSON = {
    site: SiteMetadata;
    author: AuthorMetadata;
    twitterId?: string;
}

export type Metadata = MetadataJSON & {
    site: SiteMetadata & {
        favicon?: string;
        image?: string;
        alt?: string;
    };
    author: AuthorMetadata;
    noIndex: boolean;
}

export function setMetadataFromJSON(
    json: MetadataJSON,
    favicon?: string,
    image?: string,
    alt?: string,
    noIndex?: boolean): Metadata {
    return {
        site: {
            ...json.site,
            favicon: favicon,
            image: image,
            alt: alt,
        },
        author: json.author,
        twitterId: json.twitterId,
        noIndex: noIndex || false
    } as Metadata;
}

export type Frontmatter = {
    title: string;
    tags: Array<string>;
    url: string;
    published?: boolean;
    lang: string;
    [key: string]: any;
};

export const defaultLocale = "en";
export const defaultBlogLocale = "ja"

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

const GOOGLE_FONT_HOST = "https://fonts.googleapis.com/css2"

export function createFontURL(fonts: Array<string>): string {
    return `${GOOGLE_FONT_HOST}?family=${fonts.join("&family=").replace(/\s/g, "+")}&display=swap`;
}
