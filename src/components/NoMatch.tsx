import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

export default class NoMatch extends React.Component<any, any> {
  render() {
    return (
      <div>No routes were found. Showing this page instead.</div>
    );
  }
}
