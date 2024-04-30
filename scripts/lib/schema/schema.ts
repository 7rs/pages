// import z from "zod";
import { webSiteSchema, profilePageSchema, articleSchema, breadcrumbListSchema } from './schema-models.ts';

export const Schemas = {
  WebSite: webSiteSchema,
  ProfilePage: profilePageSchema,
  Article: articleSchema,
  BreadcrumbList: breadcrumbListSchema,
} as const;
export type Schemas = (typeof Schemas)[keyof typeof Schemas];

export function createSchema(schemaType: Schemas, schema: { [key: string]: any }) {
  return schemaType.parse(schema);
}

export interface SchemaProps {
  schemaType?: Schemas;
  schema?: { [key: string]: any };
}
