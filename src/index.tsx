import './index.scss';

import * as React from 'react';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
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
      <div>
        <header>
          <div className="row">
            <div className="col-2">
              TS / React / Redux
            </div>
            <nav className="col-10">
              <Link to={'/'}>Home</Link>
              -
              <Link to={'/about'}>About</Link>
              -
              <Link to={'/void'}>Void</Link>
            </nav>
          </div>
        </header>
        <main>
          <Route exact path="/" component={ App } />
          <Route path="/about" component={ About } />
          <Route path="*" component={ NoMatch }/>
        </main>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

declare var module: any;
if (module.hot) {
  module.hot.accept();
}
