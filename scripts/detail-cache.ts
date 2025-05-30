import path from "node:path";
import { promises as fs } from "node:fs";
import { getBaseDomain } from "@scripts/detail.ts";

export const CACHE_DIR = path.resolve(".astro/link-card");

export interface Detail {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  baseDomain: string;
}

export interface DetailCache {
  url: string;
  detail: Detail;
}

export interface DetailCacheTable {
  caches: DetailCache[];
}

function getTablePath(baseDomain: string, cacheDir = CACHE_DIR): string {
  return path.join(cacheDir, `${baseDomain}.json`);
}

async function loadCache(baseDomain: string): Promise<DetailCacheTable | undefined> {
  const tablePath = getTablePath(baseDomain);

  try {
    return JSON.parse(await fs.readFile(tablePath, "utf-8"));
  } catch (e) {
    console.warn(`Failed reading ${tablePath}: ${e}`);
  }
}

export async function getCacheDetail(url: string, baseDomain = getBaseDomain(url)): Promise<Detail | undefined> {
  const cacheTable = await loadCache(baseDomain);
  if (cacheTable == null) {
    return;
  }

  for (const cache of cacheTable.caches) {
    if (url === cache.url) {
      return cache.detail;
    }
  }
}

export async function addDetailCache(url: string, data: Detail, cacheDir = CACHE_DIR, baseDomain = getBaseDomain(url)) {
  try {
    await fs.mkdir(cacheDir, { recursive: true });
  } catch {
    console.warn(`Directory is generated: ${cacheDir}`);
  }

  const tablePath = getTablePath(baseDomain);
  let newCacheTable: DetailCacheTable = null;

  const oldCacheTable = await loadCache(baseDomain);
  if (oldCacheTable != null) {
    newCacheTable = { caches: [...oldCacheTable.caches, { url: url, detail: data }] };
  } else {
    newCacheTable = { caches: [{ url: url, detail: data }] };
  }

  await fs.writeFile(tablePath, JSON.stringify(newCacheTable), "utf-8");
}
