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
    
    const taskArr = [];

    this.props.projectInfo.tasks.forEach((task, i) => {
      // console.log(task);
      taskArr.push(<Task taskInfo={task} key={i}/>)
    });

    return (
      <div className='project'> 
        
      <h1>project name: {this.props.projectInfo.projectName}</h1>
        description: {this.props.projectInfo.description}
        {taskArr}
      </div>
    );
  }
};

export default Project;