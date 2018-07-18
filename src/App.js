import React, { Component } from 'react';
import BottomTab from './routes'

import 'antd-mobile/dist/antd-mobile.css';
import './styles/index.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BottomTab />
      </div>
    );
  }
}

export default App;
