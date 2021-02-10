const Model = require('../models');
const ProjectModel = Model.ProjectModel;

const projectController = {

  createProject(req, res) {
    // console.log('req: ', req);
    const { projectName, description, tasks = [] } = req.body;
    ProjectModel
      .create({projectName, description, tasks})
      .then((data) => {
        console.log('/// Created project data: ', data);
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error creating/POST-ing project'});
      });

  },

  getAllProjects(req, res) {
    ProjectModel
      .find()
      .then((data) => {
        console.log('/// Found all project data: ', data);
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error finding/GET-ing all project data'});
      });

  },

  getProject(req, res) {
    ProjectModel
      .find({projectName: req.params.projectName})
      .then((data) => {
        console.log('/// Found project data: ', data);
        // return JUST THE FIRST of the array! (if multiple w/ same title)
        return res.status(200).send(data[0]);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error finding/GET-ing project data'});
      });

  },

  updateProject(req, res) {
    const { projectName, description } = req.body;
    ProjectModel
      .findOneAndUpdate({projectName: req.params.projectName}, {projectName, description}, {new: true})
      .then((data) => {
        console.log('req.params.projectName: ', req.params.projectName);
        console.log('/// Updated project data: ', data);
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error updating/PATCH-ing all project data'});
      });

  },

  deleteProject(req, res) {
    ProjectModel
      .findOneAndDelete({projectName: req.params.projectName})
      .then((data) => {
        console.log('/// Deleted project data: ', data);
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error DELETE-ing all project data'});
      });
  }
}

module.exports = projectController;