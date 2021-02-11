/**
 * ************************************
 *
 * @module Project Container
 * @author
 * @date
 * @description stateless component that renders all projects
 *
 * ************************************
 */

import React, { Component } from "react";
import Task from './Task.jsx'

class ProjectContainer extends Component {
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

    this.props.projectInfo.tasks.reverse().forEach((task, i) => {
      // console.log(task);
      taskArr.push(<Task taskInfo={task} key={i}/>)
    });

    return (
      <div>hello from project container</div>
    );
  }
};

export default ProjectContainer;