import * as React from 'react';

export default class Contact extends React.Component<any, any> {
  static propTypes = {
    message: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <button onClick={ this.props.onClick }>Dispatch action to change the message bellow</button>
        <p>
          { this.props.message }
        </p>
      </div>
    );
  }
}
