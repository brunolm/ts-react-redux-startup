import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

export default class About extends React.Component<any, any> {
  render() {
    return (
      <div>
        <p>This is the about page</p>
        <ul>
          <li><Link to={`/`}>Go home you are drunk!</Link></li>
          <li><Link to={`/void`}>Go to the void!</Link></li>
        </ul>
      </div>
    );
  }
}
