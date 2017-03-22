import './index.scss';

import * as React from 'react';
import * as clone from 'clone';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component<any, any> {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h1 className="color-test">Hello World! { this.props.title }</h1>
        <Link to={`/about`}>About Page</Link>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return Object.assign({}, clone(state.app));
};

export default connect(mapStateToProps)(Home);
