import React, { Component } from 'react';
import BottomTab from './routes'

import 'antd-mobile/dist/antd-mobile.css';
import './styles/index.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BottomTab />
      </div>
    );
  }
}

export default App;
