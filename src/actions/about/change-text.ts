import * as $ from 'jquery';

import { action } from './base-action';
import mirrorKeys from 'mirror-keys';

export const types = mirrorKeys(undefined, {
  GetDataError: undefined,
  GetDataStart: undefined,
  GetDataSuccess: undefined,
});

export function changeText() {
  return dispatch => {
    dispatch({ ...action, type: types.GetDataStart });

    $.ajax({
      url: '/api/data',
      success() {
        return dispatch({ ...action, type: types.GetDataSuccess, success: true });
      },
      error() {
        return dispatch({ ...action, type: types.GetDataError, success: false });
      },
    });
  };
}
