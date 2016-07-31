import * as clone from 'clone';
import { types } from '../actions/about';

const InitialState = {
  message: 'Hello about!',
};

const about = (state = InitialState, action) => {
  switch (action.type) {
    case types.GetDataSuccess:
      return Object.assign(clone(state), {
        message: `Success: ${action.success} Message: ${Math.random()}`,
      });
    case types.GetDataError:
      return Object.assign(clone(state), {
        message: `Error...`,
      });
    default:
      return state;
  }
};

export default about;
