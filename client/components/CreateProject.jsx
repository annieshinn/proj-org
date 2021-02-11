/**
 * ************************************
 *
 * @module Project-ceating Landing Page!
 * @author
 * @date
 * @description stateless component that renders "create project" page
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
    console.log('Create-Project mounted!')
  }
  
  componentDidUpdate() {
    console.log('Create-Project updated!\nNew Project props: ', this.props);
  }
  
  render() {
    console.log('Create-Project props: ', this.props.projectInfo);
    
    const taskArr = [];

    this.props.projectInfo.tasks.reverse().forEach((task, i) => {
      // console.log(task);
      taskArr.push(<Task taskInfo={task} key={i}/>)
    });

    return (
      <div>hello from create project</div>
    );
  }
};

export default Project;