/**
 * ************************************
 *
 * @module Task-ceating Modal Page!
 * @author
 * @date
 * @description stateless component that renders "create Task" modal
 *
 * ************************************
 */

import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   console.log('Add-Task Modal mounted!')
  // }
  
  // componentDidUpdate() {
  //   console.log('Add-Task Modal updated!\nNew Task props: ', this.props);
  // }
  
  render() {
    // console.log('Add-Task Modal props: ', this.props.TaskInfo);

    return (
    <div id="addTaskModal" className={this.props.projectName}>
        <label>Task Name:</label>
        <textarea rows="1"
          className='name'
          onChange={(e) => this.props.setNewTaskName(e.target.value)}
        ></textarea>

        <label>Task Description:</label>
        <textarea
          rows="3"
          className='description'
          onChange={(e) => this.props.setNewTaskDesc(e.target.value)}
        ></textarea>

        <div className="buttonArea">
          <button id="cancelTask"
            className={this.props.projectName}
            onClick={(e) => this.props.cancelTask(e.target.className)}
          >Cancel</button>
          <button id="submitTask"
            className={this.props.projectName}
            onClick={(e) => this.props.submitTask(e.target.className)}
          >Submit</button>
        </div>
      </div>
  )}
};

export default Task;