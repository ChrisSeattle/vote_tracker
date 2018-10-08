import React, { Component } from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Votetracker from './components/vote_tracker/vote_tracker.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Votetracker></Votetracker>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
