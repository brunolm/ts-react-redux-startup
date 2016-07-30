import * as clone from 'clone';

const InitialState = {
  message: 'Hello about!',
};

const about = (state = InitialState, action) => {
  switch (action.type) {
    case 'ABOUT_ALERT_MESSAGE':
      return Object.assign(clone(state), {
        message: `Success: ${action.success} Message: ${Math.random()}`,
      });
    default:
      return InitialState;
  }
};

export default about;
