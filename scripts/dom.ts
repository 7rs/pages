import { load, type BasicAcceptedElems } from "cheerio";
import type { AnyNode } from "domhandler";

async function getBodyText(response: Response): Promise<string | undefined> {
  if (!response.ok) {
    return;
  }

  return await response.text();
}

export async function getDOMParser(url: string) {
  const response = await fetch(url);

  return load(await getBodyText(response));
}

export async function getTextContent(url: string, selector?: BasicAcceptedElems<AnyNode>) {
  return (await getDOMParser(url))(selector).text();
}
