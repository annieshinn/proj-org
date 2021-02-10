const Model = require('../models/projectModels');
const ProjectModel = Model.ProjectModel;

const projectController = {

  createProject(req, res) {
    // console.log('req: ', req);
    const { title, description } = req.body;
    ProjectModel
      .create({title, description})
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
      .find({title: req.params.title})
      .then((data) => {
        console.log('/// Found project data: ', data);
        // return JUST THE FIRST of the array! (if multiple w/ sam etitle)
        return res.status(200).send(data[0]);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error finding/GET-ing project data'});
      });

  },

  updateProject(req, res) {
    const { title, description } = req.body;
    ProjectModel
      .findOneAndUpdate({title: req.params.title}, {title, description}, {new: true})
      .then((data) => {
        console.log('req.params.title: ', req.params.title);
        console.log('/// Updated project data: ', data);
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error updating/PATCH-ing all project data'});
      });

  },

  deleteProject(req, res) {
    ProjectModel
      .findOneAndDelete({title: req.params.title})
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