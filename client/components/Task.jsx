/**
 * ************************************
 *
 * @module  Task
 * @author
 * @date
 * @description stateless component that renders each task
 *
 * ************************************
 */

import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Task mounted!')
  }
  
  componentDidUpdate() {
    console.log('Task updated!\nNew Task props: ', this.props);
  }
  
  render() {
    console.log('Task props: ', this.props.taskInfo);

    return (
      <div> 
        
      <h1>task name: {this.props.taskInfo.taskName}</h1>
        description: {this.props.taskInfo.description}
      </div>
    );
  }
};

export default Task;