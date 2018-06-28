import React, {Component} from 'react';

export default class Donate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="donate">Want to support team Strawberry?</h1>
        <p>We don't have any ways for you to support our projects, but we love your enthusiasm! Feel free to donate to your favorite charity</p>
      </div>
    );
  }
}