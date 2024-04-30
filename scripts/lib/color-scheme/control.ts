import { writable, get } from 'svelte/store';

import { SchemeStatus } from './models.ts';
import { loadScheme } from './storage.ts';

const activeScheme = writable(loadScheme());

function getNextScheme() {
  switch (get(activeScheme)) {
    case SchemeStatus.System:
      return SchemeStatus.Light;
    case SchemeStatus.Light:
      return SchemeStatus.Dark;
    default:
      return SchemeStatus.System;
  }
}
