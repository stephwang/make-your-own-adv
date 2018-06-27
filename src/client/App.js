import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Hello from './Hello';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Hello}/>
        </Switch>
      </main>
    );
  }
}