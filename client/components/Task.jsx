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
      <div className='task'> 
        
      <h3>task name: {this.props.taskInfo.taskName}</h3>
      <hr></hr>

      <div className="description">
        description: {this.props.taskInfo.description}
      </div>
      

      <div className="buttonArea">
          <button id="editTask">Edit Task</button>
          <button id="completeTask">Complete Task</button>
          <button id="moreInfo">More Info</button>
      </div>

      </div>
    );
  }
};

export default Task;