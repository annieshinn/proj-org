const express = require('express');

const projectController = require('../controllers/projectController.js');

const projectRouter = express.Router();
const taskRouter = require('./task.js');


projectRouter.use('/:projectName/task', taskRouter);

// Create a project in the database
// http://localhost:3000/project
projectRouter.post('/', projectController.createProject);

// Get ALL projects from the database
// http://localhost:3000/project/all
projectRouter.get('/all', projectController.getAllProjects);

// Get a project from the database
// http://localhost:3000/project/"title"
projectRouter.get('/:projectName', projectController.getProject);

// Edit a project (title and description)
// http://localhost:3000/project/"title"
projectRouter.patch('/:projectName', projectController.updateProject);

// Delete a project from the database
// // http://localhost:3000/project/"title"
projectRouter.delete('/:projectName', projectController.deleteProject);

module.exports = projectRouter;