import * as $ from 'jquery';

export const ABOUT_ALERT_MESSAGE = 'ABOUT_ALERT_MESSAGE';

export function changeText() {
  return dispatch => {
    $.ajax({
      url: '/api/data',
      success() {
        return dispatch({ type: ABOUT_ALERT_MESSAGE, success: true });
      },
      error() {
        return dispatch({ type: ABOUT_ALERT_MESSAGE, success: false });
      }
    });
  };
}
