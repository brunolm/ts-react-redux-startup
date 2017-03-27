import * as React from 'react';
import * as actions from '../../actions/about';
import * as clone from 'clone';

import Contact from './contact';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

export namespace About {
  export interface Props extends RouteComponentProps<void> {
    dispatch: Dispatch<any>;
    message: string;
  }
  export interface State {
  }
}

const mapStateToProps = state => {
  return {
    ...clone(state.about),
  };
};

@(connect as any)(mapStateToProps)
export default class About extends React.Component<About.Props, About.State> {
  render() {
    const { dispatch, message } = this.props;

    return (
      <div>
        <p>This is the about page</p>
        <div>
          <h2>Author</h2>
          <a href="http://stackoverflow.com/users/340760/brunolm">
            <img src="http://stackoverflow.com/users/flair/340760.png" width="208" height="58"
              alt="profile for BrunoLM at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
              title="profile for BrunoLM at Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
          </a>
        </div>
        <p>&nbsp;</p>
        <h3>List</h3>
        <ul>
          <li><Link to={`/`}>Go home you are drunk!</Link></li>
          <li><Link to={`/void`}>Go to the void!</Link></li>
        </ul>
        <p>&nbsp;</p>
        <Contact
          message={ message }
          onClick={
            () => {
              dispatch(actions.changeText());
            }
          }
        />
      </div>
    );
  }
}
