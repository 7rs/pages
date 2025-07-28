import { formatForParamParser as logf } from "@scripts/pagefind/utils.ts";

/**
 * `"params[0]=value0"` -> `[6, 8]`
 *
 * 1. A definition the start of the array index.
 * 2. A definition the end of the array index.
 */
type DefinitionIndexes = [number, number];
/**
 * `"params[0]=value0"` -> `["params", 0, "value0"]`
 *
 * 1. A key of param.
 * 2. An index of array.
 * 3. A value of param.
 */
type ArrayParam = [string, number, string];

type Filter = { [key: string]: string | string[] };

export class ParamParser {
  readonly ARRAY_INDEX_START_CHAR = "[";
  readonly ARRAY_INDEX_END_CHAR = "]";

  /**
   * Finds the definition of the array index.
   *
   * @param key Key of the param
   * @returns `DefinitionIndexes` Starting and ending indexes of the array index
   */
  findArrayIndex(paramKey: string): DefinitionIndexes | undefined {
    const arrayEndIndex = paramKey.length - 1;
    if (paramKey[arrayEndIndex] !== this.ARRAY_INDEX_END_CHAR) {
      return;
    }

    let arrayStartIndex = -1;

    for (let i = arrayEndIndex - 1; i >= 1; i--) {
      if (paramKey[i] === this.ARRAY_INDEX_START_CHAR) {
        if (paramKey[i - 1] === this.ARRAY_INDEX_START_CHAR) {
          return;
        }

        arrayStartIndex = paramKey.indexOf(this.ARRAY_INDEX_START_CHAR, i - 1);
        break;
      }

      if (Number.isNaN(Number.parseInt(paramKey[i]))) {
        return;
      }
    }

    return [arrayStartIndex, arrayEndIndex];
  }

  toArrayParam(paramKey: string, paramValue: string): ArrayParam | undefined {
    const definitionIndexes = this.findArrayIndex(paramKey);
    if (definitionIndexes == null) {
      return;
    }

    const [arrayStartIndex, arrayEndIndex] = definitionIndexes;
    const index = Number.parseInt(paramKey.slice(arrayStartIndex + 1, arrayEndIndex));
    if (Number.isNaN(index)) {
      return;
    }

    return [paramKey.slice(0, arrayStartIndex), index, paramValue];
  }

  sortParams(params: (ArrayParam | string)[]): void {
    params.sort((prev, next) => {
      if (typeof prev === "string") {
        if (typeof next === "string") {
          return prev < next ? -1 : 1;
        }
        return -1;
      } else if (typeof next === "string") {
        return 1;
      }

      if (prev[0] < next[0]) {
        return -1;
      } else if (prev[0] > next[0]) {
        return 1;
      }

      return prev[1] - next[1];
    });
  }

  getParsedParams(items: [string, string][]): (ArrayParam | string)[] {
    const params = items.map((tuple) => this.toArrayParam(...tuple) || tuple[0]);

    this.sortParams(params);

    return params;
  }

  toFilter(params: URLSearchParams, parsedParamDatas: (ArrayParam | string)[]): Filter {
    const parsedParams = {};
    const ignores = new Set<string>();

    for (const d of parsedParamDatas) {
      if (typeof d === "string") {
        if (ignores.has(d)) {
          continue;
        }

        const p = params.getAll(d);
        if (p.length <= 1) {
          parsedParams[d] = p[0];
        } else {
          parsedParams[d] = p;
          ignores.add(d);
        }

        continue;
      }

      const [key, _, value] = d;

      if (typeof parsedParams[key] === "undefined") {
        parsedParams[key] = [value] as string[];
      } else if (typeof parsedParams[key] === "string") {
        parsedParams[key] = [parsedParams[key], value] as string[];
      } else {
        parsedParams[key].push(value);
      }
    }

    return parsedParams;
  }

  parseParams(params: URLSearchParams): Filter {
    const s = performance.now();

    const parsedParams = this.getParsedParams(Array.from(params.entries()));
    const result = this.toFilter(params, parsedParams);

    console.debug(logf(`Parsed: ${(performance.now() - s) / 1000}s`));

    return result;
  }

  toParamSet(key: string, stringArray: string[]): [string, string][] {
    return stringArray.map((v) => [`${key}`, v]);
  }

  toParamArray(parsedParam: Filter): [string, string][] {
    return Object.keys(parsedParam).flatMap((key) =>
      typeof parsedParam[key] === "string" ? [[key, parsedParam[key]]] : this.toParamSet(key, parsedParam[key]),
    );
  }

  toQuery(paramArray: [string, string][]): string {
    return paramArray.map((param) => `${param[0]}:${param[1]}`).join(" ");
  }
}
