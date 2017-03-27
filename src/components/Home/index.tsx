import './index.scss';

import * as React from 'react';

import { Link } from 'react-router-dom';
import { RootState } from '../../reducers/index';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

export namespace Home {
  export interface Props extends RouteComponentProps<void> {
    title: string;
  }

  export interface State {
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    ...state.home,
  } as Home.State;
};

@(connect as any)(mapStateToProps)
export default class Home extends React.Component<Home.Props, Home.State> {
  render() {
    return (
      <div>
        <h1 className="color-test">Hello World! { this.props.title }</h1>
        <Link to={`/about`}>About Page</Link>
      </div>
    );
  }
}
