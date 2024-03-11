// import z from "zod";
import { z } from "astro:content";

const strings = z.string().or(z.array(z.string()))
const schemaURL = "https://schema.org/"

/**
 * The most generic type of item.
 * 
 * @see https://schema.org/Thing
 */
const thingSchema = z.object({
  name: z.string(),
  alternateName: z.ostring(),
  image: z.optional(strings),
  url: z.ostring(),
  sameAs: z.optional(strings),
})

/** Thing > Person
 * 
 * A person (alive, dead, undead, or fictional).
 * 
 * @see https://schema.org/Person
 */
export const personSchema = thingSchema.extend({
  "@type": z.ostring().default("Person"),
  jobTitle: z.ostring(),
})

/** Thing > Organization
 * 
 * An organization such as a school, NGO, corporation, club, etc.
 * 
 * @see https://schema.org/Organization
 */
export const organizationSchema = thingSchema.extend({
  "@type": z.ostring().default("Organization"),
  logo: z.ostring(),
  founder: z.optional(personSchema),
})

export const assignee = personSchema.or(organizationSchema)
export const assignees = personSchema.array().or(organizationSchema.array())

/** Thing > CreativeWork > Article
 * 
 * An article, such as a news article or piece of investigative report.  
 * Newspapers and magazines have articles of many different types and this is intended to cover them all.
 * 
 * @see https://schema.org/Article
 * @see https://developers.google.com/search/docs/appearance/structured-data/article
 */
export const articleSchema = z.object({
  "@context": z.ostring().default(schemaURL),
  "@type": z.ostring().default("Article"),
  headline: z.string(),
  image: z.optional(strings),
  datePublished: z.optional(z.coerce.date()),
  dateModified: z.optional(z.coerce.date()),
  author: assignee.or(assignees).optional(),
})

/** Thing > CreativeWork > WebPage > ProfilePage
 * 
 * Web page type: Profile page.
 * 
 * @see https://schema.org/ProfilePage
 * @see https://developers.google.com/search/docs/appearance/structured-data/profile-page
 */
export const profilePageSchema = z.object({
  "@context": z.ostring().default(schemaURL),
  "@type": z.ostring().default("ProfilePage"),
  mainEntity: assignee.or(assignees),
  datePublished: z.optional(z.coerce.date()),
  dateModified: z.optional(z.coerce.date()),
})

/** Thing > Intangible > ListItem
 * 
 * An list item, e.g. a step in a checklist or how-to description.
 * 
 * @see https://schema.org/ListItem
 */
export const listItemSchema = z.object({
  item: z.string().or(thingSchema),
  name: z.ostring(),
  position: z.number()
})

/** Thing > Intangible > ItemList > BreadcrumbList
 * 
 * A BreadcrumbList is an ItemList consisting of a chain of linked Web pages,  
 * typically described using at least their URL and their name, and typically ending with the current page.
 * 
 * The position property is used to reconstruct the order of the items in a BreadcrumbList.
 * The convention is that a breadcrumb list has an itemListOrder of ItemListOrderAscending (lower values listed first),
 * and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail,
 * e.g. with a site or section homepage.
 * The specific values of 'position' are not assigned meaning for a BreadcrumbList,
 * but they should be integers, e.g. beginning with '1' for the first item in the list.
 * 
 * @see https://schema.org/BreadcrumbList
 * @see https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 */
export const breadcrumbListSchema = z.object({
  "@context": z.ostring().default(schemaURL),
  "@type": z.ostring().default("BreadcrumbList"),
  itemListElement: z.array(listItemSchema),
})

export type Thing = z.infer<typeof thingSchema>;
export type Organization = z.infer<typeof organizationSchema>;
export type Person = z.infer<typeof personSchema>;
export type Assignee = Person | Organization
export type Assignees = Assignee[]
export type Article = z.infer<typeof articleSchema>;
export type ProfilePage = z.infer<typeof profilePageSchema>;
export type ListItem = z.infer<typeof listItemSchema>;
export type BreadcrumbList = z.infer<typeof breadcrumbListSchema>;
