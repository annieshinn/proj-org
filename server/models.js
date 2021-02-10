const mongoose = require('mongoose');
const { Schema } = mongoose; 

const projectSchema = new Schema({
  // A "title" that is a string
  projectName: {type: String, required: true},
  // A "description" that is a string
  description: {type: String, required: true},
  // A
  tasks: {type: Array}

  // Stretch: Date created
});

const taskSchema = new Schema({
  // A "title" that is a string
  taskName: {type: String, required: true},
  // A "description" that is a string
  description: {type: String, required: true},
  // a "complete" boolean to indicate whether task has been completed
  complete: {type: Boolean},
  // Stretch: Date created
});

// You must export your model through module.exports
const ProjectModel = mongoose.model('Project', projectSchema);
const TaskModel = mongoose.model('Task', taskSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  ProjectModel,
  TaskModel,
};
