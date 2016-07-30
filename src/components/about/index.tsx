import * as clone from 'clone';
import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../../actions/about';
import Contact from './contact';

class About extends React.Component<any, any> {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    message: React.PropTypes.string.isRequired,
  };

  render() {
    const { dispatch, message } = this.props;
    return (
      <div>
        <p>This is the about page</p>
        <ul>
          <li><Link to={`/`}>Go home you are drunk!</Link></li>
          <li><Link to={`/void`}>Go to the void!</Link></li>
        </ul>
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

const mapStateToProps = state => {
  return Object.assign({}, clone(state.about));
};

export default connect(mapStateToProps)(About);
