const DEFAULT_PAGEFIND_PATH = 'pagefind/pagefind.js';

export async function importPagefind(outputDir, pagefindPath = DEFAULT_PAGEFIND_PATH) {
  const pagefind = await import(/* @vite-ignore */ `/${outputDir}${pagefindPath}`);
  await pagefind.init();

  return await pagefind;
}
