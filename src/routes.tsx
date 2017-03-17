import * as React from 'react';

import About from './components/About';
import App from './components/App';
import NoMatch from './components/NoMatch';
import { Route } from 'react-router';

export default (
  <Route path="/">
    <Route path="/" component={ App } />
    <Route path="/about" component={ About } />
    <Route path="*" component={ NoMatch }/>
  </Route>
);
