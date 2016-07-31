import mirror from '../utils/mirror';

export const types = mirror('App', {
  Init: undefined,
});

export function init() {
  return { type: types.Init };
}
