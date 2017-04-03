import { RouterState, routerReducer as routing } from 'react-router-redux';

import { about } from './about';
import { combineReducers } from 'redux';
import { home } from './home';

export interface RootState {
  home: { };
  about: { };
  routing: RouterState;
}

const App = combineReducers({
  home,
  about,
  routing,
});

export default App;
