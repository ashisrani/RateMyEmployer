import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Nav from './Nav'
import writeReview from './writereview'
import Demo from './demo'
import AmazonReview from './AmazonReview'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Nav/>
            <Switch>
              <Route path="/WriteReview" component={writeReview}/>
              <Route path="/Reviews" component={Demo}/>
              <Route path="/Home" component={Home}/>
              <Route path="/" component={AmazonReview}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
