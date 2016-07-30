import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './components/App';
import About from './components/About';
import NoMatch from './components/NoMatch';

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App } />
    <Route path="/about" component={ About } />
    <Route path="*" component={ NoMatch }/>
  </Router>
), document.getElementById('root'));
