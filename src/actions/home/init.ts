import { action } from './base-action';
import mirrorKeys from 'mirror-keys';

export const types = mirrorKeys(undefined, {
  Init: undefined,
});

export function init() {
  return { ...action, type: types.Init };
}
