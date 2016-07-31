import * as clone from 'clone';
import { types } from '../actions/app';

const InitialState = {
  title: 'TypeScript rocks!',
};

const app = (state = InitialState, action) => {
  switch (action.type) {
    case types.Init:
      return clone(InitialState);
    default:
      return state;
  }
};

export default app;
