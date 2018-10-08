import React, { Component } from 'react';
import Header from './components/header/header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <h1>Hello World!</h1>
        </Header>

      </React.Fragment>
    );
  }
}

export default App;
