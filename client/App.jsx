/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
// import { render } from 'react-dom';
import Container from './Container.jsx';
// import addCard from './actions/actions.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  render() {
    console.log('App props:', this.props);
    return(
      <div>
        <h1>App Header</h1>
        <Container/>
      </div>
    );
  }
}

export default App;