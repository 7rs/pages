import { remark } from "remark";
import html from "remark-html";
import { load } from "cheerio";

async function markdownToHtml(markdown: string): Promise<string> {
  return (await remark().use(html).process(markdown)).toString();
}

export class MarkdownStringObject {
  constructor(private readonly value: string) {}

  async toHtml(): Promise<string> {
    return load(await markdownToHtml(this.value))("p").html() || "";
  }
}

export const MarkdownString = (...values: string[]) => new MarkdownStringObject(values.join(" "))
