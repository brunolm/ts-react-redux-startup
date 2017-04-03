import * as React from 'react';

export namespace Contact {
  export interface Props {
    message: string;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => any;
  }
}

export default class Contact extends React.Component<Contact.Props, { }> {
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={ this.props.onClick }>Dispatch action to change the message bellow</button>
        <p>
          { this.props.message }
        </p>
      </div>
    );
  }
}
