export const Categories = {
  Uncategorized: "uncategorized",
  Tech: "tech",
  Mind: "mind",
  Daily: "daily",
} as const;
export type Categories = (typeof Categories)[keyof typeof Categories];

export function categoryToJapanese(category: string) {
  switch (category) {
    case Categories.Tech:
      return "技術";
    case Categories.Mind:
      return "マインド";
    case Categories.Daily:
      return "近況・日記";
    default: // Uncategorized
      return "未分類";
  }
}
