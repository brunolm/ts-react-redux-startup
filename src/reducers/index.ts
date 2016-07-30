import { combineReducers } from 'redux';

import { default as app } from './app';
import { default as about } from './about';

const App = combineReducers({
  app,
  about,
});

export default App;
