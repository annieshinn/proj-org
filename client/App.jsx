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
import { Switch, Route } from 'react-router-dom';
// import marketsReducer from '../reducers/marketsReducer.js'

//sends in all the data
const mapStateToProps = state => ({
  projectState: state.projectR,
});

//sends in all the actions
const mapDispatchToProps = dispatch => ({
  getData: data => dispatch(actions.getData(data)),
  makeProject: data => dispatch(actions.makeProject(data)),
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('App mounted!')
    console.log('App props:', this.props);
    
    fetch('/project/all')
      .then((res) => res.json())
      .then((res) => this.props.getData(res))//this.setState({projects: res}))
      .catch((err) => err);
  }

  componentDidUpdate() {
    console.log('App updated!\nNew App props: ', this.props);
  }

  render() {
    const projectArr = [];

    this.props.projectState.projects.forEach((project, i) => {
      // console.log(project);
      projectArr.push(<Project projectInfo={project} key={i}/>)
    });

    return(
      <div className="app">

        <h1 id="header">multi-project-organizer</h1>

        <div className="buttonArea">
          <input id="projectInput"></input>
          <button id="addProject" onClick={this.props.makeProject}>Add Project</button>
        </div>


        {/* <Switch>
          <Route
            exact
            path="/"
            component={ProjectContainer}
          />
          <Route
            exact
            path="/create"
            component={CreateCharacter}
          />
        </Switch> */}

        <div id="projectContainer">
          {projectArr}
        </div>

      </div>
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(App);