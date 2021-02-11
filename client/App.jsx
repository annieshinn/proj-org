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
  cancelProject: data => dispatch(actions.cancelProject(data)),
  renderProject: data => dispatch(actions.renderProject(data)),
  setNewProjName: inputVal => dispatch(actions.setNewProjName(inputVal)),
  setNewProjDesc: inputVal => dispatch(actions.setNewProjDesc(inputVal)),
});

class App extends Component {
  constructor(props) {
    super(props);
    this.submitProject = this.submitProject.bind(this);
    this.populateData = this.populateData.bind(this);
  }
  
  submitProject(name, description) {
    const projectName = document.querySelector('#projectName')
    const projectDescription = document.querySelector('#projectDescription')
    console.log('submitProject has been called')
    console.log(projectName)

    const projectData = {
      projectName: this.props.projectState.newProj,
      description: this.props.projectState.newProjDesc,
    };

    // sends message
    fetch('/project', {
      method: 'POST',
      body: JSON.stringify(projectData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this.props.renderProject)
      .then(this.populateData)
  }

  populateData() {    
    fetch('/project/all')
      .then((res) => res.json())
      .then((res) => this.props.getData(res))//this.setState({projects: res}))
      .catch((err) => err);
  }

  componentDidMount() {
    console.log('App mounted!')
    console.log('App props:', this.props);

    this.populateData();
  }

  componentDidUpdate() {
    console.log('App updated!\nNew App props: ', this.props);
    
    // fetch('/project/all')
    //   .then((res) => res.json())
    //   .then((res) => this.props.getData(res))//this.setState({projects: res}))
    //   .catch((err) => err);
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
          {/* <input id="projectInput"></input> */}
          <button id="addProject" onClick={this.props.makeProject}>Add Project</button>
        </div>

        <div id="addProjectModal">
          <label>Project Name:</label>
          <input id="projectName" onChange={(e) => this.props.setNewProjName(e.target.value)}></input>

          <label>Project Description:</label>
          <input id="projectDescription" onChange={(e) => this.props.setNewProjDesc(e.target.value)}></input>
          {/* stretch feature... prjoect tasks? */}

          <div className="buttonArea">
            <button id="cancelProject" onClick={this.props.cancelProject}>Cancel</button>
            <button id="submitProject" onClick={this.submitProject}>Submit</button>
          </div>
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