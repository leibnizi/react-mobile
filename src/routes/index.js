import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../screens';

import FirstTab from '../screens/FirstTab';
import SecondTab from '../screens/SecondTab';
import ThirdTab from '../screens/ThirdTab';
import FourthTab from '../screens/FourthTab';

export default class BottomTab extends Component {
  render() {
    return (
      <Router>
        <div className="router">
          <Route exact path="/" component={FirstTab} />
          <Route exact path="/SecondTab" component={SecondTab} />
          <Route exact path="/ThirdTab" component={ThirdTab} />
          <Route exact path="/FourthTab" component={FourthTab} />
          <footer className="footer">
            <section><Link to="/">FirstTab</Link></section>
            <section><Link to="/SecondTab">SecondTab</Link></section>
            <section><Link to="/ThirdTab">ThirdTab</Link></section>
            <section><Link to="/FourthTab">FourthTab</Link></section>
          </footer>
        </div>
      </Router>
    );
  }
}
