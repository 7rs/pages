export function toParamArray(key: string, stringArray: string[]): [string, string][] {
  return stringArray.map((v, i) => [`${key}[${i}]`, v]);
}

export function toParamSet(key: string, stringArray: string[]): [string, string][] {
  return stringArray.map((v) => [`${key}`, v]);
}

export function encodeURL(params: [string, string][]) {
  return `?${params.map((param) => `${param[0]}=${param[1]}`).join("&")}`;
}
