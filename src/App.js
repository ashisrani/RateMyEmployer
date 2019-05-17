import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Nav from './Nav'
import writeReview from './writereview'
import Demo from './demo'
import AmazonReview from './AmazonReview'
import gForm from './gForm'
import DeloitteReview from './DeloitteReview'
import MicrosoftReview from './MicrosoftReview'
class App extends Component {
  render() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Nav/>
            <Switch>
              <Route path="/WriteReview" component={writeReview}/>
              <Route path="/Reviews" component={Demo}/>
              <Route path="/ReviewG" component={gForm}/>
              <Route path="/Home" component={Home}/>
              <Route path="/AmazonReview" component={AmazonReview}/>
              <Route path="/MicrosoftReview" component={MicrosoftReview}/>
              <Route path="/DeloitteReview" component={DeloitteReview}/>
              <Route path="/" component={Home}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
