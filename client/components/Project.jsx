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
import AddTaskModal from './AddTaskModal.jsx'

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
    
    // HANDLE SPACING! FOR PROJECTS WITH SPACES
    const noSpaceName = this.props.projectInfo.projectName.replace(/\s/g, '_');

    for (let i = taskArr.length - 1; i >= 0; i -= 1) {
      if(taskArr[i].complete === false) {
        taskComponentsArr.push(<Task
          taskInfo={taskArr[i]}
          key={i}
          projectName={noSpaceName}
          completeTask={this.props.completeTask}
          class='task'/>)
      }
    }

    for (let i = taskArr.length - 1; i >= 0; i -= 1) {
      if(taskArr[i].complete === true) {
        taskComponentsArr.push(<Task
          taskInfo={taskArr[i]}
          key={i}
          projectName={noSpaceName}
          completeTask={this.props.completeTask}
          class='completedTask'/>)
      }
    }

    return (
      <div className='project'> 
      
      <div id='projectInfo'>
        <h2 className='projectName'>
          {this.props.projectInfo.projectName}
        </h2>

        <hr style={{width: '300px'}}></hr>

        <div className="description">
          {this.props.projectInfo.description}
        </div>

      </div>

      <div className="buttonArea">
          {/* <button id="editProject">Edit Project</button> */}
          {/* <input id="taskInput"></input> */}
          <button id="addTask"
            className={noSpaceName}
            onClick={(e) => this.props.makeTask(e.target.className)}
          >Add Task</button>
      </div>

      <AddTaskModal
        makeTask={this.props.makeTask}
        setNewTaskDesc={this.props.setNewTaskDesc}
        setNewTaskName={this.props.setNewTaskName}
        submitTask={this.props.submitTask}
        cancelTask={this.props.cancelTask}
        projectName={noSpaceName}
      />

      <div id='taskContainer'>
        {taskComponentsArr}
      </div>
      </div>
    );
  }
};

export default Project;