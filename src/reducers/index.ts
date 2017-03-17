import { default as about } from './about';
import { default as app } from './app';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const App = combineReducers({
  app,
  about,
  routing,
});

export default App;
