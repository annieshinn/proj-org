const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const projectController = require('./controller.js')
const projectRouter = require('./routes.js');

const PORT = 3000;

mongoose.connect('mongodb+srv://dbUser:duckmon420@cluster0.enzre.mongodb.net/multi-proj-org?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection
  .once('open', () => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTERS:
app.use('/project', projectRouter);

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
};

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// serve styles.css on the endpoint '/styles.css'
app.get('/styles.css', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/styles.css'));
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


// mongodb+srv://dbUser:duckmon420@cluster0.enzre.mongodb.net/multi-proj-org?retryWrites=true&w=majority