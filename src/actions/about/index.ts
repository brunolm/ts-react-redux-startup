export { init } from './init';
export { changeText } from './change-text';

import { types as changeTextTypes } from './change-text';
import { types as initTypes } from './init';

export const types = {
  ...initTypes,
  ...changeTextTypes,
};
