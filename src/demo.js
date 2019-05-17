import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import AmazonReview from './AmazonReview';

class Demo extends Component {
    render() {
        return (
           <Dropdown></Dropdown>
        )
    }   
}

class Dropdown extends Component {
    state = {
      isOpen: false
    };
  
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  
    render() {
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div className="dropdown" onClick={this.toggleOpen}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Company?
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="MicrosoftReview">
              Microsoft
            </a>
            <a className="dropdown-item" href="AmazonReview">
              Amazon
            </a>
            <a className="dropdown-item" href="DeloitteReview">
              Deloitte
            </a>
          </div>
        </div>
      );
    }
  }
  

export default Demo;