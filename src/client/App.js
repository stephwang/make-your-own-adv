import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import About from './pages/About';
import Hello from './pages/Hello';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Error from './pages/Error';

import Nav from './components/Nav';
import './css/app.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Nav />
          <Switch>
            <Route exact path='/' component={Hello} />
            <Route exact path='/about' component={About} />
            <Route exact path='/donate' component={Donate} />
            <Route exact path='/contact' component={Contact} />
            <Route component={Error} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}