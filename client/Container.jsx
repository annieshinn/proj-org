/**
 * ************************************
 *
 * @module  Container
 * @author
 * @date
 * @description stateful component that renders...?
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';
import Project from './components/Project.jsx'
// import marketsReducer from '../reducers/marketsReducer.js'

//sends in all the data
const mapStateToProps = state => ({
  projectState: state.projectR,
});

//sends in all the actions
const mapDispatchToProps = dispatch => ({
  getData: data => dispatch(actions.getData(data)),
});

class Container extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Container mounted!')
    console.log('Container props:', this.props);
    
    fetch('/project/all')
      .then((res) => res.json())
      .then((res) => this.props.getData(res))//this.setState({projects: res}))
      .catch((err) => err);
  }

  componentDidUpdate() {
    console.log('Container updated!\nNew Container props: ', this.props);
  }

  render() {
    const projectArr = [];

    this.props.projectState.projects.forEach((project, i) => {
      // console.log(project);
      projectArr.push(<Project projectInfo={project} key={i}/>)
    });

    return(
      <div className="container">
        <h1 id="header">Container Header</h1>
        {projectArr}
      </div>
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Container);
// render(<MarketsContainer/>, document.getElementById('contents'))