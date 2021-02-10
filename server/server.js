const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const projectController = require('./controllers/projectController')

const PORT = 3000;

mongoose.connect('mongodb+srv://dbUser:duckmon420@cluster0.enzre.mongodb.net/multi-proj-org?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection
  .once('open', () => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const projectRouter = express.Router();
app.use('/project', projectRouter);  

// Create a project in the database
// http://localhost:3000/project
projectRouter.post('/', projectController.createProject);

// Get ALL projects from the database
// http://localhost:3000/project/all
projectRouter.get('/all', projectController.getAllProjects);

// Get a project from the database
// http://localhost:3000/project/"title"
projectRouter.get('/:title', projectController.getProject);

// Edit a project (title and description)
// http://localhost:3000/project/"title"
projectRouter.patch('/:title', projectController.updateProject);

// Delete a project from the database
// // http://localhost:3000/project/"title"
projectRouter.delete('/:title', projectController.deleteProject);

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// serve index.html on the route '/'
app.get('/styles.css', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/styles.css'));
});

// // serve index.html on the route '/'
// app.get('/a', (req, res) => {
//   return res.status(200).send(studentRouter);
// });


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


// mongodb+srv://dbUser:duckmon420@cluster0.enzre.mongodb.net/multi-proj-org?retryWrites=true&w=majority