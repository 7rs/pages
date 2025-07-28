import { formatForParamParser as logf } from "@scripts/pagefind/utils.ts";
import { toParamSet } from "@scripts/pagefind/param-generator.ts";

type ParamItem = [string, string];
type ArrayTokenResult = [number, number];
type ArrayParamData = [string, number, string];
type ParsedParamData = string | ArrayParamData;
type ParsedParams = { [key: string]: string | string[] };

const ARRAY_START_CHAR = "[";
const ARRAY_END_CHAR = "]";

function getParamItems(params: URLSearchParams): ParamItem[] {
  return Array.from(params.entries());
}

function parseArrayToken(key: string): ArrayTokenResult | undefined {
  const arrayEndIndex = key.length - 1;
  if (key[arrayEndIndex] !== ARRAY_END_CHAR) {
    return;
  }

  let arrayStartIndex = -1;

  for (let i = arrayEndIndex - 1; i >= 1; i--) {
    if (key[i] === ARRAY_START_CHAR) {
      if (key[i - 1] === ARRAY_START_CHAR) {
        return;
      }

      arrayStartIndex = key.indexOf(ARRAY_START_CHAR, i - 1);
      break;
    }

    if (Number.isNaN(Number.parseInt(key[i]))) {
      return;
    }
  }

  return [arrayStartIndex, arrayEndIndex];
}

function getParsedParamsData(key: string, value: string): ArrayParamData | undefined {
  const parsedArray = parseArrayToken(key);
  if (parsedArray == null) {
    return;
  }
  const [arrayStartIndex, arrayEndIndex] = parsedArray;

  const rawn = key.slice(arrayStartIndex + 1, arrayEndIndex);
  const n = Number.parseInt(rawn);
  if (Number.isNaN(n)) {
    return;
  }

  return [key.slice(0, arrayStartIndex), n, value];
}

function sortParsedParamDatas(parsedParamDatas: ParsedParamData[]): void {
  parsedParamDatas.sort((prev, next) => {
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

function getParsedParamsDatas(items: [string, string][]): ParsedParamData[] {
  const parsedParams = items.map((tuple) => getParsedParamsData(...tuple) || tuple[0]);

  sortParsedParamDatas(parsedParams);

  return parsedParams;
}

function _getParsedParams(params: URLSearchParams, parsedParamDatas: ParsedParamData[]): ParsedParams {
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

function getParsedParams(params: URLSearchParams): ParsedParams {
  return _getParsedParams(params, getParsedParamsDatas(getParamItems(params)));
}

export function parseParams(params: URLSearchParams): ParsedParams {
  const s = performance.now();

  const result = getParsedParams(params);

  console.debug(logf(`Parsed: ${(performance.now() - s) / 1000}s`));

  return result;
}

export function toParamArray(parsedParam: ParsedParams): [string, string][] {
  return Object.keys(parsedParam).flatMap((key) =>
    typeof parsedParam[key] === "string" ? [[key, parsedParam[key]]] : toParamSet(key, parsedParam[key]),
  );
}

export class ParamParser {
  window: Window & typeof globalThis;
  constructor(window: Window & typeof globalThis) {
    this.window = window;
  }
}
