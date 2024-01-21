import { Metadata, Frontmatter } from "@lib/meta"

const SchemaContext = "https://schema.org"

type BaseSchema = {
    "@context"?: typeof SchemaContext,
    "@type": string,
}

// https://schema.org/Person
// https://schema.org/Organization
export type Person = BaseSchema & {
    name: string;
    alternateName?: string;
    description?: string;
    url?: string;
    identifier?: string;
    image?: string;
    sameAs?: Array<string> | string;
}

// https://schema.org/ProfilePage
// https://developers.google.com/search/docs/appearance/structured-data/profile-page
type Profile = BaseSchema & {
    mainEntity: Array<Person>;
    dateCreated?: string;
    dateModified?: string;
}

// https://schema.org/Article
// https://developers.google.com/search/docs/appearance/structured-data/article
type Article = BaseSchema & {
    headline?: string;
    author?: Person;
    image?: string;
    datePublished?: string;
    dateModified?: string;
}

type Schemas = Person | Profile | Article

export const SchemaTypes = {
    Person: "Person",
    Profile: "ProfilePage",
    Article: "Article",
} as const;
export type SchemaTypes = (typeof SchemaTypes)[keyof typeof SchemaTypes];

function getBaseSchema(schemaTypes: SchemaTypes, removeContext?: boolean): BaseSchema {
    return {
        "@context": removeContext ? undefined : SchemaContext,
        "@type": schemaTypes,
    } as BaseSchema;
}

function createSchemaObject(schemaTypes: SchemaTypes, metadata: Metadata, frontmatter?: Frontmatter): Schemas {
    switch (schemaTypes) {
        case SchemaTypes.Person:
            return {
                ...getBaseSchema(schemaTypes, true),
                name: metadata.author.name,
                alternateName: metadata.author.alternateName,
                description: metadata.author.description,
                url: metadata.author.url,
                // identifier: string,
                image: metadata.author.image,
                sameAs: metadata.author.alterUrl,
            } as Person;
        case SchemaTypes.Profile:
            return {
                ...getBaseSchema(schemaTypes),
                mainEntity: [createSchemaObject(SchemaTypes.Person, metadata) as Person],
                // dateCreated?: string,
                // dateModified?: string,
            } as Profile
        case SchemaTypes.Article:
            if (frontmatter == null) {
                throw new Error("frontmatter is undefined.")
            }
            return {
                ...getBaseSchema(schemaTypes),
                headline: frontmatter.title,
                author: createSchemaObject(SchemaTypes.Person, metadata),
                // image: string,
                // datePublished: string,
                // dateModified: string,
            } as Article;
        default:
            throw new Error("Invalid schema type.");
    }
}

export function createSchema(schemaTypes: SchemaTypes, metadata: Metadata, frontmatter?: Frontmatter): string {
    return JSON.stringify(createSchemaObject(schemaTypes, metadata, frontmatter));
}
