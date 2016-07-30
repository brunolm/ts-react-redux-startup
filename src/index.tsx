import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { default as reducers } from './reducers';
import Routes from './routes';

const store = createStore(reducers, applyMiddleware(thunk));

render(
  <Provider store={ store } key="provider">
    <Router history={ browserHistory } children={ Routes } />
  </Provider>,
  document.getElementById('root')
);
