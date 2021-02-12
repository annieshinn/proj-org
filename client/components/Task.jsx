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
    console.log('Task props: ', this.props);

    return (
      <div className={this.props.class}> 
        
      <h3>
        {this.props.taskInfo.taskName}
      </h3>
      
      <button id="completeTask"
        // key={this.props.taskInfo.taskName}
        className={this.props.projectName +'/task/' + this.props.taskInfo.taskName}
        onClick={(e) => this.props.completeTask(e.target.className)}
      >Complete Task</button>

      <hr></hr>

      <div className="description">
        {this.props.taskInfo.description}
      </div>
      

      <div className="buttonArea">
          {/* <button id="editTask">Edit Task</button> */}
          {/* <button id="moreInfo">More Info</button> */}
      </div>

      </div>
    );
  }
};

export default Task;