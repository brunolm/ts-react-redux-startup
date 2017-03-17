import * as React from 'react';

import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Routes from './routes';
import { createBrowserHistory } from 'history';
import { default as reducers } from './reducers';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
const history = syncHistoryWithStore(createBrowserHistory() as any, store);

render(
  <Provider store={ store } key="provider">
    <Router history={ history } children={ Routes } />
  </Provider>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept();
}
