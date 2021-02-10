const express = require('express');

const taskController = require('../controllers/taskController.js');

const taskRouter = express.Router();


taskRouter.use('/task', taskRouter);

// Create a project in the database
// http://localhost:3000/project
taskRouter.post('/', taskController.createTask);

// Get ALL projects from the database
// http://localhost:3000/project/all
taskRouter.get('/all', taskController.getAllTasks);

// Get a project from the database
// http://localhost:3000/project/"title"
taskRouter.get('/:taskName', taskController.getTask);

// Edit a project (title and description)
// http://localhost:3000/project/"title"
taskRouter.patch('/:taskName', taskController.updateTask);

// Delete a project from the database
// // http://localhost:3000/project/"title"
taskRouter.delete('/:taskName', taskController.deleteTask);

module.exports = taskRouter;