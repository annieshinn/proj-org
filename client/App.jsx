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
import AddProjectModal from './components/AddProjectModal.jsx'


//sends in all the data
const mapStateToProps = state => ({
  projectState: state.projectR,
  taskState: state.taskR,
});

//sends in all the actions
const mapDispatchToProps = dispatch => ({
  getData: data => dispatch(actions.getData(data)),

  makeProject: data => dispatch(actions.makeProject(data)),
  cancelProject: data => dispatch(actions.cancelProject(data)),
  renderProject: data => dispatch(actions.renderProject(data)),
  setNewProjName: inputVal => dispatch(actions.setNewProjName(inputVal)),
  setNewProjDesc: inputVal => dispatch(actions.setNewProjDesc(inputVal)),
  
  makeTask: projectName => dispatch(actions.makeTask(projectName)),
  cancelTask: data => dispatch(actions.cancelTask(data)),
  renderTask: data => dispatch(actions.renderTask(data)),
  setNewTaskName: inputVal => dispatch(actions.setNewTaskName(inputVal)),
  setNewTaskDesc: inputVal => dispatch(actions.setNewTaskDesc(inputVal)),
});

class App extends Component {
  constructor(props) {
    super(props);
    this.submitProject = this.submitProject.bind(this);
    this.populateData = this.populateData.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  submitProject(e) {
    const projectName = document.querySelector('#projectName')
    const projectDescription = document.querySelector('#projectDescription')
    console.log('submitProject has been called')
    
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
    .catch((err) => err);
  }

  completeTask(projectNameAndTaskName) {
    // const projectName = e.className;
    // const taskName = e.id;
    console.log('LOOOOOK', projectNameAndTaskName)
    const underscoreToPercent = projectNameAndTaskName.replace(/_/g, '%20');

    const url = '/project/' + underscoreToPercent;

    const projectName = url.split('/')[2];

    console.log(projectName)


    // sends patch request
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify('true'),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      // .then(this.props.renderTask(projectName))
      .then(this.populateData)
      .catch((err) => err);

  }
  
  submitTask(projectName) {
    const taskName = document.querySelector('#taskName')
    const taskDescription = document.querySelector('#taskDescription')
    console.log('submitTask has been called')
    console.log('LOOKHERE', projectName)

    // HANDLE SPACING! WE REPLACE SPACE WITH _ FOR CLASS NAME
    // NOW REPLACE _ WITH %20 FOR URL
    const underscoreToPercent = projectName.replace(/_/g, '%20');

    const url = '/project/' + underscoreToPercent + '/task'

    const taskData = {
      taskName: this.props.taskState.newTask,
      description: this.props.taskState.newTaskDesc,
    };

    // sends post request to
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(taskData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this.props.renderTask(projectName))
      .then(this.populateData)
      .catch((err) => err);
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
  }

  render() {
    const projectArr = this.props.projectState.projects;

    // const noSpaceProj = TBC

    const projectComponentsArr = [];

    for (let i = projectArr.length - 1; i >= 0; i -= 1) {
      projectComponentsArr.push(<Project
        projectInfo={projectArr[i]}
        key={i}
        makeTask={this.props.makeTask}
        setNewTaskDesc={this.props.setNewTaskDesc}
        setNewTaskName={this.props.setNewTaskName}
        submitTask={this.submitTask}
        cancelTask={this.props.cancelTask}
        completeTask={this.completeTask}
      />)
    };

    return(
      <div className="app">

        <h1 id="header">multi-project-organizer</h1>

        <div className="buttonArea">
          <button id="addProject" onClick={this.props.makeProject}>Add Project</button>
        </div>

        <AddProjectModal
          setNewProjDesc={this.props.setNewProjDesc}
          setNewProjName={this.props.setNewProjName}
          submitProject={this.submitProject}
          cancelProject={this.props.cancelProject}
        />

        <div id="projectContainer">
          {projectComponentsArr}
        </div>

      </div>
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(App);