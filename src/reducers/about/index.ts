import { Action } from '../base-reducer';
import { InitialState } from './base-reducer';
import { action as baseAction } from '../../actions/about/base-action';
import { default as getData } from './get-data';
import { default as init } from './init';
import { types } from '../../actions/about';

const reducer = {
  [types.Init]: init,
  [types.GetDataError]: getData,
  [types.GetDataStart]: getData,
  [types.GetDataSuccess]: getData,
} as { [key: string]: (state: typeof InitialState, action: Action) => any; };

export const about = (state = InitialState, action) => {
  if (action.namespace !== baseAction.namespace) {
    return state;
  }

  return reducer[action.type] ? reducer[action.type](state, action) : state;
};
