/**
 * ************************************
 *
 * @module Project-ceating Modal Page!
 * @author
 * @date
 * @description stateless component that renders "create project" modal
 *
 * ************************************
 */

import React, { Component } from "react";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   console.log('Add-Project Modal mounted!')
  // }
  
  // componentDidUpdate() {
  //   console.log('Add-Project Modal updated!\nNew Project props: ', this.props);
  // }
  
  render() {
    // console.log('Add-Project Modal props: ', this.props.projectInfo);

    return (
    <div id="addProjectModal">
        <label>Project Name:</label>
        <textarea rows="1" className="name" onChange={(e) => this.props.setNewProjName(e.target.value)}></textarea>

        <label>Project Description:</label>
        <textarea rows="3" className="description" onChange={(e) => this.props.setNewProjDesc(e.target.value)}></textarea>
        {/* stretch feature... prjoect tasks? */}

        <div className="buttonArea">
          <button id="cancelProject" onClick={this.props.cancelProject}>Cancel</button>
          <button id="submitProject" onClick={this.props.submitProject}>Submit</button>
        </div>
      </div>
  )}
};

export default Project;