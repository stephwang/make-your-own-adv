import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Hello from './Hello';
import About from './About';
import Donate from './Donate';
import Contact from './Contact';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Hello}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/donate' component={Donate}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}