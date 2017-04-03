import { InitialState } from './base-reducer';
import { types } from '../../actions/about';

export default function getData(state = InitialState, action) {
  switch (action.type) {
    case types.GetDataStart:
      return {
        ...state,
        loading: true,
      };

    case types.GetDataSuccess:
      return {
        ...state,
        loading: false,
        message: `Success: ${action.success} Message: ${Math.random()}`,
      };

    case types.GetDataError:
      return {
        ...state,
        loading: false,
        message: `Error...`,
      };

    default:
      return state;
  }
};
