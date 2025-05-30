import { getDOMParser } from "@scripts/dom.ts";
import { addDetailCache, getCacheDetail } from "@scripts/detail-cache.ts";
import type { Detail } from "@scripts/detail-cache.ts";

export function getBaseDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

async function getDetailFromGitHub(url: string): Promise<Detail | undefined> {
  const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/);
  if (match == null) {
    return;
  }

  const response = await fetch(`https://api.github.com/repos/${match[1]}/${match[2]}`);
  if (!response.ok) {
    return;
  }

  const data = await response.json();

  return {
    title: data.full_name,
    description: data.description,
    image: `https://opengraph.githubassets.com/1/${data.full_name}`,
    favicon: "https://github.githubassets.com/favicons/favicon.svg",
    baseDomain: "github.com",
  };
}

async function getDetailFromDOM(url: string) {
  const $ = await getDOMParser(url);

  const baseDomain = getBaseDomain(url);
  const favicon = (() => {
    const _favicon = $('head>link[rel="icon"]').attr("href");
    if (_favicon == null) {
      return _favicon;
    }

    if (_favicon.startsWith("/")) {
      return `https://${baseDomain}${_favicon}`;
    }
    if (!_favicon.startsWith("http")) {
      return `https://${baseDomain}/${_favicon}`;
    }

    return _favicon;
  })();

  return {
    title: $('head>meta[property="og:title"]').attr("content") || $("head>title").text(),
    description:
      $('head>meta[property="og:description"]').attr("content") || $('head>meta[name="description"]').attr("content"),
    image: $('head>meta[property="og:image"]').attr("content"),
    favicon: favicon,
    baseDomain: baseDomain,
  };
}

async function getDetailWithBaseDomain(url: string): Promise<Detail | undefined> {
  switch (getBaseDomain(url)) {
    case "github.com":
      return await getDetailFromGitHub(url);
    default:
      return await getDetailFromDOM(url);
  }
}

export async function getDetail(url: string): Promise<Detail | undefined> {
  const cache = await getCacheDetail(url);
  if (cache != null) {
    return cache;
  }

  const detail = await getDetailWithBaseDomain(url);
  if (detail == null) {
    return;
  }

  await addDetailCache(url, detail);

  return detail;
}
