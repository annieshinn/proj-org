/**
 * ************************************
 *
 * @module Project
 * @author
 * @date
 * @description stateless component that renders each project
 *
 * ************************************
 */

import React, { Component } from "react";
import Task from './Task.jsx'

class Project extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Project mounted!')
  }
  
  componentDidUpdate() {
    console.log('Project updated!\nNew Project props: ', this.props);
  }
  
  render() {
    console.log('Project props: ', this.props.projectInfo);
    
    const taskArr = this.props.projectInfo.tasks

    const taskComponentsArr = [];

    for (let i = 0; i < taskArr.length; i += 1) {
      taskComponentsArr.push(<Task taskInfo={taskArr[i]} key={i}/>)
    }

    return (
      <div className='project'> 
      
      <div id='projectInfo'>
        <h2>project name: {this.props.projectInfo.projectName}</h2>

        <div className="description">
          description: {this.props.projectInfo.description}
        </div>

      </div>

      <div className="buttonArea">
          {/* <button id="editProject">Edit Project</button> */}
          {/* <input id="taskInput"></input> */}
          {/* <button id="addTask">Add Task</button> */}
      </div>

      <div id='taskContainer'>
        {taskComponentsArr}
      </div>
      </div>
    );
  }
};

export default Project;