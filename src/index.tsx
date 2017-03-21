import * as React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';

import About from './components/About';
import App from './components/App';
import NoMatch from './components/NoMatch';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { default as reducers } from './reducers';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
const history = syncHistoryWithStore(createBrowserHistory() as any, store);

render(
  <Provider store={ store } key="provider">
    <Router history={ history }>
      <main>
        <Route exact path="/" component={ App } />
        <Route path="/about" component={ About } />
        <Route path="*" component={ NoMatch }/>
      </main>
    </Router>
  </Provider>,
  document.getElementById('root')
);

declare var module: any;
if (module.hot) {
  module.hot.accept();
}
