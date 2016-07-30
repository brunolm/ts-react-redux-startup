import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import About from './components/About';
import NoMatch from './components/NoMatch';

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ App } />
    <Route path="/about" component={ About } />
    <Route path="*" component={ NoMatch }/>
  </Router>
);
