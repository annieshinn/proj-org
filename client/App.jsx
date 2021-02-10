/**
 * ************************************
 *
 * @module  App.jsx
 * @description Stateful component that renders Containner
 *
 * ************************************
 */

import React, { Component } from 'react';
import projectController from '../server/controllers/projectController.js';
import Container from './Container.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whereamiused: 'i dunno',
    }
  }
  
  componentDidMount() {
    console.log('App mounted!')
  }
  
  componentDidUpdate() {
    console.log('App updated!\nNew App state: ', this.state);
  }

  render() {
    console.log('App props:', this.props);
    console.log('App state:', this.state);
    return(
      <div>
        <h1>App Header</h1>
        <Container/>
      </div>
    );
  }
}

export default App;