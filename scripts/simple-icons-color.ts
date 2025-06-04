import { titleToSlug } from "simple-icons/sdk";

interface SimpleIconsData {
  [key: string]: string;
  title?: string;
  hex?: string;
}

async function getIconDatas(): Promise<SimpleIconsData[]> {
  const response = await fetch(
    "https://raw.githubusercontent.com/simple-icons/simple-icons/refs/heads/develop/data/simple-icons.json",
  );

  if (!response.ok) {
    return;
  }

  return await response.json();
}

export async function getSimpleIconsColor(slug: string): Promise<string | undefined> {
  const datas = await getIconDatas();
  if (datas == null || datas.length <= 0) {
    return;
  }

  for (const data of datas) {
    if (slug !== titleToSlug(data.title)) {
      continue;
    }

    return data.hex;
  }
}
