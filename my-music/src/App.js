import React, { Component } from 'react';
import './App.less';
import Router from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router />
      </div>
    );
  }
}

export default App;
