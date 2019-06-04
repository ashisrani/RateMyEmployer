import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from './img/logo.jpg';

class Nav extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-sm fixed-top px-2">
            <Link className="navbar-brand p-0" to='/Home'>
                <img className="d-inline-block align-middle" id="nav-logo" src={logo} alt="spotify-logo" />
                <span className="d-inline-block align-middle" id="banner-text">Rate My Employer</span>
            </Link>
            <ul className="navbar-nav mr-2">
              <li className="nav-item">
                <Link className="nav-link" to='/Home'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Reviews'>Company and Team Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/ReviewG'>Write a Review</Link>
              </li>
            </ul>
          </nav>
        );
      }
}

export default Nav;