import { SchemeStatus } from './models.ts';

export const schemeStatusKey = 'schemeStatus';

export function saveScheme(scheme: SchemeStatus, key: string = schemeStatusKey) {
  if (scheme in SchemeStatus) {
    window.localStorage.setItem(key, scheme);
  }
}

export function loadScheme(key: string = schemeStatusKey): SchemeStatus {
  const status = window.localStorage.getItem(key);
  if (status && status in SchemeStatus) {
    return SchemeStatus[status];
  }

  return SchemeStatus.System;
}

export function clearScheme(key: string = schemeStatusKey) {
  window.localStorage.removeItem(key);
}
