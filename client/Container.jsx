/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import marketsReducer from '../reducers/marketsReducer.js'
// import from child components...

//sends in all the data
const mapStateToProps = state => ({
  projects: state.project
});

//sends in all the actions
const mapDispatchToProps = dispatch => ({
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('MainContainer props:', this.props)
    // console.log('marketsReducer:', marketsReducer)

    return(
      <div className="container">
        <h1 id="header">Container Header</h1>
      </div>
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
// render(<MarketsContainer/>, document.getElementById('contents'))