import * as clone from 'clone';

import { types } from '../actions/app';

const InitialState = {
  title: 'TypeScript rocks!',
};

const home = (state = InitialState, action) => {
  switch (action.type) {
    case types.Init:
      return clone(InitialState);
    default:
      return state;
  }
};

export default home;
