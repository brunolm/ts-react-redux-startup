import { Action } from '../base-reducer';
import { InitialState } from './base-reducer';
import { action as baseAction } from '../../actions/home/base-action';
import { default as init } from './init';
import { types } from '../../actions/home';

const reducer = {
  [types.Init]: init,
} as { [key: string]: (state: typeof InitialState, action: Action) => any; };

export const home = (state = InitialState, action) => {
  if (action.namespace !== baseAction.namespace) {
    return state;
  }

  return reducer[action.type] ? reducer[action.type](state, action) : state;
};
