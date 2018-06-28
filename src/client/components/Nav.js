import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav">
        <ul className="nav-list">
          <li><NavLink to="/about">About us</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/donate">Donate</NavLink></li>
        </ul>
      </div>
    );
  }
}