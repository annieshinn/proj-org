const express = require('express');

const controller = require('./controller.js');

const router = express.Router();

/// TASKS ///

// Create a task within a specified project
// http://localhost:3000/project/:projectName/task
router.post('/:projectName/task',
  controller.createTask,
  controller.updateProjectTasks
);

// router.delete('/:projectName/task/:taskName',
//   controller.deleteTask,
// );

/// PROJECTS ///


// Create a project in the database -> landing page
// http://localhost:3000/project
router.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/newProj.html'));
});

// Create a project in the database
// http://localhost:3000/project
router.post('/', controller.createProject);

// Get ALL projects from the database --> used to populate page
// http://localhost:3000/project/all
router.get('/all', controller.getAllProjects);

// Get a project from the database
// http://localhost:3000/project/"title"
router.get('/:projectName', controller.getProject);

// Edit a project (title and description)
// http://localhost:3000/project/"title"
router.patch('/:projectName', controller.updateProject);

// Delete a project from the database
// http://localhost:3000/project/"title"
router.delete('/:projectName', controller.deleteProject);

module.exports = router;