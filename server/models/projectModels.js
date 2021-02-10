const mongoose = require('mongoose');
const { Schema } = mongoose; 

const projectSchema = new Schema({
  // A "title" that is a string
  title: {type: String, required: true},
  // A "description" that is a string
  description: {type: String, required: true},
  // Stretch: Date created
});

// You must export your model through module.exports
const ProjectModel = mongoose.model('Project', projectSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  ProjectModel,
  // Tasks
};
