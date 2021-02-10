import React, { Component } from 'react';
// import Wrapper from './containers/MainContainer.jsx';

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
        {'omfg..?'}
        {/* <Wrapper/> */}
      </div>
    );
  }
}

export default App;