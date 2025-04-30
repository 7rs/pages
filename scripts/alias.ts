import path from "node:path";
import type { MapLike } from "typescript";
import type { AliasOptions } from "vite";

/**
 * In Astro template, `compilerOptions.paths` in `tsconfig.json` can be used as the import alias.
 * However, in others, may not work and must configure with Vite.
 *
 * This function copies `compilerOptions.paths` in `tsconfig.json`
 * entry to `resolve.alias` in `astro.config.ts`.
 *
 * Maybe this process isn't needed.
 *
 * - [🐛 BUG: Svelte integration not working with import Aliases #3729](https://github.com/withastro/astro/issues/3729)
 * - [Shared Options | Vite - resolve.alias](https://vite.dev/config/shared-options#resolve-alias)
 *
 * @param paths A value of `compilerOptions.paths` in `tsconfig.json`.
 * @param alias Alias that not included in `compilerOptions.paths` in `tsconfig.json`.
 */
export function getAliases(paths: MapLike<string[]>, alias: AliasOptions = {}): AliasOptions {
  let aliasesArray: AliasOptions = alias;

  for (const [_alias, _targetPath] of Object.entries(paths)) {
    if (_targetPath.length <= 0) {
      continue;
    }

    const aliases = {
      [_alias]: path.resolve(_targetPath[0]),
    };

    aliasesArray = {
      ...aliasesArray,
      ...aliases,
    };
  }

  return aliasesArray;
}
