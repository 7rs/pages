export const logf = (m, d?) => (d == null ? `[Pagefind] ${m}` : `[Pagefind] ${m}: ${d}`);

export async function loadPagefind(pagefindPath: string) {
  if (typeof window === "undefined") {
    return;
  }

  const s = performance.now();
  console.debug(logf("Loading pagefind"));

  try {
    const _pagefind = (await import(/* @vite-ignore */ `${pagefindPath}.js`)) as Pagefind;
    await _pagefind.options({ baseUrl: "/", excerptLength: 50 });
    await _pagefind.init();

    console.debug(logf("Loaded pagefind", `${(performance.now() - s) / 1000}s`));

    return _pagefind;
  } catch (e) {
    console.error(logf("Failed loading pagefind", e));
  }
}

