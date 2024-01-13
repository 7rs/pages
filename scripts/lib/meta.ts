export type Metadata = {
    name: string;
    description: string;
    image: string;
    imageAlt: string;
    authorName: string;
    authorAlternateName: string,
    url: string;
    keywords: Array<string>;
    twitterId?: string;
}

export function createFontURL(fonts: Array<string>): string {
    return `https://fonts.googleapis.com/css2?family=${fonts.join("&family=").replace(/\s/g, "+")}&display=swap`;
}
