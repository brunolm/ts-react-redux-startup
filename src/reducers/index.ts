import { RouterState, routerReducer as routing } from 'react-router-redux';

import { About } from '../components/About/index';
import { Home } from '../components/Home/index';
import { default as about } from './about';
import { combineReducers } from 'redux';
import { default as home } from './app';

export interface RootState {
  home: Home.State;
  about: About.State;
  routing: RouterState;
}

const App = combineReducers({
  home,
  about,
  routing,
});

export default App;
