import React, {Component} from 'react';
import Nav from './Nav';

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="hello">
          {this.state.username ? (
            <h1>Hello {this.state.username}!</h1>
          ) : (
            <h1>Loading.. please wait!</h1>
          )}
        </div>

      </div>
    );
  }
}