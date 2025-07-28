export const ImageTypes = {
  Raw: 0,
  IconifyIcon: 1,
  TwemojiIcon: 2,
} as const;
export type ImageTypes = (typeof ImageTypes)[keyof typeof ImageTypes];

export interface Result {
  resultId: string;
  title: string;
  image?: string;
  imageType?: ImageTypes;
  description?: string;
  filters: { [key: string]: string };
  metadatas: { [key: string]: string };
}

export interface paramData {
  query: string;
  filters: { [key: string]: string };
  metadatas: { [key: string]: string };
}

export interface Suggest {
  key: string;
  value: string;
  count?: number;
}

export type getSuggests = (rawQuery: string) => Suggest[];
export type getParams = (search: string) => paramData;

export const getSuggests = ((rawQuery) => {
  return rawQuery
    .split(" ")
    .map((query) => {
      if (!query.includes(":")) {
        return undefined;
      }

      const [key, value, ...broken] = query.split(":");
      if (typeof broken !== "undefined") {
        return undefined;
      }

      return { key: key, value: value } as Suggest;
    })
    .filter((suggest) => typeof suggest !== "undefined");
}) satisfies getSuggests;
