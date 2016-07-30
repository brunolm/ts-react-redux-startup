import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import './index.scss';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Link to={`/about`}>About Page</Link>
      </div>
    );
  }
}
