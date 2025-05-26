import { load } from "cheerio";
import { optimize, type PluginConfig } from "svgo";
import * as emoji from "node-emoji";
import unresolvedTwemoji from "@twemoji/api";
import type { Twemoji } from "@twemoji/api";

// Maybe only my environment
const twemoji = unresolvedTwemoji as unknown as Twemoji;

type Props = {[key: string]: unknown} | Record<string, unknown>

export async function getOptimizedSvg(
  url: string,
  className?: string,
  attributes: Props = {},
): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    return;
  }

  const plugins: PluginConfig[] = [
    {
      name: "convertPathData",
      params: {
        floatPrecision: 2,
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: getAttributes(attributes),
      },
    },
  ];

  if (className != null && className.length >= 1) {
    plugins.push({
      name: "addClassesToSVGElement",
      params: {
        className: className,
      },
    });
  }

  return optimize(await response.text(), {
    multipass: true,
    plugins: plugins,
  }).data;
}

function getAttributes(props: Props): Record<string, string>[] {
  return Object.entries(props).map((prop: [string, unknown]) => ({ [prop[0]]: String(prop[1]) }));
}

export async function getTwemojiSVG(
  name: string,
  className?: string,
  attributes?: Props,
): Promise<string | undefined> {
  const url = getTwemojiUrlWithName(name);
  if (url == null) {
    return;
  }

  return getOptimizedSvg(url, className, attributes);
}

/**
 * Get a Twemoji CDN URL from the given emoji character.
 *
 * @param emojiChar - An emoji character
 * @returns Twemoji CDN URL
 */
export function getTwemojiUrl(emojiChar: string): string | undefined {
  if (emoji.find(emojiChar) == null) {
    return;
  }

  const twemojiDOM = twemoji.parse(emojiChar, {
    folder: "svg",
    ext: ".svg",
  });

  if (twemojiDOM.length <= 0) {
    return;
  }

  return load(twemojiDOM)("img").attr("src");
}

/**
 * Get a Twemoji CDN URL from the given emoji name.
 *
 * @param name - An emoji name
 * @returns Twemoji CDN URL
 */
export function getTwemojiUrlWithName(name: string): string | undefined {
  const emojiChar = emoji.get(name);
  if (emojiChar == null) {
    return;
  }

  return getTwemojiUrl(emojiChar);
}
